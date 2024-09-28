import { supabase } from "./supabase";

export async function getMenu() {
  const { data: menu, error } = await supabase.from("menu").select("*");

  if (error) throw new Error(`Failed getting menu`);

  return menu;
}
