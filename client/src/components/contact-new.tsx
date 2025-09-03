import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Clock, Building, Shield, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentAmount: "",
    accreditedInvestor: "",
    investmentExperience: "",
    timeframe: "",
    riskTolerance: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        investmentAmount: "",
        accreditedInvestor: "",
        investmentExperience: "",
        timeframe: "",
        riskTolerance: "",
        message: ""
      });
      setCurrentStep(1);
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit contact form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      investmentType: "equity",
      investmentAmount: formData.investmentAmount || null,
      message: formData.message || null,
    };

    // Use Netlify function for deployment
    const isNetlify = import.meta.env.PROD;
    const endpoint = isNetlify ? '/.netlify/functions/contact' : '/api/contact';
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      
      toast({
        title: "Message Sent Successfully",
        description: result.message || "Thank you for your interest. We will contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        investmentAmount: "",
        accreditedInvestor: "",
        investmentExperience: "",
        timeframe: "",
        riskTolerance: "",
        message: ""
      });
      setCurrentStep(1);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit contact form. Please try again.",
        variant: "destructive",
      });
    }
  };

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
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Small Professional Header Card */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl font-bold text-trust-navy mb-3">
              Investment Application Portal
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Secure application for qualified investors in Tanzania's sustainable copper mining development
            </p>
            
            {/* Progress Indicator */}
            <div className="flex justify-center space-x-4 mb-6">
              {[
                { step: 1, label: "Info" },
                { step: 2, label: "Goals" },
                { step: 3, label: "Risk" },
                { step: 4, label: "Review" }
              ].map(({ step, label }) => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step < currentStep ? 'bg-trust-navy text-white' :
                    step === currentStep ? 'bg-earth-gold text-trust-navy' : 
                    'bg-gray-300 text-gray-600'
                  }`}>
                    {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
                  </div>
                  <span className="text-sm mt-2 font-medium text-gray-600">{label}</span>
                </div>
              ))}
            </div>

            {/* Nyerere Quote - Better positioned */}
            <div className="bg-earth-gold/5 border-l-4 border-earth-gold rounded-r-lg p-6 max-w-3xl mx-auto">
              <blockquote className="text-lg italic text-trust-navy font-semibold leading-relaxed mb-3">
                "If real development is to take place, the people have to be involved."
              </blockquote>
              <cite className="text-sm text-gray-600 font-medium">
                — Julius Kambarage Nyerere, Uhuru na Maendeleo (Freedom and Development), 1973
              </cite>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Investment Form - Left Side */}
          <div>
            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden h-full">
              {/* Compact Form Header */}
              <div className="bg-gradient-to-r from-trust-navy to-slate-800 p-6">
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Building className="h-5 w-5 mr-3 text-earth-gold" />
                  Investment Application
                </CardTitle>
                <p className="text-white/90 mt-2 text-sm">Step {currentStep} of 4</p>
              </div>
              
              {/* Multi-Step Form Content */}
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-trust-navy mb-1">Personal Information</h3>
                        <p className="text-sm text-gray-600">Your basic details for our investment team.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-sm font-semibold text-gray-800 mb-2 block">Full Legal Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Enter your full legal name"
                            required
                            className="h-12 text-sm border-2 border-gray-200 focus:border-earth-gold focus:ring-earth-gold/20 rounded-lg bg-gray-50 focus:bg-white transition-all"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email" className="text-sm font-semibold text-gray-800 mb-2 block">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your.email@example.com"
                            required
                            className="h-12 text-sm border-2 border-gray-200 focus:border-earth-gold focus:ring-earth-gold/20 rounded-lg bg-gray-50 focus:bg-white transition-all"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone" className="text-sm font-semibold text-gray-800 mb-2 block">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+44 20 1234 5678"
                            className="h-12 text-sm border-2 border-gray-200 focus:border-earth-gold focus:ring-earth-gold/20 rounded-lg bg-gray-50 focus:bg-white transition-all"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="company" className="text-sm font-semibold text-gray-800 mb-2 block">Company/Organization</Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Investment Firm Ltd"
                            className="h-12 text-sm border-2 border-gray-200 focus:border-earth-gold focus:ring-earth-gold/20 rounded-lg bg-gray-50 focus:bg-white transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Investment Preferences */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-trust-navy mb-1">Investment Preferences</h3>
                        <p className="text-sm text-gray-600">Tell us about your investment goals and experience.</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="investmentAmount" className="text-sm font-semibold text-gray-800 mb-2 block">Intended Investment Amount *</Label>
                        <Select onValueChange={(value) => handleInputChange('investmentAmount', value)}>
                          <SelectTrigger className="h-12 text-sm border-2 border-gray-200 focus:border-earth-gold rounded-lg bg-gray-50 focus:bg-white">
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
                        <Label htmlFor="accreditedInvestor" className="text-sm font-semibold text-gray-800 mb-2 block">Are you an accredited investor? *</Label>
                        <Select onValueChange={(value) => handleInputChange('accreditedInvestor', value)}>
                          <SelectTrigger className="h-12 text-sm border-2 border-gray-200 focus:border-earth-gold rounded-lg bg-gray-50 focus:bg-white">
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
                        <Label htmlFor="investmentExperience" className="text-sm font-semibold text-gray-800 mb-2 block">Investment Experience</Label>
                        <Select onValueChange={(value) => handleInputChange('investmentExperience', value)}>
                          <SelectTrigger className="h-12 text-sm border-2 border-gray-200 focus:border-earth-gold rounded-lg bg-gray-50 focus:bg-white">
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
                  )}

                  {/* Step 3: Risk Assessment */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-trust-navy mb-1">Risk Assessment</h3>
                        <p className="text-sm text-gray-600">Help us understand your investment timeline and risk tolerance.</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="timeframe" className="text-sm font-semibold text-gray-800 mb-2 block">Investment Timeframe</Label>
                        <Select onValueChange={(value) => handleInputChange('timeframe', value)}>
                          <SelectTrigger className="h-12 text-sm border-2 border-gray-200 focus:border-earth-gold rounded-lg bg-gray-50 focus:bg-white">
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
                        <Label htmlFor="riskTolerance" className="text-sm font-semibold text-gray-800 mb-2 block">Risk Tolerance</Label>
                        <Select onValueChange={(value) => handleInputChange('riskTolerance', value)}>
                          <SelectTrigger className="h-12 text-sm border-2 border-gray-200 focus:border-earth-gold rounded-lg bg-gray-50 focus:bg-white">
                            <SelectValue placeholder="Select risk tolerance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="conservative">Conservative (Lower risk, stable returns)</SelectItem>
                            <SelectItem value="moderate">Moderate (Balanced risk/return)</SelectItem>
                            <SelectItem value="aggressive">Aggressive (Higher risk, higher returns)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Final Details */}
                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-trust-navy mb-1">Final Details</h3>
                        <p className="text-sm text-gray-600">Any additional information to help us serve you better.</p>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm font-semibold text-gray-800 mb-2 block">Additional Information</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your specific investment goals, questions, or any additional context..."
                          rows={4}
                          className="text-sm border-2 border-gray-200 focus:border-earth-gold focus:ring-earth-gold/20 rounded-lg bg-gray-50 focus:bg-white transition-all resize-none"
                        />
                      </div>
                      
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <p className="text-sm text-gray-700 mb-2 font-medium">
                          <Shield className="w-4 h-4 inline mr-2 text-trust-navy" />
                          Qualified Investor Confirmation
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          By submitting this application, you confirm that you are a qualified investor with appropriate financial resources and agree to receive confidential communications about strategic investment opportunities in Tanzania's copper mining sector.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4 border-t border-gray-200">
                    <Button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      variant="outline"
                      className="flex items-center px-4 py-2 text-sm border-2 border-gray-300 hover:border-trust-navy disabled:opacity-50"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      Previous
                    </Button>

                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center px-4 py-2 text-sm bg-earth-gold hover:bg-trust-navy text-trust-navy hover:text-white transition-colors"
                      >
                        Next
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="px-6 py-2 text-sm bg-gradient-to-r from-earth-gold to-yellow-500 hover:from-trust-navy hover:to-slate-800 text-trust-navy hover:text-white font-bold transition-all duration-300"
                      >
                        {contactMutation.isPending ? "Processing..." : "Submit Application"}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Compact Company Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-0 mt-4">
              <h4 className="text-lg font-bold text-trust-navy mb-4 flex items-center">
                <Building className="h-5 w-5 mr-2 text-earth-gold" />
                Company Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="bg-trust-navy text-white p-2 rounded-lg">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-trust-navy text-sm">Investment Inquiries</h5>
                    <a href="mailto:info@madinimoyoni.co.uk" className="text-earth-gold hover:text-trust-navy font-medium text-sm transition-colors">
                      info@madinimoyoni.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="bg-trust-navy text-white p-2 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-trust-navy text-sm">Registered Office</h5>
                    <p className="text-gray-700 font-medium text-xs">MADINI MOYONI LTD<br/>26 Green Curve, Banstead<br/>England, SM7 1NX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="bg-earth-gold text-trust-navy p-2 rounded-lg">
                    <Building className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-trust-navy text-sm">Company Registration</h5>
                    <p className="text-gray-700 font-medium text-xs">Company No: 15060835</p>
                  </div>
                </div>
              </div>

              {/* Compact Social Media Links */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h5 className="font-bold text-trust-navy mb-3 text-sm">Follow Our Progress</h5>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/company/madini-moyoni/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-trust-navy hover:bg-earth-gold text-white hover:text-trust-navy p-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Follow us on LinkedIn"
                  >
                    <SiLinkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://www.instagram.com/madinimoyoni?igsh=MW44bThpZmZnb3luNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-trust-navy hover:bg-earth-gold text-white hover:text-trust-navy p-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Follow us on Instagram"
                  >
                    <SiInstagram className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://m.youtube.com/watch?v=CTn3kkD128w" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-trust-navy hover:bg-earth-gold text-white hover:text-trust-navy p-3 rounded-lg transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Watch our YouTube video"
                  >
                    <SiYoutube className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Contact Information - Right Side */}
          <div>
            {/* Compact Executive Contact Section */}
            <div className="bg-gradient-to-br from-trust-navy to-slate-800 rounded-2xl p-6 text-white mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-earth-gold" />
                Executive Investment Team
              </h3>
              <p className="text-white/90 mb-4 text-sm">
                Connect directly with our senior leadership for strategic investment discussions
              </p>
              <div className="grid gap-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <h5 className="font-bold text-white text-base">Adrian Maile</h5>
                      <p className="text-earth-gold font-medium text-sm">Chairman & CEO</p>
                      <p className="text-white/70 text-xs">Strategic Investment Relations</p>
                    </div>
                    <a href="tel:+447908495255" className="bg-earth-gold hover:bg-white text-trust-navy px-4 py-2 text-sm rounded-lg font-bold transition-all hover:scale-105 shadow-lg">
                      +44 7908 495255
                    </a>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <h5 className="font-bold text-white text-base">Carsue Curniffe</h5>
                      <p className="text-earth-gold font-medium text-sm">Chief Operating Officer</p>
                      <p className="text-white/70 text-xs">Operations & Infrastructure</p>
                    </div>
                    <a href="tel:+447931657472" className="bg-earth-gold hover:bg-white text-trust-navy px-4 py-2 text-sm rounded-lg font-bold transition-all hover:scale-105 shadow-lg">
                      +44 7931 657472
                    </a>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <h5 className="font-bold text-white text-base">Jeremy Henderson</h5>
                      <p className="text-earth-gold font-medium text-sm">Chief Financial Officer</p>
                      <p className="text-white/70 text-xs">Financial Planning & Analysis</p>
                    </div>
                    <a href="tel:+447703727262" className="bg-earth-gold hover:bg-white text-trust-navy px-4 py-2 text-sm rounded-lg font-bold transition-all hover:scale-105 shadow-lg">
                      +44 7703 727262
                    </a>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <h5 className="font-bold text-white text-base">Daniel Smith</h5>
                      <p className="text-earth-gold font-medium text-sm">Chief Revenue Officer</p>
                      <p className="text-white/70 text-xs">Revenue Strategy & Growth</p>
                    </div>
                    <a href="tel:+447539377417" className="bg-earth-gold hover:bg-white text-trust-navy px-4 py-2 text-sm rounded-lg font-bold transition-all hover:scale-105 shadow-lg">
                      +44 7539 377417
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Investment Opportunity */}
            <div className="bg-gradient-to-br from-earth-gold/10 via-earth-gold/5 to-transparent rounded-2xl p-4 border border-earth-gold/20 shadow-lg">
              <h4 className="font-bold text-trust-navy mb-3 flex items-center text-lg">
                <Clock className="h-5 w-5 mr-2 text-earth-gold" />
                Strategic Investment Opportunity
              </h4>
              <div className="space-y-3">
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-earth-gold/30">
                  <p className="text-trust-navy font-bold text-base mb-1">
                    $2M Strategic Equity Investment Target
                  </p>
                  <p className="text-gray-700 text-sm font-medium">
                    Direct equity participation in Tanzania's premier copper mining operations.
                  </p>
                </div>
                <div className="bg-trust-navy/5 p-3 rounded-lg border-l-4 border-l-earth-gold">
                  <p className="text-trust-navy font-bold text-sm">
                    Investment Tiers: $5,000 to $2,000,000+
                  </p>
                  <p className="text-gray-600 text-xs mt-1">
                    Flexible structures for individual and institutional investors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}