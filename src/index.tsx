import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');
console.log('process', process.env);
ReactDOM.render(<App />, rootEl);
