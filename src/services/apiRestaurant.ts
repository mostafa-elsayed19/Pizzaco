import { OrderData } from "../types/orderTypes";
import { Pizza } from "../types/pizzaTypes";
import { generateRandomNumericId } from "../utils/helpers";
import { supabase, updateEstimatedDelivery } from "./supabase";

export async function getMenu(): Promise<Pizza[]> {
  const { data: menu, error } = await supabase.from("menu").select("*");

  if (error) throw new Error(`Failed getting menu`);

  return menu;
}

export async function getOrder(id: number): Promise<OrderData> {
  await updateEstimatedDelivery(id);

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id);

  if (error) throw new Error("Couldn't find order");

  return orders.length > 0 ? orders[0] : null;
}

async function isIdUnique(id: number) {
  const { data: existingOrder } = await supabase
    .from("orders")
    .select("id")
    .eq("id", id);

  return !existingOrder || existingOrder.length === 0;
}

export async function createOrder(order: OrderData): Promise<OrderData | null> {
  let orderId: number;
  do {
    orderId = generateRandomNumericId();
  } while (!(await isIdUnique(orderId)));

  const newOrder = {
    id: orderId,
    ...order,
  };

  const { data: createdOrder, error } = await supabase
    .from("orders")
    .insert([newOrder])
    .select("*");

  if (error) {
    console.log("Supabase Error:", error);
    throw Error("Failed creating the order");
  }

  await updateEstimatedDelivery(orderId);

  return createdOrder.length ? createdOrder[0] : null;
}

export async function updateOrder(id: number, updateObj: object) {
  const { error } = await supabase
    .from("orders")
    .update([updateObj])
    .eq("id", id);

  if (error) {
    console.log("Supabase Error:", error);
    throw Error("Failed creating the order");
  }
}
