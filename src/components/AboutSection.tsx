import { Copy } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useToast } from '@/hooks/use-toast';

const AboutSection = () => {
  const { toast } = useToast();
  const terminalText = "> whoami\n> Meskat Ul Muntasir\n> education: Intermediate Student at Rajshahi College\n> education: Secondary School Certificate from Rajshahi Collegiate School and College";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalText);
    toast({
      title: "Copied to clipboard",
      description: "Terminal text has been copied to your clipboard.",
      duration: 2000,
    });
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-tech-dark dark:via-gray-900 dark:to-gray-800">
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
            
            <Card className="mt-6 bg-gray-900 text-green-400 shadow-lg border-green-500/30 dark:shadow-green-500/20" data-aos="zoom-in" data-aos-delay="300">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 border-b border-green-500/20 pb-2 mb-2">
                  <Terminal size={18} />
                  <div className="text-xs text-green-300">terminal</div>
                  <div className="flex gap-1 ml-auto">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <pre className="font-mono text-sm whitespace-pre-wrap break-all">
                  <Typewriter
                    words={[
                      "> whoami\n> Meskat Ul Muntasir\n> education: Intermediate Student at Rajshahi College\n> education: Secondary School Certificate from Rajshahi Collegiate School and College"
                    ]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={40}
                    deleteSpeed={10000}
                    delaySpeed={1500}
                  />
                </pre>
                <Button 
                  variant="outline"
                  size="sm"
                  className="mt-4 ml-auto flex items-center gap-1 text-xs border-green-500/30 text-green-400 hover:text-green-300 hover:bg-green-500/10"
                  onClick={copyToClipboard}
                >
                  <Copy size={14} />
                  Copy
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-semibold mb-6">Education & Background</h3>
            <div className="space-y-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-white to-gray-50 dark:from-tech-dark/50 dark:to-gray-900/50 dark:border-tech-blue/20" data-aos="fade-up" data-aos-delay="400">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-full bg-tech-blue/10 dark:bg-tech-blue/20 p-3 flex items-center justify-center">
                        <img
                          src="/lovable-uploads/452acb1e-eed4-4584-97b6-b763130ab321.png"
                          alt="Rajshahi College Logo"
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">Rajshahi College</h4>
                      <p className="text-muted-foreground">Higher Secondary Education (Current)</p>
                      <p>Intermediate Student</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">2023 - Present</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-white to-gray-50 dark:from-tech-dark/50 dark:to-gray-900/50 dark:border-tech-blue/20" data-aos="fade-up" data-aos-delay="500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16 rounded-full bg-tech-blue/10 dark:bg-tech-blue/20 p-3 flex items-center justify-center">
                        <img
                          src="/lovable-uploads/c2515e9d-64db-4030-9dec-51bc32f39536.png"
                          alt="Rajshahi Collegiate School Logo"
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">Rajshahi Collegiate School and College</h4>
                      <p className="text-muted-foreground">Secondary Education</p>
                      <p>Completed Secondary School Certificate</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">2021 - 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-white to-gray-50 dark:from-tech-dark/50 dark:to-gray-900/50 dark:border-tech-blue/20" data-aos="fade-up" data-aos-delay="600">
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
