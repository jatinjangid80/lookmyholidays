import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://anqxljgyfxdrqujdbxzn.supabase.co";
const supabaseAnonKey = "sb_publishable_avNdgD947IcmM4O2EHDPNw_D3R3myvv";

try {
  console.log("Initializing Supabase client...");
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  console.log("Client initialized successfully.");

  console.log("Calling getSession()...");
  supabase.auth
    .getSession()
    .then(({ data, error }) => {
      console.log("getSession finished successfully.");
      console.log("Data:", data);
      console.log("Error:", error);
    })
    .catch((err) => {
      console.error("getSession promise rejected:", err);
    });
} catch (err) {
  console.error("Synchronous error during initialization:", err);
}
