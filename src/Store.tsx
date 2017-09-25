import { combineReducers, createStore } from 'redux';
import { controlWidget, serverList } from './reducers/index';

const reducer = combineReducers({
  controlWidget,
  serverList
});

export const store = createStore(reducer);

export default store;