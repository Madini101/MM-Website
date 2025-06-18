interface SectionDividerProps {
  variant?: 'subtle' | 'gradient' | 'gold';
  className?: string;
}

export default function SectionDivider({ variant = 'subtle', className = '' }: SectionDividerProps) {
  const variants = {
    subtle: 'h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent',
    gradient: 'h-px bg-gradient-to-r from-trust-navy via-earth-gold to-trust-navy',
    gold: 'h-0.5 bg-earth-gold'
  };

  return (
    <div className={`w-full my-16 ${className}`}>
      <div className={`${variants[variant]} mx-auto max-w-2xl`} />
    </div>
  );
}