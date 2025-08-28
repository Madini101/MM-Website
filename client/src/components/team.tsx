import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building } from "lucide-react";

interface SocialProof {
  type: string;
  platform: string;
  description: string;
  link: string;
}

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
  socialProof?: SocialProof;
}
import teamImage from "@assets/Madini Team and Advisors.jpeg";
import jeremyHendersonPhoto from "@assets/PHOTO-2025-05-31-16-19-56.jpg";
import stanleyEtkindPhoto from "@assets/Stanley I. Etkind.png";
import solomonAmPhoto from "@assets/Solomon Am.png";
import samsonMshanaPhoto from "@assets/Samson Mshana.png";
import rosanMbwamboPhoto from "@assets/Rosan Mbwambo.png";
import novathMsanyaPhoto from "@assets/sharpened_image (1).jpg";
import garethEvansPhoto from "@assets/Gareth Evans.png";
import emmanuelMshanaPhoto from "@assets/Emmanuel Mshana.png";
import ellyMshanaPhoto from "@assets/Elly Mshana.png";
import dorisMbwamboPhoto from "@assets/Doris Mbwambo.png";
import danielSmithPhoto from "@assets/Daniel Smith.png";
import carsueCurniffePhoto from "@assets/Carsue Curniffe.png";
import asamoahMfoafoPhoto from "@assets/Asamoah Mfoafo.png";
import adrianMailePhoto from "@assets/Adrian Maile.png";
import annaTibaijukaPhoto from "@assets/Anna Tibaijuka.png";
import amaniBlasSalekoPhoto from "@assets/Amani Blass Saleko_1750442211755.png";

// 2024 Tanzania Trip Images
import tanzaniaTrip1 from "@assets/WhatsApp Image 2025-08-19 at 01.06.45 (1)_1755562566735.jpeg";
import tanzaniaTrip2 from "@assets/WhatsApp Image 2025-08-19 at 01.06.45 (2)_1755562566736.jpeg";
import tanzaniaTrip3 from "@assets/WhatsApp Image 2025-08-19 at 01.06.45 (3)_1755562566737.jpeg";
import tanzaniaTrip4 from "@assets/WhatsApp Image 2025-08-19 at 01.06.45 (4)_1755562566737.jpeg";
import tanzaniaTrip5 from "@assets/WhatsApp Image 2025-08-19 at 01.06.45 (5)_1755562566738.jpeg";
import tanzaniaTrip6 from "@assets/WhatsApp Image 2025-08-19 at 01.06.45_1755562566738.jpeg";
import tanzaniaTrip7 from "@assets/WhatsApp Image 2025-08-19 at 01.06.46 (1)_1755562566739.jpeg";
import tanzaniaTrip8 from "@assets/WhatsApp Image 2025-08-19 at 01.06.46 (2)_1755562566739.jpeg";
import tanzaniaTrip9 from "@assets/WhatsApp Image 2025-08-19 at 01.06.46_1755562566740.jpeg";

export default function Team() {
  const [activeTab, setActiveTab] = useState("madini");

  const madiniTeam: TeamMember[] = [
    {
      name: "Adrian Maile",
      position: "Chairman/CEO",
      image: adrianMailePhoto,
      description: "Over forty years' business experience in senior executive positions in global companies and running his own consulting and family businesses. Worked across all industry sectors with special focus on Emerging Markets, including Africa. Responsible for strategic direction, leadership and fostering relationships with investors, shareholders and regulatory bodies.",
      socialProof: {
        type: "Investment Message",
        platform: "Video Statement",
        description: "Chairman's comprehensive investment opportunity overview and strategic vision",
        link: "https://youtu.be/Hl-joogcTjQ"
      }
    },
    {
      name: "Jeremy Henderson",
      position: "Chief Financial Officer",
      image: jeremyHendersonPhoto,
      description: "Chartered accountant with over a decade of commercial finance experience, originally qualified with Baker Tilly and worked as manager for PricewaterhouseCoopers in Barbados. Responsible for managing group finances, ensuring complete transparency and integrity from investment through to monthly reporting, cash flow management, and robust financial controls."
    },
    {
      name: "Carsue Curniffe",
      position: "Chief Operating Officer",
      image: carsueCurniffePhoto,
      description: "Over twenty years' experience as business change and PPM consultant leading complex transformation projects and procuring multi-million-pound contracts. Passionate about working in Africa and creating legacy of socio-economic change. Instrumental in creating the vision, strategy and laying foundations for this ambitious project."
    },
    {
      name: "Daniel Smith",
      position: "Chief Revenue Officer",
      image: danielSmithPhoto,
      description: "Expert in procurement and managing supplier relationships with over 20 years of experience. Skilled negotiator with proven track record securing multi-million-dollar deals across Europe, Far East, America, and Africa. Exceptional communication and collaboration skills fostering mutually beneficial partnerships and remarkable revenue growth."
    },
    {
      name: "Solomon Amos",
      position: "Chief Technology Officer",
      image: solomonAmPhoto,
      description: "Over 15 years of expertise in IT sector, specialising in system management and technology implementation for business operations. Responsible for technology infrastructure and systems that support mining operations and business processes."
    }
  ];

  const afroTeam: TeamMember[] = [
    {
      name: "Rosan Mbwambo",
      position: "Chairman/CEO",
      image: rosanMbwamboPhoto,
      description: "Over 20 years of legal experience, specialising in arbitration at national and international level, mining, construction, labour law. As Chairman, responsible for overseeing and approving crucial contracts, legal documents, and frameworks. Recently featured in executive communications highlighting AFCL's strategic vision and leadership excellence.",
      socialProof: {
        type: "Executive Statement",
        platform: "Instagram",
        description: "Chairman's recent address showcasing AFCL leadership and strategic direction",
        link: "https://www.instagram.com/reel/DK9bI2Tg9dw/?igsh=OHowZDc5dzNjZDJi"
      }
    },
    {
      name: "Elly Mshana",
      position: "Chief Executive Officer",
      image: ellyMshanaPhoto,
      description: "Devout Christian minister offering counselling and spiritual guidance to rural communities in Tanzania. Over 30 years in mineral exploration and heavy machinery operations across East Africa, including DRC, Zambia, and Mozambique. Mining guru of Afro Shamans, passing extensive knowledge to brothers and team."
    },
    {
      name: "Samson Mshana",
      position: "Chief Operating Officer",
      image: samsonMshanaPhoto,
      description: "Learned mining from older brothers Elly and Emmanuel during gemstone and precious metal expeditions. Combined practical experience with independent studies in geology and geophysics, becoming mineral expert. Travelled across Tanzania deepening regional knowledge and identifying prime mineral locations."
    },
    {
      name: "Emmanuel Mshana",
      position: "Head of Strategy",
      image: emmanuelMshanaPhoto,
      description: "Head of strategy and CSR at Afro Shamans, with extensive experience in community empowerment. Co-founder of Pamoja Afrika, driving impactful projects in rural Tanzania. Set up key initiatives including sustainable farming, clean water access, sanitation, and creating educational and career opportunities for local communities."
    },
    {
      name: "Doris Mbwambo",
      position: "HR Director",
      image: dorisMbwamboPhoto,
      description: "Managing Director and part owner of DRREC Limited and Blossom Kids Hub. Experienced lawyer skilled in HR, training, policy revision, and compliance management. Successfully manages multiple ventures, including catering and childcare centers, employing hundreds."
    },
    {
      name: "Amani Blass Saleko",
      position: "Head of Mine Site",
      image: amaniBlasSalekoPhoto,
      description: "Head of mining site who oversees production of copper, health and safety and quality assurance processes. Managed number of mining sites across Tanzania. Lifelong ndugu (brethren) of Mshana family from Kilimanjaro region. Owns hotel in hometown of Moshi and community activist who built school facilities for local children."
    }
  ];

  const advisors: TeamMember[] = [
    {
      name: "Anna Tibaijuka",
      position: "Political Adviser",
      image: annaTibaijukaPhoto,
      description: "Former Tanzanian politician and United Nations official, member of National Assembly for Muleba South constituency 2010-2020. Served as Minister of Lands, Housing and Human Settlement Developments 2010-2014. Former Under-Secretary-General of UN and executive director of UN-HABITAT. Second highest ranking African woman in UN history."
    },
    {
      name: "Gareth Evans",
      position: "Technical Adviser",
      image: garethEvansPhoto,
      description: "Chairman of Lancashire Machinery Services Limited UK (LMS UK) selling used and new mining, construction, and agricultural machinery worldwide. Decades of experience working in mining sector across African continent on thousands of projects. Knowledge and experience of successful mining operations invaluable to this ambitious project."
    },
    {
      name: "Stanley I. Etkind",
      position: "International Adviser",
      image: stanleyEtkindPhoto,
      description: "Provides and links traders, buyers and sellers in international commerce. Brought many innovations to South Africa providing expertise to significant undertakings. Built strong relationships across multiple continents globally. Experience and personal relationships with top echelon of Chinese government dating back to 1993 offers invaluable advice for Asian continent clients."
    },
    {
      name: "Novath Msanya",
      position: "Customs Clearing Agent",
      image: novathMsanyaPhoto,
      description: "Afro Shamans' childhood friend serving as customs clearing agent at Dar Es Salaam port and Madini Moyoni's adviser on all logistics aspects. Instrumental in supporting trial delivery due to knowledge and expertise in all aspects of transportation and shipping."
    },
    {
      name: "Asamoah Mfoafo",
      position: "International Adviser",
      image: asamoahMfoafoPhoto,
      description: "From Ghana, responsible for bringing UK and Tanzanian partnership together initially. Vast network of contacts and wide business experience in Africa. Holds degree in Microbiology, Immunology and Molecular Biology and consultant in financial and operational markets."
    }
  ];

  const getTeamData = () => {
    switch (activeTab) {
      case "madini": return madiniTeam;
      case "afro": return afroTeam;
      case "advisors": return advisors;
      default: return madiniTeam;
    }
  };

  return (
    <section id="team" className="py-20 bg-trust-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-300">
            Experienced professionals combining UK expertise with Tanzanian heritage
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 border-2 border-earth-gold rounded-lg p-1 shadow-lg">
            <Button
              onClick={() => setActiveTab("madini")}
              variant="ghost"
              className={activeTab === "madini" ? "bg-earth-gold text-trust-navy font-bold" : "text-white hover:text-earth-gold hover:bg-gray-700"}
            >
              Madini Moyoni Team
            </Button>
            <Button
              onClick={() => setActiveTab("afro")}
              variant="ghost"
              className={activeTab === "afro" ? "bg-earth-gold text-trust-navy font-bold" : "text-white hover:text-earth-gold hover:bg-gray-700"}
            >
              Afro Shamans Team
            </Button>
            <Button
              onClick={() => setActiveTab("advisors")}
              variant="ghost"
              className={activeTab === "advisors" ? "bg-earth-gold text-trust-navy font-bold" : "text-white hover:text-earth-gold hover:bg-gray-700"}
            >
              Advisors
            </Button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getTeamData().map((member, index) => (
            <Card key={index} className="bg-gray-800 border-2 border-earth-gold shadow-lg">
              <CardContent className="p-6 text-center">
                {member.image ? (
                  <div className={`w-32 h-32 rounded-lg mx-auto mb-4 border-2 border-earth-gold overflow-hidden ${
                    member.name === "Jeremy Henderson" ? "bg-white flex items-center justify-center" : ""
                  }`}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className={`object-cover ${
                        member.name === "Jeremy Henderson" ? "w-24 h-24" : "w-full h-full"
                      }`}
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-lg mx-auto mb-4 bg-earth-gold flex items-center justify-center">
                    <span className="text-trust-navy text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-earth-gold mb-2">{member.name}</h3>
                <p className="text-white font-semibold mb-3">{member.position}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                
                {/* Social Proof for Chairman */}
                {member.socialProof && (
                  <div className="bg-earth-gold/10 border border-earth-gold/30 rounded-lg p-4 mt-4">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-2 h-2 bg-earth-gold rounded-full mr-2"></div>
                      <span className="text-earth-gold font-semibold text-xs uppercase tracking-wide">
                        {member.socialProof.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs mb-3">
                      {member.socialProof.description}
                    </p>
                    <a 
                      href={member.socialProof.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-earth-gold hover:text-yellow-300 text-xs font-medium transition-colors"
                    >
                      <span>View Executive Statement</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chairman's Investment Message - Featured Prominently */}
        <div className="mt-12 bg-gradient-to-br from-earth-gold/10 to-amber-50/10 rounded-3xl p-8 border-2 border-earth-gold/30">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-earth-gold text-trust-navy px-6 py-3 rounded-full font-bold text-sm mb-4">
              <Building className="h-4 w-4 mr-2" />
              Chairman's Investment Message
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Investment Opportunity Overview
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Adrian Maile, Chairman/CEO of Madini Moyoni, presents the comprehensive investment opportunity and strategic vision for our Tanzania copper mining operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 rounded-2xl overflow-hidden border-2 border-earth-gold/30">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe 
                  src="https://www.youtube.com/embed/Hl-joogcTjQ"
                  title="Adrian Maile - Chairman Investment Message"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <div className="p-6 bg-earth-gold/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-earth-gold font-bold text-lg mb-1">Adrian Maile - Chairman/CEO</h4>
                    <p className="text-earth-gold/80 text-sm">Madini Moyoni Investment Overview</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-earth-gold/30 rounded-lg px-3 py-1">
                      <span className="text-earth-gold text-xs font-medium">FEATURED MESSAGE</span>
                    </div>
                  </div>
                </div>
                <p className="text-earth-gold/90 text-sm mt-3">
                  Complete investment opportunity presentation outlining our strategic vision, operational capabilities, and exceptional return potential for qualified investors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tanzania Operations Leadership Spotlight */}
        <div className="mt-12 bg-gradient-to-br from-trust-navy to-blue-900 rounded-3xl p-8 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-earth-gold mb-4">
              Tanzania Operations Leadership
            </h3>
            <p className="text-blue-200 max-w-3xl mx-auto">
              Our operations are led by experienced professionals with deep local knowledge and international expertise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src={rosanMbwamboPhoto} 
                  alt="Chairman Rosan Mbwambo" 
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-earth-gold shadow-lg"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-earth-gold mb-2">Chairman Rosan Mbwambo</h4>
                  <p className="text-lg text-blue-200">Afro Shamans Chairman/CEO</p>
                </div>
                <blockquote className="text-white/90 leading-relaxed italic mb-4">
                  "Our Tanzania operations represent decades of expertise in mineral extraction and community development. 
                  We combine traditional knowledge with modern technology to create sustainable mining operations 
                  that benefit both investors and local communities."
                </blockquote>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-blue-300 mb-3 sm:mb-0">
                    Over 20 years of legal and mining experience • National & International Arbitration Expert
                  </div>
                  <a 
                    href="https://www.instagram.com/reel/DK9bI2Tg9dw/?igsh=OHowZDc5dzNjZDJi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-earth-gold text-trust-navy hover:bg-yellow-600 px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                    <span>View Executive Statement</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tanzania Leadership CTA */}
          <div className="mt-6 sm:mt-8 text-center">
            <Button
              onClick={() => {
                window.location.href = '/operations';
              }}
              className="bg-white text-trust-navy hover:bg-gray-200 font-bold py-2 sm:py-3 px-4 sm:px-8 text-sm sm:text-base rounded-lg shadow-lg transition-all duration-300 hover:scale-105 w-auto max-w-xs sm:max-w-none"
            >
              Discover Tanzania Operations
            </Button>
          </div>
        </div>

        {/* 2024 Tanzania Partnership Trip - Social Proof */}
        <div className="mt-12 bg-gradient-to-r from-earth-gold/10 to-amber-100/10 rounded-3xl p-8 border-2 border-earth-gold/30">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-earth-gold text-trust-navy px-6 py-3 rounded-full font-bold text-sm mb-4">
              <Building className="h-4 w-4 mr-2" />
              2024 Tanzania Partnership Trip
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Building Trust Through Direct Partnership
            </h3>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Madini Moyoni travelled to Tanzania in 2024 to meet our partners, sign contracts, visit the mine site and above that build on our working relationship trust and shared visions. 
              The highlight of the trip was our social initiative action. We visited a rural village in the Mbesa region and gave out supplies to the local villages we planned to support and will directly benefit from the project.
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: tanzaniaTrip1, alt: "Distributing essential supplies to Mbesa region villages" },
              { src: tanzaniaTrip2, alt: "Community outreach and village support initiatives" },
              { src: tanzaniaTrip3, alt: "Engaging with local families and children" },
              { src: tanzaniaTrip4, alt: "Rural community development and social impact" },
              { src: tanzaniaTrip5, alt: "Supporting local villages with basic necessities" },
              { src: tanzaniaTrip6, alt: "Social initiatives benefiting rural communities" },
              { src: tanzaniaTrip7, alt: "Village assistance and community empowerment" },
              { src: tanzaniaTrip8, alt: "Direct community support in remote areas" },
              { src: tanzaniaTrip9, alt: "Building lasting relationships with local communities" }
            ].map((photo, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl border-2 border-earth-gold/50 shadow-lg">
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trip Highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-earth-gold/30">
              <h4 className="text-earth-gold font-bold text-lg mb-3">Partnership Agreements</h4>
              <p className="text-gray-300 text-sm">
                Signed formal contracts and agreements with Afroshaman Company Limited partners, establishing legal framework for mining operations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-earth-gold/30">
              <h4 className="text-earth-gold font-bold text-lg mb-3">Mine Site Assessment</h4>
              <p className="text-gray-300 text-sm">
                Conducted comprehensive site visits and technical evaluations of copper mining operations and infrastructure.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-earth-gold/30">
              <h4 className="text-earth-gold font-bold text-lg mb-3">Community Investment</h4>
              <p className="text-gray-300 text-sm">
                Distributed essential supplies to Mbesa region villages, demonstrating commitment to social impact initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Single Strategic CTA */}
        <div className="text-center mt-8 sm:mt-12 bg-gray-800 border-2 border-earth-gold p-4 sm:p-6 lg:p-8 rounded-lg mx-2 sm:mx-0">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-earth-gold mb-3 sm:mb-4">Ready to Partner with Our Team?</h3>
          <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Join investors who trust our proven expertise, authentic partnerships, and commitment to sustainable mining with social impact.
          </p>
          <Button
            onClick={() => {
              window.location.href = '/contact';
            }}
            className="bg-earth-gold text-trust-navy hover:bg-yellow-600 font-bold py-3 sm:py-4 px-4 sm:px-8 text-sm sm:text-base lg:text-lg shadow-lg transition-all duration-300 hover:scale-105 w-auto max-w-xs sm:max-w-none"
          >
            Register Investment Interest
          </Button>
        </div>

      </div>
    </section>
  );
}