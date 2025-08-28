import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/logo";


export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Impact", href: "/impact" },
    { name: "Investment", href: "/investors" },
    { name: "Operations", href: "/operations" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const handleNavClick = (href: string, event: React.MouseEvent) => {
    // Close mobile menu immediately
    setIsOpen(false);
    
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        left: 0,
        behavior: 'smooth' 
      });
    }, 50);
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-premium border-b border-gray-100/50 sticky top-0 z-50">
      <div className="premium-container">
        <div className="flex items-center h-24 py-2">
          {/* Premium Logo - Mobile Responsive */}
          <Link href="/" className="flex-shrink-0 premium-focus">
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
              <Logo size="lg" className="shadow-premium-glow" />
              <div className="hidden sm:block">
                <div className="text-trust-navy-900 font-bold text-xl tracking-tight">Madini Moyoni</div>
                <div className="text-sm text-gray-600 font-medium">Strategic Mining Investment</div>
              </div>
              <div className="block sm:hidden">
                <div className="text-trust-navy-900 font-bold text-sm tracking-tight">Madini Moyoni</div>
              </div>
            </div>
          </Link>

          {/* Premium Desktop Navigation - Top Right Positioned */}
          <nav className="hidden lg:flex space-x-1 ml-auto">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`${
                    isActive(item.href)
                      ? "text-earth-gold-600 bg-earth-gold-50 border-b-2 border-earth-gold-500"
                      : "text-trust-navy-700 hover:text-earth-gold-600 hover:bg-gray-50"
                  } h-12 rounded-lg border-b-2 border-transparent font-medium px-4 text-sm transition-all duration-300 premium-focus`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>



          {/* Mobile menu button - Top Right */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden ml-auto p-2 h-8 w-8">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                <Logo size="md" />
                <div>
                  <div className="font-bold text-lg text-trust-navy-900">Madini Moyoni</div>
                  <div className="text-xs text-gray-500">Strategic Mining Investment</div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`block py-2 px-3 rounded-md font-medium ${
                      isActive(item.href)
                        ? "bg-earth-gold/10 text-earth-gold"
                        : "text-trust-navy hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <Link href="/investors" onClick={(e) => handleNavClick("/investors", e)}>
                    <Button className="w-full bg-earth-gold text-trust-navy hover:bg-amber-500 font-semibold">
                      Invest Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}