import { supabase } from "./supabase";

export async function getMenu() {
  const { data: menu, error } = await supabase.from("menu").select("*");

  if (error) throw new Error(`Issue fetching data, ${error.message}`);

  return menu;
}
