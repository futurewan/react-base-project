import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import './assets/styles/app.scss';

class App extends Component {
  state = {
    count: 1,
    name: 'react',
  };
  addCount=()=>{
    this.setState((preState)=>{
      return{
        count:preState.count+1
      }
    })
  }
  render() {
    const { name, count } = this.state;
    return (
      <div className="container">
        <div>
          <span>{count}</span>
          <button onClick={this.addCount}>add+</button>
        </div>
        <h1>
          <span>hello--{name}</span>
        </h1>
      </div>
    );
  }
}
export default hot(App);
