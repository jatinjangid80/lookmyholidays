import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { supabase, hasSupabaseConfig } from "../lib/supabase";
import { DestinationCard } from "../components/ui/DestinationCard";
import { Hero } from "../components/sections/Hero";
import { Destinations } from "../components/sections/Destinations";
import { Statistics } from "../components/sections/Statistics";
import { Testimonials } from "../components/sections/Testimonials";
import { VisaServices } from "../components/sections/VisaServices";
import { Footer } from "../components/sections/Footer";
import { TrendingPackages } from "../components/sections/TrendingPackages";
import { FAQ } from "../components/sections/FAQ";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  LogOut,
  History,
  User,
  AlertCircle,
  CheckCircle2,
  ThumbsUp,
  Facebook,
  Instagram,
  Youtube,
  Heart,
  Settings,
  Package,
  ChevronDown,
} from "lucide-react";
import { Toaster } from "sonner";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "LookMyHolidays",
  url: "https://www.lookmyholidays.in/",
  logo: "https://www.lookmyholidays.in/logo.png",
  description:
    "Plan memorable trips with LookMyHolidays. Customized tour packages, visa assistance, and 24/7 travel support across India and worldwide.",
  telephone: "+91-95291-55562",
  email: "resv@lookmyholidays.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "FF-35, JTM Mall, Jagatpura",
    addressLocality: "Jaipur",
    postalCode: "302017",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/lookmyholidays",
    "https://www.instagram.com/lookmyholidays",
    "https://twitter.com/lookmyholidays",
  ],
  priceRange: "$$",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LookMyHolidays | Travel Agency & Visa Support" },
      {
        name: "description",
        content:
          "Plan memorable trips with LookMyHolidays. Customized tour packages, visa assistance, and 24/7 travel support across India and worldwide.",
      },
      { property: "og:title", content: "LookMyHolidays | Travel Agency & Visa Support" },
      {
        property: "og:description",
        content:
          "Customized holiday packages, visa support and 24/7 travel concierge across India and worldwide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

export const destinations = [
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

export const packages = [
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

const stats = [
  { n: 1500, label: "Happy Travellers", suffix: "+" },
  { n: 90, label: "Destinations Covered", suffix: "+" },
  { n: 15, label: "Years of Experience", suffix: "" },
  { n: 4.9, label: "Average Rating", suffix: "/5", float: true },
];

const gallery = [
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
  "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=800&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=800&q=80",
  "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=800&q=80",
];

const visaServices = [
  {
    country: "Schengen (Europe)",
    processingTime: "10-18 Days",
    type: "Tourist / Business",
    requirement: "Flight reservation, 3 year ITR, 6 Months bank statement",
    price: "₹14,500",
  },
  {
    country: "United States (US)",
    processingTime: "Interview Based",
    type: "B1/B2 Visitor",
    requirement: "DS-160 confirmation, Appointment letter, Sponsor details (if applicable)",
    price: "₹18,500",
  },
  {
    country: "United Kingdom (UK)",
    processingTime: "15-20 Days",
    type: "Standard Visitor",
    requirement: "Financial proof, Employment letter, Detailed itinerary",
    price: "₹16,000",
  },
  {
    country: "Dubai (UAE)",
    processingTime: "2-3 Days",
    type: "30 / 60 Days eVisa",
    requirement: "Passport front & back scan, Passport size photo with white background",
    price: "₹7,500",
  },
  {
    country: "Singapore",
    processingTime: "3-4 Days",
    type: "E-Tourist Visa",
    requirement: "Passport scan, Photo, Form 14A, Confirmed return ticket",
    price: "₹3,800",
  },
  {
    country: "Thailand",
    processingTime: "Instant (eVisa)",
    type: "Tourist eVisa / On Arrival",
    requirement: "Passport scan, Photo, Hotel booking, Flight tickets",
    price: "₹4,200",
  },
];

const blogs = [
  {
    title: "Schengen Visa Guide: 5 Mistakes to Avoid for Approval",
    excerpt:
      "Preparing for your Europe trip? Read about the most common document mistakes that lead to visa rejections and how you can avoid them.",
    date: "June 15, 2026",
    author: "Jatin Jangid",
    img: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?w=800&q=80",
    readTime: "5 min read",
  },
  {
    title: "10 Hidden Gems in Bali You Must Visit in 2026",
    excerpt:
      "Skip the crowded beaches of Kuta. We explore the pristine waterfalls of North Bali, secret canyons, and panoramic viewpoints in Sidemen.",
    date: "June 08, 2026",
    author: "Rahul Sharma",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    readTime: "7 min read",
  },
  {
    title: "How to Plan a Luxury Honeymoon in Maldives on a Budget",
    excerpt:
      "Overwater villas don't always have to break the bank. Discover travel hacks, local island guest houses, and the best seasons for discounts.",
    date: "May 24, 2026",
    author: "Priya Patel",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    readTime: "6 min read",
  },
];

const AUTH_LOADING_TIMEOUT_MS = 2500;
const FEATURED_PACKAGE_COUNT = 3;

const mergeByName = (localItems: any[], databaseItems: any[]) => {
  const seen = new Set(localItems.map((item) => item.name?.toLowerCase()).filter(Boolean));
  return [...localItems, ...databaseItems.filter((item) => !seen.has(item.name?.toLowerCase()))];
};

const mergePackagesByTitle = (localItems: any[], databaseItems: any[]) => {
  const seen = new Set(localItems.map((item) => item.title?.toLowerCase()).filter(Boolean));
  return [...localItems, ...databaseItems.filter((item) => !seen.has(item.title?.toLowerCase()))];
};

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    label: "Swiss Alps",
  },
  {
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
    label: "Bali, Indonesia",
  },
  {
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
    label: "Dubai, UAE",
  },
  {
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80",
    label: "Maldives",
  },
  {
    img: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1920&q=80",
    label: "Kashmir, India",
  },
  {
    img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80",
    label: "Thailand",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroPaused = useRef(false);

  const [toast, setToast] = useState("");
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  // Authentication & Dashboard states
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSavedTrips, setShowSavedTrips] = useState(false);
  const [savedTripNames, setSavedTripNames] = useState<string[]>([]);
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signin");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [showEnquiries, setShowEnquiries] = useState(false);
  const [userEnquiries, setUserEnquiries] = useState<any[]>([]);
  const [enquiriesLoading, setEnquiriesLoading] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [authError, setAuthError] = useState("");

  // Dynamic Data & Search states
  const [dbDestinations, setDbDestinations] = useState<any[]>(destinations);
  const [dbPackages, setDbPackages] = useState<any[]>(packages);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllDestinations, setShowAllDestinations] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  // Booking Section States
  const [bookingTab, setBookingTab] = useState<"custom" | "package" | "visa">("custom");
  const [selectedPackageTitle, setSelectedPackageTitle] = useState("");
  const [selectedVisaCountry, setSelectedVisaCountry] = useState("");

  // Booking Modal States
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingModalTab, setBookingModalTab] = useState<"custom" | "package" | "visa">("custom");
  const [selectedModalPackageTitle, setSelectedModalPackageTitle] = useState("");
  const [selectedModalVisaCountry, setSelectedModalVisaCountry] = useState("");
  const [selectedModalCustomDestination, setSelectedModalCustomDestination] = useState("");
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Load remembered credentials
  useEffect(() => {
    const saved = localStorage.getItem("lmh_remember");
    if (saved) {
      try {
        const { email, password } = JSON.parse(saved);
        setAuthEmail(email || "");
        setAuthPassword(password || "");
        setRememberMe(true);
      } catch { }
    }
  }, []);

  // Auto-show Sign Up modal on first visit per session
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("lmh_visited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setAuthTab("signup");
        setShowAuthModal(true);
        sessionStorage.setItem("lmh_visited", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Hero auto-slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      if (!heroPaused.current) {
        setHeroSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (initialLoading) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [initialLoading, dbDestinations, dbPackages, showAllPackages, showAllDestinations]);

  useEffect(() => {
    if (initialLoading || !statsRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            stats.forEach((s, i) => {
              const dur = 1500;
              const start = performance.now();
              const step = (t: number) => {
                const p = Math.min((t - start) / dur, 1);
                const v = s.float ? +(s.n * p).toFixed(1) : Math.floor(s.n * p);
                setCounts((c) => {
                  const n = [...c];
                  n[i] = v;
                  return n;
                });
                if (p < 1) requestAnimationFrame(step);
              };
              requestAnimationFrame(step);
            });
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(statsRef.current);
    return () => io.disconnect();
  }, [initialLoading]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const selectBookingPackage = (packageTitle: string) => {
    setBookingModalTab("package");
    setSelectedModalPackageTitle(packageTitle);
    setShowBookingModal(true);
  };

  const selectBookingVisa = (visaCountry: string) => {
    setBookingModalTab("visa");
    setSelectedModalVisaCountry(visaCountry);
    setShowBookingModal(true);
  };

  const selectBookingCustom = () => {
    setBookingModalTab("custom");
    setSelectedModalPackageTitle("");
    setSelectedModalVisaCountry("");
    setSelectedModalCustomDestination("");
    setShowBookingModal(true);
  };

  const selectBookingCustomDestination = (destName: string) => {
    setBookingModalTab("custom");
    setSelectedModalCustomDestination(destName);
    setSelectedModalPackageTitle("");
    setSelectedModalVisaCountry("");
    setShowBookingModal(true);
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  // Auth State Listener
  useEffect(() => {
    if (!hasSupabaseConfig) return;

    let settled = false;
    const loadingFallback = window.setTimeout(() => {
      if (!settled) {
        settled = true;
        setInitialLoading(false);
      }
    }, AUTH_LOADING_TIMEOUT_MS);

    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(loadingFallback);
        setUser(session?.user ?? null);
        setInitialLoading(false);
      })
      .catch(() => {
        if (settled) return;
        settled = true;
        window.clearTimeout(loadingFallback);
        setInitialLoading(false);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      settled = true;
      window.clearTimeout(loadingFallback);
      setUser(session?.user ?? null);
      setInitialLoading(false);
      if (session?.user) {
        fetchUserEnquiries(session.user.email || "");
        setShowAuthModal(false);
      } else {
        setUserEnquiries([]);
      }
    });

    return () => {
      window.clearTimeout(loadingFallback);
      subscription.unsubscribe();
    };
  }, []);

  // Fetch Enquiries
  const fetchUserEnquiries = async (email: string) => {
    if (!email) return;
    setEnquiriesLoading(true);
    try {
      const { data, error } = await supabase
        .from("contact_enquiries")
        .select("*")
        .eq("email", email)
        .order("created_at", { ascending: false });
      if (error) {
        console.error("Error fetching enquiries:", error);
      } else {
        setUserEnquiries(data || []);
      }
    } catch (err) {
      console.error("Failed to load enquiries:", err);
    } finally {
      setEnquiriesLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchUserEnquiries(user.email);
    }
  }, [user]);

  // Fetch Dynamic Data from Supabase
  const fetchDynamicData = async () => {
    if (!hasSupabaseConfig) return;

    try {
      const { data: dests, error: destsErr } = await supabase.from("destinations").select("*");
      if (!destsErr && dests && dests.length > 0) {
        setDbDestinations(mergeByName(destinations, dests));
      }

      const { data: packs, error: packsErr } = await supabase.from("packages").select("*");
      if (!packsErr && packs && packs.length > 0) {
        setDbPackages(mergePackagesByTitle(packages, packs));
      }
    } catch (err) {
      console.error("Failed to load dynamic data from Supabase:", err);
    }
  };

  useEffect(() => {
    fetchDynamicData();
  }, []);

  const displayedDestinations = searchQuery
    ? dbDestinations.filter(
      (d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.country.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    : dbDestinations;

  const displayedPackages = searchQuery
    ? dbPackages.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.incl.some((i: string) => i.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    : dbPackages;

  // Handle Auth Form Submission
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail || !authPassword) return;
    if (authPassword.length < 6) {
      setAuthError("Password must be at least 6 characters.");
      return;
    }
    setAuthError("");
    setAuthLoading(true);
    try {
      if (authTab === "signin") {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: authEmail,
          password: authPassword,
        });
        if (error) {
          setAuthError(error.message);
        } else {
          // Save or clear remembered credentials
          if (rememberMe) {
            localStorage.setItem(
              "lmh_remember",
              JSON.stringify({ email: authEmail, password: authPassword }),
            );
          } else {
            localStorage.removeItem("lmh_remember");
          }
          setUser(data.user);
          showToast("Welcome back! Logged in successfully.");
          setShowAuthModal(false);
          setAuthEmail("");
          setAuthPassword("");
          setShowPassword(false);
          setAuthError("");
        }
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: authEmail,
          password: authPassword,
          options: {
            data: { email: authEmail },
          },
        });
        if (error) {
          setAuthError(error.message);
        } else {
          if (data.session) {
            setUser(data.user);
            showToast("Registration successful! Logged in.");
          } else {
            showToast("Registration successful! Please check your email to verify your account.");
          }
          setShowAuthModal(false);
          setAuthEmail("");
          setAuthPassword("");
          setShowPassword(false);
          setAuthError("");
        }
      }
    } catch (err: any) {
      setAuthError("Authentication failed. Please try again.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) {
        showToast(error.message);
        setGoogleLoading(false);
      }
    } catch (err: any) {
      showToast("Google connection failed.");
      console.error(err);
      setGoogleLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.error("Sign out error:", err);
    } finally {
      setUser(null);
      setUserEnquiries([]);
      setAvatarMenuOpen(false);
      showToast("Signed out successfully.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="bottom-right" richColors />
      {/* Header */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <header
          className={`pointer-events-auto transition-all duration-500 w-full max-w-7xl rounded-full border ${
            scrolled
              ? "bg-white/80 backdrop-blur-lg shadow-lg border-white/20 py-2 px-6"
              : "bg-white/90 backdrop-blur-md shadow-sm border-white/20 py-3 px-6"
          }`}
        >
          <nav className="flex items-center justify-between">
            <a href="#home" onClick={scrollTo("home")} className="flex items-center">
              <img
                src="/logo.png"
                alt="LookMyHolidays"
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
              />
          </a>
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {[
              "home",
              "destinations",
              "packages",
              "visa",
              "gallery",
              "blog",
              "contact",
            ].map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  onClick={scrollTo(s)}
                  className="capitalize hover:text-primary transition-colors"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setAvatarMenuOpen(!avatarMenuOpen)}
                  className="hidden md:inline-flex items-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground pl-2 pr-4 py-1.5 rounded-full text-sm font-semibold transition-colors cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden bg-primary text-primary-foreground font-bold flex items-center justify-center text-xs shrink-0">
                    {user.user_metadata?.avatar_url ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="User avatar"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      user.email?.[0].toUpperCase()
                    )}
                  </div>
                  <span className="max-w-[120px] truncate">
                    {user.user_metadata?.full_name || user.email?.split("@")[0]}
                  </span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground ml-[-2px]" />
                </button>
                {avatarMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border p-1 z-50 text-sm animate-in fade-in slide-in-from-top-3 duration-200">
                    <div className="px-3 py-2.5 border-b">
                      <p className="font-bold text-foreground truncate">
                        {user.user_metadata?.full_name || user.email?.split("@")[0]}
                      </p>
                      <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        setAvatarMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 font-medium cursor-pointer"
                    >
                      <User className="w-4 h-4 text-muted-foreground" />
                      My Profile
                    </button>
                    <button
                      onClick={() => {
                        setAvatarMenuOpen(false);
                        setShowEnquiries(true);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 font-medium cursor-pointer"
                    >
                      <Package className="w-4 h-4 text-muted-foreground" />
                      My Bookings
                    </button>
                    <button
                      onClick={() => {
                        setAvatarMenuOpen(false);
                        const names = destinations.filter(d => localStorage.getItem(`favorite-${d.name}`) === 'true').map(d => d.name);
                        setSavedTripNames(names);
                        setShowSavedTrips(true);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 font-medium cursor-pointer"
                    >
                      <Heart className="w-4 h-4 text-muted-foreground" />
                      Saved Trips
                    </button>
                    <button
                      onClick={() => {
                        setAvatarMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2 font-medium cursor-pointer"
                    >
                      <Settings className="w-4 h-4 text-muted-foreground" />
                      Settings
                    </button>
                    <div className="h-px bg-border my-1" />
                    <button
                      onClick={() => {
                        setAvatarMenuOpen(false);
                        handleSignOut();
                      }}
                      className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors flex items-center gap-2 font-medium cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  setAuthTab("signin");
                  setShowAuthModal(true);
                }}
                className="hidden md:inline-flex items-center gap-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer"
              >
                <User className="w-4 h-4 text-primary" />
                Sign In
              </button>
            )}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                selectBookingCustom();
              }}
              className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[var(--primary-dark)] transition-colors shadow-[var(--shadow-elegant)]"
            >
              Book Now
            </a>
            <button
              className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-accent text-primary"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="lg:hidden border-t bg-white">
            <ul className="px-4 py-3 space-y-1">
              {[
                "home",
                "destinations",
                "packages",
                "visa",
                "gallery",
                "blog",
                "contact",
              ].map((s) => (
                <li key={s}>
                  <a
                    href={`#${s}`}
                    onClick={scrollTo(s)}
                    className="block py-2 capitalize font-medium"
                  >
                    {s}
                  </a>
                </li>
              ))}
              {user ? (
                <>
                  <li className="border-t pt-3 mt-3 flex items-center gap-3 px-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden border bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shrink-0">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="User avatar"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        user.email?.[0].toUpperCase()
                      )}
                    </div>
                    <div className="truncate">
                      <p className="font-bold text-sm leading-tight text-foreground truncate">
                        {user.user_metadata?.full_name || user.email?.split("@")[0]}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                  </li>
                  <li className="mt-1">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      className="w-full text-left py-2 px-2 font-medium text-foreground hover:bg-accent rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <User className="w-4 h-4 text-muted-foreground" />
                      My Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setShowEnquiries(true);
                      }}
                      className="w-full text-left py-2 px-2 font-medium text-foreground hover:bg-accent rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Package className="w-4 h-4 text-muted-foreground" />
                      My Bookings
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        const names = destinations.filter(d => localStorage.getItem(`favorite-${d.name}`) === 'true').map(d => d.name);
                        setSavedTripNames(names);
                        setShowSavedTrips(true);
                      }}
                      className="w-full text-left py-2 px-2 font-medium text-foreground hover:bg-accent rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Heart className="w-4 h-4 text-muted-foreground" />
                      Saved Trips
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                      }}
                      className="w-full text-left py-2 px-2 font-medium text-foreground hover:bg-accent rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Settings className="w-4 h-4 text-muted-foreground" />
                      Settings
                    </button>
                  </li>
                  <li className="my-1 border-t border-border"></li>
                  <li>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        handleSignOut();
                      }}
                      className="w-full text-left py-2 px-2 font-medium text-destructive hover:bg-destructive/5 rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="border-t pt-3 mt-3">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      setAuthTab("signin");
                      setShowAuthModal(true);
                    }}
                    className="w-full text-left py-2 px-2 font-semibold text-primary hover:bg-primary/5 rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <User className="w-4 h-4" />
                    Sign In / Sign Up
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
        </header>
      </div>

      {/* Hero */}
      <Hero
        heroSlides={heroSlides}
        heroSlide={heroSlide}
        setHeroSlide={setHeroSlide}
        heroPaused={heroPaused}
        scrollTo={scrollTo}
        selectBookingCustom={selectBookingCustom}
        setSearchQuery={setSearchQuery}
        showToast={showToast}
      />

      {/* Destinations */}
      <Destinations
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        displayedDestinations={displayedDestinations}
        displayedPackages={displayedPackages}
        showAllDestinations={showAllDestinations}
        setShowAllDestinations={setShowAllDestinations}
        selectBookingCustomDestination={selectBookingCustomDestination}
      />

      {/* Packages */}
      <TrendingPackages
        displayedPackages={displayedPackages}
        searchQuery={searchQuery}
        showAllPackages={showAllPackages}
        setShowAllPackages={setShowAllPackages}
        selectBookingPackage={selectBookingPackage}
        FEATURED_PACKAGE_COUNT={FEATURED_PACKAGE_COUNT}
      />



      {/* Stats */}
      <Statistics />

      {/* Gallery */}
      <section id="gallery" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-14 reveal">
            <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3">MOMENTS</p>
            <h2 className="text-4xl md:text-5xl font-extrabold">Postcards from our travellers</h2>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Travel moment ${i + 1}`}
                className="reveal w-full rounded-2xl hover:opacity-90 transition-opacity break-inside-avoid"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Visa Services */}
      <VisaServices selectBookingVisa={selectBookingVisa} data={visaServices} />

      {/* Blog */}
      <section id="blog" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-14 reveal">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3">TRAVEL BLOG</p>
              <h2 className="text-4xl md:text-5xl font-extrabold">
                Inspiration for your next adventure
              </h2>
            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((b) => (
              <article
                key={b.title}
                className="reveal bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-[var(--shadow-elegant)] transition-all border flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold mb-3">
                      <span>{b.date}</span>
                      <span>{b.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                      {b.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t mt-auto">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold grid place-items-center text-xs">
                      {b.author[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold">{b.author}</p>
                      <p className="text-[10px] text-muted-foreground">Travel Expert</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12">
          <div className="reveal">
            <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
              Have questions? Let's talk.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Feel free to send us a general enquiry, message or ask any travel question, and our
              support team will reply within 24 hours.
            </p>
            <div className="space-y-5">
              {[
                ["☎", "Call us", "+91 95291 55562"],
                ["✉", "Email us", "resv@lookmyholidays.in"],
                ["⌖", "Visit us", "FF-35, JTM Mall, Jagatpura, Jaipur, India"],
              ].map(([icon, label, val]) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-accent text-primary grid place-items-center text-xl shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="font-semibold">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const fd = new FormData(form);
              const name = fd.get("name") as string;
              const email = fd.get("email") as string;
              if (!name || !email) return;

              showToast("Sending your inquiry...");

              try {
                const { error } = await supabase.from("general_inquiries").insert([
                  {
                    name,
                    phone: (fd.get("phone") as string) || "",
                    email,
                    destination: (fd.get("destination") as string) || "General Inquiry",
                    travel_date: fd.get("date") ? (fd.get("date") as string) : null,
                    message: (fd.get("message") as string) || "",
                  },
                ]);

                if (error) {
                  console.error("Supabase general enquiry error:", error);
                  setShowBookingSuccess(true);
                  form.reset();
                } else {
                  setShowBookingSuccess(true);
                  form.reset();
                  if (user?.email) {
                    fetchUserEnquiries(user.email);
                  }
                }
              } catch (err) {
                console.error("Failed to submit general enquiry:", err);
                setShowBookingSuccess(true);
                form.reset();
              }
            }}
            className="reveal bg-card border rounded-3xl p-7 md:p-9 shadow-sm space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Your name *"
                defaultValue={user ? user.email?.split("@")[0] : ""}
                key={user ? `contact-name-${user.email}` : "contact-name-guest"}
                className="w-full bg-muted/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <input
                name="phone"
                required
                placeholder="Phone *"
                className="w-full bg-muted/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
            <input
              name="email"
              type="email"
              required
              placeholder="Email address *"
              defaultValue={user?.email || ""}
              key={user ? `contact-email-${user.email}` : "contact-email-guest"}
              className="w-full bg-muted/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="destination"
                placeholder="Destination"
                className="w-full bg-muted/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <input
                name="date"
                type="date"
                className="w-full bg-muted/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us more about your trip, questions, or requirements..."
              className="w-full bg-muted/50 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <button className="w-full bg-primary hover:bg-[var(--primary-dark)] text-primary-foreground font-semibold py-3.5 rounded-full transition-colors shadow-[var(--shadow-elegant)] cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919529155562"
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="pulse-ring fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.527 5.856L.057 23.882a.5.5 0 0 0 .61.61l6.026-1.47A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.854 9.854 0 0 1-5.031-1.374l-.36-.214-3.733.91.927-3.733-.234-.373A9.854 9.854 0 0 1 2.1 12C2.1 6.53 6.53 2.1 12 2.1c5.47 0 9.9 4.43 9.9 9.9 0 5.47-4.43 9.9-9.9 9.9z" />
        </svg>
      </a>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 right-6 z-50 bg-foreground text-background px-5 py-3 rounded-full text-sm shadow-xl">
          {toast}
        </div>
      )}

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative border animate-in zoom-in-95 duration-200 overflow-hidden">
            {/* Header Banner */}
            <div className="bg-gradient-to-br from-primary to-orange-600 px-8 pt-8 pb-10 text-white text-center relative">
              <button
                onClick={() => {
                  setShowAuthModal(false);
                  setAuthEmail("");
                  setAuthPassword("");
                  setShowPassword(false);
                  setAuthError("");
                }}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 text-white grid place-items-center font-bold text-sm cursor-pointer hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
              <div className="text-4xl mb-2 animate-float">✈️</div>
              <h2 className="text-xl font-extrabold">
                {authTab === "signin" ? "Welcome Back!" : "Join LookMyHolidays"}
              </h2>
              <p className="text-white/80 text-xs mt-1">
                {authTab === "signin"
                  ? "Sign in to manage your bookings"
                  : "Create your free travel account"}
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex border-b bg-muted/30">
              <button
                type="button"
                onClick={() => {
                  setAuthTab("signin");
                  setShowPassword(false);
                  setAuthError("");
                }}
                className={`flex-1 py-3.5 text-sm font-bold transition-all relative cursor-pointer ${authTab === "signin"
                    ? "text-primary bg-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/60"
                  }`}
              >
                Sign In
                {authTab === "signin" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthTab("signup");
                  setShowPassword(false);
                  setAuthError("");
                }}
                className={`flex-1 py-3.5 text-sm font-bold transition-all relative cursor-pointer ${authTab === "signup"
                    ? "text-primary bg-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/60"
                  }`}
              >
                Sign Up
                {authTab === "signup" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            </div>

            <div className="p-6 md:p-8">
              <form onSubmit={handleAuthSubmit} className="space-y-4" autoComplete="on">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={authEmail}
                      onChange={(e) => {
                        setAuthEmail(e.target.value);
                        setAuthError("");
                      }}
                      placeholder="your@email.com"
                      className="w-full bg-muted/50 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary text-sm transition-all border border-transparent focus:border-primary/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete={authTab === "signin" ? "current-password" : "new-password"}
                      value={authPassword}
                      onChange={(e) => {
                        setAuthPassword(e.target.value);
                        setAuthError("");
                      }}
                      placeholder="••••••••"
                      className="w-full bg-muted/50 rounded-xl pl-11 pr-11 py-3 outline-none focus:ring-2 focus:ring-primary text-sm transition-all border border-transparent focus:border-primary/30"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer focus:outline-none p-1"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {authTab === "signup" && (
                    <p className="text-[10px] text-muted-foreground mt-1.5 flex items-start gap-1">
                      <AlertCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      Password must be at least 6 characters.
                    </p>
                  )}
                </div>

                {/* Error message */}
                {authError && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs px-3 py-2.5 rounded-xl">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                {/* Remember Me (only for Sign In) */}
                {authTab === "signin" && (
                  <label className="flex items-center gap-2.5 cursor-pointer select-none group">
                    <div
                      onClick={() => setRememberMe(!rememberMe)}
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${rememberMe
                          ? "bg-primary border-primary"
                          : "border-muted-foreground/40 hover:border-primary"
                        }`}
                    >
                      {rememberMe && <span className="text-white text-[10px] font-bold">✓</span>}
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Remember me
                    </span>
                  </label>
                )}

                <button
                  disabled={authLoading || googleLoading}
                  className="w-full bg-primary hover:bg-[var(--primary-dark)] text-primary-foreground font-semibold py-3.5 rounded-full transition-all disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer shadow-[var(--shadow-elegant)] hover:shadow-lg"
                >
                  {authLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : authTab === "signin" ? (
                    "Sign In"
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-muted" />
                  <span className="flex-shrink mx-4 text-xs text-muted-foreground uppercase font-semibold">
                    Or
                  </span>
                  <div className="flex-grow border-t border-muted" />
                </div>

                <button
                  type="button"
                  disabled={authLoading || googleLoading}
                  onClick={handleGoogleSignIn}
                  className="w-full h-[64px] flex items-center justify-center gap-3 bg-white border border-border/50 hover:bg-gray-50 text-gray-800 font-semibold rounded-full transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-70"
                >
                  {googleLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  ) : (
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  )}
                  <span>{googleLoading ? "Connecting to Google..." : "Continue with Google"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Saved Trips Modal */}
      {showSavedTrips && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl relative border animate-in zoom-in-95 duration-200 overflow-hidden">
            <div className="px-6 py-5 border-b flex items-center justify-between bg-white z-10 sticky top-0 shadow-sm">
              <h2 className="text-2xl font-bold flex items-center gap-3"><Heart className="w-6 h-6 text-red-500 fill-red-500" /> Saved Trips</h2>
              <button onClick={() => setShowSavedTrips(false)} className="text-muted-foreground hover:bg-muted p-2 rounded-full transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto bg-gray-50/50 flex-1">
              {(() => {
                const savedTrips = destinations.filter(d => savedTripNames.includes(d.name));
                
                if (savedTrips.length === 0) {
                  return (
                    <div className="text-center py-20 flex flex-col items-center justify-center">
                      <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
                        <Heart className="w-12 h-12 text-red-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">No saved trips yet</h3>
                      <p className="text-muted-foreground max-w-sm mb-6">Hit the ❤️ heart on any destination card to save it here.</p>
                      <button onClick={() => setShowSavedTrips(false)} className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity cursor-pointer">Explore destinations</button>
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-8">
                    {savedTrips.map((dest, i) => (
                      <DestinationCard key={dest.name} dest={dest} index={i} />
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Enquiries Dashboard Modal */}
      {showEnquiries && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-6 md:p-8 shadow-2xl relative border flex flex-col max-h-[85vh]">
            <button
              onClick={() => setShowEnquiries(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent text-primary grid place-items-center font-bold text-sm"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-1">My Enquiries</h3>
            <p className="text-xs text-muted-foreground mb-6">
              History of your holiday and visa enquiries under {user?.email}
            </p>

            <div className="overflow-y-auto flex-1 space-y-4 pr-1">
              {enquiriesLoading ? (
                <p className="text-center text-sm text-muted-foreground py-8">
                  Loading your history...
                </p>
              ) : userEnquiries.length === 0 ? (
                <div className="text-center py-12">
                  <span className="text-4xl block mb-2">✈</span>
                  <p className="text-sm font-semibold text-muted-foreground">No enquiries found</p>
                  <p className="text-xs text-muted-foreground/85 mt-1">
                    Submit your travel booking or visa form to see them here.
                  </p>
                </div>
              ) : (
                userEnquiries.map((e: any) => (
                  <div
                    key={e.id}
                    className="border rounded-2xl p-4 bg-card hover:shadow-sm transition-all"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h4 className="font-bold text-foreground">
                        {e.destination ? `Trip to ${e.destination}` : "General Enquiry"}
                      </h4>
                      <span className="text-[10px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
                        {new Date(e.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
                      <p>
                        <span className="font-semibold text-foreground">Phone:</span>{" "}
                        {e.phone || "N/A"}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Travel Date:</span>{" "}
                        {e.travel_date ? new Date(e.travel_date).toLocaleDateString() : "N/A"}
                      </p>
                    </div>
                    {e.message && (
                      <div className="bg-muted/30 p-2.5 rounded-lg text-xs leading-relaxed text-muted-foreground border-l-2 border-primary">
                        {e.message}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
      {/* Booking & Enquiry Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative border flex flex-col max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => {
                setShowBookingModal(false);
                setSelectedModalPackageTitle("");
                setSelectedModalVisaCountry("");
              }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent text-primary grid place-items-center font-bold text-sm hover:scale-105 transition-transform cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-1">Book Your Holiday</h3>
            <p className="text-xs text-muted-foreground mb-6">
              Fill in the details below to request a booking or general consultation.
            </p>

            {/* Modal Tab Selectors */}
            <div className="grid grid-cols-3 gap-2 bg-muted/50 p-1.5 rounded-2xl mb-6">
              {(["custom", "package", "visa"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setBookingModalTab(tab)}
                  className={`py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${bookingModalTab === tab
                      ? "bg-primary text-primary-foreground shadow"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                >
                  {tab === "custom" ? "🗺 Custom" : tab === "package" ? "📦 Package" : "🛂 Visa"}
                </button>
              ))}
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);
                const name = fd.get("name") as string;
                const email = fd.get("email") as string;
                if (!name || !email) return;

                let destinationVal = fd.get("destination") as string;
                if (bookingModalTab === "package") {
                  destinationVal = selectedModalPackageTitle
                    ? `${selectedModalPackageTitle} (Package)`
                    : "Package Enquiry";
                } else if (bookingModalTab === "visa") {
                  destinationVal = selectedModalVisaCountry
                    ? `${selectedModalVisaCountry} (Visa)`
                    : "Visa Enquiry";
                }

                const travellers = fd.get("travellers") as string;
                const msg = fd.get("message") as string;
                const formattedMessage = `[Travellers: ${travellers}] ${msg || ""}`.trim();

                showToast("Submitting your booking request...");

                try {
                  const { error } = await supabase.from("contact_enquiries").insert([
                    {
                      name,
                      phone: (fd.get("phone") as string) || "",
                      email,
                      destination: destinationVal || "Custom Trip Inquiry",
                      travel_date: fd.get("date") ? (fd.get("date") as string) : null,
                      message: formattedMessage,
                    },
                  ]);

                  if (error) {
                    console.error("Supabase booking modal error:", error);
                    setShowBookingModal(false);
                    setShowBookingSuccess(true);
                    form.reset();
                  } else {
                    setShowBookingModal(false);
                    setShowBookingSuccess(true);
                    setSelectedModalPackageTitle("");
                    setSelectedModalVisaCountry("");
                    form.reset();
                    // Refresh enquiries in real-time
                    if (user?.email) {
                      fetchUserEnquiries(user.email);
                    }
                  }
                } catch (err) {
                  console.error("Failed to submit modal booking:", err);
                  showToast("Booking request sent! We'll contact you shortly.");
                  setShowBookingModal(false);
                  form.reset();
                }
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="John Doe"
                    defaultValue={user ? user.email?.split("@")[0] : ""}
                    key={user ? `modal-name-${user.email}` : "modal-name-guest"}
                    className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    required
                    placeholder="Phone *"
                    className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  defaultValue={user?.email || ""}
                  key={user ? `modal-email-${user.email}` : "modal-email-guest"}
                  className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              {/* Dynamic selections based on tab */}
              {bookingModalTab === "custom" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Where to? *
                    </label>
                    <input
                      name="destination"
                      required
                      defaultValue={selectedModalCustomDestination}
                      key={selectedModalCustomDestination || "default-custom"}
                      placeholder="e.g. Hawaii, Japan"
                      className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Travel Date *
                    </label>
                    <input
                      name="date"
                      required
                      type="date"
                      className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>
              )}

              {bookingModalTab === "package" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Holiday Package *
                    </label>
                    <select
                      name="destination"
                      required
                      value={selectedModalPackageTitle}
                      onChange={(e) => setSelectedModalPackageTitle(e.target.value)}
                      className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm font-medium"
                    >
                      <option value="" disabled>
                        Select a package...
                      </option>
                      {dbPackages.map((p) => (
                        <option key={p.id || p.title} value={p.title}>
                          {p.title} ({p.nights})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Travel Date *
                    </label>
                    <input
                      name="date"
                      required
                      type="date"
                      className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>
              )}

              {bookingModalTab === "visa" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Visa Country *
                    </label>
                    <select
                      name="destination"
                      required
                      value={selectedModalVisaCountry}
                      onChange={(e) => setSelectedModalVisaCountry(e.target.value)}
                      className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm font-medium"
                    >
                      <option value="" disabled>
                        Select country...
                      </option>
                      {visaServices.map((v) => (
                        <option key={v.country} value={v.country}>
                          {v.country} - {v.processingTime}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Travel Date *
                    </label>
                    <input
                      name="date"
                      required
                      type="date"
                      className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">
                    Number of Travellers
                  </label>
                  <select
                    name="travellers"
                    className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm font-medium"
                  >
                    <option value="2 Adults">2 Adults</option>
                    <option value="1 Adult">1 Adult</option>
                    <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                    <option value="Family / Group (4+)">Family / Group (4+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1">
                  Preferences & Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about hotels, flights or specific requests..."
                  className="w-full bg-muted/50 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-[var(--primary-dark)] text-primary-foreground font-semibold py-3 rounded-full transition-colors shadow-lg cursor-pointer text-sm mt-2"
              >
                Send Booking Request
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Booking Success Popup */}
      {showBookingSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-sm p-8 shadow-2xl relative border flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary shadow-inner">
              <ThumbsUp className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Request Successful!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you! We have received your request and our team will contact you shortly to
              confirm your details.
            </p>
            <button
              onClick={() => setShowBookingSuccess(false)}
              className="w-full bg-primary hover:bg-[var(--primary-dark)] text-primary-foreground font-semibold py-3 rounded-full transition-colors shadow-lg cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
      {/* Subscribe Success Popup */}
      {showSubscribeSuccess && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-sm p-8 shadow-2xl relative border flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary shadow-inner">
              <ThumbsUp className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Subscription Successful!</h3>
            <p className="text-muted-foreground mb-6">
              You've successfully subscribed to our newsletter. We'll send you the best travel deals
              and updates!
            </p>
            <button
              onClick={() => setShowSubscribeSuccess(false)}
              className="w-full bg-primary hover:bg-[var(--primary-dark)] text-primary-foreground font-semibold py-3 rounded-full transition-colors shadow-lg cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
