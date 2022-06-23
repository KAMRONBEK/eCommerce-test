
import {LOAD_PRODUCTS} from '../types';

export const products = (payload?: any) => ({
  type: LOAD_PRODUCTS,
  payload,
});
