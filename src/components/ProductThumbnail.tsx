import React, { useState } from 'react';
import { Package } from 'lucide-react';

interface ProductThumbnailProps {
  image?: string;
  name: string;
  category: string;
  productId: string;
  size?: 'sm' | 'md';
}

export default function ProductThumbnail({
  image,
  name,
  category,
  productId,
  size = 'md'
}: ProductThumbnailProps) {
  const [imageError, setImageError] = useState(false);

  const containerClass = size === 'sm' 
    ? 'w-10 h-10 rounded-lg p-0.5' 
    : 'w-16 h-16 rounded-xl p-1';

  const renderProductIllustration = () => {
    switch (category) {
      case 'tubos':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            <defs>
              <linearGradient id="metallic-thumb" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
            {/* Outer pipe */}
            <path d="M 20,40 L 100,40 C 105,40 105,80 100,80 L 20,80" strokeWidth="2" stroke="url(#metallic-thumb)" />
            {/* Inner highlights */}
            <line x1="20" y1="50" x2="98" y2="50" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="20" y1="60" x2="95" y2="60" stroke="#64748b" strokeWidth="1.5" />
            <line x1="20" y1="70" x2="98" y2="70" stroke="#334155" strokeWidth="1" />
            {/* Pipe Left Opening Oval */}
            <ellipse cx="20" cy="60" rx="6" ry="20" fill="#475569" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="20" cy="60" rx="3" ry="12" fill="#1e293b" />
          </svg>
        );
      case 'conexoes':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {productId.includes('flange') ? (
              <g>
                <circle cx="60" cy="60" r="40" stroke="#64748b" strokeWidth="4" />
                <circle cx="60" cy="60" r="22" stroke="#475569" strokeWidth="2" />
                <circle cx="60" cy="60" r="16" fill="#1e293b" />
                {/* Bolt Holes */}
                <circle cx="60" cy="30" r="3" fill="#cbd5e1" />
                <circle cx="60" cy="90" r="3" fill="#cbd5e1" />
                <circle cx="30" cy="60" r="3" fill="#cbd5e1" />
                <circle cx="90" cy="60" r="3" fill="#cbd5e1" />
                <circle cx="38" cy="38" r="3" fill="#cbd5e1" />
                <circle cx="82" cy="82" r="3" fill="#cbd5e1" />
                <circle cx="38" cy="82" r="3" fill="#cbd5e1" />
                <circle cx="82" cy="38" r="3" fill="#cbd5e1" />
              </g>
            ) : (
              <g>
                {/* Elbow Curva 90 */}
                <path d="M 30,85 A 55,55 0 0,1 85,30" stroke="#64748b" strokeWidth="16" strokeLinecap="square" />
                <path d="M 30,85 A 55,55 0 0,1 85,30" stroke="#94a3b8" strokeWidth="8" strokeLinecap="square" />
                {/* Connector Ring Left */}
                <ellipse cx="30" cy="85" rx="3" ry="12" fill="#334155" stroke="#cbd5e1" />
                {/* Connector Ring Top */}
                <ellipse cx="85" cy="30" rx="12" ry="3" fill="#334155" stroke="#cbd5e1" />
              </g>
            )}
          </svg>
        );
      case 'valvulas':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {/* Valve Body */}
            <rect x="35" y="45" width="50" height="30" rx="5" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
            {/* Pipe connections */}
            <rect x="20" y="48" width="15" height="24" rx="2" fill="#334155" stroke="#cbd5e1" />
            <rect x="85" y="48" width="15" height="24" rx="2" fill="#334155" stroke="#cbd5e1" />
            {/* Actuator stem */}
            <line x1="60" y1="45" x2="60" y2="25" stroke="#64748b" strokeWidth="4" />
            {/* Lever handle */}
            <path d="M 55,25 L 100,15" stroke="#00a2a6" strokeWidth="6" strokeLinecap="round" />
            <circle cx="60" cy="25" r="5" fill="#1e293b" />
          </svg>
        );
      case 'estrutura':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {/* Metal Sheet */}
            <path d="M 25,45 L 85,25 L 95,75 L 35,95 Z" fill="#64748b" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M 25,45 L 35,95 L 35,100 L 25,50 Z" fill="#334155" />
            <line x1="45" y1="35" x2="55" y2="85" stroke="#94a3b8" strokeWidth="3" opacity="0.5" />
            <line x1="60" y1="30" x2="70" y2="80" stroke="#cbd5e1" strokeWidth="2" opacity="0.4" />
          </svg>
        );
      case 'incendio':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {/* Fire Hose roll */}
            <circle cx="60" cy="65" r="35" fill="none" stroke="#ef4444" strokeWidth="6" />
            <circle cx="60" cy="65" r="25" fill="none" stroke="#ef4444" strokeWidth="4" />
            <circle cx="60" cy="65" r="15" fill="none" stroke="#fca5a5" strokeWidth="3" />
            {/* Brass Storz couplings */}
            <rect x="75" y="30" width="16" height="12" rx="1" fill="#eab308" stroke="#ca8a04" />
            <rect x="52" y="30" width="10" height="4" fill="#64748b" />
          </svg>
        );
      case 'auxiliares':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {/* Pump motor and casing */}
            <rect x="25" y="45" width="45" height="35" rx="3" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
            {/* Motor cooling fins */}
            <line x1="32" y1="45" x2="32" y2="80" stroke="#3b82f6" />
            <line x1="42" y1="45" x2="42" y2="80" stroke="#3b82f6" />
            <line x1="52" y1="45" x2="52" y2="80" stroke="#3b82f6" />
            {/* Volute / Pump chamber */}
            <circle cx="85" cy="62" r="22" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="85" cy="62" r="8" fill="#0c4a6e" />
            {/* Outlets */}
            <rect x="80" y="28" width="10" height="13" fill="#0284c7" stroke="#38bdf8" />
            <rect x="100" y="57" width="12" height="10" fill="#0284c7" stroke="#38bdf8" />
          </svg>
        );
      default:
        return <Package className="w-1/2 h-1/2 text-slate-400" />;
    }
  };

  return (
    <div className={`${containerClass} bg-white border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all shrink-0 flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100/30 relative overflow-hidden`}>
      {!imageError && image ? (
        <img
          src={image}
          alt={name}
          onError={() => setImageError(true)}
          className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-1.5">
          {renderProductIllustration()}
        </div>
      )}
    </div>
  );
}
