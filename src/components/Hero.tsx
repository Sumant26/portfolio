import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure resume.pdf is inside /public
    link.download = "Sumant_Tulshibagwale_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full backdrop-blur-sm">
              <span className="text-sm text-primary">
                Flutter & Backend-Focused Software Developer
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sumant Tulshibagwale
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            5+ years building scalable mobile applications and backend systems using Flutter, Node.js, and MongoDB
          </motion.p>

          {/* Contact Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="tel:+917875122901">
              <Button variant="outline" className="gap-2 glass-effect hover:bg-primary/10 hover:border-primary/30 transition-all">
                <Phone className="w-4 h-4" />
                +91 7875122901
              </Button>
            </a>

            <a href="mailto:sumanttulshibagwale@gmail.com">
              <Button variant="outline" className="gap-2 glass-effect hover:bg-primary/10 hover:border-primary/30 transition-all">
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://linkedin.com/in/sumant-tulshibagwale"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Sumant26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button
              onClick={() => scrollToSection("experience")}
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </Button>

            <Button
              onClick={handleDownloadResume}
              size="lg"
              variant="outline"
              className="gap-2 border-primary text-primary hover:bg-primary/10 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground/40" />
        </motion.div>
      </div>
    </section>
  );
}
