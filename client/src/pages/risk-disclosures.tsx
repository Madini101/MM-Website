import { useEffect } from "react";
import { AlertTriangle, TrendingDown, Globe, Hammer, Zap, Building } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function RiskDisclosures() {
  useEffect(() => {
    document.title = "Risk Disclosures - Madini Moyoni";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="py-20 bg-trust-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Risk Disclosures
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Important risk factors that prospective investors must carefully consider before making investment decisions
          </p>
          <div className="mt-6 text-sm text-gray-400">
            Last updated: January 2025
          </div>
        </div>
      </section>

      {/* Critical Warning */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600 mr-4" />
              <h2 className="text-2xl font-bold text-red-800">CRITICAL INVESTMENT WARNING</h2>
            </div>
            <div className="space-y-4 text-red-800">
              <p className="text-lg font-semibold">
                THIS IS A HIGH-RISK INVESTMENT THAT MAY RESULT IN TOTAL LOSS OF CAPITAL
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mining investments are inherently speculative and volatile</li>
                <li>Past performance does not predict future results</li>
                <li>All financial projections are estimates subject to significant uncertainty</li>
                <li>Only invest capital you can afford to lose entirely</li>
                <li>Seek independent financial and legal advice before investing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Eligibility Notice */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-earth-gold/10 border-2 border-earth-gold/30 rounded-lg p-8 mb-8">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-earth-gold mr-4" />
              <h2 className="text-2xl font-bold text-trust-navy">Investment Eligibility & Accessibility</h2>
            </div>
            <div className="space-y-4 text-trust-navy">
              <p className="text-lg font-medium">
                Madini Moyoni offers strategic copper mining investment opportunities with flexible minimums starting from £5,000, 
                making institutional-quality investments accessible to qualified investors.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Investment Tiers:</h3>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Entry Level:</strong> £5,000 minimum</li>
                    <li>• <strong>Strategic Partnership:</strong> £250,000+</li>
                    <li>• <strong>Maximum Investment:</strong> £2,000,000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Eligibility Requirements:</h3>
                  <ul className="text-sm space-y-1">
                    <li>• UK qualified investor status required</li>
                    <li>• Suitability assessment mandatory</li>
                    <li>• Investment experience verification</li>
                    <li>• Risk tolerance evaluation</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg border border-earth-gold/50">
                <p className="text-sm text-trust-navy font-medium">
                  <strong>Important:</strong> All investments must comply with UK regulatory requirements. 
                  Prospective investors must meet specific income, asset, or professional experience thresholds 
                  and complete comprehensive due diligence before investment approval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Categories */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            {/* Market & Commodity Risks */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <TrendingDown className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Market & Commodity Price Risks</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Copper prices are subject to significant volatility that directly impacts investment returns:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Price Volatility:</strong> Copper prices can fluctuate dramatically due to global supply/demand, economic conditions, and speculation</li>
                  <li><strong>Market Cyclicality:</strong> Mining markets experience extended periods of boom and bust cycles</li>
                  <li><strong>Global Economic Impact:</strong> Economic downturns, trade wars, and geopolitical tensions severely affect copper demand</li>
                  <li><strong>Supply Chain Disruptions:</strong> Global supply chain issues can impact pricing and operations</li>
                  <li><strong>Currency Risk:</strong> Exchange rate fluctuations between GBP, USD, and Tanzanian Shilling affect returns</li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 font-medium">
                    Historical copper prices have ranged from $1.25 to over $10.00 per pound, demonstrating extreme volatility.
                  </p>
                </div>
              </div>
            </div>

            {/* Operational Risks */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Hammer className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Operational & Technical Risks</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Mining operations face numerous technical and operational challenges:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Geological Risk:</strong> Actual mineral reserves may differ significantly from estimates</li>
                  <li><strong>Equipment Failure:</strong> Mining equipment is subject to breakdowns, requiring expensive repairs and replacements</li>
                  <li><strong>Production Shortfalls:</strong> Actual production may be lower than projected due to technical difficulties</li>
                  <li><strong>Environmental Challenges:</strong> Weather, natural disasters, and environmental issues can halt operations</li>
                  <li><strong>Labour Relations:</strong> Strikes, disputes, and skilled labour shortages can impact productivity</li>
                  <li><strong>Technology Obsolescence:</strong> Rapid changes in mining technology may require significant additional investment</li>
                </ul>
              </div>
            </div>

            {/* Regulatory & Political Risks */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Regulatory & Political Risks</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Operations in Tanzania involve significant political and regulatory uncertainties:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Government Policy Changes:</strong> New mining laws, tax policies, or environmental regulations may severely impact operations</li>
                  <li><strong>Political Instability:</strong> Political changes or civil unrest could threaten operations and asset security</li>
                  <li><strong>Permit & Licensing Risk:</strong> Failure to obtain or maintain necessary permits could halt operations</li>
                  <li><strong>Expropriation Risk:</strong> Government may nationalise or seize mining assets with limited compensation</li>
                  <li><strong>Local Community Relations:</strong> Opposition from local communities could lead to operational disruptions</li>
                  <li><strong>Corruption & Governance:</strong> Poor governance and corruption may affect business operations and legal protections</li>
                </ul>
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-red-800 font-medium">
                    Tanzania has historically implemented sudden policy changes affecting the mining sector, including export bans and increased taxation.
                  </p>
                </div>
              </div>
            </div>

            {/* Environmental & Social Risks */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Zap className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Environmental & Social Risks</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Mining operations carry significant environmental and social risks:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Environmental Damage:</strong> Mining activities may cause soil, water, and air contamination</li>
                  <li><strong>Remediation Costs:</strong> Environmental cleanup costs may far exceed projections</li>
                  <li><strong>Climate Change Impact:</strong> Extreme weather events and changing climate patterns may disrupt operations</li>
                  <li><strong>Social License Risk:</strong> Loss of community support could force operational shutdowns</li>
                  <li><strong>ESG Compliance:</strong> Increasing ESG requirements may impose additional costs and operational constraints</li>
                  <li><strong>Health & Safety:</strong> Workplace accidents could result in legal liability and reputational damage</li>
                </ul>
              </div>
            </div>

            {/* Financial & Liquidity Risks */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Building className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Financial & Liquidity Risks</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Investment structure and liquidity present significant risks:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Illiquid Investment:</strong> No secondary market exists; funds may be locked up for extended periods</li>
                  <li><strong>Capital Requirements:</strong> Additional funding may be required beyond initial investment</li>
                  <li><strong>Cash Flow Risk:</strong> Irregular or insufficient cash flows may delay or eliminate dividend payments</li>
                  <li><strong>Dilution Risk:</strong> Future fundraising may dilute existing investor ownership</li>
                  <li><strong>Exit Strategy Risk:</strong> Limited options for realising investment returns</li>
                  <li><strong>Valuation Risk:</strong> Difficulty in accurately valuing investment due to lack of comparable transactions</li>
                </ul>
              </div>
            </div>

            {/* Forward-Looking Statements */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-trust-navy mb-6">Forward-Looking Statements Disclaimer</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  This website contains forward-looking statements based on current expectations and assumptions. 
                  These statements involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800">
                    <strong>No Guarantees:</strong> All financial projections, including 9.9x returns and 64% IRR, are estimates only. 
                    Actual results may be significantly lower or result in total loss of investment.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Contact */}
            <div className="bg-trust-navy rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Risk Management & Legal Contact</h2>
              <p className="mb-4">
                For questions about risk factors or to request additional risk documentation:
              </p>
              <div className="space-y-2">
                <p><strong>All Inquiries:</strong> info@madinimoyoni.co.uk</p>
              </div>
              <div className="mt-6 p-4 bg-red-600 rounded-lg">
                <p className="font-semibold">
                  Remember: Only invest money you can afford to lose completely. Seek professional advice before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom spacing for breadcrumb overlap prevention */}
      <div className="h-16"></div>
    </div>
  );
}