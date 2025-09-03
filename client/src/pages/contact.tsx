import Contact from "@/components/contact";
import mbesaMineImage from "@assets/Mbesa Copper Mine wide shot.jpg";
import { Building2, Shield, TrendingUp, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Refined Contact Header */}
      <div className="bg-white border-b border-gray-200 py-6 sm:py-8 relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="text-center">
            {/* Compact Professional Badge */}
            <div className="inline-flex items-center bg-trust-navy text-white px-6 py-2 rounded-sm text-sm font-semibold mb-4">
              <Shield className="h-4 w-4 mr-2" />
              INVESTOR CONTACT
            </div>
            
            {/* Clean Headlines */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy mb-3">
              Connect with Madini Moyoni
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-4xl mx-auto px-4">
              Strategic Partnership & Investment Inquiries • Direct Executive Access
            </p>
            
            {/* Compact Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl text-earth-gold font-bold">$2M</div>
                <div className="text-sm text-trust-navy font-medium">Investment Target</div>
                <div className="text-xs text-gray-600">Strategic Equity</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl text-earth-gold font-bold">15+</div>
                <div className="text-sm text-trust-navy font-medium">Years Experience</div>
                <div className="text-xs text-gray-600">Mining Operations</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl text-earth-gold font-bold">500+</div>
                <div className="text-sm text-trust-navy font-medium">Miners Supported</div>
                <div className="text-xs text-gray-600">Community Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-20">
        <Contact />
      </div>
    </div>
  );
}