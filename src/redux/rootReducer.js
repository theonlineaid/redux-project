import { combineReducers } from "@reduxjs/toolkit";

// Your Reducer path
// import productReducer from "./features/product/productSlice";
// import searchReducer from "./features/serach/searchSlice";
// import relatedProductReducer from "./features/product/relatedProductSlice";
import counterReducer from "./features/counter/counterSlice";
import cartReducer from "./features/cart/cartSlice";
import themeReducer from "./features/theme/themeSlice";
import { productsApi } from "./services/productsApi";

// rootReducer for large or scale-up application
// and you can import it different file
const rootReducer = combineReducers({
  // product: productReducer,
  // relatedProduct: relatedProductReducer,
  // search: searchReducer,
  counter: counterReducer,
  cart: cartReducer,
  theme: themeReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export default rootReducer; // it should be export this way .
