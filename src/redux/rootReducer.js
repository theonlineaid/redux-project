import { combineReducers } from '@reduxjs/toolkit';


// Your Reducer path 
import counterReducer from './features/counter/counterSlice';
import productReducer from './features/product/productSlice';
import cartReducer from './features/cart/cartSlice';
import themeReducer from './features/theme/themeSlice';
import searchReducer from './features/serach/searchSlice';
import relatedProductReducer from './features/product/relatedProductSlice';
import { productsApi } from './services/productsApi';


// rootReducer for large or scale-up application 
// and you can poot it different file 
const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
  relatedProduct: relatedProductReducer,
  search: searchReducer,
  cart: cartReducer,
  theme: themeReducer,
  [productsApi.reducerPath] : productsApi.reducer,


  
});

export default rootReducer; // it should be export this way .
