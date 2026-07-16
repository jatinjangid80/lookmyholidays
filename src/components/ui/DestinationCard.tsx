import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

interface DestinationCardProps {
  dest: any;
  index: number;
}

export function DestinationCard({ dest, index }: DestinationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Initialize favorite state from localStorage
  const [isFavorite, setIsFavorite] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`favorite-${dest.name}`);
      return saved === 'true';
    }
    return false;
  });

  // Sync with localStorage when changed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`favorite-${dest.name}`, String(isFavorite));
    }
  }, [isFavorite, dest.name]);
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative w-full aspect-[4/5] rounded-2xl cursor-pointer perspective-1000 z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 8) * 0.1, duration: 0.5 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden group shadow-lg"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1s_ease-in-out] bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full skew-x-12" />
          
          <motion.img
            src={dest.img}
            alt={dest.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80 transition-opacity duration-300 group-hover:opacity-90" />
          
          <button 
            type="button"
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-red-400 transition-colors"
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const newState = !isFavorite;
              setIsFavorite(newState);
              if (newState) {
                toast.success(`${dest.name} saved to wishlist!`);
              } else {
                toast.info(`${dest.name} removed from wishlist.`);
              }
            }}
          >
            <motion.div animate={isFavorite ? { scale: [1, 1.5, 1] } : {}}>
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </motion.div>
          </button>

          <div className="absolute bottom-0 left-0 w-full p-5 text-white transform translate-z-[50px]">
            <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-1">
              {dest.country}
            </p>
            <h3 className="text-2xl font-bold mb-2 group-hover:-translate-y-1 transition-transform duration-300">
              {dest.name}
            </h3>
            <div className="flex items-center justify-between mt-4 border-t border-white/20 pt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <div className="text-sm">Starting from</div>
              <motion.div 
                className="text-lg font-bold text-primary"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {dest.price}
              </motion.div>
            </div>
            
            <div className="absolute inset-0 z-[-1] bg-black/40 blur-xl translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-card border shadow-xl flex flex-col p-6 items-center justify-center text-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h4 className="text-xl font-bold mb-4">{dest.name} Highlights</h4>
          <ul className="text-sm text-muted-foreground space-y-2 mb-6">
            <li>✔ Premium Stays</li>
            <li>✔ Guided Tours</li>
            <li>✔ Airport Transfers</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <button 
            className="w-full bg-primary text-primary-foreground py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            View Packages
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
