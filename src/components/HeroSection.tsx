import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/Screenshot 2026-03-01 144219.png";
import { QamariyaDivider, QamariyaStar } from "@/components/YemeniMotifs";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Shake It Up — vers, puur en verrassend"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Subtle qamariya stars in corners */}
      <QamariyaStar size={80} className="absolute top-24 left-8 opacity-30 hidden md:block" />
      <QamariyaStar size={60} className="absolute top-32 right-12 opacity-20 hidden md:block" />
      <QamariyaStar size={50} className="absolute bottom-32 left-16 opacity-15 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <QamariyaDivider className="mb-8" />
          <p className="font-body text-sm sm:text-base text-primary/70 mb-2 tracking-[0.4em] uppercase">
            Zaandam
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-wider mb-6 gold-gradient-text">
            SHAKE IT UP
          </h1>
          <p className="font-body text-lg sm:text-xl text-white/90 tracking-[0.3em] uppercase mb-4">
            Vers. Puur. Verrassend.
          </p>
          <QamariyaDivider className="mt-8 mb-10" />
          <p className="font-body text-base text-white/75 max-w-lg mx-auto leading-relaxed font-light">
            Geen kunstmatige toevoegingen. Alleen ter plekke bereide shakes, smoothies, fruitbowls en sandwiches — met de beste midden-oosterse ingrediënten.
          </p>
        </motion.div>

        <motion.a
          href="#menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="inline-flex flex-col items-center mt-16 text-white/60 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-2">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
