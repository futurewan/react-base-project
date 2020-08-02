import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ products }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => (
      <div key={product.id}>
        {product.title}
        {'- &#36;'}
        {product.price}
        {product.quantity ? ` x ${product.quantity}` : null}
      </div>
    ))
  ) : (
    <em>Please add some products to cart.</em>
  );
  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
};
Cart.defaultProps = {
  products: [],
};
export default Cart;
