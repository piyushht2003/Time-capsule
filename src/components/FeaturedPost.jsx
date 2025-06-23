// src/components/FeaturedPosts.jsx
import { motion } from "framer-motion";

const posts = [
  {
    title: "📜 My First Hackathon",
    desc: "It was 2 AM and my code finally worked...",
    date: "Jan 2024",
  },
  {
    title: "🎞️ College Cultural Fest",
    desc: "Dancing, games, and lifelong memories.",
    date: "Aug 2022",
  },
  {
    title: "💾 First Website Ever",
    desc: "Built using just HTML & CSS back in 2020.",
    date: "June 2023",
  },
];

const FeaturedPosts = () => {
  return (
    <section className="bg-[#f9f3e3] py-20 px-6">
      <h2 className="text-center text-4xl font-['Special_Elite'] text-gray-700 mb-12">
        ✍️ Featured Posts
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            className="bg-[#fff9ea] rotate-1 border-2 border-dashed border-[#a68a64] p-6 rounded-lg max-w-xs shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-['Special_Elite'] mb-2 text-gray-800">
              {post.title}
            </h3>
            <p className="text-sm text-gray-700 mb-4">{post.desc}</p>
            <span className="text-xs italic text-gray-500">{post.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
