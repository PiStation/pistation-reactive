import * as React from 'react';
import styled from 'styled-components';
import * as classNames from 'classnames';

export type IndicateTypes = 'error' | 'warningn' | 'loading';

export interface InidcatorProps {
  indicate: boolean | IndicateTypes;
  className?: string;
}

const Indicator: React.StatelessComponent<InidcatorProps> = props => (
  <span 
    className={props.className + ' ' + classNames({ 
      'indicate': props.indicate !== false,
      })}
  > &nbsp; 
  </span>);

const SwitchIndicator = styled(Indicator)`
  content: "";
  display: inline-block;
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
    background: ${props => props.indicate === 'error' ? 'red' : '#b9f3fe'}; 
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
export default SwitchIndicator;