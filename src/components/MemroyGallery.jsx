// src/components/MemoryGallery.jsx
import { motion } from "framer-motion";

const memories = [
  {
    img: "/images/mall.jpg",
    caption: "Our first hackathon — all nerves and energy!",
  },
  {
    img: "/images/Pandu.jpg",
    caption: "Late-night debugging with friends ❤️",
  },
  {
    img: "/images/side.jpg",
    caption: "That one bug that took 4 hours... and 1 restart.",
  },
  {
    img: "/images/Lastday.jpg",
    caption: "Graduation day! Bittersweet and beautiful.",
  },
];

const MemoryGallery = () => {
  return (
    <section className="bg-[#fefae0] py-20 px-6">
      <h2 className="text-center text-4xl font-['Special_Elite'] text-gray-700 mb-12">
        📸 Snapshot Memories
      </h2>

      <div className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, rotate: -2 + index * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white shadow-lg p-4 rounded-lg max-w-xs transform hover:-translate-y-2 hover:rotate-1 transition duration-300 ease-in-out"
          >
            <img
              src={memory.img}
              alt="Memory"
              className="rounded-sm w-full aspect-[4/3] object-scale-down mb-3"
            />
            <p className="text-sm italic text-center text-gray-700 font-['Special_Elite']">
              {memory.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGallery;
