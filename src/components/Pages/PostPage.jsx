// src/pages/PostPage.jsx
import { motion } from "framer-motion";

const PostPage = ({ goBack }) => {
  return (
    <section className="min-h-screen bg-[#fcf8ed] px-6 py-16 font-['Special_Elite']">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl mx-auto bg-white shadow-xl p-10 rounded-lg border border-[#e5dcc5]"
      >
        <p className="text-sm text-gray-500 italic mb-2">Published: January 8, 2025</p>

        <h1 className="text-4xl text-gray-800 mb-6">
          📜 A Night of Code and Coffee
        </h1>

        <div className="space-y-4 text-gray-700 leading-relaxed text-[1.05rem]">
          <p>
            It was 3:42 AM. The code editor was glowing softly in the dark...
          </p>
          {/* More paragraphs */}
        </div>

        {/* Back button */}
        <div className="mt-10 text-center">
          <button
            onClick={goBack}
            className="inline-block bg-[#e6d5b8] text-gray-800 py-2 px-6 rounded-full shadow-md hover:bg-[#d6c4a8] transition-all duration-300"
          >
            ← Back to Memories
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default PostPage;
