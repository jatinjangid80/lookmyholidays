import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';

interface HeroProps {
  heroSlides: { img: string; label: string }[];
  heroSlide: number;
  setHeroSlide: (index: number) => void;
  heroPaused: React.MutableRefObject<boolean>;
  scrollTo: (id: string) => (e: React.MouseEvent) => void;
  selectBookingCustom: () => void;
  setSearchQuery: (query: string) => void;
  showToast: (msg: string) => void;
}

export function Hero({
  heroSlides,
  heroSlide,
  setHeroSlide,
  heroPaused,
  scrollTo,
  selectBookingCustom,
  setSearchQuery,
  showToast,
}: HeroProps) {
  // Stagger text animation
  const titleText = "Find Your Perfect Holiday Package Today.";
  const titleChars = titleText.split('');

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
      onMouseEnter={() => {
        heroPaused.current = true;
      }}
      onMouseLeave={() => {
        heroPaused.current = false;
      }}
    >
      {/* Animated Background Slides */}
      {heroSlides.map((slide, i) => (
        <motion.div
          key={slide.img}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slide.img}')` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: i === heroSlide ? 1 : 0,
            scale: i === heroSlide ? 1 : 1.1,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </motion.div>
      ))}

      {/* Floating Light Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[120px] pointer-events-none z-0"
      />



      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 w-full text-white">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md"
          >
            ✈ Trusted by 12,000+ travellers
          </motion.span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 flex flex-wrap gap-[0.2em]">
            {titleText.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={charVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: 0.4 + (wordIndex * 0.1) + (charIndex * 0.03),
                      duration: 0.5,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className={`inline-block ${word === 'Holiday' ? 'text-primary' : ''}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-lg md:text-xl text-white/85 max-w-2xl mb-8"
          >
            Customized tour packages, smooth visa support, and a 24/7 concierge — crafted by
            people who actually travel.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#packages"
              onClick={scrollTo("packages")}
              className="bg-primary hover:bg-[var(--primary-dark)] text-primary-foreground font-semibold px-7 py-3.5 rounded-full transition-colors shadow-[var(--shadow-elegant)] relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Explore Packages</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                selectBookingCustom();
              }}
              className="bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-colors cursor-pointer"
            >
              Get a Quote
            </motion.a>
          </motion.div>
        </div>

        {/* Search card */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            const destination = fd.get("destination") as string;
            if (!destination) return;

            showToast("Searching curated trips…");
            setSearchQuery(destination);

            // Scroll down to see matching results
            const el = document.getElementById("destinations");
            if (el) window.scrollTo({ top: el.offsetTop - 85, behavior: "smooth" });

            try {
              // Save search history
              await supabase.from("searches").insert([
                {
                  destination,
                  check_in: fd.get("check_in") ? (fd.get("check_in") as string) : null,
                  travellers: fd.get("travellers") as string,
                },
              ]);
            } catch (err) {
              console.error("Failed to save search to Supabase:", err);
            }
          }}
          className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl p-4 md:p-5 grid grid-cols-1 md:grid-cols-5 gap-3 shadow-[0_0_40px_rgba(8,145,178,0.2)] hover:shadow-[0_0_60px_rgba(8,145,178,0.3)] transition-shadow duration-500 relative z-20"
        >
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-white/70 mb-1">
              Destination
            </label>
            <input
              required
              name="destination"
              placeholder="Where to?"
              className="w-full bg-white/20 border border-white/10 text-white placeholder:text-white/50 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary focus:bg-white/30 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1">
              Check-in
            </label>
            <input
              required
              name="check_in"
              type="date"
              className="w-full bg-white/20 border border-white/10 text-white placeholder:text-white/50 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary focus:bg-white/30 transition-all [color-scheme:dark]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1">
              Travellers
            </label>
            <select
              name="travellers"
              className="w-full bg-white/20 border border-white/10 text-white placeholder:text-white/50 rounded-lg px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary focus:bg-white/30 transition-all [&>option]:text-black"
            >
              <option>2 Adults</option>
              <option>1 Adult</option>
              <option>2 Adults, 1 Child</option>
              <option>Family (4+)</option>
            </select>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary hover:bg-[var(--primary-dark)] text-primary-foreground font-semibold rounded-lg px-5 py-2.5 mt-auto shadow-lg shadow-primary/30 cursor-pointer"
          >
            Search
          </motion.button>
        </motion.form>

        {/* Slide Dots + Location Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex items-center gap-3 mt-8"
        >
          <span className="text-white/70 text-xs font-semibold tracking-wider uppercase bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
            📍 {heroSlides[heroSlide].label}
          </span>
          <div className="flex items-center gap-2 ml-auto">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  i === heroSlide ? "bg-primary scale-150 w-6" : "bg-white/50 hover:bg-white"
                }`}
                onClick={() => setHeroSlide(i)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
