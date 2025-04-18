
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
      className={`fixed bottom-8 right-8 bg-tech-blue text-white p-3 rounded-full shadow-lg z-50 ${!isVisible && 'hidden'}`}
      initial={{ scale: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0,
        y: [0, -10, 0] 
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        repeatType: "reverse"
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 15px rgba(14, 165, 233, 0.6)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </motion.button>
  );
};

export default ScrollToTopButton;
