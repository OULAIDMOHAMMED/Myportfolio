import { Code2, Database, Cloud, Brain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiPhp,
  SiHtml5, SiCss3, SiBootstrap, SiReact, SiNestjs, SiNodedotjs, SiSpringboot, SiFastapi, SiDotnet,
  SiPostgresql, SiMongodb,
  SiDocker
} from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { FaJava, FaDatabase, FaBrain, FaServer, FaCogs, FaGitAlt, FaLinux } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (index: number) => {
    if (index === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(index);
      setIsTransitioning(false);
    }, 200);
  };

  const skillCategories = [
    {
      title: t("skills.languages"),
      icon: Code2,
      skills: [
        { name: "C/C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: FaJava, color: "#ED8B00" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "C#", icon: TbBrandCSharp, color: "#512BD4" },
      ],
    },
    {
      title: t("skills.web"),
      icon: Cloud,
      skills: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      ],
    },
    {
      title: t("skills.database"),
      icon: Database,
      skills: [
        { name: "SQL", icon: FaDatabase, color: "#336791" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "SQL Server", icon: TbSql, color: "#CC2927" },
      ],
    },
    {
      title: t("skills.architecture"),
      icon: Brain,
      skills: [
        { name: "Microservices", icon: FaServer, color: "#FF6B6B" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "RabbitMQ", icon: FaCogs, color: "#FF6600" },
        { name: "RAG", icon: FaBrain, color: "#9B59B6" },
        { name: "Git/GitHub", icon: FaGitAlt, color: "#F05032" },
        { name: "Linux", icon: FaLinux, color: "#FCC624" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("skills.title")} <span className="text-tech-cyan">{t("skills.subtitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </AnimatedSection>

        {/* Menu des catégories */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === index;
              
              return (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(index)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300",
                    isActive 
                      ? "bg-gradient-primary text-background shadow-glow" 
                      : "bg-card border border-border hover:border-tech-cyan/50 text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{category.title}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Contenu des skills */}
        <AnimatedSection animation="scale" delay={200}>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 min-h-[300px]">
            <div 
              className={cn(
                "transition-all duration-200 ease-in-out",
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-tech-cyan">
                {skillCategories[activeCategory].title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-3 p-5 bg-surface-light rounded-xl hover:bg-tech-cyan/10 border border-transparent hover:border-tech-cyan transition-all duration-300 cursor-default group"
                    >
                      <SkillIcon 
                        className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
