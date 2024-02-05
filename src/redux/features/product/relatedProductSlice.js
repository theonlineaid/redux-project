// relatedProductsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an initial state
const initialState = {
  relatedProducts: [],
  loading: false,
  error: null,
};

// Define an async thunk to fetch related products
export const fetchRelatedProducts = createAsyncThunk(
  'relatedProducts/fetchRelatedProducts',
  async (categoryId) => {
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryId}/products`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Create a slice
const relatedProductsSlice = createSlice({
  name: 'relatedProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.relatedProducts = action.payload;
      })
      .addCase(fetchRelatedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default relatedProductsSlice.reducer;
