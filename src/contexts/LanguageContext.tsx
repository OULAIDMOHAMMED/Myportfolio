import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Bonjour, je suis",
    "hero.title": "Ingénieur en Génie Informatique",
    "hero.description": "Étudiant en 3ème année de cycle d'ingénieur, spécialisé en",
    "hero.specialization1": "Génie Logiciel",
    "hero.and": "et",
    "hero.specialization2": "Business Intelligence",
    "hero.passion": "Passionné par le développement Backend, Full-Stack et l'IA.",
    "hero.contact": "Me Contacter",
    "hero.download": "Télécharger CV",
    
    // Projects
    "projects.title": "Mes",
    "projects.subtitle": "Projets",
    "projects.description": "Découvrez mes réalisations en développement Backend, Full-Stack et IA",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "projects.showMore": "Voir plus de projets",
    "projects.showLess": "Voir moins",
    
    // Experience
    "experience.title": "Mon",
    "experience.subtitle": "Expérience",
    "experience.description": "Parcours professionnel en développement Backend et IA",
    
    // Skills
    "skills.title": "Compétences",
    "skills.subtitle": "Techniques",
    "skills.description": "Technologies et outils que je maîtrise",
    "skills.languages": "Langages",
    "skills.web": "Technologies Web",
    "skills.database": "Bases de Données",
    "skills.architecture": "Architecture & IA",
    
    // Education
    "education.title": "Formation",
    "education.subtitle": "Académique",
    "education.description": "Mon parcours éducatif",
    
    // Contact
    "contact.title": "Contactez-",
    "contact.subtitle": "moi",
    "contact.description": "Actuellement à la recherche d'un stage de fin d'études (PFE)",
    "contact.info": "Informations de Contact",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.availability": "Disponibilité",
    "contact.internship": "Stage de Fin d'Études",
    "contact.seeking": "Je recherche activement un stage de fin d'études (PFE) en tant que développeur Backend, Full-Stack ou dans le domaine de l'IA.",
    "contact.interests": "Domaines d'intérêt",
    "contact.backend": "Développement Backend (Java/Python)",
    "contact.microservices": "Architecture Microservices",
    "contact.ai": "Intelligence Artificielle & RAG",
    "contact.devops": "DevOps & Cloud Computing",
    "contact.send": "Envoyer un message",
    "contact.country": "Maroc",
    
    // Footer
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    
    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.title": "Software Engineering Graduate",
    "hero.description": "3rd year engineering student, specialized in",
    "hero.specialization1": "Software Engineering",
    "hero.and": "and",
    "hero.specialization2": "Business Intelligence",
    "hero.passion": "Passionate about Backend, Full-Stack development and AI.",
    "hero.contact": "Contact Me",
    "hero.download": "Download CV",
    
    // Projects
    "projects.title": "My",
    "projects.subtitle": "Projects",
    "projects.description": "Discover my achievements in Backend, Full-Stack and AI development",
    "projects.code": "Code",
    "projects.demo": "Demo",
    "projects.showMore": "Show more projects",
    "projects.showLess": "Show less",
    
    // Experience
    "experience.title": "My",
    "experience.subtitle": "Experience",
    "experience.description": "Professional journey in Backend development and AI",
    
    // Skills
    "skills.title": "Technical",
    "skills.subtitle": "Skills",
    "skills.description": "Technologies and tools I master",
    "skills.languages": "Languages",
    "skills.web": "Web Technologies",
    "skills.database": "Databases",
    "skills.architecture": "Architecture & AI",
    
    // Education
    "education.title": "Academic",
    "education.subtitle": "Background",
    "education.description": "My educational journey",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Me",
    "contact.description": "Currently seeking an end-of-studies internship (PFE)",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.availability": "Availability",
    "contact.internship": "End-of-Studies Internship",
    "contact.seeking": "I'm actively looking for an end-of-studies internship (PFE) as a Backend, Full-Stack developer or in the AI field.",
    "contact.interests": "Areas of Interest",
    "contact.backend": "Backend Development (Java/Python)",
    "contact.microservices": "Microservices Architecture",
    "contact.ai": "Artificial Intelligence & RAG",
    "contact.devops": "DevOps & Cloud Computing",
    "contact.send": "Send Message",
    "contact.country": "Morocco",
    
    // Footer
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("fr");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "fr" ? "en" : "fr");
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};