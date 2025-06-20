import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C / C++", level: 80 },
        { name: "DSA & OOP", level: 88 },
        { name: "Version Control (Git)", level: 90 },
      ]
    },
    {
      title: "Frontend & UI",
      skills: [
        { name: "React.js / Next.js", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Responsive Design", level: 95 },
        { name: "UI Animations", level: 88 },
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js / Express.js", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "Supabase", level: 80 },
        { name: "Firebase", level: 80 },
        { name: "REST API Development", level: 88 },
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "VS Code / Postman", level: 95 },
        { name: "GitHub / Vercel", level: 90 },
        { name: "Figma / UI Design Tools", level: 80 },
        { name: "Netlify / Render", level: 85 },
        { name: "Docker (Basics)", level: 65 },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "ML Concepts (Supervised/Unsupervised)", level: 75 },
        { name: "Scikit-learn / Pandas", level: 70 },
        { name: "Numpy / Matplotlib", level: 68 },
        { name: "GenAI / Gemini", level: 70 },
        { name: "LangChain (Basics)", level: 60 },
      ]
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-900/50 dark:to-gray-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
            Skills & Technologies 🎯
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-slide-in-left"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto animate-typing">
            A professional overview of my technical stack across full-stack development, databases, deployment, and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md group animate-slide-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group/skill">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 group-hover/skill:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
