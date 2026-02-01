import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-4">SUMANT TULSHIBAGWALE</h1>
        <div className="flex flex-wrap gap-4 text-sm opacity-90">
          <a href="tel:+917875122901" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <Phone className="w-4 h-4" />
            +91 7875122901
          </a>
          <a href="mailto:sumanttulshibagwale@gmail.com" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
            <Mail className="w-4 h-4" />
            sumanttulshibagwale@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Pune, MH
          </span>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <a 
            href="https://linkedin.com/in/sumant-tulshibagwale" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a 
            href="https://github.com/Sumant26" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a 
            href="https://sumant-tulshibagwale.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <Globe className="w-4 h-4" />
            Portfolio
          </a>
        </div>
      </div>
    </header>
  );
}