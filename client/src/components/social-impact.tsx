import { Heart, Users, Leaf, GraduationCap, Droplets, Building, TrendingUp, Shield, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import socialProjectImage from "@assets/Social Proeject image. Team in rural Tanzania on a project.jpg";
import miningPhoto from "@assets/WhatsApp Image 2025-08-18 at 00.22.41_1755473006645.jpeg";

export default function SocialImpact() {
  const impactAreas = [
    {
      title: "Economic Empowerment",
      description: "Professional mining jobs with fair wages, skills training, and pathways to leadership for local community members.",
      icon: TrendingUp
    },
    {
      title: "Infrastructure Development", 
      description: "Schools, healthcare facilities, clean water systems, and sustainable infrastructure that benefits the entire region.",
      icon: Building
    },
    {
      title: "Environmental Protection",
      description: "Sustainable mining practices with land rehabilitation, water conservation, and ecosystem preservation for future generations.",
      icon: Shield
    },
    {
      title: "Community Health",
      description: "Mobile clinics, maternal health services, and comprehensive healthcare programs for mining families and communities.",
      icon: Heart
    },
    {
      title: "Education Access",
      description: "Building schools and providing educational opportunities for children in remote mining communities.",
      icon: GraduationCap
    },
    {
      title: "Clean Water Access",
      description: "Drilling wells and installing water treatment systems for safe, reliable community water supply.",
      icon: Droplets
    },
    {
      title: "Women's Empowerment",
      description: "Training programs and leadership opportunities specifically designed for women in the community.",
      icon: Users
    }
  ];
  return (
    <section id="social-impact" className="py-12 sm:py-16 lg:py-20 bg-trust-navy overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Where Profitability Meets Purpose
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            For empathetic investors seeking both financial returns and meaningful social change. 
            Our mining operations create lasting transformation in rural Tanzania while delivering 
            <strong className="text-earth-gold-400"> exceptional financial performance</strong>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left: Impact Story */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-earth-gold-400 p-4 sm:p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                Authentic Partnership, Real Impact
              </h3>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-4 sm:mb-6">
                For over 20 years, the Mshana family has built deep community relationships in Mbesa, Tanzania. 
                Our mining operations create lasting transformation while delivering authentic financial returns 
                through sustainable, community-centered development.
              </p>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm border border-earth-gold-500 p-4 sm:p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Community-Centered Business Model</h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                This isn't corporate social responsibility—it's the heart of our business model. 
                Our operations are designed to create sustainable prosperity that extends far beyond mining, 
                building infrastructure and opportunities that transform entire communities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-center">
                <div className="bg-earth-gold-500/20 rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold text-earth-gold-400">25-30</div>
                  <div className="text-xs sm:text-sm text-white font-medium">Core Family Members</div>
                  <div className="text-xs text-gray-300">Direct Partnership</div>
                </div>
                <div className="bg-earth-gold-500/20 rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold text-earth-gold-400">500+</div>
                  <div className="text-xs sm:text-sm text-white font-medium">Community Members</div>
                  <div className="text-xs text-gray-300">Impacted Programs</div>
                </div>
                <div className="bg-earth-gold-500/20 rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold text-earth-gold-400">20+</div>
                  <div className="text-xs sm:text-sm text-white font-medium">Years Partnership</div>
                  <div className="text-xs text-gray-300">Trust Foundation</div>
                </div>
                <div className="bg-earth-gold-500/20 rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold text-earth-gold-400">3x</div>
                  <div className="text-xs sm:text-sm text-white font-medium">Income Increase</div>
                  <div className="text-xs text-gray-300">Community Impact</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Community Partnership Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl z-10"></div>
            <img 
              src={socialProjectImage} 
              alt="Authentic Mbesa copper mining operations showing sustainable community partnership approach"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-earth-gold-400">
                <p className="text-sm font-bold text-white">
                  Authentic Community Partnership Approach
                </p>
                <p className="text-xs text-gray-200 mt-1">
                  20+ years of building trust and transforming lives in Mbesa, Tanzania
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Through Partnership Section */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl z-10"></div>
                <img 
                  src={miningPhoto} 
                  alt="Authentic Mbesa mining operations showing local community engagement in Tanzania" 
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-earth-gold-400">
                    <p className="text-sm font-bold text-white">Mbesa Mining Operations</p>
                    <p className="text-xs text-gray-200">Southern Tanzania Community Partnership</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Card className="text-center bg-gray-800/80 border-earth-gold">
                  <CardContent className="p-3">
                    <div className="text-lg font-bold text-earth-gold">Mbesa</div>
                    <div className="text-xs text-gray-400">Southern Tanzania</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gray-800/80 border-earth-gold">
                  <CardContent className="p-3">
                    <div className="text-lg font-bold text-copper">25-30</div>
                    <div className="text-xs text-gray-400">Core Families</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Transformation Through Partnership</h3>
              <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 leading-relaxed">
                <strong>Over 1.5 million Tanzanians depend on mining</strong>, yet 80% work in unregulated, 
                dangerous conditions. Our partnership transforms artisanal operations into sustainable, professional mining businesses through proper training, safety protocols, and community development programs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-l-4 border-l-earth-gold-500 premium-card-dark hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-earth-gold-500 text-white p-3 rounded-2xl flex-shrink-0">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-earth-gold-400 mb-3 text-lg">From Artisanal to Professional</h4>
                        <p className="text-gray-300 mb-3 leading-relaxed">Transforming 20+ years of artisanal experience into mechanised operations</p>
                        <div className="flex items-center text-sm text-earth-gold-300 font-medium">
                          <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>Lancashire Machinery Services partnership + local expertise</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-earth-gold-500 premium-card-dark hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-earth-gold-500 text-white p-3 rounded-2xl flex-shrink-0">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-earth-gold-400 mb-3 text-lg">Safety & Standards</h4>
                        <p className="text-gray-300 mb-3 leading-relaxed">Replacing dangerous manual methods with professional protocols</p>
                        <div className="flex items-center text-sm text-earth-gold-300 font-medium">
                          <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>UK safety standards + Elly Mshana's geological expertise</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-earth-gold bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-earth-gold text-trust-navy p-2 rounded-full flex-shrink-0">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-earth-gold mb-1">Market Access</h4>
                        <p className="text-sm text-gray-300 mb-2">Moving from local to international copper markets</p>
                        <div className="flex items-center text-xs text-copper font-medium">
                          <Check className="h-3 w-3 mr-2 flex-shrink-0" />
                          <span>Established UK buyer network + competitive LME pricing</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-earth-gold bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-earth-gold text-trust-navy p-2 rounded-full flex-shrink-0">
                        <Users className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-earth-gold mb-1">Community Impact</h4>
                        <p className="text-sm text-gray-300 mb-2">Ensuring mining benefits extend beyond core families</p>
                        <div className="flex items-center text-xs text-copper font-medium">
                          <Check className="h-3 w-3 mr-2 flex-shrink-0" />
                          <span>Emmanuel Mshana's Pamoja Afrika development programs</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Environmental & Community Development Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-forest-green text-white border-forest-green">
              <CardContent className="p-8 text-center">
                <Leaf className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Environmental Commitment</h3>
                <p className="leading-relaxed">
                  Sustainable mining practices with proper waste management, water treatment systems 
                  and land rehabilitation to preserve the copper belt ecosystem for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-premium-gold text-white border-premium-gold">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Community Development</h3>
                <p className="leading-relaxed">
                  Building schools, healthcare facilities, clean water access, and sustainable farming 
                  initiatives. Creating jobs and opportunities that transform entire communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Impact Section */}
        <div className="mb-16">
          <div className="text-center mb-12 bg-gray-800 border-2 border-earth-gold p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-white">Your Investment Creates Lasting Change</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAreas.map((area, index) => (
              <Card key={index} className="bg-gray-800 shadow-lg border border-earth-gold hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-copper rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{area.title}</h4>
                  <p className="text-gray-300 leading-relaxed text-sm">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center bg-gray-700 border-2 border-earth-gold p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Investors Who Value Both Returns and Impact
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Your investment doesn't just generate exceptional financial returns—it transforms communities, 
            preserves environments, and creates sustainable prosperity for generations.
          </p>
          <Button
            onClick={() => window.location.href = '/contact'}
            className="bg-earth-gold border-2 border-earth-gold text-trust-navy hover:bg-yellow-500 font-bold py-3 px-8 text-lg mb-4 shadow-md transition-all duration-300"
          >
            Invest with Purpose
          </Button>
          <div className="text-center">
            <span className="text-lg font-semibold text-earth-gold">
              Transparent. Sustainable. Profitable. Purposeful.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}