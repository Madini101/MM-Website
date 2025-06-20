import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Cog, Scale, TrendingUp, DollarSign, Users, Shield, Leaf, CheckCircle, Target, ArrowUpRight, Wrench, Truck, Factory, Building, Zap, Globe, Settings, HardHat, Gem, Handshake, Star } from "lucide-react";
import investmentTiersImage from "@assets/Investment Tiers.jpeg";
import financeProjectionsImage from "@assets/Finance projections, Market Cap, Financial Breakdown.jpeg";
import riskMitigationImage from "@assets/Risk, Mitigation, ECG Chart.jpeg";

export default function Financials() {
  // Removed placeholder revenue projections - using authentic data only

  // Use of funds breakdown based on authentic operational requirements from proposals
  const useOfFunds = [
    { category: "Mining Equipment & Machinery", percentage: "40%", description: "Heavy machinery, processing equipment, safety systems" },
    { category: "Mine Site Setup & Infrastructure", percentage: "25%", description: "Site preparation, roads, power, water systems" },
    { category: "Working Capital & Operations", percentage: "20%", description: "Initial operational expenses, payroll, logistics" },
    { category: "Community Development Programs", percentage: "10%", description: "Schools, healthcare, clean water initiatives" },
    { category: "Legal, Admin & Contingency", percentage: "5%", description: "Regulatory compliance, contingency reserves" },
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
                  <div className="text-2xl font-bold text-white mb-1">$5M</div>
                  <div className="text-sm text-white">Total Target Raise</div>
                </div>
                <div className="text-center border border-earth-gold rounded p-4">
                  <div className="text-2xl font-bold text-white mb-1">£250K</div>
                  <div className="text-sm text-white">SEIS Allocation</div>
                </div>
                <div className="text-center border border-earth-gold rounded p-4">
                  <div className="text-2xl font-bold text-white mb-1">20+ years</div>
                  <div className="text-sm text-white">Mining Experience</div>
                </div>
                <div className="text-center border border-earth-gold rounded p-4">
                  <div className="text-2xl font-bold text-white mb-1">Variable</div>
                  <div className="text-sm text-white">Revenue Timeline</div>
                </div>
              </div>
              
              <div className="bg-gray-700 border border-earth-gold rounded-lg p-4">
                <h4 className="font-bold text-white mb-3">Use of Funds Breakdown</h4>
                <div className="space-y-3 text-sm">
                  {useOfFunds.map((fund, index) => (
                    <div key={index} className="border-b border-gray-600 pb-2 last:border-b-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-white">{fund.category}</span>
                        <span className="font-bold text-earth-gold">{fund.percentage}</span>
                      </div>
                      <p className="text-xs text-gray-300">{fund.description}</p>
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
                Investment Tier Structure
              </CardTitle>
              <p className="text-center text-gray-300 mt-2">
                Two distinct pathways for UK investors
              </p>
            </CardHeader>
            <CardContent className="p-8 bg-trust-navy">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* SEIS Tier */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-copper to-rich-copper p-8 rounded-lg text-white">
                    <div className="text-center mb-6">
                      <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">SEIS Investment</h3>
                      <p className="text-sm opacity-90">Individual Investors</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">£5,000 - £200,000</div>
                        <p className="text-sm opacity-90">Per individual investor</p>
                        <p className="text-xs opacity-75">Above £200,000: Tailored approach</p>
                      </div>
                      
                      <div className="bg-white bg-opacity-10 p-4 rounded">
                        <h4 className="font-bold mb-2">Tax Benefits</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 50% immediate tax relief</li>
                          <li>• 100% CGT exemption after 3 years</li>
                          <li>• Loss relief protection</li>
                          <li>• Inheritance tax benefits</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white bg-opacity-10 p-4 rounded">
                        <h4 className="font-bold mb-2">Target Details</h4>
                        <ul className="text-sm space-y-1">
                          <li>• £250k total UK SEIS raise</li>
                          <li>• HMRC pre-approved structure</li>
                          <li>• Investment opportunity potential</li>
                          <li>• 3-5 year investment horizon</li>
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
                        <div className="text-3xl font-bold">$100,000+</div>
                        <p className="text-sm opacity-90">Institutional minimum</p>
                      </div>
                      
                      <div className="bg-white bg-opacity-10 p-4 rounded">
                        <h4 className="font-bold mb-2">Strategic Benefits</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Direct equity participation</li>
                          <li>• Board representation rights</li>
                          <li>• Enhanced profit sharing</li>
                          <li>• First access to expansion</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white bg-opacity-10 p-4 rounded">
                        <h4 className="font-bold mb-2">US Market Momentum</h4>
                        <ul className="text-sm space-y-1">
                          <li>• $5M total raise target</li>
                          <li>• Key Capital partnership</li>
                          <li>• GlobalCapitalista network</li>
                          <li>• June-July timeline</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Projections Table */}
        <div className="mb-12">
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-copper text-center">
                5-Year Financial Projections
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Conservative projections based on operational capabilities and market analysis
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {/* Revenue Projections Table */}
              <div className="overflow-x-auto mb-8">
                <div className="bg-trust-navy rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-6 text-center">Madini Moyoni P&L Projections ($M USD)</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-earth-gold">
                          <th className="text-left py-3 px-4 text-white font-bold">Revenue Streams</th>
                          <th className="text-center py-3 px-4 text-earth-gold font-bold">Y1</th>
                          <th className="text-center py-3 px-4 text-earth-gold font-bold">Y2</th>
                          <th className="text-center py-3 px-4 text-earth-gold font-bold">Y3</th>
                          <th className="text-center py-3 px-4 text-earth-gold font-bold">Y4</th>
                          <th className="text-center py-3 px-4 text-earth-gold font-bold">Y5</th>
                          <th className="text-center py-3 px-4 text-earth-gold font-bold">5Y Total</th>
                        </tr>
                      </thead>
                      <tbody className="text-white">
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium">Copper Ore (20% grade)</td>
                          <td className="text-center py-3 px-4">$1.4</td>
                          <td className="text-center py-3 px-4">$2.6</td>
                          <td className="text-center py-3 px-4">$3.3</td>
                          <td className="text-center py-3 px-4">$3.4</td>
                          <td className="text-center py-3 px-4">$3.6</td>
                          <td className="text-center py-3 px-4 font-bold">$14.2</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium">Copper Concentrate (20% grade)</td>
                          <td className="text-center py-3 px-4">$2.7</td>
                          <td className="text-center py-3 px-4">$7.1</td>
                          <td className="text-center py-3 px-4">$10.0</td>
                          <td className="text-center py-3 px-4">$13.1</td>
                          <td className="text-center py-3 px-4">$13.8</td>
                          <td className="text-center py-3 px-4 font-bold">$46.8</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium">Gold and Silver</td>
                          <td className="text-center py-3 px-4">$0.0</td>
                          <td className="text-center py-3 px-4">$3.0</td>
                          <td className="text-center py-3 px-4">$4.2</td>
                          <td className="text-center py-3 px-4">$5.3</td>
                          <td className="text-center py-3 px-4">$5.6</td>
                          <td className="text-center py-3 px-4 font-bold">$18.2</td>
                        </tr>
                        <tr className="border-b-2 border-earth-gold bg-yellow-100">
                          <td className="py-3 px-4 font-bold text-trust-navy">Total Revenue</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$4.1</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$12.7</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$17.5</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$21.8</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$22.9</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$79.1</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-red-300">Operating Costs</td>
                          <td className="text-center py-3 px-4 text-red-300">$7.0</td>
                          <td className="text-center py-3 px-4 text-red-300">$5.8</td>
                          <td className="text-center py-3 px-4 text-red-300">$7.2</td>
                          <td className="text-center py-3 px-4 text-red-300">$8.7</td>
                          <td className="text-center py-3 px-4 text-red-300">$10.7</td>
                          <td className="text-center py-3 px-4 font-bold text-red-300">$39.5</td>
                        </tr>
                        <tr className="border-b-2 border-earth-gold bg-green-900 bg-opacity-30">
                          <td className="py-3 px-4 font-bold text-green-300">Operating Profit</td>
                          <td className="text-center py-3 px-4 font-bold text-red-300">-$2.9</td>
                          <td className="text-center py-3 px-4 font-bold text-green-300">$6.9</td>
                          <td className="text-center py-3 px-4 font-bold text-green-300">$10.3</td>
                          <td className="text-center py-3 px-4 font-bold text-green-300">$13.1</td>
                          <td className="text-center py-3 px-4 font-bold text-green-300">$12.2</td>
                          <td className="text-center py-3 px-4 font-bold text-green-300">$39.6</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium">Gross Margin</td>
                          <td className="text-center py-3 px-4 text-red-300">-70%</td>
                          <td className="text-center py-3 px-4 text-green-300">54%</td>
                          <td className="text-center py-3 px-4 text-green-300">59%</td>
                          <td className="text-center py-3 px-4 text-green-300">60%</td>
                          <td className="text-center py-3 px-4 text-green-300">53%</td>
                          <td className="text-center py-3 px-4 font-bold text-green-300">50%</td>
                        </tr>
                        <tr className="bg-blue-100">
                          <td className="py-3 px-4 font-bold text-trust-navy">Market Capitalisation</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$20.0</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$45.6</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$65.5</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$83.0</td>
                          <td className="text-center py-3 px-4 font-bold text-trust-navy">$81.2</td>
                          <td className="text-center py-3 px-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Key Financial Highlights - Enhanced */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-trust-navy mb-6 text-center">Key Investment Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-trust-navy border-2 border-earth-gold p-8 rounded-xl text-center shadow-xl">
                    <div className="text-4xl font-bold text-earth-gold mb-3">$79.1M</div>
                    <div className="text-white text-lg font-medium mb-2">Total 5-Year Revenue</div>
                    <div className="text-gray-300 text-sm">Copper ore, concentrate, and precious metals</div>
                  </div>
                  <div className="bg-trust-navy border-2 border-earth-gold p-8 rounded-xl text-center shadow-xl">
                    <div className="text-4xl font-bold text-earth-gold mb-3">$39.6M</div>
                    <div className="text-white text-lg font-medium mb-2">Total Operating Profit</div>
                    <div className="text-gray-300 text-sm">After operational costs and investments</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white border-2 border-trust-navy p-8 rounded-xl text-center shadow-xl">
                    <div className="text-4xl font-bold text-trust-navy mb-3">50%</div>
                    <div className="text-trust-navy text-lg font-medium mb-2">Average Gross Margin</div>
                    <div className="text-gray-600 text-sm">Sustainable profitability from Y2 onwards</div>
                  </div>
                  <div className="bg-white border-2 border-trust-navy p-8 rounded-xl text-center shadow-xl">
                    <div className="text-4xl font-bold text-trust-navy mb-3">$81.2M</div>
                    <div className="text-trust-navy text-lg font-medium mb-2">Year 5 Market Cap</div>
                    <div className="text-gray-600 text-sm">Projected company valuation</div>
                  </div>
                </div>
              </div>

              {/* Revenue Growth Chart - Mobile Optimized */}
              <div className="bg-trust-navy border-2 border-earth-gold p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">5-Year Revenue Growth</h4>
                
                <div className="bg-white bg-opacity-5 p-3 sm:p-4 lg:p-6 rounded-lg">
                  <div className="flex items-end justify-between h-40 sm:h-48 lg:h-60 mb-4 sm:mb-6 gap-1 sm:gap-2">
                    {/* Y1: $4.1M - 18% of max (4.1/22.9) */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-full bg-red-500 rounded-t-md mb-1 sm:mb-2 flex items-end justify-center text-white text-xs font-bold py-1" style={{height: '29px'}}>
                        <span className="hidden sm:inline">Y1</span>
                        <span className="sm:hidden">1</span>
                      </div>
                      <div className="text-white font-bold text-xs sm:text-sm break-words text-center">$4.1M</div>
                    </div>
                    
                    {/* Y2: $12.7M - 55% of max (12.7/22.9) */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-full bg-orange-500 rounded-t-md mb-1 sm:mb-2 flex items-end justify-center text-white text-xs font-bold py-1" style={{height: '88px'}}>
                        <span className="hidden sm:inline">Y2</span>
                        <span className="sm:hidden">2</span>
                      </div>
                      <div className="text-white font-bold text-xs sm:text-sm break-words text-center">$12.7M</div>
                    </div>
                    
                    {/* Y3: $17.5M - 76% of max (17.5/22.9) */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-full bg-earth-gold rounded-t-md mb-1 sm:mb-2 flex items-end justify-center text-trust-navy text-xs font-bold py-1" style={{height: '122px'}}>
                        <span className="hidden sm:inline">Y3</span>
                        <span className="sm:hidden">3</span>
                      </div>
                      <div className="text-white font-bold text-xs sm:text-sm break-words text-center">$17.5M</div>
                    </div>
                    
                    {/* Y4: $21.8M - 95% of max (21.8/22.9) */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-full bg-amber-500 rounded-t-md mb-1 sm:mb-2 flex items-end justify-center text-white text-xs font-bold py-1" style={{height: '152px'}}>
                        <span className="hidden sm:inline">Y4</span>
                        <span className="sm:hidden">4</span>
                      </div>
                      <div className="text-white font-bold text-xs sm:text-sm break-words text-center">$21.8M</div>
                    </div>
                    
                    {/* Y5: $22.9M - 100% of max */}
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-full bg-rose-500 rounded-t-md mb-1 sm:mb-2 flex items-end justify-center text-white text-xs font-bold py-1" style={{height: '160px'}}>
                        <span className="hidden sm:inline">Y5</span>
                        <span className="sm:hidden">5</span>
                      </div>
                      <div className="text-white font-bold text-xs sm:text-sm break-words text-center">$22.9M</div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-3 sm:mt-4">
                    <div className="text-earth-gold font-bold text-lg sm:text-xl mb-2">458% Revenue Growth</div>
                    <div className="text-white text-sm sm:text-base">From $4.1M to $22.9M over 5 years</div>
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
                Four distinct pathways with verified return projections
              </p>
            </CardHeader>
            <CardContent className="p-8">
              
              {/* Complete Investment Returns Table */}
              <div className="overflow-x-auto mb-8">
                <div className="bg-trust-navy rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-6 text-center">
                    <TrendingUp className="inline-block mr-2 h-6 w-6" />
                    MML-ASCL Joint Venture: Investment Returns
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-earth-gold">
                          <th className="text-left py-3 px-4 text-white font-bold"></th>
                          <th className="text-center py-3 px-4 text-earth-gold font-bold">
                            <Target className="inline-block mr-1 h-4 w-4" />
                            Equity Only (incl EIS)
                          </th>
                          <th className="text-center py-3 px-4 text-earth-gold font-bold">
                            <DollarSign className="inline-block mr-1 h-4 w-4" />
                            Equity + % GP Dividend
                          </th>
                          <th className="text-center py-3 px-4 text-white font-bold bg-blue-600 rounded">
                            <Shield className="inline-block mr-1 h-4 w-4" />
                            SEIS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Equity Share</td>
                          <td className="text-center py-3 px-4 text-white font-bold">30%</td>
                          <td className="text-center py-3 px-4 text-white font-bold">20%</td>
                          <td className="text-center py-3 px-4 bg-earth-gold text-trust-navy font-bold text-base">3%</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Dividends</td>
                          <td className="text-center py-3 px-4 text-white font-medium">N/A</td>
                          <td className="text-center py-3 px-4 text-white text-sm font-medium">20% of profit share (8% GP) per annum</td>
                          <td className="text-center py-3 px-4 bg-earth-gold text-trust-navy font-bold">N/A</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Exit (years)</td>
                          <td className="text-center py-3 px-4 text-white font-bold">5+</td>
                          <td className="text-center py-3 px-4 text-white font-bold">5+</td>
                          <td className="text-center py-3 px-4 bg-earth-gold text-trust-navy font-bold text-base">3+</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Maximum Investment</td>
                          <td className="text-center py-3 px-4 text-white font-bold">$5,000,000</td>
                          <td className="text-center py-3 px-4 text-white font-bold">$5,000,000</td>
                          <td className="text-center py-3 px-4 bg-earth-gold text-trust-navy font-bold text-base">$330,000</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Example Investment Period (Years)</td>
                          <td className="text-center py-3 px-4 text-white font-bold">5</td>
                          <td className="text-center py-3 px-4 text-white font-bold">5</td>
                          <td className="text-center py-3 px-4 bg-earth-gold text-trust-navy font-bold text-base">3</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Example Gross Investment</td>
                          <td className="text-center py-3 px-4 text-white font-bold">$5,000,000</td>
                          <td className="text-center py-3 px-4 text-white font-bold">$5,000,000</td>
                          <td className="text-center py-3 px-4 bg-earth-gold text-trust-navy font-bold text-base">$330,000</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Example Total Dividends</td>
                          <td className="text-center py-3 px-4 text-white font-medium">N/A</td>
                          <td className="text-center py-3 px-4 text-green-200 font-bold text-base">$3,401,220</td>
                          <td className="text-center py-3 px-4 bg-earth-gold text-trust-navy font-bold">N/A</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Example Equity Exit Value</td>
                          <td className="text-center py-3 px-4 text-cyan-200 font-bold text-base">$24,359,560</td>
                          <td className="text-center py-3 px-4 text-cyan-200 font-bold text-base">$16,239,707</td>
                          <td className="text-center py-3 px-4 bg-earth-gold text-trust-navy font-bold text-base">$1,966,488</td>
                        </tr>
                        <tr className="border-b-2 border-earth-gold bg-earth-gold bg-opacity-30">
                          <td className="py-4 px-4 font-bold text-trust-navy text-base">Example Total Return</td>
                          <td className="text-center py-4 px-4 font-bold text-trust-navy text-xl">$24,359,560</td>
                          <td className="text-center py-4 px-4 font-bold text-trust-navy text-xl">$19,640,927</td>
                          <td className="text-center py-4 px-4 font-bold text-trust-navy text-xl bg-earth-gold">$1,966,488</td>
                        </tr>
                        <tr className="border-b border-gray-600">
                          <td className="py-3 px-4 font-medium text-earth-gold">Total ROI Multiple</td>
                          <td className="text-center py-3 px-4 text-yellow-200 font-bold text-xl">4.9x</td>
                          <td className="text-center py-3 px-4 text-yellow-200 font-bold text-xl">3.9x</td>
                          <td className="text-center py-3 px-4 bg-earth-gold text-trust-navy font-bold text-xl">6.0x</td>
                        </tr>
                        <tr className="bg-green-800 bg-opacity-50">
                          <td className="py-4 px-4 font-bold text-earth-gold text-base">Example IRR</td>
                          <td className="text-center py-4 px-4 font-bold text-white text-2xl">37%</td>
                          <td className="text-center py-4 px-4 font-bold text-white text-2xl">34%</td>
                          <td className="text-center py-4 px-4 font-bold text-trust-navy text-2xl bg-earth-gold">81%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Key Investment Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-earth-gold p-6 rounded-xl text-center shadow-lg">
                  <Shield className="h-10 w-10 text-trust-navy mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-trust-navy mb-2">SEIS Advantage</h4>
                  <div className="text-3xl font-bold text-trust-navy mb-1">81% IRR</div>
                  <div className="text-trust-navy text-sm font-medium">Highest return plus 50% tax relief</div>
                  <div className="mt-3 bg-trust-navy p-2 rounded">
                    <div className="text-white text-sm font-bold">£125,000 net investment</div>
                    <div className="text-gray-200 text-xs">(£250,000 - 50% HMRC rebate)</div>
                  </div>
                </div>
                
                <div className="bg-trust-navy p-6 rounded-xl text-center border-2 border-earth-gold shadow-lg">
                  <Target className="h-10 w-10 text-earth-gold mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-white mb-2">Maximum Equity</h4>
                  <div className="text-3xl font-bold text-earth-gold mb-1">4.9x ROI</div>
                  <div className="text-gray-200 text-sm font-medium">Pure equity upside with EIS benefits</div>
                  <div className="mt-3 bg-earth-gold bg-opacity-20 p-2 rounded">
                    <div className="text-white text-sm font-bold">$24,359,560 total return</div>
                    <div className="text-gray-200 text-xs">30% equity share</div>
                  </div>
                </div>
                
                <div className="bg-white border-2 border-trust-navy p-6 rounded-xl text-center shadow-lg">
                  <DollarSign className="h-10 w-10 text-trust-navy mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-trust-navy mb-2">Income Plus Growth</h4>
                  <div className="text-3xl font-bold text-trust-navy mb-1">$3.4M</div>
                  <div className="text-gray-700 text-sm font-medium">Dividends over 5 years plus equity exit</div>
                  <div className="mt-3 bg-trust-navy p-2 rounded">
                    <div className="text-white text-sm font-bold">20% annual profit share</div>
                    <div className="text-gray-200 text-xs">8% gross profit distribution</div>
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
                    <span className="font-bold text-trust-navy">SEIS & EIS:</span>
                    <span className="text-gray-700"> Common shares, 3-5 year exit, up to 50% tax rebate (SEIS) or 30% (EIS)</span>
                  </div>
                  <div>
                    <span className="font-bold text-trust-navy">Strategic:</span>
                    <span className="text-gray-700"> Convertible preferred shares, 5-year conversion option at fair market value</span>
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
                        <span className="text-white font-semibold">$5M</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-600 pb-2">
                        <span className="text-gray-300">SEIS allocation:</span>
                        <span className="text-white font-semibold">£250K</span>
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

        {/* Comprehensive Risk Mitigation Framework */}
        <Card className="bg-trust-navy shadow-lg border-2 border-earth-gold">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white text-center">
              Risk Mitigation & Due Diligence Framework
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="bg-white bg-opacity-10 border border-earth-gold rounded-lg p-4 mb-6">
              <p className="text-center text-white text-sm">
                <span className="font-semibold text-earth-gold">Investment Notice:</span> This is a high-risk investment opportunity. We believe we have comprehensively mitigated all major operational and market risks through our detailed framework below.
              </p>
            </div>

            <div className="space-y-6">
              {risks.map((risk, index) => (
                <div key={index} className="bg-white bg-opacity-10 border-2 border-earth-gold hover:border-earth-gold transition-colors rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <div className="bg-earth-gold text-trust-navy rounded-full w-10 h-10 flex items-center justify-center mr-4">
                      <risk.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-white text-lg mb-2">{risk.title}</h5>
                      <p className="text-white mb-3">{risk.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-3">
                    <h6 className="font-semibold text-earth-gold text-sm mb-2">How We've Mitigated This Risk:</h6>
                    <p className="text-white text-sm leading-relaxed">{risk.mitigation}</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <h6 className="font-semibold text-earth-gold text-sm mb-2">Supporting Evidence:</h6>
                    <p className="text-white text-sm leading-relaxed">{risk.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white bg-opacity-10 border-2 border-earth-gold rounded-lg p-6">
              <h5 className="font-bold text-white text-lg mb-4 text-center">Risk Mitigation Summary</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold text-earth-gold mb-3">Technical & Operational</h6>
                  <ul className="text-white text-sm space-y-2">
                    <li>• Mechanical sorting for 4-5% purity ore processing</li>
                    <li>• Fail-over capability with duplicate heavy machinery</li>
                    <li>• On-site mining experts for project management</li>
                    <li>• Weather-resistant infrastructure development</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold text-earth-gold mb-3">Safety & Community</h6>
                  <ul className="text-white text-sm space-y-2">
                    <li>• International mining safety consultant</li>
                    <li>• Anna Tibaijuka advisory oversight with transparency</li>
                    <li>• Village elder community Trustee with constant reviews</li>
                    <li>• Secure supply chain with trusted agents</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
