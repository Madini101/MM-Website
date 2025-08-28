import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Globe, Target, Lightbulb, ArrowRight, Heart, Pickaxe } from "lucide-react";
import { Link } from "wouter";
import SocialImpact from "@/components/social-impact";
import mineWideShot from "@assets/Mbesa Copper Mine wide shot.jpg";
import miningPhoto from "@assets/PHOTO-2025-05-30-00-46-51.jpg";
import socialProjectPhoto from "@assets/Social Proeject image. Team in rural Tanzania on a project.jpg";

export default function Impact() {
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
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Refined Impact Header */}
      <div className="bg-white border-b border-gray-200 py-6 sm:py-8 relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            {/* Compact Professional Badge */}
            <div className="inline-flex items-center bg-trust-navy text-white px-6 py-2 rounded-sm text-sm font-semibold mb-4">
              <Heart className="h-4 w-4 mr-2" />
              SOCIAL IMPACT & SUSTAINABILITY
            </div>
            
            {/* Clean Headlines */}
            <h1 className="text-4xl font-bold text-trust-navy mb-3">
              Where Profitability Meets Purpose
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
              Our mining project gives artisanal miners on the copper belt in rural Africa the opportunity to better themselves, their families and communities by mechanising and upscaling their operations with professional business management.
            </p>

            {/* Compact Quote */}
            <div className="bg-gray-50 border-l-4 border-earth-gold rounded-r-lg p-4 max-w-3xl mx-auto mb-6">
              <blockquote className="text-base italic text-trust-navy font-medium mb-2">
                "If real development is to take place, the people have to be involved."
              </blockquote>
              <cite className="text-sm text-gray-600">
                — Julius Kambarage Nyerere, Uhuru na Maendeleo (1973)
              </cite>
            </div>
            
            {/* Compact Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-xl sm:text-2xl text-earth-gold font-bold">500+</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Miners Supported</div>
                <div className="text-xs text-gray-600">Community Impact</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-xl sm:text-2xl text-earth-gold font-bold">25-30</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Families</div>
                <div className="text-xs text-gray-600">Direct Partnership</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-xl sm:text-2xl text-earth-gold font-bold">20+</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Years</div>
                <div className="text-xs text-gray-600">Community Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Impact Content - "Where Profitability Meets Purpose" */}
      <SocialImpact />

      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 max-w-7xl">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">



          {/* ESG Road Map - Authentic Sustainability Plans */}
          <section className="bg-gradient-to-br from-earth-gold/10 to-amber-50 rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg mb-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy mb-4 sm:mb-6">Our ESG Road Map</h2>
              <p className="text-lg sm:text-xl text-trust-navy max-w-4xl mx-auto leading-relaxed px-4">
                Comprehensive sustainability and impact framework driving our operations from 2025 onwards
              </p>
            </div>
            
            <div className="space-y-8 sm:space-y-12">
              {/* Foundation Phase 2025 */}
              <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
                  <div className="bg-earth-gold text-trust-navy px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-sm sm:text-lg sm:mr-4 w-fit">
                    2025
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-trust-navy">Foundation Phase</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <Card className="border-earth-gold/30">
                    <CardContent className="p-4 sm:p-6">
                      <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-earth-gold mb-3" />
                      <h4 className="font-bold text-trust-navy mb-2 text-sm sm:text-base">Environmental Certification</h4>
                      <p className="text-sm text-trust-navy mb-2">ISO 14001 Alignment</p>
                      <p className="text-xs text-gray-600">Target: 2026</p>
                    </CardContent>
                  </Card>
                  <Card className="border-earth-gold/30">
                    <CardContent className="p-4 sm:p-6">
                      <Pickaxe className="h-6 w-6 sm:h-8 sm:w-8 text-earth-gold mb-3" />
                      <h4 className="font-bold text-trust-navy mb-2 text-sm sm:text-base">Responsible Mining</h4>
                      <p className="text-sm text-trust-navy mb-2">Fairmined Certification (ARM)</p>
                      <p className="text-xs text-gray-600">Target: 2027</p>
                    </CardContent>
                  </Card>
                  <Card className="border-earth-gold/30">
                    <CardContent className="p-4 sm:p-6">
                      <Target className="h-6 w-6 sm:h-8 sm:w-8 text-earth-gold mb-3" />
                      <h4 className="font-bold text-trust-navy mb-2">Climate Action</h4>
                      <p className="text-sm text-trust-navy mb-2">Carbon footprint baseline & targets</p>
                      <p className="text-xs text-gray-600">Target: 2026</p>
                    </CardContent>
                  </Card>
                  <Card className="border-earth-gold/30">
                    <CardContent className="p-4 sm:p-6">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-earth-gold mb-3" />
                      <h4 className="font-bold text-trust-navy mb-2 text-sm sm:text-base">Local Partnerships</h4>
                      <p className="text-sm text-trust-navy mb-2">MOU with NGOs (LEAT, WWF Tanzania)</p>
                      <p className="text-xs text-gray-600">Target: 2025</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Growth Phase 2025-2027 */}
              <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6 gap-2 sm:gap-0">
                  <div className="bg-trust-navy text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-sm sm:text-lg sm:mr-4 w-fit">
                    2025-2027
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-trust-navy">Growth Implementation</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div className="space-y-6">
                    <Card className="border-blue-200">
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="font-bold text-trust-navy mb-3 text-sm sm:text-base">Environmental Compliance</h4>
                        <p className="text-trust-navy text-sm mb-2">NEMC EIA Submission & Approval</p>
                        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">In Progress</span>
                      </CardContent>
                    </Card>
                    <Card className="border-blue-200">
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="font-bold text-trust-navy mb-3 text-sm sm:text-base">Mining Regulation Compliance</h4>
                        <p className="text-trust-navy text-sm mb-2">Tanzania Mining Commission Standards</p>
                        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">In Progress</span>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="space-y-6">
                    <Card className="border-green-200">
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="font-bold text-trust-navy mb-3 text-sm sm:text-base">Community Engagement</h4>
                        <p className="text-trust-navy text-sm mb-2">Baseline Community Programs (water, schools)</p>
                        <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Launched</span>
                      </CardContent>
                    </Card>
                    <Card className="border-orange-200">
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="font-bold text-trust-navy mb-3 text-sm sm:text-base">Responsible Sourcing</h4>
                        <p className="text-trust-navy text-sm mb-2">Initial ASM Code of Practice Adoption</p>
                        <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Initiated</span>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision & Future Impact */}
          <section className="bg-gradient-to-br from-trust-navy to-blue-800 text-white rounded-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 overflow-x-hidden">
            <div className="text-center mb-8 sm:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Our Bold Vision: 2027 and Beyond</h2>
              <p className="text-lg sm:text-xl text-earth-gold font-semibold mb-4">
                "Creating a paradigm shift where Africa finally reaps the benefits of refining its own materials"
              </p>
              <p className="text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
                We will become a model for sustainable mining across Tanzania, with significant portions of profits re-invested into community development, processing plants, and infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-earth-gold/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-earth-gold mb-2">2.6X</div>
                  <h3 className="text-lg font-bold mb-2">Economic Multiplier</h3>
                  <p className="text-sm text-gray-200">Every mining job creates 2.6X impact in the local economy</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-earth-gold/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-earth-gold mb-2">100%</div>
                  <h3 className="text-lg font-bold mb-2">Community Ownership</h3>
                  <p className="text-sm text-gray-200">Profits reinvested into local infrastructure and development</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-earth-gold/30">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-earth-gold mb-2">Continent</div>
                  <h3 className="text-lg font-bold mb-2">Replicable Model</h3>
                  <p className="text-sm text-gray-200">Scalable across Tanzania and Africa</p>
                </CardContent>
              </Card>
            </div>
          </section>





        </div>
      </div>
    </div>
  );
}