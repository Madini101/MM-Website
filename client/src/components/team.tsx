import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export default function Team() {
  const [activeTab, setActiveTab] = useState("madini");

  const madiniTeam = [
    {
      name: "Adrian Maile",
      position: "Chairman/CEO",
      image: adrianMailePhoto,
      description: "Over forty years' business experience in senior executive positions in global companies and running his own consulting and family businesses. Worked across all industry sectors with special focus on Emerging Markets, including Africa. Responsible for strategic direction, leadership and fostering relationships with investors, shareholders and regulatory bodies."
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
      description: "Over 15 years of expertise in IT sector, specialising in system management and leveraging emerging technologies to revolutionise business operations. Implements smarter working solutions and harnesses technology potential to gain competitive edge in rapidly evolving digital landscape."
    }
  ];

  const afroTeam = [
    {
      name: "Rosan Mbwambo",
      position: "Chairman/CEO",
      image: rosanMbwamboPhoto,
      description: "Over 20 years of legal experience, specialising in arbitration at national and international level, mining, construction, labour law. As Chairman, responsible for overseeing and approving crucial contracts, legal documents, and frameworks. Wealth of experience and knowledge invaluable in ensuring project success."
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

  const advisors = [
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
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA after team credibility */}
        <div className="text-center mt-8 sm:mt-12 bg-gray-800 border-2 border-earth-gold p-6 sm:p-8 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-earth-gold mb-3 sm:mb-4 px-2">Ready to Partner with Our Experienced Team?</h3>
          <p className="text-gray-300 mb-4 sm:mb-6 px-2">
            Join investors who trust our proven expertise and authentic community partnerships.
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="w-full sm:w-auto bg-earth-gold text-trust-navy hover:bg-yellow-600 font-bold py-3 px-6 sm:px-8 text-base sm:text-lg shadow-md"
          >
            Start Investment Discussion
          </Button>
        </div>

      </div>
    </section>
  );
}
