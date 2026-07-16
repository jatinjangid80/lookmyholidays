import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 
  (typeof process !== "undefined" ? process.env.VITE_SUPABASE_URL : "") || 
  "https://cgrspeydnxkrrohxoomr.supabase.co";

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  (typeof process !== "undefined" ? process.env.VITE_SUPABASE_ANON_KEY : "") || 
  "sb_publishable_LgTUyjrtmb4VNWW_PFWi6w_VkoCj26V";

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

if (!hasSupabaseConfig) {
  console.warn(
    "Supabase credentials missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables or .env file.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
