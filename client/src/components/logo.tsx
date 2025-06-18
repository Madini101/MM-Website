import madiniLogo from "@assets/Madini Moyoni Logo 2025.jpeg";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  };

  return (
    <img 
      src={madiniLogo} 
      alt="Madini Moyoni Logo" 
      className={`${sizeClasses[size]} rounded-full object-cover shadow-lg ${className}`}
    />
  );
}