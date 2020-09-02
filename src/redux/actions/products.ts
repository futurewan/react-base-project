import shop from '../../api/shop';
import { ProductInterface } from '../../interfaces/product';

const receiveProducts = (products: ProductInterface) => ({
  type: 'RECEIVE_PRODUCTS',
  products,
});

const addToCartUnsafe = (productId: Number) => ({
  type: 'ADD_TO_CART',
  productId,
});

export const getAllProducts = () => (dispatch: Function) => {
  shop.getProducts((products: ProductInterface) => {
    dispatch(receiveProducts(products));
  });
};

export const addToCart = (productId: Number) => (dispatch: Function, getState: Function) => {
  if (getState().products.find((item: ProductInterface) => item.id === productId).inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};
