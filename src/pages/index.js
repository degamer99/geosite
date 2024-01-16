// pages/index.js
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const inputControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);

      // Animate the input position
      inputControls.start({ y: scrollTop > 0 ? -50 : 0 });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inputControls]);

  return (
    <div className={`min-h-screen flex items-center justify-center ${isScrolled ? 'fixed top-0 w-full bg-white shadow-md' : ''}`}>
      <div className="text-center">
        <motion.img
          src="/your-logo.png"
          alt="Logo"
          className="h-16 mx-auto mb-4"
        />
        <motion.input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          animate={inputControls}
        />
      </div>
    </div>
  );
};

export default Home;
