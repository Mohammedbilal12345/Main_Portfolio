
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      period: "Jun 2024 - Aug 2024",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components and improved website performance by 30%.",
      achievements: [
        "Built reusable component library used across 5 different projects",
        "Optimized application loading time by implementing code splitting",
        "Mentored 2 junior interns on React best practices"
      ]
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      period: "Jan 2024 - Present",
      description: "Created custom websites and web applications for small businesses and startups. Managed complete project lifecycle from requirements gathering to deployment.",
      achievements: [
        "Delivered 8 successful projects with 100% client satisfaction",
        "Increased client's online presence resulting in 50% more customer engagement",
        "Implemented SEO best practices improving search rankings"
      ]
    },
    {
      title: "Programming Tutor",
      company: "University Learning Center",
      period: "Sep 2023 - Dec 2023",
      description: "Provided one-on-one tutoring sessions for students in Data Structures, Algorithms, and Object-Oriented Programming. Developed teaching materials and practice problems.",
      achievements: [
        "Helped 15+ students improve their programming grades by average of 25%",
        "Created comprehensive study guides for complex programming concepts",
        "Received 'Outstanding Tutor' recognition from department"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My professional journey and practical experience in software development
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-2">
                      <Briefcase size={20} className="text-blue-600" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-medium text-blue-600">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
