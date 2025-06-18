import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle, Clock, Target, ArrowRight } from "lucide-react";

export default function ProjectTimeline() {
  // Authentic operational capabilities from investment proposals
  const operationalAreas = [
    {
      area: "Mining Operations",
      status: "active",
      color: "bg-earth-gold",
      capabilities: [
        "Professional mechanisation of artisanal operations",
        "Mining equipment procurement and deployment",
        "Copper ore extraction and processing",
        "Fair wages and skills training programs"
      ]
    },
    {
      area: "Infrastructure Development", 
      status: "ongoing",
      color: "bg-forest-green",
      capabilities: [
        "Schools and healthcare facilities",
        "Clean water systems and treatment",
        "Sustainable infrastructure for communities",
        "Mobile clinics and maternal health services"
      ]
    },
    {
      area: "Expansion Capabilities",
      status: "planned",
      color: "bg-premium-gold",
      capabilities: [
        "Copper concentration plant development",
        "Gold and silver extraction capabilities", 
        "International market delivery partnerships",
        "Enhanced profit sharing arrangements"
      ]
    },
    {
      area: "Investment Opportunities",
      status: "current",
      color: "bg-trust-navy",
      capabilities: [
        "Direct equity participation pathways",
        "Board representation and governance rights",
        "US strategic raise through established partners",
        "UK SEIS investment opportunities"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "planning": return <Clock className="h-5 w-5 text-earth-gold" />;
      case "upcoming": return <Target className="h-5 w-5 text-forest-green" />;
      default: return <Calendar className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Operational Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Authentic capabilities and established partnerships based on our proven mining expertise
          </p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-8">
            <div className="space-y-8">
              {operationalAreas.map((area, index) => (
                <div key={index} className="relative">
                  {/* Timeline connector */}
                  {index < operationalAreas.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-earth-gold opacity-50"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Area indicator */}
                    <div className={`w-12 h-12 ${area.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      {area.status === 'active' && <CheckCircle className="h-6 w-6 text-white" />}
                      {area.status === 'ongoing' && <Target className="h-6 w-6 text-white" />}
                      {area.status === 'planned' && <Clock className="h-6 w-6 text-white" />}
                      {area.status === 'current' && <Calendar className="h-6 w-6 text-white" />}
                    </div>
                    
                    {/* Area content */}
                    <div className="flex-1 bg-white rounded-lg p-6 border-2 border-earth-gold shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-charcoal">{area.area}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm text-gray-600 font-medium">
                              {area.status === 'active' ? 'Currently Active' :
                               area.status === 'ongoing' ? 'In Progress' :
                               area.status === 'planned' ? 'Development Ready' : 'Strategic Focus'}
                            </span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          area.status === 'active' ? 'bg-forest-green text-white' :
                          area.status === 'ongoing' ? 'bg-blue-500 text-white' :
                          area.status === 'planned' ? 'bg-amber-500 text-white' :
                          'bg-purple-500 text-white'
                        }`}>
                          {area.status === 'active' ? 'OPERATIONAL' :
                           area.status === 'ongoing' ? 'PROGRESS' :
                           area.status === 'planned' ? 'READY' : 'STRATEGIC'}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {area.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green flex-shrink-0" />
                            <span className="text-sm text-charcoal">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Authentic Investment Summary */}
            <div className="mt-8 bg-trust-navy p-4 rounded-lg border border-earth-gold">
              <div className="flex items-center justify-center space-x-4">
                <ArrowRight className="h-5 w-5 text-earth-gold" />
                <span className="text-white font-semibold">
                  Proven operations with established partnerships and community impact
                </span>
                <ArrowRight className="h-5 w-5 text-earth-gold" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}