import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-left" className="space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-tech-cyan text-lg font-medium">{t("hero.greeting")}</p>
              <h1 className="text-5xl md:text-6xl font-bold">
                Oulaid <span className="text-tech-cyan">Mohammed</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-tech-cyan font-semibold">
                {t("hero.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("hero.subtitle")}
              </p>
            </div>
            
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>{t("hero.description1")}</p>
              <p>{t("hero.description2")}</p>
              <p className="text-foreground font-medium">{t("hero.description3")}</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all">
                <Mail className="mr-2 h-5 w-5" />
                {t("hero.contact")}
              </Button>
              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                {t("hero.download")}
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a 
                href="https://linkedin.com/in/mohammed-oulaid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-surface-light rounded-lg hover:bg-tech-cyan hover:text-background transition-all hover:shadow-glow"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/OULAIDMOHAMMED" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-surface-light rounded-lg hover:bg-tech-cyan hover:text-background transition-all hover:shadow-glow"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:mohamedoulaid93@gmail.com"
                className="p-3 bg-surface-light rounded-lg hover:bg-tech-cyan hover:text-background transition-all hover:shadow-glow"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="tel:+212693380325"
                className="p-3 bg-surface-light rounded-lg hover:bg-tech-cyan hover:text-background transition-all hover:shadow-glow"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" delay={200} className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Oulaid Mohammed" 
                className="relative rounded-2xl w-full max-w-md shadow-card border-2 border-tech-cyan/20"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
