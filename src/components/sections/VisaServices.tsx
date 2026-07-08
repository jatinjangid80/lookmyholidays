import { motion } from "framer-motion";

export type VisaServiceData = {
  country: string;
  processingTime: string;
  type: string;
  requirement: string;
  price: string;
};

interface VisaServicesProps {
  selectBookingVisa: (country: string) => void;
  data?: VisaServiceData[];
}

export function VisaServices({ selectBookingVisa, data = [] }: VisaServicesProps) {
  if (!data || data.length === 0) return null;

  return (
    <section id="visa" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Hassle-Free Visa Assistance</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We offer comprehensive documentation, filing, and tracking support for 40+ countries.
            </p>
          </motion.div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: Math.min((index % 6) * 0.05, 0.5) }}
              className="bg-card rounded-2xl p-6 shadow-sm border flex flex-col h-full"
            >
              <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
                <h3 className="text-xl font-bold">{item.country}</h3>
                <span className="text-xs bg-[#ff6200]/10 text-[#ff6200] px-3 py-1 rounded-full font-medium whitespace-nowrap">
                  {item.processingTime}
                </span>
              </div>
              
              <div className="space-y-4 text-sm flex-grow mb-6">
                <div>
                  <span className="font-bold">Type:</span> <span className="text-muted-foreground">{item.type}</span>
                </div>
                <div>
                  <div className="font-bold mb-1">Key Requirements:</div>
                  <div className="text-muted-foreground leading-relaxed">{item.requirement}</div>
                </div>
              </div>

              <hr className="border-border/50 mb-6" />

              <div className="flex flex-wrap items-end justify-between gap-4 mt-auto">
                <div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mb-1">
                    SERVICE FEE STARTS AT
                  </div>
                  <div className="text-xl font-bold text-[#ff6200]">
                    {item.price}
                  </div>
                </div>
                <button
                  onClick={() => selectBookingVisa(`${item.country} (${item.type})`)}
                  className="bg-[#ff6200]/10 hover:bg-[#ff6200]/20 text-[#ff6200] font-bold px-5 py-2.5 rounded-full transition-colors text-sm cursor-pointer whitespace-nowrap"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
