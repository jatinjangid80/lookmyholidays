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

const allDestinations = [
  {
    name: "Bali",
    country: "Indonesia",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    price: "₹54,999",
  },
  {
    name: "Maldives",
    country: "South Asia",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    price: "₹78,500",
  },
  {
    name: "Dubai",
    country: "UAE",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    price: "₹42,000",
  },
  {
    name: "Switzerland",
    country: "Europe",
    img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
    price: "₹1,24,000",
  },
  {
    name: "Kashmir",
    country: "India",
    img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80",
    price: "₹28,500",
  },
  {
    name: "Thailand",
    country: "South East Asia",
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    price: "₹36,999",
  },
  {
    name: "Singapore",
    country: "South East Asia",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    price: "₹58,000",
  },
  {
    name: "Kerala",
    country: "India",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    price: "₹22,999",
  },
  {
    name: "Vietnam",
    country: "South East Asia",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    price: "₹38,500",
  },
  {
    name: "Almaty",
    country: "Kazakhstan",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    price: "₹42,000",
  },
  {
    name: "Nepal",
    country: "Himalayas",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    price: "₹29,999",
  },
  {
    name: "Bhutan",
    country: "Himalayas",
    img: "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?w=800&q=80",
    price: "₹45,500",
  },
];

const allPackages = [
  {
    title: "Dubai City + Desert",
    nights: "5N / 6D",
    img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=80",
    price: "₹48,750",
    tag: "Family",
    incl: ["Burj Khalifa", "Safari", "Cruise"],
  },
  {
    title: "Swiss Alps Adventure",
    nights: "7N / 8D",
    img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=900&q=80",
    price: "₹1,34,500",
    tag: "Adventure",
    incl: ["Jungfraujoch", "Glacier 3000"],
  },
  {
    title: "Thailand Beach Combo",
    nights: "6N / 7D",
    img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=900&q=80",
    price: "₹41,200",
    tag: "Beach",
    incl: ["Phuket", "Krabi", "Ferries"],
  },
  {
    title: "Vietnam Explorer Tour",
    nights: "5N / 6D",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=80",
    price: "₹38,500",
    tag: "Adventure",
    incl: ["Hanoi", "Halong Bay", "Flights", "Hotels"],
  },
  {
    title: "Almaty Scenic Getaway",
    nights: "4N / 5D",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80",
    price: "₹42,000",
    tag: "Scenic",
    incl: ["Charyn Canyon", "Medeu", "Flights", "Meals"],
  },
  {
    title: "Nepal & Everest Panorama",
    nights: "5N / 6D",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    price: "₹29,999",
    tag: "Trekking",
    incl: ["Kathmandu", "Pokhara", "Temples", "Guide"],
  },
  {
    title: "Bhutan Peaceful Valley Tour",
    nights: "5N / 6D",
    img: "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?w=900&q=80",
    price: "₹45,500",
    tag: "Scenic",
    incl: ["Thimphu", "Paro", "Monasteries", "Guide"],
  },
  {
    title: "Bali Honeymoon Escape",
    nights: "6N / 7D",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=80",
    price: "₹64,999",
    tag: "Honeymoon",
    incl: ["Hotel", "Flights", "Villa", "Spa"],
  },
  {
    title: "Royal Rajasthan Heritage",
    nights: "5N / 6D",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=80",
    price: "₹32,500",
    tag: "Cultural",
    incl: ["Palace Stay", "Guide", "Meals"],
  },
  {
    title: "Maldives Water Villa",
    nights: "4N / 5D",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80",
    price: "₹89,000",
    tag: "Luxury",
    incl: ["Overwater Villa", "All Meals", "Transfers"],
  },
];

async function cleanAndReseed() {
  // Step 1: Fetch all existing IDs and delete them
  console.log("🗑️  Fetching existing destination IDs...");
  const { data: existingDests } = await supabase.from("destinations").select("id");
  if (existingDests && existingDests.length > 0) {
    const ids = existingDests.map((d) => d.id);
    const { error } = await supabase.from("destinations").delete().in("id", ids);
    if (error) {
      console.error("Error deleting destinations:", error.message);
    } else {
      console.log(`   Deleted ${ids.length} old destination(s).`);
    }
  } else {
    console.log("   No existing destinations found.");
  }

  console.log("🗑️  Fetching existing package IDs...");
  const { data: existingPacks } = await supabase.from("packages").select("id");
  if (existingPacks && existingPacks.length > 0) {
    const ids = existingPacks.map((p) => p.id);
    const { error } = await supabase.from("packages").delete().in("id", ids);
    if (error) {
      console.error("Error deleting packages:", error.message);
    } else {
      console.log(`   Deleted ${ids.length} old package(s).`);
    }
  } else {
    console.log("   No existing packages found.");
  }

  // Step 2: Insert fresh data
  console.log("\n✅ Inserting 12 destinations (including Vietnam, Almaty, Nepal, Bhutan)...");
  const { data: dData, error: dError } = await supabase
    .from("destinations")
    .insert(allDestinations)
    .select();
  if (dError) {
    console.error("Error inserting destinations:", dError.message);
  } else {
    console.log(`   ✅ Inserted ${dData.length} destinations:`);
    console.log("  ", dData.map((d) => d.name).join(", "));
  }

  console.log("\n✅ Inserting 10 packages...");
  const { data: pData, error: pError } = await supabase
    .from("packages")
    .insert(allPackages)
    .select();
  if (pError) {
    console.error("Error inserting packages:", pError.message);
  } else {
    console.log(`   ✅ Inserted ${pData.length} packages:`);
    console.log("  ", pData.map((p) => p.title).join(", "));
  }

  console.log("\n🎉 Done! Refresh your browser to see all destinations.");
}

cleanAndReseed();
