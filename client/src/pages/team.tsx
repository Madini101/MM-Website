import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building, Target, Shield, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import TeamComponent from "@/components/team";

export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Refined Team Header */}
      <div className="bg-white border-b border-gray-200 py-6 sm:py-8 relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center mb-6">
            <Link href="/investors">
              <Button variant="outline" className="border border-trust-navy text-trust-navy hover:bg-trust-navy hover:text-white font-medium px-4 py-2 rounded-sm text-sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Investment Analysis
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            {/* Compact Professional Badge */}
            <div className="inline-flex items-center bg-trust-navy text-white px-6 py-2 rounded-sm text-sm font-semibold mb-4">
              <Users className="h-4 w-4 mr-2" />
              LEADERSHIP EXCELLENCE
            </div>
            
            {/* Clean Headlines */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy mb-3">
              Experienced Leadership Team Driving Investment Success
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-4xl mx-auto px-4">
              Our management combines decades of international business expertise with deep local mining knowledge, ensuring operational excellence and strategic growth in Tanzania's copper mining sector.
            </p>
            
            {/* Compact Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl text-earth-gold font-bold">40+</div>
                <div className="text-sm text-trust-navy font-medium">Years</div>
                <div className="text-xs text-gray-600">Combined International Experience</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl text-earth-gold font-bold">20+</div>
                <div className="text-sm text-trust-navy font-medium">Years</div>
                <div className="text-xs text-gray-600">Local Mining Expertise</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <div className="text-2xl text-earth-gold font-bold">2</div>
                <div className="text-sm text-trust-navy font-medium">Companies</div>
                <div className="text-xs text-gray-600">Strategic Joint Venture</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Strategic Joint Venture Foundation */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Joint Venture Foundation</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              UK-Tanzania partnership combining local mining expertise with international business experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-300 bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-gray-200 bg-purple-50 p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">UK Management Team</CardTitle>
                  <div className="text-purple-600 font-semibold">Madini Moyoni Ltd (MML)</div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h6 className="font-semibold text-slate-900 mb-2">International Business Development</h6>
                    <p className="text-slate-600 text-sm">Directors with years of experience supporting businesses and government officials in African countries to build businesses and establish international connections</p>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-900 mb-2">Strategic Market Access</h6>
                    <p className="text-slate-600 text-sm">Proven expertise in developing international market relationships and establishing trade partnerships across UK, European, and global markets</p>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-900 mb-2">Professional Business Management</h6>
                    <p className="text-slate-600 text-sm">Implementation of modern business practices, operational standards, and strategic planning frameworks for sustainable growth</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-300 bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-gray-200 bg-green-50 p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">Tanzania Operations Leadership</CardTitle>
                  <div className="text-green-600 font-semibold">Afro Shamans Company Ltd (ASCL)</div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h6 className="font-semibold text-slate-900 mb-2">Local Mining Expertise</h6>
                    <p className="text-slate-600 text-sm">Extended family business based in Mbesa, southern Tanzania, with established local community partnerships and multiple years of mining natural resources experience</p>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-900 mb-2">UK-Tanzania Partnership</h6>
                    <p className="text-slate-600 text-sm">Exclusive joint venture combining ASCL's local mining expertise with MML's international market access and business management experience</p>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-900 mb-2">Community Integration</h6>
                    <p className="text-slate-600 text-sm">Established relationships with local communities in Mbesa, southern Tanzania, with proven track record in social and economic development projects</p>
                  </div>
                  <div>
                    <h6 className="font-semibold text-slate-900 mb-2">Regulatory Navigation</h6>
                    <p className="text-slate-600 text-sm">Deep knowledge of Tanzanian mining regulations, licensing processes, and government cooperation frameworks for successful operations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Operational Expertise */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Operational Expertise</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive capabilities spanning mining operations, international trade, and sustainable community development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-300 bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-gray-200 bg-blue-50 p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center mx-auto mb-3">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">Mining Operations</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-900 font-medium text-sm">20+ Years Experience</div>
                    <div className="text-slate-600 text-xs mt-1">Proven operational experience with modern mining techniques and safety protocols</div>
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium text-sm">Multi-Metal Extraction</div>
                    <div className="text-slate-600 text-xs mt-1">Expertise in copper, gold, and silver processing with established capacity metrics</div>
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium text-sm">Environmental Standards</div>
                    <div className="text-slate-600 text-xs mt-1">Commitment to sustainable practices and environmental preservation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-300 bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-gray-200 bg-amber-50 p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-600 rounded flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">International Trade</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-900 font-medium text-sm">Established Buyer Network</div>
                    <div className="text-slate-600 text-xs mt-1">Active relationships with customers in UK and China markets</div>
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium text-sm">Precious Metals Trading</div>
                    <div className="text-slate-600 text-xs mt-1">Proven experience in international precious metals market transactions</div>
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium text-sm">Supply Chain Management</div>
                    <div className="text-slate-600 text-xs mt-1">Optimized logistics and delivery systems for international markets</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-300 bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-gray-200 bg-green-50 p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">Community Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div>
                    <div className="text-slate-900 font-medium text-sm">Social Impact Projects</div>
                    <div className="text-slate-600 text-xs mt-1">Extensive experience in local community development and improvement initiatives</div>
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium text-sm">Workforce Integration</div>
                    <div className="text-slate-600 text-xs mt-1">Employment and training programs for 25-30 core mining families</div>
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium text-sm">Infrastructure Development</div>
                    <div className="text-slate-600 text-xs mt-1">Investment in schools, hospitals, roads, and community facilities</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Strategic Leadership Advantages */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Leadership Advantages</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Unique combination of local market knowledge and international business acumen drives competitive advantage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-300 bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-gray-200 bg-slate-50 p-6">
                <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-slate-600" />
                  Local Market Knowledge
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium text-sm">Regulatory Environment Expertise</div>
                      <div className="text-slate-600 text-xs mt-1">Deep understanding of Tanzanian mining regulations and compliance requirements</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium text-sm">Community Relationships</div>
                      <div className="text-slate-600 text-xs mt-1">Established trust and partnerships with local communities and authorities</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium text-sm">Cultural Integration</div>
                      <div className="text-slate-600 text-xs mt-1">Sensitivity to local customs and sustainable development approaches</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium text-sm">Risk Mitigation</div>
                      <div className="text-slate-600 text-xs mt-1">Local partnership approach reduces operational and political risks</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-300 bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="border-b border-gray-200 bg-slate-50 p-6">
                <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                  <Target className="h-6 w-6 mr-2 text-slate-600" />
                  International Business Acumen
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium text-sm">Market Development Track Record</div>
                      <div className="text-slate-600 text-xs mt-1">Proven success in developing international market relationships and partnerships</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium text-sm">Professional Management Standards</div>
                      <div className="text-slate-600 text-xs mt-1">Implementation of international business practices and operational excellence</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium text-sm">Scalable Business Vision</div>
                      <div className="text-slate-600 text-xs mt-1">Strategic planning for replicable models across the region and continent</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-slate-900 font-medium text-sm">Ethical Mining Commitment</div>
                      <div className="text-slate-600 text-xs mt-1">Dedication to responsible mining practices and sustainable development</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Individual Leadership Team Members */}
        <TeamComponent />


      </div>
    </div>
  );
}