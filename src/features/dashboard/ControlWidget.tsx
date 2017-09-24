import * as React from 'react';
import { Switch } from '@blueprintjs/core';
import { ControlWidgetState } from '../../types/index';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import { Dispatch } from 'redux';

type Props = {
  enabled?: boolean;
  level?: number;
  onChange?: (isEnabled: boolean) => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onEnable?: () => void;
  onDisable?: () => void;
};

class StateControlWidget extends React.Component<Props, ControlWidgetState> {
  render() {
    return (
      <div className="container">
      <Switch 
        checked={this.props.enabled} 
        label={this.getStateLabel()} 
        onChange={(e) => this.onSwitchChange(e)} 
      />
    </div>
    );
  }
  
  getStateLabel(): string {
    if (this.props.level) {
      return `${this.props.level}%`;
    }
    return this.props.enabled ? 'On' : 'Device off';
  }
  
  onSwitchChange(e: React.FormEvent<HTMLInputElement>): void {
    const {enabled} = this.props; 
    if (enabled && this.props.onEnable) {
      this.props.onEnable();
    }  else if (this.props.onDisable) {
      this.props.onDisable();
    }
    if (this.props.onChange && enabled) {
      this.props.onChange(enabled);
    }
  }
} 
export function mapStateToProps({enabled, level}: ControlWidgetState) {
  return {
      enabled,
      level
  };
}
export function mapDispatchToProps(dispatch: Dispatch<actions.ControlAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementControl()),
    onDecrement: () => dispatch(actions.decrementControl()),
    onEnable: () => dispatch(actions.disableControl()),
    onDisable: () => dispatch(actions.enableControl()),

  };
}
export default connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(StateControlWidget);