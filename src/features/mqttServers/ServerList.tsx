import { MQTTServerConfig, RootState } from '../../types/index';
import * as React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { AddServerListItem } from './EditServerAddressDialog';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AddServerConfig, addServerConfig } from '../../actions/index';

interface ServerlistProps {
    serverList: MQTTServerConfig[];
    onAddServer?: (server: MQTTServerConfig) => void;
}

interface ServerListState {
    editServerAddressDialogOpen: boolean;
    serverList: MQTTServerConfig[];
}

function mapStateToProps({serverList}: RootState): ServerlistProps {
    return {
       serverList
    };
}

function mapDispatchToProps(dispatch: Dispatch<AddServerConfig>): Partial<ServerlistProps> {
    return {
        onAddServer: (server) => dispatch(addServerConfig(server))
    };
}
class ServerList extends React.Component<ServerlistProps, ServerListState> {
    state = {
        serverList: this.props.serverList ? this.props.serverList : [],
        editServerAddressDialogOpen: false
    };
    render() {
        console.log('render list', this.props);
        return (
            <Menu>
                { this.props.serverList ?
                 this.props.serverList
                    .map((server: MQTTServerConfig) => (<MenuItem text={server.name} key={server.name} />)) : ''}
               <AddServerListItem onClose={(server) => this.onServerAdded(server)}/>
            </Menu>
        );            

    }

    onServerAdded(server: MQTTServerConfig) {
        if (this.props.onAddServer) {
            console.log('onServerAdd', server);
            this.props.onAddServer(server);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerList);