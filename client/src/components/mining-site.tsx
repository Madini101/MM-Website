import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Wrench, TrendingUp, Shield, Leaf, Cog, Zap } from "lucide-react";
import coverImage from "@assets/Mbesa Copper Mine wide shot.jpg";

export default function MiningSite() {
  const siteFeatures = [
    {
      title: "220 Acres Licensed",
      description: "Renewable Tanzanian Government mining licenses",
      icon: MapPin,
      details: "Located in Mbesa, Tunduru district on the African Copper Belt"
    },
    {
      title: "Proven Reserves", 
      description: "Hundreds of thousands of tonnes of high-grade copper ore",
      icon: TrendingUp,
      details: "Consistent 5% purity copper ore across the mine site"
    },
    {
      title: "Operational History",
      description: "20+ years of continuous mining operations",
      icon: Shield,
      details: "Elly Mshana family's proven track record since 2004"
    },
    {
      title: "Community Integration",
      description: "25-30 families directly employed and supported",
      icon: Users,
      details: "Transforming artisanal mining into professional operations"
    }
  ];

  const geologicalData = [
    { mineral: "Chalcocite", purity: "79.8%", description: "Primary copper sulfide" },
    { mineral: "Covellite", purity: "66.4%", description: "High-grade copper mineral" },
    { mineral: "Bornite", purity: "63.3%", description: "Peacock ore copper mineral" },
    { mineral: "Malachite", purity: "57.5%", description: "Green copper carbonate" },
    { mineral: "Azurite", purity: "55.1%", description: "Blue copper carbonate" },
    { mineral: "Chalcopyrite", purity: "34.6%", description: "Primary copper iron sulfide" }
  ];

  const partnershipExcellence = {
    title: "UK-Tanzania Partnership Excellence",
    subtitle: "SEIS-Qualified Joint Venture Combining British Capital with Tanzanian Mining Mastery",
    description: "Our exclusive joint venture creates a unique investment opportunity where UK regulatory compliance meets proven African mining expertise, delivering exceptional returns while transforming communities.",
    
    corePartnership: {
      heritage: "The Mshana family are descendants of the Shana clan, traditionally known as blacksmiths of the Ugweno tribe from the Pare Mountains in Kilimanjaro region",
      experience: "Afro Shamans Company Limited has operated for over 20 years as artisanal miners with 25-30 core family members",
      leadership: "Elly Mshana brings 30+ years mineral exploration across East Africa including DRC, Zambia, and Mozambique"
    },
    
    ukExpertise: [
      {
        area: "Financial Governance",
        lead: "Jeremy Henderson - Chartered Accountant",
        credentials: "Qualified with Baker Tilly, Manager at PricewaterhouseCoopers Barbados",
        value: "Complete transparency from investment through to monthly reporting and robust financial controls"
      },
      {
        area: "Strategic Leadership", 
        lead: "Adrian Maile - Chairman/CEO",
        credentials: "40+ years business experience in global companies, specialist focus on Emerging Markets including Africa",
        value: "Strategic direction, investor relations, and regulatory body engagement"
      },
      {
        area: "Operations Management",
        lead: "Carsue Curniffe - COO", 
        credentials: "20+ years business change consultant, multi-million pound contract management",
        value: "Complex transformation projects and socio-economic change legacy creation"
      },
      {
        area: "Technical Advisory",
        lead: "Gareth Evans - Lancashire Machinery Services",
        credentials: "Decades of African mining experience across thousands of projects",
        value: "Mining machinery expertise and operational success frameworks"
      }
    ],
    
    tanzanianMastery: [
      {
        area: "Mining Operations",
        lead: "Elly Mshana - CEO Afro Shamans",
        credentials: "30+ years mineral exploration across East Africa, mining guru passing knowledge to team",
        value: "Deep geological knowledge and heavy machinery operations expertise"
      },
      {
        area: "Legal Framework",
        lead: "Rosan Mbwambo - Chairman",
        credentials: "20+ years legal experience, arbitration specialist, mining and construction law expert",
        value: "National and international legal compliance, contract oversight"
      },
      {
        area: "Community Development",
        lead: "Emmanuel Mshana - Head of Strategy", 
        credentials: "Co-founder Pamoja Afrika, extensive community empowerment experience",
        value: "Sustainable farming, clean water access, educational opportunities for local communities"
      },
      {
        area: "Site Management",
        lead: "Amani Blass Saleko - Head of Mine Site",
        credentials: "Managed multiple mining sites across Tanzania, health and safety expertise",
        value: "Production oversight, quality assurance, community activism including school facilities"
      }
    ]
  };

  const seisQualifications = [
    {
      criteria: "HMRC SEIS Compliance",
      status: "✓ Qualified",
      details: "Madini Moyoni Ltd meets all SEIS criteria: early-stage UK company, unquoted, fewer than 25 employees, qualifying business activities"
    },
    {
      criteria: "Investment Limits",
      status: "£5k - £250k",
      details: "SEIS provides 50% immediate tax relief on investments up to £200,000 per individual per tax year"
    },
    {
      criteria: "Business Activities",
      status: "✓ Qualifying",
      details: "Copper mining operations constitute qualifying trading activities under SEIS regulations"
    }
  ];

  const challenges = [
    {
      title: "From Artisanal to Professional",
      description: "Transforming 20+ years of artisanal experience into mechanised operations",
      icon: Wrench,
      solution: "Lancashire Machinery Services partnership + local expertise"
    },
    {
      title: "Safety & Standards", 
      description: "Replacing dangerous manual methods with professional protocols",
      icon: Shield,
      solution: "UK safety standards + Elly Mshana's geological expertise"
    },
    {
      title: "Market Access",
      description: "Moving from local to international copper markets",
      icon: TrendingUp,
      solution: "Established UK buyer network + competitive LME pricing"
    },
    {
      title: "Community Impact",
      description: "Ensuring mining benefits extend beyond core families",
      icon: Users,
      solution: "Emmanuel Mshana's Pamoja Afrika development programs"
    }
  ];



  return (
    <section id="mining-site" className="py-20 bg-trust-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">The Mbesa Mining Concession</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            220 acres of renewable Tanzanian Government licenses with hundreds of thousands of tonnes of high-grade copper ore confirmed by initial geological studies, and local/international customer contracts in place.
          </p>
          <div className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-300 italic">
              "This isn't just about extracting copper. It's about extracting potential - 
              from the earth, from communities, and from partnerships that honour both tradition and progress."
            </p>
            <p className="text-sm text-earth-gold font-semibold mt-3 sm:mt-4">- The Madini Moyoni Philosophy</p>
          </div>
        </div>

        {/* Mine Site Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {siteFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-white bg-opacity-10 border-earth-gold border hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-earth-gold text-trust-navy p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-3">{feature.description}</p>
                  <p className="text-sm text-earth-gold">{feature.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Geological Data Section */}
        <div className="mb-16 bg-white bg-opacity-10 p-8 rounded-xl">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Proven Copper Concentrations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geologicalData.map((mineral, index) => (
              <div key={index} className="bg-trust-navy bg-opacity-50 p-4 rounded-lg text-center">
                <div className="text-earth-gold text-2xl font-bold mb-2">{mineral.purity}</div>
                <div className="text-white font-semibold mb-1">{mineral.mineral}</div>
                <div className="text-gray-300 text-sm">{mineral.description}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Geological studies include visual inspection, geophysics resistivity analysis and shallow drilling, confirming consistent <strong className="text-earth-gold">5% purity copper ore</strong> across the mine site.
            </p>
          </div>
        </div>



        {/* UK-Tanzania Partnership Excellence */}
        <div className="mb-16 bg-white border-4 border-earth-gold p-12 rounded-xl shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-earth-gold text-trust-navy px-8 py-3 rounded-lg text-lg font-bold mb-6 shadow-lg">
              CRITICAL SEIS INVESTMENT SECTION
            </div>
            <h3 className="text-5xl font-bold text-trust-navy mb-6 leading-tight">UK-Tanzania Partnership Excellence</h3>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
              SEIS-qualified joint venture: UK regulatory compliance meets proven Tanzanian mining operations.
            </p>
          </div>

          {/* SEIS Status - Enhanced */}
          <div className="bg-earth-gold border-4 border-trust-navy rounded-xl p-10 mb-16 text-center shadow-xl">
            <h4 className="text-4xl font-bold text-trust-navy mb-8">HMRC SEIS Qualified</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border-3 border-earth-gold rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-trust-navy mb-2 break-words">£5k - £250k</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">Investment Range</div>
              </div>
              <div className="bg-white border-3 border-earth-gold rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-trust-navy mb-2">50%</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">Immediate Tax Relief</div>
              </div>
              <div className="bg-white border-3 border-earth-gold rounded-lg p-4 sm:p-6 shadow-lg">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-trust-navy mb-2 break-words">Early-stage</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">Qualifying Business</div>
              </div>
            </div>
          </div>

          {/* Partnership Services - Enhanced */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* UK Services */}
            <div className="bg-white border-4 border-trust-navy rounded-xl shadow-xl">
              <div className="bg-trust-navy text-white p-6 rounded-t-lg">
                <div className="flex items-center justify-center">
                  <div className="w-20 h-16 bg-white flex items-center justify-center text-trust-navy text-2xl font-bold rounded-lg mr-6 shadow-lg">UK</div>
                  <h4 className="text-3xl font-bold">UK Brings</h4>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-3 border-earth-gold p-4 sm:p-6 rounded-lg shadow-2xl">
                  <h5 className="text-lg sm:text-xl font-bold text-trust-navy mb-3 flex items-start sm:items-center">
                    <span className="text-earth-gold mr-2 sm:mr-3 mt-1 sm:mt-0">■</span>
                    <span className="break-words">Financial Governance</span>
                  </h5>
                  <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">Chartered accountancy expertise, complete transparency, monthly reporting</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-3 border-earth-gold p-4 sm:p-6 rounded-lg shadow-2xl">
                  <h5 className="text-lg sm:text-xl font-bold text-trust-navy mb-3 flex items-start sm:items-center">
                    <span className="text-earth-gold mr-2 sm:mr-3 mt-1 sm:mt-0">■</span>
                    <span className="break-words">International Markets</span>
                  </h5>
                  <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">LME pricing access, established buyer networks, export expertise</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-3 border-earth-gold p-4 sm:p-6 rounded-lg shadow-2xl">
                  <h5 className="text-lg sm:text-xl font-bold text-trust-navy mb-3 flex items-start sm:items-center">
                    <span className="text-earth-gold mr-2 sm:mr-3 mt-1 sm:mt-0">■</span>
                    <span className="break-words">Technical Operations</span>
                  </h5>
                  <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">Mining machinery expertise, Lancashire Machinery Services partnership</p>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-3 border-earth-gold p-4 sm:p-6 rounded-lg shadow-2xl">
                  <h5 className="text-lg sm:text-xl font-bold text-trust-navy mb-3 flex items-start sm:items-center">
                    <span className="text-earth-gold mr-2 sm:mr-3 mt-1 sm:mt-0">■</span>
                    <span className="break-words">Regulatory Compliance</span>
                  </h5>
                  <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">UK standards, SEIS qualification, investor relations</p>
                </div>
              </div>
            </div>

            {/* Tanzania Services */}
            <div className="bg-white border-4 border-earth-gold rounded-xl shadow-xl">
              <div className="bg-earth-gold text-trust-navy p-6 rounded-t-lg">
                <div className="flex items-center justify-center">
                  <div className="w-20 h-16 bg-trust-navy flex items-center justify-center text-white text-2xl font-bold rounded-lg mr-6 shadow-lg">TZ</div>
                  <h4 className="text-3xl font-bold">Tanzania Brings</h4>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="bg-gradient-to-r from-green-100 to-green-50 border-3 border-earth-gold p-6 rounded-lg shadow-2xl">
                  <h5 className="text-xl font-bold text-trust-navy mb-3 flex items-center">
                    <span className="text-earth-gold mr-3">■</span>
                    Mining Operations
                  </h5>
                  <p className="text-gray-900 font-medium">30+ years mineral exploration across East Africa, proven extraction</p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-50 border-3 border-earth-gold p-6 rounded-lg shadow-2xl">
                  <h5 className="text-xl font-bold text-trust-navy mb-3 flex items-center">
                    <span className="text-earth-gold mr-3">■</span>
                    Legal Framework
                  </h5>
                  <p className="text-gray-900 font-medium">20+ years mining law experience, government relationships, licensing</p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-50 border-3 border-earth-gold p-4 sm:p-6 rounded-lg shadow-2xl">
                  <h5 className="text-lg sm:text-xl font-bold text-trust-navy mb-3 flex items-start sm:items-center">
                    <span className="text-earth-gold mr-2 sm:mr-3 mt-1 sm:mt-0">■</span>
                    <span className="break-words">Community Development</span>
                  </h5>
                  <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">Established development programs, local employment networks</p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-50 border-3 border-earth-gold p-4 sm:p-6 rounded-lg shadow-2xl">
                  <h5 className="text-lg sm:text-xl font-bold text-trust-navy mb-3 flex items-start sm:items-center">
                    <span className="text-earth-gold mr-2 sm:mr-3 mt-1 sm:mt-0">■</span>
                    <span className="break-words">Site Management</span>
                  </h5>
                  <p className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed">Multi-site operations, health and safety protocols, quality assurance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Foundation - Enhanced */}
          <div className="bg-gray-50 border-4 border-earth-gold rounded-xl p-10 text-center shadow-xl">
            <h4 className="text-3xl font-bold text-trust-navy mb-6">Partnership Foundation</h4>
            <p className="text-xl text-gray-800 max-w-5xl mx-auto leading-relaxed font-medium">
              20+ years Afro Shamans operations with 25-30 core families. Deep mineral expertise rooted in generations of metalworking knowledge. 
              Established UK-Tanzania business relationships delivering extraordinary returns while transforming communities.
            </p>
          </div>


        </div>

        {/* Site Overview - Smaller Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <img 
              src={coverImage} 
              alt="Authentic Mbesa Copper Mine wide shot - our actual mining site in Southern Tanzania" 
              className="rounded-xl shadow-lg w-full h-64 object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Card className="text-center">
                <CardContent className="p-3">
                  <MapPin className="h-6 w-6 text-earth-gold mx-auto mb-1" />
                  <div className="text-lg font-bold text-earth-gold">Mbesa</div>
                  <div className="text-xs text-gray-600">Southern Tanzania</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-3">
                  <Users className="h-6 w-6 text-forest-green mx-auto mb-1" />
                  <div className="text-lg font-bold text-forest-green">25-30</div>
                  <div className="text-xs text-gray-600">Core Families</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">Transformation Through Partnership</h3>
            <p className="text-white mb-6 leading-relaxed text-lg">
              <strong>Over 1.5 million Tanzanians depend on mining</strong>, yet 80% work in unregulated, 
              dangerous conditions. Our partnership doesn't just extract copper - we extract potential, 
              transforming artisanal operations into sustainable, professional businesses that benefit entire communities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-earth-gold hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-earth-gold text-trust-navy p-2 rounded-full flex-shrink-0">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-earth-gold mb-1">{challenge.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                          <p className="text-xs text-forest-green font-medium">
                            ✓ {challenge.solution}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>



        {/* Environmental & Social Impact */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-forest-green text-white">
            <CardContent className="p-8 text-center">
              <Leaf className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Environmental Commitment</h3>
              <p className="leading-relaxed">
                Sustainable mining practices with proper waste management, water treatment systems 
                and land rehabilitation to preserve the copper belt ecosystem for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-premium-gold text-white">
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
    </section>
  );
}