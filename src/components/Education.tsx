import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const educationData = {
  fr: [
    {
      degree: "Cycle d'Ingénieur en Génie Informatique",
      specialization: "Génie Logiciel & Business Intelligence",
      year: "2022 - 2025",
      description: "Formation avancée en développement logiciel, architecture système, intelligence artificielle et analyse de données.",
    },
    {
      degree: "DEUST",
      specialization: "Informatique",
      year: "2020 - 2022",
      description: "Diplôme d'études universitaires scientifiques et techniques en informatique.",
    },
    {
      degree: "Baccalauréat",
      specialization: "Sciences",
      year: "2020",
      description: "Baccalauréat scientifique avec mention.",
    },
  ],
  en: [
    {
      degree: "Engineering Degree in Computer Science",
      specialization: "Software Engineering & Business Intelligence",
      year: "2022 - 2025",
      description: "Advanced training in software development, system architecture, artificial intelligence and data analysis.",
    },
    {
      degree: "DEUST",
      specialization: "Computer Science",
      year: "2020 - 2022",
      description: "University degree in scientific and technical studies in computer science.",
    },
    {
      degree: "High School Diploma",
      specialization: "Sciences",
      year: "2020",
      description: "Scientific high school diploma with honors.",
    },
  ],
};

const Education = () => {
  const { t, language } = useLanguage();
  const education = educationData[language];
  return (
    <section id="education" className="py-20 px-4 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-tech-cyan">{t("education.title")}</span> {t("education.subtitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("education.description")}
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={index * 150}
            >
              <Card 
                className="bg-card border-border hover:border-tech-cyan/50 transition-all hover:shadow-glow group"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-background" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-tech-cyan transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-muted-foreground font-medium">
                            {edu.specialization}
                          </p>
                        </div>
                        <span className="text-tech-cyan font-semibold mt-2 md:mt-0">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
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

export default Education;
