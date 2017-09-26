import { defaultServerConfig } from '../features/mqttServers/config';
import { ADD_SERVER_CONFIG } from '../constants/index';
import { ServerAction } from '../actions/index';
import { MQTTServerConfig } from '../types/index';
import { ENABLE_CONTROL, DISABLE_CONTROL } from '../constants';
import { ControlAction } from '../actions';
import { ControlWidgetState, RootState } from '../types';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers<RootState>({
  controlWidget,
  serverConfig
});

const initialState: ControlWidgetState = {
      enabled: false,
      level: 1
};

export function controlWidget(state: ControlWidgetState = initialState, action: ControlAction): ControlWidgetState {
  switch (action.type) {
    case ENABLE_CONTROL:
    return {... state, enabled: true};
    case DISABLE_CONTROL:
      return {...state, enabled: false};
    default:
      return state;
  }
}

export function serverConfig(state: MQTTServerConfig = defaultServerConfig, action: ServerAction): MQTTServerConfig {
  switch (action.type) {
    case ADD_SERVER_CONFIG: 
    console.log('new store state', {...action.config});
    return {...action.config};
    default:
    return state;
  }
}