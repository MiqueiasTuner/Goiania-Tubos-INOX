import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  Clock, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  ArrowRight, 
  Zap, 
  MapPin, 
  Layers, 
  Settings, 
  Activity, 
  Compass, 
  Sparkles,
  Package,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

interface HeroProps {
  onStartShopping: () => void;
  onViewSegments: () => void;
}

export default function Hero({ onStartShopping, onViewSegments }: HeroProps) {
  const { lang } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const SLIDES = [
    {
      badge: lang === 'pt' ? 'Mix de Produtos Homologado' : lang === 'es' ? 'Mix de Productos Homologado' : 'Approved Product Mix',
      title: lang === 'pt' ? 'O MAIOR MIX DE SOLUÇÕES EM INOX E CARBONO' : 
             lang === 'es' ? 'EL MAYOR MIX DE SOLUCIONES EN INOX Y CARBONO' : 
             'THE LARGEST RANGE OF STAINLESS & CARBON SOLUTIONS',
      subtitle: lang === 'pt' ? 'Tubos OD sanitários, conexões flangeadas, curvas de alta pressão, flanges ANSI/DIN, válvulas industriais e chapas espelhadas. Estoque local com máxima rastreabilidade para sua indústria.' :
                lang === 'es' ? 'Tubos OD sanitarios, conexiones bridadas, codos de alta presión, bridas ANSI/DIN, válvulas industriales y chapas espejadas. Stock local con máxima trazabilidad para su industria.' :
                'Sanitary OD tubes, flanged connections, high-pressure elbows, ANSI/DIN flanges, industrial valves, and mirrored sheets. Local inventory with maximum traceability for your facility.',
      buttonText: lang === 'pt' ? 'VER CATÁLOGO' : lang === 'es' ? 'VER CATÁLOGO' : 'VIEW CATALOG',
      buttonAction: onStartShopping,
      secondaryButtonText: lang === 'pt' ? 'Falar com Especialista' : lang === 'es' ? 'Hablar con Especialista' : 'Talk to a Specialist',
      secondaryButtonAction: () => window.open('https://wa.me/5562998517536', '_blank'),
      bgGradient: 'from-[#011e41] via-[#022b5c] to-slate-900',
      illustrationType: 'mix_produtos',
    },
    {
      badge: lang === 'pt' ? 'Estoque Local & Pronta Entrega' : lang === 'es' ? 'Stock Local y Entrega Inmediata' : 'Local Stock & Fast Delivery',
      title: lang === 'pt' ? 'MAIOR ESTOQUE, PRONTA ENTREGA E MAIS AGILIDADE' : 
             lang === 'es' ? 'MAYOR STOCK, ENTREGA INMEDIATA Y MÁS AGILIDAD' : 
             'LARGEST INVENTORY, IMMEDIATE DELIVERY & AGILITY',
      subtitle: lang === 'pt' ? 'Na Goiânia Tubos Inox você encontra disponibilidade imediata e rapidez para faturamento direto, garantindo que sua planta industrial continue operando sem paradas de manutenção.' :
                lang === 'es' ? 'En Goiânia Tubos Inox usted encuentra disponibilidad inmediata y rapidez para facturación directa, garantizando que su planta industrial siga operando sin paradas de mantenimiento.' :
                'At Goiânia Tubos Inox you find immediate availability and rapid direct invoicing, ensuring that your industrial plant continues operating without maintenance downtime.',
      buttonText: lang === 'pt' ? 'CARRINHO DE COTAÇÃO' : lang === 'es' ? 'CARRITO DE COTIZACIÓN' : 'QUOTE CART',
      buttonAction: () => {
        const el = document.getElementById('catalog-grid-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      secondaryButtonText: lang === 'pt' ? 'Frotas e Unidades' : lang === 'es' ? 'Flotas y Sucursales' : 'Fleets & Branches',
      secondaryButtonAction: () => {
        const el = document.getElementById('unidades-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      bgGradient: 'from-slate-950 via-[#011e41] to-slate-900',
      illustrationType: 'logistica_estoque',
    },
    {
      badge: lang === 'pt' ? 'Presença Nacional Estratégica' : lang === 'es' ? 'Presencia Nacional Estratégica' : 'Strategic National Presence',
      title: lang === 'pt' ? 'MAIS PERTO DA SUA INDÚSTRIA' : 
             lang === 'es' ? 'MÁS CERCA DE SU INDUSTRIA' : 
             'CLOSER TO YOUR INDUSTRY',
      subtitle: lang === 'pt' ? 'Conectando o Centro-Norte e N/NE do Brasil às melhores soluções em aço. Atendimento ágil, frete otimizado e faturamento express direto de Goiânia (GO) e Imperatriz (MA).' :
                lang === 'es' ? 'Conectando el Centro-Norte y N/NE de Brasil con las mejores soluciones en acero. Atención ágil, flete optimizado y facturación exprés directa de Goiânia (GO) e Imperatriz (MA).' :
                'Connecting Central-North and N/NE Brazil with the best steel solutions. Agile service, optimized shipping, and express invoicing direct from Goiânia (GO) and Imperatriz (MA).',
      buttonText: lang === 'pt' ? 'VER PRINCIPAIS SEGMENTOS' : lang === 'es' ? 'VER PRINCIPALES SEGMENTOS' : 'VIEW MAIN INDUSTRIES',
      buttonAction: onViewSegments,
      secondaryButtonText: lang === 'pt' ? 'Baixar Catálogo PDF' : lang === 'es' ? 'Descargar Catálogo PDF' : 'Download Catalog PDF',
      secondaryButtonAction: () => {
        const el = document.getElementById('download-catalog-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      bgGradient: 'from-[#011e41] via-[#003d35] to-[#011e41]',
      illustrationType: 'presenca_nacional',
    }
  ];

  // Auto rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [SLIDES.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="relative overflow-hidden text-white" id="hero-slider-section">
      
      {/* Active Slide Wrapper */}
      <div className="relative min-h-[520px] md:min-h-[600px] flex items-center transition-all duration-700 ease-in-out">
        
        {/* Background Gradients & Patterns */}
        <div className={`absolute inset-0 bg-gradient-to-br ${SLIDES[activeSlide].bgGradient} transition-colors duration-700`}></div>
        
        {/* Blueprint Grid Overlay (styled exactly like official engineering plans) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#00a2a6 1.2px, transparent 1.2px), linear-gradient(to right, #00a2a615 1px, transparent 1px), linear-gradient(to bottom, #00a2a615 1px, transparent 1px)',
          backgroundSize: '28px 28px, 56px 56px, 56px 56px'
        }}></div>

        {/* Outer Slide Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6 animate-fade-in">
              
              {/* Title with space-grotesk styling */}
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] text-white">
                {SLIDES[activeSlide].title}
              </h1>

              {/* Subtitle description */}
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
                {SLIDES[activeSlide].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <button 
                  onClick={SLIDES[activeSlide].buttonAction}
                  className="px-8 py-4 bg-brand-teal hover:bg-brand-teal-dark text-slate-950 font-black rounded-lg text-xs tracking-wider uppercase shadow-xl shadow-brand-teal/20 transition-all active:scale-98 text-center cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{SLIDES[activeSlide].buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={SLIDES[activeSlide].secondaryButtonAction}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg text-xs tracking-wider uppercase transition-all active:scale-98 text-center cursor-pointer"
                >
                  {SLIDES[activeSlide].secondaryButtonText}
                </button>
              </div>

              {/* Quick Trust Attributes bar matching GTI pillars */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" />
                  <span className="text-xs font-bold text-slate-300">
                    {lang === 'pt' ? '100% Rastreável' : lang === 'es' ? '100% Trazable' : '100% Traceable'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" />
                  <span className="text-xs font-bold text-slate-300">
                    {lang === 'pt' ? 'Certificados MTR' : lang === 'es' ? 'Certificados MTR' : 'MTR Certificates'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" />
                  <span className="text-xs font-bold text-slate-300">
                    {lang === 'pt' ? 'Ligas AISI 304/316' : lang === 'es' ? 'Aleaciones AISI 304/316' : 'AISI 304/316 Alloys'}
                  </span>
                </div>
              </div>

            </div>

            {/* Right Visual Column (High-quality real marketing images in structured luxury containers) */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
              
              {/* SLIDE 0 VISUAL: MIX DE PRODUTOS BOARD (With requested Inox Tubos image) */}
              {SLIDES[activeSlide].illustrationType === 'mix_produtos' && (
                <div className="relative bg-slate-950 border-2 border-slate-800 p-2.5 rounded-3xl w-full max-w-[430px] shadow-2xl overflow-hidden group transition-all duration-300 hover:border-brand-teal/50">
                  {/* Subtle top decoration */}
                  <div className="absolute inset-0 bg-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  
                  <img 
                    src="https://blog.mecsteel.com.br/wp-content/uploads/2023/02/4-coisas-que-voce-precisa-saber-sobre-tubos-de-inox.jpeg" 
                    alt="Mix de Produtos Inox" 
                    className="w-full h-[360px] md:h-[380px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant bottom caption bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800/80 px-4 py-3 rounded-xl flex items-center justify-between shadow-xl backdrop-blur-xs">
                    <div>
                      <span className="text-[10px] text-brand-teal font-extrabold uppercase tracking-wider block">Goiânia Tubos Inox</span>
                      <span className="text-xs font-bold text-slate-200 block">
                        {lang === 'pt' ? 'Alta Qualidade em Aço Inox' : lang === 'es' ? 'Alta Calidad en Acero Inoxidable' : 'Premium Stainless Steel'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {lang === 'pt' ? 'Mix de Produtos' : lang === 'es' ? 'Mix de Productos' : 'Product Mix'}
                    </span>
                  </div>
                </div>
              )}

              {/* SLIDE 1 VISUAL: DISPONIBILIDADE E LOGÍSTICA BOARD (With requested Capa Blog Outubro image) */}
              {SLIDES[activeSlide].illustrationType === 'logistica_estoque' && (
                <div className="relative bg-slate-950 border-2 border-slate-800 p-2.5 rounded-3xl w-full max-w-[430px] shadow-2xl overflow-hidden group transition-all duration-300 hover:border-brand-teal/50">
                  {/* Subtle decorative glow behind */}
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  
                  <img 
                    src="https://goianiatubos.com.br/wp-content/uploads/2025/10/Capa-Blog-Outubro-1.png" 
                    alt="Logística Integrada e Maior Estoque" 
                    className="w-full h-[360px] md:h-[380px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant bottom caption bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800/80 px-4 py-3 rounded-xl flex items-center justify-between shadow-xl backdrop-blur-xs">
                    <div>
                      <span className="text-[10px] text-brand-teal font-extrabold uppercase tracking-wider block">
                        {lang === 'pt' ? 'Logística Integrada' : lang === 'es' ? 'Logística Integrada' : 'Integrated Logistics'}
                      </span>
                      <span className="text-xs font-bold text-slate-200 block">
                        {lang === 'pt' ? 'Pronta Entrega & Mais Agilidade' : lang === 'es' ? 'Stock Inmediato y Agilidad' : 'Fast Shipping & Ready Stock'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {lang === 'pt' ? 'Maior Estoque' : lang === 'es' ? 'Mayor Stock' : 'Largest Inventory'}
                    </span>
                  </div>
                </div>
              )}

              {/* SLIDE 2 VISUAL: MAIS PERTO DA SUA INDÚSTRIA (With requested Capa Blog Junho image) */}
              {SLIDES[activeSlide].illustrationType === 'presenca_nacional' && (
                <div className="relative bg-slate-950 border-2 border-slate-800 p-2.5 rounded-3xl w-full max-w-[430px] shadow-2xl overflow-hidden group transition-all duration-300 hover:border-brand-teal/50">
                  {/* Subtle decorative glow behind */}
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  
                  <img 
                    src="https://goianiatubos.com.br/wp-content/uploads/2025/06/Capa-Blog-Junho.jpg" 
                    alt="Presença Nacional e Expansão Regional" 
                    className="w-full h-[360px] md:h-[380px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant bottom caption bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800/80 px-4 py-3 rounded-xl flex items-center justify-between shadow-xl backdrop-blur-xs">
                    <div>
                      <span className="text-[10px] text-brand-teal font-extrabold uppercase tracking-wider block">
                        {lang === 'pt' ? 'Expansão Regional' : lang === 'es' ? 'Expansión Regional' : 'Regional Expansion'}
                      </span>
                      <span className="text-xs font-bold text-slate-200 block">
                        {lang === 'pt' ? 'Mais Perto de Sua Indústria' : lang === 'es' ? 'Más Cerca de su Industria' : 'Closer to Your Plant'}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {lang === 'pt' ? 'Cobertura Nacional' : lang === 'es' ? 'Cobertura Nacional' : 'National Coverage'}
                    </span>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Carousel Control Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-slate-950/40 hover:bg-slate-950/80 border border-white/10 hover:border-white/20 rounded-full flex items-center justify-center text-white transition-all cursor-pointer active:scale-90"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-slate-950/40 hover:bg-slate-950/80 border border-white/10 hover:border-white/20 rounded-full flex items-center justify-center text-white transition-all cursor-pointer active:scale-90"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                activeSlide === idx 
                  ? 'bg-brand-teal w-8' 
                  : 'bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
