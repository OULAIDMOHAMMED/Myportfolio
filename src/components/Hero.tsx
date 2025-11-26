import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-tech-cyan text-lg font-medium">Bonjour, je suis</p>
              <h1 className="text-5xl md:text-6xl font-bold">
                Oulaid <span className="text-tech-cyan">Mohammed</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Ingénieur en Génie Informatique
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Étudiant en 3ème année de cycle d'ingénieur, spécialisé en{" "}
              <span className="text-tech-cyan font-semibold">Génie Logiciel</span> et{" "}
              <span className="text-tech-cyan font-semibold">Business Intelligence</span>.
              Passionné par le développement Backend, Full-Stack et l'IA.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all">
                <Mail className="mr-2 h-5 w-5" />
                Me Contacter
              </Button>
              <Button size="lg" variant="secondary">
                <Download className="mr-2 h-5 w-5" />
                Télécharger CV
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
                href="https://github.com" 
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
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src={profileImage} 
                alt="Oulaid Mohammed" 
                className="relative rounded-2xl w-full max-w-md shadow-card border-2 border-tech-cyan/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;