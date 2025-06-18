import logoImage from "@assets/Madini Moyoni Logo 2025.jpeg";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="Madini Moyoni Logo" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-white">MADINI MOYONI</h3>
                <p className="text-sm text-gray-300">Putting Heart Into Minerals</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Transforming communities through sustainable mining partnerships between 
              UK expertise and Tanzanian heritage.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Investment</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("seis-calculator")}
                  className="hover:text-white transition-colors"
                >
                  Use of Funds: £250k SEIS Investment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("investment")}
                  className="hover:text-white transition-colors"
                >
                  Strategic Investment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("financials")}
                  className="hover:text-white transition-colors"
                >
                  Financial Data
                </button>
              </li>

            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("team")}
                  className="hover:text-white transition-colors"
                >
                  Leadership Team
                </button>
              </li>

            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection("contact")}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Get In Touch
              </button>
              <p className="text-gray-300 text-sm">
                Investment Enquiries:<br />
                Available by appointment
              </p>

            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/risk-disclosures" className="text-gray-400 hover:text-white transition-colors">
              Risk Disclosures
            </a>
            <a href="/seis-information" className="text-gray-400 hover:text-white transition-colors">
              SEIS Information
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              © 2025 Madini Moyoni Ltd. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 max-w-4xl mx-auto">
              This is a financial promotion. Capital at risk. SEIS tax reliefs depend on personal circumstances and may be subject to change. 
              Past performance is not indicative of future results. The value of investments can go down as well as up. 
              You may not get back the original amount invested.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
