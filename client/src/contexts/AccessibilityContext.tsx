import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  isHighContrast: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
  toggleHighContrast: () => void;
  setFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  isAccessibilityMode: boolean;
  toggleAccessibilityMode: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedContrast = localStorage.getItem('accessibility-high-contrast');
    const savedFontSize = localStorage.getItem('accessibility-font-size');
    const savedAccessibilityMode = localStorage.getItem('accessibility-mode');

    if (savedContrast === 'true') {
      setIsHighContrast(true);
    }
    if (savedFontSize) {
      setFontSize(savedFontSize as 'normal' | 'large' | 'extra-large');
    }
    if (savedAccessibilityMode === 'true') {
      setIsAccessibilityMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply contrast changes
    const root = document.documentElement;
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    localStorage.setItem('accessibility-high-contrast', isHighContrast.toString());
  }, [isHighContrast]);

  useEffect(() => {
    // Apply font size changes
    const root = document.documentElement;
    root.classList.remove('font-large', 'font-extra-large');
    if (fontSize === 'large') {
      root.classList.add('font-large');
    } else if (fontSize === 'extra-large') {
      root.classList.add('font-extra-large');
    }
    localStorage.setItem('accessibility-font-size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    // Apply accessibility mode
    const root = document.documentElement;
    if (isAccessibilityMode) {
      root.classList.add('accessibility-mode');
    } else {
      root.classList.remove('accessibility-mode');
    }
    localStorage.setItem('accessibility-mode', isAccessibilityMode.toString());
  }, [isAccessibilityMode]);

  const toggleHighContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const handleSetFontSize = (size: 'normal' | 'large' | 'extra-large') => {
    setFontSize(size);
  };

  const toggleAccessibilityMode = () => {
    setIsAccessibilityMode(!isAccessibilityMode);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        isHighContrast,
        fontSize,
        toggleHighContrast,
        setFontSize: handleSetFontSize,
        isAccessibilityMode,
        toggleAccessibilityMode,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}