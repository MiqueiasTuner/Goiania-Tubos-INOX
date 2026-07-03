import React, { useState } from 'react';
import { Product } from '../types';
import { SEGMENTS } from '../data/industrialData';
import { 
  Salad, 
  Flame, 
  Wrench, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Droplet, 
  Activity, 
  Layers, 
  Compass, 
  Cog, 
  Hammer, 
  ShieldAlert, 
  FileText, 
  TrendingUp, 
  Settings, 
  Database,
  Building,
  Thermometer,
  Milk,
  Wine,
  Package,
  Plus
} from 'lucide-react';

interface SegmentTabsProps {
  products: Product[];
  onAddProductToCart: (product: Product, material: string, size: string) => void;
  onFilterCatalog?: (category: string, material: string, searchQuery: string) => void;
}

// Crisp, high-resolution visual thumbnails from Goiania Tubos (300x235)
// To keep them extremely sharp and prevent stretching, they will be displayed inside 
// bounded containers with object-cover, acting as elegant visual cards.
const SEGMENT_IMAGES: Record<string, string> = {
  alimenticia: 'https://goianiatubos.com.br/wp-content/uploads/2023/07/Industria-Alimenticia-300x235.png',
  bebidas: 'https://goianiatubos.com.br/wp-content/uploads/2023/07/Industria-de-Bebidas-300x235.png',
  farmaceutica: 'https://goianiatubos.com.br/wp-content/uploads/2023/07/Industria-Farmaceutica-300x235.png',
  construcao: 'https://goianiatubos.com.br/wp-content/uploads/2023/07/Arquitetura-e-Construcao-Civil-300x235.png',
  quimica: 'https://goianiatubos.com.br/wp-content/uploads/2023/07/Arquitetura-e-Construcao-Civil-300x235.png'
};

// Complete structured database for the "Principais Segmentos" 15-item grid
// matching exactly the user's high-fidelity screenshot
interface GridSegment {
  id: string;
  name: string;
  description: string;
  bulletPoints: string[];
  filterCategory: string;
  filterMaterial: string;
  filterSearch: string;
  icon: React.ReactNode;
}

export default function SegmentTabs({ products, onAddProductToCart, onFilterCatalog }: SegmentTabsProps) {
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>(SEGMENTS[0].id);

  const activeSegment = SEGMENTS.find(s => s.id === selectedSegmentId) || SEGMENTS[0];

  // Map icon names from key segment data
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Salad':
        return <Salad className={className} />;
      case 'Flame':
        return <Flame className={className} />;
      case 'Wrench':
        return <Wrench className={className} />;
      default:
        return <Wrench className={className} />;
    }
  };

  // Filter products matching this segment's recommended materials or category
  const getRecommendedProducts = () => {
    if (selectedSegmentId === 'alimenticia') {
      return products.filter(p => p.subcategory.includes('Sanitário') || (p.materials.includes('Aço Inox AISI 304') && p.category !== 'incendio'));
    } else if (selectedSegmentId === 'bebidas') {
      return products.filter(p => p.subcategory.includes('Sanitário') || p.category === 'valvulas' || p.materials.includes('Aço Inox AISI 304'));
    } else if (selectedSegmentId === 'farmaceutica') {
      return products.filter(p => p.materials.includes('Aço Inox AISI 316') && (p.subcategory.includes('Sanitário') || p.category === 'valvulas'));
    } else if (selectedSegmentId === 'construcao') {
      return products.filter(p => p.category === 'estrutura' || p.category === 'auxiliares' || p.materials.includes('Aço Carbono'));
    } else if (selectedSegmentId === 'quimica') {
      return products.filter(p => p.materials.includes('Aço Inox AISI 316') || p.category === 'valvulas' || p.id.includes('flange'));
    }
    return products.slice(0, 10);
  };

  const recommendedProducts = getRecommendedProducts();

  // The 15 Grid Segments matching the user's printed blueprint precisely
  const GRID_SEGMENTS: GridSegment[] = [
    {
      id: 'alim',
      name: 'Indústria Alimentícia',
      description: 'Materiais sanitários, inox 304/316, válvulas e conexões para processos CIP e envase.',
      bulletPoints: ['Tubos e conexões sanitárias', 'Válvulas borboleta, esfera, globo', 'Chapas, perfis, instrumentação'],
      filterCategory: 'all',
      filterMaterial: 'Inox 304',
      filterSearch: 'sanitário',
      icon: <Salad className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'bebi',
      name: 'Indústria de Bebidas',
      description: 'Linhas de produção para água, refrigerantes, cervejarias e sucos.',
      bulletPoints: ['Inox sanitário 304/316', 'Curvas, T, uniões, juntas', 'Válvulas automação/processo'],
      filterCategory: 'valvulas',
      filterMaterial: 'Inox 304',
      filterSearch: 'sanitário',
      icon: <Wine className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'lati',
      name: 'Laticínios',
      description: 'Pasteurização, tanques, envase e redes sanitárias com pronta entrega.',
      bulletPoints: ['Tubulações 304/316 e conexões', 'Processos CIP e sanitização', 'Válvulas sanitárias e instrumentação'],
      filterCategory: 'conexoes',
      filterMaterial: 'Inox 304',
      filterSearch: 'sanitário',
      icon: <Milk className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'frig',
      name: 'Frigoríficos & Abatedouros',
      description: 'Soluções robustas para ambientes frios e higienização intensiva.',
      bulletPoints: ['Tubos schedule e OD inox', 'Válvulas, filtros Y, conexões', 'Chapas antiderrapantes'],
      filterCategory: 'tubos',
      filterMaterial: 'Inox 304',
      filterSearch: 'OD',
      icon: <Layers className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'farm',
      name: 'Indústria Farmacêutica',
      description: 'Materiais compatíveis com validação e ambientes controlados.',
      bulletPoints: ['Inox 316L, superfícies polidas', 'Conexões sanitárias alta pureza', 'Válvulas de bloqueio/controle'],
      filterCategory: 'all',
      filterMaterial: 'Inox 316',
      filterSearch: 'sanitário',
      icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'cosm',
      name: 'Indústria Cosmética',
      description: 'Linhas de processo limpas e resistentes a agentes químicos.',
      bulletPoints: ['Inox 304/316, vedações adequadas', 'Curvas, reduções, uniões', 'Automação e instrumentação'],
      filterCategory: 'all',
      filterMaterial: 'Inox 316',
      filterSearch: 'valvula',
      icon: <Droplet className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'quim',
      name: 'Indústria Química',
      description: 'Linhas de fluidos com requisitos de segurança e compatibilidade.',
      bulletPoints: ['Aço carbono & inox por processo', 'Válvulas de segurança/controle', 'Juntas, flanges, filtros'],
      filterCategory: 'all',
      filterMaterial: 'Inox 316',
      filterSearch: 'chapa',
      icon: <ShieldAlert className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'petr',
      name: 'Indústria Petroquímica',
      description: 'Materiais para alta pressão/temperatura e corrosão.',
      bulletPoints: ['Schedule 40/80, alta pressão', 'Válvulas ANSI/API', 'Flanges e conexões forjadas'],
      filterCategory: 'conexoes',
      filterMaterial: 'Carbono',
      filterSearch: 'Schedule',
      icon: <Database className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'sane',
      name: 'Saneamento & Tratamento de Água',
      description: 'Redes e estações de tratamento, adução e distribuição.',
      bulletPoints: ['Tubos e conexões galvanizadas/inox', 'Válvulas guilhotina, gaveta', 'Juntas de expansão'],
      filterCategory: 'all',
      filterMaterial: 'Galvanizado',
      filterSearch: 'gaveta',
      icon: <Activity className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'pape',
      name: 'Papel & Celulose',
      description: 'Linhas químicas e vapor, resistência e manutenção facilitada.',
      bulletPoints: ['Aço carbono e inox por etapa', 'Válvulas, filtros, instrumentação', 'Chapas e perfis estruturais'],
      filterCategory: 'valvulas',
      filterMaterial: 'Carbono',
      filterSearch: 'flange',
      icon: <FileText className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'sucr',
      name: 'Sucroenergético (Açúcar & Álcool)',
      description: 'Tubulações para caldo, vapor e destilação.',
      bulletPoints: ['Inox e aço carbono', 'Válvulas de processo e segurança', 'Flanges e conexões'],
      filterCategory: 'tubos',
      filterMaterial: 'Carbono',
      filterSearch: 'Schedule',
      icon: <Flame className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'oleo',
      name: 'Óleo & Gás',
      description: 'Materiais para linhas de processo e utilidades.',
      bulletPoints: ['Schedule 40/80, ASTM/ASME', 'Válvulas esfera/retenção/gaveta', 'Conexões de alta pressão'],
      filterCategory: 'all',
      filterMaterial: 'Carbono',
      filterSearch: 'alta pressão',
      icon: <TrendingUp className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'mine',
      name: 'Mineração',
      description: 'Slurry e utilidades com alta abrasão e confiabilidade.',
      bulletPoints: ['Aço carbono reforçado', 'Válvulas guilhotina/knife gate', 'Juntas e filtros industriais'],
      filterCategory: 'valvulas',
      filterMaterial: 'Carbono',
      filterSearch: 'guilhotina',
      icon: <Settings className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'cons',
      name: 'Construção Civil & Arquitetura',
      description: 'Aplicações estruturais e arquitetônicas com inox e aço carbono.',
      bulletPoints: ['Chapas, perfis, tubos estruturais', 'Fixadores e acessórios', 'Acabamentos e guarda-corpos'],
      filterCategory: 'estrutura',
      filterMaterial: 'Inox 304',
      filterSearch: 'cantoneira',
      icon: <Building className="w-5 h-5 text-brand-teal" />
    },
    {
      id: 'refr',
      name: 'Refrigeração Industrial (Amônia)',
      description: 'Linhas para NH₃ e ambientes de baixa temperatura.',
      bulletPoints: ['Tubos schedule/galvanizados', 'Válvulas e instrumentação', 'Juntas e segurança'],
      filterCategory: 'tubos',
      filterMaterial: 'Carbono',
      filterSearch: 'Schedule',
      icon: <Thermometer className="w-5 h-5 text-brand-teal" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-16 text-left" id="segments-tab">
      
      {/* SECTION 1: INTERACTIVE KEY SEGMENTS WITH REAL IMAGES (CRISP & POLISHED) */}
      <div className="space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-slate-900">
            Aplicações Industriais Homologadas
          </h2>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            Selecione uma das 5 categorias principais para abrir a especificação de engenharia, requisitos regulatórios e produtos sugeridos com estoque imediato.
          </p>
        </div>

        {/* 5-Column Segment Selector - White Grid with Clean Border and No Pixelation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SEGMENTS.map((seg) => {
            const isActive = seg.id === selectedSegmentId;
            return (
              <button
                key={seg.id}
                onClick={() => {
                  setSelectedSegmentId(seg.id);
                  // Scroll smoothly to details spotlight
                  setTimeout(() => {
                    const el = document.getElementById('segment-details-spotlight');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 100);
                }}
                className={`group bg-white border rounded-xl overflow-hidden shadow-sm transition-all duration-300 cursor-pointer flex flex-col ${
                  isActive 
                    ? 'border-brand-teal ring-2 ring-brand-teal/30 scale-102 shadow-md' 
                    : 'border-slate-200 hover:border-slate-300 hover:scale-[1.01]'
                }`}
              >
                {/* Fixed-Size Crisp Thumbnail Container to Prevent Pixelation */}
                <div className="relative w-full h-28 bg-slate-100 overflow-hidden shrink-0 border-b border-slate-100">
                  <img 
                    src={SEGMENT_IMAGES[seg.id] || SEGMENT_IMAGES.alimenticia} 
                    alt={seg.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/5" />
                </div>
                
                {/* Card Body - Clean Slate Styling */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-xs font-bold leading-tight ${isActive ? 'text-brand-teal-dark font-extrabold' : 'text-slate-800'}`}>
                      {seg.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-normal">
                      {seg.shortDescription}
                    </p>
                  </div>
                  
                  {/* Bottom Indicator */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-brand-teal uppercase font-mono tracking-wider">
                      {isActive ? 'Ativo' : 'Ver Detalhes'}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isActive ? 'translate-x-1 text-brand-teal' : 'group-hover:translate-x-1'}`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Segment Spotlight (Spec Panel) */}
        <div 
          id="segment-details-spotlight" 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm scroll-mt-24 transition-all duration-300"
        >
          {/* Left Details Panel */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold tracking-wider text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5" />
                Especificações Técnicas
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 mt-4 leading-tight uppercase tracking-tight">
                {activeSegment.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
                {activeSegment.fullDescription}
              </p>

              {/* Technical Specifications */}
              <div className="mt-6 space-y-3">
                <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                  Requisitos Técnicos do Setor
                </h4>
                {activeSegment.keyRequirements.map((req, i) => (
                  <div key={i} className="flex gap-2.5 items-start text-xs text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                    <span className="font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Materials */}
            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 mb-2">
                Ligas Metálicas Homologadas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeSegment.recommendedMaterials.map((mat) => (
                  <span 
                    key={mat}
                    className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold rounded border border-slate-200/60"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Recommended Products Catalog */}
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-8 text-left">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Produtos Sugeridos ({recommendedProducts.length})
              </h4>
              <span className="text-[10px] text-slate-400 italic font-semibold">Pronta Entrega em Goiânia</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[440px] overflow-y-auto pr-2 scroll-hide">
              {recommendedProducts.map((p) => (
                <div 
                  key={p.id}
                  className="p-4 border border-slate-200 rounded-xl bg-slate-50/30 hover:bg-slate-50 hover:border-slate-300 transition-all flex flex-col justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-600 font-mono">
                        {p.standard || 'GTI'}
                      </span>
                      <span className="text-[9px] text-brand-teal font-extrabold uppercase">{p.subcategory}</span>
                    </div>
                    <h5 className="font-display font-bold text-xs text-slate-800 line-clamp-1">
                      {p.name}
                    </h5>
                    <p className="text-[10px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-100/60">
                    <span className="text-[10px] text-slate-500 font-medium">Unidade: {p.unit}</span>
                    <button
                      onClick={() => onAddProductToCart(p, p.materials[0], p.sizes[0])}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-brand-blue hover:bg-brand-blue-dark text-white text-[10px] font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Adicionar</span>
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: THE HIGH-FIDELITY "PRINCIPAIS SEGMENTOS" 15-ITEM GRID */}
      <div className="space-y-6 pt-6 border-t border-slate-200">
        <div className="text-left space-y-1">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Principais Segmentos
          </h2>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            Conheça em quais mercados atuamos com estoque, especificação técnica e logística ágil.
          </p>
        </div>

        {/* 15-Item Premium White Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GRID_SEGMENTS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-3">
                {/* Icon & Title */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-teal/5 rounded-lg text-brand-teal">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                    {item.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-500 leading-relaxed min-h-[32px]">
                  {item.description}
                </p>

                {/* Bullet list of solutions */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  {item.bulletPoints.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[11px] text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-[#c59c27] mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Golden "Ver soluções" Trigger Link */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    if (onFilterCatalog) {
                      onFilterCatalog(item.filterCategory, item.filterMaterial, item.filterSearch);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c59c27] hover:text-amber-700 transition-colors cursor-pointer group-hover:underline"
                >
                  <span>Ver soluções</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: "POR QUE A GOIÂNIA TUBOS INOX?" BENCHMARKS */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-10 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight text-slate-900">
            Por que a Goiânia Tubos Inox?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Nossa estrutura de vendas e suprimento garante segurança e agilidade para sua planta industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs flex gap-4 text-left">
            <div className="p-2.5 bg-brand-teal/10 text-brand-teal rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Maior mix de produtos</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                Tubos, conexões, válvulas, chapas e perfis em aço inox e carbono em todas as ligas industriais.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs flex gap-4 text-left">
            <div className="p-2.5 bg-brand-teal/10 text-brand-teal rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Atendimento técnico</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                Equipe especializada que entende do seu processo produtivo, normas reguladoras e especifica os materiais corretamente.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs flex gap-4 text-left">
            <div className="p-2.5 bg-brand-teal/10 text-brand-teal rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Logística inteligente</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                Unidades estrategicamente posicionadas em Goiânia (GO) e Imperatriz (MA) para atender com agilidade o Centro-Norte e N/NE do Brasil.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs flex gap-4 text-left">
            <div className="p-2.5 bg-brand-teal/10 text-brand-teal rounded-lg shrink-0 h-10 w-10 flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Procedência e qualidade</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed font-light">
                Fornecimento acompanhado de certificados de qualidade originais das usinas de aço, garantindo total rastreabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
