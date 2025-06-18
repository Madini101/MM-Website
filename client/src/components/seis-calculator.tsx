import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Target, CheckCircle, Clock, Users, Wrench, Factory, DollarSign, TrendingUp } from "lucide-react";

export default function SeisCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [seisRelief, setSeisRelief] = useState(0);
  const [netCost, setNetCost] = useState(0);
  const [projectedReturn, setProjectedReturn] = useState(0);
  const [grossROI, setGrossROI] = useState(0);
  const [netROI, setNetROI] = useState(0);
  const [grossIRR, setGrossIRR] = useState(0);
  const [netIRR, setNetIRR] = useState(0);

  const calculateSEIS = () => {
    const relief = investmentAmount * 0.5; // 50% SEIS relief
    const net = investmentAmount - relief;
    const projected = (investmentAmount / 5000) * 30000; // £30k return per £5k invested
    const grossROICalc = (projected / investmentAmount); // 6x
    const netROICalc = (projected / net); // 11.9x
    const grossIRRCalc = 81; // 81% IRR
    const netIRRCalc = 128; // 128% IRR
    
    setSeisRelief(relief);
    setNetCost(net);
    setProjectedReturn(projected);
    setGrossROI(grossROICalc);
    setNetROI(netROICalc);
    setGrossIRR(grossIRRCalc);
    setNetIRR(netIRRCalc);
  };

  useEffect(() => {
    calculateSEIS();
  }, [investmentAmount]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="seis-calculator" className="py-20 bg-neutral-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Use of Funds: £250k SEIS Investment */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-trust-navy mb-4">
              Use of Funds: £250k SEIS Investment
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              SEIS investment enables the purchase of machinery and mining-site infrastructure as outlined in our investment proposal
            </p>
          </div>

          {/* Core Investment Objectives */}
          <Card className="mb-8 bg-white border-2 border-trust-navy shadow-lg">
            <CardHeader className="bg-trust-navy text-white">
              <CardTitle className="flex items-center text-2xl">
                <Target className="h-6 w-6 mr-3" />
                Core Investment Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Investing in new, high-quality machinery and mining-site infrastructure</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Professional mechanisation of artisanal mining operations for 25-30 core family members</span>
                  </div>
                  <div className="flex items-start">
                    <Wrench className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Modern mining equipment and safety protocols</span>
                  </div>
                  <div className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Seed investment in up-skilling, automation and mechanisation</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <DollarSign className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Export tax and government royalty fees for legal operations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Correct licenses and documentation for legal mineral sales</span>
                  </div>
                  <div className="flex items-start">
                    <Factory className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Lancashire Machinery Services partnership implementation</span>
                  </div>
                  <div className="flex items-start">
                    <Target className="h-5 w-5 text-earth-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Bringing professional and international dimension to operations within broader $25M transformation vision</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategic Vision Box */}
          <div className="bg-trust-navy p-6 rounded-xl shadow-lg mb-8 border-2 border-earth-gold">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-earth-gold mr-4" />
              <p className="text-white text-lg font-medium text-center">
                Long-term customer contracts already secured
              </p>
            </div>
          </div>

          {/* SEIS Investment Timeline & Key Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-earth-gold border-2 border-trust-navy shadow-lg">
              <CardHeader className="bg-trust-navy text-white">
                <CardTitle className="flex items-center text-xl">
                  <Clock className="h-6 w-6 mr-3" />
                  SEIS Investment Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-earth-gold">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-trust-navy rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-trust-navy mb-1">Investment Made</h4>
                      <p className="text-gray-700 text-sm">Make qualifying investment in HMRC approved company</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-trust-navy rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-trust-navy mb-1">Immediate Tax Relief</h4>
                      <p className="text-gray-700 text-sm">Claim 50% tax relief in year of investment via tax return</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-trust-navy rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-bold text-trust-navy mb-1">3+ Years Holding</h4>
                      <p className="text-gray-700 text-sm">Capital Gains Tax exemption becomes available</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-trust-navy rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-bold text-trust-navy mb-1">Exit Strategy</h4>
                      <p className="text-gray-700 text-sm">Tax-free gains on qualifying disposal or company sale</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-trust-navy shadow-lg">
              <CardHeader className="bg-trust-navy text-white">
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="h-6 w-6 mr-3" />
                  Key SEIS Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-trust-navy mb-2">Eligibility Requirements</h4>
                    <p className="text-gray-700 text-sm">UK taxpayers only, minimum £5,000 investment</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-trust-navy mb-2">Annual Limits</h4>
                    <p className="text-gray-700 text-sm">Maximum £200,000 per tax year</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-trust-navy mb-2">Tax Relief Timeline</h4>
                    <p className="text-gray-700 text-sm">50% relief claimed in year of investment</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-trust-navy mb-2">CGT Exemption</h4>
                    <p className="text-gray-700 text-sm">Available after 3+ years of holding</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-trust-navy mb-2">Company Requirements</h4>
                    <p className="text-gray-700 text-sm">HMRC pre-approved qualifying company</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Investment Perspective Quotes */}
          <div className="bg-trust-navy p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Investment Perspective</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-earth-gold p-6 rounded-lg">
                <p className="text-gray-800 italic mb-4">
                  "SEIS represents one of the most generous tax incentives available to UK investors. The combination of immediate 50% tax relief and capital gains exemption creates a compelling risk-adjusted return profile for qualifying investments."
                </p>
                <p className="text-trust-navy font-bold text-sm">- UK Tax Relief Investment Analysis</p>
              </div>
              <div className="bg-earth-gold p-6 rounded-lg">
                <p className="text-gray-800 italic mb-4">
                  "Copper demand is projected to outstrip supply significantly in the coming decade, driven by renewable energy infrastructure and electric vehicle adoption. Tanzania's position in the African Copper Belt presents unique opportunities."
                </p>
                <p className="text-trust-navy font-bold text-sm">- Mining Sector Investment Outlook</p>
              </div>
            </div>
          </div>
        </div>

        {/* SEIS Calculator Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-trust-navy mb-3 sm:mb-4 px-4">SEIS Return on Investment Calculator</h2>
          <p className="text-lg sm:text-xl text-secondary mb-3 sm:mb-4 px-4">
            Calculate your SEIS tax relief and projected 3-year return on investment
          </p>
          <div className="bg-trust-navy text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-block mx-2">
            <p className="text-sm sm:text-base font-semibold">UK Investors Only - SEIS Eligible Investment</p>
          </div>
        </div>

        <Card className="bg-white border-trust-navy border-2 mx-2 sm:mx-0">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="w-full overflow-hidden">
                <h3 className="text-lg sm:text-xl font-bold text-trust-navy mb-4 sm:mb-6">Investment Calculator</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="investment">Investment Amount (£)</Label>
                    <Input
                      id="investment"
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        const rounded = Math.round(value / 5000) * 5000;
                        const clamped = Math.max(5000, Math.min(200000, rounded));
                        setInvestmentAmount(clamped);
                      }}
                      className="mt-2 focus:ring-earth-gold focus:border-earth-gold"
                      min="5000"
                      max="200000"
                      step="5000"
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      Range: £5,000 - £200,000 • Increments of £5,000 • UK taxpayers only
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-trust-navy text-white rounded-lg">
                  <h4 className="font-bold mb-2">UK Investor SEIS Eligibility</h4>
                  <p className="text-sm">
                    SEIS available exclusively to UK taxpayers. 50% immediate tax relief available regardless of income or tax band.
                  </p>
                </div>
                

              </div>
            
              <div className="w-full overflow-hidden">
                <h3 className="text-lg sm:text-xl font-bold text-trust-navy mb-4 sm:mb-6">SEIS Tax Relief Summary</h3>
                
                <Card className="bg-white">
                  <CardContent className="p-4 sm:p-6 space-y-4">
                    <div className="bg-earth-gold/10 p-3 sm:p-4 rounded-lg mb-4">
                      <h4 className="font-bold text-center mb-3 text-trust-navy text-sm sm:text-base">Investment Journey:</h4>
                      <div className="text-xs sm:text-sm space-y-2">
                        <div>• Invest £{investmentAmount.toLocaleString()}</div>
                        <div>• Receive £{seisRelief.toLocaleString()} back immediately (via tax relief)</div>
                        <div>• Your net cost: £{netCost.toLocaleString()}</div>
                        <div>• Projected 3-year return: £{projectedReturn.toLocaleString()}</div>
                        <div className="font-semibold pt-2 border-t text-earth-gold text-xs sm:text-sm">
                          {grossROI.toFixed(1)}x ROI ({grossIRR}% IRR) | Net: {netROI.toFixed(1)}x ({netIRR}% IRR)
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-trust-navy">Investment Amount:</span>
                        <span className="font-semibold">£{investmentAmount.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-trust-navy">SEIS Tax Relief (50%):</span>
                        <span className="font-semibold text-forest-green">-£{seisRelief.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-trust-navy">Your Net Cost:</span>
                        <span className="font-semibold">£{netCost.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-lg font-bold border-b pb-2">
                        <span className="text-trust-navy">Projected 3-Year Return:</span>
                        <span className="text-earth-gold">£{projectedReturn.toLocaleString()}</span>
                      </div>

                      <div className="bg-sage-green bg-opacity-20 p-4 rounded mt-4">
                        <h4 className="font-bold text-center mb-2">Additional SEIS Benefits</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Capital Gains Tax exemption on shares held 3+ years</li>
                          <li>• Loss relief if investment doesn't succeed</li>
                          <li>• Inheritance tax relief on qualifying shares</li>
                          <li>• No restriction on income levels</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded mt-4">
                      <p className="text-xs text-gray-600">
                        This is a high-risk investment in mining operations. We believe we have mitigated all major risks, however projected returns are not guaranteed. 
                        SEIS benefits available to UK taxpayers only and subject to HMRC qualification requirements and individual tax circumstances.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>



            <div className="text-center mt-8">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-white border-2 border-black text-black hover:bg-gray-100 px-8 py-4 shadow-md"
              >
                Invest Now - SEIS Eligible
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}