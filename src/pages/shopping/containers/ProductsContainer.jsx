import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../../redux/actions/products'
import ProductList from "../components/ProductList"
import { isArray } from 'lodash';

console.log(isArray([1,2,3]))
const ProductsContainer = ({products,addToCart}) => (
  <ProductList title="Products">
    {products.map(product =>(
      <div style={{marginBottom:20}} key={product.id}>
        <div>
          {product.title} - &#36;{product.price}{product.inventory ? ` x ${product.inventory}` : null}
        </div>
        <button
          onClick={()=>{addToCart(product.id)}}
          disabled={product.inventory > 0 ? '' : 'disabled'}>
          {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
        </button>
      </div>
    )
    )}
  </ProductList>
)

const mapStateToProps = (state) => ({
  products:state.products
})

console.log(mapStateToProps)
const mapDispatchToProps = {
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
