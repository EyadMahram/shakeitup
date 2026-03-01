import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { QamariyaDivider } from "@/components/YemeniMotifs";

const reviews = [
  {
    text: "Absoluut de lekkerste smoothie die ik ooit heb gehad! De Mango Kardemom is een must-try. Je proeft meteen dat alles vers wordt gemaakt — geen kunstmatige smaken, puur fruit en kruiden.",
    name: "Sarah M.",
    label: "Vaste klant",
  },
  {
    text: "Geweldige plek in Zaandam. De Za'atar Chicken sandwich is fenomenaal — de combinatie van labneh en za'atar is zo origineel. Ik kom hier elke week terug.",
    name: "Ahmed K.",
    label: "Tevreden klant",
  },
  {
    text: "Eindelijk een plek waar je échte fruitbowls krijgt zonder nepsmaken. De Sunrise Bowl met granaatappelpitjes en honing is gewoon perfect. Aanrader!",
    name: "Lisa V.",
    label: "Vaste klant",
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => current > 0 && goTo(current - 1);
  const next = () => current < reviews.length - 1 && goTo(current + 1);

  return (
    <section id="reservations" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Wat Onze Klanten Zeggen</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider mb-6">Reviews</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 120 : -120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -120 : 120 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-10 sm:p-14 text-center"
              >
                <QamariyaDivider className="mb-8" />

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>

                <p className="font-body text-base sm:text-lg text-foreground/80 leading-relaxed font-light italic mb-10">
                  "{reviews[current].text}"
                </p>

                <QamariyaDivider className="mb-6" />

                <p className="font-display text-xl tracking-wider gold-gradient-text">
                  {reviews[current].name}
                </p>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-1">
                  {reviews[current].label}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute -left-6 sm:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-300"
            aria-label="Vorige review"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={next}
            disabled={current === reviews.length - 1}
            className="absolute -right-6 sm:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-300"
            aria-label="Volgende review"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary scale-125" : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
