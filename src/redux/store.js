import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// // Your Reducer path 
// import counterReducer from './features/counter/counterSlice';
// import productReducer from './features/product/productSlice';
// import cartReducer from './features/cart/cartSlice';
// import themeReducer from './features/theme/themeSlice';


// // rootReducer for large or scale-up application 
// // and you can poot it different file 
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   product: productReducer,
//   cart: cartReducer,
//   theme: themeReducer,
// });

// Your main store 
export const store = configureStore({
  reducer: rootReducer,
});

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     product: productReducer,
//     cart: cartReducer,
//     theme: themeReducer
//   },
// })

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch