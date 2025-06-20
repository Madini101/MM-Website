import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Home, Info, Building2, TrendingUp, Heart, Calculator, BarChart3, Users, HelpCircle, Phone } from 'lucide-react';

export default function MobileSectionNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Info },
    { id: "mining-site", label: "Operations", icon: Building2 },
    { id: "investment", label: "Investment", icon: TrendingUp },
    { id: "social-impact", label: "Impact", icon: Heart },
    { id: "seis-calculator", label: "Calculator", icon: Calculator },
    { id: "financials", label: "Financials", icon: BarChart3 },
    { id: "team", label: "Team", icon: Users },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, index: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentSection(index);
      setIsOpen(false);
    }
  };

  const navigateSection = (direction: 'up' | 'down') => {
    let newIndex;
    if (direction === 'up') {
      newIndex = currentSection > 0 ? currentSection - 1 : sections.length - 1;
    } else {
      newIndex = currentSection < sections.length - 1 ? currentSection + 1 : 0;
    }
    
    scrollToSection(sections[newIndex].id, newIndex);
  };

  return (
    <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-40 md:hidden">
      {/* Navigation Controls */}
      <div className="flex flex-col space-y-2">
        {/* Up Arrow */}
        <button
          onClick={() => navigateSection('up')}
          className="w-10 h-10 bg-trust-navy/90 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-trust-navy transition-all duration-200 border border-earth-gold/50"
          aria-label="Previous section"
        >
          <ChevronUp className="h-5 w-5" />
        </button>

        {/* Current Section Indicator */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 bg-earth-gold text-trust-navy rounded-full shadow-lg flex items-center justify-center hover:bg-earth-gold/90 transition-all duration-200 font-bold text-xs"
          aria-label="Section menu"
        >
          {currentSection + 1}
        </button>

        {/* Down Arrow */}
        <button
          onClick={() => navigateSection('down')}
          className="w-10 h-10 bg-trust-navy/90 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-trust-navy transition-all duration-200 border border-earth-gold/50"
          aria-label="Next section"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {/* Section Menu */}
      {isOpen && (
        <div className="absolute left-12 top-0 bg-white/95 backdrop-blur-md border border-earth-gold rounded-lg shadow-xl p-2 w-40">
          <div className="space-y-1 max-h-80 overflow-y-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, index)}
                  className={`w-full flex items-center space-x-2 p-2 rounded text-sm transition-all duration-200 ${
                    currentSection === index
                      ? 'bg-earth-gold text-trust-navy font-bold'
                      : 'text-trust-navy hover:bg-earth-gold/20'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}