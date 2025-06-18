export default function SeisInformation() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-copper mb-8">SEIS Information</h1>
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 2024
          </p>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. What is SEIS?</h2>
              <p>
                The Seed Enterprise Investment Scheme (SEIS) is a UK government initiative designed to encourage 
                investment in very early-stage companies by offering generous tax reliefs to individual investors 
                who purchase new shares in qualifying companies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. SEIS Tax Benefits</h2>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                <h3 className="font-bold text-green-800 mb-2">Income Tax Relief</h3>
                <p className="text-green-700">50% tax relief on investments up to £200,000 per tax year</p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <h3 className="font-bold text-blue-800 mb-2">Capital Gains Tax Relief</h3>
                <p className="text-blue-700">100% CGT exemption on gains if shares held for 3+ years</p>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                <h3 className="font-bold text-purple-800 mb-2">Capital Gains Deferral</h3>
                <p className="text-purple-700">Defer CGT on other gains by investing equivalent amount in SEIS</p>
              </div>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                <h3 className="font-bold text-orange-800 mb-2">Loss Relief</h3>
                <p className="text-orange-700">Tax relief on losses at your marginal rate</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Investor Eligibility</h2>
              <p className="mb-3">To qualify for SEIS relief, you must:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Be a UK resident for tax purposes</li>
                <li>Not be connected to the company (employee, director, or significant shareholder)</li>
                <li>Invest in new ordinary shares</li>
                <li>Pay UK income tax or capital gains tax</li>
                <li>Not have exceeded the annual investment limit of £200,000</li>
                <li>Hold the shares for at least 3 years to maintain CGT relief</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Company Qualifying Conditions</h2>
              <p className="mb-3">Madini Moyoni Ltd qualifies for SEIS as:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>An unquoted UK company</li>
                <li>Carrying on qualifying trade activities</li>
                <li>Less than 2 years old when first SEIS investment received</li>
                <li>Gross assets of £350,000 or less</li>
                <li>25 full-time equivalent employees or fewer</li>
                <li>Not controlled by another company</li>
                <li>Not listed on a recognised stock exchange</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Investment Limits</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900">Individual Investor</h4>
                    <p className="text-gray-700">Maximum: £200,000 per tax year</p>
                    <p className="text-gray-700">Minimum: £10 per investment</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Company</h4>
                    <p className="text-gray-700">Maximum: £350,000 lifetime</p>
                    <p className="text-gray-700">Maximum: £250,000 per tax year</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Process and Timeline</h2>
              <ol className="list-decimal ml-6 space-y-3">
                <li><strong>Investment:</strong> Make your investment in qualifying shares</li>
                <li><strong>SEIS3 Form:</strong> Receive SEIS3 certificate from the company (typically within 4 months)</li>
                <li><strong>Tax Relief:</strong> Claim income tax relief on your self-assessment or via HMRC</li>
                <li><strong>Holding Period:</strong> Hold shares for minimum 3 years for full benefits</li>
                <li><strong>Exit:</strong> Sell shares with CGT exemption after 3-year period</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Risks and Considerations</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <ul className="list-disc ml-6 space-y-2 text-yellow-800">
                  <li>Tax benefits depend on maintaining SEIS qualifying status</li>
                  <li>Early disposal may result in withdrawal of tax reliefs</li>
                  <li>SEIS rules may change or the scheme may be discontinued</li>
                  <li>Your personal tax circumstances affect available relief</li>
                  <li>The investment itself carries significant risk</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Example Calculation</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3">Investment: £10,000</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Initial Investment:</span>
                    <span>£10,000</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Income Tax Relief (50%):</span>
                    <span>-£5,000</span>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <span>Net Cost:</span>
                    <span>£5,000</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-3">
                    Plus: CGT exemption on gains and potential loss relief
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Important Notes</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>This information is based on current legislation and HMRC guidance</li>
                <li>Tax benefits depend on your individual circumstances</li>
                <li>You should seek independent tax advice before investing</li>
                <li>SEIS rules are subject to change by the government</li>
                <li>We will provide SEIS3 certificates to qualifying investors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">10. Further Information</h2>
              <p>
                For detailed SEIS guidance, visit: 
                <a href="https://www.gov.uk/guidance/seed-enterprise-investment-scheme" 
                   className="text-copper hover:underline ml-1" 
                   target="_blank" 
                   rel="noopener noreferrer">
                  HMRC SEIS Guidance
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}