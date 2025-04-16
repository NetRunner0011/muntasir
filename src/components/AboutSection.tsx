
import { GraduationCap, Home, BookOpen, Terminal } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [displayText, setDisplayText] = useState("");
  const terminalText = `> whoami
> Meskat Ul Muntasir
> passion: Engineering, Science, Technology
> location: Rajshahi, Bangladesh
> education: Intermediate Student
> interests: Reading, Video Games, Circuit Design`;

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < terminalText.length) {
        setDisplayText(prev => prev + terminalText.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 30);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-tech-dark dark:text-tech-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-right">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-lg space-y-6" data-aos="fade-up" data-aos-delay="100">
            <p>
              Hello! My name is Meskat Ul Muntasir. I am currently an intermidiate student at <a 
                href="https://www.facebook.com/RajshahiCollegeOfficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tech-blue hover:underline"
              >
                Rajshahi College
              </a>, Bangladesh, where I've been actively involved in academic and extracurricular activities, including projects at the <a 
                href="https://www.facebook.com/rajshahicollegescienceclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tech-blue hover:underline"
              >
                Rajshahi College Science Club
              </a>.
            </p>
            
            <p>
              Before Rajshahi College, I passed SSC from <a 
                href="https://www.facebook.com/rcs1828" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tech-blue hover:underline"
              >
                Rajshahi Collegiate School and College
              </a>.
            </p>
            
            <Card className="mt-6 bg-black text-green-400 font-mono shadow-lg border-green-500 dark:shadow-green-500/20" data-aos="zoom-in" data-aos-delay="300">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 border-b border-green-500/20 pb-2 mb-2">
                  <Terminal size={18} />
                  <div className="flex gap-1 ml-auto">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <pre className="whitespace-pre-wrap break-all">{displayText}<span className="animate-pulse">_</span></pre>
              </CardContent>
            </Card>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-semibold mb-6">Education & Background</h3>
            <div className="space-y-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow dark:bg-tech-dark/50 dark:border-tech-blue/20" data-aos="fade-up" data-aos-delay="400">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tech-blue/10 dark:bg-tech-blue/20 p-3 rounded-full">
                      <GraduationCap className="text-tech-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Rajshahi College</h4>
                      <p className="text-muted-foreground">Higher Secondary Education (Current)</p>
                      <p>Intermediate Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow dark:bg-tech-dark/50 dark:border-tech-blue/20" data-aos="fade-up" data-aos-delay="500">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tech-blue/10 dark:bg-tech-blue/20 p-3 rounded-full">
                      <BookOpen className="text-tech-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Rajshahi Collegiate School and College</h4>
                      <p className="text-muted-foreground">Secondary Education</p>
                      <p>Completed Secondary School Certificate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow dark:bg-tech-dark/50 dark:border-tech-blue/20" data-aos="fade-up" data-aos-delay="600">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tech-blue/10 dark:bg-tech-blue/20 p-3 rounded-full">
                      <Home className="text-tech-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Rajshahi, Bangladesh</h4>
                      <p className="text-muted-foreground">Current Location</p>
                      <p>Residing and pursuing my education</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
