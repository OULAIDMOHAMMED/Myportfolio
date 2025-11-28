import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
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
    {
      title: "Application de Messagerie : TEXTCHAT DESKTOP",
      description: "Application de messagerie instantanée avec interface utilisateur intuitive et gestion des données persistantes via SQLite.",
      technologies: ["Python", "Tkinter", "Sockets", "SQLite"],
      github: "https://github.com/OULAIDMOHAMMED/textchat-desktop-mini-application-de-messagerie-instantane",
      demo: "#",
    },
    {
      title: "Gestion des Réservations Kasbah",
      description: "Site web permettant la gestion des réservations de chambres dans le sud du Maroc avec base de données SQL.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "SQL"],
      github: "https://github.com/OULAIDMOHAMMED/kasbah-reservations",
      demo: "#",
    },
    {
      title: "Classification des Déchets par IA",
      description: "Modèle d'apprentissage automatique pour classifier les déchets utilisant KNN, Random Forest, SVM et Decision Tree.",
      technologies: ["Python", "KNN", "Random Forest", "SVM"],
      github: "https://github.com/OULAIDMOHAMMED/waste-classification",
      demo: "#",
    },
    {
      title: "Application Web de QCM",
      description: "Application web permettant aux enseignants de créer des QCM et aux étudiants d'y répondre avec correction automatique.",
      technologies: [".NET Core", "C#", "SQL Server", "ReactJS"],
      github: "https://github.com/OULAIDMOHAMMED/exam_projet",
      demo: "#",
    },
    {
      title: "Assistant Vocal IA pour Gestion Étudiante",
      description: "Projet Python combinant modèles IA et technologie d'assistant vocal pour automatiser la gestion des étudiants, suivi des performances et réponses automatisées par commandes vocales.",
      technologies: ["Python", "IA", "Voice Assistant", "NLP"],
      github: "#",
      demo: "#",
    },
    {
      title: "Infrastructure Réseau Virtualisée",
      description: "Infrastructure réseau virtualisée avec DHCP, DNS, NFS, NIS, Samba et Security Onion (Suricata, Zeek, Kibana, Snort) pour la détection d'intrusions et supervision en temps réel.",
      technologies: ["Linux", "DHCP", "DNS", "Security Onion", "Samba"],
      github: "#",
      demo: "#",
    },
    {
      title: "Reconnaissance IA des Plats Marocains",
      description: "Module IA de reconnaissance automatique des plats marocains utilisant CNN (ResNet50, EfficientNet) avec transfert d'apprentissage, atteignant 83% de précision sur 20 classes.",
      technologies: ["Python", "CNN", "ResNet50", "EfficientNet", "Deep Learning"],
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
    {
      title: "Messaging App: TEXTCHAT DESKTOP",
      description: "Instant messaging application with intuitive user interface and persistent data management via SQLite.",
      technologies: ["Python", "Tkinter", "Sockets", "SQLite"],
      github: "https://github.com/OULAIDMOHAMMED/textchat-desktop-mini-application-de-messagerie-instantane",
      demo: "#",
    },
    {
      title: "Kasbah Room Reservations",
      description: "Website for managing room reservations in southern Morocco with SQL database integration.",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "SQL"],
      github: "https://github.com/OULAIDMOHAMMED/kasbah-reservations",
      demo: "#",
    },
    {
      title: "AI Waste Classification",
      description: "Machine learning model to classify waste using KNN, Random Forest, SVM and Decision Tree algorithms.",
      technologies: ["Python", "KNN", "Random Forest", "SVM"],
      github: "https://github.com/OULAIDMOHAMMED/waste-classification",
      demo: "#",
    },
    {
      title: "QCM Web Application",
      description: "Web application allowing teachers to create quizzes and students to take them with automatic correction.",
      technologies: [".NET Core", "C#", "SQL Server", "ReactJS"],
      github: "https://github.com/OULAIDMOHAMMED/exam_projet",
      demo: "#",
    },
    {
      title: "AI Voice Assistant for Student Management",
      description: "Python-based project combining AI models and voice assistant technology to automate student management, performance tracking and automated responses via voice commands.",
      technologies: ["Python", "AI", "Voice Assistant", "NLP"],
      github: "#",
      demo: "#",
    },
    {
      title: "Virtualized Network Infrastructure",
      description: "Virtualized network infrastructure with DHCP, DNS, NFS, NIS, Samba and Security Onion (Suricata, Zeek, Kibana, Snort) for intrusion detection and real-time monitoring.",
      technologies: ["Linux", "DHCP", "DNS", "Security Onion", "Samba"],
      github: "#",
      demo: "#",
    },
    {
      title: "Moroccan Dish AI Recognition",
      description: "AI module for automatic recognition of Moroccan dishes using CNN (ResNet50, EfficientNet) with transfer learning, achieving 83% accuracy on 20 classes.",
      technologies: ["Python", "CNN", "ResNet50", "EfficientNet", "Deep Learning"],
      github: "#",
      demo: "#",
    },
  ],
};

const INITIAL_PROJECTS_COUNT = 3;

const Projects = () => {
  const { t, language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const projects = projectsData[language];
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);
  const hasMoreProjects = projects.length > INITIAL_PROJECTS_COUNT;

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
          {displayedProjects.map((project, index) => (
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

        {hasMoreProjects && (
          <AnimatedSection animation="fade-up" className="flex justify-center mt-10">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="border-tech-cyan/50 hover:bg-tech-cyan hover:text-background transition-all group"
            >
              {showAll ? (
                <>
                  {t("projects.showLess")}
                  <ChevronUp className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                </>
              ) : (
                <>
                  {t("projects.showMore")} ({projects.length - INITIAL_PROJECTS_COUNT})
                  <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                </>
              )}
            </Button>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default Projects;
