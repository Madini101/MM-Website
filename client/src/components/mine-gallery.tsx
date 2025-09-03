import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Building, MapPin, Users, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images directly
import mineImage1 from "@assets/WhatsApp Image 2025-08-18 at 01.03.01_1755479799119.jpeg";
import mineImage2 from "@assets/WhatsApp Image 2025-08-18 at 01.03.01 (4)_1755479799122.jpeg";
import mineImage3 from "@assets/WhatsApp Image 2025-08-18 at 01.03.01 (3)_1755479799123.jpeg";
import mineImage4 from "@assets/WhatsApp Image 2025-08-18 at 01.03.01 (2)_1755479799123.jpeg";
import mineImage5 from "@assets/WhatsApp Image 2025-08-18 at 01.03.01 (1)_1755479799124.jpeg";
import mineImage6 from "@assets/WhatsApp Image 2025-08-18 at 00.26.05_1755479799125.jpeg";
import mineImage7 from "@assets/WhatsApp Image 2025-08-18 at 00.26.04_1755479799125.jpeg";
import mineImage8 from "@assets/WhatsApp Image 2025-08-18 at 00.26.04 (1)_1755479799125.jpeg";
import mineImage9 from "@assets/WhatsApp Image 2025-08-18 at 00.26.03_1755479799126.jpeg";
import mineImage10 from "@assets/WhatsApp Image 2025-08-18 at 00.26.03 (2)_1755479799127.jpeg";
import mineImage11 from "@assets/WhatsApp Image 2025-08-18 at 00.26.03 (1)_1755479799127.jpeg";
import mineImage12 from "@assets/WhatsApp Image 2025-08-18 at 00.26.02_1755479799128.jpeg";

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  category: string;
}

export default function MineGallery() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Images are loading successfully - removing debug logs

  const mineImages: GalleryImage[] = [
    {
      src: mineImage1,
      title: "Mbesa Site Development", 
      description: "Site preparation and development in Mbesa, Tanzania",
      category: "Operations"
    },
    {
      src: mineImage2,
      title: "Site Preparation",
      description: "Development and preparation activities",
      category: "Operations"
    },
    {
      src: mineImage3,
      title: "Equipment Preparation",
      description: "Mining machinery setup and preparation",
      category: "Equipment"
    },
    {
      src: mineImage4,
      title: "Site Infrastructure",
      description: "Development facility infrastructure",
      category: "Infrastructure"
    },
    {
      src: mineImage5,
      title: "Site Planning",
      description: "Strategic site planning at Mbesa",
      category: "Operations"
    },
    {
      src: mineImage6,
      title: "Local Team",
      description: "Community partners and development team",
      category: "Team"
    },
    {
      src: mineImage7,
      title: "Mining Operations",
      description: "Active mining operations at Mbesa site",
      category: "Operations"
    },
    {
      src: mineImage8,
      title: "Equipment Setup",
      description: "Mining equipment preparation and setup",
      category: "Equipment"
    },
    {
      src: mineImage9,
      title: "Site Development",
      description: "Ongoing site development activities",
      category: "Operations"
    },
    {
      src: mineImage10,
      title: "Processing Area",
      description: "Copper processing and concentration area",
      category: "Infrastructure"
    },
    {
      src: mineImage11,
      title: "Community Workspace",
      description: "Local community mining workspace",
      category: "Community"
    },
    {
      src: mineImage12,
      title: "Extraction Site",
      description: "Active copper extraction operations",
      category: "Operations"
    }
  ];

  const totalPages = mineImages.length;

  const nextPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPage = (page: number) => {
    if (isAnimating || page === currentPage) return;
    setIsAnimating(true);
    setCurrentPage(page);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextPage();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const currentImage = mineImages[currentPage];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-trust-navy-900 via-trust-navy-800 to-trust-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-earth-gold text-trust-navy px-6 py-3 rounded-full font-bold text-sm mb-6 shadow-lg pulse-ring">
            <Building className="h-4 w-4 mr-2" />
            Tanzania Operations Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 premium-heading">
            Proven Operations Excellence
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed font-normal px-4">
            Strategic mining operations and infrastructure development at our Mbesa copper extraction facility, 
            showcasing established capabilities and investment-ready expansion opportunities in Tanzania's copper belt.
          </p>
        </div>

        {/* Magazine-Style Gallery */}
        <div className="relative">
          {/* Main Magazine Spread */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative magazine-shadow">
            {/* Magazine Header */}
            <div className="bg-gradient-to-r from-trust-navy to-trust-navy-800 text-white p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">MBESA OPERATIONS</h3>
                  <p className="text-earth-gold font-semibold text-sm sm:text-base">Site Documentation • Tanzania</p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-earth-gold">
                    {String(currentPage + 1).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-300">of {totalPages}</div>
                </div>
              </div>
            </div>

            {/* Magazine Content - Made Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
              {/* Left Page - Image */}
              <div className="relative overflow-hidden bg-gray-100 flex flex-col">
                <div className={`relative h-[500px] sm:h-[600px] lg:flex-1 transition-all duration-500 ${isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
                  {/* Images loading successfully */}
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    className="w-full h-full object-cover block"
                    style={{ minHeight: '400px' }}
                    onLoad={() => {
                      console.log('✓ Image loaded successfully:', currentImage.src);
                    }}
                    onError={(e) => {
                      console.error('✗ Image failed to load:', currentImage.src);
                      const target = e.currentTarget;
                      target.style.backgroundColor = '#f3f4f6';
                      target.style.display = 'flex';
                      target.style.alignItems = 'center';
                      target.style.justifyContent = 'center';
                      target.innerHTML = `<div style="text-align: center; color: #6b7280; padding: 20px;"><div>❌ Image Loading Failed</div><div style="font-size: 12px; margin-top: 8px;">${currentImage.title}</div><div style="font-size: 10px; margin-top: 4px;">Path: ${currentImage.src}</div></div>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                      <div className="flex items-center mb-2">
                        <span className="bg-earth-gold text-trust-navy px-3 py-1 rounded-full text-xs font-bold mr-3">
                          {currentImage.category}
                        </span>
                        <span className="text-trust-navy/70 text-xs">Live from Mbesa</span>
                      </div>
                      <h4 className="text-sm sm:text-lg font-bold text-trust-navy mb-1">{currentImage.title}</h4>
                      <p className="text-trust-navy/80 text-xs sm:text-sm leading-relaxed">{currentImage.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Buttons - Under Image on Left */}
                <div className="bg-white p-3 sm:p-4 flex space-x-2">
                  <Button
                    onClick={prevPage}
                    variant="outline"
                    size="sm"
                    className="border-trust-navy text-trust-navy hover:bg-trust-navy hover:text-white"
                    disabled={isAnimating}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  
                  <Button
                    onClick={nextPage}
                    variant="outline"
                    size="sm"
                    className="border-trust-navy text-trust-navy hover:bg-trust-navy hover:text-white"
                    disabled={isAnimating}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Right Page - Content */}
              <div className="p-4 sm:p-6 lg:p-8 bg-white relative">


                {/* Operations Stats */}
                <div className="h-full flex flex-col">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-trust-navy mb-4 sm:mb-6">Mine Site Operations</h3>
                    
                    <div className="grid grid-cols-1 gap-6 mb-8">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <Users className="h-6 w-6 text-earth-gold mr-3" />
                          <h4 className="text-xl font-bold text-trust-navy">Community Partnership</h4>
                        </div>
                        <p className="text-trust-navy/80 leading-relaxed">
                          Local employment creation and skills development programs ensure sustainable community benefits while maintaining operational excellence.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <Shield className="h-6 w-6 text-earth-gold mr-3" />
                          <h4 className="text-xl font-bold text-trust-navy">Safety & Compliance</h4>
                        </div>
                        <p className="text-trust-navy/80 leading-relaxed">
                          International mining safety standards with comprehensive environmental monitoring and worker protection protocols.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <TrendingUp className="h-6 w-6 text-earth-gold mr-3" />
                          <h4 className="text-xl font-bold text-trust-navy">Production Metrics</h4>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-earth-gold">Active</div>
                            <div className="text-xs text-trust-navy/70">Copper Grade</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-earth-gold">24/7</div>
                            <div className="text-xs text-trust-navy/70">Operations</div>
                          </div>
                        </div>
                        <p className="text-trust-navy/80 text-sm leading-relaxed">
                          High-grade copper extraction with continuous operational capacity.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <Building className="h-6 w-6 text-earth-gold mr-3" />
                          <h4 className="text-xl font-bold text-trust-navy">Infrastructure</h4>
                        </div>
                        <div className="space-y-2 text-sm text-trust-navy/80">
                          <div className="flex justify-between">
                            <span>Processing Facility:</span>
                            <span className="font-semibold">On-site</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Power Supply:</span>
                            <span className="font-semibold">Grid + Solar</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Water Access:</span>
                            <span className="font-semibold">Borehole</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Transport:</span>
                            <span className="font-semibold">Road Network</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
              </div>
            </div>

            {/* Magazine Navigation - Just Page Indicators */}
            <div className="bg-gray-100 p-6">
              <div className="flex items-center justify-center">
                {/* Page Indicators */}
                <div className="flex space-x-2">
                  {mineImages.slice(0, 8).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentPage 
                          ? 'bg-earth-gold scale-125' 
                          : 'bg-gray-400 hover:bg-gray-500'
                      }`}
                      disabled={isAnimating}
                    />
                  ))}
                  {totalPages > 8 && (
                    <span className="text-trust-navy/60 text-sm ml-2">
                      +{totalPages - 8} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}