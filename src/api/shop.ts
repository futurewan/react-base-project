import products from './product.json';

export default {
  getProducts: (cb: Function) => {
    setTimeout(() => {
      cb(products);
    }, 200);
  },
};
