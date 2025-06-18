import { useState, useEffect } from "react";

export default function ProgressIndicator() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "hero", label: "Overview" },
    { id: "about", label: "About" },
    { id: "mining-site", label: "Mining Site" },
    { id: "investment", label: "Investment" },
    { id: "team", label: "Team" },
    { id: "financials", label: "Financials" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="space-y-3">
        {sections.map((section) => (
          <div key={section.id} className="relative group">
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-earth-gold border-earth-gold scale-125"
                  : "bg-white border-gray-400 hover:border-earth-gold hover:scale-110"
              }`}
            />
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-trust-navy text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                {section.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}