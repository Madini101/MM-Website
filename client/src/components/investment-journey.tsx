import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Target, DollarSign } from "lucide-react";

export default function InvestmentJourney() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="investment-journey" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
              Investment Tiers
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Choose your investment level and access exclusive benefits designed for strategic partners
            </p>
          </div>

          {/* Investment Benefits - Full Width */}
          <Card className="bg-gradient-to-br from-trust-navy to-blue-800 text-white mb-12">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2 text-2xl">
                <Target className="h-8 w-8 text-earth-gold" />
                <span>Investment Benefits</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-earth-gold flex-shrink-0" />
                  <span className="text-white"><strong>Direct Equity Ownership</strong> - Authentic share ownership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-earth-gold flex-shrink-0" />
                  <span className="text-white"><strong>Quarterly Dividends</strong> - Regular income distribution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-earth-gold flex-shrink-0" />
                  <span className="text-white"><strong>Capital Growth Potential</strong> - Share value appreciation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-earth-gold flex-shrink-0" />
                  <span className="text-white"><strong>Social Impact</strong> - Community development benefits</span>
                </div>
              </div>
              <div className="bg-earth-gold/20 border border-earth-gold rounded-lg p-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-earth-gold">9.9x ROI</div>
                    <div className="text-sm text-white">Equity Only Investment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-earth-gold">64% IRR</div>
                    <div className="text-sm text-white">Annual Return Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-earth-gold">30% Share</div>
                    <div className="text-sm text-white">Equity Ownership</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Investment Tiers - Full Width Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Foundation Tier */}
            <Card className="border border-blue-200 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                  <CardTitle className="text-lg sm:text-xl font-bold text-trust-navy">Foundation</CardTitle>
                  <Badge variant="outline" className="text-xs self-start sm:self-center bg-blue-50">UK Investor Focus</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-2">
                  <p className="text-2xl font-bold text-blue-600">$5,000 - $50,000</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Entry-level equity partnership for UK investors</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Digital Certificate of Investment</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Recognition in online "Investor Wall of Honour"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Annual impact video updates from Tanzania</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Quarterly briefings on operations and milestones</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Same financial returns as all other tiers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Voyager Tier */}
            <Card className="border hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                  <CardTitle className="text-lg sm:text-xl font-bold text-trust-navy">Pioneer</CardTitle>
                  <Badge variant="outline" className="text-xs self-start sm:self-center">Strategic Partnership</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-2">
                  <p className="text-2xl font-bold text-earth-gold">$25,000 - $100,000</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Full strategic partnership with enhanced benefits</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Digital Certificate of Investment</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Recognition in company's online "Investor Wall of Honour"</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Invitation to visit one of the funded social projects (special hosted tour)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Annual video call showing impact of your investment on the ground</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Private networking session with leadership annually</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Limited-edition merchandise or commemorative gift</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Exclusive quarterly briefings on company strategy and major milestones</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Personal planning session with executives yearly</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Voyager Tier */}
            <Card className="border hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                  <CardTitle className="text-lg sm:text-xl font-bold text-trust-navy">Voyager</CardTitle>
                  <Badge variant="outline" className="text-xs self-start sm:self-center">Advanced Partnership</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-2">
                  <p className="text-2xl font-bold text-earth-gold">$50,000 - $250,000</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Advanced strategic partnership</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">All Pioneer benefits plus enhanced privileges</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Priority access to executive briefings</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Semi-annual strategy discussions</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Enhanced quarterly reporting</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Invitation to investor networking events</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigator Tier */}
            <Card className="border-2 border-earth-gold hover:bg-yellow-50 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-3 left-4">
                <Badge className="bg-earth-gold text-trust-navy font-semibold text-xs">Premium Choice</Badge>
              </div>
              <CardHeader className="mt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                  <CardTitle className="text-lg sm:text-xl font-bold text-trust-navy">Navigator</CardTitle>
                  <div className="flex items-center space-x-1 self-start sm:self-center">
                    <div className="w-4 h-4 bg-earth-gold rounded-full"></div>
                    <div className="w-4 h-4 bg-earth-gold rounded-full"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-2">
                  <p className="text-2xl font-bold text-earth-gold">$250,000 - $1,000,000</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Major strategic partnership with premium benefits</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">All Voyager benefits plus:</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Quarterly strategy discussions with leadership</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Annual strategic planning participation</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Priority consideration for board advisor roles</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Exclusive investor networking events</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Founder Tier */}
            <Card className="border-2 border-trust-navy hover:bg-blue-50 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-3 left-4">
                <Badge className="bg-trust-navy text-white font-semibold text-xs">Elite Partnership</Badge>
              </div>
              <CardHeader className="mt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                  <CardTitle className="text-lg sm:text-xl font-bold text-trust-navy">Founder</CardTitle>
                  <div className="flex items-center space-x-1 self-start sm:self-center">
                    <div className="w-4 h-4 bg-trust-navy rounded-full"></div>
                    <div className="w-4 h-4 bg-trust-navy rounded-full"></div>
                    <div className="w-4 h-4 bg-trust-navy rounded-full"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6 space-y-2">
                  <p className="text-2xl font-bold text-trust-navy">$1,000,000+</p>
                  <p className="text-sm text-gray-600 leading-relaxed">Elite founding partnership with maximum engagement</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">All Navigator benefits plus:</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Board observer rights consideration</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Direct strategic input on major decisions</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Co-investment opportunities in future projects</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-trust-navy">Personalized relationship management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-trust-navy text-white hover:bg-blue-800 font-bold px-8 py-4"
              onClick={scrollToContact}
            >
              Start Your Investment Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}