
import { Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
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
    <section 
      id="home" 
      className="relative min-h-screen pt-60 flex items-center bg-gradient-to-br from-white via-blue-50 to-white dark:from-tech-dark dark:via-indigo-900 dark:to-tech-dark overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circuit pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 dark:opacity-20"></div>
        {/* Animating glow */}
        <motion.div
          className="absolute -inset-[100px] pointer-events-none z-0"
          initial={{ opacity: 0.1, scale: 0.98 }}
          animate={{ 
            opacity: [0.12, 0.18, 0.14, 0.12], 
            scale: [0.98, 1.02, 1] 
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ background: "radial-gradient(ellipse at 50% 40%, #00ecfa22 40%, #1266f09c 100%)" }}
        />
      </div>
      
      {/* Slight Glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/80 dark:from-tech-dark/90 dark:to-tech-dark/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center pb-20">
        {/* Text Column */}
        <div className="max-w-3xl order-2 md:order-1 mt-6 md:mt-0">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text tracking-tight relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0}
            data-aos="fade-right"
          >
            Hi, I'm{" "}
            <span className="block sm:inline">
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
            className="text-xl md:text-2xl mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={1}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p className="font-semibold transition-colors duration-300
               text-gray-800 dark:text-white/90
             ">
              Studying science at Rajshahi College
            </p>
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
        
        {/* Dramatic Profile Pic */}
        <motion.div 
          className="flex justify-center md:justify-end order-1 md:order-2 -mb-12 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <motion.div 
            className="
              relative
              w-64 h-64 md:w-80 md:h-80
              flex items-center justify-center
              group
              "
            animate={{ 
              y: [0, -14, 0],
              boxShadow: [
                "0 10px 30px -8px rgba(59, 130, 246, 0.2)",
                "0 20px 38px -14px rgba(14,165,233,0.15)",
                "0 10px 30px -8px rgba(59, 130, 246, 0.2)"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{ zIndex: 2 }}
          >
            {/* Dramatic Animated Glow Border */}
            <motion.div
              className="absolute inset-0 rounded-full border-8 border-tech-blue dark:border-cyan-400 pointer-events-none z-10"
              style={{
                boxShadow: "0 0 35px 8px #0ea5e990, 0 0 25px 2px #7dd3fc44"
              }}
              animate={{
                borderColor: ["#0ea5e9", "#67e8f9", "#0ea5e9"],
                boxShadow: [
                  "0 0 35px 8px #0ea5e9A0, 0 0 25px 2px #7dd3fc55",
                  "0 0 42px 12px #bae6fdC0, 0 0 18px 6px #0ea5e966",
                  "0 0 35px 8px #0ea5e9A0, 0 0 25px 2px #7dd3fc55"
                ]
              }}
              transition={{
                duration: 4.4,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
            {/* Glowing radial inner effect */}
            <motion.div
              className="absolute inset-2 rounded-full z-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #67e8f933 55%, transparent 75%)",
                filter: "blur(8px)"
              }}
              animate={{
                opacity: [0.28, 0.42, 0.36, 0.28]
              }}
              transition={{
                duration: 3.3,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
            {/* Profile */}
            <img 
              src="/lovable-uploads/6bb7e6ad-29df-4fd5-86b5-1124f07d1ad1.png" 
              alt="Meskat-UL Muntasir" 
              className="w-full h-full object-cover rounded-full relative z-20 shadow-xl"
            />
            {/* Floating accent shape */}
            <motion.div
              className="absolute -top-6 right-10 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-indigo-400/10 rounded-full blur-2xl z-0"
              animate={{
                x: [0, 8, -8, 0],
                y: [0, -10, 12, 0],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 7, repeat: Infinity }}
            />
            {/* Floating triangle */}
            <motion.div
              className="absolute left-0 bottom-4 w-12 h-12"
              animate={{
                y: [0, 12, -8, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 4.7, repeat: Infinity }}
            >
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
                <polygon
                  points="50,15 90,85 10,85"
                  fill="url(#paint0_linear)"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#a5b4fc" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
