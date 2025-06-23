// src/components/ContactSection.jsx
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="bg-[#fffaf0] py-20 px-6 font-['Special_Elite']">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-[#dac9aa]"
      >
        <h2 className="text-3xl text-center text-gray-800 mb-6">
          🖋️ Send Me a Letter
        </h2>

        <p className="text-center text-gray-600 italic mb-10">
          Got a memory to share, feedback, or just want to say hello?  
          Drop me a note — I'll treat it like a postcard from the future.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c4a177]"
              placeholder="e.g., Ada Lovelace"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Your Email</label>
            <input
              type="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c4a177]"
              placeholder="e.g., ada@retro.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea
              rows="5"
              className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c4a177]"
              placeholder="What memory are you holding onto?"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#dec7a6] hover:bg-[#cbb497] text-gray-800 px-6 py-3 rounded-md font-semibold transition duration-300"
            >
              Send Message ✉️
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
