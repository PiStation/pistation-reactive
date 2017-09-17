import { INCREMENT_CONTROL } from '../constants';
import { ControlAction } from '../actions';
import { ControlWidgetState, RootState } from '../types';
import { combineReducers } from 'redux';
export const RootReducer = combineReducers<RootState>({
  controlWidget: controlWidgetReducer
});

function controlWidgetReducer(state: ControlWidgetState, action: ControlAction): ControlWidgetState {
  switch (action) {
    case INCREMENT_CONTROL:
    return 
  }
  
}