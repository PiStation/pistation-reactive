import { ENABLE_CONTROL, DISABLE_CONTROL } from '../constants';
import { ControlAction } from '../actions';
import { ControlWidgetState, RootState } from '../types';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers<RootState>({
  controlWidget
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