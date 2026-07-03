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

interface HeroProps {
  onStartShopping: () => void;
  onViewSegments: () => void;
}

export default function Hero({ onStartShopping, onViewSegments }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const SLIDES = [
    {
      badge: 'Mix de Produtos Homologado',
      title: 'O MAIOR MIX DE SOLUÇÕES EM INOX E CARBONO',
      subtitle: 'Tubos OD sanitários, conexões flangeadas, curvas de alta pressão, flanges ANSI/DIN, válvulas industriais e chapas espelhadas. Estoque local com máxima rastreabilidade para sua indústria.',
      buttonText: 'VER CATÁLOGO',
      buttonAction: onStartShopping,
      secondaryButtonText: 'Falar com Especialista',
      secondaryButtonAction: () => window.open('https://wa.me/5562998517536', '_blank'),
      bgGradient: 'from-[#011e41] via-[#022b5c] to-slate-900',
      illustrationType: 'mix_produtos',
    },
    {
      badge: 'Estoque Local & Pronta Entrega',
      title: 'MAIOR ESTOQUE, PRONTA ENTREGA E MAIS AGILIDADE',
      subtitle: 'Na Goiânia Tubos Inox você encontra disponibilidade imediata e rapidez para faturamento direto, garantindo que sua planta industrial continue operando sem paradas de manutenção.',
      buttonText: 'CARRINHO DE COTAÇÃO',
      buttonAction: () => {
        const el = document.getElementById('catalog-grid-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      secondaryButtonText: 'Frotas e Unidades',
      secondaryButtonAction: () => {
        const el = document.getElementById('unidades-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      bgGradient: 'from-slate-950 via-[#011e41] to-slate-900',
      illustrationType: 'logistica_estoque',
    },
    {
      badge: 'Presença Nacional Estratégica',
      title: 'MAIS PERTO DA SUA INDÚSTRIA',
      subtitle: 'Conectando o Centro-Norte e N/NE do Brasil às melhores soluções em aço. Atendimento ágil, frete otimizado e faturamento express direto de Goiânia (GO) e Imperatriz (MA).',
      buttonText: 'VER PRINCIPAIS SEGMENTOS',
      buttonAction: onViewSegments,
      secondaryButtonText: 'Baixar Catálogo PDF',
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
              
              {/* Badge/Tag with real colors */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-teal/20 border border-brand-teal/40 rounded-full text-brand-teal-light text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 fill-brand-teal text-brand-teal animate-pulse" />
                <span>{SLIDES[activeSlide].badge}</span>
              </div>

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
                  <span className="text-xs font-bold text-slate-300">100% Rastreável</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" />
                  <span className="text-xs font-bold text-slate-300">Certificados MTR</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal" />
                  <span className="text-xs font-bold text-slate-300">Ligas AISI 304/316</span>
                </div>
              </div>

            </div>

            {/* Right Visual Column (High-fidelity CSS marketing posters from screenshots) */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
              
              {/* SLIDE 0 VISUAL: MIX DE PRODUTOS BOARD (Inspired by image 3) */}
              {SLIDES[activeSlide].illustrationType === 'mix_produtos' && (
                <div className="relative bg-slate-950 border-2 border-slate-800 p-6 rounded-3xl w-full max-w-[430px] shadow-2xl flex flex-col justify-between overflow-hidden">
                  {/* Subtle top decoration */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-brand-teal/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  {/* Poster Header */}
                  <div className="text-center pb-4 border-b border-slate-800/80">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-mono">Goiânia Tubos Inox</div>
                    <h2 className="text-2xl font-black tracking-tighter text-white mt-1">MIX DE PRODUTOS</h2>
                    <div className="inline-block mt-1.5 px-3 py-1 bg-[#c59c27] text-slate-950 font-black text-[10px] uppercase rounded-full tracking-widest">
                      PRODUTOS INOX
                    </div>
                  </div>

                  {/* 2x3 Grid of Products from GTI poster */}
                  <div className="grid grid-cols-2 gap-3.5 my-5">
                    <div className="bg-slate-900/80 border border-slate-800 hover:border-brand-teal/40 p-2.5 rounded-xl flex items-center gap-2 transition-all">
                      <span className="text-[#c59c27] font-bold text-xs">▶</span>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-medium leading-tight">CHAPA INOX</p>
                        <p className="text-xs font-bold text-slate-200">ESPELHADA</p>
                      </div>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 hover:border-brand-teal/40 p-2.5 rounded-xl flex items-center gap-2 transition-all">
                      <span className="text-[#c59c27] font-bold text-xs">▶</span>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-medium leading-tight">CURVA INOX</p>
                        <p className="text-xs font-bold text-slate-200">SANÍTARIA OD</p>
                      </div>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 hover:border-brand-teal/40 p-2.5 rounded-xl flex items-center gap-2 transition-all">
                      <span className="text-[#c59c27] font-bold text-xs">▶</span>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-medium leading-tight">LUVA ROSCA</p>
                        <p className="text-xs font-bold text-slate-200">DE AÇO INOX</p>
                      </div>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 hover:border-brand-teal/40 p-2.5 rounded-xl flex items-center gap-2 transition-all">
                      <span className="text-[#c59c27] font-bold text-xs">▶</span>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-medium leading-tight">FLANGE INOX</p>
                        <p className="text-xs font-bold text-slate-200">PADRÃO ANSI</p>
                      </div>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 hover:border-brand-teal/40 p-2.5 rounded-xl flex items-center gap-2 transition-all">
                      <span className="text-[#c59c27] font-bold text-xs">▶</span>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-medium leading-tight">LIGA MACIÇA</p>
                        <p className="text-xs font-bold text-slate-200">BARRA REDONDA</p>
                      </div>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 hover:border-brand-teal/40 p-2.5 rounded-xl flex items-center gap-2 transition-all">
                      <span className="text-[#c59c27] font-bold text-xs">▶</span>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-medium leading-tight">CONDUTO FLUIDO</p>
                        <p className="text-xs font-bold text-slate-200">TUBO OD INOX</p>
                      </div>
                    </div>
                  </div>

                  {/* Poster Footer website rounded track */}
                  <div className="bg-slate-900/80 border border-slate-800/80 rounded-xl py-2 px-4 flex items-center justify-between">
                    <span className="text-[9px] text-brand-teal font-extrabold font-mono tracking-wider">PRODUTOS PRONTA ENTREGA</span>
                    <span className="text-[10px] font-bold text-slate-300">goianiatubos.com.br</span>
                  </div>
                </div>
              )}

              {/* SLIDE 1 VISUAL: DISPONIBILIDADE E LOGÍSTICA BOARD (Inspired by image 2) */}
              {SLIDES[activeSlide].illustrationType === 'logistica_estoque' && (
                <div className="relative bg-slate-950 border-2 border-slate-800 p-6 rounded-3xl w-full max-w-[430px] shadow-2xl flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  {/* Poster Slogan Banner */}
                  <div className="text-left space-y-1.5 pb-4 border-b border-slate-800/80">
                    <span className="text-[9px] font-bold text-brand-teal tracking-widest uppercase font-mono block">Logística Integrada</span>
                    <h2 className="text-lg font-black tracking-tight text-white uppercase leading-tight">
                      MAIOR ESTOQUE, PRONTA ENTREGA E MAIS AGILIDADE
                    </h2>
                  </div>

                  {/* Logistics Graphic Board */}
                  <div className="my-5 bg-slate-900/50 rounded-2xl border border-slate-800 p-4 space-y-4">
                    
                    {/* Warehouse Status Block */}
                    <div className="flex items-center justify-between bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
                      <div className="flex items-center gap-2.5">
                        <Package className="w-5 h-5 text-brand-teal" />
                        <div className="text-left">
                          <p className="text-[9px] text-slate-500 font-medium">DISPONIBILIDADE</p>
                          <p className="text-xs font-bold text-slate-200">Estoque Integrado Local</p>
                        </div>
                      </div>
                      <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                        100% Ativo
                      </span>
                    </div>

                    {/* Fleet Route Status Block */}
                    <div className="flex items-center justify-between bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
                      <div className="flex items-center gap-2.5">
                        <Truck className="w-5 h-5 text-brand-teal" />
                        <div className="text-left">
                          <p className="text-[9px] text-slate-500 font-medium">TRANSPORTE EXPRESS</p>
                          <p className="text-xs font-bold text-slate-200">Frota Própria e Homologados</p>
                        </div>
                      </div>
                      <span className="bg-brand-teal/15 border border-brand-teal/30 text-brand-teal text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Despacho Imediato
                      </span>
                    </div>

                    {/* Operational Slogan from Poster */}
                    <p className="text-[11px] text-slate-300 italic text-center px-2 leading-relaxed">
                      "Na Goiânia Tubos Inox você encontra a segurança de um estoque para manter sua demanda em movimento."
                    </p>
                  </div>

                  {/* Poster Bottom Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-center">
                      <span className="text-xs text-slate-400 block font-medium">Faturamento</span>
                      <span className="text-sm font-black text-brand-teal">DIRETO DA USINA</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-center">
                      <span className="text-xs text-slate-400 block font-medium">Atendimento</span>
                      <span className="text-sm font-black text-brand-teal">CENTRO-NORTE</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2 VISUAL: MAIS PERTO DA SUA INDÚSTRIA (Inspired by image 4) */}
              {SLIDES[activeSlide].illustrationType === 'presenca_nacional' && (
                <div className="relative bg-slate-950 border-2 border-slate-800 p-6 rounded-3xl w-full max-w-[430px] shadow-2xl flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  
                  {/* Poster Header */}
                  <div className="text-left space-y-1 pb-4 border-b border-slate-800/80">
                    <span className="text-[9px] font-bold text-[#c59c27] tracking-widest uppercase font-mono block">Expansão Regional</span>
                    <h2 className="text-lg font-black tracking-tight text-white uppercase leading-tight">
                      MAIS PERTO DA SUA INDÚSTRIA
                    </h2>
                    <p className="text-[10px] text-slate-400 font-medium">Mais agilidade para o seu negócio.</p>
                  </div>

                  {/* Connected Map SVG Graphics Board */}
                  <div className="my-5 bg-slate-900/40 border border-slate-800 rounded-2xl p-4 relative h-48 flex items-center justify-center overflow-hidden">
                    
                    {/* Glowing Grid Background */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    
                    {/* SVG Map Lines & Connections */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                      {/* Connection track lines */}
                      <path 
                        d="M 120,130 Q 180,70 280,60" 
                        fill="none" 
                        stroke="#00a2a6" 
                        strokeWidth="2" 
                        strokeDasharray="6,4"
                        className="animate-[dash_12s_linear_infinite]"
                      />
                      <path 
                        d="M 120,130 Q 140,110 160,150" 
                        fill="none" 
                        stroke="#00a2a6" 
                        strokeWidth="1.5" 
                      />
                      <path 
                        d="M 280,60 Q 300,90 320,120" 
                        fill="none" 
                        stroke="#00a2a6" 
                        strokeWidth="1.5" 
                      />
                    </svg>

                    {/* GOIÂNIA (GO) NODE */}
                    <div className="absolute left-[105px] bottom-[40px] z-10 flex flex-col items-center">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-teal"></span>
                      </span>
                      <div className="mt-1 bg-slate-950/90 border border-brand-teal/40 px-2 py-0.5 rounded text-[9px] font-black tracking-wide text-white">
                        GOIÂNIA (GO)
                      </div>
                    </div>

                    {/* IMPERATRIZ (MA) NODE */}
                    <div className="absolute right-[100px] top-[35px] z-10 flex flex-col items-center">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c59c27] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c59c27]"></span>
                      </span>
                      <div className="mt-1 bg-slate-950/90 border border-[#c59c27]/40 px-2 py-0.5 rounded text-[9px] font-black tracking-wide text-white">
                        IMPERATRIZ (MA)
                      </div>
                    </div>

                    {/* Connecting text card */}
                    <div className="absolute bottom-3 right-3 bg-slate-950/90 border border-slate-800 p-2 rounded-lg text-right max-w-[170px]">
                      <span className="text-[8px] text-slate-500 font-bold uppercase block leading-none">Cobertura Express</span>
                      <span className="text-[10px] font-extrabold text-brand-teal leading-tight block mt-0.5">Centro-Norte e N/NE</span>
                    </div>
                  </div>

                  {/* Operational slogan */}
                  <div className="text-center bg-slate-900/80 border border-slate-800/80 rounded-xl py-2 px-3 text-[10px] text-slate-300 leading-relaxed font-medium">
                    Conectando as indústrias brasileiras com soluções de pronta entrega.
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
