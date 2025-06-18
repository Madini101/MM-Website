import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, TrendingUp, Users, Shield, Landmark, Star, Crown, Plane } from "lucide-react";

export default function InvestmentJourney() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="investment" className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-4">
            Investment Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            $5M raising for sustainable copper mining operations with exceptional returns and meaningful impact
          </p>
        </div>

        {/* SEIS Risk Notice - Mobile Optimized */}
        <div className="mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 sm:p-4">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 mt-0.5 flex-shrink-0" />
              <div className="text-xs sm:text-sm text-gray-700">
                <span className="font-semibold">Risk Notice:</span> High-risk investment. SEIS tax relief subject to UK taxpayer status. FCA regulated. Seek advice.
              </div>
            </div>
          </div>
        </div>

        {/* Investment Options Tabs - Large and Prominent */}
        <Tabs defaultValue="seis" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-trust-navy border-4 border-earth-gold rounded-3xl p-3 h-auto max-w-none shadow-2xl">
            <TabsTrigger 
              value="seis" 
              className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold py-4 sm:py-6 md:py-8 lg:py-10 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-copper data-[state=active]:to-rich-copper data-[state=active]:text-trust-navy data-[state=active]:border-4 data-[state=active]:border-earth-gold data-[state=active]:ring-4 data-[state=active]:ring-copper/50 data-[state=inactive]:text-white data-[state=inactive]:hover:bg-copper/20 data-[state=inactive]:border-2 data-[state=inactive]:border-earth-gold/50 transition-all duration-300 shadow-lg data-[state=active]:shadow-2xl min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] flex items-center justify-center relative"
            >
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-4 relative z-10">
                <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12" />
                <span className="text-center break-words">SEIS Investment</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="strategic" 
              className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold py-4 sm:py-6 md:py-8 lg:py-10 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-copper data-[state=active]:to-rich-copper data-[state=active]:text-trust-navy data-[state=active]:border-4 data-[state=active]:border-earth-gold data-[state=active]:ring-4 data-[state=active]:ring-copper/50 data-[state=inactive]:text-white data-[state=inactive]:hover:bg-copper/20 data-[state=inactive]:border-2 data-[state=inactive]:border-earth-gold/50 transition-all duration-300 shadow-lg data-[state=active]:shadow-2xl min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] flex items-center justify-center relative"
            >
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-2 md:space-x-4 relative z-10">
                <Shield className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12" />
                <span className="text-center break-words">Strategic Investment</span>
              </div>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="seis" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* SEIS Benefits Card */}
              <Card className="bg-trust-navy text-white border-2 border-trust-navy">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Landmark className="h-6 w-6 text-earth-gold" />
                    <Badge className="bg-earth-gold text-trust-navy">UK Tax Relief</Badge>
                  </div>
                  <CardTitle className="text-2xl text-white">SEIS Investment Benefits</CardTitle>
                  <CardDescription className="text-gray-200">
                    Seed Enterprise Investment Scheme advantages for UK taxpayers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-earth-gold flex-shrink-0" />
                      <span className="text-white"><strong>50% Income Tax Relief</strong> - Immediate tax reduction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-earth-gold flex-shrink-0" />
                      <span className="text-white"><strong>Capital Gains Tax Exemption</strong> - No CGT on gains</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-earth-gold flex-shrink-0" />
                      <span className="text-white"><strong>Loss Relief</strong> - Tax relief on losses against income</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-earth-gold flex-shrink-0" />
                      <span className="text-white"><strong>Inheritance Tax Relief</strong> - After two years</span>
                    </div>
                  </div>
                  <div className="bg-earth-gold/20 border border-earth-gold rounded-lg p-4 mt-6">
                    <p className="text-sm text-white">
                      <strong>Example:</strong> £100,000 investment = £50,000 immediate tax relief
                      <br />
                      <span className="text-earth-gold font-semibold">Effective risk: £50,000 for £100,000 investment</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Investment Ranges Card */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-trust-navy flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-earth-gold" />
                    <span>SEIS Investment Tiers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 bg-white">
                  <div className="space-y-6">
                    {/* Pathfinder Tier */}
                    <div className="bg-white border rounded-xl p-4 sm:p-6 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
                        <h4 className="text-lg sm:text-xl font-bold text-trust-navy">Pathfinder</h4>
                        <Badge variant="outline" className="text-xs self-start sm:self-center">Entry Level</Badge>
                      </div>
                      <div className="mb-4 space-y-2">
                        <p className="text-xl sm:text-2xl font-bold text-earth-gold">£5,000</p>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Net cost £2,500 after 50% SEIS tax relief</p>
                        <p className="text-xs text-success-green font-semibold">ROI: £30,000 after three years</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Digital Certificate of Investment</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Early access to product launches or services</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Quarterly investor updates</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Recognition in company's online 'Investor Wall of Honour'</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Trailblazer Tier */}
                    <div className="bg-white border rounded-xl p-4 sm:p-6 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
                        <h4 className="text-lg sm:text-xl font-bold text-trust-navy">Trailblazer</h4>
                        <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 self-start sm:self-center">Most Popular</Badge>
                      </div>
                      <div className="mb-4 space-y-2">
                        <p className="text-xl sm:text-2xl font-bold text-earth-gold">£10,000</p>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Net cost £5,000 after 50% SEIS tax relief</p>
                        <p className="text-xs text-success-green font-semibold">ROI: £60,000 after three years</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-trust-navy">All Pathfinder benefits, plus:</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Invitation to exclusive annual investor webinar with founders</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Quarterly briefings - 30% more detail than standard updates</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Option for your name honoured on a social project (school, clinic, well)</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visionary Tier */}
                    <div className="bg-white border-2 border-earth-gold rounded-xl p-4 sm:p-6 hover:bg-yellow-50 transition-all duration-300 hover:shadow-lg relative">
                      <div className="absolute -top-3 left-4">
                        <Badge className="bg-earth-gold text-trust-navy font-semibold text-xs">Premium Choice</Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 mt-4 sm:mt-2 space-y-2 sm:space-y-0">
                        <h4 className="text-lg sm:text-xl font-bold text-trust-navy">Visionary</h4>
                        <div className="flex items-center space-x-1 self-start sm:self-center">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-earth-gold rounded-full"></div>
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-earth-gold rounded-full"></div>
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-earth-gold rounded-full"></div>
                        </div>
                      </div>
                      <div className="mb-4 space-y-2">
                        <p className="text-xl sm:text-2xl font-bold text-earth-gold">£20,000</p>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Net cost £10,000 after 50% SEIS tax relief</p>
                        <p className="text-xs text-success-green font-semibold">ROI: £120,000 after three years</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-trust-navy">All Trailblazer benefits, plus:</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Invitation to visit funded social projects (special hosted tour)</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Detailed annual briefings every six months showing project progress</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Annual video call - the impact of your investment on the ground</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Private networking session with leadership annually</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">Full naming rights (e.g., 'The [YOUR Name] Learning Centre Classroom')</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Architect Tier */}
                    <div className="bg-white border-2 border-success-green rounded-xl p-4 sm:p-6 hover:bg-green-50 transition-all duration-300 hover:shadow-xl relative">
                      <div className="absolute -top-3 left-4">
                        <Badge className="bg-success-green text-white font-semibold text-xs">Elite Tier</Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 mt-4 sm:mt-2 space-y-2 sm:space-y-0">
                        <h4 className="text-lg sm:text-xl font-bold text-trust-navy">Architect</h4>
                        <div className="flex items-center space-x-1 self-start sm:self-center">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-earth-gold rounded-sm transform rotate-45"></div>
                        </div>
                      </div>
                      <div className="mb-4 space-y-2">
                        <p className="text-xl sm:text-2xl font-bold text-earth-gold">£50,000</p>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Net cost £25,000 after 50% SEIS tax relief</p>
                        <p className="text-xs text-success-green font-semibold">ROI: £300,000 after three years</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-trust-navy">All Visionary benefits, plus:</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-trust-navy">Priority access in any future funding rounds</span>
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
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-success-green">Optional advisory or board observer role</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">Full naming rights on major projects (entire school building, library, clinic)</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">VIP Access to all major events (openings, celebrations, investor retreats)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="strategic" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Strategic Investment Benefits */}
              <Card className="bg-emerald-700 text-white border-2 border-emerald-700">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-6 w-6 text-earth-gold" />
                    <Badge className="bg-earth-gold text-trust-navy">Strategic Partnership</Badge>
                  </div>
                  <CardTitle className="text-2xl text-white">Strategic Investment</CardTitle>
                  <CardDescription className="text-gray-200">
                    Partnership opportunities beyond SEIS limits
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-earth-gold flex-shrink-0" />
                      <span className="text-white"><strong>Board Representation</strong> - Strategic decision input</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-earth-gold flex-shrink-0" />
                      <span className="text-white"><strong>Operational Involvement</strong> - Direct project engagement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-earth-gold flex-shrink-0" />
                      <span className="text-white"><strong>Priority Returns</strong> - Enhanced profit sharing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-earth-gold flex-shrink-0" />
                      <span className="text-white"><strong>Expansion Rights</strong> - Future project opportunities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategic Investment Tiers */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-trust-navy flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-earth-gold" />
                    <span>Strategic Tiers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-6">
                    {/* Voyager Tier */}
                    <div className="border rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl font-bold text-trust-navy">Voyager Tier</h4>
                        <Badge variant="outline" className="text-xs">Strategic Partnership</Badge>
                      </div>
                      <div className="mb-4">
                        <p className="text-2xl font-bold text-earth-gold">$500,000 - $1,000,000</p>
                        <p className="text-sm text-gray-600">Beyond SEIS limits - Direct equity participation</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Digital Certificate of Investment</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Early access to product launch services</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Recognition in company's online 'Investor Wall of Honour'</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Invitation to visit funded social projects (special hosted tour)</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Annual video call showing impact of your investment</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Private networking session with leadership annually</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Limited-edition merchandise or commemorative gift</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-success-green">Optional advisory or board observer role</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">Full naming rights on major projects (school building, library, clinic)</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">VIP Access to all major events (openings, celebrations, investor retreats)</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Navigator Tier */}
                    <div className="border-2 border-success-green rounded-xl p-6 hover:bg-green-50 transition-all duration-300 hover:shadow-lg relative">
                      <div className="absolute -top-3 left-4">
                        <Badge className="bg-success-green text-white font-semibold">Premium Strategic</Badge>
                      </div>
                      <div className="flex justify-between items-center mb-4 mt-2">
                        <h4 className="text-xl font-bold text-trust-navy">Navigator Tier</h4>
                        <div className="flex items-center space-x-1">
                          <div className="w-5 h-2 bg-earth-gold rounded-full"></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-2xl font-bold text-earth-gold">$1,000,000 - $3,000,000</p>
                        <p className="text-sm text-gray-600">Major strategic partnership with enhanced benefits</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold">Everything in the Voyager package, plus:</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">Business-Class Flights to Tanzania for two (included within £10K cap)</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">Name Recognition on Infrastructure Project - Building plaque (school, clinic, water system)</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-success-green">Priority Allocation in Future Rounds - First right of refusal on other projects</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-success-green">Panel Invite at Annual Impact Briefing Event - Speaking opportunity</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-success-green">One-on-One Strategic Session with Madini Moyoni's founders or board</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Founder Tier */}
                    <div className="border-2 border-earth-gold rounded-xl p-6 hover:bg-yellow-50 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                      <div className="absolute -top-3 left-4">
                        <Badge className="bg-earth-gold text-trust-navy font-semibold">Founder Partnership</Badge>
                      </div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-earth-gold/20 to-transparent rounded-bl-full"></div>
                      <div className="flex justify-between items-center mb-4 mt-2">
                        <h4 className="text-xl font-bold text-trust-navy">Founder Tier</h4>
                        <div className="flex items-center space-x-1">
                          <div className="w-6 h-6 bg-earth-gold rounded-sm transform rotate-45 border-2 border-trust-navy"></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-2xl font-bold text-earth-gold">$3,000,000 - $5,000,000</p>
                        <p className="text-sm text-gray-600">Elite founder-level partnership with luxury experiences</p>
                        <p className="text-xs text-earth-gold font-semibold">Total experience value: Up to £70,000</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">All-Expenses-Paid Safari with First-Class Travel (up to £70K value)</span>
                        </div>
                        <div className="pl-6 text-xs text-gray-600">
                          5-7 day luxury Tanzanian safari for two (Serengeti, Ngorongoro Crater, or Selous)
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">Private Tour of the Mine Site</span>
                        </div>
                        <div className="pl-6 text-xs text-gray-600">
                          Hosted by company leadership; includes behind-the-scenes walkthrough, meet the team, photo ops
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">VIP Founder Dinner in Dar es Salaam</span>
                        </div>
                        <div className="pl-6 text-xs text-gray-600">
                          With Madini Moyoni leadership and local partners
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-success-green">Early Access to Reports & Strategy Previews</span>
                        </div>
                        <div className="pl-6 text-xs text-gray-600">
                          Exclusive quarterly briefings before public release
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-success-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-earth-gold">Branded Gifts Pack</span>
                        </div>
                        <div className="pl-6 text-xs text-gray-600">
                          Local crafts, apparel, ethically sourced copper items
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-2 sm:px-0">
          <div className="bg-trust-navy rounded-2xl p-4 sm:p-8 text-white border-2 border-trust-navy shadow-xl">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white">Ready to Invest?</h3>
            <p className="text-white mb-4 sm:mb-6 max-w-2xl mx-auto font-medium text-sm sm:text-base">
              Join our mission to transform artisanal copper mining while generating exceptional returns for UK investors.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-earth-gold hover:bg-success-green text-trust-navy px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-bold transition-all transform active:scale-95 shadow-lg rounded-full touch-manipulation"
            >
              Start Investment Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}