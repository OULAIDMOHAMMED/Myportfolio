import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const experiencesData = {
  fr: [
    {
      company: "XAI",
      role: "AI Developer / xDevOps",
      period: "2024",
      description: "Développement de solutions d'intelligence artificielle avancées avec implémentation de RAG (Retrieval Augmented Generation), intégration de ChromaDB pour la gestion vectorielle, et création d'applications full-stack avec Next.js et PostgreSQL.",
      technologies: ["RAG", "ChromaDB", "PostgreSQL", "Next.js", "Python", "AI", "DevOps"],
    },
    {
      company: "Wimtek",
      role: "Développeur Full-Stack",
      period: "2023",
      description: "Développement d'applications web complètes avec des technologies modernes. Conception et implémentation de solutions frontend et backend, intégration d'APIs, et optimisation des performances applicatives.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "REST APIs"],
    },
    {
      company: "Bisoft Engineering Club",
      role: "Responsable Média (Media Manager)",
      period: "Février 2024 - Présent",
      description: "Gestion de la communication digitale et des médias du club. Création de contenu visuel, gestion des réseaux sociaux et coordination des événements médiatiques.",
      technologies: ["Communication", "Design", "Social Media", "Gestion de projet"],
    },
    {
      company: "Architeo",
      role: "Développeur Backend Java/Python",
      period: "2022-2023",
      description: "Conception et développement d'architectures microservices scalables. Implémentation de services backend robustes avec Java et Python, gestion des bases de données, et intégration d'APIs RESTful pour des applications d'entreprise.",
      technologies: ["Java", "Python", "Microservices", "Spring Boot", "Docker", "REST APIs"],
    },
  ],
  en: [
    {
      company: "XAI",
      role: "AI Developer / xDevOps",
      period: "2024",
      description: "Development of advanced artificial intelligence solutions with RAG (Retrieval Augmented Generation) implementation, ChromaDB integration for vector management, and creation of full-stack applications with Next.js and PostgreSQL.",
      technologies: ["RAG", "ChromaDB", "PostgreSQL", "Next.js", "Python", "AI", "DevOps"],
    },
    {
      company: "Wimtek",
      role: "Full-Stack Developer",
      period: "2023",
      description: "Development of complete web applications with modern technologies. Design and implementation of frontend and backend solutions, API integration, and application performance optimization.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "REST APIs"],
    },
    {
      company: "Bisoft Engineering Club",
      role: "Media Manager",
      period: "February 2024 - Present",
      description: "Digital communication and media management for the club. Visual content creation, social media management and coordination of media events.",
      technologies: ["Communication", "Design", "Social Media", "Project Management"],
    },
    {
      company: "Architeo",
      role: "Backend Developer Java/Python",
      period: "2022-2023",
      description: "Design and development of scalable microservices architectures. Implementation of robust backend services with Java and Python, database management, and RESTful API integration for enterprise applications.",
      technologies: ["Java", "Python", "Microservices", "Spring Boot", "Docker", "REST APIs"],
    },
  ],
};

const Experience = () => {
  const { t, language } = useLanguage();
  const experiences = experiencesData[language];

  return (
    <section id="experience" className="py-20 px-4 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("experience.title")} <span className="text-tech-cyan">{t("experience.subtitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("experience.description")}
          </p>
        </AnimatedSection>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <AnimatedSection 
              key={index} 
              animation={index % 2 === 0 ? "fade-left" : "fade-right"} 
              delay={index * 100}
            >
              <Card 
                className="bg-card border-border hover:border-tech-cyan/50 transition-all hover:shadow-glow"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <Briefcase className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-tech-cyan">{exp.role}</h3>
                        <p className="text-xl font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        className="bg-surface-light text-foreground border-tech-cyan/30"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default Experience;
