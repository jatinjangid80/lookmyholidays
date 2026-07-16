import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 
  (typeof process !== "undefined" ? process.env.VITE_SUPABASE_URL : "") || 
  "";
const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  (typeof process !== "undefined" ? process.env.VITE_SUPABASE_ANON_KEY : "") || 
  "";

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

if (!hasSupabaseConfig) {
  console.warn(
    "Supabase credentials missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables or .env file.",
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key",
);
