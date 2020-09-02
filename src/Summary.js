import React from 'react';
import { connect } from 'react-redux';
import { visibilityAction, clearCompleteAction } from './store/actionCreators';
import { NavLink } from 'react-router-dom';

function Summary({ completed, remaining, clearComplete }) {
    return (
        <footer className="footer">
            <span className="todo-count">{remaining} Item{remaining !== 1 ? 's' : ''} left</span>
            <div className="filters">
                <li><NavLink exact to="/" activeClassName="selected">All</NavLink></li>
                <li><NavLink exact to="/active" activeClassName="selected">Active</NavLink></li>
                <li><NavLink exact to="/completed" activeClassName="selected">Completed</NavLink></li>
            </div>
            <button className={`${!completed ? "hidden" : ""} clear-completed`} onClick={clearComplete}>Clear completed</button>                        
        </footer>
    );
}

function mapStateToProps(state) {
    const rem = state.todos.filter(todo => !todo.complete).length;
    return {
        remaining: rem,
        completed: state.todos.length - rem
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clearComplete: () => dispatch(clearCompleteAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);