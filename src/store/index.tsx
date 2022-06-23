import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { basketReducer } from './reducers/basket';
import { productReducer } from './reducers/products';

const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer,
});


let configureStore = () => {
  let store = createStore(rootReducer, composeWithDevTools());
  return store;
};

export default configureStore;
