import React, { Component } from 'react';

export default class Contact extends Component {
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
      </div>
    );
  }
}