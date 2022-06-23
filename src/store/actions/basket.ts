import {ADD_ITEMS, CHANGE_QUANTITY, CLEAR_ALL_ITEMS, REMOVE_ITEM} from '../types';

export const addItems = (item?: any) => {
  return {
    type: ADD_ITEMS,
    payload: item,
  };
};

export const removeItem = (id?: number) => {
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

export const changeQuantity=(id:number,number:number)=>{
  return {
    type: CHANGE_QUANTITY,
    payload:{id,number}
  }
} 
