import { Mail, Phone, Linkedin, Github, Globe, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-muted/30 to-background border-t border-border py-16 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4">
              Sumant Tulshibagwale
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Frontend Engineer passionate about creating exceptional digital experiences and innovative solutions.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Pune, Maharashtra
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-muted-foreground">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+917875122901"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 7875122901
                </a>
              </li>
              <li>
                <a
                  href="mailto:sumanttulshibagwale@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/in/sumant-tulshibagwale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Sumant26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Sumant Tulshibagwale. Built with
            <Heart className="w-4 h-4 fill-current" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}