
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              B
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Bilal
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Computer Science & Engineering Student
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. Dedicated to learning cutting-edge technologies 
            and building impactful software that makes a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail size={18} />
              </a>
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="rounded-full hover:scale-105 transition-all duration-300">
                <Github size={20} />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full hover:scale-105 transition-all duration-300">
                <Linkedin size={20} />
              </Button>
            </div>
          </div>
          
          <div className="animate-bounce">
            <a href="#about">
              <ArrowDown size={32} className="text-blue-600 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
