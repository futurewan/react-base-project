import React from 'react';
import { connect } from 'react-redux';
import * as fromCart from '@redux/reducers/cart';
import * as fromProducts from '@redux/reducers/products';
import Cart from '../components/Cart';

const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotal = (state) => getAddedIds(state)
  .reduce((total, id) => total + getProduct(state, id).price * getQuantity(state, id),
    0)
  .toFixed(2);

export const getCartProducts = (state) => getAddedIds(state).map((id) => ({
  ...getProduct(state, id),
  quantity: getQuantity(state, id),
}));

const ProductsContainer = ({ products }) => (
  <Cart
    products={products}
    // total={total}
    // onCheckoutClicked={() => checkout(products)}
  />
);

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
});

console.log(mapStateToProps);

export default connect(mapStateToProps)(ProductsContainer);
