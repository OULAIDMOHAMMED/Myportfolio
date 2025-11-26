import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-<span className="text-tech-cyan">moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Actuellement à la recherche d'un stage de fin d'études (PFE)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border-border p-8 space-y-6">
            <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
            
            <div className="space-y-4">
              <a 
                href="mailto:mohamedoulaid93@gmail.com"
                className="flex items-center gap-4 p-4 bg-surface-light rounded-lg hover:bg-tech-cyan hover:text-background transition-all group"
              >
                <div className="p-2 bg-gradient-primary rounded-lg group-hover:bg-background/20 transition-all">
                  <Mail className="h-5 w-5 text-background" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-background/80">Email</p>
                  <p className="font-semibold">mohamedoulaid93@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+212693380325"
                className="flex items-center gap-4 p-4 bg-surface-light rounded-lg hover:bg-tech-cyan hover:text-background transition-all group"
              >
                <div className="p-2 bg-gradient-primary rounded-lg group-hover:bg-background/20 transition-all">
                  <Phone className="h-5 w-5 text-background" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-background/80">Téléphone</p>
                  <p className="font-semibold">+212 693 380 325</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/mohammed-oulaid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-surface-light rounded-lg hover:bg-tech-cyan hover:text-background transition-all group"
              >
                <div className="p-2 bg-gradient-primary rounded-lg group-hover:bg-background/20 transition-all">
                  <Linkedin className="h-5 w-5 text-background" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground group-hover:text-background/80">LinkedIn</p>
                  <p className="font-semibold">mohammed-oulaid</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-surface-light rounded-lg">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <MapPin className="h-5 w-5 text-background" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localisation</p>
                  <p className="font-semibold">Maroc</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-primary p-8 text-background">
            <h3 className="text-2xl font-bold mb-6">Disponibilité</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Stage de Fin d'Études</h4>
                <p className="opacity-90 leading-relaxed">
                  Je recherche activement un stage de fin d'études (PFE) en tant que développeur Backend, Full-Stack ou dans le domaine de l'IA.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2">Domaines d'intérêt</h4>
                <ul className="space-y-2 opacity-90">
                  <li>• Développement Backend (Java/Python)</li>
                  <li>• Architecture Microservices</li>
                  <li>• Intelligence Artificielle & RAG</li>
                  <li>• DevOps & Cloud Computing</li>
                </ul>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-background text-tech-cyan hover:bg-background/90 mt-4"
                asChild
              >
                <a href="mailto:mohamedoulaid93@gmail.com">
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer un message
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;