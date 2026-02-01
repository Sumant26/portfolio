import { motion } from "motion/react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  color: string;
}

const certifications: Certification[] = [
  {
    title: "Front-end Developer Professional",
    issuer: "Meta",
    date: "Jan 2023",
    description: "Advanced frontend development practices and React expertise",
    color: "indigo",
  },
  {
    title: "Explore ML Facilitator",
    issuer: "Google AI",
    date: "Feb 2020",
    description: "Machine Learning fundamentals and practical implementation",
    color: "purple",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16 section-decoration pt-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full backdrop-blur-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 gradient-text">Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/20 glass-effect group relative overflow-hidden">
                  {/* Decorative gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="mb-4">
                      <div className="inline-block p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Award className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="mb-4 bg-primary/5 border-primary/10 text-foreground">
                      {cert.issuer}
                    </Badge>
                    
                    <h3 className="text-xl mb-3">{cert.title}</h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}