// src/components/TimelineSection.jsx
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2020",
    title: "💻 First Website",
    desc: "Started my web dev journey with HTML and CSS. It was rough, but magical.",
  },
  {
    year: "2021",
    title: "📚 Learned JavaScript",
    desc: "Made my first to-do app and fell in love with interactivity.",
  },
  {
    year: "2022",
    title: "🚀 First React Project",
    desc: "Built a weather app and discovered the beauty of components.",
  },
  {
    year: "2023",
    title: "🏆 Hackathon Winner",
    desc: "Won my first hackathon with a team. 48 hours of pure hustle and caffeine!",
  },
  {
    year: "2024",
    title: "📦 Deployed Portfolio",
    desc: "Launched my portfolio on Vercel and started applying to jobs.",
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-[#fcf8ec] py-20 px-6">
      <h2 className="text-center text-4xl font-['Special_Elite'] text-gray-700 mb-12">
        🕰️ My Journey Through Time
      </h2>

      <div className="relative max-w-4xl mx-auto border-l-4 border-dashed border-[#d1bfa1] pl-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="mb-12 relative"
          >
            <div className="absolute -left-[1.25rem] top-2 w-4 h-4 bg-[#a68a64] rounded-full border-4 border-white"></div>

            <div className="bg-[#fffaf1] p-5 rounded-lg shadow-md">
              <p className="text-sm text-gray-500 italic mb-1">{item.year}</p>
              <h3 className="text-xl font-semibold text-gray-800 font-['Special_Elite']">
                {item.title}
              </h3>
              <p className="text-gray-700 mt-1 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
