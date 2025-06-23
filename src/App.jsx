import React, { useEffect, useRef, useState } from 'react'
import HeroSection from './components/HeroSection'
import Lenis from "@studio-freight/lenis";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from './components/Cursor'
import FeaturedPosts from './components/FeaturedPost'
import TimelineSection from './components/TimelineSection';
import MemoryGallery from './components/MemroyGallery';
import PostPage from './components/Pages/PostPage';
import NewsletterSection from './components/NewsletterSection';
import ContactSection from './components/ContactSection';
import AboutMe from './components/AboutMe';

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const sectionRef = useRef(null);

  

  gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  gsap.fromTo(
    ".feature-card",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".features-section", // Add this class in Features component wrapper
        start: "top 80%",
      },
    }
  );
}, []);

const [viewPost, setViewPost] = useState(false);
  
  return (
     <>
      {viewPost ? (
        <PostPage goBack={() => setViewPost(false)} />
      ) : (
        <>
          <HeroSection />
          <FeaturedPosts />
          <TimelineSection />
          <MemoryGallery />
          <NewsletterSection />
          <ContactSection />
          <AboutMe />

          {/* Example read more button to show PostPage */}
          <div className="text-center my-12">
            <button
              onClick={() => setViewPost(true)}
              className="bg-[#e6d5b8] text-gray-800 py-2 px-6 rounded-full shadow-md hover:bg-[#d6c4a8] transition-all duration-300"
            >
              Read Full Post →
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default App
