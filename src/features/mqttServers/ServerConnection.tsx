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
        onAddServer: (server) => dispatch(addServerConfig(server))
    };
}

class ServerConnectionIndicator extends React.Component<ServerConnectionProps, ServerListState> {
    client: MqttClient;
    state = {
        editServerAddressDialogOpen: false,
        connected: false
    };
    
    constructor() {
        super();    
    }
    componentWillMount() {
        const {server} = this.props;

        if (server) {
            this.connectMqttClient(server.address);
        }
    }
    onClientConnect() {
        this.setState({connected: true});
    }
    connectMqttClient(serverAddress: string) {
        this.client = connectClient(serverAddress);
        this.client.on('connect', () => this.onClientConnect());
        this.client.on('close', () => this.onDisconnect());
    }
    onDisconnect() {
        this.setState({
            connected: false
        });
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
        if (this.props.onAddServer) {
            this.props.onAddServer(server);
        }
        this.setState({connected: false});
        this.connectMqttClient(server.address);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerConnectionIndicator);