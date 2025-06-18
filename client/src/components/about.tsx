import { Users, Leaf, TrendingUp, Target, Globe, Award, Play, Shield, Heart, Lightbulb, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const visionPillars = [
    {
      icon: Heart,
      title: "Human-Centered Mining",
      description: "Every decision prioritises community welfare, worker safety and family prosperity over pure extraction",
      impact: "25-30 core family members"
    },
    {
      icon: Globe,
      title: "Continental Model",
      description: "Creating a replicable framework for ethical mining across Africa's mineral-rich regions",
      impact: "Scalable to 10+ countries"
    },
    {
      icon: Lightbulb,
      title: "Innovation Through Heritage",
      description: "Combining traditional mining wisdom with modern technology and international best practices",
      impact: "20+ years legacy enhanced"
    }
  ];

  const approachSteps = [
    {
      step: "01",
      title: "Heritage Foundation",
      description: "Building on 20+ years of trust with local mining expertise and proven community relationships",
      details: "Authentic partnership rooted in decades of successful mining operations and community trust"
    },
    {
      step: "02",
      title: "Transformation Strategy", 
      description: "Converting artisanal operations into professional, mechanised mining with international safety standards",
      details: "Lancashire Machinery Services partnership for equipment and UK safety protocols"
    },
    {
      step: "03",
      title: "ESG Framework",
      description: "Environmental stewardship, social impact and transparent governance driving sustainable operations", 
      details: "Community healthcare programs, environmental restoration, and transparent reporting"
    },
    {
      step: "04",
      title: "Market Integration",
      description: "Seamless connection to international copper markets while maintaining local community benefits",
      details: "Direct LME access with fair trade pricing and community profit sharing"
    }
  ];

  return (
    <>
      {/* Vision Section */}
      <section id="about" className="py-20 bg-trust-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our Vision: Redefining Responsible Mining
            </h2>
            <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              We envision a future where mining operations become catalysts for community transformation, 
              environmental stewardship and sustainable prosperity across Africa's mineral-rich regions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {visionPillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Card key={index} className="bg-gray-800 shadow-xl border-2 border-earth-gold hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="bg-earth-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-trust-navy" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{pillar.description}</p>
                    <div className="bg-earth-gold px-4 py-2 rounded-full">
                      <span className="text-sm font-semibold text-trust-navy">{pillar.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Mission Statement */}
          <div className="bg-trust-navy border-2 border-earth-gold rounded-2xl p-12">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-4xl font-bold mb-8 text-center text-white">Our Mission</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-xl leading-relaxed mb-6 text-gray-300">
                    To attract UK investors passionate about <strong className="text-earth-gold">social economic change that delivers excellent returns</strong> 
                    through transparent, sustainable mining operations that transform entire communities in Tanzania's copper belt.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-earth-gold p-2 rounded-full mt-1">
                        <TrendingUp className="h-4 w-4 text-trust-navy" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-white">Exceptional Returns</h4>
                        <p className="text-sm text-gray-300">Exceptional returns through proven operations and copper demand</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-earth-gold p-2 rounded-full mt-1">
                        <Users className="h-4 w-4 text-trust-navy" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-white">Social Impact</h4>
                        <p className="text-sm text-gray-300">Transforming 25-30 families from artisanal to professional mining with community development</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="bg-earth-gold p-2 rounded-full mt-1">
                        <Shield className="h-4 w-4 text-trust-navy" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-white">Transparent Operations</h4>
                        <p className="text-sm text-gray-300">Full UK regulatory compliance, HMRC SEIS assurance and authentic partnership values</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800 p-8 rounded-xl border border-earth-gold">
                  <h4 className="text-2xl font-bold mb-6 text-center text-white">Why We Exist</h4>
                  <div className="space-y-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-earth-gold">1.5M+</div>
                      <p className="text-sm text-gray-300">Tanzanians depend on mining</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-earth-gold">80%</div>
                      <p className="text-sm text-gray-300">Work in unregulated conditions</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-earth-gold">20+</div>
                      <p className="text-sm text-gray-300">Years Mshana family experience</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <p className="text-sm italic text-center text-gray-300">
                      "We don't just extract copper - we extract potential from communities, 
                      partnerships, and sustainable practices that benefit everyone."
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-600 text-center">
                <p className="text-lg font-semibold text-gray-300 mb-6">
                  Our mission attracts investors who value <span className="text-earth-gold">authentic partnerships</span>, 
                  <span className="text-earth-gold"> sustainable impact</span> and 
                  <span className="text-earth-gold"> exceptional financial returns</span> through responsible mining.
                </p>
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="bg-earth-gold border-2 border-earth-gold text-trust-navy hover:bg-yellow-500 font-bold py-3 px-8 text-lg shadow-md"
                >
                  Join Our Mission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Action Section - NO GAP */}
      <section className="py-20 bg-trust-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Our Approach: Partnership in Action</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              See how our UK-Tanzania partnership transforms artisanal mining into professional, 
              sustainable operations that benefit entire communities.
            </p>
          </div>

          {/* Video Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                {!isVideoOpen ? (
                  <div className="relative">
                    <img 
                      src="https://img.youtube.com/vi/CTn3kkD128w/maxresdefault.jpg"
                      alt="Madini Moyoni Partnership Video" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <Button
                        onClick={() => setIsVideoOpen(true)}
                        className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-3"
                      >
                        <Play className="h-6 w-6 fill-current" />
                        <span>Watch Our Story</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/CTn3kkD128w?autoplay=1"
                    title="Madini Moyoni Partnership Video"
                    className="w-full h-64"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Experience Our Partnership Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                This video showcases the authentic relationships, community impact and operational transformation 
                that define our approach. See firsthand how traditional mining wisdom combines with modern 
                technology to create sustainable prosperity.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-earth-gold" />
                  <span className="text-gray-300">20+ years of proven community relationships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-earth-gold" />
                  <span className="text-gray-300">Direct transformation of 25-30 families</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-earth-gold" />
                  <span className="text-gray-300">Professional mining standards implementation</span>
                </div>
              </div>
            </div>
          </div>



          {/* Enhanced Mine Site Data Section */}
        <div className="container mx-auto px-6">
          <div className="mb-16 bg-gradient-to-br from-trust-navy to-gray-900 border-2 border-earth-gold p-12 rounded-2xl shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">The Mbesa Mining Concession</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A strategically positioned 220-acre mining operation on Tanzania's renowned African Copper Belt, 
                backed by 20+ years of proven extraction success and government-approved licensing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Licensed Mining Area */}
              <div className="bg-white bg-opacity-5 border border-earth-gold p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-earth-gold rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-trust-navy" />
                  </div>
                  <h4 className="text-xl font-bold text-earth-gold">Licensed Mining Area</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-trust-navy bg-opacity-30 p-3 rounded-lg">
                    <div className="text-earth-gold font-bold text-lg">220 Acres</div>
                    <div className="text-gray-300 text-sm">Renewable mining licenses granted by Tanzanian Government</div>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Located on the famous <strong className="text-white">African Copper Belt</strong> near Mbesa, Tunduru district</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Geological studies include visual inspection, geophysics resistivity analysis and shallow drilling</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Surface surveys confirm presence of <strong className="text-white">malachite and azurite</strong> at pit level</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mining Operations */}
              <div className="bg-white bg-opacity-5 border border-earth-gold p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-earth-gold rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-trust-navy" />
                  </div>
                  <h4 className="text-xl font-bold text-earth-gold">Mining Operations</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-trust-navy bg-opacity-30 p-3 rounded-lg">
                    <div className="text-earth-gold font-bold text-lg">20+ Years Heritage</div>
                    <div className="text-gray-300 text-sm">Continuous mining operations by the Mshana family</div>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-white">25-30 core families</strong> directly employed and supported through mining activities</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-white">Proven extraction methods</strong> refined over decades of operational experience</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-white">Community integration</strong> with sustainable development initiatives</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategic Advantage */}
              <div className="bg-white bg-opacity-5 border border-earth-gold p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-earth-gold rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-trust-navy" />
                  </div>
                  <h4 className="text-xl font-bold text-earth-gold">Strategic Advantage</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-trust-navy bg-opacity-30 p-3 rounded-lg">
                    <div className="text-earth-gold font-bold text-lg">5% Purity Copper</div>
                    <div className="text-gray-300 text-sm">Consistent ore quality across the mine site</div>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-white">Ready for mechanisation</strong> to transform into professional mining operations</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-white">Established supply chains</strong> and buyer relationships for immediate market access</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-white">Government compliance</strong> with all regulatory requirements in place</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Statistics Bar */}
            <div className="bg-earth-gold bg-opacity-10 border border-earth-gold rounded-xl p-8">
              <h4 className="text-xl font-bold text-white text-center mb-8">Key Operational Metrics</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-trust-navy bg-opacity-30 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-earth-gold mb-3">220</div>
                  <div className="text-white text-base font-medium">Licensed Acres</div>
                  <div className="text-gray-300 text-sm mt-1">Government Approved</div>
                </div>
                <div className="text-center bg-trust-navy bg-opacity-30 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-earth-gold mb-3">20+</div>
                  <div className="text-white text-base font-medium">Years Operating</div>
                  <div className="text-gray-300 text-sm mt-1">Proven Track Record</div>
                </div>
                <div className="text-center bg-trust-navy bg-opacity-30 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-earth-gold mb-3">25-30</div>
                  <div className="text-white text-base font-medium">Core Families</div>
                  <div className="text-gray-300 text-sm mt-1">Direct Employment</div>
                </div>
                <div className="text-center bg-trust-navy bg-opacity-30 p-6 rounded-lg">
                  <div className="text-4xl font-bold text-earth-gold mb-3">5%</div>
                  <div className="text-white text-base font-medium">Copper Purity</div>
                  <div className="text-gray-300 text-sm mt-1">Consistent Quality</div>
                </div>
              </div>
            </div>
          </div>

          {/* Approach Steps */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Our Four-Pillar Approach</h3>
            {approachSteps.map((step, index) => (
              <Card key={index} className="bg-white bg-opacity-10 shadow-lg hover:shadow-xl transition-shadow border-earth-gold border">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="text-center lg:text-left">
                      <div className="bg-earth-gold text-trust-navy text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                        {step.step}
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <h4 className="text-xl font-bold text-earth-gold mb-3">{step.title}</h4>
                      <p className="text-gray-300 leading-relaxed mb-3">{step.description}</p>
                      <p className="text-sm text-earth-gold">{step.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
