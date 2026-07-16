import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const stats = [
  { n: 15000, label: "Happy Travellers", suffix: "+" },
  { n: 90, label: "Destinations Covered", suffix: "+" },
  { n: 18, label: "Years of Experience", suffix: "" },
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
    <section className="py-8 bg-transparent relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
        {stats.map((s, i) => (
          <motion.div 
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <p className="text-5xl md:text-6xl font-extrabold tabular-nums text-primary">
              <Counter n={s.n} float={s.float} suffix={s.suffix} />
            </p>
            <p className="mt-2 font-medium text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
