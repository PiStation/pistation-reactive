import * as React from 'react';
import { Menu } from '@blueprintjs/core';
import { AddServerListItem } from './EditServerAddressDialog';

interface ServerlistProps {

}

interface ServerListState {
    editServerAddressDialogOpen: boolean;
}

export class ServerList extends React.Component<ServerlistProps, ServerListState> {
    render() {
        return (
            <Menu>
               <AddServerListItem />
            </Menu>
        );            

    }
}