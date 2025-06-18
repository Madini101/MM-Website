import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes this investment SEIS eligible?",
      answer: "Madini Moyoni Ltd qualifies as a SEIS eligible company under HMRC guidelines. We are an early-stage UK company raising up to £250k in qualifying business activities (copper mining operations). We meet all criteria including being unquoted, having fewer than 25 employees, and maintaining the required UK ownership structure. SEIS provides 50% immediate tax relief on investments up to £200,000 per individual per tax year for UK taxpayers only."
    },
    {
      question: "What's the investment process and timeline?",
      answer: "1) Initial consultation (within 48 hours) 2) Due diligence pack provided 3) Investment agreement signed 4) Funds transferred 5) SEIS3 certificate issued (within 4 months) 6) Claim tax relief via self-assessment. Total process typically takes 2-4 weeks from initial contact to investment completion."
    },
    {
      question: "What evidence supports the copper reserves claims?",
      answer: "Initial geological exploration conducted by our experienced team, led by Elly Mshana (30+ years mineral exploration across East Africa), has identified hundreds of thousands of tonnes of high-grade copper ore within our licensed mining area in Mbesa, Tanzania. The Afro Shamans team has been working these deposits for over 20 years with extensive local geological knowledge."
    },
    {
      question: "What's the timeline for returns on investment?",
      answer: "Returns depend on operational success of mechanisation and copper extraction. Professional mechanisation of artisanal operations will transform current mining activities. Hold shares for minimum 3 years to maintain SEIS benefits."
    },
    {
      question: "How does mechanisation transform the operation?",
      answer: "Currently, over 1.5 million Tanzanians depend on mining, yet 80% work in unregulated, hazardous conditions. Our partnership brings professional mining equipment, safety protocols, and international market access to replace dangerous artisanal methods. This increases both safety and productivity while ensuring fair pricing through established international buyer relationships."
    },
    {
      question: "What is the role of the UK-Tanzania partnership?",
      answer: "Madini Moyoni (UK) provides international market access, professional business management, and investment capital. Afro Shamans Company Limited (Tanzania) brings 20+ years of local mining expertise, community relationships, and geological knowledge. Together, we transform artisanal operations into professional, sustainable mining businesses."
    },
    {
      question: "How are copper prices determined and what's the market outlook?",
      answer: "Our pricing is based on London Metal Exchange (LME) copper prices with negotiated premiums. Copper demand is driven by renewable energy infrastructure, electric vehicles, and construction. The International Copper Association projects significant supply deficits through 2030, supporting strong price outlook for our production."
    },
    {
      question: "What community impact can investors expect?",
      answer: "Our operations directly benefit 25-30 core mining families and their extended community in Mbesa. We're building schools, healthcare facilities, clean water access and sustainable farming initiatives. Emmanuel Mshana, co-founder of Pamoja Afrika, leads our community development programs with a proven track record in rural Tanzania."
    },
    {
      question: "What are the investment minimums and maximums?",
      answer: "SEIS investments range from £5,000 to £200,000 per individual per tax year. We offer four tiers: Pathfinder (£5k), Trailblazer (£10k), Visionary (£20k), and Architect (£50k+). Strategic investments above SEIS limits include: Pioneer ($500k), Catalyst ($1M), Innovator ($2.5M), and Visionary ($5M+). SEIS investments receive immediate 50% tax relief; strategic investments focus on equity returns and community impact."
    },
    {
      question: "What documentation will I receive?",
      answer: "SEIS UK investors will receive: Share certificates, SEIS3 form for HMRC (within 4 months), investment agreement, company memorandum & articles, quarterly progress reports and annual impact statements. We provide full audit trail for HMRC compliance and maintain transparent communication throughout. Non-UK investors in the larger, strategic fundraise will have their regulated communications, progress updates and impact statements delivered via the Verivend investment platform."
    },
    {
      question: "What are the main risks of this investment?",
      answer: "Key risks include: operational mining risks, commodity price volatility, political/regulatory changes in Tanzania, currency fluctuations, and general early-stage company risks. Mining operations may face technical challenges or delays. However, SEIS structure provides downside protection through loss relief and immediate tax benefits."
    },
    {
      question: "How do I get started?",
      answer: "Use our contact form to schedule an initial consultation. We'll assess your investment objectives, provide detailed due diligence materials, and guide you through the investment process. Our team responds within 24 hours and can arrange calls at your convenience."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trust-navy mb-3 sm:mb-4 px-4">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Common questions from potential investors
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white shadow-md">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-trust-navy pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-earth-gold transition-transform flex-shrink-0 ${
                        openFAQ === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-trust-navy leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
