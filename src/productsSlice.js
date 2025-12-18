import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    initializeProducts(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer: productsReducer } = productsSlice;

export const { initializeProducts, updateStockOnCheckout } = actions;

export default productsReducer;
