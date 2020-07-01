// import { combineReducers } from 'redux';
//商品列表数据

export default (state=[],action)=>{
  switch (action.type){
    case 'RECEIVE_PRODUCTS':
      return action.products;
    case 'ADD_TO_CART':
      const {productId} = action;
      return state.map(item=>{
          if(item.id === productId){
            item.inventory = item.inventory - 1;
          }
          return item;
        })
    default:
      return state;
  }
}

export const getProduct = (state, id) =>
  state.find(item=>item.id === id)