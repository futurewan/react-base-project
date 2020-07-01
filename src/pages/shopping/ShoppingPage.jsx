import React, { Component } from 'react';
import Products from './containers/ProductsContainer';
import Cart from './containers/CartContainer';

export default class Shopping extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <Products />
        <Cart />
      </div>
    );
  }
}