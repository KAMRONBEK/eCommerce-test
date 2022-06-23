import {REMOVE_ITEM, ADD_ITEMS, CLEAR_ALL_ITEMS} from '../types';

const basketState = {
    basket_products: [],
};

export const basketReducer = (state = basketState, action?: any) => {
  switch (action.type) {
    case REMOVE_ITEM:
      const removeItems = state.basket_products.filter(
        item => item.id !== action.payload,
      );
      return {
        ...state,
        basket_products: removeItems,
      };
      break;
    case ADD_ITEMS:
      const basket_products = [...state.basket_products, action.payload];
      return {
        ...state,
        basket_products: basket_products,
      };
      break;
    case CLEAR_ALL_ITEMS:
      return basketState;

    default:
      return state;
  }
};
