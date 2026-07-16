import { motion } from 'framer-motion';
import { DestinationCard } from '../ui/DestinationCard';
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface DestinationsProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  displayedDestinations: any[];
  displayedPackages: any[];
  showAllDestinations: boolean;
  setShowAllDestinations: (s: boolean) => void;
  selectBookingCustomDestination: (name: string) => void;
}

export function Destinations({
  searchQuery,
  setSearchQuery,
  displayedDestinations,
  displayedPackages,
  showAllDestinations,
  setShowAllDestinations,
  selectBookingCustomDestination
}: DestinationsProps) {
  return (
    <section id="destinations" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3">DESTINATIONS</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Where will you go next?</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Hand-picked destinations our travellers loved last season.
          </p>
        </motion.div>

        {searchQuery && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-between bg-primary/10 text-primary px-5 py-3 rounded-2xl mb-8"
          >
            <span className="text-sm font-semibold">Showing results for "{searchQuery}"</span>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold bg-primary text-primary-foreground px-3 py-1.5 rounded-full hover:bg-[var(--primary-dark)] transition-colors cursor-pointer"
            >
              Clear Search
            </button>
          </motion.div>
        )}

        {displayedDestinations.length === 0 && displayedPackages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-3xl border border-dashed mb-8 shadow-sm"
          >
            <span className="text-4xl block mb-2">🔍</span>
            <p className="text-sm font-semibold text-muted-foreground">
              No matches found for "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-primary underline mt-2 hover:no-underline cursor-pointer"
            >
              Show all packages and destinations
            </button>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedDestinations
            .slice(0, showAllDestinations || searchQuery ? undefined : 8)
            .map((d, i) => (
              <div key={d.id || d.name} onClick={() => selectBookingCustomDestination(d.name)}>
                <DestinationCard dest={d} index={i} />
              </div>
            ))}
        </div>

        {!searchQuery && displayedDestinations.length > 8 && (
          <motion.div 
            className="flex justify-end mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/destinations"
              className="text-[#ff6200] hover:text-[#e65800] no-underline font-bold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer group"
            >
              View All Destinations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
