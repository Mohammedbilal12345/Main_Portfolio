
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "XYZ University",
      period: "2022 - 2026",
      cgpa: "8.5/10",
      description: "Focused on software engineering, data structures, algorithms, and web development. Active member of the Computer Science Society.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering",
        "Computer Networks"
      ]
    },
    {
      degree: "Higher Secondary Education (Science)",
      institution: "ABC Senior Secondary School",
      period: "2020 - 2022",
      cgpa: "92%",
      description: "Specialized in Mathematics, Physics, and Chemistry with additional focus on Computer Science.",
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
      ]
    }
  ];

  const certifications = [
    {
      title: "Meta Frontend Developer Professional Certificate",
      issuer: "Coursera",
      date: "2024"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Academic Background</h3>
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg">
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
                      <span className="font-semibold text-green-600">CGPA: {edu.cgpa}</span>
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
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Award size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">{cert.title}</h4>
                        <p className="text-sm text-blue-600 mb-1">{cert.issuer}</p>
                        <p className="text-xs text-gray-500">{cert.date}</p>
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
