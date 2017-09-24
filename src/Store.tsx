import { ControlWidgetState } from './types/index';
import { createStore } from 'redux';
import { controlWidget } from './reducers/index';

export const store = createStore<ControlWidgetState>(controlWidget);

export default store;