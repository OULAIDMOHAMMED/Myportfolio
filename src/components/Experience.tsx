import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "XAI",
    role: "AI Developer / xDevOps",
    period: "2024",
    description: "Développement de solutions d'intelligence artificielle avancées avec implémentation de RAG (Retrieval Augmented Generation), intégration de ChromaDB pour la gestion vectorielle, et création d'applications full-stack avec Next.js et PostgreSQL.",
    technologies: ["RAG", "ChromaDB", "PostgreSQL", "Next.js", "Python", "AI", "DevOps"],
  },
  {
    company: "Architeo",
    role: "Développeur Backend Java/Python",
    period: "2023",
    description: "Conception et développement d'architectures microservices scalables. Implémentation de services backend robustes avec Java et Python, gestion des bases de données, et intégration d'APIs RESTful pour des applications d'entreprise.",
    technologies: ["Java", "Python", "Microservices", "Spring Boot", "Docker", "REST APIs"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="text-tech-cyan">Expérience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Parcours professionnel en développement Backend et IA
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;