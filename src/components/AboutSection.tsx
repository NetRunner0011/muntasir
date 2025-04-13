
import { GraduationCap, Home, BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-lg space-y-6">
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
            
            <p>
              Outside academics, I keep a low profile. I study quietly, build things when I can, and enjoy thinking deeply about how the world works—both in formulas and in silence. Besides, I strengthen my brain mussels by reading books and chill playing video games.
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
                      <p>Intermediate Student</p>
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
