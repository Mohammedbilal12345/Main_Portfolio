import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mohammedbilal96654@gmail.com",
      link: "mailto:mohammedbilal96654@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 93707 78994",
      link: "tel:+919370778994",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, India",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      link: "https://github.com/Mohammedbilal12345",
      label: "GitHub – Projects & Code",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/mohammed-bilal-23678328a/",
      label: "LinkedIn – Professional Profile",
    },
    {
      icon: () => <span className="text-xl">🏅</span>,
      link: "https://www.hackerrank.com/profile/PES2UG23CS344",
      label: "HackerRank – Coding Badges",
    },
    {
      icon: () => <span className="text-xl">🧠</span>,
      link: "https://leetcode.com/u/mohammedbilal97/",
      label: "LeetCode – DSA Practice",
    },
    {
      icon: () => <span className="text-xl">📷</span>,
      link: "https://www.instagram.com/b.i_la.l",
      label: "Instagram – Personal Life",
    },
  ];

  const titles = [
    "Full Stack Developer 💻",
    "Problem Solver 🧠",
    "Dream Chaser 🚀",
    "Tech Lover ⚙️",
  ];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-pulse">
            Let's Connect ✨
          </h2>
          <p className="text-lg font-mono text-blue-700 dark:text-indigo-300 transition-all duration-500">
            {titles[currentTitle]}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-base mt-4 max-w-xl mx-auto">
            {/* I'm Mohammed Bilal — a CSE student, web developer, and tech explorer. Always building, always learning, always dreaming big. */}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="border-0 shadow-xl bg-white dark:bg-gray-900 hover:shadow-blue-300 dark:hover:shadow-indigo-600 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">📫 Contact Info</CardTitle>
            </CardHeader>
            <CardContent>
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.link}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <info.icon size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">{info.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Socials */}
          <Card className="border-0 shadow-xl bg-white dark:bg-gray-900 hover:shadow-purple-300 dark:hover:shadow-purple-700 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">🌐 Find Me Online</CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                From open-source to DSA, I’m always pushing pixels and solving puzzles.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                  >
                    <social.icon />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{social.label}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Bilal • Crafted with 💙 using React & Tailwind  
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 italic">
            Fueled by caffeine & curiosity ☕💡
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
