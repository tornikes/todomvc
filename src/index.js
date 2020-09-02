import React from 'react';
import { render } from 'react-dom';
import App from './App';
import '../node_modules/todomvc-app-css/index.css';

window.React = React;

render(<App />, document.getElementById('app-root'));