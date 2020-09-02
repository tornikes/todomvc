import { CREATED_NEW_TODO, TODO_COMPLETION_TOGGLED, TODO_REMOVED, CLEAR_COMPLETED, TOGGLE_ALL, END_EDITING, START_EDITING } from './ActionTypes';
import { v4 } from 'uuid';

export default function todoReducer(state = [], action = {}) {
    switch (action.type) {
        case CREATED_NEW_TODO: {
            const str = action.payload.trim();
            if (str.length > 0) {
                return [
                    {
                        id: v4(),
                        task: str,
                        complete: false,
                        editing: false
                    },
                    ...state
                ];
            } else {
                return state;
            }
        }
        case TODO_COMPLETION_TOGGLED: return state.map(todo => {
            if (todo.id === action.payload) {
                return Object.assign({}, todo, { complete: !todo.complete });
            } else {
                return todo;
            }
        });
        case TODO_REMOVED: return state.filter(todo => todo.id !== action.payload);
        case CLEAR_COMPLETED: return state.filter(todo => !todo.complete);
        case TOGGLE_ALL: {
            const isEveryTodoComplete = state.every(todo => todo.complete);
            return state.map(todo => {
                return Object.assign({}, todo, { complete: !isEveryTodoComplete });
            });
        };
        case START_EDITING: return state.map(todo => {
            return Object.assign({}, todo, { editing: todo.id === action.payload });
        });
        case END_EDITING: {
            if (!action.payload.val.length) {
                return state.filter(todo => todo.id !== action.payload.id);
            } else {
                const nextState = state.map(todo => {
                    if (todo.id === action.payload.id) {
                        return Object.assign({}, todo, { editing: false, task: action.payload.val });
                    }
                    return Object.assign({}, todo, { editing: false });
                });
                return nextState;
            }
        }
        default: return state;
    }
}
