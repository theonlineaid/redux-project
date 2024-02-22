import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { productsApi } from "./services/productsApi";

// Your main store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
