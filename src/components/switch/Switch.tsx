import * as React from 'react';
import { SwitchProps } from './props';
import styled from 'styled-components';
import { Toggler } from './toggler';

export const Switch: React.StatelessComponent<SwitchProps> = props => {
    return (
        <StyledSwitch>
            <SwitchInput
                type="checkbox"
                name={props.name}
                onChange={() => props.onSwitchChange()}
            />
            <Toggler 
                for={props.name} 
                enabled={props.enabled ? true : false} 
            />
            {props.children}
        </StyledSwitch>
    );
};

export const SwitchInput = styled.input`
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

export const StyledSwitch = styled.div`
width: 180px;
height: 55px;
position: relative;
margin: 100px auto;

.indicator-align-right {
    right: 0px;
    top: 17px;
    position: absolute;
}
`;
