
import { Eye, Code, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Navigation Aid for Visually Impaired",
      description: "A helping stick and glasses designed to help blind people navigate obstacles in crowded areas. Presented at Rajshahi College National Science Fest.",
      image: "/placeholder.svg",
      tags: ["Arduino", "Sensors", "Assistive Tech"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Automated Plant Watering System",
      description: "An IoT-based solution that monitors soil moisture and automatically waters plants when needed using microcontrollers.",
      image: "/placeholder.svg", 
      tags: ["Microcontroller", "IoT", "Sensors"],
      links: {
        demo: "#",
        code: "#"
      }
    },
    {
      title: "Home Automation Prototype",
      description: "A small-scale home automation system that controls lights, fans, and appliances using voice commands and mobile app.",
      image: "/placeholder.svg",
      tags: ["Circuit Design", "Mobile App", "Voice Control"],
      links: {
        demo: "#",
        code: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-tech-blue/20 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2 border-tech-blue text-tech-blue hover:bg-tech-blue/10">
                  <Eye size={16} />
                  <span>Demo</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2 border-tech-dark text-tech-dark hover:bg-tech-dark/10">
                  <Code size={16} />
                  <span>Details</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
