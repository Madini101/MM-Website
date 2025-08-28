import MiningSite from "@/components/mining-site";
import MineGallery from "@/components/mine-gallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Zap, Users, Truck, Shield, Leaf, TrendingUp, Target, Gem, Building } from "lucide-react";

export default function Operations() {
  const operationalHighlights = [
    {
      icon: MapPin,
      title: "Proven Mining Location",
      value: "Mbesa, Tanzania",
      description: "20+ years of established artisanal copper operations in proven geological zone with renewable government licenses"
    },
    {
      icon: Truck,
      title: "Mechanisation Partnership",
      value: "Lancashire Machinery Services",
      description: "UK technical advisory partnership led by Gareth Evans for professional mining equipment deployment"
    },
    {
      icon: Users,
      title: "Community Foundation",
      value: "25-30 Mining Families",
      description: "Direct partnership with established local mining community spanning multiple generations"
    },
    {
      icon: Gem,
      title: "ASCL Joint Venture",
      value: "Afro Shamans Partnership",
      description: "20+ year relationship with local mining expertise and established copper extraction operations"
    }
  ];

  const miningProjects = [
    {
      name: "Mbesa Copper Mine",
      status: "Primary Operations",
      location: "Mbesa, Tanzania",
      type: "Artisanal to Mechanised Transition",
      reserves: "20+ years proven copper deposits",
      stage: "Active Production with Mechanisation Plan",
      description: "20+ years of proven artisanal operations transitioning to professional mechanised mining with Lancashire Machinery Services technical advisory support",
      features: [
        "20+ years of proven artisanal copper extraction",
        "Afro Shamans Company Limited local expertise", 
        "Lancashire Machinery Services UK technical advisory",
        "Gareth Evans technical advisory leadership",
        "Community-integrated sustainable development"
      ]
    },
    {
      name: "Processing Infrastructure Development",
      status: "Phase 2 Planning",
      location: "Mbesa, Tanzania",
      type: "Copper Concentration Plant",
      reserves: "Supporting primary operations capacity",
      stage: "Technical Design & Equipment Procurement",
      description: "Processing infrastructure development to support mechanised operations with professional concentration systems",
      features: [
        "Copper concentration facility planning",
        "Professional processing equipment framework",
        "Scalable infrastructure design",
        "Technical advisory partnership integration",
        "Enhanced production capabilities planning"
      ]
    }
  ];

  const sustainabilityInitiatives = [
    {
      icon: Shield,
      title: "Safety Transformation",
      description: "Replacing dangerous artisanal methods with UK safety standards and professional protocols",
      metrics: "Targeting zero-harm workplace transformation"
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description: "Professional mining transition supporting local miners and community development",
      metrics: "Direct community partnership"
    },
    {
      icon: Leaf,
      title: "Sustainable Operations",
      description: "Environmental stewardship with proper waste management and land rehabilitation",
      metrics: "Responsible mining practices implementation"
    },
    {
      icon: Zap,
      title: "Community Health",
      description: "Local healthcare and education infrastructure development supporting mining families",
      metrics: "Schools and clinics construction"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Refined Operations Header */}
      <div className="bg-white border-b border-gray-200 py-6 sm:py-8 relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="text-center">
            {/* Compact Professional Badge */}
            <div className="inline-flex items-center bg-trust-navy text-white px-6 py-2 rounded-sm text-sm font-semibold mb-4">
              <Target className="h-4 w-4 mr-2" />
              OPERATIONS & EXECUTION STRATEGY
            </div>
            
            {/* Clean Headlines */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy mb-3">
              Proven Mining Operations in Tanzania's Copper Belt
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-4xl mx-auto px-4">
              Strategic mining operations combining 20+ years of local expertise with modern extraction technology, delivering sustainable copper production and exceptional investment returns in Tanzania's proven mining corridor.
            </p>
            
            {/* Compact Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl text-earth-gold font-bold">220</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Acres</div>
                <div className="text-xs text-gray-600">Gov Licenses</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl text-earth-gold font-bold">50,000+</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Tonnes</div>
                <div className="text-xs text-gray-600">Copper Reserves</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl text-earth-gold font-bold">Active</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Production</div>
                <div className="text-xs text-gray-600">Current Status</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl text-earth-gold font-bold">200+</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Jobs</div>
                <div className="text-xs text-gray-600">Local Employment</div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Foundation: Mining Concession & Geological Data */}
      <MiningSite />

      {/* Mine Gallery */}
      <MineGallery />

      {/* Technical Expertise Social Proof - November 2024 Visit */}
      <section className="py-16 bg-gradient-to-br from-trust-navy to-trust-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-earth-gold text-trust-navy px-6 py-3 rounded-full font-bold text-sm mb-4">
              <Gem className="h-4 w-4 mr-2" />
              November 2024 Site Visit
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technical Expertise Demonstration
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Samson Mshana explaining the mineral properties to the London team at the Mbesa site during our November 2024 visit, 
              demonstrating the deep geological knowledge and hands-on expertise of our local mining partners.
            </p>
          </div>

          {/* Video Placeholder - Ready for Clean Audio Upload */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-earth-gold/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-earth-gold mb-4">
                  Geological Assessment & Mineral Analysis
                </h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Expert field assessment showcasing the technical knowledge and geological understanding 
                  that underpins our mining operations in the Mbesa copper belt.
                </p>
              </div>
              
              {/* Video Container - Ready for Upload */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/50 rounded-xl overflow-hidden border-2 border-earth-gold/20">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/R43Opj2ydXc"
                      title="Mineral Properties Explanation - Geological Assessment"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-semibold mb-2">Mineral Properties Explanation</h4>
                    <p className="text-gray-400 text-sm">
                      Samson Mshana demonstrates geological expertise and mineral identification techniques
                    </p>
                  </div>
                </div>
                
                <div className="bg-black/50 rounded-xl overflow-hidden border-2 border-earth-gold/20">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/BKA4hcLhiu8"
                      title="Site Geological Analysis - Technical Field Assessment"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-semibold mb-2">Site Geological Analysis</h4>
                    <p className="text-gray-400 text-sm">
                      Technical field assessment and copper deposit evaluation at Mbesa mining site
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center bg-earth-gold/20 text-earth-gold px-4 py-2 rounded-full text-sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Authentic Technical Expertise • November 2024 Documentation
                </div>
              </div>
            </div>
          </div>

          {/* Geological Evidence Section */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-earth-gold/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-earth-gold mb-4">
                  Geological Evidence & Deposit Validation
                </h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Comprehensive geological validation through professional surveys, historical studies, and proven mineral identification
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-xl p-6 border border-earth-gold/30">
                  <div className="text-earth-gold mb-3">
                    <Gem className="h-8 w-8" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Professional Surveys</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Visual inspection and geophysics analysis</li>
                    <li>• Resistivity analysis and shallow drilling</li>
                    <li>• Surface and pit-level mineral surveys</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-earth-gold/30">
                  <div className="text-earth-gold mb-3">
                    <Building className="h-8 w-8" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Historical Validation</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Australian mining company studies (2014)</li>
                    <li>• Redcliffe Mining geological analysis</li>
                    <li>• Third-party professional validation</li>
                  </ul>
                </div>

                <div className="bg-white/10 rounded-xl p-6 border border-earth-gold/30">
                  <div className="text-earth-gold mb-3">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h4 className="text-white font-semibold mb-3">Proven Deposits</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Malachite and azurite confirmed at surface</li>
                    <li>• Consistent 5% purity across mine-site</li>
                    <li>• Located on proven African Copper Belt</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-earth-gold/20 rounded-lg p-4 max-w-4xl mx-auto">
                  <p className="text-earth-gold font-semibold text-sm">
                    <strong>Investment Grade Validation:</strong> Multiple independent geological assessments confirm substantial copper deposits with consistent ore quality and proven extraction viability across the Mbesa mining concession.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Foundation - Compact Professional Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-navy mb-3">
              Operational Foundation
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Established partnerships and proven capabilities that form the foundation for our mechanisation investment opportunity.
            </p>
          </div>

          {/* Compact Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {operationalHighlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-earth-gold">
                <div className="flex items-start space-x-4">
                  <highlight.icon className="h-8 w-8 text-earth-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-trust-navy mb-1">{highlight.title}</h3>
                    <div className="text-lg font-semibold text-earth-gold mb-2">{highlight.value}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Current Operations Summary */}
          <div className="bg-trust-navy rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Current Operations Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <Truck className="h-8 w-8 text-earth-gold mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Production Status</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>Active copper extraction operations</li>
                  <li>25-30 mining families employed</li>
                  <li>Continuous production capacity</li>
                </ul>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-earth-gold mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Development Phase</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>Mechanisation planning underway</li>
                  <li>Equipment procurement phase</li>
                  <li>Infrastructure enhancement planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunity Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-trust-navy mb-4">
              Investment Opportunity & Development Strategy
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Investment-driven development phases leveraging existing infrastructure for cost-effective growth, 
              enhanced production capacity, and systematic mechanisation of proven artisanal mining operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {miningProjects.map((project, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-trust-navy text-white">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge className="bg-earth-gold text-trust-navy font-semibold">{project.status}</Badge>
                  </div>
                  <p className="text-gray-300 text-sm">{project.location} • {project.type}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-600">Estimated Reserves</div>
                        <div className="font-semibold text-trust-navy">{project.reserves}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Development Stage</div>
                        <div className="font-semibold text-trust-navy">{project.stage}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div>
                      <h4 className="font-semibold text-trust-navy mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-earth-gold rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Machinery Procurement */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-trust-navy mb-4">
              Strategic Machinery Procurement & Technical Advisory
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Mitigating critical operational risk through expert technical advisory collaboration. 
              Machinery procurement and maintenance expertise represents one of the most critical risk factors in our operational success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border border-orange-200 bg-white">
              <CardHeader className="bg-orange-100 border-b border-orange-200">
                <CardTitle className="text-xl font-bold text-trust-navy flex items-center">
                  <Target className="h-6 w-6 mr-2 text-orange-600" />
                  Technical Advisory Excellence
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-trust-navy mb-2">Gareth Evans - Technical Adviser</h4>
                    <p className="text-sm text-gray-600">
                      Serves as our dedicated Technical Adviser, bringing specialized expertise in mining and processing equipment procurement, installation, and maintenance. His guidance is instrumental in navigating the complexities of equipment selection, ensuring we make informed decisions that align with our operational requirements and growth objectives.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trust-navy mb-2">Technical Advisory Framework</h4>
                    <p className="text-sm text-gray-600">
                      Receiving technical guidance from <strong>LMS Global Solutions Limited UK</strong> (Company No. 12298355), a Liverpool-based machinery specialist with four years of proven international trading experience, providing advisory oversight essential for systematic operational development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-orange-200 bg-white">
              <CardHeader className="bg-orange-100 border-b border-orange-200">
                <CardTitle className="text-xl font-bold text-trust-navy flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-orange-600" />
                  LMS Global Solutions: Technical Advisors
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-trust-navy mb-2">Comprehensive Capabilities</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Specializes in mining, construction, and agricultural machinery, offering both new and used equipment from leading global brands.
                    </p>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• <strong>Global Supply Chain:</strong> Worldwide shipping with established logistics networks</li>
                      <li>• <strong>Leading Brands:</strong> Komatsu, Massey Ferguson, John Deere, New Holland, Kubota</li>
                      <li>• <strong>Maintenance Support:</strong> Rapid supply of genuine OEM parts and technical backup</li>
                      <li>• <strong>Quality Assurance:</strong> Rigorous selection ensuring reliable, efficiency-enhancing machinery</li>
                      <li>• <strong>Advisory Support:</strong> Ongoing technical guidance beyond initial procurement</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-trust-navy mb-8 text-center">Systematic Phased Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200 text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-bold text-orange-600 mb-3">Phase 1: Essential Operations</h4>
                <p className="text-sm text-gray-600">
                  Core processing equipment with essential operational capabilities, plus optional enhancement items for immediate operational flexibility and complete installation support.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200 text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-bold text-orange-600 mb-3">Phase 2: Enhanced Capacity</h4>
                <p className="text-sm text-gray-600">
                  Upgraded equipment for increased processing capacity and efficiency, with technology improvements for enhanced operational capabilities.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200 text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-bold text-orange-600 mb-3">Phase 3: Full-Scale Production</h4>
                <p className="text-sm text-gray-600">
                  Complete production setup for maximum operational capacity, incorporating advanced processing systems for premium output quality.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg border border-gray-200">
              <h4 className="font-bold text-trust-navy mb-3 text-center">Investment Transparency & Risk Management</h4>
              <p className="text-sm text-gray-600 text-center">
                We have developed comprehensive documentation outlining equipment specifications, pricing structures, and supplier arrangements for each development phase. This detailed framework provides investors with complete financial clarity while establishing clear operational milestones for systematic scaling, ensuring that machinery procurement decisions are made with expert insight while minimizing operational risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Environmental Stewardship */}
      <section className="py-20 bg-success-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-trust-navy mb-4">
              Sustainability & Environmental Stewardship
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental protection and community development programs ensuring long-term sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sustainabilityInitiatives.map((initiative, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-success-green/20">
                <CardContent className="p-6">
                  <initiative.icon className="h-12 w-12 text-success-green mx-auto mb-4" />
                  <h3 className="font-bold text-trust-navy mb-2">{initiative.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{initiative.description}</p>
                  <div className="text-lg font-bold text-success-green">{initiative.metrics}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sustainability Metrics Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border border-success-green/20 bg-success-green/10">
              <CardContent className="p-4 text-center">
                <Leaf className="h-8 w-8 text-success-green mx-auto mb-2" />
                <div className="text-success-green font-bold text-xl">Active</div>
                <div className="text-sm text-gray-600">Environmental program</div>
              </CardContent>
            </Card>
            <Card className="border border-earth-gold/20 bg-earth-gold/10">
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 text-earth-gold mx-auto mb-2" />
                <div className="text-earth-gold font-bold text-xl">Priority</div>
                <div className="text-sm text-gray-600">Safety focus</div>
              </CardContent>
            </Card>
            <Card className="border border-trust-navy/20 bg-trust-navy/10">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-trust-navy mx-auto mb-2" />
                <div className="text-trust-navy font-bold text-xl">5/2</div>
                <div className="text-sm text-gray-600">Schools/clinics</div>
              </CardContent>
            </Card>
            <Card className="border border-orange-600/20 bg-orange-600/10">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-orange-600 font-bold text-xl">Local</div>
                <div className="text-sm text-gray-600">Economic focus</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Risk Mitigation & Operational Safety */}
      <section className="py-16 bg-trust-navy">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Risk Mitigation & Operational Safety</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive risk management framework ensuring safe, sustainable, and profitable operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Operational Risks */}
            <Card className="bg-gray-800 border-earth-gold">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-6 w-6 text-earth-gold mr-3" />
                  Operational Risk Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-earth-gold mb-2">Copper Ore Purity</h4>
                  <p className="text-gray-300 text-sm">Mechanical sorting for efficient processing of 4-5% purity ore throughout African Copper Belt, with geological surveys for optimal mining plans.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-earth-gold mb-2">Machinery Failure</h4>
                  <p className="text-gray-300 text-sm">Fail-over capability with multiple heavy plant vehicles and on-site repair facilities ensuring operational continuity.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-earth-gold mb-2">Seasonal Operations</h4>
                  <p className="text-gray-300 text-sm">All-weather infrastructure: access roads, hard-standing areas, dewatering systems, and covered warehouse for year-round processing.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-earth-gold mb-2">Mining Efficiency</h4>
                  <p className="text-gray-300 text-sm">On-site mining experts for project management and ASCL personnel training in advanced machinery operation and mine setup.</p>
                </div>
              </CardContent>
            </Card>

            {/* Safety & Community */}
            <Card className="bg-gray-800 border-earth-gold">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="h-6 w-6 text-earth-gold mr-3" />
                  Safety & Community Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-earth-gold mb-2">Health & Safety</h4>
                  <p className="text-gray-300 text-sm">International consultant with mining corporation experience and European standards knowledge, conducting regular audits and risk assessments.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-earth-gold mb-2">Security & Theft Prevention</h4>
                  <p className="text-gray-300 text-sm">Trusted transportation and clearing agents, secure technology systems for mine-site and supply chain protection.</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-earth-gold mb-2">Community Benefits</h4>
                  <p className="text-gray-300 text-sm">Village elder appointed as Trustee ensuring local community leadership in socio-economic and infrastructure project decisions.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Mitigation Summary */}
          <Card className="bg-earth-gold/10 border-2 border-earth-gold">
            <CardHeader>
              <CardTitle className="text-white text-center text-2xl">Comprehensive Risk Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-earth-gold mb-4 text-lg">Technical & Operational</h4>
                  <ul className="text-white space-y-2">
                    <li className="flex items-start">
                      <span className="text-earth-gold mr-2">•</span>
                      <span className="text-sm">Mechanical sorting for 4-5% purity ore processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-earth-gold mr-2">•</span>
                      <span className="text-sm">Multiple heavy machinery with fail-over capability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-earth-gold mr-2">•</span>
                      <span className="text-sm">On-site mining experts for project management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-earth-gold mr-2">•</span>
                      <span className="text-sm">On-site fuel stockpiling for consumables security</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-earth-gold mb-4 text-lg">Safety & Community</h4>
                  <ul className="text-white space-y-2">
                    <li className="flex items-start">
                      <span className="text-earth-gold mr-2">•</span>
                      <span className="text-sm">International mining safety consultant oversight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-earth-gold mr-2">•</span>
                      <span className="text-sm">Village elder appointed as community Trustee</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-earth-gold mr-2">•</span>
                      <span className="text-sm">Trusted transportation and clearing agents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-earth-gold mr-2">•</span>
                      <span className="text-sm">Secure mine-site and supply chain technology</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-white/10 rounded-lg p-6 text-center">
                <p className="text-white">
                  <span className="font-semibold text-earth-gold">Investment Notice:</span> This is a high-risk investment opportunity. 
                  We believe we have comprehensively mitigated all major operational and market risks through our detailed framework above.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}