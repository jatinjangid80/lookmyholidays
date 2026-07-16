import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PhoneCall, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "How do I book a holiday package with LookMyHolidays?",
    answer: "Booking is simple. Browse our packages, submit an enquiry, or contact our travel experts via WhatsApp or phone. We'll create a personalized itinerary and guide you through the booking process."
  },
  {
    question: "Can I customize my holiday package?",
    answer: "Yes. Every package is fully customizable. You can modify destinations, hotels, flights, sightseeing, meals, travel dates, and trip duration according to your preferences."
  },
  {
    question: "Are flights included in the holiday packages?",
    answer: "We offer both land-only packages and packages that include flights. Your travel consultant will help you choose the option that best fits your budget."
  },
  {
    question: "Do you provide visa assistance?",
    answer: "Yes. We provide end-to-end visa assistance, documentation guidance, and application support for multiple international destinations."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, Credit Cards, Debit Cards, Net Banking, Bank Transfer, and secure online payments."
  },
  {
    question: "Is customer support available during the trip?",
    answer: "Absolutely. Our dedicated travel experts provide 24/7 assistance before, during, and after your journey via phone and WhatsApp."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Cancellation and refund policies vary depending on airlines, hotels, and package providers. Your travel consultant will explain all applicable terms before confirmation."
  },
  {
    question: "Why should I choose LookMyHolidays?",
    answer: "With 14+ years of experience, personalized itineraries, competitive pricing, trusted travel partners, visa support, and dedicated customer service, we ensure every journey is smooth and memorable."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before planning your next journey with LookMyHolidays.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  rounded-[24px] overflow-hidden bg-white shadow-sm hover:shadow-md
                  border transition-all duration-300 ease-in-out cursor-pointer group relative
                  ${isOpen ? 'border-primary/30' : 'border-border/50 hover:border-primary/30 hover:-translate-y-1'}
                `}
                onClick={() => toggleFaq(index)}
              >
                <div className={`
                  p-7 relative transition-colors duration-300
                  ${isOpen ? 'bg-[#FFF8F2]' : 'group-hover:bg-[#FFF8F2]/50'}
                `}>
                  {isOpen && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-[24px]" />
                  )}
                  
                  <div className="flex justify-between items-center gap-4">
                    <h3 className={`text-lg md:text-xl transition-colors ${isOpen ? 'font-bold text-black' : 'font-semibold text-gray-800'}`}>
                      {faq.question}
                    </h3>
                    <div className={`
                      flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                      ${isOpen ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500 group-hover:bg-primary/5 group-hover:text-primary/70'}
                    `}>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="pt-4 pr-12 text-muted-foreground leading-relaxed text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
