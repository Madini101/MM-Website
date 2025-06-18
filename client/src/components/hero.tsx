import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import coverImage from "@assets/Madini Website Cover Image.jpeg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 63, 94, 0.7), rgba(34, 63, 94, 0.5)), url('${coverImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white drop-shadow-2xl">
          <span className="text-earth-gold drop-shadow-2xl">Transforming Artisanal Copper Mining</span><br />
          <span className="drop-shadow-2xl">in Rural Tanzania</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 leading-relaxed text-white drop-shadow-xl max-w-4xl mx-auto">
          A unique UK-Tanzania joint venture combining profitability with community empowerment and sustainable practices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button
            onClick={() => scrollToSection("investment")}
            size="lg"
            className="w-full sm:w-auto bg-earth-gold hover:bg-success-green text-trust-navy px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-lg font-bold transition-all transform active:scale-95 shadow-lg rounded-full touch-manipulation"
          >
            View Investment Opportunity
          </Button>
          <Button
            onClick={() => scrollToSection("seis-calculator")}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-white bg-white text-trust-navy hover:bg-gray-100 px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-lg font-semibold transition-all rounded-full shadow-lg touch-manipulation"
          >
            Calculate SEIS Benefits
          </Button>
        </div>
        
        {/* Key Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-premium-gold">$5M</div>
            <div className="text-lg">Total Raise</div>
            <div className="text-xs opacity-75">£250K SEIS Portion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-premium-gold">SEIS</div>
            <div className="text-lg">UK Tax Relief Eligible</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-premium-gold">Investment</div>
            <div className="text-lg">Opportunity</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  );
}
