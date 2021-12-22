import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Loading = <div> loading... </div>;
const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '../pages/home/Home'));
const Contact = React.lazy(() => import(/* webpackChunkName: "Contact" */ '../pages/contact/Contact'));
const Detail = React.lazy(() => import(/* webpackChunkName: "Detail" */ '../pages/detail/Detail'));
const Shopping = React.lazy(() => import(/* webpackChunkName: "ShoppingPage" */ '../pages/shopping/ShoppingPage'));

const RouteConfig = () => (
  <BrowserRouter basename="/">
    <Suspense fallback={Loading}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/contact" component={Contact} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default RouteConfig;
