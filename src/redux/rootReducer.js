import { combineReducers } from '@reduxjs/toolkit';


// Your Reducer path 
import counterReducer from './features/counter/counterSlice';
import productReducer from './features/product/productSlice';
import cartReducer from './features/cart/cartSlice';
import themeReducer from './features/theme/themeSlice';
import searchReducer from './features/serach/searchSlice';
import relatedProductReducer from './features/product/relatedProductSlice';


// rootReducer for large or scale-up application 
// and you can poot it different file 
const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
  relatedProduct: relatedProductReducer,
  search: searchReducer,
  cart: cartReducer,
  theme: themeReducer,
});

export default rootReducer; // it should be export this way .
