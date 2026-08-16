import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <Code2 className="w-16 h-16 text-purple-600 animate-pulse" />
        </div>
        
        <h1 className="mb-6 text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Hello, I'm Nur Izzati Binti Mohd Talib
        </h1>
        
        <p className="text-2xl mb-4 text-gray-600">Computing Graduate</p>
        
        <p className="text-lg mb-8 text-gray-500 max-w-2xl mx-auto">
          Passionate about artificial intelligence, machine learning, and data analysis.
          Experienced in building intelligent systems for education and research from data cleaning
          to model building.
        </p>
        
        <div className="flex gap-4 justify-center mb-8">
          <Button onClick={() => scrollToSection("work")} size="lg" className="bg-purple-600 hover:bg-purple-700">
            View My Work
          </Button>
          <Button onClick={() => scrollToSection("overview")} variant="outline" size="lg">
            More About Me
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:nurizzati.mohdtalib@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}