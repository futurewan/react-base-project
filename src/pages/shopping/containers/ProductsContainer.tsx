import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../../../redux/actions/products';
import ProductList from '../components/ProductList';
import { ProductInterface } from '@interfaces/product';

interface PropsInterface {
  products: Array<ProductInterface>;
  handleAddToCart: Function;
}

const ProductsContainer = ({ products, handleAddToCart }: PropsInterface) => (
  <ProductList title="Products">
    {products.map((product: ProductInterface) => (
      <div style={{ marginBottom: 20 }} key={'product' + product.id}>
        <div>
          {product.title}
          {'- &#36;'}
          {product.price}
          {product.inventory ? ` x ${product.inventory}` : null}
        </div>
        <button
          onClick={() => {
            handleAddToCart(product.id);
          }}
          disabled={product.inventory > 0 ? false : true}
        >
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    ))}
  </ProductList>
);

const mapStateToProps = (state: any) => ({
  products: state.products,
});

console.log(mapStateToProps);
const mapDispatchToProps = {
  handleAddToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
