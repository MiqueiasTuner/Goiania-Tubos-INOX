import React from 'react';
import { Phone, Mail, MapPin, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';

export default function Unidades() {
  const handleOpenWhatsApp = (phone: string, unit: string) => {
    const formattedPhone = phone.replace(/\D/g, '');
    const message = encodeURIComponent(`Olá! Gostaria de falar com o setor comercial da Unidade ${unit} da Goiânia Tubos Inox.`);
    window.open(`https://wa.me/55${formattedPhone}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-[#011e41] to-[#072661] text-white py-16" id="unidades-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/20 px-3 py-1 rounded-full border border-brand-teal/30">
            Logística Integrada & Presença Estratégica
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mt-3">
            Duas Unidades para Estar Mais Próximo de Você!
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Com filiais em pontos estratégicos do Brasil, otimizamos o frete CIF e o tempo de trânsito para a sua obra ou parada de manutenção industrial.
          </p>
        </div>

        {/* Outer Flex/Grid - Cards and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Map Hub illustration */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-700/50 p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            {/* Visual background map connection line animations */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(#00a2a6 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}></div>
            
            <div className="relative">
              <span className="text-[10px] font-bold text-brand-teal tracking-wider uppercase block mb-1">
                Mapa de Distribuição
              </span>
              <h3 className="font-display font-bold text-lg text-slate-100">
                Entrega para Todo o Brasil
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Nossas bases conectam você às melhores rotas rodoviárias do Centro-Oeste, Norte e Nordeste.
              </p>
            </div>

            {/* Custom stylized map illustration */}
            <div className="relative my-6 h-40 flex items-center justify-center">
              {/* Brazil outline mockup using SVG */}
              <svg className="w-full h-full max-w-[280px] text-slate-700 opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <path d="M40 20 C25 25, 20 40, 20 50 C20 65, 30 80, 50 90 C65 85, 80 75, 85 60 C90 40, 75 25, 60 20 Z" strokeWidth="1" strokeDasharray="2 2" />
                {/* Goiânia Node */}
                <circle cx="45" cy="62" r="4" fill="#00a2a6" className="animate-ping" />
                <circle cx="45" cy="62" r="3" fill="#00a2a6" />
                {/* Imperatriz Node */}
                <circle cx="58" cy="40" r="4" fill="#00a2a6" className="animate-ping" />
                <circle cx="58" cy="40" r="3" fill="#00a2a6" />
                {/* Connection Line */}
                <path d="M45 62 Q50 51, 58 40" stroke="#00a2a6" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Float Labels */}
              <div className="absolute top-[32%] left-[62%] bg-slate-950/80 border border-brand-teal/40 px-2 py-0.5 rounded text-[9px] font-bold text-brand-teal-light flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-brand-teal"></span>
                Imperatriz - MA
              </div>
              <div className="absolute bottom-[28%] left-[22%] bg-slate-950/80 border border-brand-teal/40 px-2 py-0.5 rounded text-[9px] font-bold text-brand-teal-light flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-brand-teal"></span>
                Goiânia - GO (Matriz)
              </div>
            </div>

            <div className="bg-[#011e41]/60 p-3 rounded-lg border border-slate-700/40 text-[11px] text-slate-300 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Frete CIF Norte, Nordeste e Centro-Oeste sob condições de faturamento mínimo.</span>
            </div>
          </div>

          {/* Right Column: The Two Location Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* UNIT 1: GOIÂNIA */}
            <div className="bg-slate-900/30 border border-slate-700/40 hover:border-brand-teal/40 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl relative flex flex-col justify-between">
              <div>
                {/* Header tag */}
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 bg-brand-teal/10 border border-brand-teal/30 text-brand-teal-light text-[10px] font-bold rounded-md uppercase">
                    Matriz Comercial
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Unidade Goiânia
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed mb-6 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Rua Yanomamis, Qd 01, Lt 11 - Setor Residencial Jardim Petrópolis, Goiânia - GO, 74460-721</span>
                </p>

                <div className="space-y-3.5 mb-8 text-xs text-slate-300 border-t border-slate-800 pt-4">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Fixo: (62) 3092-2724</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>vendas@goianiatubos.com.br</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleOpenWhatsApp('62998517536', 'Goiânia')}
                  className="w-full py-2.5 bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-brand-teal stroke-[1.5]" />
                  WhatsApp Goiânia
                </button>
                <a 
                  href="https://maps.google.com/?q=Rua+Yanomamis+Qd+01+Lt+11+Setor+Residencial+Jardim+Petropolis+Goiania"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Ver no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* UNIT 2: IMPERATRIZ */}
            <div className="bg-slate-900/30 border border-slate-700/40 hover:border-brand-teal/40 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl relative flex flex-col justify-between">
              <div>
                {/* Header tag */}
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 bg-brand-teal/10 border border-brand-teal/30 text-brand-teal-light text-[10px] font-bold rounded-md uppercase">
                    Filial de Distribuição
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Unidade Imperatriz
                </h3>
                
                <p className="text-xs text-slate-300 leading-relaxed mb-6 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>Rodovia BR 010, Km 1345 - Coco Grande, Imperatriz - MA, 65909-170</span>
                </p>

                <div className="space-y-3.5 mb-8 text-xs text-slate-300 border-t border-slate-800 pt-4">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>Fixo: (99) 4102-3415</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>vendas.imp@goianiatubos.com.br</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleOpenWhatsApp('9941023415', 'Imperatriz')}
                  className="w-full py-2.5 bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-brand-teal stroke-[1.5]" />
                  WhatsApp Imperatriz
                </button>
                <a 
                  href="https://maps.google.com/?q=Rodovia+BR+010+Coco+Grande+Imperatriz+MA"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Ver no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
