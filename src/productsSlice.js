import { createSlice } from "@reduxjs/toolkit";
import json from "./data.json";

const productsSlice = createSlice({
  name: "products",
  initialState: json,
  reducers: {
    updateStockOnCheckout(state, action) {
      const cart = action.payload;
      cart.forEach((cartItem) => {
        const foundItem = state.find(
          (productItem) => productItem.id === cartItem.id
        );
        const fountItemIdx = state.indexOf(foundItem);
        if (state[fountItemIdx].stock - cartItem.qtyInCart < 1) {
          state.splice(fountItemIdx, 1);
        } else {
          state[fountItemIdx].stock =
            state[fountItemIdx].stock - cartItem.qtyInCart;
        }
      });
    },
  },
});

const { actions, reducer: productsReducer } = productsSlice;

export const { updateStockOnCheckout } = actions;

export default productsReducer;
