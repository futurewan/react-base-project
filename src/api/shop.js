import products from './product.json';

export default {
  getProducts:(cb)=>{setTimeout(cb(products),200)}
}