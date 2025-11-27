import { Code2, Database, Cloud, Brain, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiPhp,
  SiHtml5, SiCss3, SiBootstrap, SiReact, SiNextdotjs, SiNestjs, SiNodedotjs, SiSpringboot,
  SiPostgresql, SiMongodb,
  SiDocker, SiKubernetes
} from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { FaJava, FaDatabase, FaBrain, FaServer, FaRobot, FaCogs } from "react-icons/fa";

const Skills = () => {
  const { t } = useLanguage();
  const [openCategory, setOpenCategory] = useState<number | null>(0);

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
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
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
        { name: "ChromaDB", icon: FaDatabase, color: "#FF6F61" },
      ],
    },
    {
      title: t("skills.architecture"),
      icon: Brain,
      skills: [
        { name: "Microservices", icon: FaServer, color: "#FF6B6B" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "RAG", icon: FaBrain, color: "#9B59B6" },
        { name: "DevOps", icon: FaCogs, color: "#E74C3C" },
        { name: "AI/ML", icon: FaRobot, color: "#00D4AA" },
      ],
    },
  ];

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("skills.title")} <span className="text-tech-cyan">{t("skills.subtitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </div>

        <div className="space-y-4">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isOpen = openCategory === index;
            
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-tech-cyan/50 transition-all"
              >
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full p-6 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:shadow-glow transition-all">
                      <Icon className="h-6 w-6 text-background" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-tech-cyan transition-colors">
                      {category.title}
                    </h3>
                    <span className="text-muted-foreground text-sm">
                      ({category.skills.length})
                    </span>
                  </div>
                  <ChevronDown 
                    className={cn(
                      "h-6 w-6 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skillIndex}
                            className="flex flex-col items-center gap-2 p-4 bg-surface-light rounded-xl hover:bg-tech-cyan/10 hover:border-tech-cyan border border-transparent transition-all cursor-default group/skill"
                          >
                            <SkillIcon 
                              className="h-10 w-10 transition-transform group-hover/skill:scale-110" 
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
