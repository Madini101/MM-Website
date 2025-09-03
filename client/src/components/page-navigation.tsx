import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Home, ArrowUp, ArrowDown } from "lucide-react";
import { useLocation } from "wouter";

interface PageInfo {
  path: string;
  title: string;
}

const pages: PageInfo[] = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About Us" },
  { path: "/impact", title: "Impact" },
  { path: "/investors", title: "Investment" },
  { path: "/operations", title: "Operations" },
  { path: "/team", title: "Team" },
  { path: "/contact", title: "Contact" }
];

export function PageNavigation() {
  const [location, navigate] = useLocation();
  const [showNavigation, setShowNavigation] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setShowNavigation(true);
      } else {
        setShowNavigation(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const currentPageIndex = pages.findIndex(page => page.path === location);
  const previousPage = currentPageIndex > 0 ? pages[currentPageIndex - 1] : null;
  const nextPage = currentPageIndex < pages.length - 1 ? pages[currentPageIndex + 1] : null;

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      left: 0,
      behavior: "smooth" 
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!showNavigation) {
    return null;
  }

  return (
    <div className="fixed top-20 sm:top-24 right-2 sm:right-6 z-40 flex flex-col space-y-2">
      {/* Page Navigation */}
      <div className="flex space-x-2 bg-white/95 backdrop-blur-md rounded-full p-2 shadow-2xl border border-gray-200">
        {previousPage && (
          <button
            onClick={() => {
              navigate(previousPage.path);
              setTimeout(() => {
                window.scrollTo({ 
                  top: 0, 
                  left: 0,
                  behavior: 'smooth' 
                });
              }, 100);
            }}
            className="flex items-center px-3 py-2 bg-trust-navy hover:bg-trust-navy/90 text-white rounded-full transition-all duration-300 hover:scale-105 text-sm font-medium"
            title={`Previous: ${previousPage.title}`}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            {previousPage.title}
          </button>
        )}
        
        <button
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ 
                top: 0, 
                left: 0,
                behavior: 'smooth' 
              });
            }, 100);
          }}
          className="flex items-center justify-center w-10 h-10 bg-earth-gold hover:bg-earth-gold/90 text-white rounded-full transition-all duration-300 hover:scale-105"
          title="Home"
        >
          <Home className="h-4 w-4" />
        </button>

        {nextPage && (
          <button
            onClick={() => {
              navigate(nextPage.path);
              setTimeout(() => {
                window.scrollTo({ 
                  top: 0, 
                  left: 0,
                  behavior: 'smooth' 
                });
              }, 100);
            }}
            className="flex items-center px-3 py-2 bg-trust-navy hover:bg-trust-navy/90 text-white rounded-full transition-all duration-300 hover:scale-105 text-sm font-medium"
            title={`Next: ${nextPage.title}`}
          >
            {nextPage.title}
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        )}
      </div>

      {/* Scroll Controls */}
      <div className="flex space-x-2 justify-center">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-earth-gold hover:bg-earth-gold/90 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          title="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
        
        <button
          onClick={scrollToBottom}
          className="w-10 h-10 bg-trust-navy hover:bg-trust-navy/90 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          title="Scroll to bottom"
        >
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}