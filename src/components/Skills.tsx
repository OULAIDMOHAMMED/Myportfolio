import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Langages",
    icon: Code2,
    skills: ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "PHP", "C#"],
  },
  {
    title: "Technologies Web",
    icon: Cloud,
    skills: ["HTML/CSS", "Bootstrap", "ReactJS", "Next.js", "NestJS", "Node.js", "Spring Boot"],
  },
  {
    title: "Bases de Données",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MongoDB", "SQL Server", "ChromaDB"],
  },
  {
    title: "Architecture & IA",
    icon: Brain,
    skills: ["Microservices", "Docker", "Kubernetes", "RAG", "DevOps", "AI/ML"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compétences <span className="text-tech-cyan">Techniques</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="bg-card border-border hover:border-tech-cyan/50 transition-all hover:shadow-glow group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all">
                      <Icon className="h-6 w-6 text-background" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-tech-cyan transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-4 py-2 bg-surface-light rounded-lg text-sm font-medium hover:bg-tech-cyan hover:text-background transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;