import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, CheckCircle, Phone } from "lucide-react";

export default function NextSteps() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Authentic investment opportunities from proposals
  const opportunities = [
    {
      icon: FileText,
      title: "Essential Documentation",
      description: "Access to investment proposals and financial information",
      action: "Review Materials"
    },
    {
      icon: Calendar,
      title: "SEIS Tax Relief Calculator",
      description: "Interactive tool to estimate your tax relief benefits",
      action: "Calculate Relief"
    },
    {
      icon: Phone,
      title: "Investor Engagement",
      description: "Facilitate investment inquiries and discussions",
      action: "Make Inquiry"
    },
    {
      icon: CheckCircle,
      title: "Investment Proposals",
      description: "Strategic and SEIS investment opportunities available",
      action: "Explore Options"
    }
  ];

  return (
    <section className="py-16 bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-earth-gold mb-4">Investment Opportunities</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our authentic investment proposals and access essential documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-earth-gold text-trust-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg text-earth-gold">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <p className="text-sm font-medium text-earth-gold">{opportunity.action}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-earth-gold mb-4">Access Investment Information</h3>
            <p className="text-gray-600 mb-6">
              Review our investment proposals and explore opportunities for strategic and SEIS investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-earth-gold hover:bg-yellow-500 text-trust-navy font-bold py-3 px-8 text-lg"
              >
                Investment Inquiry
              </Button>
              <Button 
                onClick={() => scrollToSection("seis")}
                variant="outline" 
                className="border-earth-gold text-earth-gold hover:bg-earth-gold hover:text-trust-navy font-bold py-3 px-8 text-lg"
              >
                SEIS Calculator
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}