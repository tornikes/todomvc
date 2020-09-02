import { CREATED_NEW_TODO, TODO_COMPLETION_TOGGLED, TODO_REMOVED, VISIBILITY_ACTIVE, VISIBILITY_ALL, VISIBILITY_COMPLETED, CLEAR_COMPLETED, TOGGLE_ALL, START_EDITING, END_EDITING } from './ActionTypes';

export function todoCreatedAction(text) {
    return {
        type: CREATED_NEW_TODO,
        payload: text
    };
}

export function toggleCompleteAction(id) {
    return {
        type: TODO_COMPLETION_TOGGLED,
        payload: id
    };
}

export function removeTodoAction(id) {
    return {
        type: TODO_REMOVED,
        payload: id
    };
}

export function toggleAll() {
    return {
        type: TOGGLE_ALL
    }
}

export function visibilityAction(visibilty) {
    let vis;
    if(visibilty === "Completed") {
        vis = VISIBILITY_COMPLETED;
    } else if(visibilty === "Active") {
        vis = VISIBILITY_ACTIVE;
    } else {
        vis = VISIBILITY_ALL;
    }

    return {
        type: vis
    }
}

export function clearCompleteAction() {
    return {
        type: CLEAR_COMPLETED
    }
}

export function startEditingTodo(id) {
    return {
        type: START_EDITING,
        payload: id
    }
}

export function endEditing(id, val) {
    return {
        type: END_EDITING,
        payload: {
            id,
            val
        }
    };
}