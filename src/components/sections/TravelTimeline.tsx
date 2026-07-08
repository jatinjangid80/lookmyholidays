import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, FileText, Plane, Hotel, Smile } from 'lucide-react';

const steps = [
  { icon: CheckCircle2, title: "Book", desc: "Select your dream package" },
  { icon: FileText, title: "Visa", desc: "Hassle-free documentation" },
  { icon: Plane, title: "Flight", desc: "Soar to your destination" },
  { icon: Hotel, title: "Hotel", desc: "Relax in premium stays" },
  { icon: Smile, title: "Enjoy Trip", desc: "Make unforgettable memories" },
];

export function TravelTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3">YOUR JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">How it Works</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 mt-20">
          
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-muted -z-10 hidden md:block -translate-y-1/2" />
          <motion.div 
            className="absolute top-1/2 left-0 h-[3px] bg-primary -z-10 hidden md:block origin-left -translate-y-1/2"
            style={{ scaleX: pathLength, width: "100%" }}
          />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center group w-48">
              <motion.div 
                className="w-16 h-16 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2, type: "spring" }}
              >
                <step.icon className="w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.2 }}
              >
                <h3 className="font-bold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-tight">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
