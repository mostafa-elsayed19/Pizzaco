import { OrderData } from "../types/orderTypes";
import { Pizza } from "../types/pizzaTypes";
import { generateRandomNumericId } from "../utils/helpers";
import { supabase } from "./supabase";

export async function getMenu(): Promise<Pizza[]> {
  const { data: menu, error } = await supabase.from("menu").select("*");

  if (error) throw new Error(`Failed getting menu`);

  return menu;
}

export async function getOrder(id: string): Promise<OrderData> {
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
    .select();

  if (error) throw new Error("Couldn't create new order");

  return createdOrder.length ? createdOrder[0] : null;
}
