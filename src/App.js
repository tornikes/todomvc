import React from 'react';
import TodoInput from './TodoInput';
import MainWrapper from './MainWrapper';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
            <TodoInput />
            <MainWrapper />
        </Provider>
    );
}
