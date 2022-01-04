import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';

import Routes from './routes/index';
import './assets/styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Routes />
      </div>
    );
  }
}
console.log('process.env', process.env);
const appComponent = process.env.NODE_ENV === 'development' ? hot(App) : App;
export default appComponent;
