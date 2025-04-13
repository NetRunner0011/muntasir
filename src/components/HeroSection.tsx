
import { Facebook } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mounts for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-circuit-pattern bg-tech-light">
      <div className="absolute inset-0 bg-gradient-to-r from-tech-light/90 to-tech-light/70"></div>
      <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-tech-blue">Meskat-UL Muntasir</span>
          </h1>
          
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-tech-dark mb-8">
              Studying science at Rajshahi College
            </p>
          </div>
          
          <div className="animate-fade-in mt-4" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://www.facebook.com/meskatulmuntasir" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-tech-blue text-white px-4 py-2 rounded hover:bg-tech-blue/80 transition-colors"
            >
              <Facebook size={20} />
              <span>Connect with me</span>
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-tech-blue shadow-xl">
            <img 
              src="/lovable-uploads/6bb7e6ad-29df-4fd5-86b5-1124f07d1ad1.png" 
              alt="Meskat-UL Muntasir" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-tech-dark hover:text-tech-blue transition-colors duration-300">
          <span className="mb-2 text-sm">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
