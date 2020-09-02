// import { combineReducers } from 'redux';
// 商品列表数据
import { ProductInterface } from '../../interfaces/product';

export default (state = [], action: any) => {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return action.products;
    case 'ADD_TO_CART': {
      const { productId } = action;
      return state.map((item) => {
        const Item: ProductInterface = item;
        if (Item.id === productId) {
          Item.inventory = Number(Item.inventory) - 1;
        }
        return Item;
      });
    }
    default:
      return state;
  }
};

export const getProduct = (state: any, id: Number) => state.find((item: ProductInterface) => item.id === id);
