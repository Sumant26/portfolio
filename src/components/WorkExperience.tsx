import { motion } from "motion/react";
import { Briefcase, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface Job {
  company: string;
  role: string;
  location: string;
  businessLogic?: string[];
  technicalContributions: string[];
  techStack: string[];
}

const productExperience: Job[] = [
  {
    company: "Doshaheen",
    role: "Software Developer",
    location: "Pune, India",
    businessLogic: [
      "Regulatory compliance document management with audit trails",
      "Multi-level approval workflows enforced via RBAC",
      "Document versioning and traceability for compliance reviews",
    ],
    technicalContributions: [
      "Designed and implemented backend services using Node.js, Express, and MongoDB",
      "Built secure REST APIs with validations and role-based authorization",
      "Developed supporting React dashboards for internal users",
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "React", "REST APIs", "RBAC"],
  },
  {
    company: "DentalDost",
    role: "Software Developer",
    location: "Pune, India",
    businessLogic: [
      "Appointment booking, treatment records, and medical image management",
      "Secure access control for doctors, patients, and administrators",
    ],
    technicalContributions: [
      "Built REST APIs using Node.js and Express",
      "Developed Flutter mobile applications for patient-facing workflows",
      "Implemented React-based admin dashboards",
    ],
    techStack: ["Node.js", "Express.js", "Flutter", "React", "REST APIs"],
  },
];

const serviceExperience: Job[] = [
  {
    company: "Ergobite",
    role: "Software Developer",
    location: "Pune, India",
    businessLogic: [
      "End-to-end meal ordering and delivery lifecycle",
      "Order state transitions and delivery tracking",
    ],
    technicalContributions: [
      "Developed backend APIs using Node.js and Express",
      "Integrated authentication and RBAC",
      "Built React dashboards for operational monitoring",
    ],
    techStack: ["Node.js", "Express.js", "React", "REST APIs", "RBAC"],
  },
  {
    company: "ScriptLanes",
    role: "Software Developer",
    location: "Pune, India",
    technicalContributions: [
      "Built backend services using Node.js and ASP.NET Core",
      "Developed Flutter and Angular applications",
      "Implemented complex visualization workflows using HOOPS Communicator",
    ],
    techStack: ["Node.js", "ASP.NET Core", "Flutter", "Angular", "HOOPS Communicator"],
  },
];

export function WorkExperience() {
  const renderJobCard = (job: Job, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group border-border/50 hover:border-primary/20 glass-effect">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="text-2xl">{job.company}</h3>
              </div>
              <p className="text-lg text-muted-foreground ml-5">{job.role}</p>
            </div>
            <div className="text-sm text-muted-foreground flex flex-col gap-2 md:text-right">
              <div className="flex items-center gap-2 md:justify-end">
                <MapPin className="w-4 h-4" />
                {job.location}
              </div>
            </div>
          </div>

          {job.businessLogic && job.businessLogic.length > 0 && (
            <>
              <h4 className="text-sm font-medium mb-3 text-primary">Business Logic & Workflow:</h4>
              <ul className="space-y-3 mb-6">
                {job.businessLogic.map((logic, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-1.5 flex-shrink-0">
                      <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </span>
                    <span>{logic}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <h4 className="text-sm font-medium mb-3 text-primary">Technical Contributions:</h4>
          <ul className="space-y-3 mb-6">
            {job.technicalContributions.map((contribution, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="text-primary mt-1.5 flex-shrink-0">
                  <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <span>{contribution}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {job.techStack.map((tech, i) => (
              <Badge key={i} variant="secondary" className="bg-primary/5 hover:bg-primary/10 border-primary/10 text-foreground">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-muted/30 via-background to-background relative">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16 section-decoration pt-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full backdrop-blur-sm">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 gradient-text">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Building scalable mobile applications and backend systems
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-primary text-center">Product Experience</h3>
            <div className="space-y-8">
              {productExperience.map((job, index) => renderJobCard(job, index))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6 text-primary text-center">Service Experience</h3>
            <div className="space-y-8">
              {serviceExperience.map((job, index) => renderJobCard(job, index))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
