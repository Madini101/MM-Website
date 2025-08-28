import InvestmentCalculator from "@/components/investment-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Users, Target, Building, CheckCircle, ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Investors() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Hero - Direct Investors to Expandables */}
      <div className="bg-gradient-to-br from-trust-navy to-trust-navy/90 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Investment Opportunity</h1>
          <p className="text-xl text-gray-300 mb-6">
            Explore the 6 sections below to understand your returns and how we achieve them
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-earth-gold font-semibold text-lg">9.9x ROI • 64% IRR • $19.8M Total Returns</p>
            <p className="text-sm text-gray-300 mt-2">Click each section below for detailed financial data, graphs, and charts</p>
          </div>
        </div>
      </div>

      {/* 6 Key Expandable Elements - PRIMARY CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-trust-navy mb-6">What's In It For You</h2>
            <p className="text-xl text-gray-600">Click each section to explore the complete financial picture</p>
          </div>

          <div className="space-y-4">
            {/* 1. Financial Data */}
            <Card className="border-2 border-earth-gold/30 hover:border-earth-gold transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('financialData')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-earth-gold text-trust-navy rounded-lg flex items-center justify-center">
                      <DollarSign className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">Financial Data</h3>
                      <p className="text-gray-600">Core financial metrics: 9.9x ROI, 64% IRR, $19.8M total returns</p>
                    </div>
                  </div>
                  {expandedSections.financialData ? <ChevronDown className="h-6 w-6 text-earth-gold" /> : <ChevronRight className="h-6 w-6 text-earth-gold" />}
                </button>
                
                {expandedSections.financialData && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Complete Financial Overview</h4>
                      
                      {/* Key Metrics Cards */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-earth-gold/10 rounded-lg p-4 text-center border-l-4 border-earth-gold">
                          <div className="text-3xl font-bold text-trust-navy mb-1">9.9x</div>
                          <p className="text-earth-gold font-semibold text-sm">Return Multiple</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-center border-l-4 border-blue-400">
                          <div className="text-3xl font-bold text-trust-navy mb-1">64%</div>
                          <p className="text-blue-600 font-semibold text-sm">Example IRR</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center border-l-4 border-green-400">
                          <div className="text-3xl font-bold text-trust-navy mb-1">$19.8M</div>
                          <p className="text-green-600 font-semibold text-sm">Total Return</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 text-center border-l-4 border-purple-400">
                          <div className="text-3xl font-bold text-trust-navy mb-1">20%</div>
                          <p className="text-purple-600 font-semibold text-sm">Equity Share</p>
                        </div>
                      </div>

                      {/* Detailed Financial Data */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h5 className="font-bold text-earth-gold mb-4">Investment Details</h5>
                          <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-700">Example Investment Amount:</span>
                            <span className="font-bold text-earth-gold">$2,000,000</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-700">Example Total Return:</span>
                            <span className="font-bold text-earth-gold">$19,786,692</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-700">Investment Period:</span>
                            <span className="font-bold text-trust-navy">5+ years</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-700">Minimum Investment:</span>
                            <span className="font-bold text-trust-navy">$50,000</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h5 className="font-bold text-blue-600 mb-4">Return Breakdown</h5>
                          <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-700">Total Dividends (5 years):</span>
                            <span className="font-bold text-blue-600">$3,435,935</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-700">Equity Exit Value:</span>
                            <span className="font-bold text-green-600">$16,350,758</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-700">Annual GP Dividends:</span>
                            <span className="font-bold text-blue-600">8% per annum</span>
                          </div>
                          <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-700">Equity Share:</span>
                            <span className="font-bold text-trust-navy">20%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 2. Investment Structure Overview */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('structureOverview')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                      <Building className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">Investment Structure Overview</h3>
                      <p className="text-gray-600">How your investment works: equity participation plus GP dividends</p>
                    </div>
                  </div>
                  {expandedSections.structureOverview ? <ChevronDown className="h-6 w-6 text-blue-500" /> : <ChevronRight className="h-6 w-6 text-blue-500" />}
                </button>
                
                {expandedSections.structureOverview && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Madini Moyoni Equity + GP Dividend Structure</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-bold text-blue-600 mb-4">Investment Parameters</h5>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Minimum Investment:</span>
                              <span className="font-bold">$50,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Investment Increments:</span>
                              <span className="font-bold">$25,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Maximum Investment:</span>
                              <span className="font-bold">$2,000,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Exit Timeline:</span>
                              <span className="font-bold">5+ years</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-bold text-earth-gold mb-4">Return Mechanism</h5>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Equity Share:</span>
                              <span className="font-bold">20%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">GP Dividends:</span>
                              <span className="font-bold">8% per annum</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Dividend Basis:</span>
                              <span className="font-bold">20% of profit share</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Total X Return:</span>
                              <span className="font-bold text-earth-gold">9.9x</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-blue-50 rounded-lg p-4">
                        <p className="text-trust-navy text-sm">
                          <strong>How It Works:</strong> Your investment secures 20% equity ownership in the mining operations plus annual dividends of 8% GP (representing 20% of the profit share). 
                          This dual-income structure provides both immediate annual returns through dividends and substantial capital appreciation through equity growth.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 3. 5-Year Financial Projections */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('projections')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-green-500 text-white rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">5-Year Financial Projections</h3>
                      <p className="text-gray-600">Revenue trajectory: $4.1M → $22.9M (458% growth, $87.1M total)</p>
                    </div>
                  </div>
                  {expandedSections.projections ? <ChevronDown className="h-6 w-6 text-green-500" /> : <ChevronRight className="h-6 w-6 text-green-500" />}
                </button>
                
                {expandedSections.projections && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Revenue & Profit Growth Chart</h4>
                      
                      {/* Revenue Growth Chart */}
                      <div className="flex items-end justify-between h-64 space-x-2 mb-6">
                        {[
                          { year: 'Y1', revenue: 4.1, height: 'h-16' },
                          { year: 'Y2', revenue: 12.7, height: 'h-32' },
                          { year: 'Y3', revenue: 17.5, height: 'h-44' },
                          { year: 'Y4', revenue: 21.8, height: 'h-56' },
                          { year: 'Y5', revenue: 22.9, height: 'h-60' }
                        ].map((data, index) => (
                          <div key={index} className="flex flex-col items-center flex-1">
                            <div className={`w-full bg-gradient-to-t from-earth-gold to-amber-400 rounded-t-lg ${data.height} flex items-end justify-center pb-2`}>
                              <span className="text-white font-bold text-sm">${data.revenue}M</span>
                            </div>
                            <div className="mt-2 text-trust-navy font-semibold">{data.year}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Year-by-year breakdown */}
                      <div className="grid grid-cols-5 gap-4 text-center mb-6">
                        {[
                          { year: 'Year 1', revenue: '$4.1M', description: 'Operations commence' },
                          { year: 'Year 2', revenue: '$12.7M', description: 'Equipment scaling' },
                          { year: 'Year 3', revenue: '$17.5M', description: 'Processing optimization' },
                          { year: 'Year 4', revenue: '$21.8M', description: 'Full capacity reached' },
                          { year: 'Year 5', revenue: '$22.9M', description: 'Peak performance' }
                        ].map((item, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3">
                            <div className="font-bold text-trust-navy text-sm">{item.year}</div>
                            <div className="text-earth-gold font-bold">{item.revenue}</div>
                            <div className="text-xs text-gray-600">{item.description}</div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-green-50 rounded-lg p-4">
                        <p className="text-trust-navy text-sm">
                          <strong>Growth Foundation:</strong> Revenue scaling from $4.1M to $22.9M is achieved through transforming artisanal operations 
                          into mechanized mining with processing capabilities, leveraging proven copper reserves and established market demand.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 4. Key Investment Metrics */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('metrics')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-purple-500 text-white rounded-lg flex items-center justify-center">
                      <Target className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">Key Investment Metrics</h3>
                      <p className="text-gray-600">Critical performance indicators that drive investor returns</p>
                    </div>
                  </div>
                  {expandedSections.metrics ? <ChevronDown className="h-6 w-6 text-purple-500" /> : <ChevronRight className="h-6 w-6 text-purple-500" />}
                </button>
                
                {expandedSections.metrics && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Performance Indicators & Operational Metrics</h4>
                      
                      {/* Performance Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-purple-50 rounded-lg p-4 text-center border-l-4 border-purple-400">
                          <div className="text-2xl font-bold text-trust-navy mb-1">9.9x</div>
                          <p className="text-purple-600 font-semibold text-sm">Return Multiple</p>
                        </div>
                        <div className="bg-earth-gold/10 rounded-lg p-4 text-center border-l-4 border-earth-gold">
                          <div className="text-2xl font-bold text-trust-navy mb-1">64%</div>
                          <p className="text-earth-gold font-semibold text-sm">Example IRR</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center border-l-4 border-green-400">
                          <div className="text-2xl font-bold text-trust-navy mb-1">$87.1M</div>
                          <p className="text-green-600 font-semibold text-sm">Total Revenue</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-center border-l-4 border-blue-400">
                          <div className="text-2xl font-bold text-trust-navy mb-1">20%</div>
                          <p className="text-blue-600 font-semibold text-sm">Equity Share</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h5 className="font-bold text-purple-600">Operational Metrics</h5>
                          <div className="flex justify-between py-1 text-sm">
                            <span className="text-gray-600">Processing capacity:</span>
                            <span className="font-semibold">5,000 tonnes/month</span>
                          </div>
                          <div className="flex justify-between py-1 text-sm">
                            <span className="text-gray-600">Copper ore purity:</span>
                            <span className="font-semibold">4-5% average</span>
                          </div>
                          <div className="flex justify-between py-1 text-sm">
                            <span className="text-gray-600">Mining experience:</span>
                            <span className="font-semibold">20+ years</span>
                          </div>
                          <div className="flex justify-between py-1 text-sm">
                            <span className="text-gray-600">Licensed area:</span>
                            <span className="font-semibold">220 acres</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h5 className="font-bold text-earth-gold">Financial Metrics</h5>
                          <div className="flex justify-between py-1 text-sm">
                            <span className="text-gray-600">Annual GP dividends:</span>
                            <span className="font-semibold">8% per annum</span>
                          </div>
                          <div className="flex justify-between py-1 text-sm">
                            <span className="text-gray-600">Dividend yield basis:</span>
                            <span className="font-semibold">20% profit share</span>
                          </div>
                          <div className="flex justify-between py-1 text-sm">
                            <span className="text-gray-600">Exit strategy:</span>
                            <span className="font-semibold">5+ years</span>
                          </div>
                          <div className="flex justify-between py-1 text-sm">
                            <span className="text-gray-600">Community impact:</span>
                            <span className="font-semibold">2.6x economic multiplier</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 5. 5-Year Revenue Growth */}
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('revenueGrowth')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-orange-500 text-white rounded-lg flex items-center justify-center">
                      <ArrowUpRight className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">5-Year Revenue Growth</h3>
                      <p className="text-gray-600">How we achieve 458% revenue growth through operational scaling</p>
                    </div>
                  </div>
                  {expandedSections.revenueGrowth ? <ChevronDown className="h-6 w-6 text-orange-500" /> : <ChevronRight className="h-6 w-6 text-orange-500" />}
                </button>
                
                {expandedSections.revenueGrowth && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Revenue Growth Strategy & Investment Allocation</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-bold text-orange-600 mb-4">Where Your Investment Goes</h5>
                          <div className="space-y-4">
                            <div className="bg-orange-50 rounded-lg p-4">
                              <div className="font-semibold text-trust-navy">Mining Operations</div>
                              <p className="text-sm text-gray-600 mt-1">Equipment purchase and operational setup based on 20+ years mining expertise</p>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-4">
                              <div className="font-semibold text-trust-navy">Processing Plant Development</div>
                              <p className="text-sm text-gray-600 mt-1">Concentration plant capabilities within 6 months of investment</p>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-4">
                              <div className="font-semibold text-trust-navy">Community Partnership</div>
                              <p className="text-sm text-gray-600 mt-1">Local development initiatives and community benefit-sharing programs</p>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-4">
                              <div className="font-semibold text-trust-navy">Market Access</div>
                              <p className="text-sm text-gray-600 mt-1">Leveraging established customer relationships and proven logistics networks</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-bold text-earth-gold mb-4">How Returns Are Generated</h5>
                          <div className="space-y-4">
                            <div className="bg-earth-gold/10 rounded-lg p-4">
                              <div className="font-semibold text-trust-navy">Year 1-2: Foundation</div>
                              <p className="text-sm text-gray-600 mt-1">Equipment deployment, mining optimization, establishing processing capacity</p>
                            </div>
                            <div className="bg-earth-gold/10 rounded-lg p-4">
                              <div className="font-semibold text-trust-navy">Year 3-4: Scaling</div>
                              <p className="text-sm text-gray-600 mt-1">Full processing plant operations, increased throughput, market expansion</p>
                            </div>
                            <div className="bg-earth-gold/10 rounded-lg p-4">
                              <div className="font-semibold text-trust-navy">Year 5+: Optimization</div>
                              <p className="text-sm text-gray-600 mt-1">Peak operational efficiency, premium copper pricing, exit readiness</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 bg-orange-50 rounded-lg p-4">
                        <p className="text-trust-navy text-sm">
                          <strong>Growth Foundation:</strong> Revenue scaling from $4.1M to $22.9M is achieved through transforming artisanal operations 
                          into mechanized mining with processing capabilities, leveraging proven copper reserves and established market demand.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 6. Investment Returns & Exit Strategies */}
            <Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('exitStrategies')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-red-500 text-white rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">Investment Returns & Exit Strategies</h3>
                      <p className="text-gray-600">How you realize $19.8M returns: dividends + equity exit value</p>
                    </div>
                  </div>
                  {expandedSections.exitStrategies ? <ChevronDown className="h-6 w-6 text-red-500" /> : <ChevronRight className="h-6 w-6 text-red-500" />}
                </button>
                
                {expandedSections.exitStrategies && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Return Realization Strategy</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-bold text-red-600 mb-4">Annual Dividend Returns</h5>
                          <div className="space-y-3">
                            <div className="bg-red-50 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Annual Rate:</span>
                                <span className="font-bold text-red-600">8% GP</span>
                              </div>
                              <p className="text-sm text-gray-600">Based on 20% of profit share, paid annually throughout investment period</p>
                            </div>
                            <div className="bg-red-50 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Total 5-Year Dividends:</span>
                                <span className="font-bold text-red-600">$3,435,935</span>
                              </div>
                              <p className="text-sm text-gray-600">Cumulative dividend income over investment period</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-bold text-earth-gold mb-4">Equity Exit Value</h5>
                          <div className="space-y-3">
                            <div className="bg-earth-gold/10 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Exit Timeline:</span>
                                <span className="font-bold text-earth-gold">5+ years</span>
                              </div>
                              <p className="text-sm text-gray-600">Strategic exit when mining operations reach optimal valuation</p>
                            </div>
                            <div className="bg-earth-gold/10 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Equity Exit Value:</span>
                                <span className="font-bold text-earth-gold">$16,350,758</span>
                              </div>
                              <p className="text-sm text-gray-600">Capital appreciation from 20% equity ownership</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Total Return Summary Chart */}
                      <div className="mt-6 bg-gradient-to-r from-red-50 to-earth-gold/10 rounded-lg p-6">
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-trust-navy mb-2">Total Return Summary</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-blue-600">$3.4M</div>
                            <div className="text-sm text-gray-600">Dividends</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-earth-gold">$16.4M</div>
                            <div className="text-sm text-gray-600">Equity Exit</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-600">$19.8M</div>
                            <div className="text-sm text-gray-600">Total Return</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Tiers - After Financial Data */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-trust-navy mb-6">Investment Tier Benefits</h2>
            <p className="text-xl text-gray-600">Exclusive benefits based on your investment level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-trust-navy">Voyager Tier</CardTitle>
                <p className="text-blue-600 font-bold text-lg">Up to $250K</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Digital Certificate of Investment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Recognition in company's online "Investor Wall of Honour"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Invitation to visit funded social projects (hosted tour)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Annual video call showing investment impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Limited-edition merchandise or commemorative gift</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-earth-gold bg-gradient-to-br from-earth-gold/10 to-amber-100 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-trust-navy">Navigator Tier</CardTitle>
                <p className="text-earth-gold font-bold text-lg">$250K - $1M</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm font-semibold text-earth-gold mb-2">Everything in Voyager, plus:</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-earth-gold mr-2">•</span>
                    <span>Business-Class Flights for two to Tanzania</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-gold mr-2">•</span>
                    <span>Name Recognition on Infrastructure Project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-gold mr-2">•</span>
                    <span>Priority Allocation in Future Investments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-gold mr-2">•</span>
                    <span>Panel Invite at Annual Impact Briefing Event</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-gold mr-2">•</span>
                    <span>One-on-One Strategic Session with founders</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-400 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-trust-navy">Founder Tier</CardTitle>
                <p className="text-green-600 font-bold text-lg">Over $1M</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm font-semibold text-green-600 mb-2">Everything in Navigator, upgraded to:</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>All-Expenses-Paid Safari with First-Class Travel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Private Tour of Mine Site with leadership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>VIP Founder Dinner in Dar es Salaam</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Full naming rights on major projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Optional advisory or board observer role</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Calculator - Dedicated Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-trust-navy mb-4">Investment Calculator</h2>
            <p className="text-gray-600">Calculate your potential returns based on authentic financial projections</p>
          </div>
          <InvestmentCalculator />
        </div>
      </section>
    </div>
  );
}