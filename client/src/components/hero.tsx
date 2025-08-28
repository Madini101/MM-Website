import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Logo from "@/components/logo";
import coverImage from "@assets/Madini Website Cover Image.jpeg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20 pb-8">
      {/* Premium Background with Enhanced Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(30, 58, 138, 0.6) 50%, rgba(180, 83, 9, 0.3) 100%), url('${coverImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Premium Geometric Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-earth-gold-500/20 via-transparent to-trust-navy-900/30"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 lg:px-8 fade-in-up">
        {/* Clean Logo Branding */}
        <div className="flex justify-center mb-6">
          <Logo size="xl" className="drop-shadow-2xl" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl premium-heading mb-8 leading-tight text-white drop-shadow-2xl">
          <span className="text-earth-gold drop-shadow-2xl">Transforming Artisanal Copper Mining</span><br />
          <span className="drop-shadow-2xl font-light">in Rural Tanzania</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-12 leading-relaxed text-white/90 drop-shadow-xl max-w-5xl mx-auto font-light">
          A unique UK-Tanzania joint venture combining exceptional returns with community empowerment and sustainable practices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <Button
            onClick={() => {
              window.location.href = '/investors';
              setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }, 100);
            }}
            size="lg"
            className="w-full sm:w-auto max-w-xs premium-gold-gradient hover:shadow-premium-glow text-white px-4 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg font-bold premium-button rounded-2xl shadow-premium-lg touch-manipulation min-h-[48px]"
          >
            View Investment Opportunity
          </Button>
          <Button
            onClick={() => {
              window.location.href = '/operations';
              setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }, 100);
            }}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto max-w-xs border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-4 sm:px-10 py-3 sm:py-5 text-sm sm:text-lg font-semibold premium-button rounded-2xl shadow-premium touch-manipulation min-h-[48px]"
          >
            View Operations
          </Button>
        </div>
        
        {/* Executive Summary Stats - Mobile Fixed */}
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 px-4 max-w-4xl mx-auto">
          <div className="text-center bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30 sophisticated-hover">
            <div className="text-2xl font-bold text-earth-gold mb-2 drop-shadow-lg">$2M</div>
            <div className="text-sm font-bold text-white mb-1 drop-shadow-md">Strategic Investment</div>
            <div className="text-xs text-white font-medium drop-shadow-md">Equity participation with dividends</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30 sophisticated-hover">
            <div className="text-2xl font-bold text-earth-gold mb-2 drop-shadow-lg">9.9x</div>
            <div className="text-sm font-bold text-white mb-1 drop-shadow-md">Return Multiple</div>
            <div className="text-xs text-white font-medium drop-shadow-md">5-year target projection</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-md rounded-xl p-5 border border-white/30 sophisticated-hover">
            <div className="text-2xl font-bold text-earth-gold mb-2 drop-shadow-lg">64%</div>
            <div className="text-sm font-bold text-white mb-1 drop-shadow-md">Annual IRR</div>
            <div className="text-xs text-white font-medium drop-shadow-md">Internal rate of return</div>
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
