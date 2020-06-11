import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import Contact from '../pages/contact/Contact.jsx';
import Detail from '../pages/detail/Detail.jsx';


export default class RouteConfig extends Component{
  render(){
    return(
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}