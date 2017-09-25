import { MQTTServerConfig } from '../../types/index';
import { Button, Dialog, Intent, MenuItem } from '@blueprintjs/core';
import * as React from 'react';
interface ManageServersPopoverState {
    isOpen: boolean;
    server: Partial<MQTTServerConfig>;    
}
interface AddServerListItemProps {
    onClose: (server: MQTTServerConfig) => void;
}
export class AddServerListItem extends React.Component<AddServerListItemProps, ManageServersPopoverState> {
    state = { 
        isOpen: false,
        server: {
            name: '',
            address: '',
        }
     };
 
    render() {
        return (
            <div>
                <MenuItem
                    iconName="new-text-box"
                    onClick={() => this.toggleDialog()}
                    text="New MQTT server"
                    key="add"
                />                
                <Dialog
                    iconName="settings"
                    isOpen={this.state.isOpen}
                    onClose={this.toggleDialog}
                    title="Add MQTT Servers"
                >
                    <div className="pt-dialog-body">
                  
                        <div className="pt-form-group">
                            <label className="pt-label" htmlFor="example-form-group-input-a">
                                Server name:
                                <span className="pt-text-muted">(required)</span>
                            </label>
                            <div className="pt-form-content">
                                <input 
                                    className="pt-input" 
                                    name="name"
                                    placeholder="mqtt://my-mqtt-broker.local" 
                                    type="text" 
                                    defaultValue={this.state.server.name}
                                    dir="auto" 
                                    onChange={(e) => this.handleInputChange(e)}
                                />
                                <div className="pt-form-helper-text">Helper text with details / user feedback</div>
                            </div>
                        </div>
                        <div className="pt-form-group">
                            <label className="pt-label" htmlFor="example-form-group-input-a">
                                MQTT broker address:
                                <span className="pt-text-muted">(required)</span>
                            </label>
                            <div className="pt-form-content">
                                <input 
                                    className="pt-input" 
                                    name="address"
                                    placeholder="mqtt://my-mqtt-broker.local" 
                                    type="text" 
                                    defaultValue={this.state.server.address}
                                    dir="auto" 
                                    onChange={(e) => this.handleInputChange(e)}
                                />
                                <div className="pt-form-helper-text">Helper text with details / user feedback</div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-dialog-footer">
                        <div className="pt-dialog-footer-actions">
                            <Button text="Cancel" />
                            <Button
                                intent={Intent.PRIMARY}
                                onClick={() => this.dispatchSaveAction()}
                                text="Save"
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
    private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const propname = target.name;
        this.setState({
            ...this.state,
            server: {
                ...this.state.server,
              [propname]: target.value,
            }
        });
    }
    private dispatchSaveAction = () => {
        console.log('hoi', this.state);
        this.props.onClose(this.state.server);
        this.toggleDialog();
        this.setState({server: {}});
    }
    private toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });
}