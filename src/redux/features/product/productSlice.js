// productSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await fetch (`https://api.escuelajs.co/api/v1/products`);
  return res.json();
});

export const fetchProductDetails = createAsyncThunk('fetchProductDetails', async (productId) => {
  const res = await fetch (`https://api.escuelajs.co/api/v1/products/${productId}`);
  return res.json();
});

const initialState = {
  entities: null,
  isLoading: false,
  isError: false,
  selectedProduct: null, // For storing details of the selected product
  detailsLoading: false,
  detailsError: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log(action.payload);
      state.isError = true;
    });

    builder.addCase(fetchProductDetails.pending, (state, action) => {
      state.detailsLoading = true;
    });

    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.detailsLoading = false;
      state.selectedProduct = action.payload;
    });

    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      console.log(action.payload);
      state.detailsError = true;
    });
  },
});

export default productSlice.reducer;
