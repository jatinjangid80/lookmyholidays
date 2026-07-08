import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const stats = [
  { n: 12500, label: "Happy Travellers", suffix: "+" },
  { n: 85, label: "Destinations Covered", suffix: "+" },
  { n: 14, label: "Years of Experience", suffix: "" },
  { n: 4.9, label: "Average Rating", suffix: "/5", float: true },
];

function Counter({ n, float, suffix }: { n: number; float?: boolean; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(n);
    }
  }, [motionValue, isInView, n]);

  const display = useTransform(springValue, (current) => 
    float ? current.toFixed(1) : Math.floor(current).toLocaleString()
  );

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="py-8 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative animated rings */}
      <motion.div 
        className="absolute top-1/2 left-10 w-96 h-96 border border-white/10 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ y: "-50%" }}
      />
      <motion.div 
        className="absolute top-1/2 right-10 w-[500px] h-[500px] border border-white/10 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
        style={{ y: "-50%" }}
      />

      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
        {stats.map((s, i) => (
          <motion.div 
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <p className="text-5xl md:text-6xl font-extrabold tabular-nums">
              <Counter n={s.n} float={s.float} suffix={s.suffix} />
            </p>
            <p className="mt-2 font-medium opacity-90">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
