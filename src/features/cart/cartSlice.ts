import { createSlice } from "@reduxjs/toolkit";
import { CartSlice } from "../../types/cartTypes";

const initialState: CartSlice = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem() {},
    deleteItem() {},
    increaseItemQtn() {},
    decreaseItemQtn() {},
    clearCart() {},
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQtn,
  decreaseItemQtn,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
