import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Users, Globe, CheckCircle, Clock } from "lucide-react";

export default function InvestmentHighlights() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="uk-investment" className="py-20 bg-trust-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Value Proposition */}
        <div className="text-center mb-16">
          <div className="bg-trust-navy border-2 border-earth-gold p-8 rounded-lg mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Investment Creates Lasting Change
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A unique convergence of rising copper demand, proven operations and authentic partnerships creates an investment 
              opportunity with both <strong className="text-earth-gold">financial returns and social impact</strong>. Join transparent, 
              sustainable mining through responsible mining practices that create lasting value for investors, 
              communities and sustainable practices.
            </p>
          </div>
        </div>

        {/* SEIS Investment Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 px-2 sm:px-0">
          <Card className="bg-trust-navy border-2 border-earth-gold shadow-xl">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-earth-gold mb-4 sm:mb-6">SEIS Investment Benefits</h3>
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">£5,000 - £50,000</div>
                <p className="text-sm sm:text-base text-gray-300 font-medium">Per Individual Investor</p>
                <p className="text-xs text-gray-400 mt-1">Above £50,000: Contact for tailored approach</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-earth-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">50% Immediate Tax Relief</strong>
                    <p className="text-sm text-gray-300">HMRC approved - invest £50,000, get £25,000 back</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-earth-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">100% CGT Exemption</strong>
                    <p className="text-sm text-gray-300">No capital gains tax on disposal after 3 years</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-earth-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Loss Relief Protection</strong>
                    <p className="text-sm text-gray-300">Offset losses against income tax if needed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-earth-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Inheritance Tax Relief</strong>
                    <p className="text-sm text-gray-300">Business property relief after two years</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => scrollToSection("seis")}
                className="w-full mt-6 bg-earth-gold border-2 border-earth-gold text-trust-navy hover:bg-yellow-500 font-bold py-3 px-8 text-lg shadow-md"
              >
                Calculate Your Tax Relief
              </Button>
            </CardContent>
          </Card>

          {/* Strategic Timing */}
          <Card className="bg-trust-navy border-2 border-earth-gold shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-earth-gold mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-3 text-earth-gold" />
                Strategic Timing
              </h3>
              
              <div className="bg-earth-gold p-4 rounded-lg mb-6 border border-earth-gold">
                <div className="text-center">
                  <div className="text-3xl font-bold text-trust-navy mb-1">£250k</div>
                  <div className="text-sm text-trust-navy font-medium">UK SEIS Target Raise</div>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-earth-gold mt-1 flex-shrink-0" />
                  <p><strong className="text-white">Concurrent US Strategic Raise:</strong> Handled by established partners</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-earth-gold mt-1 flex-shrink-0" />
                  <p><strong className="text-white">June-July Activity:</strong> Strategic raise handled by Key Capital and GlobalCapitalista during these months</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-earth-gold mt-1 flex-shrink-0" />
                  <p><strong className="text-white">UK SEIS Opportunity:</strong> Chance for UK audience to take advantage of SEIS seed funding raise</p>
                </div>
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-earth-gold border-2 border-earth-gold text-trust-navy hover:bg-yellow-500 font-bold py-3 px-8 text-lg shadow-md"
              >
                Secure Your Position
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Why This Investment */}
        <Card className="bg-trust-navy border-2 border-earth-gold shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">For UK Investors Seeking Social Economic Change with Excellent Returns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-earth-gold mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Investment Returns</h4>
                <p className="text-sm text-gray-300">Investment opportunity through transparent and sustainable approach</p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-earth-gold mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Social Impact</h4>
                <p className="text-sm text-gray-300">Transform 25-30 mining families and their communities</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-earth-gold mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Risk Mitigation</h4>
                <p className="text-sm text-gray-300">20+ years experience, proven reserves, established buyers</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 text-earth-gold mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Market Demand</h4>
                <p className="text-sm text-gray-300">Copper demand outstripping supply for years to come</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-trust-navy border-2 border-earth-gold p-4 sm:p-6 lg:p-8 rounded-lg mx-2 sm:mx-0">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 px-2">Ready to Secure Your UK SEIS Investment?</h3>
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 px-2">
            For investors keen on a transparent and sustainable approach with exceptional returns and social impact.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto bg-earth-gold border-2 border-earth-gold text-trust-navy hover:bg-yellow-500 font-bold py-2 sm:py-3 px-4 sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg shadow-md"
          >
            Secure Your UK SEIS Investment
          </Button>
        </div>
      </div>
    </section>
  );
}