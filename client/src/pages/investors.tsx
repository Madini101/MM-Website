import InvestmentCalculator from "@/components/investment-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Users, Target, Building, CheckCircle, ArrowUpRight, ChevronDown, ChevronRight, Shield, Calculator, HelpCircle, Plus, Minus, BarChart3, Cog, UserCheck, AlertTriangle, FileText, BookOpen, Globe, Leaf, Heart, Award, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Investors() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const [expandedFAQ, setExpandedFAQ] = useState<{[key: string]: boolean}>({});
  
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Refined Investment Header */}
      <div className="bg-white border-b border-gray-200 py-6 sm:py-8 relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="text-center">
            {/* Compact Professional Badge */}
            <div className="inline-flex items-center bg-trust-navy text-white px-6 py-2 rounded-sm text-sm font-semibold mb-4">
              <Target className="h-4 w-4 mr-2" />
              QUALIFIED INVESTOR ANALYSIS
            </div>
            
            {/* Clean Headlines */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy mb-3">
              $2M Strategic Equity Investment
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-3xl mx-auto px-4">
              Tanzania Copper Mining Development • African Copper Belt • Verified Deposits
            </p>
            
            {/* Compact Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl text-earth-gold font-bold">9.9x</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">ROI Multiple</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl text-earth-gold font-bold">64%</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Annual IRR</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl text-earth-gold font-bold">$19.8M</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Target Returns</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center border border-gray-200">
                <div className="text-lg sm:text-xl lg:text-2xl text-earth-gold font-bold">$87.1M</div>
                <div className="text-xs sm:text-sm text-trust-navy font-medium">Revenue Target</div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Expandable Analysis Sections - White Background */}
      <section id="complete-investment-analysis" className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">

          <div className="space-y-6">
            {/* 1. Financial Data */}
            <Card id="investment-highlights" className="premium-shadow elegant-border sophisticated-hover bg-white">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('financialData')}
                  className="w-full p-4 sm:p-6 lg:p-8 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-gray-50/50 transition-all duration-300 gap-4 sm:gap-0"
                >
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-earth-gold to-earth-gold/80 text-trust-navy rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl premium-heading text-trust-navy mb-1 sm:mb-2">Financial Intelligence</h3>
                      <p className="text-sm sm:text-base lg:text-lg executive-text text-gray-600">Comprehensive ROI analysis: 9.9x returns, 64% IRR, authentic business projections</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-xs sm:text-sm subheading text-earth-gold">INTERACTIVE TOOLS</div>
                      <div className="text-xs text-gray-500">Click to expand</div>
                    </div>
                    {expandedSections.financialData ? <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7 text-earth-gold" /> : <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-earth-gold" />}
                  </div>
                </button>
                
                {expandedSections.financialData && (
                  <div className="px-3 sm:px-6 pb-4 sm:pb-6 border-t bg-gray-50/50">
                    <div className="mt-4 sm:mt-6 bg-white rounded-lg p-3 sm:p-6">
                      {/* Complete Investment Returns Table - MOVED FROM FINANCIALS.TSX */}
                      <div className="overflow-x-auto mb-6 sm:mb-8">
                        <div className="bg-trust-navy rounded-lg p-4 sm:p-6">
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">
                            <TrendingUp className="inline-block mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                            Madini Moyoni: Investment Returns
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs sm:text-sm min-w-[300px]">
                              <thead>
                                <tr className="border-b-2 border-earth-gold">
                                  <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-white font-bold"></th>
                                  <th className="text-center py-2 sm:py-3 px-2 sm:px-4 text-earth-gold font-bold">
                                    <DollarSign className="inline-block mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                                    <span className="hidden sm:inline">Equity + Dividend</span>
                                    <span className="sm:hidden">Returns</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-gray-600">
                                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-earth-gold text-xs sm:text-sm">Equity Share</td>
                                  <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-white font-bold">20%</td>
                                </tr>
                                <tr className="border-b border-gray-600">
                                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-earth-gold text-xs sm:text-sm">Dividends</td>
                                  <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-white text-xs sm:text-sm font-medium">8% GP per annum</td>
                                </tr>
                                <tr className="border-b border-gray-600">
                                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-earth-gold text-xs sm:text-sm">Exit (years)</td>
                                  <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-white font-bold">5+</td>
                                </tr>
                                <tr className="border-b border-gray-600">
                                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-earth-gold text-xs sm:text-sm">Max Investment</td>
                                  <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-white font-bold">$2M</td>
                                </tr>
                                <tr className="border-b border-gray-600">
                                  <td className="py-2 sm:py-3 px-2 sm:px-4 font-medium text-earth-gold text-xs sm:text-sm">ROI Multiple</td>
                                  <td className="text-center py-2 sm:py-3 px-2 sm:px-4 text-yellow-200 font-bold text-lg sm:text-xl">9.9x</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 2. Market Analysis & Investment Context */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('structureOverview')}
                  className="w-full p-4 sm:p-6 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-gray-50 transition-colors gap-4 sm:gap-0"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-trust-navy">Market Analysis & Investment Context</h3>
                      <p className="text-sm sm:text-base text-gray-600">Financial projections based on LME copper pricing and proven operational capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-xs sm:text-sm subheading text-blue-500">MARKET DATA</div>
                      <div className="text-xs text-gray-500">Click to expand</div>
                    </div>
                    {expandedSections.structureOverview ? <ChevronDown className="h-6 w-6 text-blue-500" /> : <ChevronRight className="h-6 w-6 text-blue-500" />}
                  </div>
                </button>
                
                {expandedSections.structureOverview && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      {/* MARKET CONTEXT & COPPER PRICING */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h5 className="font-bold text-blue-600 mb-4 flex items-center">
                            <Target className="h-5 w-5 mr-2" />
                            Copper Market Context
                          </h5>
                          <div className="space-y-3">
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Current LME Copper Price:</span>
                                <span className="font-bold text-blue-600">$9,600/tonne</span>
                              </div>
                              <p className="text-sm text-gray-600">London Metal Exchange pricing basis for projections</p>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Copper Grade:</span>
                                <span className="font-bold text-blue-600">4-5% average</span>
                              </div>
                              <p className="text-sm text-gray-600">Confirmed through geological surveys</p>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Confirmed Buyers:</span>
                                <span className="font-bold text-blue-600">UK & China</span>
                              </div>
                              <p className="text-sm text-gray-600">Established contracts reduce market risk</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-bold text-earth-gold mb-4 flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Operational Foundation
                          </h5>
                          <div className="space-y-3">
                            <div className="bg-earth-gold/10 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Mining Experience:</span>
                                <span className="font-bold text-earth-gold">20+ years</span>
                              </div>
                              <p className="text-sm text-gray-600">Mshana family proven track record</p>
                            </div>
                            <div className="bg-earth-gold/10 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Licensed Area:</span>
                                <span className="font-bold text-earth-gold">220 acres</span>
                              </div>
                              <p className="text-sm text-gray-600">Primary mining licenses granted</p>
                            </div>
                            <div className="bg-earth-gold/10 rounded-lg p-4">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold text-trust-navy">Processing Capacity:</span>
                                <span className="font-bold text-earth-gold">5,000 tonnes/month</span>
                              </div>
                              <p className="text-sm text-gray-600">Current operational capability</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* INVESTMENT RISK MITIGATION */}
                      <div className="bg-green-50 rounded-lg p-6">
                        <h5 className="font-bold text-green-600 mb-4 flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          Investment Risk Mitigation
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <ul className="space-y-2 text-sm">
                            <li>• Exclusive JV with established TZ mining family</li>
                            <li>• Primary mining licenses already granted</li>
                            <li>• Proven geological surveys confirm rich deposits</li>
                            <li>• Established supply chain and logistics network</li>
                          </ul>
                          <ul className="space-y-2 text-sm">
                            <li>• Contracted customers in Tanzania and China</li>
                            <li>• 25-30 core mining families already employed</li>
                            <li>• Equipment and technology partnerships established</li>
                            <li>• Fast-start approach proven in similar projects</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 3. Financial Projections - Clear Spreadsheet */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('projections')}
                  className="w-full p-4 sm:p-6 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-gray-50 transition-colors gap-4 sm:gap-0"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-trust-navy">Financial Projections</h3>
                      <p className="text-sm sm:text-base text-gray-600">Complete P&L breakdown: Revenue $7.4M → $23.1M, Profit $1.0M → $12.3M</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-xs sm:text-sm subheading text-green-500">FINANCIAL DATA</div>
                      <div className="text-xs text-gray-500">Click to expand</div>
                    </div>
                    {expandedSections.projections ? <ChevronDown className="h-6 w-6 text-green-500" /> : <ChevronRight className="h-6 w-6 text-green-500" />}
                  </div>
                </button>
                
                {expandedSections.projections && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      {/* COMPREHENSIVE FINANCIAL SPREADSHEET */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-gray-300">
                          <thead>
                            <tr className="bg-trust-navy text-white">
                              <th className="text-left py-3 px-4 border-r border-earth-gold font-bold">Financial Metrics ($M USD)</th>
                              <th className="text-center py-3 px-4 border-r border-earth-gold font-bold">Year 1</th>
                              <th className="text-center py-3 px-4 border-r border-earth-gold font-bold">Year 2</th>
                              <th className="text-center py-3 px-4 border-r border-earth-gold font-bold">Year 3</th>
                              <th className="text-center py-3 px-4 border-r border-earth-gold font-bold">Year 4</th>
                              <th className="text-center py-3 px-4 border-r border-earth-gold font-bold">Year 5</th>
                              <th className="text-center py-3 px-4 font-bold bg-earth-gold text-trust-navy">5Y Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-blue-50 border-b">
                              <td className="py-2 px-4 font-semibold text-blue-700 border-r">Revenue Streams:</td>
                              <td className="text-center py-2 px-4 border-r"></td>
                              <td className="text-center py-2 px-4 border-r"></td>
                              <td className="text-center py-2 px-4 border-r"></td>
                              <td className="text-center py-2 px-4 border-r"></td>
                              <td className="text-center py-2 px-4 border-r"></td>
                              <td className="text-center py-2 px-4"></td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-4 text-gray-700 border-r">  Copper Ore (20% grade)</td>
                              <td className="text-center py-2 px-4 font-medium border-r">5.3</td>
                              <td className="text-center py-2 px-4 font-medium border-r">1.2</td>
                              <td className="text-center py-2 px-4 font-medium border-r">2.6</td>
                              <td className="text-center py-2 px-4 font-medium border-r">3.8</td>
                              <td className="text-center py-2 px-4 font-medium border-r">4.1</td>
                              <td className="text-center py-2 px-4 font-bold bg-blue-50">17.1</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-4 text-gray-700 border-r">  Copper Concentrate (20% grade)</td>
                              <td className="text-center py-2 px-4 font-medium border-r">2.0</td>
                              <td className="text-center py-2 px-4 font-medium border-r">9.2</td>
                              <td className="text-center py-2 px-4 font-medium border-r">12.2</td>
                              <td className="text-center py-2 px-4 font-medium border-r">12.8</td>
                              <td className="text-center py-2 px-4 font-medium border-r">13.4</td>
                              <td className="text-center py-2 px-4 font-bold bg-blue-50">49.5</td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 px-4 text-gray-700 border-r">  Gold and Silver</td>
                              <td className="text-center py-2 px-4 font-medium border-r">0.0</td>
                              <td className="text-center py-2 px-4 font-medium border-r">4.1</td>
                              <td className="text-center py-2 px-4 font-medium border-r">5.3</td>
                              <td className="text-center py-2 px-4 font-medium border-r">5.4</td>
                              <td className="text-center py-2 px-4 font-medium border-r">5.7</td>
                              <td className="text-center py-2 px-4 font-bold bg-blue-50">20.4</td>
                            </tr>
                            <tr className="border-b-2 border-green-500 bg-green-100">
                              <td className="py-3 px-4 font-bold text-green-700 border-r">TOTAL REVENUE</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">7.4</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">14.5</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">20.1</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">22.0</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">23.1</td>
                              <td className="text-center py-3 px-4 font-bold text-xl bg-green-500 text-white">87.1</td>
                            </tr>
                            <tr className="border-b bg-red-50">
                              <td className="py-3 px-4 font-bold text-red-700 border-r">TOTAL COSTS</td>
                              <td className="text-center py-3 px-4 font-bold border-r">6.4</td>
                              <td className="text-center py-3 px-4 font-bold border-r">8.9</td>
                              <td className="text-center py-3 px-4 font-bold border-r">8.2</td>
                              <td className="text-center py-3 px-4 font-bold border-r">9.7</td>
                              <td className="text-center py-3 px-4 font-bold border-r">10.9</td>
                              <td className="text-center py-3 px-4 font-bold bg-red-100">44.1</td>
                            </tr>
                            <tr className="border-b-2 border-blue-500 bg-blue-100">
                              <td className="py-3 px-4 font-bold text-blue-700 border-r">OPERATING PROFIT</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">1.0</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">5.6</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">11.8</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">12.3</td>
                              <td className="text-center py-3 px-4 font-bold text-lg border-r">12.3</td>
                              <td className="text-center py-3 px-4 font-bold text-xl bg-blue-500 text-white">42.9</td>
                            </tr>
                            <tr className="border-b bg-purple-50">
                              <td className="py-2 px-4 font-semibold text-purple-700 border-r">Gross Margin</td>
                              <td className="text-center py-2 px-4 font-bold border-r">13%</td>
                              <td className="text-center py-2 px-4 font-bold border-r">39%</td>
                              <td className="text-center py-2 px-4 font-bold border-r">59%</td>
                              <td className="text-center py-2 px-4 font-bold border-r">56%</td>
                              <td className="text-center py-2 px-4 font-bold border-r">53%</td>
                              <td className="text-center py-2 px-4 font-bold bg-purple-100">49%</td>
                            </tr>
                            <tr className="bg-earth-gold/20">
                              <td className="py-2 px-4 font-semibold text-trust-navy border-r">Market Capitalisation</td>
                              <td className="text-center py-2 px-4 font-bold border-r">15.4</td>
                              <td className="text-center py-2 px-4 font-bold border-r">43.6</td>
                              <td className="text-center py-2 px-4 font-bold border-r">75.4</td>
                              <td className="text-center py-2 px-4 font-bold border-r">80.0</td>
                              <td className="text-center py-2 px-4 font-bold border-r">81.8</td>
                              <td className="text-center py-2 px-4 font-bold bg-earth-gold text-trust-navy">Growth Trajectory</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 2. Key Investment Metrics */}
            <Card className="premium-shadow elegant-border sophisticated-hover bg-white">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('metrics')}
                  className="w-full p-4 sm:p-6 lg:p-8 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-gray-50/50 transition-all duration-300 gap-4 sm:gap-0"
                >
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl premium-heading text-trust-navy mb-1 sm:mb-2">Key Investment Metrics</h3>
                      <p className="text-sm sm:text-base lg:text-lg executive-text text-gray-600">Critical performance indicators that drive investor returns</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-xs sm:text-sm subheading text-green-600">PERFORMANCE DATA</div>
                      <div className="text-xs text-gray-500">Click to expand</div>
                    </div>
                    {expandedSections.metrics ? <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" /> : <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />}
                  </div>
                </button>
                
                {expandedSections.metrics && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      {/* AUTHENTIC MARKET CAPITALISATION DATA */}
                      <div className="overflow-x-auto mb-8">
                        <div className="bg-purple-600 rounded-lg p-6">
                          <h4 className="text-xl font-bold text-white mb-6 text-center">
                            <Target className="inline-block mr-2 h-6 w-6" />
                            Market Capitalisation & Multipliers
                          </h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm text-white">
                              <thead>
                                <tr className="border-b-2 border-purple-300">
                                  <th className="text-left py-3 px-4 text-purple-200 font-bold">Metrics</th>
                                  <th className="text-center py-3 px-4 text-white font-bold">Y1</th>
                                  <th className="text-center py-3 px-4 text-white font-bold">Y2</th>
                                  <th className="text-center py-3 px-4 text-white font-bold">Y3</th>
                                  <th className="text-center py-3 px-4 text-white font-bold">Y4</th>
                                  <th className="text-center py-3 px-4 text-white font-bold">Y5</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-purple-400 bg-purple-500 bg-opacity-20">
                                  <td className="py-3 px-4 font-bold text-purple-200">Market Capitalisation ($M)</td>
                                  <td className="text-center py-3 px-4 font-bold text-xl">15.4</td>
                                  <td className="text-center py-3 px-4 font-bold text-xl">43.6</td>
                                  <td className="text-center py-3 px-4 font-bold text-xl">75.4</td>
                                  <td className="text-center py-3 px-4 font-bold text-xl">80.0</td>
                                  <td className="text-center py-3 px-4 font-bold text-xl">81.8</td>
                                </tr>
                                <tr className="border-b border-purple-400">
                                  <td className="py-3 px-4 font-medium text-purple-200">Revenue Multiplier</td>
                                  <td className="text-center py-3 px-4 font-bold">2.1</td>
                                  <td className="text-center py-3 px-4 font-bold">3.0</td>
                                  <td className="text-center py-3 px-4 font-bold">3.8</td>
                                  <td className="text-center py-3 px-4 font-bold">3.6</td>
                                  <td className="text-center py-3 px-4 font-bold">3.5</td>
                                </tr>
                                <tr className="border-b border-purple-400">
                                  <td className="py-3 px-4 font-medium text-purple-200">Operating Profit Multiplier</td>
                                  <td className="text-center py-3 px-4 font-bold">15.6</td>
                                  <td className="text-center py-3 px-4 font-bold">7.8</td>
                                  <td className="text-center py-3 px-4 font-bold">6.4</td>
                                  <td className="text-center py-3 px-4 font-bold">6.5</td>
                                  <td className="text-center py-3 px-4 font-bold">6.7</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      
                      {/* VALUE PROPOSITION */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4 flex items-center">
                            <Building className="h-5 w-5 mr-2" />
                            Value of Madini Moyoni
                          </h5>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Exclusive JV with TZ mining family</li>
                            <li>• Primary Mining Licences granted</li>
                            <li>• Geology shows rich copper deposits</li>
                            <li>• Contracted customers in TZ and China</li>
                            <li>• Proven supply chain</li>
                            <li>• Deep experience of the team</li>
                          </ul>
                        </div>
                        <div className="bg-earth-gold/10 rounded-lg p-6">
                          <h5 className="font-bold text-earth-gold mb-4 flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Investment Benefits
                          </h5>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Positive social and economic impact on local community</li>
                            <li>• Fast start approach that proves the model</li>
                            <li>• Exceptional returns for investors</li>
                            <li>• One of many associated opportunities in Tanzania</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 3. Operations & Execution Strategy */}
            <Card className="premium-shadow elegant-border sophisticated-hover bg-white">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('operations')}
                  className="w-full p-4 sm:p-6 lg:p-8 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-gray-50/50 transition-all duration-300 gap-4 sm:gap-0"
                >
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Cog className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl premium-heading text-trust-navy mb-1 sm:mb-2">Operations & Execution Strategy</h3>
                      <p className="text-sm sm:text-base lg:text-lg executive-text text-gray-600">Proven operational capabilities and risk mitigation framework</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-xs sm:text-sm subheading text-blue-600">OPERATIONAL EXCELLENCE</div>
                      <div className="text-xs text-gray-500">Click to expand</div>
                    </div>
                    {expandedSections.operations ? <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" /> : <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />}
                  </div>
                </button>
                
                {expandedSections.operations && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      {/* JOINT VENTURE FOUNDATION */}
                      <div className="mb-8">
                        <h5 className="font-bold text-blue-600 mb-4 flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          Strategic Joint Venture Foundation
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h6 className="font-semibold text-trust-navy mb-2">Primary Mining Licences</h6>
                            <p className="text-sm text-gray-600">Granted mining rights with confirmed rich copper deposits and proven geological assessments in Mbesa, southern Tanzania</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h6 className="font-semibold text-trust-navy mb-2">Established Supply Chain</h6>
                            <p className="text-sm text-gray-600">Contracted customers in Tanzania and China with proven international buyer relationships</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* OPERATIONAL CAPABILITIES */}
                      <div className="mb-8">
                        <h5 className="font-bold text-green-600 mb-4 flex items-center">
                          <ArrowUpRight className="h-5 w-5 mr-2" />
                          Current Operational Capabilities
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h6 className="font-semibold text-trust-navy mb-2">Processing Capacity</h6>
                            <p className="text-sm text-gray-600">5,000 tonnes/month capacity established with confirmed 4-5% copper grade extraction</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4">
                            <h6 className="font-semibold text-trust-navy mb-2">Local Workforce</h6>
                            <p className="text-sm text-gray-600">Employment of 25-30 core mining families with established local partnerships and community integration</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4">
                            <h6 className="font-semibold text-trust-navy mb-2">International Market Access</h6>
                            <p className="text-sm text-gray-600">Active customer relationships in UK and China markets with proven precious metals trading experience</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* SCALABLE EXECUTION PLAN */}
                      <div className="mb-8">
                        <h5 className="font-bold text-orange-600 mb-4 flex items-center">
                          <Target className="h-5 w-5 mr-2" />
                          Scalable Execution Framework
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h6 className="font-semibold text-trust-navy mb-3">Phase 1: Foundation (Year 1)</h6>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Mining equipment deployment ($1.86M): excavators, crushers, processing equipment</li>
                              <li>• Copper ore extraction and processing activation</li>
                              <li>• Local workforce integration and training programs</li>
                              <li>• Revenue generation: $4.1M foundation operations</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-trust-navy mb-3">Phase 2: Expansion (Years 2-3)</h6>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Advanced equipment scaling ($3.08M): concentration plant, gold/silver extraction</li>
                              <li>• Processing infrastructure development to concentrate production</li>
                              <li>• International logistics optimization ($3.63M total investment)</li>
                              <li>• Revenue scaling: $12.7M → $17.5M</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-trust-navy mb-3">Phase 3: Optimization (Years 4-5)</h6>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Full operational capacity with multi-metal extraction</li>
                              <li>• Peak processing efficiency and cost optimization</li>
                              <li>• Community development project expansion</li>
                              <li>• Revenue optimization: $21.8M → $22.9M</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-trust-navy mb-3">Risk Mitigation Strategies</h6>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Diversified metal extraction (copper, gold, silver)</li>
                              <li>• Established international buyer contracts</li>
                              <li>• Local community partnership and government cooperation</li>
                              <li>• Professional business management and safety protocols</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* STRATEGIC MACHINERY PROCUREMENT */}
                      <div className="mb-8">
                        <h5 className="font-bold text-orange-600 mb-4 flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          Strategic Machinery Procurement & Technical Advisory Partnership
                        </h5>
                        <div className="bg-orange-50 rounded-lg p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h6 className="font-semibold text-trust-navy mb-3">Technical Advisory Excellence</h6>
                              <p className="text-sm text-gray-600 mb-3">
                                <strong>Gareth Evans</strong> serves as our dedicated Technical Adviser, bringing specialized expertise in mining and processing equipment procurement, installation, and maintenance.
                              </p>
                              <p className="text-sm text-gray-600">
                                Working in collaboration with <strong>LMS Global Solutions Limited UK</strong> (Company No. 12298355), a Liverpool-based machinery specialist with four years of proven international trading experience.
                              </p>
                            </div>
                            <div>
                              <h6 className="font-semibold text-trust-navy mb-3">Proven Machinery Excellence</h6>
                              <ul className="text-sm space-y-1 text-gray-600">
                                <li>• Global supply chain with worldwide shipping capabilities</li>
                                <li>• Leading brands: Komatsu, Massey Ferguson, John Deere, New Holland, Kubota</li>
                                <li>• Rapid supply of genuine OEM parts and technical backup services</li>
                                <li>• Quality assurance with rigorous equipment selection standards</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-orange-200">
                            <h6 className="font-semibold text-trust-navy mb-3">Systematic Phased Approach</h6>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="bg-white rounded p-4 border border-orange-200">
                                <div className="text-orange-600 font-medium text-sm mb-1">Phase 1: Essential Operations</div>
                                <div className="text-xs text-gray-600">Core processing equipment with essential operational capabilities and complete installation support</div>
                              </div>
                              <div className="bg-white rounded p-4 border border-orange-200">
                                <div className="text-orange-600 font-medium text-sm mb-1">Phase 2: Enhanced Capacity</div>
                                <div className="text-xs text-gray-600">Upgraded equipment for increased processing capacity and efficiency with technology improvements</div>
                              </div>
                              <div className="bg-white rounded p-4 border border-orange-200">
                                <div className="text-orange-600 font-medium text-sm mb-1">Phase 3: Full-Scale Production</div>
                                <div className="text-xs text-gray-600">Complete production setup for maximum operational capacity with advanced processing systems</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* SUSTAINABLE BUSINESS MODEL */}
                      <div className="bg-slate-50 rounded-lg p-6">
                        <h5 className="font-bold text-slate-700 mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Sustainable Business Model & Impact
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h6 className="font-semibold text-trust-navy mb-3">Operational Excellence</h6>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Modern mining techniques with safety protocols</li>
                              <li>• Environmental preservation and enhancement focus</li>
                              <li>• Professional business management standards</li>
                              <li>• Replicable model across the region and continent</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-trust-navy mb-3">Community Integration</h6>
                            <ul className="text-sm space-y-1 text-gray-600">
                              <li>• Local population elevation and positive economic impact</li>
                              <li>• Social project investment ($4.13M over 5 years)</li>
                              <li>• Infrastructure development: schools, hospitals, roads</li>
                              <li>• Beacon of responsibility in mining sector</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 4. Leadership Team & Expertise - Link to Dedicated Page */}
            <Card className="premium-shadow elegant-border sophisticated-hover bg-white">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 text-white rounded-2xl flex items-center justify-center shadow-lg">
                      <UserCheck className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl premium-heading text-trust-navy mb-2">Leadership Team & Expertise</h3>
                      <p className="text-lg executive-text text-gray-600">Experienced management with proven track record in mining and international business</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Link href="/team">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-700 hover:to-orange-600 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
                      >
                        View Team Details
                        <ArrowUpRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h6 className="font-semibold text-trust-navy mb-2">UK Management Team (MML)</h6>
                      <p className="text-sm text-gray-600">International business expertise with years of experience in African market development and strategic partnerships</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h6 className="font-semibold text-trust-navy mb-2">Tanzania Operations (ASCL)</h6>
                      <p className="text-sm text-gray-600">Local mining expertise with established community relationships and multiple years of natural resources experience</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Investment Returns & Exit Strategies */}
            <Card className="premium-shadow elegant-border sophisticated-hover bg-white">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleSection('exitStrategies')}
                  className="w-full p-4 sm:p-6 lg:p-8 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-gray-50/50 transition-all duration-300 gap-4 sm:gap-0"
                >
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-red-500 text-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl premium-heading text-trust-navy mb-1 sm:mb-2">Investment Returns & Exit Strategies</h3>
                      <p className="text-sm sm:text-base lg:text-lg executive-text text-gray-600">How you realize $19.8M returns: dividends + equity exit value</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                    <div className="text-right">
                      <div className="text-xs sm:text-sm subheading text-red-600">EXIT STRATEGIES</div>
                      <div className="text-xs text-gray-500">Click to expand</div>
                    </div>
                    {expandedSections.exitStrategies ? <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7 text-red-600" /> : <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-red-600" />}
                  </div>
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
                      
                      {/* Return Realization Strategy Chart */}
                      <div className="mt-6 bg-gradient-to-r from-red-50 to-earth-gold/10 rounded-lg p-6">
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-trust-navy mb-2 flex items-center justify-center">
                            <CheckCircle className="h-6 w-6 mr-2" />
                            Total Return Breakdown: $19.8M
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white rounded-lg p-4 text-center shadow-sm border-l-4 border-blue-500">
                            <div className="text-2xl font-bold text-blue-600 mb-1">$3.4M</div>
                            <div className="text-sm text-gray-600 mb-2">Total Dividends</div>
                            <div className="text-xs text-blue-500">8% GP annually over 5 years</div>
                          </div>
                          <div className="bg-white rounded-lg p-4 text-center shadow-sm border-l-4 border-earth-gold">
                            <div className="text-2xl font-bold text-earth-gold mb-1">$16.4M</div>
                            <div className="text-sm text-gray-600 mb-2">Equity Exit Value</div>
                            <div className="text-xs text-earth-gold">20% ownership exit</div>
                          </div>
                          <div className="bg-white rounded-lg p-4 text-center shadow-sm border-l-4 border-green-500">
                            <div className="text-2xl font-bold text-green-600 mb-1">$19.8M</div>
                            <div className="text-sm text-gray-600 mb-2">Total Return</div>
                            <div className="text-xs text-green-500">9.9x ROI, 64% IRR</div>
                          </div>
                        </div>
                        
                        {/* Exit Strategy Details */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-bold text-red-600 mb-3 flex items-center">
                              <Users className="h-5 w-5 mr-2" />
                              Annual Dividend Returns
                            </h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Annual Rate:</span>
                                <span className="font-bold text-blue-600">8% GP</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Dividend Basis:</span>
                                <span className="font-bold text-blue-600">20% of profit share</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Payment Frequency:</span>
                                <span className="font-bold text-trust-navy">Annual</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Total 5-Year Dividends:</span>
                                <span className="font-bold text-blue-600">$3,435,935</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-bold text-earth-gold mb-3 flex items-center">
                              <ArrowUpRight className="h-5 w-5 mr-2" />
                              Equity Exit Strategy
                            </h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Exit Timeline:</span>
                                <span className="font-bold text-earth-gold">5+ years</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Equity Share:</span>
                                <span className="font-bold text-earth-gold">20%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Exit Mechanism:</span>
                                <span className="font-bold text-trust-navy">Strategic sale</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Equity Exit Value:</span>
                                <span className="font-bold text-earth-gold">$16,350,758</span>
                              </div>
                            </div>
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



      {/* Investment Calculator - Directly After Analysis */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-bold mb-4">
              <Calculator className="h-5 w-5 mr-2" />
              Try Our Calculator
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Calculate Your Investment Returns</h2>
            <p className="text-lg text-slate-600">Interactive calculator using authentic financial projections</p>
          </div>
          <InvestmentCalculator />
        </div>
      </section>

      {/* Professional Investment Tier Benefits - AUTHENTIC */}
      <section id="tiers" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center border border-slate-300 text-slate-700 px-6 py-3 rounded-sm font-semibold mb-6 bg-gray-50">
              <Target className="h-5 w-5 mr-2" />
              INVESTMENT TIER BENEFITS
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Investor Recognition & Benefits Program
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Structured benefit packages designed for all investors starting from $5,000, 
              providing exclusive access, recognition, and strategic involvement opportunities tailored to your investment level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* VOYAGER TIER - PROFESSIONAL */}
            <Card className="border border-gray-300 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="border-b border-gray-200 bg-gray-50 p-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-slate-700 rounded flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Voyager Tier</CardTitle>
                  <div className="text-slate-600 font-semibold text-lg">$5,000 - $250,000</div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Digital Certificate of Investment</div>
                      <div className="text-slate-600 text-sm mt-1">Official documentation of investment participation</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Investor Recognition Platform</div>
                      <div className="text-slate-600 text-sm mt-1">Public acknowledgment on company's investor portal</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Social Impact Site Visits</div>
                      <div className="text-slate-600 text-sm mt-1">Guided tours of community development projects</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Annual Impact Presentations</div>
                      <div className="text-slate-600 text-sm mt-1">Direct video briefings on investment outcomes</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Executive Access Program</div>
                      <div className="text-slate-600 text-sm mt-1">Private annual sessions with senior leadership</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Quarterly Strategy Reports</div>
                      <div className="text-slate-600 text-sm mt-1">Exclusive briefings on company milestones</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Strategic Advisory Opportunities</div>
                      <div className="text-slate-600 text-sm mt-1">Optional board observer or advisory positions</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Infrastructure Naming Rights</div>
                      <div className="text-slate-600 text-sm mt-1">Recognition on educational and healthcare facilities</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* NAVIGATOR TIER - PROFESSIONAL */}
            <Card className="border-2 border-amber-600 bg-white hover:shadow-xl transition-shadow duration-300 relative transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 text-sm font-semibold">
                PREFERRED TIER
              </div>
              <CardHeader className="border-b border-amber-200 bg-amber-50 p-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-600 rounded flex items-center justify-center mx-auto mb-4">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Navigator Tier</CardTitle>
                  <div className="text-amber-700 font-semibold text-lg">$250,000 - $1,000,000</div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-amber-50 border border-amber-200 rounded p-4 mb-6">
                  <p className="text-amber-800 font-semibold text-center text-sm">All Voyager Tier benefits, enhanced with:</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Business-Class Travel Program</div>
                      <div className="text-slate-600 text-sm mt-1">Premium flights for two to Tanzania operations site</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Facility Naming Recognition</div>
                      <div className="text-slate-600 text-sm mt-1">Corporate/personal naming on infrastructure projects</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Priority Investment Access</div>
                      <div className="text-slate-600 text-sm mt-1">First right of refusal on future project opportunities</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Annual Briefing Panel Role</div>
                      <div className="text-slate-600 text-sm mt-1">Speaking opportunities at investor conferences</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Direct Founder Access</div>
                      <div className="text-slate-600 text-sm mt-1">Private strategic sessions with company founders</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FOUNDER TIER - PROFESSIONAL */}
            <Card className="border border-emerald-700 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="border-b border-emerald-200 bg-emerald-50 p-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-700 rounded flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Founder Tier</CardTitle>
                  <div className="text-emerald-700 font-semibold text-lg">$1,000,000+</div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-emerald-50 border border-emerald-200 rounded p-4 mb-6">
                  <p className="text-emerald-800 font-semibold text-center text-sm">All Navigator Tier benefits, elevated to:</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">First-Class Safari Experience</div>
                      <div className="text-slate-600 text-sm mt-1">5-7 day luxury Tanzanian safari for two (Serengeti, Ngorongoro Crater)</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Executive Mine Site Access</div>
                      <div className="text-slate-600 text-sm mt-1">Private operational tours with senior management team</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Leadership Dinner Program</div>
                      <div className="text-slate-600 text-sm mt-1">Executive dinners in Dar es Salaam with key stakeholders</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Strategic Intelligence Access</div>
                      <div className="text-slate-600 text-sm mt-1">Priority access to quarterly reports and strategy developments</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium">Cultural Heritage Collection</div>
                      <div className="text-slate-600 text-sm mt-1">Curated Tanzanian crafts and ethically-sourced materials</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-slate-600 text-lg mb-8 max-w-3xl mx-auto">
              Investment tier benefits are structured to provide professional recognition and access for all investors from $5,000 upwards, 
              documented in our comprehensive investment prospectus.
            </p>
            <div className="space-y-4">
              <Button 
                size="lg"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => window.location.href = '/contact', 500);
                }}
                className="bg-slate-900 text-white hover:bg-slate-800 font-semibold px-8 py-3 text-base border border-slate-700"
              >
                Register Your Interest
              </Button>
              <div className="text-sm text-slate-500">
                Send us a message to express your interest and we'll get back to you
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Investment FAQ Section */}
      <section id="investment-faq" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center border border-slate-300 text-slate-700 px-6 py-3 rounded-sm font-semibold mb-6 bg-gray-50">
              <HelpCircle className="h-5 w-5 mr-2" />
              INVESTOR FAQ CENTER
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Comprehensive Investment Intelligence
            </h2>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Complete due diligence materials addressing all aspects of the Madini Moyoni investment opportunity. 
              Each section provides detailed technical, financial, and operational intelligence for qualified investors.
            </p>
          </div>

          <div className="space-y-6">
            {/* 1. General Overview & Company Foundation */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleFAQ('generalOverview')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-slate-600 text-white rounded-lg flex items-center justify-center">
                      <Globe className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">Company Foundation & Strategic Overview</h3>
                      <p className="text-gray-600">Joint venture structure, location details, and unique value proposition</p>
                    </div>
                  </div>
                  {expandedFAQ.generalOverview ? <ChevronDown className="h-6 w-6 text-slate-600" /> : <ChevronRight className="h-6 w-6 text-slate-600" />}
                </button>
                
                {expandedFAQ.generalOverview && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Complete Company & Strategic Foundation</h4>
                      
                      <div className="space-y-6">
                        <div className="bg-blue-50 rounded-lg p-6">
                          <h5 className="font-bold text-blue-600 mb-4">Q1: What is Madini Moyoni?</h5>
                          <p className="text-gray-700 leading-relaxed">
                            Madini Moyoni is a UK-Tanzania joint venture between Madini Moyoni Ltd (UK) and Afro Shamans Company Ltd (Tanzania) focused on sustainable copper mining in Mbesa, Tanzania. Our mission is to mechanize and scale artisanal mining operations while creating positive social, economic, and environmental impact.
                          </p>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-6">
                          <h5 className="font-bold text-blue-600 mb-4">Q2: What makes this investment opportunity unique for investors?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">We combine profitability with purpose by:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• Transforming local artisanal mining communities through mechanization and professional management</li>
                            <li>• Operating on the African Copper Belt with high-grade ore deposits</li>
                            <li>• Building local infrastructure (schools, clinics, roads, water systems)</li>
                            <li>• Creating a replicable model for sustainable mining across Africa</li>
                            <li>• Offering investors both financial returns and measurable social impact</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-6">
                          <h5 className="font-bold text-blue-600 mb-4">Q3: Where exactly is the mine located?</h5>
                          <p className="text-gray-700 leading-relaxed">
                            The mine is located in Mbesa, Tunduru district, southern Tanzania, on the famous African Copper Belt. We have renewable mining licenses covering approximately 220 acres of copper-rich land.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 2. Investment Structure & Financial Projections */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleFAQ('investmentStructure')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-emerald-600 text-white rounded-lg flex items-center justify-center">
                      <Calculator className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">Investment Structure & Financial Projections</h3>
                      <p className="text-gray-600">Complete investment terms, return projections, and tax considerations</p>
                    </div>
                  </div>
                  {expandedFAQ.investmentStructure ? <ChevronDown className="h-6 w-6 text-emerald-600" /> : <ChevronRight className="h-6 w-6 text-emerald-600" />}
                </button>
                
                {expandedFAQ.investmentStructure && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Investment Terms & Financial Intelligence</h4>
                      
                      <div className="space-y-6">
                        <div className="bg-green-50 rounded-lg p-6">
                          <h5 className="font-bold text-green-600 mb-4">Q4: What investment option is available to investors?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">We offer the Equity + Dividend structure for investors:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li><strong>Equity Share:</strong> 20%</li>
                              <li><strong>Dividends:</strong> 20% of profit share (8% GP) per annum from Year 2</li>
                              <li><strong>Exit Timeline:</strong> 5+ years</li>
                            </ul>
                            <ul className="text-sm space-y-1 text-gray-700">
                              <li><strong>Minimum Investment (US):</strong> $50,000</li>
                              <li><strong>Minimum Investment (UK):</strong> £5,000</li>
                              <li><strong>Investment Increments:</strong> $25,000</li>
                              <li><strong>Maximum Investment:</strong> $2,000,000</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-6">
                          <h5 className="font-bold text-green-600 mb-4">Q5: What are the projected returns?</h5>
                          <p className="text-gray-700 leading-relaxed mb-4">Based on our financial projections for a $2,000,000 investment example:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg p-4 border border-green-200">
                              <div className="space-y-2">
                                <div className="flex justify-between"><span>Total Dividends:</span><span className="font-bold text-green-700">$3,435,935</span></div>
                                <div className="flex justify-between"><span>Equity Exit Value:</span><span className="font-bold text-green-700">$16,350,758</span></div>
                                <div className="flex justify-between"><span>Total Return:</span><span className="font-bold text-green-700">$19,786,692</span></div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-green-200">
                              <div className="space-y-2">
                                <div className="flex justify-between"><span>Total Return Multiple:</span><span className="font-bold text-green-700">9.9x</span></div>
                                <div className="flex justify-between"><span>IRR:</span><span className="font-bold text-green-700">64%</span></div>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-3 italic">Note: These are projections based on current market conditions and are not guaranteed.</p>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-6">
                          <h5 className="font-bold text-green-600 mb-4">Q6: What should investors know about tax implications?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Investors should consult with qualified tax advisors regarding:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• Capital gains tax treatment on investment returns</li>
                            <li>• Foreign investment reporting requirements</li>
                            <li>• Potential foreign tax credit opportunities</li>
                            <li>• Annual dividend income taxation (for dividend option)</li>
                          </ul>
                          <p className="text-sm text-gray-600 mt-3 italic">We recommend consulting with a tax advisor familiar with foreign investments.</p>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-6">
                          <h5 className="font-bold text-green-600 mb-4">Q18: What revenue do you project?</h5>
                          <p className="text-gray-700 leading-relaxed mb-4">Our 5-year revenue projections total $87.1M USD:</p>
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center mb-4">
                            <div className="bg-white rounded p-3 border border-green-200">
                              <div className="font-bold text-green-700">$7.4M</div>
                              <div className="text-xs text-gray-600">Year 1</div>
                            </div>
                            <div className="bg-white rounded p-3 border border-green-200">
                              <div className="font-bold text-green-700">$14.5M</div>
                              <div className="text-xs text-gray-600">Year 2</div>
                            </div>
                            <div className="bg-white rounded p-3 border border-green-200">
                              <div className="font-bold text-green-700">$20.1M</div>
                              <div className="text-xs text-gray-600">Year 3</div>
                            </div>
                            <div className="bg-white rounded p-3 border border-green-200">
                              <div className="font-bold text-green-700">$22.0M</div>
                              <div className="text-xs text-gray-600">Year 4</div>
                            </div>
                            <div className="bg-white rounded p-3 border border-green-200">
                              <div className="font-bold text-green-700">$23.1M</div>
                              <div className="text-xs text-gray-600">Year 5</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-6">
                          <h5 className="font-bold text-green-600 mb-4">Q19: When will the operation become profitable?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">We project operating profit from Year 1:</p>
                          <div className="space-y-2">
                            <div className="bg-white rounded p-3 border border-green-200 flex justify-between">
                              <span>Year 1:</span><span className="font-bold text-green-700">$1.0M (13% gross margin)</span>
                            </div>
                            <div className="bg-white rounded p-3 border border-green-200 flex justify-between">
                              <span>Year 2:</span><span className="font-bold text-green-700">$5.6M (39% gross margin)</span>
                            </div>
                            <div className="bg-white rounded p-3 border border-green-200 flex justify-between">
                              <span>Year 3:</span><span className="font-bold text-green-700">$11.8M (59% gross margin)</span>
                            </div>
                            <div className="bg-white rounded p-3 border border-green-200 flex justify-between">
                              <span>Year 4:</span><span className="font-bold text-green-700">$12.3M (56% gross margin)</span>
                            </div>
                            <div className="bg-white rounded p-3 border border-green-200 flex justify-between">
                              <span>Year 5:</span><span className="font-bold text-green-700">$12.3M (53% gross margin)</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-6">
                          <h5 className="font-bold text-green-600 mb-4">Q20: How much will be invested in the local community?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Over 5 years, we plan to invest $33.6M in Mbesa, including our mine investment of over $30m in:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• Elevating the poor rural mining community to become wealthier, more-skilled and sustainably self-sufficient</li>
                            <li>• Building critical infrastructure including roads, clinic, school classrooms, water purification plant</li>
                            <li>• Modern, safe, clean, fully automated mine-site housing at least 40 workers</li>
                            <li>• Concentrating copper ore into pure copper cathodes, extracting precious metals (gold and silver)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 3. Technical & Operational Intelligence */}
            <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleFAQ('technicalOperational')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-amber-600 text-white rounded-lg flex items-center justify-center">
                      <Cog className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">Technical & Operational Intelligence</h3>
                      <p className="text-gray-600">Geological evidence, operational strategy, licenses, permits, and customer contracts</p>
                    </div>
                  </div>
                  {expandedFAQ.technicalOperational ? <ChevronDown className="h-6 w-6 text-amber-600" /> : <ChevronRight className="h-6 w-6 text-amber-600" />}
                </button>
                
                {expandedFAQ.technicalOperational && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Complete Technical & Operational Framework</h4>
                      
                      <div className="space-y-6">
                        <div className="bg-orange-50 rounded-lg p-6">
                          <h5 className="font-bold text-orange-600 mb-4">Q7: What evidence do you have of copper deposits?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Our geological evidence includes:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• Visual inspection, geophysics resistivity analysis and shallow drilling</li>
                            <li>• Historical studies by Australian mining company, Redcliffe Mining, in 2014</li>
                            <li>• Surveys show the presence of malachite and azurite, at surface/pit level</li>
                            <li>• Local knowledge that we can mine ore consistently at 5% purity across the mine-site</li>
                            <li>• Location on the proven African Copper Belt</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg p-6">
                          <h5 className="font-bold text-orange-600 mb-4">Q8: What is your operational strategy?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">We follow a capital-efficient, phased approach:</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded p-4 border border-orange-200">
                              <h6 className="font-semibold text-orange-800 mb-2">Phase 1</h6>
                              <p className="text-sm text-gray-700">Mechanical Crushing, Sorting & Grading</p>
                            </div>
                            <div className="bg-white rounded p-4 border border-orange-200">
                              <h6 className="font-semibold text-orange-800 mb-2">Phase 2</h6>
                              <p className="text-sm text-gray-700">Copper Concentration</p>
                            </div>
                            <div className="bg-white rounded p-4 border border-orange-200">
                              <h6 className="font-semibold text-orange-800 mb-2">Phase 3</h6>
                              <p className="text-sm text-gray-700">Precious Metal Extraction</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg p-6">
                          <h5 className="font-bold text-orange-600 mb-4">Q9: Do you have the necessary licenses and permits?</h5>
                          <p className="text-gray-700 leading-relaxed">
                            Yes, ASCL have been granted valuable, renewable mining licences by the Tanzanian Government which give them permission to mine precious metals and minerals across a specific area of around 220 acres in Mbesa.
                          </p>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg p-6">
                          <h5 className="font-bold text-orange-600 mb-4">Q10: Who are your customers?</h5>
                          <p className="text-gray-700 leading-relaxed">
                            We have long-term customer contracts in place and customers that are already contracted with us in Tanzania and China.
                          </p>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg p-6">
                          <h5 className="font-bold text-orange-600 mb-4">Q11: Who manages the operations?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Our joint venture combines:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white rounded p-4 border border-orange-200">
                              <h6 className="font-semibold text-trust-navy mb-2">Tanzania Operations (Afro Shamans Company Limited):</h6>
                              <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Operating for over 20 years as artisanal miners</li>
                                <li>• Around 25-30 core members who are family either directly connected by blood or lifelong ndugus (brethren) connected by faith and spirituality</li>
                                <li>• Led by experienced mining professionals including Elly Mshana (30+ years mineral exploration across East Africa) and Amani Blass Saleko (managed multiple mining sites across Tanzania)</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded p-4 border border-orange-200">
                              <h6 className="font-semibold text-trust-navy mb-2">UK/International Management (Madini Moyoni):</h6>
                              <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Directors have worked for years to support businesses and government officials in African countries</li>
                                <li>• Team includes Adrian Maile (40+ years business experience), specialists in procurement, finance, and technology</li>
                                <li>• Proven track record in emerging markets and African business development</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg p-6">
                          <h5 className="font-bold text-orange-600 mb-4">Q12: What mining experience does the team have?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Key team members include:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• <strong>Elly Mshana:</strong> Over 30 years in mineral exploration and heavy machinery operations across East Africa, including DRC, Zambia, and Mozambique</li>
                            <li>• <strong>Amani Blass Saleko:</strong> Head of mining site who has managed a number of mining sites across Tanzania</li>
                            <li>• <strong>Samson Mshana:</strong> Combined practical experience with independent studies in geology and geophysics</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg p-6">
                          <h5 className="font-bold text-orange-600 mb-4">Q13: What's the outlook for copper demand?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Strong fundamentals support our investment:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• The global demand for copper from renewable energy and technology industries is massive</li>
                            <li>• Copper is one of the most in-demand precious metals in the world today, with demand predicted to outstrip supply for years to come</li>
                            <li>• Tanzania holds 1.5% of global copper reserves with limited mining operations at present</li>
                            <li>• The Tanzanian Government is driving change and encouraging investment</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg p-6">
                          <h5 className="font-bold text-orange-600 mb-4">Q14: What makes Tanzania attractive for copper mining?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Key advantages include:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• Unprecedented opportunity with Tanzania holding 1.5% of global copper reserves</li>
                            <li>• Limited mining operations at present provides opportunity</li>
                            <li>• Government actively driving change</li>
                            <li>• Our site is on the famous African copper-belt that delivers enormous wealth in DRC and Uganda, but largely unexploited within Tanzania</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 4. Risk Analysis & Mitigation Strategies */}
            <Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleFAQ('riskAnalysis')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-rose-600 text-white rounded-lg flex items-center justify-center">
                      <AlertTriangle className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">Risk Analysis & Mitigation Strategies</h3>
                      <p className="text-gray-600">Comprehensive risk assessment with detailed mitigation protocols</p>
                    </div>
                  </div>
                  {expandedFAQ.riskAnalysis ? <ChevronDown className="h-6 w-6 text-rose-600" /> : <ChevronRight className="h-6 w-6 text-rose-600" />}
                </button>
                
                {expandedFAQ.riskAnalysis && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Comprehensive Risk Management Framework</h4>
                      
                      <div className="space-y-6">
                        <div className="bg-red-50 rounded-lg p-6">
                          <h5 className="font-bold text-red-600 mb-4">Q21: What are the primary investment risks?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Key risks include:</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="text-sm space-y-1 text-gray-700 ml-4">
                              <li>• Copper ore purity too low</li>
                              <li>• Cannot operate mine efficiently</li>
                              <li>• The Rainy Season(s)</li>
                              <li>• Machinery and equipment failure</li>
                            </ul>
                            <ul className="text-sm space-y-1 text-gray-700 ml-4">
                              <li>• Health and Safety issues</li>
                              <li>• Shortage of mining consumables</li>
                              <li>• Theft and security</li>
                              <li>• Not delivering socio-economic benefits</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-red-50 rounded-lg p-6">
                          <h5 className="font-bold text-red-600 mb-4">Q22: How do you mitigate these risks?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Our mitigation strategies include:</p>
                          <div className="space-y-4">
                            <div className="bg-white rounded p-4 border border-red-200">
                              <h6 className="font-semibold text-red-800 mb-2">Ore Quality & Operations</h6>
                              <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Mechanical sorting to process 4-5% purity ore, additional geological surveys</li>
                                <li>• Mining experts on-site, training ASCL personnel in advanced machinery</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded p-4 border border-red-200">
                              <h6 className="font-semibold text-red-800 mb-2">Weather & Equipment</h6>
                              <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Roads to main road, hard-standing areas, dewatering systems, covered warehouse</li>
                                <li>• Fail-over capability with two of most vehicles, on-site repair capability</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded p-4 border border-red-200">
                              <h6 className="font-semibold text-red-800 mb-2">Safety & Security</h6>
                              <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Consultant with track record, regular audits and risk assessments</li>
                                <li>• Trusted transportation and clearing agent, secure mine-site and supply chain</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 5. Investment Process & Implementation Timeline */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-0">
                <button 
                  onClick={() => toggleFAQ('investmentProcess')}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
                      <FileText className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-trust-navy">Investment Process & Implementation</h3>
                      <p className="text-gray-600">Complete investment procedures, timeline, benefits program, and exit strategies</p>
                    </div>
                  </div>
                  {expandedFAQ.investmentProcess ? <ChevronDown className="h-6 w-6 text-indigo-600" /> : <ChevronRight className="h-6 w-6 text-indigo-600" />}
                </button>
                
                {expandedFAQ.investmentProcess && (
                  <div className="px-6 pb-6 border-t bg-gray-50/50">
                    <div className="mt-6 bg-white rounded-lg p-6">
                      <h4 className="text-xl font-bold text-trust-navy mb-6">Complete Investment Process & Timeline</h4>
                      
                      <div className="space-y-6">
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q23: How do investors participate?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Contact us to discuss investment options:</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded p-4 border border-purple-200 text-center">
                              <span className="font-semibold text-trust-navy block">Email:</span>
                              <p className="text-gray-700">info@madinimoyoni.co.uk</p>
                            </div>
                            <div className="bg-white rounded p-4 border border-purple-200 text-center">
                              <span className="font-semibold text-trust-navy block">WhatsApp:</span>
                              <p className="text-gray-700">+447931657472</p>
                            </div>
                            <div className="bg-white rounded p-4 border border-purple-200 text-center">
                              <span className="font-semibold text-trust-navy block">Website:</span>
                              <p className="text-gray-700">www.madinimoyoni.co.uk</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q24: What are the minimum investment requirements?</h5>
                          <div className="bg-white rounded p-4 border border-purple-200">
                            <div className="space-y-2">
                              <p className="text-gray-700"><strong>Equity + Dividend Structure:</strong></p>
                              <ul className="text-sm space-y-1 text-gray-700 ml-4">
                                <li>• <strong>US Investors:</strong> $50,000 minimum, $25,000 increments</li>
                                <li>• <strong>UK Investors:</strong> £5,000 minimum</li>
                                <li>• <strong>Maximum Investment:</strong> $2,000,000</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q25: What investment benefits are available?</h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded p-4 border border-purple-200">
                              <h6 className="font-semibold text-trust-navy mb-2">Voyager Tier (£5k-£250k / $50k-$250k):</h6>
                              <p className="text-sm text-gray-700">Digital Certificate, recognition in "Investor Wall of Honour", invitation to visit funded social projects, annual video call, private networking session, limited-edition merchandise, quarterly briefings, personal planning session, optional advisory role, VIP access to major events</p>
                            </div>
                            <div className="bg-white rounded p-4 border border-purple-200">
                              <h6 className="font-semibold text-trust-navy mb-2">Navigator Tier ($250k-$1m):</h6>
                              <p className="text-sm text-gray-700">Everything in Voyager plus business-class flights for two to Tanzania, name recognition on infrastructure project, priority allocation in future investments, panel invite at annual impact briefing, one-on-one strategic session</p>
                            </div>
                            <div className="bg-white rounded p-4 border border-purple-200">
                              <h6 className="font-semibold text-trust-navy mb-2">Founder Tier ($1m-$2m):</h6>
                              <p className="text-sm text-gray-700">Everything in Navigator plus all-expenses-paid safari with first-class travel, private tour of mine site, VIP founder dinner in Dar es Salaam, early access to reports & strategy previews, branded gifts pack</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q26: What happens after I invest?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Our 3-month implementation timeline:</p>
                          <div className="space-y-3">
                            <div className="bg-white rounded p-4 border border-purple-200">
                              <h6 className="font-semibold text-purple-800 mb-2">Month 1:</h6>
                              <p className="text-sm text-gray-700">Apply funding, implement corporate structures, build operational plan. Procure heavy equipment, build mine-site accommodation, build local infrastructure</p>
                            </div>
                            <div className="bg-white rounded p-4 border border-purple-200">
                              <h6 className="font-semibold text-purple-800 mb-2">Month 2:</h6>
                              <p className="text-sm text-gray-700">Start social projects, start building community clinic. Implement compliance and safety standards, begin mining Copper ore, sign additional customer contracts</p>
                            </div>
                            <div className="bg-white rounded p-4 border border-purple-200">
                              <h6 className="font-semibold text-purple-800 mb-2">Month 3:</h6>
                              <p className="text-sm text-gray-700">Optimise operations, upscale volumes mined, plan future social projects</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q27: How and when can I exit my investment?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Exit options include:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• Trade sale to larger mining company</li>
                            <li>• Public flotation/IPO</li>
                            <li>• Share buy-back at fair market value</li>
                          </ul>
                          <p className="text-gray-700 leading-relaxed mt-3"><strong>Timeline:</strong> 5+ years</p>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q15: What measurable social impact will my investment create?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Your investment will fund:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• Employment for at least 40 workers at the mine site comfortably and employ many more</li>
                            <li>• Infrastructure: roads, a clinic, school classrooms, and a water purification plant</li>
                            <li>• Building and operating a farm so that local people can feed themselves</li>
                            <li>• Economic multiplier effect (one direct mining job impacts workforce and local economy by a factor of 2.6X)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q16: What are your environmental commitments?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">We are committed to:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• Investing in repairing local ecological systems and re-wilding the mine-site post-excavation</li>
                            <li>• Environmental compliance through NEMC EIA Submission & Approval (in progress)</li>
                            <li>• Align with ISO 14001 (Environmental Management Systems) by 2026</li>
                            <li>• Fairmined Certification (ARM / Fairtrade Africa) by 2027</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q17: How do you ensure community benefits are delivered?</h5>
                          <p className="text-gray-700 leading-relaxed">
                            We will appoint a village elder as a Trustee to ensure funds are allocated for intended purposes and that the local community is at the heart of our local social, economic and infrastructural projects' decision-making processes.
                          </p>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q28: What certifications are you pursuing?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">Our ESG roadmap includes:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• <strong>Environmental Certification:</strong> Align with ISO 14001 (Environmental Management Systems) by 2026</li>
                            <li>• <strong>Responsible Mining Certification:</strong> Fairmined Certification (ARM / Fairtrade Africa) by 2027</li>
                            <li>• <strong>Climate Action:</strong> Carbon footprint baseline & reduction targets by 2026</li>
                            <li>• <strong>Local Partnerships:</strong> Formal MOU with NGOs (e.g., LEAT, WWF Tanzania) by 2025</li>
                            <li>• <strong>ESG Reporting:</strong> Publish first Sustainability Impact Report by 2026</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-6">
                          <h5 className="font-bold text-purple-600 mb-4">Q29: What is your long-term vision?</h5>
                          <p className="text-gray-700 leading-relaxed mb-3">By 2027 and beyond, we aim to:</p>
                          <ul className="text-sm space-y-2 text-gray-700 ml-4">
                            <li>• Become a model for sustainable mining across Tanzania</li>
                            <li>• Drive circular economy practices by investing in local copper processing and reforestation projects</li>
                            <li>• Establish a Community Development Fund reinvesting profits into roads, education, healthcare, and clean energy projects</li>
                            <li>• Create a paradigm shift where Africa finally reaps the benefits of refining its own materials (copper cathodes and bars) rather than just ores/raw materials</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Comprehensive Investment Disclaimers */}
          <div className="mt-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-8 text-white border-2 border-slate-700">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-yellow-500 text-slate-900 px-4 py-2 rounded-lg font-bold mb-4">
                <Shield className="h-5 w-5 mr-2" />
                IMPORTANT INVESTMENT DISCLAIMERS
              </div>
              <h3 className="text-2xl font-bold">Legal & Risk Disclosures</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-yellow-400 mb-3">Financial Projections & Risk Warnings</h4>
                <ul className="space-y-2 text-sm">
                  <li>• All financial projections are estimates based on current market conditions and are not guaranteed</li>
                  <li>• Mining investments carry significant risks including total loss of capital</li>
                  <li>• Past performance and geological evidence do not guarantee future results</li>
                  <li>• Commodity prices, operational challenges, and regulatory changes can materially affect returns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-yellow-400 mb-3">Professional Advisory Requirements</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Consult with qualified tax and legal advisors before investing</li>
                  <li>• This document does not constitute an offer to sell securities</li>
                  <li>• Independent financial advice is recommended for all investment decisions</li>
                  <li>• Investors must meet applicable regulatory requirements for participation</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-600 text-center">
              <p className="text-slate-300 text-sm mb-6">
                For comprehensive risk disclosures and investment terms, please contact our investor relations team at 
                <span className="text-yellow-400 font-semibold"> info@madinimoyoni.co.uk</span>
              </p>
              <Button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 font-semibold px-6 py-2"
              >
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}