import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Navigation = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold hover:text-tech-cyan transition-colors"
          >
            M<span className="text-tech-cyan">O</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-tech-cyan transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <button 
              className="p-2 hover:bg-surface-light rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 hover:bg-surface-light transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;