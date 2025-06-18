import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  TrendingUp, 
  Plane, 
  MapPin, 
  Users, 
  Award, 
  Camera, 
  Gift, 
  Star,
  Crown,
  CheckCircle,
  Building,
  PiggyBank,
  Percent,
  Trophy,
  Eye,
  Calendar
} from "lucide-react";

export default function InvestmentTiers() {
  // SEIS Tax Relief Tiers from uploaded document
  const seisTiers = [
    {
      name: "Pathfinder",
      investment: "5k",
      relief: "2.5k", 
      netCost: "2.5k",
      seisShares: "2,000",
      addedValue: "25k",
      benefits: [
        "Digital Certificate of Investment",
        "Early access to product launches or services", 
        "Quarterly investor updates",
        "Recognition in the company's online 'Investor Wall of Honour'"
      ]
    },
    {
      name: "Trailblazer", 
      investment: "10k",
      relief: "5k",
      netCost: "5k", 
      seisShares: "4,000",
      addedValue: "50k",
      benefits: [
        "All Pathfinder benefits, plus:",
        "Invitation to an exclusive annual investor webinar with founders",
        "Quarterly briefings - 30% more detail than standard investor updates",
        "Option for part of your company name or company name honoured on a social project (school, clinic, well, etc.)"
      ]
    },
    {
      name: "Visionary",
      investment: "20k", 
      relief: "10k",
      netCost: "10k",
      seisShares: "8,000", 
      addedValue: "100k",
      benefits: [
        "All Trailblazer benefits, plus:",
        "Invitation to visit one of the funded social projects (special hosted tour)",
        "Detailed annual briefings every six months showing project progress",
        "Annual video call - the impact of your investment on the ground",
        "Private networking session with leadership annually",
        "Option for full naming rights (e.g., 'The [YOUR Name] Learning Centre Classroom')"
      ]
    },
    {
      name: "Architect",
      investment: "50k",
      relief: "25k", 
      netCost: "25k",
      seisShares: "20,000",
      addedValue: "250k",
      benefits: [
        "All Visionary benefits, plus:",
        "Priority access in any future funding rounds",
        "Limited-edition merchandise or commemorative gift",
        "Exclusive quarterly briefings on company strategy and major milestones",
        "Personal planning session with executives yearly",
        "Optional advisory or board observer role",
        "Full naming rights on major projects (e.g., entire school building, library, clinic, etc.)",
        "VIP Access to all major events (openings, celebrations, investor retreats)"
      ]
    }
  ];

  // Strategic Investment Tiers from uploaded document  
  const strategicTiers = [
    {
      name: "Voyager Tier",
      range: "$500k - $1m",
      icon: Shield,
      benefits: [
        "Digital Certificate of Investment",
        "Early access to product launch services", 
        "Recognition in company's online 'Investor Wall of Honour'",
        "Invitation to visit one of the funded social projects (special hosted tour)",
        "Annual video call showing impact of your investment on the ground",
        "Private networking session with leadership annually",
        "Limited-edition merchandise or commemorative gift",
        "Exclusive quarterly briefings on company strategy and major milestones",
        "Personal planning session with executives yearly",
        "Optional advisory or board observer role",
        "Full naming rights on major projects (entire school building, library, clinic, etc.)",
        "VIP Access to all major events (openings, celebrations, investor retreats)"
      ]
    },
    {
      name: "Navigator Tier", 
      range: "$1M - $3M",
      icon: TrendingUp,
      benefits: [
        "Everything in the Voyager package, plus:",
        "Business-Class Flights to Tanzania for two (included within £10K cap)",
        "Name Recognition on Infrastructure Project - Have their name (or company name) on a building plaque (school, clinic, water system, etc.)",
        "Priority Allocation in Future Rounds - First right of refusal on other projects",
        "Panel Invite at Annual Impact Briefing Event - In-person or virtual speaking opportunity", 
        "One-on-One Strategic Session with Madini Moyoni's founders or board"
      ]
    },
    {
      name: "Founder Tier",
      range: "$3M - $5M", 
      icon: Crown,
      benefits: [
        "All-Expenses-Paid Safari with First-Class Travel (up to £70K value) - 5-7 day luxury Tanzanian safari for two (Serengeti, Ngorongoro Crater, or Selous)",
        "Private Tour of the Mine Site - Hosted by company leadership; includes behind-the-scenes walkthrough, meet the team, photo ops",
        "VIP Founder Dinner in Dar es Salaam - With Madini Moyoni leadership and local partners",
        "Early Access to Reports & Strategy Previews - Exclusive quarterly briefings", 
        "Branded Gifts Pack - Local crafts, apparel, ethically sourced copper items"
      ]
    }
  ];

  return (
    <section id="investment-tiers" className="py-20 bg-trust-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Investment Tier Benefits</h2>
          <p className="text-lg sm:text-xl text-white max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
            Investment means more than financial returns — it's about creating lasting impact. We've designed 
            a range of investment tiers to recognise and celebrate our supporters at every level — offering 
            exclusive benefits, access to real-world impact, and opportunities to have your name honoured 
            across our social initiatives.
          </p>
        </div>

        {/* Large Prominent Tabs */}
        <Tabs defaultValue="seis" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-trust-navy border-2 border-earth-gold rounded-2xl p-2 h-auto">
            <TabsTrigger 
              value="seis" 
              className="text-xl sm:text-2xl lg:text-3xl font-bold py-6 sm:py-8 px-4 sm:px-8 rounded-xl data-[state=active]:bg-earth-gold data-[state=active]:text-trust-navy data-[state=inactive]:text-white data-[state=inactive]:hover:bg-earth-gold/20 transition-all duration-300 shadow-lg data-[state=active]:shadow-2xl min-h-[80px] sm:min-h-[100px] flex items-center justify-center"
            >
              <div className="flex items-center space-x-3">
                <PiggyBank className="h-8 w-8 sm:h-10 sm:w-10" />
                <span>SEIS Investment</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="strategic" 
              className="text-xl sm:text-2xl lg:text-3xl font-bold py-6 sm:py-8 px-4 sm:px-8 rounded-xl data-[state=active]:bg-earth-gold data-[state=active]:text-trust-navy data-[state=inactive]:text-white data-[state=inactive]:hover:bg-earth-gold/20 transition-all duration-300 shadow-lg data-[state=active]:shadow-2xl min-h-[80px] sm:min-h-[100px] flex items-center justify-center"
            >
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10" />
                <span>Strategic Investment</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="seis" className="mt-0">

        {/* SEIS Tax Relief Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-earth-gold mb-4">SEIS Tax Relief for Investors</h3>
            <p className="text-lg text-white mb-8">
              SEIS is a UK government scheme designed to encourage people to invest in very early-stage start-ups. 
              It offers generous tax reliefs to UK investors who buy shares in small, young companies.
            </p>
            
            {/* SEIS Benefits Icons */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <PiggyBank className="h-8 w-8 text-earth-gold" />
                </div>
                <p className="text-sm text-white">Pledge your investment with Madini Moyoni</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Building className="h-8 w-8 text-earth-gold" />
                </div>
                <p className="text-sm text-white">Receive SEIS-eligible shares</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Percent className="h-8 w-8 text-earth-gold" />
                </div>
                <p className="text-sm text-white">Get immediate income tax relief on 50% of your investment</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-earth-gold" />
                </div>
                <p className="text-sm text-white">Professional mechanisation transforms operations, potential for exceptional ROI</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-earth-gold" />
                </div>
                <p className="text-sm text-white">Our plan mitigates against every risk</p>
              </div>
            </div>
          </div>

          {/* SEIS Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {seisTiers.map((tier, index) => (
              <Card key={index} className="bg-white bg-opacity-10 border-2 border-earth-gold hover:border-earth-gold transition-colors">
                <CardHeader className="text-center pb-4">
                  <Badge className="bg-earth-gold text-trust-navy mb-2 mx-auto">{tier.name}</Badge>
                  <div className="text-2xl font-bold text-white">£{tier.investment}</div>
                  <div className="text-sm text-white">Investment Amount</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-white">Tax Relief (50%):</span>
                      <span className="text-earth-gold font-bold">£{tier.relief}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Net Cost:</span>
                      <span className="text-white font-bold">£{tier.netCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">SEIS Shares:</span>
                      <span className="text-white">{tier.seisShares}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white">Added Value:</span>
                      <span className="text-copper font-bold">£{tier.addedValue}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-earth-gold flex-shrink-0 mt-0.5" />
                        <p className="text-white text-sm">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-earth-gold hover:bg-yellow-600 text-trust-navy font-bold py-3">
                    Contact for {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
          </TabsContent>

          <TabsContent value="strategic" className="mt-0">
        {/* Strategic Investment Tiers */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Strategic Investment Tiers</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategicTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <Card key={index} className="bg-white bg-opacity-10 border-2 border-earth-gold hover:border-earth-gold transition-colors">
                  <CardHeader className="text-center">
                    <div className="bg-earth-gold text-trust-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">{tier.name}</CardTitle>
                    <div className="text-xl font-bold text-earth-gold">{tier.range}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <Star className="h-4 w-4 text-earth-gold flex-shrink-0 mt-1" />
                          <p className="text-white text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className="w-full bg-earth-gold hover:bg-yellow-600 text-trust-navy font-bold py-3"
                    >
                      Contact for {tier.name.split(' ')[0]} Access
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

          </TabsContent>

          {/* Call to Action */}
          <div className="text-center bg-white bg-opacity-10 border-2 border-earth-gold p-12 rounded-2xl mt-12">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Create Lasting Impact?</h3>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Join a select group of investors who understand that true wealth comes from 
              transforming communities while generating exceptional returns.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-earth-gold hover:bg-yellow-600 text-trust-navy font-bold py-4 px-8 text-lg"
              >
                Schedule Investment Discussion
              </Button>
            </div>
          </div>
        </Tabs>

      </div>
    </section>
  );
}