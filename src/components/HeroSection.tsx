
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-circuit-pattern bg-tech-light">
      <div className="absolute inset-0 bg-gradient-to-r from-tech-light/90 to-tech-light/70"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-tech-blue">Meskat-UL Muntasir</span>
          </h1>
          <p className="text-xl md:text-2xl text-tech-dark mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            A passionate engineering enthusiast with focus on circuit automation and microcontroller projects
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="bg-tech-blue hover:bg-tech-blue/80">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-tech-dark hover:text-tech-blue transition-colors duration-300">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
