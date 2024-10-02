import { createClient, SupabaseClient } from "@supabase/supabase-js";
const supabaseUrl: string = "https://dezwakvpknvajgfqawhe.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlendha3Zwa252YWpnZnFhd2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2MTIwMjYsImV4cCI6MjA0MjE4ODAyNn0.Oo8Ny_L14OTxZiQ-_tLm5aK5Ox1MdOQWNg-PSU8B0V4";
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export async function updateEstimatedDelivery(id: number) {
  // Call the calculate_estimated_delivery function
  const { error } = await supabase.rpc("calculate_estimated_delivery", {
    order_id: id,
  });
  if (error) console.log(error);
}
