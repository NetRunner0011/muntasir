
import { Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

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
    <section id="home" className="relative min-h-screen pt-60 flex items-center bg-gradient-to-br from-tech-dark via-indigo-900 to-tech-dark overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        <div className="absolute -inset-[100px] bg-radial-glow opacity-10 animate-pulse"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/90 to-tech-dark/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl order-2 md:order-1 mt-6 md:mt-0">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text tracking-tight relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0}
            data-aos="fade-right"
          >
            Hi, I'm <span className="block sm:inline">
              <Typewriter
                words={['Meskat-UL Muntasir', 'a Dreamer', 'a Thinker', 'a Student']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl text-white/90 mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={1}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p>Studying science at Rajshahi College</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={2}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <motion.a 
              href="https://www.facebook.com/meskatulmuntasir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-tech-blue to-cyan-600 text-white px-6 py-2.5 rounded-xl hover-scale shadow-lg hover:shadow-tech-blue/30 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(14, 165, 233, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={20} />
              <span>Connect with me</span>
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center md:justify-end order-1 md:order-2 -mb-12 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <motion.div 
            className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full p-1 shadow-lg relative"
            animate={{ 
              y: [0, -10, 0],
              boxShadow: [
                "0 10px 25px -3px rgba(59, 130, 246, 0.2)",
                "0 20px 35px -5px rgba(168, 85, 247, 0.15)",
                "0 10px 25px -3px rgba(59, 130, 246, 0.2)"
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
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-4 left-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ transform: 'translateX(-50%)' }}
      >
        <motion.a 
          href="#about" 
          className="flex flex-col items-center text-white/80 hover:text-tech-blue transition-colors duration-300 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          animate={{ 
            y: [0, 5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="mb-2 text-sm font-medium">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
