
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies and frameworks"
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Strong analytical skills with focus on efficient solutions"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Excellent communication and teamwork abilities"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Dedicated to achieving excellence in every project"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-slide-in-left"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Hello! I'm Bilal</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I'm a passionate Computer Science & Engineering student with a strong foundation in software development 
              and a keen interest in emerging technologies. My journey in tech began with curiosity about how things work, 
              and has evolved into a deep commitment to creating meaningful digital solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Currently pursuing my degree in CSE, I'm constantly expanding my knowledge in areas like web development, 
              data structures, algorithms, and software engineering principles. I believe in writing clean, efficient code 
              and following best practices in every project I undertake.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or learning about the latest trends in artificial intelligence and machine learning.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <item.icon size={40} className="text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">{item.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
