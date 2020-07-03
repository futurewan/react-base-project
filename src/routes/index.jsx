import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const loading = () => {
  return ( 
    <div> loading... </div>
  )
}
const Home = Loadable({loader: () => import(/* webpackChunkName: "Home" */ '../pages/home/Home'),loading:loading});
const Contact = Loadable({loader: () => import(/* webpackChunkName: "Contact" */ '../pages/contact/Contact'),loading:loading});
const Detail = Loadable({loader: () => import(/* webpackChunkName: "Detail" */ '../pages/detail/Detail'),loading:loading});
const Shopping = Loadable({loader: () => import(/* webpackChunkName: "ShoppingPage" */ '../pages/shopping/ShoppingPage'),loading:loading});


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