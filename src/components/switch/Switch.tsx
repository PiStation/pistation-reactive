import * as React from 'react';
import styled from 'styled-components';

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

export const SwitchLabel = styled.label`
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
export interface ToggleElementProps {
    enabled: boolean;
    for?: string;
}

export const Toggler: React.StatelessComponent<ToggleElementProps> = props => {
    return (
        <SwitchLabel htmlFor={props.for}><i className={props.enabled ? 'enabled' : ''}>&nbsp;</i></SwitchLabel>
    );
};
export interface SwitchProps {
    enabled: boolean;
    children?: React.ReactNode;
    onSwitchChange: () => void;
}

export const Switch: React.StatelessComponent<SwitchProps> = props => {
    return (
        <StyledSwitch>
            <SwitchInput
                type="checkbox"
                name="toggle"
                onChange={() => props.onSwitchChange()}
            />
            <Toggler for="toggle" enabled={props.enabled ? true : false} />
            {props.children}
        </StyledSwitch>
    );
};
export default SwitchInput;