// 购物车数据
const initialState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    default:
      return state;
  }
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { productId } = action;
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      };
    }
    default:
      return state;
  }
};
export const getAddedIds = (state) => state.addedIds;

export const getQuantity = (state, productId) => state.quantityById[productId] || 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_REQUEST':
      return initialState;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};
