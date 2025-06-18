import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { 
  Eye, 
  Type, 
  Contrast, 
  Settings, 
  X,
  Maximize,
  Minimize,
  RotateCcw
} from 'lucide-react';

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const {
    isHighContrast,
    fontSize,
    toggleHighContrast,
    setFontSize,
    isAccessibilityMode,
    toggleAccessibilityMode,
  } = useAccessibility();

  const resetSettings = () => {
    setFontSize('normal');
    if (isHighContrast) toggleHighContrast();
    if (isAccessibilityMode) toggleAccessibilityMode();
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-earth-gold hover:bg-yellow-500 text-trust-navy p-3 rounded-full shadow-lg"
          aria-label="Open Accessibility Settings"
        >
          <Eye className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="bg-white border-2 border-earth-gold shadow-2xl w-80">
        <CardHeader className="bg-earth-gold">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-trust-navy" />
              <CardTitle className="text-lg text-trust-navy">Accessibility</CardTitle>
            </div>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-trust-navy hover:bg-yellow-200 p-1"
                aria-label={isMinimized ? "Expand panel" : "Minimize panel"}
              >
                {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-trust-navy hover:bg-yellow-200 p-1"
                aria-label="Close accessibility panel"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-6 space-y-6">
            {/* High Contrast Toggle */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Contrast className="h-4 w-4 text-trust-navy" />
                  <label className="text-sm font-medium text-trust-navy">
                    High Contrast
                  </label>
                </div>
                <Button
                  variant={isHighContrast ? "default" : "outline"}
                  size="sm"
                  onClick={toggleHighContrast}
                  className={isHighContrast 
                    ? "bg-trust-navy text-white hover:bg-blue-800" 
                    : "border-trust-navy text-trust-navy hover:bg-gray-100"
                  }
                  aria-pressed={isHighContrast}
                >
                  {isHighContrast ? 'ON' : 'OFF'}
                </Button>
              </div>
              <p className="text-xs text-gray-600">
                Increases contrast for better visibility
              </p>
            </div>

            {/* Font Size Controls */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Type className="h-4 w-4 text-trust-navy" />
                <label className="text-sm font-medium text-trust-navy">
                  Text Size
                </label>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {(['normal', 'large', 'extra-large'] as const).map((size) => (
                  <Button
                    key={size}
                    variant={fontSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFontSize(size)}
                    className={fontSize === size 
                      ? "bg-trust-navy text-white hover:bg-blue-800" 
                      : "border-trust-navy text-trust-navy hover:bg-gray-100"
                    }
                    aria-pressed={fontSize === size}
                  >
                    {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-gray-600">
                Current: {fontSize.charAt(0).toUpperCase() + fontSize.slice(1).replace('-', ' ')}
              </p>
            </div>

            {/* Accessibility Mode */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-trust-navy" />
                  <label className="text-sm font-medium text-trust-navy">
                    Enhanced Mode
                  </label>
                </div>
                <Button
                  variant={isAccessibilityMode ? "default" : "outline"}
                  size="sm"
                  onClick={toggleAccessibilityMode}
                  className={isAccessibilityMode 
                    ? "bg-trust-navy text-white hover:bg-blue-800" 
                    : "border-trust-navy text-trust-navy hover:bg-gray-100"
                  }
                  aria-pressed={isAccessibilityMode}
                >
                  {isAccessibilityMode ? 'ON' : 'OFF'}
                </Button>
              </div>
              <p className="text-xs text-gray-600">
                Simplified layouts and enhanced focus indicators
              </p>
            </div>

            {/* Reset Button */}
            <div className="pt-3 border-t border-gray-200">
              <Button
                variant="outline"
                size="sm"
                onClick={resetSettings}
                className="w-full border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset to Default
              </Button>
            </div>

            {/* Status Indicator */}
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600 space-y-1">
                <div>Status:</div>
                <div className="flex flex-wrap gap-1">
                  {isHighContrast && (
                    <span className="bg-trust-navy text-white px-2 py-1 rounded text-xs">
                      High Contrast
                    </span>
                  )}
                  {fontSize !== 'normal' && (
                    <span className="bg-earth-gold text-trust-navy px-2 py-1 rounded text-xs">
                      {fontSize.replace('-', ' ')} Text
                    </span>
                  )}
                  {isAccessibilityMode && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                      Enhanced Mode
                    </span>
                  )}
                  {!isHighContrast && fontSize === 'normal' && !isAccessibilityMode && (
                    <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs">
                      Default
                    </span>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}