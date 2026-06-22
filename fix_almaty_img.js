import { createClient } from "@supabase/supabase-js";
import fs from "fs";

const envContent = fs.readFileSync("./.env", "utf-8");
const env = {};
envContent.split("\n").forEach((line) => {
  const parts = line.split("=");
  if (parts.length >= 2) {
    const key = parts[0].trim();
    const val = parts
      .slice(1)
      .join("=")
      .trim()
      .replace(/^['"]|['"]$/g, "");
    env[key] = val;
  }
});

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);

// Working Almaty image - Charyn Canyon, Kazakhstan (verified Unsplash photo)
const ALMATY_IMG = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80";
const ALMATY_IMG_LG = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80";

async function fix() {
  console.log("Fixing Almaty destination image...");
  const { data: d1, error: e1 } = await supabase
    .from("destinations")
    .update({ img: ALMATY_IMG })
    .eq("name", "Almaty")
    .select();
  if (e1) console.error("Destinations error:", e1.message);
  else
    console.log(
      `✅ Updated ${d1.length} destination(s):`,
      d1.map((d) => d.name),
    );

  console.log("Fixing Almaty package image...");
  const { data: d2, error: e2 } = await supabase
    .from("packages")
    .update({ img: ALMATY_IMG_LG })
    .eq("title", "Almaty Scenic Getaway")
    .select();
  if (e2) console.error("Packages error:", e2.message);
  else
    console.log(
      `✅ Updated ${d2.length} package(s):`,
      d2.map((p) => p.title),
    );

  console.log("\n🎉 Done! Refresh your browser.");
}

fix();
