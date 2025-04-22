
import { Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useIsMobile } from '@/hooks/use-mobile';

const sparkles = [
  { top: '18%', left: '8%', size: 32, color: 'from-cyan-300 to-blue-400', blur: 'blur-2xl', delay: 0 },
  { top: '70%', left: '12%', size: 24, color: 'from-fuchsia-400 to-cyan-300', blur: 'blur-lg', delay: 1 },
  { top: '38%', left: '80%', size: 48, color: 'from-teal-400 to-lime-300', blur: 'blur-3xl', delay: 0.45 },
  { top: '65%', left: '89%', size: 44, color: 'from-pink-400 to-yellow-300', blur: 'blur-xl', delay: 0.9 },
];

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
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-60 flex items-center bg-gradient-to-br from-white/60 via-blue-100/70 to-white/90 dark:from-tech-dark dark:via-indigo-900/85 dark:to-tech-dark/90 overflow-hidden"
    >
      {/* Dramatic animated background glows and sparkles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-[0.11] dark:opacity-20 pointer-events-none"></div>
        {/* Large radial animated glow */}
        <motion.div
          className="absolute -inset-40 pointer-events-none z-0"
          initial={{ opacity: 0.12, scale: 1 }}
          animate={{
            opacity: [0.11, 0.20, 0.15, 0.11],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            background: "radial-gradient(ellipse at 44% 33%, #1ccaff22 43%, #8b5cf680 90%, #b8e3fc22 100%)"
          }}
        />
        {/* Animated sparkles */}
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute pointer-events-none z-10 ${s.blur} bg-gradient-to-br ${s.color}`}
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              borderRadius: '50%',
              opacity: 0.75,
            }}
            initial={{ scale: 0.6, opacity: 0.2 }}
            animate={{ 
              scale: [0.8, 1.15, 0.9], 
              opacity: [0.2, 0.9, 0.2]
            }}
            transition={{
              duration: 8.5 + (i * 1.1),
              delay: s.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
        ))}
        {/* Glass shine swipe overlay */}
        <motion.div
          className="absolute left-0 top-0 w-1/2 h-full opacity-20 bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none"
          initial={{ x: -200 }}
          animate={{ x: [0, 80, -100, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </div>

      {/* Sleek glassy overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-white/95 to-white/70 dark:from-tech-dark/80 dark:to-tech-dark/60 backdrop-blur-[6px]"></div>
      {/* Side floating glass morph shapes */}
      <motion.div
        className="absolute left-[-4vw] top-[22%] w-52 h-64 bg-gradient-to-br from-cyan-500/30 to-blue-400/10 rounded-3xl blur-3xl opacity-50 z-20"
        animate={{ y: [0, 10, -18, 0], rotate: [0, 8, -6, 0] }}
        transition={{ duration: 13, repeat: Infinity }}
      />
      <motion.div
        className="absolute right-[-5vw] top-[65%] w-60 h-44 bg-gradient-to-br from-fuchsia-400/20 to-teal-200/10 rounded-[3.5rem] blur-[72px] opacity-40 z-30"
        animate={{ y: [0, -14, 10, 0], rotate: [0, -9, 7, 0] }}
        transition={{ duration: 8.5, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 z-30 grid md:grid-cols-2 gap-12 items-center pb-20 relative">
        {/* Dramatic floating text column */}
        <div className="max-w-3xl order-2 md:order-1 mt-6 md:mt-0">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight relative z-10 drop-shadow-xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0}
            data-aos="fade-right"
          >
            <span className="block mb-2 text-base md:text-lg font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500 animate-gradient-move">
              Portfolio of
            </span>
            Hi, I'm{" "}
            <span className="block sm:inline whitespace-nowrap font-extrabold gradient-text drop-shadow-lg">
              <Typewriter
                words={['Meskat-UL Muntasir', 'a Dreamer', 'a Thinker', 'a Student']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1400}
              />
            </span>
          </motion.h1>
          <motion.div
            className="text-xl md:text-2xl mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={1}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p className="font-semibold text-gray-800 dark:text-white/90 shadow-sm px-1">
              Studying <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent font-bold">science</span> at <span className="bg-gradient-to-r from-pink-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent font-bold">Rajshahi College</span>
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-tech-blue via-fuchsia-400 to-cyan-600 text-white px-8 py-3 rounded-2xl shadow-2xl hover-scale hover:brightness-110 border border-white/30 ring-2 ring-cyan-400/20 transition-all text-lg font-bold"
              whileHover={{ scale: 1.09, boxShadow: "0 10px 24px 0 rgba(236,72,153,0.15)" }}
              whileTap={{ scale: 0.96 }}
            >
              <Facebook size={24} />
              <span>Connect with me</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Floating animated profile photo with effects */}
        <motion.div
          className="flex justify-center md:justify-end order-1 md:order-2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring", stiffness: 120 }}
          data-aos="zoom-in"
          data-aos-delay="350"
        >
          <motion.div
            className="
              relative
              w-64 h-64 md:w-80 md:h-80
              flex items-center justify-center
              group
              z-30
            "
            animate={{
              y: [0, -18, 0],
              boxShadow: [
                "0 12px 34px -10px #7dd3fc99",
                "0 26px 54px -14px #bde0fe6c",
                "0 10px 38px -8px #6366f180"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{ zIndex: 2 }}
          >
            {/* Animated glass border and inner halos */}
            <motion.div
              className="absolute inset-0 rounded-full border-[10px] border-gradient-to-tr from-fuchsia-400 via-cyan-400 to-teal-400 dark:from-cyan-400 dark:via-fuchsia-400 dark:to-blue-400 pointer-events-none z-20 ring-2 ring-pink-300/10 shadow-[0_0_45px_8px_rgba(59,130,246,0.25),0_0_40px_10px_rgba(236,72,153,0.10)]"
              animate={{
                borderColor: [
                  "#f472b6", "#67e8f9", "#22d3ee", "#f472b6"
                ],
                opacity: [0.92, 1, 0.86, 0.92]
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
            <motion.div
              className="absolute inset-5 rounded-full z-10 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #f472b622 60%, transparent 76%)",
                filter: "blur(16px)"
              }}
              animate={{
                opacity: [0.22, 0.36, 0.19, 0.25]
              }}
              transition={{
                duration: 3.1,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
            {/* Main Profile Image */}
            <img
              src="/lovable-uploads/6bb7e6ad-29df-4fd5-86b5-1124f07d1ad1.png"
              alt="Meskat-UL Muntasir"
              className="w-full h-full object-cover rounded-full relative z-30 shadow-2xl border-4 border-white/30 dark:border-cyan-300/30"
              style={{
                boxShadow: "0 0 40px 10px #e879f9cc, 0 10px 38px -8px #0ea5e877"
              }}
            />
            {/* Animated glass shine swipe on profile */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none z-30"
              style={{
                background: "linear-gradient(115deg,rgba(255,255,255,0.87) 4%,rgba(236,72,153,0.28) 44%,rgba(0,212,255,0.1) 83%)",
                opacity: 0.16
              }}
              initial={{ x: -110 }}
              animate={{ x: [0, 130, -80, 0] }}
              transition={{
                duration: 7.7,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            {/* Floating aura glow accent */}
            <motion.div
              className="absolute -top-6 right-8 w-20 h-20 bg-gradient-to-br from-cyan-400/40 to-indigo-400/20 rounded-full blur-2xl z-10"
              animate={{
                x: [0, 16, -17, 0],
                y: [0, -14, 10, 0],
                opacity: [0.33, 0.58, 0.33]
              }}
              transition={{ duration: 5.9, repeat: Infinity }}
            />
            {/* Glass bubble orb at bottom */}
            <motion.div
              className="absolute left-2/3 bottom-0 w-16 h-16 bg-gradient-to-br from-fuchsia-400/40 to-cyan-200/20 rounded-full blur-2xl z-10"
              animate={{
                scale: [1, 1.17, 0.97, 1],
                opacity: [0.16, 0.33, 0.16]
              }}
              transition={{ duration: 8.7, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
