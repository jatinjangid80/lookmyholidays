import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const FEATURED_PACKAGE_COUNT = 6;

export function TrendingPackages({
  displayedPackages,
  searchQuery,
  showAllPackages,
  setShowAllPackages,
  selectBookingPackage
}: any) {
  return (
    <section id="packages" className="py-24 bg-accent/20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3">TRENDING</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">Trending Packages</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            All-inclusive deals crafted by our experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedPackages
            .slice(0, showAllPackages || searchQuery ? undefined : FEATURED_PACKAGE_COUNT)
            .map((p: any, i: number) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-[var(--shadow-elegant)] transition-shadow border flex flex-col sm:flex-row h-full group"
              >
                <div className="sm:w-2/5 relative overflow-hidden min-h-[240px] sm:min-h-full">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.tag && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 font-semibold">
                      <span className="bg-muted px-2.5 py-1 rounded-md">{p.nights}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {p.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.incl?.map((i: string, j: number) => (
                        <span
                          key={j}
                          className="text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded-full"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end justify-between border-t pt-4 mt-auto">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-extrabold text-primary">{p.price}</p>
                    </div>
                    <button
                      onClick={() => selectBookingPackage(p.title)}
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 group"
                    >
                      Book Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>
        
        {displayedPackages.length > FEATURED_PACKAGE_COUNT && (
          <motion.div 
            className="flex justify-end mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/packages"
              className="text-[#ff6200] hover:text-[#e65800] no-underline font-bold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer group outline-none focus:outline-none"
            >
              View All Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
