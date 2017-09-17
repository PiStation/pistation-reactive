import * as React from 'react';
import { Switch } from '@blueprintjs/core';
interface Props {
  enabled: boolean;
  level?: number;
  onChange?: (isEnabled: boolean) => void;
}
interface State {
  isEnabled: boolean;
}
export class StateControlWidget extends React.Component<Props, State> {
 state: State = {
   isEnabled: this.props.enabled
 };
  render() {
    return (
    <div className="container">
      <Switch 
        checked={this.state.isEnabled} 
        label={this.getStateLabel()} 
        onChange={() => this.onSwitchChange()} 
      />
    </div>
    );
  }

  getStateLabel(): string {
    if (this.props.level) {
      return `${this.props.level}%`;
    }
    return this.state.isEnabled ? 'On' : 'Device off';
  }

  onSwitchChange(): void {
    const {isEnabled} = this.state; 
    this.setState({isEnabled: !isEnabled});
    
    if (this.props.onChange) {
      this.props.onChange(isEnabled);
    }
  }
}