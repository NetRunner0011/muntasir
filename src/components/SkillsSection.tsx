
import { Progress } from './ui/progress';
import { Card, CardContent } from './ui/card';

const SkillsSection = () => {
  const technicalSkills = [
    { name: "Arduino Programming", level: 90 },
    { name: "Circuit Design", level: 85 },
    { name: "Microcontrollers", level: 88 },
    { name: "Sensor Integration", level: 75 },
    { name: "C/C++ Programming", level: 70 },
    { name: "PCB Design", level: 65 },
  ];

  const softSkills = [
    "Problem Solving",
    "Creativity",
    "Critical Thinking",
    "Teamwork",
    "Presentation Skills",
    "Research Ability",
    "Time Management",
  ];
  
  const tools = [
    "Arduino IDE",
    "Proteus",
    "Fritzing",
    "EagleCAD",
    "Raspberry Pi",
    "Oscilloscope",
    "Multimeter",
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-tech-blue">Soft Skills</h3>
                <ul className="space-y-2">
                  {softSkills.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-tech-blue rounded-full mr-3"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-tech-teal">Tools & Technologies</h3>
                <ul className="space-y-2">
                  {tools.map((tool, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 bg-tech-teal rounded-full mr-3"></span>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
