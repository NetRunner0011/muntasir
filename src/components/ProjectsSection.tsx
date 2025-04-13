
import { Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const project = {
    title: "Navigation Aid for Visually Impaired",
    description: "A helping stick and glasses designed to help blind people navigate obstacles in crowded areas. Presented at Rajshahi College National Science Fest.",
    image: "/placeholder.svg",
    tags: ["Arduino", "Sensors", "Assistive Tech"],
    detailsLink: "https://www.facebook.com/100037226646783/posts/pfbid02ZAXQ14jJbhoii68QgP8KzuHbZ93JLC7azvze9kRYqbg6wf3KYqkFYraWV721gfQhl/?app=fbl"
  };

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title">ECA</h2>
        
        <div className="max-w-md mx-auto">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-tech-dark text-tech-dark hover:bg-tech-dark/10"
                onClick={() => window.open(project.detailsLink, '_blank')}
              >
                <Code size={16} />
                <span>Details</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
