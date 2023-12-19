import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartSize: 0,
  historyOrders: [],
  search: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.historyOrders.push(action.payload);
      state.cartSize = state.historyOrders.length;
    },
    removeProduct(state, action) {
      const indexToRemove = state.historyOrders.findIndex(
        (item) => item.id === action.payload
      );

      if (indexToRemove !== -1) {
        state.historyOrders = state.historyOrders
          .slice(0, indexToRemove)
          .concat(state.historyOrders.slice(indexToRemove + 1));
      }
      state.cartSize = state.historyOrders.length;
    },

    searchProduct(state, action) {
      state.search = action.payload;
    },
  },
});

export const { addProduct, removeProduct, searchProduct } =
  productSlice.actions;

export default productSlice.reducer;
