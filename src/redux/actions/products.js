import shop from '../../api/shop';

const receiveProducts = (products) => ({
  type: 'RECEIVE_PRODUCTS',
  products,
});

const addToCartUnsafe = productId => ({
  type: 'ADD_TO_CART',
  productId
})

export const getAllProducts = () => (dispatch) => {
  shop.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.find(item=>item.id === productId).inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}