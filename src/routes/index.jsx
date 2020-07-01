import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import Detail from '../pages/detail/Detail';
import Shopping from '../pages/shopping/ShoppingPage'

export default class RouteConfig extends Component{
  render(){
    return(
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/shopping" component={Shopping}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}