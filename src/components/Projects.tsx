import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projectsData = {
  fr: [
  {
    title: "Système de Gestion RH Intelligent",
    description: "Application complète de gestion des ressources humaines avec intelligence artificielle pour l'automatisation des processus RH, la gestion des employés et l'analyse prédictive.",
    technologies: ["NestJS", "Spring Boot", "Java", "PostgreSQL", "Docker", "Microservices"],
    github: "#",
    demo: "#",
  },
  {
    title: "Plateforme xDevOps avec RAG",
    description: "Solution DevOps avancée intégrant RAG (Retrieval Augmented Generation) pour l'amélioration de la documentation et des processus de développement automatisés.",
    technologies: ["Next.js", "Python", "RAG", "ChromaDB", "PostgreSQL", "AI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Architecture Microservices Backend",
    description: "Infrastructure backend scalable construite avec des microservices, comprenant l'authentification, la gestion des données et les API RESTful.",
    technologies: ["Java", "Python", "Spring Boot", "Docker", "Kubernetes", "MongoDB"],
    github: "#",
    demo: "#",
  },
],
en: [
  {
    title: "Intelligent HR Management System",
    description: "Complete human resources management application with artificial intelligence for HR process automation, employee management and predictive analysis.",
    technologies: ["NestJS", "Spring Boot", "Java", "PostgreSQL", "Docker", "Microservices"],
    github: "#",
    demo: "#",
  },
  {
    title: "xDevOps Platform with RAG",
    description: "Advanced DevOps solution integrating RAG (Retrieval Augmented Generation) for documentation improvement and automated development processes.",
    technologies: ["Next.js", "Python", "RAG", "ChromaDB", "PostgreSQL", "AI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Backend Microservices Architecture",
    description: "Scalable backend infrastructure built with microservices, including authentication, data management and RESTful APIs.",
    technologies: ["Java", "Python", "Spring Boot", "Docker", "Kubernetes", "MongoDB"],
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("projects.title")} <span className="text-tech-cyan">{t("projects.subtitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-tech-cyan/50 transition-all hover:shadow-glow group"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;