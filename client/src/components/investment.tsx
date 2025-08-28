import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Globe, Clock, Users, DollarSign, Award, Zap, Target, Check, Phone } from "lucide-react";

export default function Investment() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const opportunityHighlights = [
    {
      icon: TrendingUp,
      title: "Rising Copper Demand",
      stat: "$9,600/tonne",
      description: "Global copper demand outstripping supply, driven by renewable energy transition",
      trend: "Growing market opportunity"
    },
    {
      icon: Users,
      title: "20+ Years Operations",
      stat: "Proven track record",
      description: "Mshana family operations with established community partnerships",
      trend: "Risk-mitigated model"
    },
    {
      icon: Globe,
      title: "Market Access Secured",
      stat: "UK buyers confirmed",
      description: "Direct sales pipeline with established UK buyer relationships",
      trend: "Revenue pathway clear"
    },
    {
      icon: Clock,
      title: "Mechanisation Ready",
      stat: "Operations scaling",
      description: "Professional mining equipment transforming artisanal operations",
      trend: "Immediate impact"
    }
  ];

  const investmentPaths = [
    {
      type: "Equity Partnership",
      range: "£5,000 - £2,000,000",
      highlight: "20% Equity Share + 20% Profit Dividends",
      benefits: [
        "20% equity share ownership in mining operations",
        "20% profit dividends (8% GP) per annum",
        "5+ year investment horizon with 9.9x return target (Equity Only)",
        "64% annual IRR target over investment period"
      ],
      benefit: "Direct ownership starting from £5,000",
      action: "View Investment Details",
      color: "copper"
    },
    {
      type: "Strategic Partnership",
      range: "£250,000+",
      highlight: "Enhanced Benefits Package",
      benefits: [
        "All equity partnership benefits plus VIP treatment",
        "Enhanced investor engagement opportunities",
        "Board observer roles and strategic input",
        "First access to expansion opportunities"
      ],
      benefit: "Premium investor experience with impact",
      action: "Contact for Tailored Approach",
      color: "forest-green"
    }
  ];

  return (
    <section id="investment" className="py-20 bg-trust-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Opportunity Overview */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">The Investment Opportunity</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Rising copper demand meets proven 20+ year operations for exceptional returns with social impact.
          </p>
          
          <div className="bg-white border-2 border-trust-navy rounded-xl p-4 sm:p-6 max-w-3xl mx-auto shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-trust-navy" />
              <span className="text-base sm:text-lg font-semibold text-trust-navy text-center">
                $2M Strategic Investment Opportunity
              </span>
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-trust-navy hidden sm:block" />
            </div>
          </div>
        </div>

        {/* Opportunity Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {opportunityHighlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-earth-gold/20 hover:border-earth-gold/40 group">
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  <div className="text-center">
                    <div className="relative mb-4">
                      <div className="bg-trust-navy p-4 rounded-2xl shadow-lg mx-auto w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-earth-gold" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-trust-navy mb-2 group-hover:text-earth-gold transition-colors">{highlight.title}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-earth-gold mb-3 bg-gradient-to-r from-earth-gold to-yellow-600 bg-clip-text text-transparent">{highlight.stat}</div>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed px-2">{highlight.description}</p>
                    <div className="bg-earth-gold px-4 py-2 rounded-full inline-block shadow-md">
                      <span className="text-xs sm:text-sm font-medium text-trust-navy">{highlight.trend}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Investment Paths */}
        <div className="mb-12 sm:mb-16 bg-gradient-to-r from-trust-navy via-blue-800 to-trust-navy py-12 sm:py-16 px-4 sm:px-6 rounded-2xl shadow-2xl border border-earth-gold/30">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">Choose Your Investment Path</h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
              Two strategically designed investment opportunities for different investor profiles.
            </p>
            <div className="bg-earth-gold text-trust-navy p-3 sm:p-4 lg:p-6 rounded-xl max-w-2xl mx-auto shadow-lg border-2 border-trust-navy">
              <p className="text-xs sm:text-sm lg:text-base font-bold text-center leading-tight">
                Rising copper demand + 20+ years proven operations = Exceptional opportunity
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
            <div className="bg-gradient-to-br from-blue-50 to-trust-navy/5 border-2 border-trust-navy/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-8 group hover:border-trust-navy/60 w-full overflow-hidden">
              <div className="text-center mb-6 sm:mb-8">
                <div className="bg-trust-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-earth-gold font-bold text-xl">$</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-trust-navy mb-3 group-hover:text-earth-gold transition-colors">Equity Partnership</h4>
                <div className="text-2xl sm:text-3xl font-bold text-trust-navy mb-3">$50,000 - $2,000,000</div>
                <p className="text-sm sm:text-base text-gray-600 bg-earth-gold/10 px-4 py-2 rounded-full">Direct equity + dividend pathway</p>
              </div>
              
              <div className="space-y-4 mb-6 sm:mb-8">
                <h5 className="font-bold text-trust-navy text-base sm:text-lg border-b border-earth-gold/30 pb-2">Key Benefits:</h5>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start bg-earth-gold/5 p-3 rounded-lg">
                    <Check className="h-5 w-5 text-earth-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">20% equity share in mining operations</span>
                  </li>
                  <li className="flex items-start bg-earth-gold/5 p-3 rounded-lg">
                    <Check className="h-5 w-5 text-earth-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">20% profit dividends (8% GP) per annum</span>
                  </li>
                  <li className="flex items-start bg-earth-gold/5 p-3 rounded-lg">
                    <Check className="h-5 w-5 text-earth-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">5+ year investment horizon with 9.9x return target</span>
                  </li>
                  <li className="flex items-start bg-earth-gold/5 p-3 rounded-lg">
                    <Check className="h-5 w-5 text-earth-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">64% annual IRR target over investment period</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-trust-navy/10 to-blue-100 border border-trust-navy/40 p-4 rounded-xl mb-6 shadow-inner">
                <p className="text-sm font-bold text-trust-navy mb-1">Direct Ownership Model</p>
                <p className="text-sm text-trust-navy">Equity participation with dividend distributions</p>
              </div>

              <div className="relative mb-4">
                <div className="absolute -inset-2 bg-gradient-to-r from-earth-gold via-yellow-400 to-earth-gold rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Button 
                  onClick={() => scrollToSection("investment-tiers")}
                  className="relative w-full bg-gradient-to-r from-trust-navy to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-6 border-earth-gold hover:border-yellow-400 py-8 sm:py-10 px-8 sm:px-12 rounded-3xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl text-xl sm:text-2xl lg:text-3xl transform hover:scale-110 hover:-translate-y-2 overflow-hidden group ring-6 ring-earth-gold/50 hover:ring-yellow-400/70 min-h-[80px] sm:min-h-[100px]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-earth-gold/30 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center justify-center font-extrabold tracking-wide">
                    <Target className="h-12 w-12 mr-4 text-earth-gold" />
                    <span className="leading-tight">View Investment Details</span>
                    <span className="ml-4 text-2xl sm:text-3xl">→</span>
                  </span>
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-trust-navy/5 border-2 border-trust-navy/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 lg:p-8 group hover:border-trust-navy/60 w-full overflow-hidden">
              <div className="text-center mb-6 sm:mb-8">
                <div className="bg-trust-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-earth-gold font-bold text-xl">$</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-trust-navy mb-3 group-hover:text-earth-gold transition-colors">Strategic Partnership</h4>
                <div className="text-2xl sm:text-3xl font-bold text-trust-navy mb-3">$250,000+</div>
                <p className="text-sm sm:text-base text-gray-600 bg-trust-navy/10 px-4 py-2 rounded-full">Enhanced equity partnership pathway</p>
              </div>
              
              <div className="space-y-4 mb-6 sm:mb-8">
                <h5 className="font-bold text-trust-navy text-base sm:text-lg border-b border-trust-navy/30 pb-2">Key Benefits:</h5>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start bg-trust-navy/5 p-3 rounded-lg">
                    <Check className="h-5 w-5 text-trust-navy mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">All equity partnership benefits plus VIP treatment</span>
                  </li>
                  <li className="flex items-start bg-trust-navy/5 p-3 rounded-lg">
                    <Check className="h-5 w-5 text-trust-navy mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Enhanced investor engagement opportunities</span>
                  </li>
                  <li className="flex items-start bg-trust-navy/5 p-3 rounded-lg">
                    <Check className="h-5 w-5 text-trust-navy mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Board observer roles and strategic input</span>
                  </li>
                  <li className="flex items-start bg-trust-navy/5 p-3 rounded-lg">
                    <Check className="h-5 w-5 text-trust-navy mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">First access to expansion opportunities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-trust-navy/10 to-blue-100 border border-trust-navy/40 p-4 rounded-xl mb-6 shadow-inner">
                <p className="text-sm font-bold text-trust-navy mb-1">Premium Investor Experience</p>
                <p className="text-sm text-trust-navy">Enhanced benefits with impact focus</p>
              </div>

              <div className="relative mb-4">
                <div className="absolute -inset-2 bg-gradient-to-r from-earth-gold via-yellow-400 to-earth-gold rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="relative w-full bg-gradient-to-r from-emerald-700 to-forest-green hover:from-emerald-600 hover:to-green-700 text-white border-6 border-earth-gold hover:border-yellow-400 py-8 sm:py-10 px-8 sm:px-12 rounded-3xl font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl text-xl sm:text-2xl lg:text-3xl transform hover:scale-110 hover:-translate-y-2 overflow-hidden group ring-6 ring-earth-gold/50 hover:ring-yellow-400/70 min-h-[80px] sm:min-h-[100px]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-earth-gold/30 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center justify-center font-extrabold tracking-wide">
                    <Phone className="h-8 w-8 sm:h-10 sm:w-10 mr-4 text-earth-gold" />
                    <span className="leading-tight">Contact for Tailored Approach</span>
                    <span className="ml-4 text-2xl sm:text-3xl">→</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Thesis */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-trust-navy text-center mb-8">Why Invest Now?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-earth-gold bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-earth-gold" />
              </div>
              <h4 className="text-lg font-bold text-trust-navy mb-3">Market Momentum</h4>
              <p className="text-gray-600">
                Copper demand driven by global green transition creates unprecedented pricing power and long-term value.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-trust-navy bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-trust-navy" />
              </div>
              <h4 className="text-lg font-bold text-trust-navy mb-3">Proven Operations</h4>
              <p className="text-gray-600">
                20+ years of successful mining by the Mshana family provides risk mitigation through operational excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-earth-gold bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-earth-gold" />
              </div>
              <h4 className="text-lg font-bold text-trust-navy mb-3">Investment Structure</h4>
              <p className="text-gray-600">
                Direct equity ownership with 20% profit dividends provides exceptional returns with transparent exit strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
