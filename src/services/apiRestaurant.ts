import { supabase } from "./supabase";

export async function getMenu() {
  const { data: menu, error } = await supabase.from("menu").select("*");

  if (error) throw new Error(`Failed getting menu`);

  return menu;
}

export async function getOrders(id: string) {
  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id);

  if (error) throw new Error("Couldn't find order");

  return orders.length > 0 ? orders[0] : null;
}
