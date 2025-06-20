import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";
import cvFile from "@/assets/Bilal_cv.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 dark:bg-pink-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Bilal Profile"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-text-reveal">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
              Bilal
            </span>
          </h1>

          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 animate-slide-in-left animation-delay-500">
            Computer Science & Engineering Student
          </h2>

          {/* Bio */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-right animation-delay-700">
            Passionate about creating innovative solutions through code...
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-up animation-delay-1000">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <a
                href="mailto:mohammedbilal96654@gmail.com"
                className="flex items-center gap-2"
              >
                Get In Touch
                <Mail size={18} className="group-hover:rotate-12 transition-transform duration-200" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full hover:scale-105 transition-all duration-300 group border-purple-300 dark:border-purple-700"
            >
              <a href={cvFile} download className="flex items-center gap-2">
                <Download size={18} className="group-hover:scale-110 transition-transform duration-200" />
                Download CV
              </a>
            </Button>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/Mohammedbilal12345" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full hover:scale-110 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 group"
                >
                  <Github size={20} className="group-hover:-rotate-12 transition-transform duration-200" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/mohammed-bilal-23678328a/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full hover:scale-110 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/20 group"
                >
                  <Linkedin size={20} className="group-hover:-rotate-12 transition-transform duration-200" />
                </Button>
              </a>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <div className="animate-bounce-slow animation-delay-1500">
            <a
              href="#about"
              className="inline-block hover:scale-110 transition-transform duration-200"
            >
              <ArrowDown size={32} className="text-blue-600 dark:text-blue-400 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
