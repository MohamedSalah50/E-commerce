import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import productReducer from "./features/products/productSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    product: productReducer,
  },
});

export default store;
