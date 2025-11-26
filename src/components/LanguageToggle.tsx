import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-lg bg-surface-light hover:bg-tech-cyan hover:text-background transition-all hover:shadow-glow font-semibold"
      aria-label="Toggle language"
    >
      {language === "fr" ? "EN" : "FR"}
    </button>
  );
};

export default LanguageToggle;