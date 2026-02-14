import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { Card } from "./ui/card";

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl" />
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
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Academic Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 gradient-text">Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Strong foundation in computer science and engineering
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/20 glass-effect group relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl">Pune University</h3>
                      <p className="text-lg text-muted-foreground">Bachelor of Engineering</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-4">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">Computer Science</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Pune, India</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}