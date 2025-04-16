
import { useState, useEffect } from 'react';
import { Menu, X, Facebook } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'ECA', href: '#projects' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 dark:bg-background/80 shadow-md py-2 backdrop-blur-sm' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home" className="text-foreground font-bold text-xl flex items-center gap-2">
            <div className="flex items-center gap-2">
              <motion.img 
                src="/lovable-uploads/54342097-f553-4cf4-b6fd-0621a6df9357.png" 
                alt="Rajshahi College Logo" 
                className="h-8 w-8 object-contain"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              />
              <motion.img 
                src="/lovable-uploads/c2515e9d-64db-4030-9dec-51bc32f39536.png" 
                alt="Rajshahi Collegiate School Logo" 
                className="h-8 w-8 object-contain"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              />
            </div>
            <span>Meskat<span className="text-tech-blue">-UL</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-foreground hover:text-tech-blue transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/meskatulmuntasir" 
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 bg-tech-blue/10 dark:bg-tech-blue/20 p-2 rounded-full text-tech-blue hover:bg-tech-blue/20 dark:hover:bg-tech-blue/30 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="text-foreground" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background dark:bg-background/90 backdrop-blur-sm shadow-lg py-4 animate-fade-in">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block py-2 text-foreground hover:text-tech-blue transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="https://www.facebook.com/meskatulmuntasir" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 text-tech-blue"
                  onClick={toggleMenu}
                >
                  <Facebook size={20} />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
