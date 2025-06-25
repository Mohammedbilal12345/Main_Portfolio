import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sécurité System",
      description:
        "A full-stack e-commerce website focused on security systems, with seamless payment, secure authentication, and modern UI.",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Stripe",
      ],
      github: "https://github.com/Mohammedbilal12345/Ecommerce-Website-MERN-",
      demo: "https://ecommerce-website-mern-five.vercel.app/",
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "Streamlit-based machine learning application to detect fraudulent transactions with real-time input and model evaluation.",
      technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Numpy", "Joblib"],
      github: "https://github.com/Mohammedbilal12345/Credit-Card-Fraud-Detection",
    },
    {
      title: "Currency Converter with GUI & Graphs",
      description:
        "Tkinter-based app to convert currencies and visualize historical exchange rates using dynamic matplotlib charts.",
      technologies: ["Python", "Tkinter", "Matplotlib", "API Integration"],
      github: "https://github.com/Mohammedbilal12345/currency_converter",
    },
    {
      title: "Car Pooling System (C)",
      description: "Console-based carpool system with basic data structure implementation in C.",
      technologies: ["C", "Data Structures"],
      github: "https://github.com/Mohammedbilal12345/Car-pooling-",
    },
    {
      title: "Search Optimization in E-Commerce",
      description:
        "DSA-powered search enhancement for faster and smarter product discovery in e-commerce.",
      technologies: ["C++", "Search Algorithms", "DSA"],
      github: "https://github.com/Mohammedbilal12345/E-Commerce-System-with-DSA-Search-Optimization",
    },
    {
      title: "Mahil AI (Frontend)",
      description:
        "Frontend UI for a women-focused AI product using modern styling and interactivity.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Mohammedbilal12345/Frontend_MAHILAI",
      demo: "https://mahilaifrontend9.netlify.app/",
    },
    {
      title: "CV Sensei",
      description:
        "Streamlit-powered intelligent resume evaluator using NLP models and PDF parsing.",
      technologies: [
        "Streamlit",
        "PyMuPDF",
        "pdfplumber",
        "transformers",
        "scikit-learn",
        "spacy",
        "torch",
      ],
      github: "https://github.com/Mohammedbilal12345/-CV-Sensei",
    },
    {
      title: "CodeMentor AI",
      description:
        "AI mentor that reviews code using Google Gemini 2.0 Pro and provides intelligent suggestions.",
      technologies: [
        "React.js",
        "Express.js",
        "Google Gemini API",
        "PrismJS",
        "Highlight.js",
      ],
      github: "https://github.com/Mohammedbilal12345/CodeMentorAI-",
    },
    {
      title: "Custom Ping Utility",
      description:
        "Custom ICMP ping tool with geo-location and visualizations; integrates networking analysis.",
      technologies: ["Python", "Raw Sockets", "Matplotlib", "Wireshark", "SSL/TLS", "Computer Networks"],
      github: "https://github.com/Mohammedbilal12345/CUSTOM_PING_UTILITY-ICMP-",
    },
    {
      title: "Classroom Networking Simulation",
      description:
        "A Cisco Packet Tracer project simulating real-world classroom networking and routing setup.",
      technologies: ["Cisco Packet Tracer", "Networking", "Routing", "Switching"],
      github: "https://github.com/Mohammedbilal12345/CLASSROOM_NETWORKING",
    },
    {
      title: "Team Banalo",
      description:
        "A real-time collaborative platform for hackathon participants to form teams, manage projects, and communicate seamlessly.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "ESLint",
        "React Hook Form",
        "Zod",
        "Python",
        "FastAPI",
        "Pydantic",
        "Supabase",
        "LangChain",
        "Docker",
      ],
      github: "https://github.com/Mohammedbilal12345/TeamBanalo",
      demo: "https://teambanalo-frontend.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
            Featured Projects 🚀
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8 animate-slide-in-left"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto animate-typing">
            A showcase of my recent work and personal projects that demonstrate my technical skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
                  <Code size={20} className="text-blue-600" />
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:scale-105 transition-transform"
                      >
                        <Github size={16} /> Code
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-transform text-white"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;