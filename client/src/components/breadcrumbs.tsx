import { ChevronRight, Home } from "lucide-react";
import { useLocation } from "wouter";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const routeMap: Record<string, BreadcrumbItem[]> = {
  "/": [{ label: "Home", href: "/" }],
  "/about": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" }
  ],
  "/investors": [
    { label: "Home", href: "/" },
    { label: "Investors", href: "/investors" }
  ],
  "/operations": [
    { label: "Home", href: "/" },
    { label: "Operations", href: "/operations" }
  ],
  "/impact": [
    { label: "Home", href: "/" },
    { label: "Impact", href: "/impact" }
  ],
  "/team": [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" }
  ],
  "/contact": [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" }
  ],
  "/privacy-policy": [
    { label: "Home", href: "/" },
    { label: "Legal", href: "#" },
    { label: "Privacy Policy", href: "/privacy-policy" }
  ],
  "/terms-of-service": [
    { label: "Home", href: "/" },
    { label: "Legal", href: "#" },
    { label: "Terms of Service", href: "/terms-of-service" }
  ],
  "/risk-disclosures": [
    { label: "Home", href: "/" },
    { label: "Legal", href: "#" },
    { label: "Risk Disclosures", href: "/risk-disclosures" }
  ]
};

export function Breadcrumbs() {
  const [location] = useLocation();
  const breadcrumbs = routeMap[location] || [{ label: "Home", href: "/" }];

  // Always show breadcrumbs on legal pages
  if (breadcrumbs.length <= 1 && !location.includes('privacy') && !location.includes('terms') && !location.includes('risk')) {
    return null;
  }

  const handleNavigation = (href: string) => {
    if (href === "#") return; // Don't navigate for placeholder links
    
    // Navigate to the page and scroll to top
    window.location.href = href;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={`${breadcrumb.href}-${index}`} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />
              )}
              {index === 0 && (
                <Home className="h-4 w-4 text-gray-500 mr-2" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-trust-navy">
                  {breadcrumb.label}
                </span>
              ) : breadcrumb.href === "#" ? (
                <span className="text-gray-500">
                  {breadcrumb.label}
                </span>
              ) : (
                <button
                  onClick={() => handleNavigation(breadcrumb.href)}
                  className="text-gray-500 hover:text-trust-navy transition-colors cursor-pointer"
                >
                  {breadcrumb.label}
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}