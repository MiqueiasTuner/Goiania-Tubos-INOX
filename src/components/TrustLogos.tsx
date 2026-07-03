import React, { useState } from 'react';
import { ShieldCheck, Award, HeartPulse, Sparkles } from 'lucide-react';

const BRANDS = [
  { 
    name: 'Fresenius Kabi', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/1-Logo-Cliente.png',
    fallbackIcon: HeartPulse, 
    color: 'text-rose-600', 
    bg: 'bg-rose-50' 
  },
  { 
    name: 'Cargill', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/3-Logo-Cliente.png',
    fallbackIcon: Award, 
    color: 'text-emerald-600', 
    bg: 'bg-emerald-50' 
  },
  { 
    name: 'Kraft Heinz', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/4-Logo-Cliente.png',
    fallbackIcon: Sparkles, 
    color: 'text-red-600', 
    bg: 'bg-red-50' 
  },
  { 
    name: 'Minerva Foods', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/5-Logo-Cliente.png',
    fallbackIcon: ShieldCheck, 
    color: 'text-amber-600', 
    bg: 'bg-amber-50' 
  },
  { 
    name: 'JBS', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/6-Logo-Cliente.png',
    fallbackIcon: Award, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50' 
  },
  { 
    name: 'Cepera', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/7-Logo-Cliente.png',
    fallbackIcon: Sparkles, 
    color: 'text-green-600', 
    bg: 'bg-green-50' 
  },
  { 
    name: 'Grupo Cicopal', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/8-Logo-Cliente.png',
    fallbackIcon: Award, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50' 
  },
  { 
    name: 'N&L Indústria', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/9-Logo-Cliente.png',
    fallbackIcon: Sparkles, 
    color: 'text-sky-600', 
    bg: 'bg-sky-50' 
  },
  { 
    name: 'Santa Colomba', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/10-Logo-Cliente.png',
    fallbackIcon: ShieldCheck, 
    color: 'text-yellow-600', 
    bg: 'bg-yellow-50' 
  },
  { 
    name: 'Teuto', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/11-Logo-Cliente.png',
    fallbackIcon: HeartPulse, 
    color: 'text-cyan-600', 
    bg: 'bg-cyan-50' 
  },
  { 
    name: 'Dez Alimentos', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/12-Logo-Cliente.png',
    fallbackIcon: Sparkles, 
    color: 'text-orange-600', 
    bg: 'bg-orange-50' 
  },
  { 
    name: 'Denusa', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/13-Logo-Cliente.png',
    fallbackIcon: Sparkles, 
    color: 'text-green-700', 
    bg: 'bg-green-50' 
  },
  { 
    name: 'Ypê', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/14-Logo-Cliente.png',
    fallbackIcon: Sparkles, 
    color: 'text-blue-500', 
    bg: 'bg-blue-50' 
  },
  { 
    name: 'Olê Alimentos', 
    logoUrl: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/15-Logo-Cliente.png',
    fallbackIcon: Award, 
    color: 'text-red-500', 
    bg: 'bg-red-50' 
  },
];

// Duplicate list for infinite marquee scrolling effect
const MARQUEE_BRANDS = [...BRANDS, ...BRANDS, ...BRANDS];

export default function TrustLogos() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (brandName: string) => {
    setFailedImages(prev => ({ ...prev, [brandName]: true }));
  };

  return (
    <section className="bg-slate-50/50 py-16 border-t border-b border-slate-200/60 overflow-hidden" id="trust-logos-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full uppercase">
            Parceiros de Confiança
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-[#011e41] mt-3">
            Marcas que Confiam na Gente
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl mx-auto leading-relaxed">
            A Goiânia Tubos Inox orgulha-se de ser parceira homologada de grandes indústrias nacionais, garantindo qualidade extrema e conformidade técnica rígida.
          </p>
        </div>
      </div>

      {/* Infinite Carousel (Marquee) Container */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Marquee Row */}
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {MARQUEE_BRANDS.map((brand, idx) => {
            const IconComponent = brand.fallbackIcon;
            const hasFailed = failedImages[brand.name];

            return (
              <div 
                key={`${brand.name}-${idx}`}
                className="group relative bg-white border border-slate-200/80 hover:border-brand-teal/40 hover:shadow-lg rounded-2xl p-5 flex items-center justify-center transition-all duration-300 w-48 h-24 md:w-60 md:h-28 shrink-0"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Brand Logo Container */}
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  {!hasFailed ? (
                    <img 
                      src={brand.logoUrl} 
                      alt={brand.name}
                      onError={() => handleImageError(brand.name)}
                      className="max-w-full max-h-16 md:max-h-20 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <div className={`p-2 rounded-full ${brand.bg} ${brand.color}`}>
                        <IconComponent className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 font-display truncate max-w-[130px]">{brand.name}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Certificate / Quality Seal Block */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row gap-6 items-center justify-between shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-[#011e41] text-sm">Garantia de Autenticidade e Qualidade B2B</h4>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Todos os lotes de tubulações faturados vêm acompanhados de certificado de matéria-prima rastreável (MTR) e seguem rigidamente as normas ASTM, A312, A270 e ASME.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3.5 py-2 rounded-full shrink-0">
            <Award className="w-4 h-4" />
            <span>Qualidade 100% Homologada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
