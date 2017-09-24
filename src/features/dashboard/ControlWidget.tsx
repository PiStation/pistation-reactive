import SwitchIndicator from '../../components/indicator/index';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../../actions/';
import { Switch } from '../../components/switch';
import { ControlWidgetState } from '../../types/index';

type Props = {
  enabled: boolean;
  level?: number;
  onChange?: (isEnabled: boolean) => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onEnable?: () => void;
  onDisable?: () => void;
};

class StateControlWidget extends React.Component<Props, ControlWidgetState> {
  state = {
    enabled: true,
    level: 0
  };
  render() {
    return (
      <Switch enabled={this.props.enabled} onSwitchChange={() => this.onSwitchChange()}>
        <SwitchIndicator indicate={this.props.enabled ? true : 'error'} className="indicator-align-right"/>
      </Switch>
    );
  }
  
  getStateLabel(): string {
    if (this.props.level) {
      return `${this.props.level}%`;
    }
    return this.props.enabled ? 'On' : 'Device off';
  }
  
  onSwitchChange(): void {
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