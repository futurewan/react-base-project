// 购物车数据

interface StateInterface {
  addedIds: Array<Number>;
  quantityById: any;
}

const initialState: StateInterface = {
  addedIds: [],
  quantityById: {},
};
interface actionInterface {
  productId: Number;
  type: String;
}

const addedIds = (state = initialState.addedIds, action: actionInterface) => {
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

const quantityById = (state = initialState.quantityById, action: actionInterface) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { productId } = action;
      return {
        ...state,
        [String(productId)]: (state[String(productId)] || 0) + 1,
      };
    }
    default:
      return state;
  }
};
export const getAddedIds = (state: any) => state.addedIds;

export const getQuantity = (state: any, productId: Number) => state.quantityById[String(productId)] || 0;

export default (state = initialState, action: any) => {
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
