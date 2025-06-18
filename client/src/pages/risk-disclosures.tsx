export default function RiskDisclosures() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-copper mb-8">Risk Disclosures</h1>
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 2024
          </p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700 font-medium">
              <strong>Important:</strong> Investing in early-stage companies and mining operations involves significant risks. 
              You should carefully consider these risks before making any investment decision.
            </p>
          </div>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. General Investment Risks</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Loss of Capital:</strong> You may lose some or all of your investment</li>
                <li><strong>Illiquidity:</strong> Your investment may be difficult or impossible to sell</li>
                <li><strong>No Guaranteed Returns:</strong> There is no guarantee of profits or income</li>
                <li><strong>Dilution:</strong> Future fundraising may reduce your percentage ownership</li>
                <li><strong>Long-term Investment:</strong> Investments may be held for extended periods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Mining Industry Risks</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Operational Risks:</strong> Equipment failure, safety incidents, production delays</li>
                <li><strong>Geological Risks:</strong> Uncertainty about mineral reserves and quality</li>
                <li><strong>Commodity Price Risk:</strong> Copper prices are volatile and unpredictable</li>
                <li><strong>Environmental Risks:</strong> Environmental damage, cleanup costs, regulatory action</li>
                <li><strong>Technical Risks:</strong> Mining technology may not perform as expected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Country and Political Risks</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Political Instability:</strong> Changes in government or policy in Tanzania</li>
                <li><strong>Regulatory Changes:</strong> New laws affecting mining operations or foreign investment</li>
                <li><strong>Currency Risk:</strong> Fluctuations in exchange rates between GBP, USD, and TZS</li>
                <li><strong>Infrastructure Risks:</strong> Dependence on local infrastructure and utilities</li>
                <li><strong>Nationalisation Risk:</strong> Government seizure of mining assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. SEIS-Specific Risks</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Tax Relief Dependency:</strong> SEIS benefits depend on maintaining qualifying status</li>
                <li><strong>Personal Circumstances:</strong> Tax relief depends on your individual tax position</li>
                <li><strong>Government Policy:</strong> SEIS scheme rules may change or be withdrawn</li>
                <li><strong>Holding Period:</strong> Early disposal may result in loss of tax benefits</li>
                <li><strong>HMRC Compliance:</strong> Failure to meet SEIS requirements could result in benefit withdrawal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Company-Specific Risks</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Early Stage:</strong> Limited operating history and unproven business model</li>
                <li><strong>Management Risk:</strong> Dependence on key personnel</li>
                <li><strong>Funding Risk:</strong> May require additional funding which may not be available</li>
                <li><strong>Competition:</strong> Competitive pressures from other mining companies</li>
                <li><strong>Partnership Risk:</strong> Dependence on local partnerships in Tanzania</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Market Risks</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Economic Conditions:</strong> Global economic downturns affecting commodity demand</li>
                <li><strong>Interest Rates:</strong> Changes in interest rates affecting investment attractiveness</li>
                <li><strong>Supply and Demand:</strong> Changes in global copper supply and demand</li>
                <li><strong>Technology Changes:</strong> New technologies affecting copper demand or mining methods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Suitability</h2>
              <p className="mb-3">This investment may be suitable for you if:</p>
              <ul className="list-disc ml-6 mb-4">
                <li>You can afford to lose your entire investment</li>
                <li>You understand and accept the risks outlined above</li>
                <li>You have sufficient liquid assets for your other needs</li>
                <li>You can hold the investment for the long term</li>
                <li>You meet the SEIS eligibility requirements</li>
              </ul>
              
              <p className="font-medium text-red-600">
                This investment is not suitable if you cannot afford to lose your investment or need quick access to your money.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Professional Advice</h2>
              <p>
                You should seek independent financial, legal, and tax advice before making any investment decision. 
                This document does not constitute investment advice and should not be relied upon as such.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}