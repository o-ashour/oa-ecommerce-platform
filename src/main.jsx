import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./viewSlice.js";
import cartReducer from "./cartSlice.js";
import productsReducer from "./productsSlice.js";

const store = configureStore({
  reducer: { view: viewReducer, cart: cartReducer, products: productsReducer },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
