export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-copper mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 2024
          </p>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Madini Moyoni Ltd website and services, you agree to be bound by these 
                Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p>
                Madini Moyoni Ltd provides investment opportunities in copper mining operations in Tanzania, 
                including SEIS-qualifying investments. Our services include:
              </p>
              <ul className="list-disc ml-6 mt-3">
                <li>Investment facilitation and management</li>
                <li>SEIS tax relief administration</li>
                <li>Investor communications and reporting</li>
                <li>Mining operation oversight and development</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Investment Risks</h2>
              <p className="mb-3">You acknowledge that:</p>
              <ul className="list-disc ml-6">
                <li>All investments carry risk and you may lose some or all of your investment</li>
                <li>Past performance is not indicative of future results</li>
                <li>SEIS tax reliefs depend on personal circumstances and may change</li>
                <li>Mining operations are subject to operational, environmental, and regulatory risks</li>
                <li>Investments may be illiquid and difficult to sell</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Eligibility</h2>
              <p>
                To invest through our services, you must be at least 18 years old, a UK resident for tax purposes 
                (for SEIS investments), and have the legal capacity to enter into binding agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Prohibited Uses</h2>
              <p className="mb-3">You may not use our services to:</p>
              <ul className="list-disc ml-6">
                <li>Violate any applicable laws or regulations</li>
                <li>Provide false or misleading information</li>
                <li>Engage in money laundering or terrorist financing</li>
                <li>Interfere with the security or operation of our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of 
                Madini Moyoni Ltd and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Madini Moyoni Ltd shall not be liable for any indirect, 
                incidental, special, or consequential damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of England and Wales, and any disputes will be 
                subject to the exclusive jurisdiction of the English courts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us through our website contact form.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}