import { Heart, Users, Leaf, GraduationCap, Droplets, Building, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import socialProjectImage from "@assets/Social Proeject image. Team in rural Tanzania on a project.jpg";

export default function SocialImpact() {
  const impactAreas = [
    {
      title: "Economic Empowerment",
      description: "Professional mining jobs with fair wages, skills training, and pathways to leadership for local community members.",
      icon: TrendingUp
    },
    {
      title: "Infrastructure Development", 
      description: "Schools, healthcare facilities, clean water systems, and sustainable infrastructure that benefits the entire region.",
      icon: Building
    },
    {
      title: "Environmental Protection",
      description: "Sustainable mining practices with land rehabilitation, water conservation, and ecosystem preservation for future generations.",
      icon: Shield
    },
    {
      title: "Community Health",
      description: "Mobile clinics, maternal health services, and comprehensive healthcare programs for mining families and communities.",
      icon: Heart
    }
  ];
  return (
    <section id="social-impact" className="py-20 bg-trust-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where Profitability Meets Purpose
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            For empathetic investors seeking both financial returns and meaningful social change. 
            Our mining operations create lasting transformation in rural Tanzania while delivering 
            <strong className="text-white"> financial performance</strong>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: Authentic Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl z-10"></div>
            <img 
              src={socialProjectImage} 
              alt="Madini Moyoni UK and Tanzania team with rural Tanzania community during November 2024 social project"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 border border-earth-gold">
                <p className="text-sm font-semibold text-white">
                  Madini Moyoni UK & Tanzania team with Mbesa community, November 2024
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  20+ years of authentic partnerships building trust and transforming lives
                </p>
              </div>
            </div>
          </div>

          {/* Right: Impact Story */}
          <div className="space-y-8">
            <div className="bg-trust-navy border-2 border-earth-gold p-6 rounded-xl shadow-lg">
              <h3 className="text-4xl font-bold text-white mb-6">
                Where Profitability Meets Purpose
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                For empathetic investors seeking both financial returns and meaningful social change. 
                Our mining operations create lasting transformation in rural Tanzania while delivering 
                financial performance.
              </p>
            </div>

            <div className="bg-gray-800 border border-earth-gold p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-white mb-4">Authentic Partnership, Real Impact</h4>
              <p className="text-gray-300 leading-relaxed mb-6">
                This isn't corporate social responsibility—it's the heart of our business model. 
                For over 20 years, the Mshana family has built deep community relationships, 
                transforming not just mining operations but entire communities.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-copper">25-30</div>
                  <div className="text-sm text-gray-400">Core Family Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-copper">500+</div>
                  <div className="text-sm text-gray-400">Community Members Impacted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-copper">20+</div>
                  <div className="text-sm text-gray-400">Years Partnership History</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-copper">3x</div>
                  <div className="text-sm text-gray-400">Average Income Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Impact Section */}
        <div className="mb-16">
          <div className="text-center mb-12 bg-gray-800 border-2 border-earth-gold p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-white">Your Investment Creates Lasting Change</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <Card key={index} className="bg-gray-800 shadow-lg border border-earth-gold hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-copper rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specific Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <Card className="bg-gray-700 shadow-lg border-gray-600 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <GraduationCap className="h-10 w-10 text-copper mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Education Access</h4>
              <p className="text-gray-300 text-sm">
                Building schools and providing educational opportunities for children 
                in remote mining communities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 shadow-lg border-gray-600 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Heart className="h-10 w-10 text-copper mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Skills Training</h4>
              <p className="text-gray-300 text-sm">
                Professional development programs and technical training 
                for sustainable career advancement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 shadow-lg border-gray-600 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Droplets className="h-10 w-10 text-copper mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Clean Water Access</h4>
              <p className="text-gray-300 text-sm">
                Drilling wells and installing water treatment systems for 
                safe, reliable community water supply.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 shadow-lg border-gray-600 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Users className="h-10 w-10 text-copper mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Women's Empowerment</h4>
              <p className="text-gray-300 text-sm">
                Training programs and leadership opportunities specifically 
                designed for women in the community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-700 border-2 border-earth-gold p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            Join Investors Who Value Both Returns and Impact
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Your investment doesn't just generate exceptional financial returns—it transforms communities, 
            preserves environments, and creates sustainable prosperity for generations.
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-earth-gold border-2 border-earth-gold text-trust-navy hover:bg-yellow-500 font-bold py-3 px-8 text-lg mb-4 shadow-md transition-all duration-300"
          >
            Invest with Purpose
          </Button>
          <div className="text-center">
            <span className="text-lg font-semibold text-earth-gold">
              Transparent. Sustainable. Profitable. Purposeful.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}