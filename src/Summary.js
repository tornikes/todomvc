import React from 'react';
import { connect } from 'react-redux';
import { visibilityAction, clearCompleteAction } from './store/actionCreators';

function Summary({ completed, remaining, visibility, setVisibility, clearComplete }) {
    return (
        <footer className="footer">
            <span className="todo-count">{remaining} Item{remaining !== 1 ? 's' : ''} left</span>
            <ul className="filters">
                <li onClick={() => setVisibility("All")} className={visibility === "All" ? "active" : ""} href="#"><a>All</a></li>
                <span />
                <li onClick={() => setVisibility("Active")} className={visibility === "Active" ? "active" : ""} href="#"><a>Active</a></li>
                <span />
                <li onClick={() => setVisibility("Completed")} className={visibility === "Completed" ? "active" : ""} href="#"><a>Completed</a></li>
            </ul>            
            <button className={`${!completed ? "hidden" : ""} clear-completed`} onClick={clearComplete}>Clear completed</button>                        
        </footer>
    );
}

function mapStateToProps(state) {
    const rem = state.todos.filter(todo => !todo.complete).length;
    return {
        remaining: rem,
        completed: state.todos.length - rem,
        visibility: state.visibility
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setVisibility: v => dispatch(visibilityAction(v)),
        clearComplete: () => dispatch(clearCompleteAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);