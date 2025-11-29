import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title")}<span className="text-tech-cyan">{t("contact.subtitle")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection animation="fade-left" delay={100}>
            <Card className="bg-card border-border p-8 space-y-6 h-full">
              <h3 className="text-2xl font-bold mb-6">{t("contact.info")}</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:mohamedoulaid93@gmail.com"
                  className="flex items-center gap-4 p-4 bg-surface-light rounded-lg hover:bg-tech-cyan hover:text-background transition-all group"
                >
                  <div className="p-2 bg-gradient-primary rounded-lg group-hover:bg-background/20 transition-all">
                    <Mail className="h-5 w-5 text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-background/80">{t("contact.email")}</p>
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
                    <p className="text-sm text-muted-foreground group-hover:text-background/80">{t("contact.phone")}</p>
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
                    <p className="text-sm text-muted-foreground">{t("contact.location")}</p>
                    <p className="font-semibold">{t("contact.country")}</p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" delay={200}>
            <Card className="bg-gradient-primary p-8 text-background h-full">
              <h3 className="text-2xl font-bold mb-6">{t("contact.availability")}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">{t("contact.internship")}</h4>
                  <p className="opacity-90 leading-relaxed">
                    {t("contact.seeking")}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-2">{t("contact.interests")}</h4>
                  <ul className="space-y-2 opacity-90">
                    <li>• {t("contact.backend")}</li>
                    <li>• {t("contact.devops")}</li>
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-background text-tech-cyan hover:bg-background/90 mt-4"
                  asChild
                >
                  <a href="mailto:mohamedoulaid93@gmail.com">
                    <Send className="mr-2 h-5 w-5" />
                    {t("contact.send")}
                  </a>
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
