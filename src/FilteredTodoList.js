import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { toggleCompleteAction, removeTodoAction, startEditingTodo, endEditing, toggleAll } from './store/actionCreators';

function FilteredTodoList({ visibilityFilter, todos, toggleComplete, removeTodo, onStartEditing, onEndEditing, onToggleAll }) {
    const toShow = 
        visibilityFilter === "Completed" ? todos.filter(todo => todo.complete) 
                        : visibilityFilter === "Active" ? todos.filter(todo => !todo.complete)
                        : todos;
    return (
        <TodoList 
            todos={toShow}
            toggleComplete={toggleComplete}
            onToggleAll={onToggleAll}
            removeTodo={removeTodo}
            onStartEditing={onStartEditing}
            onEndEditing={onEndEditing}
        />
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        visibilityFilter: state.visibility
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleComplete: id => dispatch(toggleCompleteAction(id)),
        removeTodo : id => dispatch(removeTodoAction(id)),
        onStartEditing: id => dispatch(startEditingTodo(id)),
        onEndEditing: (id, val) => dispatch(endEditing(id, val)),
        onToggleAll: () => dispatch(toggleAll())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(FilteredTodoList);