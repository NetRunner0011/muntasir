
import { useState, useEffect } from 'react';
import { Menu, X, Facebook } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-tech-dark font-bold text-xl">
          Meskat<span className="text-tech-blue">-UL</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-tech-dark hover:text-tech-blue transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="https://www.facebook.com/meskatulmuntasir" 
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-tech-blue/10 p-2 rounded-full text-tech-blue hover:bg-tech-blue/20 transition-colors"
          >
            <Facebook size={20} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-tech-dark" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <nav className="container mx-auto px-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="block py-2 text-tech-dark hover:text-tech-blue transition-colors duration-300"
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
