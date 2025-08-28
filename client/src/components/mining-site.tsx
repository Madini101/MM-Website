import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, TrendingUp, Shield } from "lucide-react";

export default function MiningSite() {
  const siteFeatures = [
    {
      title: "220 Acres Licensed",
      description: "Renewable Tanzanian Government mining licenses",
      icon: MapPin,
      details: "Located in Mbesa, Tunduru district on the African Copper Belt"
    },
    {
      title: "Proven Reserves", 
      description: "Hundreds of thousands of tonnes of high-grade copper ore",
      icon: TrendingUp,
      details: "Consistent 5% purity copper ore across the mine site"
    },
    {
      title: "Operational History",
      description: "20+ years of continuous mining operations",
      icon: Shield,
      details: "Elly Mshana family's proven track record since 2004"
    },
    {
      title: "Community Integration",
      description: "25-30 families directly employed and supported",
      icon: Users,
      details: "Transforming artisanal mining into professional operations"
    }
  ];

  const geologicalData = [
    { mineral: "Chalcocite", purity: "79.8%", description: "Primary copper sulfide" },
    { mineral: "Covellite", purity: "66.4%", description: "High-grade copper mineral" },
    { mineral: "Bornite", purity: "63.3%", description: "Peacock ore copper mineral" },
    { mineral: "Malachite", purity: "57.5%", description: "Green copper carbonate" },
    { mineral: "Azurite", purity: "55.1%", description: "Blue copper carbonate" },
    { mineral: "Chalcopyrite", purity: "34.6%", description: "Primary copper iron sulfide" }
  ];







  return (
    <section id="mining-site" className="py-20 bg-trust-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">The Mbesa Mining Concession</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            220 acres of renewable Tanzanian Government licenses with hundreds of thousands of tonnes of high-grade copper ore confirmed by initial geological studies, and local/international customer contracts in place.
          </p>
          <div className="bg-white bg-opacity-10 p-6 sm:p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-300 italic">
              "Our mining operations combine modern technology with respect for local communities, establishing sustainable copper extraction that creates long-term value for all stakeholders."
            </p>
            <p className="text-sm text-earth-gold font-semibold mt-3 sm:mt-4">- The Madini Moyoni Philosophy</p>
          </div>
        </div>

        {/* Mine Site Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {siteFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-white bg-opacity-10 border-earth-gold border hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-earth-gold text-trust-navy p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-3">{feature.description}</p>
                  <p className="text-sm text-earth-gold">{feature.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Geological Data Section */}
        <div className="mb-16 bg-white bg-opacity-10 p-8 rounded-xl">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Proven Copper Concentrations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geologicalData.map((mineral, index) => (
              <div key={index} className="bg-trust-navy bg-opacity-50 p-4 rounded-lg text-center">
                <div className="text-earth-gold text-2xl font-bold mb-2">{mineral.purity}</div>
                <div className="text-white font-semibold mb-1">{mineral.mineral}</div>
                <div className="text-gray-300 text-sm">{mineral.description}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Geological studies include visual inspection, geophysics resistivity analysis and shallow drilling, confirming consistent <strong className="text-earth-gold">5% purity copper ore</strong> across the mine site.
            </p>
          </div>
        </div>












      </div>
    </section>
  );
}