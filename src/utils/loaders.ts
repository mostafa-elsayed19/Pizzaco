import { Params } from "react-router-dom";
import { getMenu, getOrders } from "../services/apiRestaurant";

export async function MenuLoader() {
  const menu = await getMenu();
  return menu;
}

export async function OrderLoader({ params }: { params: Params<string> }) {
  const id = params.orderId;

  if (!id) throw Error("Order ID is missing or invalid.");

  const orders = await getOrders(id);

  if (!orders) throw Error(`No order with id #${id}`);

  return orders;
}
