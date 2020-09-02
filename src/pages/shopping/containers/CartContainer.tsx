import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as fromCart from '@redux/reducers/cart';
import * as fromProducts from '@redux/reducers/products';
import Cart from '../components/Cart';
import { ProductInterface } from '@interfaces/product';

interface PropsProps {
  products: Array<ProductInterface>;
}

const getAddedIds = (state: any) => fromCart.getAddedIds(state.cart);
const getQuantity = (state: any, id: Number): Number => fromCart.getQuantity(state.cart, id);
const getProduct = (state: any, id: Number): ProductInterface => fromProducts.getProduct(state.products, id);

export const getTotal = (state: any) =>
  getAddedIds(state)
    .reduce((total: Number, id: Number): Number => Number(total) + Number(Number(getProduct(state, id).price) * Number(getQuantity(state, id))), 0)
    .toFixed(2);

export const getCartProducts = (state: any) =>
  getAddedIds(state).map((id: Number) => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }));

const CartContainer = ({ products }: PropsProps) => (
  <Cart
    products={products}
    // total={total}
    // onCheckoutClicked={() => checkout(products)}
  />
);

const mapStateToProps = (state: any) => ({
  products: getCartProducts(state),
});

CartContainer.defaultProps = {
  products: [],
};
console.log(mapStateToProps);

export default connect(mapStateToProps)(CartContainer);
