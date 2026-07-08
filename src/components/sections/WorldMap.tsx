import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for the map hotspots
const hotspots = [
  { id: 'ind', name: 'India', top: '55%', left: '70%', price: '₹15,000', packages: 25, visa: 'Not Required' },
  { id: 'eur', name: 'Europe', top: '35%', left: '50%', price: '₹95,000', packages: 40, visa: 'Schengen' },
  { id: 'uae', name: 'UAE', top: '48%', left: '63%', price: '₹42,000', packages: 15, visa: 'eVisa' },
  { id: 'sea', name: 'SE Asia', top: '60%', left: '78%', price: '₹35,000', packages: 30, visa: 'On Arrival' },
];

export function WorldMap() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden text-white">
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3">GLOBAL PRESENCE</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">Discover Destinations</h2>
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-white/5 rounded-3xl border border-white/10 p-4 md:p-8 overflow-hidden shadow-2xl">
          {/* Abstract SVG Map Background */}
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-30 drop-shadow-lg" fill="currentColor">
            <path d="M120,150 Q180,100 250,160 T350,140 Q450,180 500,120 T650,160 T750,100 Q800,180 850,130 T950,150 L950,450 L50,450 Z" className="text-primary/50" />
            <path d="M50,200 Q150,150 200,250 T300,200 Q400,300 450,220 T550,250 T650,200 Q750,250 800,180 T950,220 L950,500 L50,500 Z" className="text-white/20" />
          </svg>

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <div 
              key={spot.id}
              className="absolute"
              style={{ top: spot.top, left: spot.left }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <div className="relative cursor-pointer group">
                {/* Ping animation */}
                <span className="absolute -inset-2 bg-primary/40 rounded-full animate-ping opacity-75"></span>
                <span className="relative flex h-4 w-4 bg-primary rounded-full border-2 border-black"></span>
                
                {/* Tooltip */}
                <AnimatePresence>
                  {activeHotspot === spot.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-50"
                    >
                      <h4 className="font-bold text-lg text-primary">{spot.name}</h4>
                      <div className="mt-2 space-y-1 text-sm text-white/80">
                        <p>From: <span className="font-semibold text-white">{spot.price}</span></p>
                        <p>Packages: <span className="font-semibold text-white">{spot.packages}</span></p>
                        <p>Visa: <span className="font-semibold text-white">{spot.visa}</span></p>
                      </div>
                      {/* Triangle pointer */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white/20" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
