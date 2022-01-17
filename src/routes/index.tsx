import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Loading = <div> loading... </div>;
const Home = React.lazy(() => import(/* webpackChunkName: "Home" */ '../pages/home/Home'));
const Contact = React.lazy(() => import(/* webpackChunkName: "Contact" */ '../pages/contact/Contact'));
const Detail = React.lazy(() => import(/* webpackChunkName: "Detail" */ '../pages/detail/Detail'));
const Shopping = React.lazy(() => import(/* webpackChunkName: "ShoppingPage" */ '../pages/shopping/ShoppingPage'));

function RouteConfig() {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={Loading}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default RouteConfig;
