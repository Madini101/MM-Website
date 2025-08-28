import { useEffect } from "react";
import { Scale, FileText, AlertTriangle, Shield, DollarSign, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service - Madini Moyoni";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="py-20 bg-trust-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-earth-gold rounded-full flex items-center justify-center">
              <Scale className="h-10 w-10 text-trust-navy" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Legal terms governing your use of our website and investment opportunities
          </p>
          <div className="mt-6 text-sm text-gray-400">
            Last updated: January 2025
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            {/* Acceptance of Terms */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service govern your relationship with Madini Moyoni Ltd ("Company", "we", "us", or "our") 
                  regarding your use of our website and investment opportunities.
                </p>
              </div>
            </div>

            {/* Investment Disclaimer */}
            <div className="bg-yellow-50 rounded-lg p-8 shadow-lg border border-yellow-200">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Investment Disclaimer</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white p-4 rounded-lg border border-yellow-300">
                  <p className="font-semibold text-trust-navy mb-2">IMPORTANT INVESTMENT WARNING</p>
                  <p>
                    This website contains information about investment opportunities that involve significant financial risk. 
                    All investments may result in partial or total loss of capital.
                  </p>
                </div>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Past performance does not guarantee future results</li>
                  <li>All financial projections are estimates and not guaranteed</li>
                  <li>Mining investments carry specific industry risks including commodity price volatility</li>
                  <li>Investment opportunities are restricted to qualified and accredited investors only</li>
                  <li>You should consult with financial and legal advisors before making investment decisions</li>
                </ul>
              </div>
            </div>

            {/* Accredited Investor Requirements */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Investment Eligibility & Requirements</h2>
              </div>
              <div className="space-y-6 text-gray-700">
                <div className="bg-earth-gold/10 p-4 rounded-lg border border-earth-gold/30">
                  <h3 className="text-lg font-semibold text-trust-navy mb-2 flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-earth-gold" />
                    Flexible Investment Minimums
                  </h3>
                  <p className="text-trust-navy font-medium mb-2">
                    We offer investment opportunities starting from £5,000, making strategic copper mining investment accessible to a broader range of qualified investors.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Minimum Investment:</strong> £5,000 for qualifying investors</li>
                    <li><strong>Strategic Partnerships:</strong> £250,000+ for enhanced engagement opportunities</li>
                    <li><strong>Flexible Structure:</strong> Accommodating various investment capacities and goals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-trust-navy mb-3">UK Investor Qualification Requirements</h3>
                  <p className="mb-3">
                    Investment opportunities are available to qualified investors who meet one or more of the following criteria under UK financial regulations:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-trust-navy mb-2">High Net Worth Individuals:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Annual income exceeding £100,000, or</li>
                        <li>Net assets exceeding £250,000 (excluding primary residence)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-trust-navy mb-2">Sophisticated Investors:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Professional experience in investment matters</li>
                        <li>Certified sophisticated investor status</li>
                        <li>Self-certified sophisticated investor (subject to verification)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-trust-navy mb-2">Professional Clients:</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Professional investment institutions</li>
                        <li>Eligible counterparties under FCA regulations</li>
                        <li>Regulated financial services firms</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-trust-navy mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
                    Investment Suitability Assessment
                  </h4>
                  <p className="text-sm">
                    All prospective investors must complete a suitability assessment to confirm eligibility and investment capacity. 
                    This includes verification of income, assets, investment experience, and understanding of mining investment risks. 
                    Investments must represent a reasonable proportion of your overall investment portfolio.
                  </p>
                </div>

                <div className="mt-4 p-4 bg-trust-navy/10 rounded-lg">
                  <p className="text-trust-navy font-medium">
                    <strong>Important:</strong> You will be required to confirm your investor qualification status and complete 
                    appropriate documentation before accessing detailed investment information or making any investment commitment.
                  </p>
                </div>
              </div>
            </div>

            {/* Website Usage */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Website Usage Terms</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-trust-navy mb-2">Permitted Use</h3>
                  <p>You may use this website for:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Reviewing investment opportunities and company information</li>
                    <li>Contacting us regarding potential investments</li>
                    <li>Downloading materials for your personal investment evaluation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-trust-navy mb-2">Prohibited Activities</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Reproducing or redistributing content without written permission</li>
                    <li>Using automated systems to access or collect information</li>
                    <li>Attempting to gain unauthorised access to any systems</li>
                    <li>Sharing confidential information with non-accredited parties</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Financial Projections */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <DollarSign className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Financial Projections & Forward-Looking Statements</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  This website contains forward-looking statements and financial projections that involve risks and uncertainties. 
                  Actual results may differ materially from those projected.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-trust-navy mb-2">Key Risk Factors Include:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Copper price volatility and commodity market conditions</li>
                    <li>Regulatory changes in Tanzania and international markets</li>
                    <li>Operational challenges in mining and processing</li>
                    <li>Environmental and social factors</li>
                    <li>Currency exchange rate fluctuations</li>
                    <li>Political and economic stability in operating regions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-trust-navy mb-6">Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  To the maximum extent permitted by law, Madini Moyoni Ltd shall not be liable for any direct, indirect, 
                  incidental, special, consequential, or punitive damages arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use or inability to use this website</li>
                  <li>Investment decisions based on information provided</li>
                  <li>Any errors or omissions in content</li>
                  <li>Any interruption or cessation of transmission to or from the website</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-trust-navy mb-6">Governing Law & Jurisdiction</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of England and Wales. 
                  Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the English courts.
                </p>
                <p>
                  Investment activities are subject to applicable securities laws in the investor's jurisdiction.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-trust-navy rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Legal & Compliance Contact</h2>
              <p className="mb-4">
                For questions about these Terms of Service or legal matters:
              </p>
              <div className="space-y-2">
                <p><strong>All Inquiries:</strong> info@madinimoyoni.co.uk</p>
                <p><strong>UK Operations:</strong> Madini Moyoni Ltd, United Kingdom</p>
                <p><strong>Tanzania Operations:</strong> Mbesa, Mbeya Region, Tanzania</p>
                <p><strong>Joint Venture:</strong> Afro Shamans Company Ltd (ASCL)</p>
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