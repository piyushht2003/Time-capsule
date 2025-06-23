// src/components/NewsletterSection.jsx
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="bg-[#fdf6e3] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white border border-[#dac9aa] shadow-md p-10 rounded-xl font-['Special_Elite']"
      >
        <h2 className="text-3xl text-center text-gray-800 mb-6">
          💌 Write Back to the Past
        </h2>

        <p className="text-center text-gray-600 italic mb-8">
          Get new memories delivered like postcards from another time.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full sm:w-auto px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bfa373]"
          />
          <button
            type="submit"
            className="bg-[#dec7a6] hover:bg-[#cbb497] text-gray-800 px-6 py-3 rounded-md font-semibold transition duration-300"
          >
            Subscribe ✉️
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-4 italic">
          We send occasional letters. No spam, just stories.
        </p>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
