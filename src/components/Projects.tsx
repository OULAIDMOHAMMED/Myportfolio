import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const projectsData = {
  fr: [
    {
      title: "Système de Gestion RH Intelligent",
      description: "Système de gestion RH intelligent automatisant les processus, suivi des employés et gestion des performances avec une architecture moderne.",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
      github: "https://github.com/OULAIDMOHAMMED/THE-NEXT-GENERATION-OF-SMART-HRMS",
      demo: "#",
    },
    {
      title: "Système de Gestion de Pharmacie",
      description: "Système de gestion de pharmacie automatisant stocks/ventes, interface Swing avec base de données et intégration d'un chatbot intelligent.",
      technologies: ["Java", "Swing", "MySQL", "Chatbot"],
      github: "https://github.com/OULAIDMOHAMMED/PHARMACY-MANAGEMENT",
      demo: "#",
    },
    {
      title: "Site E-commerce",
      description: "Développement d'un site e-commerce complet avec gestion des produits, commandes et utilisateurs, architecture backend robuste.",
      technologies: ["Spring Boot", "Java", "PostgreSQL", "REST API"],
      github: "#",
      demo: "#",
    },
  ],
  en: [
    {
      title: "Intelligent HR Management System",
      description: "Smart HR management system automating processes, employee tracking and performance management with modern architecture.",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
      github: "https://github.com/OULAIDMOHAMMED/THE-NEXT-GENERATION-OF-SMART-HRMS",
      demo: "#",
    },
    {
      title: "Pharmacy Management System",
      description: "Pharmacy management system automating inventory/sales, Swing interface with database and intelligent chatbot integration.",
      technologies: ["Java", "Swing", "MySQL", "Chatbot"],
      github: "https://github.com/OULAIDMOHAMMED/PHARMACY-MANAGEMENT",
      demo: "#",
    },
    {
      title: "E-commerce Website",
      description: "Complete e-commerce website development with product, order and user management, robust backend architecture.",
      technologies: ["Spring Boot", "Java", "PostgreSQL", "REST API"],
      github: "#",
      demo: "#",
    },
  ],
};

const Projects = () => {
  const { t, language } = useLanguage();
  const projects = projectsData[language];
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("projects.title")} <span className="text-tech-cyan">{t("projects.subtitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={index * 150}
            >
              <Card 
                className="bg-card border-border hover:border-tech-cyan/50 transition-all hover:shadow-glow group h-full"
              >
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-tech-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-surface-light hover:bg-tech-cyan hover:text-background transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-tech-cyan/50 hover:bg-tech-cyan hover:text-background"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {t("projects.code")}
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:shadow-glow"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("projects.demo")}
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
