import { createFileRoute, Link } from "@tanstack/react-router";
import { packages } from "./index";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">All Packages</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Explore our curated holiday packages for every kind of traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((p: any, i: number) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
              className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-[var(--shadow-elegant)] transition-shadow border flex flex-col sm:flex-row h-full group bg-white"
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
                    {p.incl?.map((inclItem: string, j: number) => (
                      <span
                        key={j}
                        className="text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded-full"
                      >
                        {inclItem}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-end justify-between border-t pt-4 mt-auto">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="text-2xl font-extrabold text-primary">{p.price}</p>
                  </div>
                  <Link
                    to="/"
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 group"
                  >
                    Book Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
