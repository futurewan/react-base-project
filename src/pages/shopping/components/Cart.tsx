import React from 'react';
import { ProductInterface } from '@interfaces/product';
interface ProductProps {
  products: Array<ProductInterface>;
}

const Cart = ({ products }: ProductProps) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product: ProductInterface) => (
      <div key={'products' + product.id}>
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

Cart.defaultProps = {
  products: [],
};
export default Cart;
