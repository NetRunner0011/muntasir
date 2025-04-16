
import { Facebook, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState('...');

  // Fetch visitor count on component mount
  useEffect(() => {
    fetch('https://api.countapi.xyz/update/muntasir-portfolio/visits/?amount=1')
      .then(res => res.json())
      .then(res => {
        setVisitorCount(res.value.toLocaleString());
      })
      .catch(() => {
        setVisitorCount('--');
      });
  }, []);
  
  return (
    <footer className="bg-tech-dark text-white py-12 dark:bg-black/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">Meskat-UL Muntasir</h3>
            <p className="mt-2 text-gray-300">Student at Rajshahi College</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://www.facebook.com/meskatulmuntasir" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 p-2 rounded-full hover:bg-tech-blue/80 transition-colors duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={20} />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>© {currentYear} Meskat-UL Muntasir. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-current" /> by Muntasir
          </p>
          
          <div className="mt-6 space-y-3">
            <p className="text-sm text-gray-500">
              Total Visitors Since 15 April 2025: 
              <span id="visitor-count" className="ml-1 font-mono tracking-widest bg-gray-800/50 px-2 py-0.5 rounded">
                {visitorCount}
              </span>
            </p>
            
            <p className="text-xs text-gray-600 mt-4">
              Website built on: 15 April 2025
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
