import React from 'react';
import FilteredTodoList from './FilteredTodoList';
import Summary from './Summary';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

function MainWrapper({ display }) {
    return (
        <>
            {display && <>
                <Route path="/" exact  component={FilteredTodoList} />
                <Route path="/active" exact  component={FilteredTodoList} />
                <Route path="/completed" exact  component={FilteredTodoList} />
                <Summary />
            </>}
        </>
    );
}

function mapStateToProps(state) {
    return {
        display: state.todos.length > 0
    }
}

export default connect(mapStateToProps)(MainWrapper);