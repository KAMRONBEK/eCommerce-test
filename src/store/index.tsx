import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer } from './reducers/products';

const rootReducer = combineReducers({
  products: productReducer,
});


let configureStore = () => {
  let store = createStore(rootReducer, composeWithDevTools());
  return store;
};

export default configureStore;
