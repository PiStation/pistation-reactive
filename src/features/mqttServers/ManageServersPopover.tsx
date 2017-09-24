import { Button, Dialog, Intent, Menu, MenuItem } from '@blueprintjs/core';
import * as React from 'react';
interface ManageServersPopoverState {
    isOpen: boolean;
}
 
export class ManageServersPopover extends React.Component<{}, ManageServersPopoverState> {
    state = { isOpen: false };
 
    render() {
        return (
            <div>
                <Button onClick={this.toggleDialog} text="Show dialog" />
                <Dialog
                    iconName="inbox"
                    isOpen={this.state.isOpen}
                    onClose={this.toggleDialog}
                    title="Manage MQTT Channels"
                >
                    <div className="pt-dialog-body">
                        <Menu>
                            <MenuItem
                                iconName="new-text-box"
                                onClick={() => alert(1)}
                                text="New MQTT server"
                            />
                        </Menu>
                        <div className="pt-form-group">
                            <label className="pt-label" htmlFor="example-form-group-input-a">
                                MQTT server address:
                                <span className="pt-text-muted">(required)</span>
                            </label>
                            <div className="pt-form-content">
                                <input 
                                    className="pt-input" 
                                    placeholder="mqtt://my-mqtt-broker.local" 
                                    type="text" 
                                    dir="auto" 
                                />
                                <div className="pt-form-helper-text">Helper text with details / user feedback</div>
                            </div>
                            </div>
                    </div>
                    <div className="pt-dialog-footer">
                        <div className="pt-dialog-footer-actions">
                            <Button text="Secondary" />
                            <Button
                                intent={Intent.PRIMARY}
                                onClick={this.toggleDialog}
                                text="Primary"
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
 
    private toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });
}