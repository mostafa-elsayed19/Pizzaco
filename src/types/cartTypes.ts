export interface Cart {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  ingredients: string[];
  removeIngredients?: string[];
}

export interface CartSlice {
  cart: Cart[];
}
