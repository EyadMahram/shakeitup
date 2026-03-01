import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/Screenshot 2026-03-01 144219.png";
import dish1 from "@/assets/Screenshot 2026-03-01 144026.png";
import dish2 from "@/assets/Screenshot 2026-03-01 144123.png";
import dish3 from "@/assets/Screenshot 2026-03-01 144156.png";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ReservationSection from "@/components/ReservationSection";
import FooterSection from "@/components/FooterSection";

export { heroImg, dish1, dish2, dish3 };

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReservationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
