import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({ variant = 'dark', className = '', showSubtitle = true }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`} id="logo-container">
      {/* High-quality transparent background real logo - significantly larger */}
      <div className="flex items-center justify-center h-20 transition-all hover:scale-[1.02]">
        <img 
          src="https://goianiatubos.com.br/wp-content/uploads/2023/07/logo-GTI-site-e1741897302433.png" 
          alt="Goiânia Tubos Inox Logo" 
          className="h-14 md:h-16 lg:h-18 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

