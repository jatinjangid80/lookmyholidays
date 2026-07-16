import { Facebook, Instagram, Youtube, Plane, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[oklch(0.18_0.02_50)] text-white/80 relative overflow-hidden pt-12 mt-10">
      {/* Wave Animation */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>

      {/* Animated Airplanes (Fleet) */}
      {[
        { id: 1, size: 140, top: "top-10 md:top-20", delay: 0, duration: 15, yStart: 80, yEnd: -20, rotate: 15, opacity: "text-white/15" },
        { id: 2, size: 80, top: "top-32 md:top-40", delay: 4, duration: 18, yStart: 40, yEnd: -10, rotate: 10, opacity: "text-white/5" },
        { id: 3, size: 110, top: "top-5 md:top-10", delay: 9, duration: 12, yStart: 120, yEnd: 0, rotate: 20, opacity: "text-white/10" },
        { id: 4, size: 60, top: "top-48 md:top-60", delay: 2, duration: 25, yStart: 20, yEnd: 10, rotate: 5, opacity: "text-white/[0.03]" },
        { id: 5, size: 90, top: "top-20 md:top-32", delay: 13, duration: 16, yStart: 60, yEnd: -15, rotate: 12, opacity: "text-white/10" },
      ].map((plane) => (
        <motion.div 
          key={plane.id}
          className={`absolute ${plane.top} z-0 ${plane.opacity}`}
          initial={{ x: "-20vw", y: plane.yStart, rotate: plane.rotate }}
          animate={{ x: "120vw", y: plane.yEnd, rotate: plane.rotate }}
          transition={{ 
            duration: plane.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: plane.delay 
          }}
        >
          <Plane size={plane.size} />
        </motion.div>
      ))}

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 py-8 grid md:grid-cols-4 gap-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <img src="/logo.png" alt="LookMyHolidays" className="h-16 md:h-20 w-auto object-contain" />
          </div>
          <p className="text-sm mb-6 leading-relaxed">
            Crafting holidays since 2011. Customized journeys, honest pricing, and people who care.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ y: -8 }}
              href="https://www.facebook.com/lookmyholidaysjpr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(24,119,242,0.6)]"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -8 }}
              href="https://www.instagram.com/lookmyholidays_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(228,64,95,0.6)]"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -8 }}
              href="https://youtube.com/@lookmyholidays7631?si=SuYkSXD-YWH-Xz0r"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            {["Home", "Destinations", "Packages", "Visa", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={scrollTo(l.toLowerCase())}
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
            Top Destinations
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            {["Bali", "Maldives", "Dubai", "Switzerland", "Thailand"].map((l) => (
              <li key={l}>
                <a
                  href="#destinations"
                  onClick={scrollTo("destinations")}
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-white font-bold mb-6 text-lg relative inline-block">
            Contact & Subscribe
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h4>
          <ul className="space-y-4 text-sm mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">📍</span>
              <span>FF-35, JTM Mall, Jagatpura, Jaipur</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">📞</span>
              <span>+91 95291 55562</span>
            </li>
          </ul>
          
          {/* Newsletter Glow */}
          <div className="relative group mt-6 max-w-xs">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-lg blur-md opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 z-0"></div>
            <div className="relative flex bg-black/40 rounded-lg p-1 backdrop-blur-sm border border-white/10 z-10">
              <input 
                type="email" 
                placeholder="Email address..." 
                className="w-full bg-transparent px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:placeholder:text-white/60 transition-colors"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-md transition-colors flex items-center justify-center shadow-lg">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10 py-3 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-xs text-white/50 relative z-10">
        <p>© {new Date().getFullYear()} LookMyHolidays. All rights reserved.</p>
        <span className="hidden sm:inline text-white/30">|</span>
        <p>Designed and deployed by <span className="text-primary/80">Jatin Jangid</span></p>
      </div>
    </footer>
  );
}
