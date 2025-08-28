import { useEffect } from "react";
import { Shield, Eye, Lock, FileText, Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - Madini Moyoni";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="py-20 bg-trust-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-earth-gold rounded-full flex items-center justify-center">
              <Shield className="h-10 w-10 text-trust-navy" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy and data security are fundamental to our commitment to responsible business practices
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
            
            {/* Information We Collect */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Eye className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold text-trust-navy mb-2">Personal Information</h3>
                  <p>When you contact us or express investment interest, we may collect:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Name and contact information (email, phone)</li>
                    <li>Investment experience and accreditation status</li>
                    <li>Financial information relevant to investment suitability</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-trust-navy mb-2">Technical Information</h3>
                  <p>We automatically collect certain technical information including:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Website usage patterns and preferences</li>
                    <li>Device and operating system information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We use collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to investment inquiries and provide information</li>
                  <li>Assess investor suitability and accreditation requirements</li>
                  <li>Send periodic updates about investment opportunities</li>
                  <li>Comply with regulatory requirements and legal obligations</li>
                  <li>Improve our website and services</li>
                  <li>Protect against fraud and unauthorised access</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Lock className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Data Protection & Security</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We implement robust security measures to protect your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encrypted data transmission and storage</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Regular security assessments and updates</li>
                  <li>Compliance with UK GDPR and applicable data protection laws</li>
                </ul>
                <div className="mt-6 p-4 bg-earth-gold/10 rounded-lg border border-earth-gold/30">
                  <p className="text-trust-navy font-medium">
                    We retain personal information only as long as necessary for the purposes outlined in this policy or as required by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold text-trust-navy">Your Rights</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Under UK GDPR and applicable privacy laws, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information we hold</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Restrict or object to processing of your information</li>
                  <li>Data portability where applicable</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>
            </div>

            {/* Third Party Sharing */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-trust-navy mb-6">Information Sharing</h2>
              <div className="space-y-4 text-gray-700">
                <p>We do not sell or rent personal information to third parties. We may share information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Professional advisors (legal, accounting, regulatory) bound by confidentiality</li>
                  <li>Service providers who assist in our operations under strict confidentiality agreements</li>
                  <li>Regulatory authorities when required by law</li>
                  <li>Third parties with your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-trust-navy rounded-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <Mail className="h-6 w-6 text-earth-gold mr-3" />
                <h2 className="text-2xl font-bold">Contact Us About Privacy</h2>
              </div>
              <p className="mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> info@madinimoyoni.co.uk</p>
                <p><strong>UK Operations:</strong> Madini Moyoni Ltd, Company House Registration Required</p>
                <p><strong>Tanzania Operations:</strong> Mbesa, Mbeya Region, Tanzania</p>
                <p><strong>Joint Venture Partner:</strong> Afro Shamans Company Ltd (ASCL), Tanzania</p>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-sm">
                  We are committed to resolving privacy concerns promptly and will respond to requests within 30 days as required by applicable law.
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