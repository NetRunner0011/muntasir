
import { Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mounts for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-circuit-pattern bg-tech-light">
      <div className="absolute inset-0 bg-gradient-to-r from-tech-light/90 to-tech-light/70"></div>
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-tech-dark to-tech-blue bg-clip-text text-transparent"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0}
          >
            Hi, I'm <span className="block sm:inline">Meskat-UL Muntasir</span>
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl text-tech-dark mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={1}
          >
            <p>Studying science at Rajshahi College</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={2}
          >
            <motion.a 
              href="https://www.facebook.com/meskatulmuntasir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-tech-blue text-white px-4 py-2 rounded hover:bg-tech-blue/80 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(14, 165, 233, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={20} />
              <span>Connect with me</span>
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-tech-blue shadow-xl"
            animate={{ 
              y: [0, -10, 0],
              boxShadow: [
                "0 10px 15px -3px rgba(14, 165, 233, 0.2)",
                "0 20px 25px -5px rgba(14, 165, 233, 0.3)",
                "0 10px 15px -3px rgba(14, 165, 233, 0.2)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <img 
              src="/lovable-uploads/6bb7e6ad-29df-4fd5-86b5-1124f07d1ad1.png" 
              alt="Meskat-UL Muntasir" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ x: "-50%" }}
      >
        <motion.a 
          href="#about" 
          className="flex flex-col items-center text-tech-dark hover:text-tech-blue transition-colors duration-300"
          animate={{ 
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
