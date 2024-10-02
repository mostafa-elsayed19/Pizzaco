import { Cart } from "./cartTypes";

export interface OrderData {
  id?: number;
  created_at?: Date;
  status?: string;
  customer: string;
  phone: string;
  address: string;
  position: string;
  priority: boolean;
  totalPrice: number;
  cart: Cart[];
  estimatedDelivery?: string;
}
