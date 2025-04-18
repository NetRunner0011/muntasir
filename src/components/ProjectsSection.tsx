
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Gradient background with cyberpunk feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-indigo-950"></div>
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      {/* Floating elements in background */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-cyberpunk-diag opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-radial-glow opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-title text-white"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">ECA</span>
        </motion.h2>
        
        <motion.div 
          className="max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card className="glass-card bg-gradient-to-br from-white/5 to-white/10 border-white/10 text-white overflow-hidden shadow-xl hover:shadow-tech-blue/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-tech-blue/5 p-4">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative overflow-hidden rounded-lg shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
              <CardHeader className="pb-2 pt-4">
                <CardTitle className="text-xl leading-tight gradient-text">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="animate-fade-in bg-gradient-to-r from-tech-blue/20 to-tech-teal/20 border border-tech-blue/30 text-white px-3 py-1 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.3)] hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-300" 
                      style={{animationDelay: `${tagIndex * 0.1}s`}}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <CardDescription className="text-base text-gray-300">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-tech-blue text-tech-blue hover:bg-tech-blue/10 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300"
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
