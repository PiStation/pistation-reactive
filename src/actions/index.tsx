import * as constants from '../constants';

export interface IncrementControl {
  type: constants.INCREMENT_CONTROL;
}
export interface DecrementControl {
  type: constants.DECREMENT_CONTROL;
}

export type ControlAction = IncrementControl | DecrementControl;

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