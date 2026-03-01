import { motion } from "framer-motion";
import { useState } from "react";
import img1 from "@/assets/Screenshot 2026-03-01 144004.png";
import img2 from "@/assets/Screenshot 2026-03-01 144026.png";
import img3 from "@/assets/Screenshot 2026-03-01 144123.png";
import img4 from "@/assets/Screenshot 2026-03-01 144156.png";
import img5 from "@/assets/Screenshot 2026-03-01 145007.png";
import img6 from "@/assets/Screenshot 2026-03-01 145022.png";
import img7 from "@/assets/Screenshot 2026-03-01 145035.png";

const images = [
  { src: img1, alt: "Gallery image 1", caption: "" },
  { src: img2, alt: "Gallery image 2", caption: "" },
  { src: img3, alt: "Gallery image 3", caption: "" },
  { src: img4, alt: "Gallery image 4", caption: "" },
  { src: img5, alt: "Gallery image 5", caption: "" },
  { src: img6, alt: "Gallery image 6", caption: "" },
  { src: img7, alt: "Gallery image 7", caption: "" },
];

const GallerySection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">A Visual Journey</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider mb-6">The Flavours of Saba</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative aspect-square overflow-hidden group cursor-pointer hover-glow"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-500 flex items-end p-6">
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredIdx === i ? 1 : 0, y: hoveredIdx === i ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-display text-xl tracking-wider">{img.caption}</p>
                  <div className="h-px w-10 bg-primary mt-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
