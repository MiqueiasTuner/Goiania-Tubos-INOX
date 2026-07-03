import React from 'react';
import { Product } from '../types';
import { X, FileText, CheckCircle, AlertTriangle, ShieldCheck, Scale } from 'lucide-react';

interface TechnicalSpecsModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function TechnicalSpecsModal({ product, onClose }: TechnicalSpecsModalProps) {
  if (!product) return null;

  // Determine standard requirements or chemical details based on the category/name
  const getTechnicalDetails = () => {
    if (product.category === 'tubos') {
      return {
        norm: product.standard || 'ASTM A312 / A270',
        tolerances: '± 0.15% no diâmetro externo, ± 10% na espessura de parede',
        tests: 'Ensaio hidrostático ou teste eletromagnético não destrutivo (Eddy Current) realizado 100%.',
        finish: product.subcategory.includes('Sanitário') 
          ? 'Polimento mecânico interno e externo (Ra < 0.8 µm / Grana 220/320)' 
          : 'Decapado, livre de carepas de laminação (Acabamento Decapado Decapagem Ácida)',
        pressureRating: 'Variável dependendo da espessura de parede (Schedule ou Espessura Nominal).'
      };
    } else if (product.category === 'conexoes') {
      return {
        norm: product.standard || 'ANSI B16.9 / ANSI B16.5',
        tolerances: 'Conformidade dimensional estrita com as especificações ANSI e MSS-SP',
        tests: 'Testes de pressão hidrostática acoplada, inspeção visual de soldabilidade e raios X opcionais.',
        finish: 'Jateado e decapado para eliminação de tensões internas.',
        pressureRating: product.id.includes('flange') ? '150 lbs, 300 lbs ou classes sob consulta' : 'Schedule compatível com a tubulação acoplada.'
      };
    } else {
      return {
        norm: product.standard || 'ISO 9001 / NBR Conforme',
        tolerances: 'Estanqueidade total garantida classe VI conforme ANSI/FCI 70-2',
        tests: 'Inspeção de vedação pneumática e hidrostática individual de fábrica.',
        finish: 'Corpo usinado CNC de precisão com acabamento eletropolido ou jateado microesfera.',
        pressureRating: 'Até 1000 PSI WOG (água, óleo, gás) ou vedações personalizadas.'
      };
    }
  };

  const specs = getTechnicalDetails();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6" id="tech-specs-modal">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="p-6 bg-brand-blue-dark text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-teal/20 rounded-lg text-brand-teal-light">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-brand-teal-light font-bold uppercase tracking-widest font-mono">Ficha Técnica e Conformidade</span>
              <h3 className="font-display font-bold text-base leading-tight mt-0.5">{product.name}</h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Section 1: Product Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Descrição e Aplicação Recomendada</h4>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 font-medium">
              {product.description} {product.applicationNote}
            </p>
          </div>

          {/* Section 2: Rigorous Specs Grid */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Especificações Técnicas Operacionais</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-between">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Norma Regulamentadora</span>
                <span className="text-sm font-semibold text-brand-blue mt-1 font-mono">{specs.norm}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-between">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Acabamento Superficial</span>
                <span className="text-sm font-semibold text-slate-700 mt-1">{specs.finish}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-between">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Tolerâncias Dimensionais</span>
                <span className="text-xs font-semibold text-slate-700 mt-1">{specs.tolerances}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-between">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Controle de Qualidade</span>
                <span className="text-xs font-semibold text-emerald-600 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {specs.tests}
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Material Availability */}
          <div className="border-t border-slate-100 pt-5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Ligas Disponíveis para este Lote</h4>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((mat) => (
                <div 
                  key={mat}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-teal/5 border border-brand-teal/15 text-brand-teal-dark rounded-lg text-xs font-semibold"
                >
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>{mat}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              * Fornecemos Certificados de Análise Química e Ensaios Mecânicos (MTR - Material Test Report) sob requisição prévia.
            </p>
          </div>

          {/* Section 4: Operational Advice */}
          <div className="bg-amber-50 rounded-xl border border-amber-200/50 p-4 flex gap-3 items-start">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-amber-800">Diretriz de Instalação e Soldabilidade</h5>
              <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                Assegure que os eletrodos ou varetas de solda (ex: ER308L para Inox 304, ER316L para Inox 316) correspondam exatamente à liga do tubo comprado para evitar corrosão intergranular na zona afetada pelo calor (ZAC).
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-brand-blue text-white rounded-lg text-xs font-bold hover:bg-brand-blue-dark transition-colors cursor-pointer"
          >
            Fechar Ficha Técnica
          </button>
        </div>

      </div>
    </div>
  );
}
