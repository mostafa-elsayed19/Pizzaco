import { CartOrder } from "../types/pizzaTypes";

export const fakeData: CartOrder[] = [
  {
    pizzaId: 1,
    name: "Margherita",
    quantity: 3,
    unitPrice: 12,
    totalPrice: 36,
    ingredients: ["tomato", "mozzarella", "basil"],
  },
  {
    pizzaId: 3,
    name: "Romana",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
    ingredients: ["tomato", "mozzarella", "prosciutto"],
  },
  {
    pizzaId: 4,
    name: "Prosciutto e Rucola",
    quantity: 1,
    unitPrice: 16,
    totalPrice: 16,
    ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
  },
];
