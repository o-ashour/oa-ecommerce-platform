import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: "home",
  reducers: {
    changeView(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer: viewReducer } = viewSlice;

export const { changeView } = actions;

export default viewReducer;
