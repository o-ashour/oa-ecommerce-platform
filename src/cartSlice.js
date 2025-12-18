import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const selectedProduct = action.payload;
      const foundProduct = state.find((item) => item.id === selectedProduct.id);
      const foundProductIdx = state.indexOf(foundProduct);

      if (!foundProduct) {
        state.push({ ...selectedProduct, qtyInCart: 1 });
      } else {
        state[foundProductIdx].qtyInCart++;
      }
    },
    removeCartItem(state, action) {
      const selectedProduct = action.payload;
      const foundProduct = state.find((item) => item.id === selectedProduct.id);
      const foundProductIdx = state.indexOf(foundProduct);

      if (foundProduct.qtyInCart > 1) {
        state[foundProductIdx].qtyInCart--;
      } else {
        return state.filter((item) => item !== foundProduct);
      }
    },
    initializeCart(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer: cartReducer } = cartSlice;

export const { addCartItem, removeCartItem, initializeCart } = actions;

export default cartReducer;
