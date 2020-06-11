import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Routes from './routes/index.jsx';
import './assets/styles/app.scss';
import { Routers } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Routes />
      </div>
    );
  }
}
console.log('process.env.NODE_ENV',process.env.NODE_ENV)
const appComponent = process.env.NODE_ENV === 'development' ? hot(App) : App;
export default appComponent;
