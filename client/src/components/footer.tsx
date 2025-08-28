import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram } from "lucide-react";
import Logo from "@/components/logo";

export default function Footer() {
  const handleNavClick = (href: string) => {
    // Scroll to top when navigating
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gradient-to-br from-trust-navy-900 via-trust-navy-800 to-trust-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-earth-gold/5 via-transparent to-earth-gold/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Logo size="xl" className="ring-2 ring-earth-gold/70 shadow-2xl" />
              <div>
                <div className="font-bold text-2xl text-white drop-shadow-lg">Madini Moyoni</div>
                <div className="text-sm text-earth-gold font-medium">Strategic Mining Investment</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sustainable copper mining operations in Tanzania, creating value for investors 
              while positively impacting local communities.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/madini-moyoni-ltd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-earth-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/watch?v=CTn3kkD128w" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-earth-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-earth-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-earth-gold border-b border-earth-gold/30 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" onClick={() => handleNavClick("/")} className="text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/investors" onClick={() => handleNavClick("/investors")} className="text-sm text-gray-300 hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/operations" onClick={() => handleNavClick("/operations")} className="text-sm text-gray-300 hover:text-white transition-colors">
                  Operations
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => handleNavClick("/about")} className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => handleNavClick("/contact")} className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Investor Resources */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-earth-gold border-b border-earth-gold/30 pb-2">Investor Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/investors#investment-highlights" onClick={() => handleNavClick("/investors#investment-highlights")} className="text-sm text-gray-300 hover:text-white transition-colors">
                  Financial Analysis
                </Link>
              </li>
              <li>
                <Link href="/operations" onClick={() => handleNavClick("/operations")} className="text-sm text-gray-300 hover:text-white transition-colors">
                  Mining Operations
                </Link>
              </li>

              <li>
                <Link href="/team" onClick={() => handleNavClick("/team")} className="text-sm text-gray-300 hover:text-white transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/impact" onClick={() => handleNavClick("/impact")} className="text-sm text-gray-300 hover:text-white transition-colors">
                  Community Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-earth-gold border-b border-earth-gold/30 pb-2">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-earth-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">info@madinimoyoni.co.uk</p>
                  <p className="text-xs text-gray-400">All Inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-earth-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Mbesa, Tanzania</p>
                  <p className="text-xs text-gray-400">Tanzania Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Madini Moyoni. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" onClick={() => handleNavClick("/privacy-policy")} className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" onClick={() => handleNavClick("/terms-of-service")} className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/risk-disclosures" onClick={() => handleNavClick("/risk-disclosures")} className="text-sm text-gray-400 hover:text-white transition-colors">
                Risk Disclosures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}