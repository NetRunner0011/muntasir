
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show cursor after a slight delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(timer);
    };
  }, []);

  // Don't show on touch devices
  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    if (isTouchDevice()) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-tech-blue/30 pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 100,
          damping: 15,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-tech-blue/40 pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 150,
          damping: 12,
        }}
      />
    </>
  );
};

export default AnimatedCursor;
