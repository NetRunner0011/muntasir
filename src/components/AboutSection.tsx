
import { GraduationCap, Home, BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              I am Meskat-UL Muntasir, a 12th class student at Rajshahi College in Bangladesh with a 
              <span className="highlight"> deep passion for engineering</span>, particularly circuit automation.
            </p>
            <p className="text-lg mb-6">
              My journey in technology began in primary school when I started working with microcontrollers. Since then, 
              I have continued to expand my knowledge and skills in this field, developing various projects including 
              assistive devices for visually impaired people.
            </p>
            <p className="text-lg">
              I am constantly seeking to learn and grow in my field, with the goal of making meaningful contributions 
              to society through innovative engineering solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education & Background</h3>
            <div className="space-y-6">
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tech-blue/10 p-3 rounded-full">
                      <GraduationCap className="text-tech-blue" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Rajshahi College</h4>
                      <p className="text-muted-foreground">Higher Secondary Education (Current)</p>
                      <p>12th Class Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tech-blue/10 p-3 rounded-full">
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
              
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-tech-blue/10 p-3 rounded-full">
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
