import { Params } from "react-router-dom";
import { getMenu, getOrder } from "../services/apiRestaurant";

export async function MenuLoader() {
  const menu = await getMenu();
  return menu;
}

export async function OrderLoader({ params }: { params: Params<string> }) {
  const id = params.orderId;

  const orderId = Number(id);

  if (!id) throw Error("Order ID is missing or invalid.");

  const order = await getOrder(orderId);

  if (!order) throw Error(`No order with id #${orderId}`);

  return order;
}
