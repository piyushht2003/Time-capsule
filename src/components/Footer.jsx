import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">NeoFit</h2>
          <p>
            Revolutionizing your fitness journey with AI-powered tools and
            real-time insights.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#download" className="hover:text-white">Download</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white text-xl"><i className="ri-twitter-fill"></i></a>
            <a href="#" className="hover:text-white text-xl"><i className="ri-instagram-line"></i></a>
            <a href="#" className="hover:text-white text-xl"><i className="ri-linkedin-box-fill"></i></a>
            <a href="#" className="hover:text-white text-xl"><i className="ri-mail-fill"></i></a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} NeoFit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
