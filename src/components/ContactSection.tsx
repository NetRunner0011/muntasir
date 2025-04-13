
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-lg mb-8">
              Feel free to reach out to me for any collaboration opportunities, questions, or just to say hello. 
              I'm always interested in discussing new projects and ideas related to engineering and technology.
            </p>
            
            <div className="space-y-6">
              <Card className="bg-white shadow-md">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-tech-blue/10 p-3 rounded-full">
                    <Mail className="text-tech-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Email</h4>
                    <p>meskat.muntasir@example.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-tech-blue/10 p-3 rounded-full">
                    <Phone className="text-tech-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Phone</h4>
                    <p>+880 1XX XXX XXXX</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="bg-tech-blue/10 p-3 rounded-full">
                    <MapPin className="text-tech-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">Location</h4>
                    <p>Rajshahi, Bangladesh</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your Email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Subject" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your Message" rows={5} required />
              </div>
              
              <Button type="submit" className="bg-tech-blue hover:bg-tech-blue/80 flex items-center gap-2">
                <Send size={16} />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
