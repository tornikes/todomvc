import React from 'react';
import TodoInput from './TodoInput';
import MainWrapper from './MainWrapper';
import store from './store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <TodoInput />
                <MainWrapper />
            </Router>
        </Provider>
    );
}
