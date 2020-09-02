import { createStore, combineReducers } from 'redux';
import todoReducer from './todoReducer';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(combineReducers({
    todos: todoReducer
}), persistedState);

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));

export default store;