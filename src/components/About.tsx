import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in building end-to-end scalable web applications",
    },
    {
      icon: Brain,
      title: "Machine Learning Enthusiast",
      description: "Actively exploring AI, ML, and data-driven technologies",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Skilled in working with diverse teams and cross-functional roles",
    },
    {
      icon: Target,
      title: "SDE Aspirant",
      description: "Focused on writing clean, efficient, and production-ready code",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-slide-in-left"></div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Bio */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Hello! I'm Mohammed Bilal
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I’m a driven Computer Science & Engineering student at PES University with a clear vision — to become a skilled Software Development Engineer and create intelligent, scalable systems that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              My technical journey includes full-stack web development, system design, and building clean, robust applications using modern frameworks. Alongside this, I’m deeply interested in Machine Learning and continuously explore how AI can be integrated into everyday tech.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I enjoy learning new technologies, solving algorithmic challenges, and participating in hackathons to push my creative limits. From building production-ready projects for clients to developing personal web experiences, I approach each project with dedication and precision.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe in continuous growth, meaningful collaboration, and writing code that not only works — but matters. Whether it's for a user-facing product or a machine learning pipeline, I strive to build solutions that make a difference.
            </p>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-0 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group"
              >
                <CardContent className="p-6 text-center">
                  <item.icon
                    size={40}
                    className="text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
                  />
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
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
