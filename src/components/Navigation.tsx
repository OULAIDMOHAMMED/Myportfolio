import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / docHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = ["home", "projects", "experience", "skills", "education", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "projects", label: t("nav.projects") },
    { id: "experience", label: t("nav.experience") },
    { id: "skills", label: t("nav.skills") },
    { id: "education", label: t("nav.education") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <>
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-primary z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border py-2" 
            : "bg-transparent py-4"
        )}
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            isScrolled ? "h-14" : "h-16"
          )}>
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("home")}
              className={cn(
                "font-bold hover:text-tech-cyan transition-all duration-300 group",
                isScrolled ? "text-xl" : "text-2xl"
              )}
            >
              <span className="inline-block transition-transform duration-300 group-hover:scale-110">M</span>
              <span className="text-tech-cyan inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">O</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group",
                    activeSection === item.id
                      ? "text-tech-cyan"
                      : "text-foreground hover:text-tech-cyan"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  {/* Active indicator */}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-tech-cyan rounded-full transition-all duration-300",
                      activeSection === item.id ? "w-4" : "w-0 group-hover:w-full"
                    )}
                  />
                  {/* Hover background */}
                  <span 
                    className="absolute inset-0 bg-tech-cyan/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"
                  />
                </button>
              ))}
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
              <button 
                className={cn(
                  "p-2 rounded-lg transition-all duration-300",
                  isMobileMenuOpen 
                    ? "bg-tech-cyan text-background rotate-90" 
                    : "hover:bg-surface-light"
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={cn(
              "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="py-4 border-t border-border space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium",
                    activeSection === item.id
                      ? "bg-tech-cyan/10 text-tech-cyan border-l-4 border-tech-cyan"
                      : "hover:bg-surface-light hover:pl-6"
                  )}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
