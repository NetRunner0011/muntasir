
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <motion.button 
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 glass-card bg-gradient-to-r from-tech-blue/80 to-cyan-600/80 text-white p-3 rounded-full shadow-lg z-50 glow-shadow ${!isVisible && 'hidden'}`}
      initial={{ scale: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0,
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 20px rgba(14, 165, 233, 0.6)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp size={24} />
    </motion.button>
  );
};

export default ScrollToTopButton;
