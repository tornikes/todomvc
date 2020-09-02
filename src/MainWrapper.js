import React from 'react';
import FilteredTodoList from './FilteredTodoList';
import Summary from './Summary';
import { connect } from 'react-redux';

function MainWrapper({ display }) {
    return (
        <>
            {display && <>
                <FilteredTodoList />
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