import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "PES University, EC Campus",
      period: "Sep 2023 – Sep 2027",
      cgpa: "-",
      description:
        "Focused on core computer science concepts including programming, data structures, web development, machine learning and networks. Participating in technical clubs and hackathons.",
      coursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Operating Systems",
        "Computer Networks",
        "Web Development",
        "Database Management Systems"
      ]
    },
    {
      degree: "Class XII (PCM)",
      institution: "Aakash Digital, Vijayapura",
      period: "Jul 2022 – Mar 2023",
      cgpa: "10 GPA",
      description:
        "Studied Physics, Chemistry, and Mathematics with focus on engineering entrance exam preparation.",
      coursework: ["Mathematics", "Physics", "Chemistry", "English"]
    },
    {
      degree: "Class X",
      institution: "Sharadha Public School, Vijayapura",
      period: "2020 – 2021",
      cgpa: "Grade A",
      description:
        "Completed secondary education with strong academic performance in core subjects.",
      coursework: ["Mathematics", "Science", "English", "Social Studies"]
    }
  ];

  const certifications = [
    { title: "C++ Programming Course", issuer: "Udemy", date: "Jun 2025" },
    { title: "Problem Solving (Basic)", issuer: "HackerRank", date: "Apr 2025" },
    { title: "AWS Solutions Architecture Simulation", issuer: "Forage", date: "Mar 2025" },
    { title: "Machine Learning with Python", issuer: "Udemy", date: "Mar 2025" },
    { title: "Python (Basic)", issuer: "HackerRank", date: "Mar 2025" },
    { title: "React", issuer: "HackerRank", date: "Mar 2025" },
    { title: "Software Development Essentials", issuer: "Microsoft + LinkedIn", date: "Jul 2024" }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
    Education & Certifications
  </h2>
  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8" />
  <p className="text-gray-700 dark:text-white text-lg max-w-2xl mx-auto">
    My academic background and continuous learning journey
  </p>
</div>


        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
  Academic Background
</h3>

            {education.map((edu, index) => (
              <Card
                key={index}
                className="hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-all duration-500 hover:scale-[1.02] border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-2">
                    <GraduationCap size={20} className="text-blue-600" />
                    {edu.degree}
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-lg font-medium text-blue-600">{edu.institution}</p>
                    <div className="flex items-center gap-4 text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      {edu.cgpa && <span className="font-semibold text-green-600">{edu.cgpa}</span>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Relevant Coursework:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span className="text-sm text-gray-600">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Certifications</h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-all duration-500 hover:scale-[1.03] border-0 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md"
                >
                 <CardContent className="p-4">
  <div className="flex items-start gap-3">
    <Award size={20} className="text-blue-600 mt-1 flex-shrink-0" />
    <div>
      <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{cert.title}</h4>
      <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">{cert.issuer}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
    </div>
  </div>
</CardContent>

                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
