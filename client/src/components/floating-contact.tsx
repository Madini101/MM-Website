import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Phone, Mail } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-40">
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-trust-navy border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 sm:p-4 w-56 sm:w-64">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-trust-navy dark:text-white text-sm sm:text-base">Contact Us</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 touch-manipulation"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToContact}
              className="w-full justify-start touch-manipulation text-xs sm:text-sm"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </Button>
            <a
              href="tel:+44-020-XXXX-XXXX"
              className="flex items-center w-full p-2 text-xs sm:text-sm text-trust-navy dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded touch-manipulation"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Direct
            </a>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-earth-gold hover:bg-success-green text-trust-navy rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-lg transition-all transform active:scale-95 touch-manipulation"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    </div>
  );
}