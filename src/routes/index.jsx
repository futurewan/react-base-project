import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const loading = () => <div> loading... </div>;
const Home = Loadable({ loader: () => import(/* webpackChunkName: "Home" */ '../pages/home/Home'), loading });
const Contact = Loadable({ loader: () => import(/* webpackChunkName: "Contact" */ '../pages/contact/Contact'), loading });
const Detail = Loadable({ loader: () => import(/* webpackChunkName: "Detail" */ '../pages/detail/Detail'), loading });
const Shopping = Loadable({ loader: () => import(/* webpackChunkName: "ShoppingPage" */ '../pages/shopping/ShoppingPage'), loading });

const RouteConfig = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/shopping" component={Shopping} />
      <Route path="/contact" component={Contact} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  </BrowserRouter>
);
export default RouteConfig;
