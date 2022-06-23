import {LOAD_PRODUCTS} from '../types';

const initialState = {
  allProducts: [],
};

export const productReducer = (state = initialState, action?: any) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    default:
      return state;
  }
};
