import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import InvestmentJourney from "@/components/investment-journey";
import MiningSite from "@/components/mining-site";
import SocialImpact from "@/components/social-impact";
import SeisCalculator from "@/components/seis-calculator";
import Team from "@/components/team";
import Financials from "@/components/financials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import ProgressIndicator from "@/components/progress-indicator";
import SectionDivider from "@/components/section-divider";
import BackToTop from "@/components/back-to-top";
import MobileSectionNav from "@/components/mobile-section-nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-white overflow-x-hidden">
      <Navigation />
      <ProgressIndicator />
      <FloatingContact />
      <BackToTop />
      <MobileSectionNav />
      
      <main id="main-content" className="golden-flow overflow-x-hidden">
        {/* Hero - First Impression & Trust Building */}
        <Hero />
        
        <SectionDivider variant="subtle" />
        
        {/* About - Our Mission & Authentic Story */}
        <About />
        
        <SectionDivider variant="gradient" />
        
        {/* Mining Site Overview - Location & Operations */}
        <MiningSite />
        
        <SectionDivider variant="subtle" />
        
        {/* Investment Journey - Consolidated Investment Information */}
        <InvestmentJourney />
        
        <SectionDivider variant="gold" />
        
        {/* Social Impact - Where Profitability Meets Purpose */}
        <SocialImpact />
        
        {/* SEIS Calculator - Interactive Tax Benefits */}
        <SeisCalculator />
        
        <SectionDivider variant="subtle" />
        
        {/* Financials - Projections & Performance */}
        <Financials />
        
        <SectionDivider variant="gradient" />
        
        {/* Team - Leadership & Expertise */}
        <Team />
        
        <SectionDivider variant="subtle" />
        
        {/* FAQ - Investor Questions */}
        <FAQ />
        
        {/* Contact - Next Steps to Invest */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
