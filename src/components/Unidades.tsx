import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';

export default function Unidades() {
  const [videoKey, setVideoKey] = useState(0);

  // Automatically restart/reload the video every 26 seconds to mimic an infinite loop/GIF
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoKey(prev => prev + 1);
    }, 26000); // 26 seconds presentation video duration
    return () => clearInterval(interval);
  }, []);

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
          
          {/* Left Column: Interactive Video Hub */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-700/50 p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
            {/* Visual background connection line animations */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(#00a2a6 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}></div>
            
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-brand-teal tracking-wider uppercase block mb-1">
                Vídeo de Apresentação
              </span>
              <h3 className="font-display font-bold text-lg text-slate-100">
                GTI em Foco
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Conheça nossa estrutura industrial, estoque de tubos de aço inox e nossa logística de entrega.
              </p>
            </div>

            {/* Video Preview Container */}
            <div className="relative my-6 aspect-video bg-black rounded-xl overflow-hidden border border-slate-800 shadow-2xl group">
              <iframe 
                key={videoKey}
                src="https://drive.google.com/file/d/1-iVaesgKo2T0coMFGv3iC9VQj92YGdNE/preview?autoplay=1&mute=1"
                className="w-full h-full border-0 absolute inset-0 pointer-events-auto"
                allow="autoplay; encrypted-media; picture-in-picture"
                title="GTI Presentation"
              />
            </div>

            <div className="bg-[#011e41]/60 p-3 rounded-lg border border-slate-700/40 text-[11px] text-slate-300 flex items-center gap-2 z-10">
              <CheckCircle className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Assista ao vídeo para ver de perto nosso compromisso com a excelência técnica.</span>
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
