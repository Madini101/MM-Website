import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Cog, Scale, TrendingUp, DollarSign, Users, Shield, Leaf, CheckCircle, Target, ArrowUpRight, Wrench, Truck, Factory, Building, Zap, Globe, Settings, HardHat, Gem, Handshake, Star } from "lucide-react";
import investmentTiersImage from "@assets/Investment Tiers.jpeg";
import financeProjectionsImage from "@assets/Finance projections, Market Cap, Financial Breakdown.jpeg";
import riskMitigationImage from "@assets/Risk, Mitigation, ECG Chart.jpeg";

export default function Financials() {
  // Removed placeholder revenue projections - using authentic data only

  // Investment purpose from authentic proposal documents
  const investmentPurpose = [
    { category: "Mining Operations", description: "Equipment purchase and operational setup based on established mining expertise" },
    { category: "Copper Processing", description: "Development of concentration plant capabilities within 6 months of investment" },
    { category: "Community Partnership", description: "Local development initiatives and community benefit-sharing programs" },
    { category: "Market Access", description: "Leveraging established customer relationships and proven logistics networks" }
  ];

  const risks = [
    {
      title: "Copper Ore Purity Risk",
      description: "Copper ore purity too low for efficient processing",
      mitigation: "Mechanical sorting will allow us to process quickly the high quantities of 4-5% purity ore that we know pervades the African Copper Belt, rather than having to chase copper seams. We will invest in additional geological surveys early on to drive the most efficient mining plan.",
      details: "Proven 4-5% purity ore identified across the African Copper Belt region. Mechanical sorting technology enables efficient processing of large quantities without chasing individual seams.",
      icon: AlertTriangle,
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      title: "Operational Efficiency Risk",
      description: "Cannot operate mine efficiently with current methods",
      mitigation: "Mechanical sorting will allow us to process quickly high quantities of 4-5% purity ore. We will have mining experts on-site to project manage and train ASCL personnel in using the advanced machinery and setting up the mine.",
      details: "On-site mining experts providing project management and training. Advanced machinery setup with comprehensive personnel training programs for efficient operations.",
      icon: Cog,
      color: "text-orange-600 bg-orange-100"
    },
    {
      title: "Weather & Seasonal Risk",
      description: "The Rainy Season(s) disrupting mining operations",
      mitigation: "We will build roads linking the mine-site to the main road, construct hard-standing areas for vehicles to move freely on-site, invest in dewatering systems (pumps and irrigation), a covered warehouse for stockpiling ore for processing undercover during the rains.",
      details: "Infrastructure development including access roads, vehicle movement areas, dewatering systems, and covered warehouse facilities for year-round operations.",
      icon: Scale,
      color: "text-blue-600 bg-blue-100"
    },
    {
      title: "Equipment Failure Risk",
      description: "Machinery and equipment failure causing operational disruption",
      mitigation: "We have a 'fail-over' capability in place for heavy plant and machinery, by operating two of most of the vehicles, plus we will have an on-site repair capability.",
      details: "Redundant equipment systems with duplicate heavy machinery and vehicles. On-site repair capabilities ensuring minimal downtime and operational continuity.",
      icon: HardHat,
      color: "text-purple-600 bg-purple-100"
    },
    {
      title: "Health & Safety Risk",
      description: "Health and safety incidents affecting personnel and operations",
      mitigation: "We will employ a consultant with a track record of working with mining corporations worldwide and knowledge of standards in Europe & other highly industrialised countries, and we will carry out regular audits and risk assessments.",
      details: "International mining safety consultant with global corporate experience. Regular audits and risk assessments following European and international industrial standards.",
      icon: Shield,
      color: "text-red-600 bg-red-100"
    },
    {
      title: "Supply Chain Risk",
      description: "Shortage of mining consumables affecting operations",
      mitigation: "We will stockpile fuel on-site in fuel tanks to cover short term unavailability. We will engage a trusted transportation agent and clearing agent, plus invest in the technology and personnel to ensure that we have a secure mine-site and supply chain.",
      details: "On-site fuel storage tanks for operational continuity. Trusted transportation and clearing agents with secure supply chain technology and personnel.",
      icon: Truck,
      color: "text-indigo-600 bg-indigo-100"
    },
    {
      title: "Security & Theft Risk",
      description: "Theft and security breaches affecting assets and operations",
      mitigation: "We will engage a trusted transportation agent and clearing agent, plus invest in the technology and personnel to ensure that we have a secure mine-site and supply chain.",
      details: "Comprehensive security technology and personnel deployment. Trusted agent partnerships ensuring secure transportation and logistics throughout the supply chain.",
      icon: Users,
      color: "text-gray-600 bg-gray-100"
    },
    {
      title: "Social Impact Risk",
      description: "Not delivering socio-economic benefits to local community",
      mitigation: "We will appoint a village elder as a Trustee to ensure funds are allocated for intended purposes and that the local community is at the heart of our local social, economic and infrastructural projects' decision-making processes. Anna Tibaijuka from our advisory team provides additional oversight with constant reviews and transparency measures.",
      details: "Village elder appointed as community Trustee for fund allocation oversight. Anna Tibaijuka advisory guidance ensuring transparent delivery. Community-centered decision-making with constant reviews and accountability measures.",
      icon: Handshake,
      color: "text-green-600 bg-green-100"
    }
  ];

  return (
    <section id="financials" className="py-20 bg-trust-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Financial Data</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <strong>Copper is one of the most in-demand precious metals globally</strong>, with demand predicted to 
            outstrip supply for years to come. Our financial models are based on current LME copper pricing, 
            proven reserves, and operational scaling from artisanal to mechanised production.
          </p>
        </div>

        {/* Key Metrics Only */}
        <div className="mb-12">
          <Card className="bg-gray-800 border border-earth-gold shadow-sm max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white text-center">
                Key Investment Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center border border-earth-gold rounded p-4">
                  <div className="text-2xl font-bold text-white mb-1">$2M</div>
                  <div className="text-sm text-white">Strategic Investment</div>
                </div>
                <div className="text-center border border-earth-gold rounded p-4">
                  <div className="text-2xl font-bold text-white mb-1">9.9x</div>
                  <div className="text-sm text-white">Return Multiple</div>
                </div>
                <div className="text-center border border-earth-gold rounded p-4">
                  <div className="text-2xl font-bold text-white mb-1">20+ years</div>
                  <div className="text-sm text-white">Mining Experience</div>
                </div>
                <div className="text-center border border-earth-gold rounded p-4">
                  <div className="text-2xl font-bold text-white mb-1">64%</div>
                  <div className="text-sm text-white">IRR Projection</div>
                </div>
              </div>
              
              <div className="bg-gray-700 border border-earth-gold rounded-lg p-4">
                <h4 className="font-bold text-white mb-3">Investment Purpose</h4>
                <div className="space-y-3 text-sm">
                  {investmentPurpose.map((purpose, index) => (
                    <div key={index} className="border-b border-gray-600 pb-2 last:border-b-0">
                      <div className="mb-1">
                        <span className="font-medium text-earth-gold">{purpose.category}</span>
                      </div>
                      <p className="text-xs text-gray-300">{purpose.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investment Tiers Visual */}
        <div className="mb-12">
          <Card className="bg-trust-navy shadow-xl border-2 border-copper">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">
                Investment Structure Overview
              </CardTitle>
              <p className="text-center text-gray-300 mt-2">
                Equity partnership with dividend distributions
              </p>
            </CardHeader>
            <CardContent className="p-8 bg-trust-navy">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Equity Investment */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-copper to-rich-copper p-8 rounded-lg text-white">
                    <div className="text-center mb-6">
                      <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Equity Partnership</h3>
                      <p className="text-sm opacity-90">Direct Ownership</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">$50,000 - $2,000,000</div>
                        <p className="text-sm opacity-90">Investment Range</p>
                        <p className="text-xs opacity-75">$25,000 increments</p>
                      </div>
                      
                      <div className="bg-white bg-opacity-10 p-4 rounded">
                        <h4 className="font-bold mb-2">Investment Benefits</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 20% equity share ownership</li>
                          <li>• 20% profit dividends (8% GP) per annum</li>
                          <li>• 9.9x return target over 5 years (Equity Only)</li>
                          <li>• 64% annual IRR target</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white bg-opacity-10 p-4 rounded">
                        <h4 className="font-bold mb-2">Structure Details</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Direct mining operations ownership</li>
                          <li>• Transparent exit strategy</li>
                          <li>• Annual dividend distributions</li>
                          <li>• 5+ year investment horizon</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategic Tier */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-forest-green to-sage-green p-8 rounded-lg text-white">
                    <div className="text-center mb-6">
                      <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Strategic Investment</h3>
                      <p className="text-sm opacity-90">Institutional & HNW</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">$250,000+</div>
                        <p className="text-sm opacity-90">Enhanced Partnership</p>
                      </div>
                      
                      <div className="bg-white bg-opacity-10 p-4 rounded">
                        <h4 className="font-bold mb-2">Strategic Benefits</h4>
                        <ul className="text-sm space-y-1">
                          <li>• All equity benefits plus VIP treatment</li>
                          <li>• Enhanced investor engagement</li>
                          <li>• Board observer roles</li>
                          <li>• First access to expansion</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white bg-opacity-10 p-4 rounded">
                        <h4 className="font-bold mb-2">Strategic Focus</h4>
                        <ul className="text-sm space-y-1">
                          <li>• $2M total investment target</li>
                          <li>• UK, US, Cayman Islands investors</li>
                          <li>• Sustainable mining operations</li>
                          <li>• Community development integration</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compact Investment Summary */}
        <div className="mb-12">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-copper text-center flex items-center justify-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Investment Overview
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Essential metrics and operational foundation
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Minimal Revenue Summary */}
              <div className="bg-trust-navy border border-earth-gold p-3 rounded-lg">
                <div className="flex items-center justify-between text-white text-sm">
                  <div>
                    <div className="font-bold text-earth-gold">5-Year Trajectory</div>
                    <div className="text-xs">$4.1M → $22.9M</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">$87.1M</div>
                    <div className="text-xs text-green-400">Total Revenue</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">458%</div>
                    <div className="text-xs">Growth</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investment Returns Analysis */}
        <div className="mb-12">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-copper text-center flex items-center justify-center">
                <TrendingUp className="mr-3 h-7 w-7" />
                Investment Returns & Exit Strategies
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Verified investment structure with authentic return projections
              </p>
            </CardHeader>
            <CardContent className="p-8">
              
              {/* Complete Investment Returns Table */}
              <div className="overflow-x-auto mb-8">
                <div className="bg-trust-navy rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-6 text-center">
                    <TrendingUp className="inline-block mr-2 h-6 w-6" />
                    Madini Moyoni: Investment Returns
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-earth-gold">
                          <th className="text-left py-3 px-4 text-white font-bold"></th>
                          <th className="text-center py-3 px-4 text-earth-gold font-bold">
                            <DollarSign className="inline-block mr-1 h-4 w-4" />
                            Equity + Dividend
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Equity Share</td>
                          <td className="text-center py-3 px-4 text-white font-bold">20%</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Dividends</td>
                          <td className="text-center py-3 px-4 text-white text-sm font-medium">8% GP dividends per annum</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Exit (years)</td>
                          <td className="text-center py-3 px-4 text-white font-bold">5+</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Maximum Investment</td>
                          <td className="text-center py-3 px-4 text-white font-bold">$2,000,000</td>
                        </tr>

                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Total ROI Multiple</td>
                          <td className="text-center py-3 px-4 text-yellow-200 font-bold text-xl">9.9x</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Key Investment Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8 max-w-2xl mx-auto">
                <div className="bg-trust-navy p-8 rounded-xl text-center border-2 border-earth-gold shadow-lg">
                  <DollarSign className="h-12 w-12 text-earth-gold mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-3">Equity + Dividend Investment</h4>
                  <div className="text-4xl font-bold text-earth-gold mb-2">9.9x ROI</div>
                  <div className="text-gray-200 text-lg font-medium mb-4">Maximum investment: $2M</div>
                  <div className="mt-4 bg-earth-gold bg-opacity-20 p-4 rounded-lg">
                    <div className="text-white text-base font-bold mb-2">20% equity share</div>
                    <div className="text-gray-200 text-sm">8% GP dividends per annum + equity exit after 5+ years</div>
                  </div>
                </div>
              </div>

              {/* Investment Notes - Compact */}
              <div className="bg-gray-50 border-l-4 border-earth-gold p-4 rounded-r-lg">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="h-4 w-4 text-earth-gold mr-2" />
                  <h4 className="font-bold text-trust-navy text-sm">Investment Structure Notes</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="font-bold text-trust-navy">Equity Partnership:</span>
                    <span className="text-gray-700"> Direct equity ownership, 5-year horizon, dividend potential</span>
                  </div>
                  <div>
                    <span className="font-bold text-trust-navy">Dividends:</span>
                    <span className="text-gray-700"> 8% GP dividends per annum with 5+ year equity exit strategy</span>
                  </div>
                  <div>
                    <span className="font-bold text-trust-navy">Risk:</span>
                    <span className="text-gray-700"> All returns are performance-based and not guaranteed</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Analysis & Investment Context */}
        <div className="mb-12">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-copper text-center">
                Market Analysis & Investment Context
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Financial projections based on LME copper pricing and proven operational capabilities
              </p>
            </CardHeader>
            <CardContent className="p-8">


              {/* Authentic Timeline from Investment Proposals */}
              <div className="mb-8 bg-trust-navy border-2 border-earth-gold p-8 rounded-xl shadow-lg">
                <h4 className="text-3xl font-bold text-white mb-6 text-center">Investment Implementation</h4>
                <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                  Authentic roadmap based on our operational capabilities and established partnerships
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-800 border border-earth-gold p-8 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-earth-gold rounded-full flex items-center justify-center mr-4">
                        <Settings className="h-6 w-6 text-trust-navy" />
                      </div>
                      <h5 className="text-xl font-bold text-white">Immediate Operations</h5>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Truck className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-base">Mining equipment procurement and deployment</span>
                      </div>
                      <div className="flex items-start">
                        <HardHat className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-base">Advanced mining equipment deployment</span>
                      </div>
                      <div className="flex items-start">
                        <Wrench className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-base">Copper ore extraction and processing</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 border border-earth-gold p-8 rounded-xl hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-earth-gold rounded-full flex items-center justify-center mr-4">
                        <TrendingUp className="h-6 w-6 text-trust-navy" />
                      </div>
                      <h5 className="text-xl font-bold text-white">Expansion Capabilities</h5>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Factory className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-base">Processing plant infrastructure development</span>
                      </div>
                      <div className="flex items-start">
                        <Gem className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-base">Gold and silver extraction capabilities</span>
                      </div>
                      <div className="flex items-start">
                        <Handshake className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-base">International market delivery partnerships</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Authentic Project Details from Proposals */}
              <div className="bg-gray-800 border-2 border-earth-gold p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-white mb-6 text-center">Project Development Overview</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-semibold text-earth-gold mb-4">Copper Mining Operations</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-gray-600 pb-2">
                        <span className="text-gray-300">Tanzania copper reserves:</span>
                        <span className="text-earth-gold font-semibold">1.5% of global</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-600 pb-2">
                        <span className="text-gray-300">Initial geological exploration:</span>
                        <span className="text-earth-gold font-semibold">Hundreds of thousands of tonnes</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-600 pb-2">
                        <span className="text-gray-300">Processing capability:</span>
                        <span className="text-earth-gold font-semibold">Copper cathodes & bars</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-earth-gold mb-4">Investment Structure</h5>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b border-gray-600 pb-2">
                        <span className="text-gray-300">Total funding target:</span>
                        <span className="text-white font-semibold">$2M</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-600 pb-2">
                        <span className="text-gray-300">Strategic allocation:</span>
                        <span className="text-white font-semibold">£150K</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-600 pb-2">
                        <span className="text-gray-300">Revenue timeline:</span>
                        <span className="text-white font-semibold">Based on operations</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-earth-gold">
                  <h5 className="text-lg font-semibold text-earth-gold mb-4 text-center">Key Operational Advantages</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">20+ years</div>
                      <div className="text-sm text-gray-300">Mining experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">Fair wages</div>
                      <div className="text-sm text-gray-300">Professional mining jobs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">25-30</div>
                      <div className="text-sm text-gray-300">Core mining team</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk mitigation content moved to Operations page */}

        {/* CTA after financials data */}
        <div className="text-center mt-12 bg-gray-50 border-2 border-gray-300 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-earth-gold mb-4">Ready to Review the Full Financial Picture?</h3>
          <p className="text-gray-700 mb-6">
            Get detailed investment documentation and discuss the complete financial framework with our team.
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-white border-2 border-black text-black hover:bg-gray-100 font-bold py-3 px-8 text-lg shadow-md"
          >
            Request Investment Details
          </Button>
        </div>
      </div>
    </section>
  );
}
