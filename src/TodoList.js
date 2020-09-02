import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleComplete, removeTodo, onStartEditing, onEndEditing, onToggleAll }) {
    return (
        <section className="main">
            <input type="checkbox" id="toggle-all" className="toggle-all" />
            <label htmlFor="toggle-all" onClick={onToggleAll}></label>
            <ul className="todo-list">
                { !!todos.length && todos.map(todo => 
                    <TodoItem 
                        {...todo} 
                        key={todo.id}
                        onToggleComplete={() => toggleComplete(todo.id)}
                        onRemoveTodo={() => removeTodo(todo.id)}
                        onStartEditing={() => onStartEditing(todo.id)}
                        onEndEditing={(id, val) => onEndEditing(id, val)}
                    />    
                )}
            </ul>
        </section>
    );
}
