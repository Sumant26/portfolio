import { motion } from "motion/react";
import { Code, Database, Layout, Server, Palette, Wrench, Cloud, Layers } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Primary Stack",
    icon: <Code className="w-5 h-5" />,
    skills: ["Flutter", "Dart", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    color: "indigo",
  },
  {
    title: "Secondary Stack",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "ASP.NET Core", "Angular"],
    color: "purple",
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-5 h-5" />,
    skills: ["Dart", "JavaScript (ES6+)", "TypeScript", "C#", "SQL"],
    color: "pink",
  },
  {
    title: "Mobile Development",
    icon: <Layout className="w-5 h-5" />,
    skills: ["Flutter (Android & iOS)", "State Management", "API Integration"],
    color: "cyan",
  },
  {
    title: "Backend Development",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Express.js", "Authentication", "RBAC", "Validation Logic"],
    color: "blue",
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["MongoDB", "SQL Server"],
    color: "green",
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS EC2", "Azure App Services", "CI/CD Pipelines"],
    color: "orange",
  },
  {
    title: "Architecture & Patterns",
    icon: <Layers className="w-5 h-5" />,
    skills: ["Clean Architecture", "SOLID", "REST", "Layered Architecture"],
    color: "violet",
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "GitHub", "Swagger", "Postman", "Jira"],
    color: "red",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl" />
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
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Technical Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 gradient-text">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Full-stack expertise in mobile and backend development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/20 glass-effect group relative overflow-hidden">
                  {/* Subtle gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {category.icon}
                      </div>
                      <h3 className="text-sm">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="bg-muted/50 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
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