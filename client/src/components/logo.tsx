import madiniLogo from "@assets/Untitled design (1) (1)_1755480516837.png";

interface LogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    xs: "h-6",
    sm: "h-8",
    md: "h-12", 
    lg: "h-16",
    xl: "h-20",
    "2xl": "h-28",
    "3xl": "h-36"
  };

  return (
    <img 
      src={madiniLogo} 
      alt="Madini Moyoni Logo" 
      className={`${sizeClasses[size]} object-contain shadow-lg ${className}`}
      style={{ 
        imageRendering: 'crisp-edges',
        filter: 'contrast(1.2) brightness(1.3) saturate(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.3))'
      }}
    />
  );
}