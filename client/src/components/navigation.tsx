import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronUp } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "mining-site", label: "Operations" },
    { id: "investment", label: "Investment" },
    { id: "social-impact", label: "Impact" },
    { id: "investment-tiers", label: "Tiers" },
    { id: "financials", label: "Financials" },
    { id: "team", label: "Team" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-trust-navy/10" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Much More Prominent */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-4 font-bold text-xl hover:text-earth-gold transition-colors"
            >
              <Logo size="2xl" />
              <div className="flex flex-col">
                <span className={`text-2xl font-bold ${isScrolled ? "text-trust-navy" : "text-white"}`}>Madini Moyoni</span>
                <span className={`text-sm ${isScrolled ? "text-gray-600" : "text-white/80"}`}>Strategic Mining Investment</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-bold px-4 py-3 rounded-xl transition-all duration-300 ${
                    isScrolled 
                      ? "text-trust-navy hover:bg-trust-navy/10 hover:text-earth-gold" 
                      : "text-white bg-trust-navy/80 hover:bg-earth-gold hover:text-trust-navy shadow-xl backdrop-blur-md border-2 border-earth-gold/50"
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`md:hidden ${
                    isScrolled ? "text-trust-navy" : "text-white"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Logo size="xl" />
                    <div className="flex flex-col">
                      <span className="font-bold text-xl text-trust-navy">Madini Moyoni</span>
                      <span className="text-sm text-gray-600">Strategic Mining Investment</span>
                    </div>
                  </div>
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className="justify-start text-trust-navy hover:bg-trust-navy/10 hover:text-earth-gold font-medium py-3 text-base"
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-trust-navy hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}