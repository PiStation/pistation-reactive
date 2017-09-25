import { combineReducers, createStore } from 'redux';
import { controlWidget, serverConfig } from './reducers/index';

const reducer = combineReducers({
  controlWidget,
  serverConfig
});

export const store = createStore(reducer);

export default store;