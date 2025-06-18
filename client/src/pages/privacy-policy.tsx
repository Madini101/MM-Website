export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-copper mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 2024
          </p>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Madini Moyoni Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website or 
                engage with our investment services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-3"><strong>Personal Information:</strong></p>
              <ul className="list-disc ml-6 mb-4">
                <li>Name, email address, phone number</li>
                <li>Investment experience and financial information</li>
                <li>Identity verification documents (for SEIS compliance)</li>
                <li>Tax information and National Insurance number</li>
              </ul>
              
              <p className="mb-3"><strong>Technical Information:</strong></p>
              <ul className="list-disc ml-6">
                <li>IP address, browser type, device information</li>
                <li>Usage data and website interaction patterns</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc ml-6">
                <li>Processing and managing your investment applications</li>
                <li>SEIS tax relief administration and HMRC reporting</li>
                <li>Communicating about your investments and company updates</li>
                <li>Complying with legal and regulatory obligations</li>
                <li>Improving our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="mb-3">We may share your information with:</p>
              <ul className="list-disc ml-6">
                <li>HMRC and other regulatory authorities (as required by law)</li>
                <li>Professional advisors (lawyers, accountants, auditors)</li>
                <li>Service providers (payment processors, administrative services)</li>
                <li>Third parties with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against 
                unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over 
                the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="mb-3">Under GDPR, you have the right to:</p>
              <ul className="list-disc ml-6">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, 
                please contact us through our website contact form.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}