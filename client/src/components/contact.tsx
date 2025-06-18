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
import { Phone, Mail, MapPin, Clock, Building } from "lucide-react";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    investmentType: "",
    investmentAmount: "",
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
        fullName: "",
        email: "",
        phone: "",
        investmentType: "",
        investmentAmount: "",
        message: ""
      });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.investmentType) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const submitData: InsertContact = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone || null,
      investmentType: formData.investmentType,
      investmentAmount: formData.investmentAmount ? parseInt(formData.investmentAmount) : null,
      message: formData.message || null,
    };

    contactMutation.mutate(submitData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy mb-3 sm:mb-4 px-4">Ready to Invest?</h2>
          <p className="text-lg sm:text-xl text-trust-navy px-4">
            Get in touch to discuss your investment in sustainable mining
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-trust-navy/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl font-bold text-trust-navy">
                Investment Inquiry
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="John Smith"
                    className="mt-2 focus:ring-copper focus:border-copper"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john.smith@gmail.com"
                    className="mt-2 focus:ring-copper focus:border-copper"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+44 7XXX XXXXXX"
                    className="mt-2 focus:ring-copper focus:border-copper"
                  />
                </div>
                
                <div>
                  <Label htmlFor="investmentType">Investment Interest *</Label>
                  <Select value={formData.investmentType} onValueChange={(value) => handleInputChange("investmentType", value)}>
                    <SelectTrigger className="mt-2 focus:ring-copper focus:border-copper">
                      <SelectValue placeholder="Choose your investment interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="seis">SEIS Investment (£5,000 - £100,000)</SelectItem>
                      <SelectItem value="strategic">Strategic Investment ($100,000+)</SelectItem>
                      <SelectItem value="general">General Information</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="investmentAmount">Investment Amount (£)</Label>
                  <Input
                    id="investmentAmount"
                    type="number"
                    value={formData.investmentAmount}
                    onChange={(e) => handleInputChange("investmentAmount", e.target.value)}
                    placeholder="50000"
                    className="mt-2 focus:ring-copper focus:border-copper"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your investment interest..."
                    className="mt-2 focus:ring-copper focus:border-copper"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-earth-gold hover:bg-trust-navy text-trust-navy hover:text-white py-4"
                >
                  {contactMutation.isPending ? "Submitting..." : "Submit Investment Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-trust-navy mb-6">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-trust-navy text-white p-3 rounded-full mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-trust-navy">Phone</h4>
                    <p className="text-gray-600">+44 7539 377417</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-trust-navy text-white p-3 rounded-full mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-trust-navy">Email</h4>
                    <p className="text-gray-600">info@madinimoyoni.co.uk</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mt-6">
                <div className="bg-trust-navy text-white p-3 rounded-full mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-trust-navy">Address</h4>
                  <p className="text-gray-600">MADINI MOYONI LTD, 26 Green Curve, Banstead, England, SM7 1NX</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mt-6">
                <div className="bg-earth-gold text-trust-navy p-3 rounded-full mt-1">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-trust-navy">Company Number</h4>
                  <p className="text-gray-600">15060835</p>
                </div>
              </div>
            </div>

            {/* Urgency Message */}
            <Card className="bg-earth-gold bg-opacity-15 border-2 border-earth-gold shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-bold text-trust-navy mb-3 flex items-center text-lg">
                  <Clock className="h-6 w-6 mr-2" />
                  Time-Sensitive UK SEIS Window
                </h4>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-800 font-medium">
                    <strong>US Strategic Raise:</strong> Handled by Key Capital & GlobalCapitalista during June-July
                  </p>
                  <p className="text-gray-700">
                    Concurrent strategic raise taking place with US based audience.
                  </p>
                  <div className="bg-white p-3 rounded border-l-4 border-l-copper">
                    <p className="text-xs text-copper font-bold">
                      ⚡ UK SEIS investors: £250k target raise for UK audience
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
