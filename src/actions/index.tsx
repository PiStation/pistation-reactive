import { MQTTServerConfig } from '../types/index';
import * as constants from '../constants';

export type ControlAction = IncrementControl | DecrementControl | EnableControl | DisableControl;
export type ServerAction = AddServerConfig;
export type ControlBoardAction = AddControlToBoard;

export interface AddControlToBoard {
  
}

export interface IncrementControl {
  type: constants.INCREMENT_CONTROL;
}
export interface DecrementControl {
  type: constants.DECREMENT_CONTROL;
}
export interface EnableControl {
  type: constants.ENABLE_CONTROL;
}
export interface DisableControl {
  type: constants.DISABLE_CONTROL;
}
export interface AddServerConfig {
  type: constants.ADD_SERVER_CONFIG;
  config: MQTTServerConfig;
}

export function incrementControl(): IncrementControl {
  return {
    type: constants.INCREMENT_CONTROL
  };
}
export function decrementControl(): DecrementControl {
  return {
    type: constants.DECREMENT_CONTROL
  };
}
export function enableControl(): EnableControl {
  return {
    type: constants.ENABLE_CONTROL
  };
}
export function disableControl(): DisableControl {
  return {
    type: constants.DISABLE_CONTROL
  };
}
export function addServerConfig(server: MQTTServerConfig) {
  return {
    type: constants.ADD_SERVER_CONFIG,
    config: server
  };
}