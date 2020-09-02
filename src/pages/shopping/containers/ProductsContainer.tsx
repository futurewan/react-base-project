import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isArray } from 'lodash';
import { addToCart } from '../../../redux/actions/products';
import ProductList from '../components/ProductList';
import { ProductInterface } from '@interfaces/product';

console.log(isArray([1, 2, 3]));
const ProductsContainer = ({ products, handleAddToCart }: any) => (
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

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.any),
  handleAddToCart: PropTypes.func.isRequired,
};
ProductsContainer.defaultProps = {
  products: [],
};

const mapStateToProps = (state: any) => ({
  products: state.products,
});

console.log(mapStateToProps);
const mapDispatchToProps = {
  handleAddToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
