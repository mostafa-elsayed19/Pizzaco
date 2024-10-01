import { createSlice } from "@reduxjs/toolkit";
import { CartSlice } from "../../types/cartTypes";
import { RootState } from "../../store";

const initialState: CartSlice = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push({
        ...action.payload,
        addIngredients: action.payload.ingredients,
        removeIngredients: [],
      });
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQtn(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseItemQtn(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0)
          cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    toggleIngredient(state, action) {
      const { pizzaId, ingredient, checked } = action.payload;

      const item = state.cart.find((item) => pizzaId === item.pizzaId);

      if (item) {
        if (checked) {
          // Prevent Removing the last ingredient
          if (item.addIngredients.length === 1) {
            throw Error("You need to have at least one ingredient");
          }

          // Remove the ingredients from addIngredients Array
          item.addIngredients = item.addIngredients.filter(
            (ingr) => ingr !== ingredient,
          );

          //if doesn't already exist in removeIngredients array. Add it
          if (!item.removeIngredients.includes(ingredient))
            item.removeIngredients.push(ingredient);
        } else {
          // Remove the ingredients from removeIngredients Array
          item.removeIngredients = item.removeIngredients.filter(
            (ingr) => ingr !== ingredient,
          );

          //if doesn't already exist in addIngredients array. Add it
          if (!item.addIngredients.includes(ingredient))
            item.addIngredients.push(ingredient);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQtn,
  decreaseItemQtn,
  toggleIngredient,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: RootState) => state.cart.cart;

export const getCartLength = (state: RootState) => state.cart.cart.length;

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id: number) => (state: RootState) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
