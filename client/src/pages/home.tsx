import Hero from "@/components/hero";
// MiningSite component moved to operations page
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, MapPin, ArrowRight, Target, Globe, Heart, Lightbulb, Building, Pickaxe, ChevronDown, DollarSign, Calculator } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link, useLocation } from "wouter";
import mineWideShot from "@assets/Mbesa Copper Mine wide shot.jpg";
import socialProjectPhoto from "@assets/Social Proeject image. Team in rural Tanzania on a project.jpg";

export default function Home() {
  const [, setLocation] = useLocation();

  const scrollToPartnershipStory = () => {
    setLocation('/about');
    setTimeout(() => {
      const element = document.getElementById('partnership-story');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Also try to open the collapsible if it's closed
        const trigger = element.closest('div[data-state]');
        if (trigger && trigger.getAttribute('data-state') === 'closed') {
          element.click();
        }
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      
      {/* Premium Quick Overview */}
      <section className="premium-section bg-gradient-to-br from-gray-50 to-white">
        <div className="premium-container">
          <div className="max-w-5xl mx-auto text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl premium-heading text-trust-navy-900 mb-6">
              Strategic Copper Mining Investment in Tanzania
            </h2>
            <p className="text-xl premium-subtitle max-w-4xl mx-auto">
              Direct equity participation in sustainable mining operations in Mbesa, Tanzania. 
              Combining exceptional financial returns with meaningful community impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16 px-2 sm:px-4">
            <Card className="premium-card text-center group sophisticated-hover elegant-border">
              <CardContent className="p-10">
                <div className="bg-gradient-to-br from-earth-gold/10 to-amber-50 rounded-2xl p-6 w-24 h-24 mx-auto mb-8 group-hover:from-earth-gold/20 group-hover:to-amber-100 transition-all duration-500 flex items-center justify-center">
                  <TrendingUp className="h-14 w-14 text-earth-gold" />
                </div>
                <h3 className="text-2xl font-bold text-trust-navy mb-4 premium-heading">Target Returns</h3>
                <div className="text-5xl font-bold premium-text-gradient mb-4">9.9x</div>
                <div className="text-lg font-semibold text-trust-navy/80 mb-2">Over 5 Years</div>
                <p className="executive-text text-sm">64% annual IRR target</p>
              </CardContent>
            </Card>
            
            <Card className="premium-card text-center group sophisticated-hover elegant-border">
              <CardContent className="p-10">
                <div className="bg-gradient-to-br from-trust-navy/10 to-blue-50 rounded-2xl p-6 w-24 h-24 mx-auto mb-8 group-hover:from-trust-navy/20 group-hover:to-blue-100 transition-all duration-500 flex items-center justify-center">
                  <MapPin className="h-14 w-14 text-trust-navy" />
                </div>
                <h3 className="text-2xl font-bold text-trust-navy mb-4 premium-heading">Strategic Location</h3>
                <div className="text-3xl font-bold text-trust-navy mb-2">Mbesa, Tanzania</div>
                <div className="text-lg font-semibold text-trust-navy/80 mb-2">Copper Belt Region</div>
                <p className="executive-text text-sm">Proven geological reserves</p>
              </CardContent>
            </Card>
            
            <Card className="premium-card text-center group sophisticated-hover elegant-border">
              <CardContent className="p-10">
                <div className="bg-gradient-to-br from-success-green/10 to-emerald-50 rounded-2xl p-6 w-24 h-24 mx-auto mb-8 group-hover:from-success-green/20 group-hover:to-emerald-100 transition-all duration-500 flex items-center justify-center">
                  <Users className="h-14 w-14 text-success-green" />
                </div>
                <h3 className="text-2xl font-bold text-trust-navy mb-4 premium-heading">Investment Access</h3>
                <div className="text-3xl font-bold text-success-green mb-2">£5K - £1M+</div>
                <div className="text-lg font-semibold text-trust-navy/80 mb-2">Tiered Structure</div>
                <p className="executive-text text-sm">Accessible to all investors</p>
              </CardContent>
            </Card>
          </div>
          

          
          {/* Investment Analysis Invitation - Match Impact Page Style */}
          <div className="relative bg-gradient-to-br from-trust-navy via-trust-navy-800 to-trust-navy-900 rounded-3xl p-12 mb-8 shadow-2xl border border-earth-gold/20 overflow-hidden">
            {/* Subtle Mining Background */}
            <div 
              className="absolute inset-0 opacity-8"
              style={{
                backgroundImage: 'url(@assets/Mbesa Copper Mine wide shot.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            <div className="relative z-10 text-center mb-10">
              <div className="inline-block px-8 py-3 bg-earth-gold/20 rounded-full border border-earth-gold/40 mb-6">
                <span className="text-earth-gold text-sm font-bold tracking-widest uppercase">Executive Investment Analysis</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-tight px-4">
                Comprehensive Financial Intelligence
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                Access institutional-grade financial projections, interactive investment calculators, and detailed expandable sections featuring authentic data from our strategic business proposal.
              </p>
            </div>
            
            {/* Financial Highlights Grid - Mobile Responsive */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 px-2 sm:px-4">
              {/* Interactive Calculator */}
              <div className="bg-earth-gold/10 backdrop-blur-sm rounded-xl p-6 text-center border border-earth-gold/30 hover:border-earth-gold/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-earth-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="h-6 w-6 text-trust-navy" />
                </div>
                <div className="text-lg font-bold text-earth-gold mb-2">Interactive Calculator</div>
                <div className="text-sm text-white/90 mb-2">Real-time ROI modeling</div>
                <div className="text-xs text-earth-gold/80">$5K-$1M+ inputs</div>
              </div>
              
              {/* Revenue Projections */}
              <div className="bg-earth-gold/10 backdrop-blur-sm rounded-xl p-6 text-center border border-earth-gold/30 hover:border-earth-gold/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-earth-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-trust-navy" />
                </div>
                <div className="text-lg font-bold text-earth-gold mb-2">Revenue Projections</div>
                <div className="text-sm text-white/90 mb-2">5-year financial model</div>
                <div className="text-xs text-earth-gold/80">$7.1M → $23.1M</div>
              </div>
              
              {/* Investment Tiers */}
              <div className="bg-earth-gold/10 backdrop-blur-sm rounded-xl p-6 text-center border border-earth-gold/30 hover:border-earth-gold/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-earth-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6 text-trust-navy" />
                </div>
                <div className="text-lg font-bold text-earth-gold mb-2">Investment Tiers</div>
                <div className="text-sm text-white/90 mb-2">Structured access levels</div>
                <div className="text-xs text-earth-gold/80">Voyager to Founder</div>
              </div>
              
              {/* Market Intelligence */}
              <div className="bg-earth-gold/10 backdrop-blur-sm rounded-xl p-6 text-center border border-earth-gold/30 hover:border-earth-gold/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-earth-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-6 w-6 text-trust-navy" />
                </div>
                <div className="text-lg font-bold text-earth-gold mb-2">Market Intelligence</div>
                <div className="text-sm text-white/90 mb-2">Comprehensive analysis</div>
                <div className="text-xs text-earth-gold/80">Demand & pricing</div>
              </div>
            </div>
            
            {/* Strategic Investment Call to Action - Mobile Responsive */}
            <div className="relative z-10 text-center px-4">
              <Link href="/investors">
                <Button size="lg" className="w-full sm:w-auto max-w-md bg-earth-gold hover:bg-earth-gold/90 text-trust-navy font-bold px-8 sm:px-14 py-5 sm:py-7 text-lg sm:text-xl rounded-xl transform hover:scale-105 transition-all duration-300">
                  <TrendingUp className="mr-2 sm:mr-4 h-5 sm:h-7 w-5 sm:w-7" />
                  <span className="hidden sm:inline">View Investment Analysis</span>
                  <span className="sm:hidden">Investment Analysis</span>
                  <ArrowRight className="ml-2 sm:ml-4 h-5 sm:h-7 w-5 sm:w-7" />
                </Button>
              </Link>
              <p className="text-white/90 mt-6 text-base sm:text-lg px-4">
                Complete financial projections and investment opportunity details
              </p>
            </div>
          </div>
          
          {/* Enhanced CTA Section with Better Visibility */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
            <div className="text-center space-y-8">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-trust-navy-900 mb-4">Explore Key Areas</h3>
                <p className="text-trust-navy-700 text-xl">Learn about our operations, partnership, and community impact</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Proven Copper Concentrations - Enhanced CTA */}
                <div 
                  onClick={() => setLocation('/operations')}
                  className="cursor-pointer"
                >
                  <div className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-trust-navy-200 hover:border-trust-navy-400">
                    <div className="absolute -inset-1 bg-gradient-to-r from-trust-navy-600 to-trust-navy-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                    <div className="relative text-center">
                      <div className="bg-trust-navy-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                        <Pickaxe className="h-8 w-8 text-trust-navy-600" />
                      </div>
                      <h4 className="text-xl font-bold text-trust-navy-900 mb-2">Proven Resource Access</h4>
                      <p className="text-trust-navy-600 text-sm mb-4">50+ mine sites across 1,000+ acres with abundant copper, nickel, lithium, beryllium, graphite, gold, and silver</p>
                      <div className="flex items-center justify-center text-trust-navy-700 font-semibold">
                        View Operations <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Our Partnership Journey - Enhanced CTA */}
                <div 
                  onClick={scrollToPartnershipStory}
                  className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-earth-gold-200 hover:border-earth-gold-400 cursor-pointer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-earth-gold-500 to-yellow-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative text-center">
                    <div className="bg-earth-gold-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                      <Building className="h-8 w-8 text-earth-gold-600" />
                    </div>
                    <h4 className="text-xl font-bold text-trust-navy-900 mb-2">How We Met Afro</h4>
                    <p className="text-trust-navy-600 text-sm mb-4">The authentic story of our UK-Tanzania partnership formation</p>
                    <div className="flex items-center justify-center text-earth-gold-700 font-semibold">
                      Our Story <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                {/* Community Impact - Enhanced CTA */}
                <div 
                  onClick={() => window.location.href = '/impact'}
                  className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-success-green/30 hover:border-success-green cursor-pointer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-success-green to-green-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative text-center">
                    <div className="bg-success-green/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                      <Heart className="h-8 w-8 text-success-green" />
                    </div>
                    <h4 className="text-xl font-bold text-trust-navy-900 mb-2">Community Impact</h4>
                    <p className="text-trust-navy-600 text-sm mb-4">Transforming lives through sustainable mining practices</p>
                    <div className="flex items-center justify-center text-success-green font-semibold">
                      View Impact <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-trust-navy-600 mt-8 font-medium">
                Investment opportunity open to all qualified investors
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Bold Vision - From Proposal */}
      <section className="py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={mineWideShot}
            alt="Authentic Mbesa copper mining operations - our actual mining site in Tanzania"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-trust-navy/85 via-trust-navy/90 to-blue-800/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-earth-gold text-trust-navy font-bold px-4 py-2 mb-6">
              Our Bold Vision
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Creating a Paradigm Shift in African Mining
            </h2>
            <div className="text-lg leading-relaxed space-y-6 mb-12">
              <p className="text-gray-100">
                <span className="text-earth-gold font-semibold">We have a bold vision of creating a paradigm shift where Africa finally reaps the benefits of refining its own materials</span> - copper cathodes and bars rather than just ores and raw materials.
              </p>
              <p className="text-gray-100">
                Our intention is to build a replicable, circular economy where significant portions of profits are re-invested into building processing plants, expanding community outreach projects, developing local infrastructure, roads, schools and hospitals.
              </p>
              <p className="text-earth-gold font-semibold text-xl">
                "We will operate as a beacon of responsibility, professionalism and fairness, in what is usually an exploitative, unprofessional and unsafe working environment."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/15 backdrop-blur-sm border border-earth-gold/40 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:border-earth-gold/60">
                <Target className="h-12 w-12 text-earth-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Replicable Model</h3>
                <p className="text-gray-100">Modern techniques and business models that can be replicated across the region, country and continent</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm border border-earth-gold/40 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:border-earth-gold/60">
                <Globe className="h-12 w-12 text-earth-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Circular Economy</h3>
                <p className="text-gray-100">Profits reinvested into processing plants, community projects, and local infrastructure development</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm border border-earth-gold/40 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:border-earth-gold/60">
                <Heart className="h-12 w-12 text-earth-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Community Impact</h3>
                <p className="text-gray-100">Creating jobs and opportunities for local people and businesses while preserving the environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* What Makes Us Special - Authentic Mission */}
      <section className="py-20 bg-gradient-to-br from-earth-gold/10 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-trust-navy text-white font-bold px-4 py-2 mb-6">
              What Makes Us Special
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-trust-navy mb-8">
              Exceptional Benefits for All Stakeholders
            </h2>
            <p className="text-xl text-trust-navy mb-12 leading-relaxed">
              At the same time as providing exceptional benefits to workers and their community, we will run a successful, growing and profitable business for generations to come.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-trust-navy flex items-center">
                    <TrendingUp className="h-8 w-8 text-earth-gold mr-3" />
                    For Investors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-trust-navy text-left">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-earth-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Extraordinary returns with relatively small investment</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-earth-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Unique opportunity to help an entire community grow and prosper</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-earth-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Experience the impact your investment has on people</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-earth-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Get involved personally in the transformation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-trust-navy flex items-center">
                    <Users className="h-8 w-8 text-earth-gold mr-3" />
                    For Communities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-trust-navy text-left">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-earth-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Mechanising and up-scaling artisanal mining operations</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-earth-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Professional business management and training</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-earth-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Sustainable and safe operations preserving the environment</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-earth-gold mr-2 mt-1 flex-shrink-0" />
                      <span>Positive impact in social, economic and ecological terms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-trust-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Mining Revolution in Africa
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Together with your investment, we will bring amazing benefits to the rural population while generating exceptional returns for our investors.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button 
                size="lg" 
                className="bg-earth-gold text-trust-navy hover:bg-amber-500 font-bold px-8 py-4"
                onClick={() => window.location.href = '/investors'}
              >
                Explore Investment Opportunity
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-trust-navy hover:bg-gray-100 border-2 border-white font-bold px-8 py-4"
                onClick={() => window.location.href = '/contact'}
              >
                Request Information Package
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
