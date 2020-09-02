import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoCreatedAction, toggleAll } from './store/actionCreators';


function TodoInput({ onNewTodo, onToggleAll }) {

    const [inputVal, setInputVal] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onNewTodo(inputVal);
        setInputVal('');
    }
    
    return (
        <header className="header">
            <h1>todos</h1>
            <form className="input-wrapper" onSubmit={e => handleSubmit(e)}>               
                    <input 
                        type="text" 
                        placeholder="What needs to be done?"
                        className="new-todo"
                        value={inputVal} 
                        onChange={e => setInputVal(e.target.value)} 
                    />               
            </form>           
        </header>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        onNewTodo: text => dispatch(todoCreatedAction(text)),
        onToggleAll: () => dispatch(toggleAll())
    };
}

export default connect(null, mapDispatchToProps)(TodoInput);