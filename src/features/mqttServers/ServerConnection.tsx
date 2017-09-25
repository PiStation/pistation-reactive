import { MQTTServerConfig, RootState } from '../../types/index';
import * as React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { EditServerConfigButton } from './EditServerAddressDialog';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddServerConfig, addServerConfig } from '../../actions/index';

interface ServerConnectionProps {
    server: MQTTServerConfig;
    onAddServer?: (server: MQTTServerConfig) => void;
}

interface ServerListState {
    editServerAddressDialogOpen: boolean;
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
    state = {
        editServerAddressDialogOpen: false,
    };
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
            return <MenuItem text={this.props.server.name} key={this.props.server.name} />;
        } 
    
        return <MenuItem text="No server configured yet" key="empty" />;
    }
    onServerAdded(server: MQTTServerConfig) {
        if (this.props.onAddServer) {
            this.props.onAddServer(server);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerConnectionIndicator);