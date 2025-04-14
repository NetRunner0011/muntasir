
import { Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

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

  // Animation variants for elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ECA
        </motion.h2>
        
        <motion.div 
          className="max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-tech-blue/10 flex items-center justify-center p-2">
                <div className="flex space-x-2">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="w-1/2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="h-full object-cover rounded-md shadow-sm"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="animate-fade-in" style={{animationDelay: `${tagIndex * 0.1}s`}}>{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-tech-dark text-tech-dark hover:bg-tech-dark/10"
                    onClick={() => window.open(project.detailsLink, '_blank')}
                  >
                    <Code size={16} />
                    <span>Details</span>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
