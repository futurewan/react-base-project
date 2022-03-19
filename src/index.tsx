import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// require('./mock');
// if (process.env.NODE_ENV !== 'production') require('./mock');
console.log('process.env', process.env);
const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);
