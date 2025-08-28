import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Shield, Clock, Users, CheckCircle, Phone, Mail, FileText, DollarSign, Calendar } from "lucide-react";

export default function InvestNow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    investmentAmount: "",
    accreditedInvestor: "",
    company: "",
    investmentExperience: "",
    timeframe: "",
    riskTolerance: "",
    additionalInfo: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Action Focused */}
      <section className="py-16 bg-trust-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="@assets/Mbesa Copper Mine wide shot.jpg"
            alt="Mining Operations Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="text-earth-gold mb-4 text-sm font-semibold tracking-wider uppercase">INVESTMENT APPLICATION</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Start Your Investment Journey</h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8">
            Complete our secure application process to join qualified investors in this strategic mining opportunity.
          </p>
          
          {/* Progress Indicator */}
          <div className="flex justify-center space-x-4 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div 
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step <= currentStep ? 'bg-earth-gold text-trust-navy' : 'bg-white/20 text-white'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Step Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-trust-navy mb-2">Personal Information</h2>
                    <p className="text-gray-600">Let's start with your basic details for our investment team.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Legal Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="John Smith"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+44 20 1234 5678"
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Investment Firm Ltd"
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Investment Details */}
              {currentStep === 2 && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-trust-navy mb-2">Investment Preferences</h2>
                    <p className="text-gray-600">Tell us about your investment goals and experience.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="investmentAmount">Intended Investment Amount *</Label>
                      <Select onValueChange={(value) => handleInputChange('investmentAmount', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select investment range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5000-25000">£5,000 - £25,000 (Voyager)</SelectItem>
                          <SelectItem value="25000-100000">£25,000 - £100,000 (Explorer)</SelectItem>
                          <SelectItem value="100000-500000">£100,000 - £500,000 (Pioneer)</SelectItem>
                          <SelectItem value="500000+">£500,000+ (Founder)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="accreditedInvestor">Are you an accredited investor? *</Label>
                      <Select onValueChange={(value) => handleInputChange('accreditedInvestor', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes, I am an accredited investor</SelectItem>
                          <SelectItem value="no">No, I am not an accredited investor</SelectItem>
                          <SelectItem value="unsure">I'm not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="investmentExperience">Investment Experience</Label>
                      <Select onValueChange={(value) => handleInputChange('investmentExperience', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">New to investing (0-2 years)</SelectItem>
                          <SelectItem value="intermediate">Some experience (3-10 years)</SelectItem>
                          <SelectItem value="experienced">Experienced (10+ years)</SelectItem>
                          <SelectItem value="professional">Professional investor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Risk Assessment */}
              {currentStep === 3 && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-trust-navy mb-2">Risk Assessment</h2>
                    <p className="text-gray-600">Help us understand your investment timeline and risk tolerance.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="timeframe">Investment Timeframe</Label>
                      <Select onValueChange={(value) => handleInputChange('timeframe', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="short">1-3 years (Short term)</SelectItem>
                          <SelectItem value="medium">3-7 years (Medium term)</SelectItem>
                          <SelectItem value="long">7+ years (Long term)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="riskTolerance">Risk Tolerance</Label>
                      <Select onValueChange={(value) => handleInputChange('riskTolerance', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select risk tolerance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conservative">Conservative (Lower risk, stable returns)</SelectItem>
                          <SelectItem value="moderate">Moderate (Balanced risk/return)</SelectItem>
                          <SelectItem value="aggressive">Aggressive (Higher risk, higher returns)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        placeholder="Any specific questions or requirements regarding this investment opportunity..."
                        className="mt-2 h-32"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-trust-navy mb-2">Review Your Application</h2>
                    <p className="text-gray-600">Please review your information before submitting.</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="font-semibold text-trust-navy">Name:</div>
                        <div className="text-gray-700">{formData.fullName || 'Not provided'}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-trust-navy">Email:</div>
                        <div className="text-gray-700">{formData.email || 'Not provided'}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-trust-navy">Investment Amount:</div>
                        <div className="text-gray-700">{formData.investmentAmount || 'Not selected'}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-trust-navy">Accredited Status:</div>
                        <div className="text-gray-700">{formData.accreditedInvestor || 'Not specified'}</div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="font-semibold text-trust-navy mb-2">Next Steps:</div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Our investment team will review your application within 2 business days</li>
                        <li>• You'll receive detailed investment documentation and legal agreements</li>
                        <li>• Schedule a consultation call to discuss the opportunity in detail</li>
                        <li>• Complete due diligence and finalize your investment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                {currentStep > 1 && (
                  <Button variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                )}
                
                <div className="ml-auto">
                  {currentStep < 4 ? (
                    <Button onClick={nextStep} className="bg-earth-gold hover:bg-amber-500 text-trust-navy">
                      Continue
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button className="bg-earth-gold hover:bg-amber-500 text-trust-navy px-8">
                      Submit Application
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust-navy mb-4">Need Assistance?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our investment specialists are here to guide you through every step of the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 text-earth-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-trust-navy mb-2">Phone Consultation</h3>
              <p className="text-gray-600 mb-4">Speak directly with our investment team</p>
              <Button variant="outline" className="w-full">
                Schedule Call
              </Button>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Mail className="h-12 w-12 text-earth-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-trust-navy mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Get detailed answers to your questions</p>
              <Button variant="outline" className="w-full">
                Send Email
              </Button>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-earth-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-trust-navy mb-2">Documentation</h3>
              <p className="text-gray-600 mb-4">Access investment materials and FAQs</p>
              <Button variant="outline" className="w-full">
                View Docs
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-trust-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Secure & Compliant Investment Process</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your investment and personal information are protected by industry-leading security measures and regulatory compliance.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>FCA Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <span>Legal Documentation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}