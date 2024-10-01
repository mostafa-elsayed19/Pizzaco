import { redirect } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { createOrder } from "../services/apiRestaurant";
import { store } from "../store";
import { OrderData } from "../types/orderTypes";

export async function createNewOrder({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order: OrderData = {
    customer: data.customer as string,
    phone: data.phone as string,
    address: data.address as string,
    position: data.position as string,
    cart: data.cart ? JSON.parse(data.cart as string) : [],
    priority: data.priority ? JSON.parse(data.priority as string) : false,
    totalPrice: data.totalPrice ? JSON.parse(data.totalPrice as string) : 0,
  };

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder?.id}`);
}
