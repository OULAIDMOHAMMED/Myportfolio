import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      
      <footer className="py-8 border-t border-border text-center text-muted-foreground">
        <p>© 2025 Oulaid Mohammed. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Index;