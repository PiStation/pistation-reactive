import * as React from 'react';
import { ControlWidgetState } from '../../types/index';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import { Dispatch } from 'redux';
import styled from 'styled-components';

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
  state = {
    enabled: true,
    level: 0
  };
  render() {
    return (
      <StyledSwitch>
        <SwitchInput
         type="checkbox"
         name="toggle"
         onChange={() => this.onSwitchChange()}
        />
        <Toggler for="toggle" enabled={this.props.enabled ? true : false} />
        <SwitchIndicator indicate={this.props.enabled ? true : false}/>
      </StyledSwitch>
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

const SwitchInput = styled.input`
  top: 0; 
  right: 0; 
  bottom: 0; 
  left: 0;
  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -moz-opacity: 0;
  opacity: 0;
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
const StyledSwitch = styled.div`
width: 180px;
height: 55px;
position: relative;
margin: 100px auto;
`;
const SwitchLabel = styled.label`
display: block;
width: 80%;
height: 100%;
position: relative;
background: #1F2736; /*#121823*/
  background: linear-gradient(#121823, #161d2b);
border-radius: 30px 30px 30px 30px;
box-shadow:
      inset 0 3px 8px 1px rgba(0,0,0,0.5),
      inset 0 1px 0 rgba(0,0,0,0.5),
      0 1px 0 rgba(255,255,255,0.2);
  -webkit-transition: all .5s ease;
transition: all .5s ease;
i {
  display: block;
  height: 51px;
  width: 51px;
  position: absolute;
  left: 2px;
  top: 2px;
  z-index: 2;
  border-radius: inherit;
  background: #283446; /* Fallback */
  background: linear-gradient(#36455b, #283446);
  box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.2),
      0 0 8px rgba(0,0,0,0.3),
      0 12px 12px rgba(0,0,0,0.4);
-webkit-transition: all .5s ease;
transition: all .5s ease;
}
i.enabled {
  left: auto;
  left: 63%;
box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.2),
      0 0 8px rgba(0,0,0,0.3),
      0 8px 8px rgba(0,0,0,0.3),
  inset -1px 0 1px #b9f3fe;

-webkit-transition: all .5s ease;
transition: all .5s ease;
}
`;

interface InidcatorProps {
  indicate: boolean;
  className?: string;
}

const Indicator = styled.span`
  content: "";
display: inline-block;
position: absolute;
right: 0px;
top: 17px;
width: 18px;
height: 18px;
border-radius: 10px;
background: #283446; 
background: gradient-gradient(#36455b, #283446);
box-shadow:
    inset 0 1px 0 rgba(0,0,0,0.2),
    0 1px 0 rgba(255,255,255,0.1),
    0 0 10px rgba(185,231,253,0),
inset 0 0 8px rgba(0,0,0,0.9),
inset 0 -2px 5px rgba(0,0,0,0.3),
inset 0 -5px 5px rgba(0,0,0,0.5);
 -webkit-transition: all .5s ease;
transition: all .5s ease;
z-index: 2;
&.indicate {
  content: "";
	display: inline-block;
	position: absolute;
	width: 18px;
	height: 18px;
	border-radius: 10px;
	-webkit-transition: all .5s ease;
	transition: all .5s ease;
	z-index: 2;
	background: #b9f3fe; 
background: gradient-gradient(#ffffff, #77a1b9);
box-shadow:        
		  inset 0 1px 0 rgba(0,0,0,0.1),
		  0 1px 0 rgba(255,255,255,0.1),
		  0 0 10px rgba(100,231,253,1),
		  inset 0 0 8px rgba( 61,157,247,0.8),
  inset 0 -2px 5px rgba(185,231,253,0.3),
  inset 0 -3px 8px rgba(185,231,253,0.5);
}
`;

const SwitchIndicator: React.StatelessComponent<InidcatorProps> = props => (
  <Indicator className={props.indicate ? 'indicate' : ''}>&nbsp;</Indicator>);

interface ToggleElementProps {
  enabled: boolean;
  for?: string;
}

const Toggler: React.StatelessComponent<ToggleElementProps> = props => {
  return (
    <SwitchLabel htmlFor={props.for}><i className={props.enabled ? 'enabled' : ''}>&nbsp;</i></SwitchLabel>
  );
};

export default connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(StateControlWidget);