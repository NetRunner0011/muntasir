
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Meskat-UL Muntasir</h3>
            <p className="mt-2 text-gray-300">Circuit Automation Enthusiast</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-tech-blue/80 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-tech-blue/80 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-tech-blue/80 transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-tech-blue/80 transition-colors duration-300">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Meskat-UL Muntasir. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-current" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
