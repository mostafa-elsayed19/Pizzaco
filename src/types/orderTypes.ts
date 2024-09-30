export interface OrderData {
  id: number;
  created_at: Date;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  totalPrice: number;
  cart: {
    name: string;
    pizzaId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    ingredients: string[];
  }[];
}
