import { MQTTServerConfig, RootState } from '../../types/index';
import * as React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { EditServerConfigButton } from './EditServerAddressDialog';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddServerConfig, addServerConfig } from '../../actions/index';
import { MqttClient, connect as connectClient } from 'mqtt';

interface ServerConnectionProps {
    server: MQTTServerConfig;
    onAddServer?: (server: MQTTServerConfig) => void;
    onConnect?: (server: MQTTServerConfig) => void;
}

interface ServerListState {
    editServerAddressDialogOpen: boolean;
    connected: boolean;
}

function mapStateToProps({serverConfig}: RootState): ServerConnectionProps {
    return {
        server: serverConfig
    };
}

function mapDispatchToProps(dispatch: Dispatch<AddServerConfig>): Partial<ServerConnectionProps> {
    return {
        onAddServer: (server) => dispatch(addServerConfig(server)),
        onConnect: (server) => dispatch(addServerConfig(server))
    };
}

class ServerConnectionIndicator extends React.Component<ServerConnectionProps, ServerListState> {
    mqtt: MqttClient;
    state = {
        editServerAddressDialogOpen: false,
        connected: false
    };
    
    constructor() {
        super();    
    }
    componentWillRender() {
        const {server} = this.props;
        if (server) {
            this.connectMqttClient(server.address);
        }
    }
    
    onClientConnect() {
        this.setState({connected: true});
    }
    componentWillUnmount() {
        this.mqtt.end();
    }
    
    onDisconnect() {
        this.setState({
            connected: false
        });
    }
    connectMqttClient(serverAddress: string) {
        this.mqtt = connectClient(serverAddress);
        this.mqtt.on('connect', () => this.onClientConnect());
        this.mqtt.on('close', () => this.onDisconnect());
    }
    render() {
        return (
            <Menu>
                {this.currentServerName()}
                <EditServerConfigButton onEdit={(server) => this.onServerAdded(server)}/>;
            </Menu>
        );            

    }

    currentServerName() {
        if (this.props.server) {
            return (
            <MenuItem 
                text={this.postFixServerNameWhenOnline(this.props.server.name)} 
                key={this.props.server.name} 
            />);
        } 

        return <MenuItem text="No server configured yet" key="empty" />;
    }

    postFixServerNameWhenOnline(serverName: string) {
        return `${serverName} ${this.state.connected ? '(Online)' : '(Offline)'}`;
    }
    onServerAdded(server: MQTTServerConfig) {
        this.setState({connected: false});
        this.connectMqttClient(server.address);
        if (this.props.onAddServer) {
            this.props.onAddServer(server);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerConnectionIndicator);