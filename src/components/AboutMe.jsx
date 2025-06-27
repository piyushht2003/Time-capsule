// src/components/AboutMe.jsx
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="bg-[#fefcf5] py-20 px-6 font-serif text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-white shadow-xl p-10 border border-[#e5dcc5] rounded-lg"
      >
        {/* Section Heading */}
        <h2 className="text-center text-4xl font-['Cinzel'] mb-6 tracking-wide">
          📰 The Story Behind the Stories
        </h2>

        {/* Image + Bio */}
        <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
          {/* Your Image */}
          <img
            src="/images/profile.jpg"
            alt="Piyush Singh Thakur"
            className="w-48 h-48 object-cover rounded-md grayscale border border-[#d6c4a8] shadow-md"
          />

          {/* Text Content */}
          <div className="text-[1.05rem] leading-7 space-y-4">
            <p>
              Hello, I’m <strong>Piyush Singh Thakur</strong> — a curious coder
              with a love for memories, motion, and minimalist storytelling.
            </p>

            <p>
              I started my journey writing messy code in dark rooms and ended
              up building projects that tell stories through pixels and
              interaction. This blog is my attempt to preserve those stories —
              not just about code, but about people, effort, and growth.
            </p>

            <p>
              Whether it’s a bug fixed at 2 AM or a UI that finally feels just
              right, this blog remembers it all — like a newspaper clipping from
              a time that mattered.
            </p>
            <p className="text-right text-2xl mt-8 font-[cursive] text-[#a68a64]">
                ~ Piyush
            </p>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
