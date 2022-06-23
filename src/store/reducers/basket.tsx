import {addItems} from '../actions/basket';
import {
  REMOVE_ITEM,
  ADD_ITEMS,
  CLEAR_ALL_ITEMS,
  CHANGE_QUANTITY,
} from '../types';

const basketState = {
  basketProducts: [],
};

export const basketReducer = (state = basketState, action?: any) => {
  switch (action.type) {
    case REMOVE_ITEM:
      const removeItems = state.basketProducts.filter(
        item => item.id !== action.payload,
      );
      return {
        basketProducts: removeItems,
      };
      break;
    case ADD_ITEMS:
      let id = state.basketProducts.some(item =>
        item.id == action.payload.id ? item.id : false,
      );
      let item = action.payload;
      item.quantity = 1;
      const basketProducts = id
        ? state.basketProducts.map(item => {
            item.quantity += 1;
            return item;
          })
        : [...state.basketProducts, item];
      return {
        basketProducts: basketProducts,
      };
      break;

    case CHANGE_QUANTITY:
      let newProducts = state.basketProducts.map(item => {
        if (item.id == action.payload.id) {
          console.log(item.quantity + action.payload.number);

          item.quantity = Math.max(item.quantity + action.payload.number, 0);
        }
        return item;
      });
      return {
        basketProducts: newProducts,
      };
    case CLEAR_ALL_ITEMS:
      return basketState;

    default:
      return state;
  }
};
