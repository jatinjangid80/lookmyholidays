import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "HARI MOHAN SHARMA",
    location: "Google Review",
    text: "Look My Holidays provided a seamless and highly enjoyable travel experience for our group of 14 people during our trip to Udaipur and Kumbhalgarh. Every aspect of the tour, from transportation to accommodation and sightseeing, was well-planned and executed.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Hari+Mohan+Sharma&background=f97316&color=fff"
  },
  {
    name: "deepika sharma",
    location: "Google Review",
    text: "My family and I recently took a trip to Jodhpur and Jaisalmer with Look My Holidays, and it was an incredible experience. The entire tour was exceptionally well-organized, ensuring a smooth and hassle-free journey from start to finish.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Deepika+Sharma&background=0ea5e9&color=fff"
  },
  {
    name: "preeti vyas",
    location: "Google Review",
    text: "We booked our Jaisalmer trip through Look My Holiday, and it was a wonderful experience. The desert safari and cultural evening were highlights of the tour. The accommodations were comfortable, and the hospitality was excellent throughout.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Preeti+Vyas&background=10b981&color=fff"
  },
  {
    name: "ajay agrawal",
    location: "Google Review",
    text: "My trip to Kedarnath Temple with Look My Holiday was a truly divine and well-managed experience. The entire journey was organized smoothly, from transportation to accommodation, making the spiritual yatra stress-free and comfortable.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Ajay+Agrawal&background=8b5cf6&color=fff"
  },
  {
    name: "Manjusha C",
    location: "Google Review",
    text: "Thank you for arranging the vehicles and coordinating everything so smoothly throughout the Jaipur BNI INC trip. The service was well-organized, punctual, professionally managed and hassle-free, which made our travel experience comfortable.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Manjusha+C&background=ec4899&color=fff"
  },
  {
    name: "Naresh Bansal",
    location: "Google Review",
    text: "Recently had the pleasure of experiencing the Aur Aaj Trip of Udaipur organized by Look My Holidays, and it was a trip to remember! The itinerary was well-curated, taking us through the iconic sights of Udaipur.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Naresh+Bansal&background=f59e0b&color=fff"
  }
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section ref={containerRef} className="py-24 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-bold tracking-[0.2em] text-sm mb-3">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">What Our Travellers Say</h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 w-full max-w-[100vw] overflow-hidden py-10">
        {/* Row 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-6 w-max pl-10">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`row1-${i}`} {...t} />
          ))}
        </motion.div>

        {/* Row 2 (Reverse) */}
        <motion.div style={{ x: x2 }} className="flex gap-6 w-max pl-10">
          {[...testimonials, ...testimonials].reverse().map((t, i) => (
            <TestimonialCard key={`row2-${i}`} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, location, text, rating, avatar }: any) {
  return (
    <div className="w-[350px] md:w-[450px] p-6 rounded-3xl bg-card border shadow-lg hover:shadow-[var(--shadow-elegant)] transition-shadow duration-300">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} 
          />
        ))}
      </div>
      <p className="text-foreground/80 leading-relaxed mb-6 italic">"{text}"</p>
      <div className="flex items-center gap-4 mt-auto">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  );
}
