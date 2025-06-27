// src/components/HeroSection.jsx
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-[#fdf6e3] min-h-screen flex py-48 justify-center px-6 items-center font-['Special_Elite']">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          className="text-6xl text-gray-800 tracking-widest mb-4"
        >
          TIME CAPSULE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg italic text-gray-600 max-w-xl mx-auto"
        >
          A blog that remembers, forever. Preserving thoughts like paper holds ink.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;



// font-['Special_Elite']