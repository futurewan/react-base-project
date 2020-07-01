import React, { Component } from 'react';
import Counter from './components/Counter'
import { createStore } from 'redux';

import counter from './reducers';
const store = createStore(counter);

export default class Detail extends Component {
  state={
    id:null
  }
  componentDidMount(){
    console.log(this.props)
    this.setState({
      id:this.props.match.params.id
    })
  }

  render() {
    const { id } =this.state; 
    return (
      <div className="tc">
        <div>详情{id}</div>
        <Counter 
          value={store.getState()}
          onIncrement={()=> store.dispatch({type:'INCREMENT'})}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}

        />
      </div>
    );
  }
}