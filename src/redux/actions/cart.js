
export const checkout = () => (dispatch) => {
  shop.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};
