import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const educationData = {
  fr: [
    {
      degree: "Cycle d'Ingénieur en Génie Informatique",
      institution: "Faculté des Sciences et Techniques d'Errachidia",
      specialization: "Génie Logiciel & Business Intelligence",
      year: "2023 - Présent",
      description: "Formation avancée en développement logiciel, architecture système, intelligence artificielle et analyse de données.",
    },
    {
      degree: "DEUST",
      institution: "Faculté des Sciences et Techniques d'Errachidia",
      specialization: "Mathématiques – Informatique – Physique (MIP)",
      year: "2021 - 2023",
      description: "Diplôme d'Études Universitaires Scientifiques et Techniques.",
    },
    {
      degree: "Baccalauréat Sciences Physiques",
      institution: "Lycée Abdelkrim El Khattabi, Tinghir",
      specialization: "Sciences Physiques",
      year: "2021",
      description: "Baccalauréat scientifique option Sciences Physiques.",
    },
  ],
  en: [
    {
      degree: "Engineering Degree in Computer Science",
      institution: "Faculty of Sciences and Techniques of Errachidia",
      specialization: "Software Engineering & Business Intelligence",
      year: "2023 - Present",
      description: "Advanced training in software development, system architecture, artificial intelligence and data analysis.",
    },
    {
      degree: "DEUST",
      institution: "Faculty of Sciences and Techniques of Errachidia",
      specialization: "Mathematics – Computer Science – Physics (MIP)",
      year: "2021 - 2023",
      description: "University Diploma in Scientific and Technical Studies.",
    },
    {
      degree: "High School Diploma in Physical Sciences",
      institution: "Abdelkrim El Khattabi High School, Tinghir",
      specialization: "Physical Sciences",
      year: "2021",
      description: "Scientific high school diploma, Physical Sciences option.",
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
                          <p className="text-lg text-foreground/80 font-medium">
                            {edu.institution}
                          </p>
                          <p className="text-muted-foreground">
                            {edu.specialization}
                          </p>
                        </div>
                        <span className="text-tech-cyan font-semibold mt-2 md:mt-0 whitespace-nowrap">
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
