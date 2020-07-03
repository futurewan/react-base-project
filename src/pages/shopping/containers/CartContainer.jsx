import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import cart, * as fromCart from '@redux/reducers/cart'
import product, * as fromProducts from '@redux/reducers/products'
import ProductList from "../components/ProductList"
import { checkout } from '@redux/actions/cart'


const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))


const ProductsContainer = ({products,addToCart}) => (
  <Cart
    products={products}
    // total={total}
    // onCheckoutClicked={() => checkout(products)} 
    
  />
)

const mapStateToProps = (state) => ({
  products:getCartProducts(state)
})

console.log(mapStateToProps)
const mapDispatchToProps = {
  checkout
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
