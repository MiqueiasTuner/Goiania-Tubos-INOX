import React, { useState } from 'react';
import { MATERIALS_SPECS } from '../data/industrialData';
import { ShieldCheck, Flame, Cpu, Settings, AlertCircle, FileSpreadsheet } from 'lucide-react';

export default function MaterialSpecsTab() {
  const [activeSpecId, setActiveSpecId] = useState<string>(MATERIALS_SPECS[0].id);

  const selectedSpec = MATERIALS_SPECS.find(m => m.id === activeSpecId) || MATERIALS_SPECS[0];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8" id="materials-spec-tab">
      
      {/* Tab Header */}
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          Guia de Especificações de Ligas Metálicas
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
          Consulte as composições de fabricação, as vantagens estruturais de cada metal e decida a liga correta para sua tubulação industrial.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Alloy Menu List */}
        <div className="lg:col-span-4 space-y-2">
          {MATERIALS_SPECS.map((m) => {
            const isActive = m.id === activeSpecId;
            return (
              <button
                key={m.id}
                onClick={() => setActiveSpecId(m.id)}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  isActive 
                    ? 'bg-brand-blue text-white border-transparent shadow-md' 
                    : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
                id={`material-btn-${m.id}`}
              >
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base leading-tight">
                    {m.name}
                  </h3>
                  <span className={`text-[10px] uppercase font-mono tracking-wider font-semibold mt-1 block ${
                    isActive ? 'text-brand-teal-light' : 'text-slate-400'
                  }`}>
                    {m.type}
                  </span>
                </div>
                
                <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  m.corrosionResistance === 'Excelente' 
                    ? 'bg-emerald-500/10 text-emerald-600' 
                    : m.corrosionResistance === 'Alta'
                    ? 'bg-teal-500/10 text-teal-600'
                    : 'bg-amber-500/10 text-amber-600'
                }`}>
                  {m.corrosionResistance}
                </div>
              </button>
            );
          })}

          <div className="p-4 bg-slate-900 text-slate-300 rounded-xl border border-slate-800 text-left mt-6">
            <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-1.5 font-display">
              <FileSpreadsheet className="w-4 h-4 text-brand-teal" />
              <span>Laudos & Rastreabilidade</span>
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Oferecemos documentação com número de corrida do forno, garantindo o controle dimensional e composição química rigorosa de cada lote fornecido.
            </p>
          </div>
        </div>

        {/* Right Side: Alloy Detail View */}
        <div className="lg:col-span-8 bg-white border border-slate-200/95 rounded-2xl p-6 sm:p-8 text-left shadow-xs">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold font-mono text-brand-teal bg-brand-teal/5 border border-brand-teal/25 px-2.5 py-1 rounded">
                AISI / ASTM / NBR Normativo
              </span>
              <h3 className="font-display font-black text-2xl text-slate-900 tracking-tight mt-3">
                {selectedSpec.name}
              </h3>
              <p className="text-xs text-slate-500 font-mono font-medium mt-1 uppercase tracking-wider">
                Família: {selectedSpec.type}
              </p>
            </div>
            
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-center sm:text-right">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Resistência à Oxidação</span>
              <span className="text-sm font-black text-brand-blue font-mono uppercase mt-0.5 block">{selectedSpec.corrosionResistance}</span>
            </div>
          </div>

          {/* chemical composition list */}
          <div className="py-6 border-b border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-brand-teal" />
              <span>Composição Química / Metalúrgica</span>
            </h4>
            <div className="bg-slate-900 text-slate-200 p-3.5 rounded-lg font-mono text-xs sm:text-sm tracking-wider">
              {selectedSpec.composition}
            </div>
          </div>

          {/* Two Columns: Advantages & Industrial Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
            
            {/* Advantages */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>Principais Vantagens</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedSpec.advantages.map((adv, idx) => (
                  <li key={idx} className="flex gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                    <span className="text-brand-teal font-black text-xs shrink-0 mt-0.5">•</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Applications */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Settings className="w-4 h-4 text-brand-teal" />
                <span>Aplicações na Planta</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedSpec.applications.map((app, idx) => (
                  <li key={idx} className="flex gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                    <span className="text-brand-teal font-black text-xs shrink-0 mt-0.5">•</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Note */}
          <div className="bg-amber-50 rounded-xl border border-amber-200/40 p-4 flex gap-3 text-amber-800 text-xs leading-relaxed mt-4">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
            <span>
              <strong>Dica de Manutenção:</strong> Evite o contato direto do aço inoxidável com ferramentas de ferro comum (como escovas de aço carbono) para prevenir a contaminação por ferro livre, o que causará oxidação superficial indesejada por ferrugem galvânica. Use sempre ferramentas exclusivas de aço inoxidável.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
