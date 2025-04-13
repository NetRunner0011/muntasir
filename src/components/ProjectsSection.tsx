
import { Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const project = {
    title: "Navigation Aid for Visually Impaired",
    description: "A helping stick and glasses designed to help blind people navigate obstacles in crowded areas. Presented at Rajshahi College National Science Fest.",
    images: [
      "/lovable-uploads/6955a290-1a06-40c2-8599-9bd484f9ad84.png",
      "/lovable-uploads/b7690784-ab2a-4cc9-8c8e-403a13f3f06f.png"
    ],
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
              <div className="flex space-x-2">
                {project.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`} 
                    className="w-1/2 h-full object-cover"
                  />
                ))}
              </div>
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
