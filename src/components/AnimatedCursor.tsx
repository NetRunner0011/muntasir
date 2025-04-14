
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);
    
    // Check if we're on a touch device
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    
    // Only show custom cursor on non-touch devices
    if (isTouchDevice) {
      document.body.classList.add('no-custom-cursor');
    }
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  
  // Event listeners for links and buttons
  useEffect(() => {
    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');
    
    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(14, 165, 233, 0.3)',
      border: '2px solid rgba(14, 165, 233, 0.5)',
      scale: 1
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
      border: '2px solid rgba(14, 165, 233, 0.8)',
      scale: 1.5
    }
  };
  
  // Only render on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot hidden sm:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      <style jsx global>{`
        body:not(.no-custom-cursor) {
          cursor: none;
        }
        
        body:not(.no-custom-cursor) a, 
        body:not(.no-custom-cursor) button,
        body:not(.no-custom-cursor) input,
        body:not(.no-custom-cursor) [role="button"] {
          cursor: none;
        }
      `}</style>
    </>
  );
};

export default AnimatedCursor;
