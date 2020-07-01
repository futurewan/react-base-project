import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './redux/index';

const rootEl = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, rootEl);