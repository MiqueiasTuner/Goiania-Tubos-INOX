import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShowcaseItem {
  name: string;
  filterValue: string; // The category name to filter by
  image: string;
}

interface ShowcaseTab {
  id: string;
  name: string;
  promoTitle: string;
  promoImage: string;
  items: ShowcaseItem[];
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'tubos',
    name: 'Tubos',
    promoTitle: 'Tubulações de Alta Performance',
    promoImage: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg',
    items: [
      {
        name: 'Tubos Inox 304',
        filterValue: 'Tubos Inox304',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-RETANGULAR-INOX.png'
      },
      {
        name: 'Tubos Inox 316',
        filterValue: 'Tubos Inox316',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg'
      },
      {
        name: 'Tubos Aço Carbono',
        filterValue: 'Tubos Aço Carbono',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg'
      },
      {
        name: 'Tubos Galvanizados',
        filterValue: 'Tubos Galvanizados',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg'
      },
      {
        name: 'Tubo OD Sanitário',
        filterValue: 'Conexões Od',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-RETANGULAR-INOX.png'
      },
      {
        name: 'Tubo Schedule A312',
        filterValue: 'Conexões Schedule',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg'
      }
    ]
  },
  {
    id: 'conexoes',
    name: 'Conexões',
    promoTitle: 'Conexões & Flanges Industriais',
    promoImage: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/FLANGE-ACO-CARBONO.jpg',
    items: [
      {
        name: 'Conexões Rosca Inox',
        filterValue: 'Conexoes Rosca Inox304',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/COTOVELO-45-ALTA-PRESSAO.jpg'
      },
      {
        name: 'Conexões Schedule',
        filterValue: 'Conexões Schedule',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/COTOVELO-45-ALTA-PRESSAO.jpg'
      },
      {
        name: 'Conexões OD Inox',
        filterValue: 'Conexoes Od Inox304',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-PI-PE.png'
      },
      {
        name: 'Conexões Rosca BSP',
        filterValue: 'Conexões Rosca',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/COTOVELO-45-ALTA-PRESSAO.jpg'
      },
      {
        name: 'Conexões Galvanizadas',
        filterValue: 'Conexões Galvanizadas',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/COTOVELO-45-ALTA-PRESSAO.jpg'
      },
      {
        name: 'Flanges de Aço',
        filterValue: 'Conexões Aço Carbono',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/FLANGE-ACO-CARBONO.jpg'
      }
    ]
  },
  {
    id: 'valvulas',
    name: 'Válvulas',
    promoTitle: 'Controle de Fluxo e Bloqueio',
    promoImage: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-MANUAL-REVESTIDA-PTFE.png',
    items: [
      {
        name: 'Válvula Esfera',
        filterValue: 'Esfera',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-MANUAL-REVESTIDA-PTFE.png'
      },
      {
        name: 'Válvula Borboleta',
        filterValue: 'Borboleta',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-MANUAL-REVESTIDA-PTFE.png'
      },
      {
        name: 'Válvula Retenção',
        filterValue: 'Retenção',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-EXPANSAO-AMONIA.jpg'
      },
      {
        name: 'Válvula Solenoide',
        filterValue: 'Solenoide',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SOLENOIDE-VAPOR.png'
      },
      {
        name: 'Válvula Globo',
        filterValue: 'Globo',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-EXPANSAO-AMONIA.jpg'
      },
      {
        name: 'Válvula Gaveta',
        filterValue: 'Gaveta',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-EXPANSAO-AMONIA.jpg'
      }
    ]
  },
  {
    id: 'chapas',
    name: 'Chapas & Perfis',
    promoTitle: 'Siderurgia e Estruturas Metálicas',
    promoImage: 'https://goianiatubos.com.br/wp-content/uploads/2024/02/chapa-de-inox-em-joinville.webp',
    items: [
      {
        name: 'Chapas Inox 304',
        filterValue: 'Chapas Inox304',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2024/02/chapa-de-inox-em-joinville.webp'
      },
      {
        name: 'Chapas Inox 316',
        filterValue: 'Chapas Inox316',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2024/02/chapa-de-inox-em-joinville.webp'
      },
      {
        name: 'Chapas Aço Carbono',
        filterValue: 'Chapas Aço Carbono',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2024/02/chapa-de-inox-em-joinville.webp'
      },
      {
        name: 'Chapa Piso / Xadrez',
        filterValue: 'Chapas',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/CHAPA-PISO-XADREZ.jpg'
      },
      {
        name: 'Perfis Inox 304',
        filterValue: 'Perfis Inox304',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-RETANGULAR-INOX.png'
      },
      {
        name: 'Perfis Inox 316',
        filterValue: 'Perfis Inox316',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-RETANGULAR-INOX.png'
      }
    ]
  },
  {
    id: 'incendio',
    name: 'Combate a Incêndio',
    promoTitle: 'Prevenção e Segurança Certificada',
    promoImage: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/CAIXA-INCENDIO-SOBREPOR.png',
    items: [
      {
        name: 'Combate a Incêndio',
        filterValue: 'Combate a Incêndio',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/CAIXA-INCENDIO-SOBREPOR.png'
      },
      {
        name: 'Sistemas de Incêndio',
        filterValue: 'Sistema de Incêndio',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/CAIXA-INCENDIO-SOBREPOR.png'
      },
      {
        name: 'Mangueiras Certificadas',
        filterValue: 'Combate a Incêndio',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/CAIXA-INCENDIO-SOBREPOR.png'
      },
      {
        name: 'Conexões Galvanizadas',
        filterValue: 'Conexões Galvanizadas',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/COTOVELO-45-ALTA-PRESSAO.jpg'
      },
      {
        name: 'Tubos Galvanizados',
        filterValue: 'Tubos Galvanizados',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg'
      },
      {
        name: 'Válvula Globo Angular',
        filterValue: 'Combate a Incêndio',
        image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-EXPANSAO-AMONIA.jpg'
      }
    ]
  }
];

interface ProductShowcaseProps {
  onSelectCategory: (categoryName: string) => void;
}

export default function ProductShowcase({ onSelectCategory }: ProductShowcaseProps) {
  const [activeTabId, setActiveTabId] = useState<string>('tubos');

  const activeTab = SHOWCASE_TABS.find(t => t.id === activeTabId) || SHOWCASE_TABS[0];

  return (
    <section className="bg-white py-12 border-b border-slate-200/80 text-center" id="product-showcase-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title in Electrolux Style */}
        <div className="mb-8">
          <h2 className="text-2xl font-normal text-[#011e41] tracking-[0.22em] uppercase font-display">
            Nossos Produtos
          </h2>
          <div className="h-0.5 bg-[#011e41]/10 w-24 mx-auto mt-3"></div>
        </div>

        {/* Tab Headers */}
        <div className="flex overflow-x-auto md:justify-center border border-slate-200 bg-slate-50/50 rounded-xl max-w-2xl mx-auto mb-8 shadow-xs whitespace-nowrap scroll-hide">
          {SHOWCASE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`flex-1 min-w-[120px] md:min-w-0 py-3 px-3 text-xs font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                activeTabId === tab.id
                  ? 'bg-white text-[#011e41] shadow-sm border-x border-slate-200/50 font-extrabold'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/50'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[360px]">
          
          {/* Left Promo Card (Large Category Image) */}
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-md group h-80 lg:h-auto min-h-[300px]">
            <img
              src={activeTab.promoImage}
              alt={activeTab.promoTitle}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-6 text-left">
              <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest mb-1.5">Goiânia Tubos Inox</span>
              <h3 className="text-xl font-extrabold text-white leading-tight font-display tracking-tight">
                {activeTab.promoTitle}
              </h3>
              <button
                onClick={() => onSelectCategory('all')}
                className="mt-4 flex items-center gap-1.5 text-white hover:text-brand-teal text-xs font-bold transition-colors cursor-pointer w-fit group/btn"
              >
                <span>Ver Todos os Itens</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Subcategory Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {activeTab.items.map((item, index) => (
              <div
                key={index}
                onClick={() => onSelectCategory(item.filterValue)}
                className="bg-slate-50 hover:bg-white rounded-xl border border-slate-200/65 hover:border-brand-teal/40 p-4 transition-all duration-300 flex flex-col justify-between items-center text-center cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2 shadow-xs group-hover:scale-105 transition-transform">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                    onError={(e) => {
                      // Fallback image source
                      (e.target as HTMLImageElement).src = 'https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg';
                    }}
                  />
                </div>
                <div className="w-full mt-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 text-left leading-snug group-hover:text-brand-blue transition-colors">
                    {item.name}
                  </span>
                  <div className="p-1 bg-slate-200/50 group-hover:bg-brand-teal/10 rounded-full text-slate-400 group-hover:text-brand-teal transition-colors ml-2 shrink-0">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
