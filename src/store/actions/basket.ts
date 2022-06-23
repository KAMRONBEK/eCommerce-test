import {ADD_ITEMS, CLEAR_ALL_ITEMS, REMOVE_ITEM} from '../types';

export const addItems = (item?: any) => {
  return {
    type: ADD_ITEMS,
    payload: item,
  };
};

export const removeItem = (id?: any) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const clearAllItems = () => {
  return {
    type: CLEAR_ALL_ITEMS,
  };
};
