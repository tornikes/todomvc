import { VISIBILITY_ACTIVE, VISIBILITY_ALL, VISIBILITY_COMPLETED } from './ActionTypes';

export default function visibilityReducer(state = "All", action = {}) {
    switch(action.type) {
        case VISIBILITY_ALL: return "All";
        case VISIBILITY_ACTIVE: return "Active";
        case VISIBILITY_COMPLETED: return "Completed";
        default: return state;
    }
}