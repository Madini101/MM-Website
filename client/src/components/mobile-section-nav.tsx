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
    { id: "investment-tiers", label: "Tiers", icon: Calculator },
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
          className="w-12 h-12 bg-gradient-to-br from-trust-navy via-trust-navy-800 to-trust-navy-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-earth-gold/50 hover:shadow-2xl transition-all duration-300 border-2 border-earth-gold/60 hover:border-earth-gold transform hover:scale-110 backdrop-blur-sm"
          aria-label="Previous section"
        >
          <ChevronUp className="h-5 w-5 drop-shadow-lg" />
        </button>

        {/* Current Section Indicator */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-gradient-to-br from-earth-gold via-yellow-500 to-earth-gold text-trust-navy rounded-full shadow-2xl flex items-center justify-center hover:shadow-trust-navy/30 hover:shadow-2xl transition-all duration-300 font-bold text-sm border-2 border-trust-navy/20 transform hover:scale-110 hover:-translate-y-1"
          aria-label="Section menu"
        >
          {currentSection + 1}
        </button>

        {/* Down Arrow */}
        <button
          onClick={() => navigateSection('down')}
          className="w-12 h-12 bg-gradient-to-br from-trust-navy via-trust-navy-800 to-trust-navy-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-earth-gold/50 hover:shadow-2xl transition-all duration-300 border-2 border-earth-gold/60 hover:border-earth-gold transform hover:scale-110 backdrop-blur-sm"
          aria-label="Next section"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>

      {/* Section Menu */}
      {isOpen && (
        <div className="absolute left-14 top-0 bg-white/98 backdrop-blur-xl border-2 border-earth-gold/70 rounded-2xl shadow-2xl shadow-trust-navy/20 p-3 w-44 ring-1 ring-earth-gold/30">
          <div className="space-y-1 max-h-80 overflow-y-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, index)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl text-sm transition-all duration-300 ${
                    currentSection === index
                      ? 'bg-gradient-to-r from-earth-gold to-yellow-500 text-trust-navy font-bold shadow-lg transform scale-105'
                      : 'text-trust-navy hover:bg-gradient-to-r hover:from-earth-gold/20 hover:to-yellow-500/20 hover:shadow-md hover:transform hover:scale-102'
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