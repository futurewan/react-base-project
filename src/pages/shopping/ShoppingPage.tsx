import React from 'react';

import Products from './containers/ProductsContainer';
import Cart from './containers/CartContainer';

export default function Shopping() {
  return (
    <div>
      <h2>Shopping Cart Example</h2>
      <Products />
      <Cart />
    </div>
  );
}
