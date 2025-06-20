import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Head of Web Development",
      company: "Mahil AI Club, PES University (RR Campus)",
      period: "Apr 2024 - Present",
      description:
        "Leading the web development initiatives at Mahil AI, a technical club at PES University focused on empowering innovation through hackathons, CTFs, and AI-driven solutions. Spearheaded the club's digital presence and contributed to event strategy and execution.",
      achievements: [
        "Built and maintained the Mahil AI website frontend using HTML, CSS, JavaScript, and React",
        "Conducted and designed coding challenges and API-based problem statements for internal hackathons",
        "Led the development of MERN stack-based applications to support event logistics and participant dashboards",
        "Authored and reviewed advanced code and cryptography questions for club-led CTFs and hackathons",
        "Collaborated with team leads to drive outreach, engagement, and mentorship initiatives across the university"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white/50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Roles & Responsibilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A reflection of my technical leadership and contributions in real-world university-led tech initiatives
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      <Briefcase size={20} className="text-blue-600" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-medium text-blue-600">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
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
