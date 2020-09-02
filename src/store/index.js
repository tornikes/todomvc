import { createStore, combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityReducer from './visibilityReducer';

export default createStore(combineReducers({
    todos: todoReducer,
    visibility: visibilityReducer
}));