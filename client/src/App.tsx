import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ReadingProgress } from "@/components/reading-progress";
import { PageNavigation } from "@/components/page-navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Impact from "@/pages/impact";
import Investors from "@/pages/investors";
import InvestNow from "@/pages/invest-now";
import Operations from "@/pages/operations";
import Team from "@/pages/team";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import RiskDisclosures from "@/pages/risk-disclosures";


function ScrollToTopOnRoute() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({ 
      top: 0, 
      left: 0,
      behavior: 'smooth' 
    });
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTopOnRoute />
      <ReadingProgress />
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/impact" component={Impact} />
          <Route path="/investors" component={Investors} />
          <Route path="/invest-now" component={ContactPage} />
          <Route path="/operations" component={Operations} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/risk-disclosures" component={RiskDisclosures} />

          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <PageNavigation />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
