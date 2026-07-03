import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, MapPin, Store, ChevronDown, User, Heart, HelpCircle, Phone, Mail, FileText, CheckCircle2, Award, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { B2BUser } from '../types';

const CAROUSEL_PRODUCTS: Record<string, { name: string; image: string; tag: string; link: string }[]> = {
  tubos: [
    {
      name: 'Tubo de Aço Inox OD Sanitário',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-RETANGULAR-INOX.png',
      tag: 'Grau Sanitário ASTM A270',
      link: 'Tubo de Aço Inox OD Sanitário'
    },
    {
      name: 'Tubo Inox ASTM A312 Industrial',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg',
      tag: 'Condução Química Sch 10s/40s',
      link: 'Tubo de Aço Inox ASTM A312 (Industrial)'
    },
    {
      name: 'Tubo Aço Carbono Sem Costura A106',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg',
      tag: 'Alta Temperatura e Pressão',
      link: 'Tubo de Aço Carbono Sem Costura ASTM A106'
    }
  ],
  conexoes: [
    {
      name: 'Curva 90º de Solda OD Sanitária',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-PI-PE.png',
      tag: 'Polido Grau Alimentício',
      link: 'Curva 90º de Solda OD Sanitária'
    },
    {
      name: 'Curva 90º Carbono SCH 40',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/COTOVELO-45-ALTA-PRESSAO.jpg',
      tag: 'Alta Condução de Fluidos',
      link: 'Curva 90º de Solda Curta/Longa SCH 40'
    },
    {
      name: 'Flange Sobreposto (Slip-On)',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/09/FLANGE-ACO-CARBONO.jpg',
      tag: 'Norma ANSI B16.5 Classe 150',
      link: 'Flange Slip-On (Sobreposto)'
    }
  ],
  valvulas: [
    {
      name: 'Válvula Borboleta Sanitária',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-MANUAL-REVESTIDA-PTFE.png',
      tag: 'Grau Alimentício Manual',
      link: 'Válvula de Borboleta Manual Sanitária'
    },
    {
      name: 'Válvula Esfera Monobloco',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-MANUAL-REVESTIDA-PTFE.png',
      tag: 'Vedação Rígida 1000 WOG',
      link: 'Válvula de Esfera Monobloco'
    },
    {
      name: 'Válvula Solenoide Latão/Inox',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SOLENOIDE-VAPOR.png',
      tag: 'Controle de Vapor e Gases',
      link: 'Válvula Solenoide de Latão/Inox'
    }
  ],
  chapas: [
    {
      name: 'Chapa de Aço Inox AISI 304/316',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2024/02/chapa-de-inox-em-joinville.webp',
      tag: 'Escovada / Polida / Natural',
      link: 'Chapa de Aço Inox'
    },
    {
      name: 'Perfis e Cantoneiras de Inox',
      image: 'https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-RETANGULAR-INOX.png',
      tag: 'Estruturas Metálicas de Rigidez',
      link: 'Perfis de Estrutura e Cantoneiras'
    }
  ]
};

interface MegaMenuProductCarouselProps {
  category: string;
  onSelectProduct: (productName: string) => void;
}

function MegaMenuProductCarousel({ category, onSelectProduct }: MegaMenuProductCarouselProps) {
  const products = CAROUSEL_PRODUCTS[category] || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (products.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [products]);

  if (products.length === 0) return null;

  const activeProduct = products[index];

  return (
    <div className="md:col-span-3 bg-gradient-to-br from-[#011e41] to-[#0a2954] text-white p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-lg border border-slate-800/80 group h-full min-h-[250px]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-teal/20 transition-all duration-300"></div>

      <div className="relative w-full h-28 flex items-center justify-center bg-white/5 rounded-xl p-3 border border-white/5 overflow-hidden mb-4 shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeProduct.name}
            src={activeProduct.image}
            alt={activeProduct.name}
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ duration: 0.35 }}
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_4px_6px_rgba(255,255,255,0.05)] select-none mix-blend-lighten"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        <span className="absolute top-2 left-2 bg-brand-teal text-slate-950 font-extrabold text-[8px] uppercase px-2 py-0.5 rounded tracking-wider shadow-xs">
          {activeProduct.tag}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="min-h-[45px]">
          <h4 className="font-display font-extrabold text-[12px] text-slate-100 group-hover:text-brand-teal transition-colors duration-200 uppercase tracking-wide">
            {activeProduct.name}
          </h4>
          <p className="text-[10px] text-slate-400 mt-1 leading-snug">
            Em conformidade técnica integral. Clique para ver especificações no catálogo.
          </p>
        </div>

        <button
          onClick={() => onSelectProduct(activeProduct.link)}
          className="mt-3 w-full bg-brand-teal hover:bg-brand-teal-dark text-slate-950 font-bold py-1.5 px-3 rounded-lg text-[10px] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow-brand-teal/20"
        >
          <span>Ver Detalhes</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {products.length > 1 && (
        <div className="absolute bottom-2 right-4 flex gap-1">
          {products.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setIndex(dotIdx)}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${index === dotIdx ? 'bg-brand-teal w-2.5' : 'bg-slate-600'}`}
              aria-label={`Ir para slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface HeaderProps {
  activeTab: 'catalog' | 'segments' | 'materials' | 'history' | 'faq' | 'login';
  setActiveTab: (tab: 'catalog' | 'segments' | 'materials' | 'history' | 'faq' | 'login') => void;
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  currentUser: B2BUser | null;
  onOpenLogin: () => void;
  onLogout: () => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  searchQuery,
  setSearchQuery,
  currentUser,
  onOpenLogin,
  onLogout,
}: HeaderProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('Goiânia - GO');
  const [isCepOpen, setIsCepOpen] = useState(false);
  const [cepInput, setCepInput] = useState('');
  
  const [isAtendimentoOpen, setIsAtendimentoOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  // Auto-close on outside clicks for select popups
  const cepRef = useRef<HTMLDivElement>(null);
  const atendimentoRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cepRef.current && !cepRef.current.contains(event.target as Node)) {
        setIsCepOpen(false);
      }
      if (atendimentoRef.current && !atendimentoRef.current.contains(event.target as Node)) {
        setIsAtendimentoOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setIsAccountOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleApplyCep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cepInput) return;
    
    // Simulate CEP resolution
    if (cepInput.startsWith('74') || cepInput.startsWith('75') || cepInput.startsWith('76')) {
      setSelectedRegion('Goiânia - GO (Estoque Matriz)');
    } else if (cepInput.startsWith('65') || cepInput.startsWith('64') || cepInput.startsWith('63')) {
      setSelectedRegion('Imperatriz - MA (Filial Norte/NE)');
    } else {
      setSelectedRegion('Nacional (Distribuição Direta)');
    }
    setIsCepOpen(false);
  };

  const handleQuickRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setIsCepOpen(false);
  };

  const scrollToUnidades = () => {
    const el = document.getElementById('unidades-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMegaMenuCategoryClick = (category: string) => {
    setActiveTab('catalog');
    setSearchQuery(category);
    setActiveMegaMenu(null);
  };

  // Static structure for the Mega Menu columns, exactly like Screenshot 2 (Electrolux)
  const MEGA_MENU_CONTENT: Record<string, {
    columns: { title: string; items: string[] }[];
    bannerTitle: string;
    bannerSubtitle: string;
    bannerCta: string;
  }> = {
    'tubos': {
      columns: [
        {
          title: 'Tubos Industriais',
          items: ['Tubo Inox com Costura', 'Tubo Inox sem Costura', 'Tubo Carbono Sch 40', 'Tubo Carbono Sch 80'],
        },
        {
          title: 'Tubos Sanitários',
          items: ['Tubo OD Sanitário', 'Tubo Inox AISI 304/L', 'Tubo Inox AISI 316/L', 'Tubo Polido Interno'],
        },
        {
          title: 'Normas & Acabamentos',
          items: ['ASTM A270', 'ASTM A312', 'Decapados', 'Escovados / Espelhados'],
        },
        {
          title: 'Atalhos Úteis',
          items: ['Guia de Ligas Metálicas', 'Tabela de Peso Teórico', 'Solicitar Corte Sob Medida'],
        }
      ],
      bannerTitle: 'Tubos de Aço Inoxidável',
      bannerSubtitle: 'Máxima durabilidade e resistência contra corrosão com ligas autênticas AISI 304 e 316.',
      bannerCta: 'Descobrir Tubos',
    },
    'conexoes': {
      columns: [
        {
          title: 'Conexões Tubulares',
          items: ['Curvas de Inox 90°', 'Curvas de Inox 45°', 'Te de Redução', 'Redução Excêntrica / Concêntrica'],
        },
        {
          title: 'Conexões de Alta Pressão',
          items: ['Cotovelos Forjados', 'União de Aço Carbono', 'Luvas e Niples BSP/NPT', 'Caps para Fechamento'],
        },
        {
          title: 'Flanges Industriais',
          items: ['Flange Slip-On (Sobreposto)', 'Flange Welding Neck (Pescoço)', 'Flange Blind (Cego)', 'Flange Roscado / Lap-Joint'],
        },
        {
          title: 'Ligas Especiais',
          items: ['Aço Carbono ASTM A105', 'Inox ASTM A182 F304L', 'Inox ASTM A182 F316L', 'Classes 150 a 3000 lbs'],
        }
      ],
      bannerTitle: 'Linha Completa de Flanges',
      bannerSubtitle: 'Conexões forjadas que seguem rigidamente os padrões ANSI/ASME e DIN.',
      bannerCta: 'Descobrir Conexões',
    },
    'valvulas': {
      columns: [
        {
          title: 'Bloqueio de Fluxo',
          items: ['Válvula de Esfera Monobloco', 'Válvula de Esfera Bipartida', 'Válvula de Gaveta de Inox', 'Válvula Globo de Carbono'],
        },
        {
          title: 'Direcionamento & Segurança',
          items: ['Válvula de Retenção Horizontal', 'Válvula de Retenção Portinhola', 'Válvula Borboleta', 'Válvula de Alívio e Segurança'],
        },
        {
          title: 'Acionamento Especial',
          items: ['Válvulas Atuadas Pneumáticas', 'Atuadores Elétricos', 'Válvulas Solenoide', 'Controle Proporcional'],
        },
        {
          title: 'Segmentos de Aplicação',
          items: ['Setor Farmacêutico', 'Setor Sucroenergético', 'Setor de Alimentos & Bebidas', 'Indústria Química'],
        }
      ],
      bannerTitle: 'Válvulas Industriais Robustas',
      bannerSubtitle: 'Controle de fluidos e gases corrosivos com certificação de estanqueidade classe A.',
      bannerCta: 'Descobrir Válvulas',
    },
    'chapas': {
      columns: [
        {
          title: 'Chapas & Bobinas',
          items: ['Chapa de Inox Fina Frio', 'Chapa de Inox Quente', 'Chapa Antiderrapante (Xadrez)', 'Bobinas de Inox Escovadas'],
        },
        {
          title: 'Barras & Perfis',
          items: ['Barra Chata de Inox', 'Barra Redonda Trefilada', 'Cantoneiras de Abas Iguais', 'Perfis Quadrados e Retangulares'],
        },
        {
          title: 'Ligas Metálicas',
          items: ['Aço Inox AISI 304', 'Aço Inox AISI 316', 'Aço Carbono SAE 1020', 'Galvanizado de Alta Camada'],
        },
        {
          title: 'Serviços Especiais',
          items: ['Corte a Laser de Chapas', 'Dobra CNC', 'Calandra de Perfis', 'Serviço de Frete Integrado'],
        }
      ],
      bannerTitle: 'Chapas e Barras de Inox',
      bannerSubtitle: 'Mix completo de perfis estruturais com acabamento escovado, polido ou natural.',
      bannerCta: 'Descobrir Chapas',
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-slate-800 select-none shadow-md border-b border-slate-200" id="app-header-electrolux">
      
      {/* Upper Utility Header (GTI - Electrolux Premium Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Left Side: Logo & Store Locators */}
        <div className="flex items-center gap-6 shrink-0">
          <button 
            onClick={() => { setActiveTab('catalog'); setSearchQuery(''); }} 
            className="text-left focus:outline-none transition-transform active:scale-95 duration-150"
          >
            <Logo />
          </button>

          {/* CEP Selector Popup (Electrolux style "Informe seu CEP") */}
          <div className="relative hidden md:block text-left" ref={cepRef}>
            <button
              onClick={() => setIsCepOpen(!isCepOpen)}
              className="flex items-center gap-1.5 text-[11px] text-slate-600 hover:text-[#011e41] transition-colors py-1 px-2 rounded-md hover:bg-slate-50 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#011e41]" />
              <div>
                <span className="block text-[10px] text-slate-400 font-medium leading-none">Entrega em:</span>
                <span className="font-bold text-slate-700 mt-0.5 block leading-none">{selectedRegion}</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 ml-1 transition-transform duration-200 ${isCepOpen ? 'rotate-180' : ''}`} />
            </button>

            {isCepOpen && (
              <div className="absolute top-11 left-0 w-72 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 p-4 z-50 animate-fade-in text-xs">
                <h4 className="font-bold text-[#011e41] text-sm mb-2">Simulador de Frete B2B</h4>
                <p className="text-[11px] text-slate-500 mb-3">Informe seu CEP para mapearmos o estoque mais próximo da sua obra.</p>
                
                <form onSubmit={handleApplyCep} className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Ex: 74000-000"
                    value={cepInput}
                    onChange={(e) => setCepInput(e.target.value)}
                    className="flex-1 px-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-brand-teal text-slate-800 bg-slate-50"
                  />
                  <button type="submit" className="px-3 py-1.5 bg-brand-teal hover:bg-brand-teal-dark text-white font-bold rounded-lg text-xs cursor-pointer">
                    Mapear
                  </button>
                </form>

                <div className="border-t border-slate-100 pt-3">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Mapear por Unidade Comercial</span>
                  <div className="space-y-1">
                    <button 
                      onClick={() => handleQuickRegionSelect('Goiânia - GO')}
                      className="w-full text-left p-1.5 rounded hover:bg-slate-50 transition-colors flex justify-between items-center text-[11px] font-semibold text-slate-700 cursor-pointer"
                    >
                      <span>Matriz Goiânia - GO</span>
                      <span className="text-[10px] text-brand-teal">Estoque Principal</span>
                    </button>
                    <button 
                      onClick={() => handleQuickRegionSelect('Imperatriz - MA')}
                      className="w-full text-left p-1.5 rounded hover:bg-slate-50 transition-colors flex justify-between items-center text-[11px] font-semibold text-slate-700 cursor-pointer"
                    >
                      <span>Filial Imperatriz - MA</span>
                      <span className="text-[10px] text-brand-teal">Estoque Norte/NE</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Nossas Lojas Locator Button */}
          <button
            onClick={scrollToUnidades}
            className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-600 hover:text-[#011e41] transition-colors py-1 px-2 rounded-md hover:bg-slate-50 cursor-pointer"
          >
            <Store className="w-4 h-4 text-[#011e41]" />
            <div>
              <span className="block text-[10px] text-slate-400 font-medium leading-none">Presença Nacional</span>
              <span className="font-bold text-slate-700 mt-0.5 block leading-none">Nossas Lojas</span>
            </div>
          </button>
        </div>

        {/* Center: Premium Wide Search Bar (Electrolux Layout) */}
        <div className="flex-1 max-w-xl mx-2 md:mx-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search className="w-4.5 h-4.5 text-[#011e41]" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeTab !== 'catalog') {
                  setActiveTab('catalog');
                }
              }}
              placeholder="Pesquisar tubos OD, conexões flangeadas, válvulas, chapas..."
              className="w-full pl-10 pr-28 py-2.5 bg-slate-50 text-slate-800 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#011e41]/20 focus:bg-white transition-all placeholder:text-slate-400"
            />
            {searchQuery ? (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-20 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600 cursor-pointer font-bold"
              >
                Limpar
              </button>
            ) : null}
            <button className="absolute right-0 top-0 bottom-0 px-4 bg-[#011e41] hover:bg-slate-800 rounded-r-lg font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center transition-colors cursor-pointer">
              Buscar
            </button>
          </div>
        </div>

        {/* Right Side: Account, Support, Cart Widgets */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Support Dropdown ("Atendimento") */}
          <div className="relative" ref={atendimentoRef}>
            <button
              onClick={() => setIsAtendimentoOpen(!isAtendimentoOpen)}
              className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-[#011e41] transition-all py-1.5 px-2.5 rounded-lg hover:bg-slate-50 cursor-pointer"
            >
              <span>Atendimento</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isAtendimentoOpen ? 'rotate-180' : ''}`} />
            </button>

            {isAtendimentoOpen && (
              <div className="absolute right-0 top-11 w-64 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200/80 p-4 z-50 text-xs animate-fade-in text-left">
                <h4 className="font-bold text-[#011e41] border-b border-slate-100 pb-2 mb-3 uppercase tracking-wider text-[10px]">Canais de Vendas GTI</h4>
                <div className="space-y-3">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Matriz Goiânia</span>
                    <a href="tel:6230922724" className="text-slate-700 hover:text-brand-teal font-bold block mt-0.5">(62) 3092-2724</a>
                    <a href="https://wa.me/5562998517536" target="_blank" rel="noreferrer" className="text-brand-teal hover:underline text-[11px] font-bold block mt-0.5">WhatsApp Comercial Matriz</a>
                  </div>
                  <div className="border-t border-slate-100 pt-2.5">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Filial Imperatriz</span>
                    <a href="tel:9941023415" className="text-slate-700 hover:text-brand-teal font-bold block mt-0.5">(99) 4102-3415</a>
                    <a href="https://wa.me/559941023415" target="_blank" rel="noreferrer" className="text-brand-teal hover:underline text-[11px] font-bold block mt-0.5">WhatsApp Comercial Filial</a>
                  </div>
                  <div className="border-t border-slate-100 pt-2.5 flex items-center gap-2 text-slate-500">
                    <Mail className="w-4 h-4 shrink-0 text-brand-teal" />
                    <span className="text-[10px] select-all font-mono">vendas@goianiatubos.com.br</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Account / Session (Electrolux style "Olá, Miqueias..." or simple "Entrar") */}
          <div className="relative" ref={accountRef}>
            <button
              onClick={() => currentUser ? setIsAccountOpen(!isAccountOpen) : onOpenLogin()}
              className="flex items-center gap-2 text-xs text-slate-600 hover:text-[#011e41] transition-all py-1.5 px-4 rounded-full hover:bg-slate-50 cursor-pointer border border-[#011e41] shadow-xs bg-slate-50/50"
            >
              <User className="w-4.5 h-4.5 text-[#011e41]" />
              {currentUser ? (
                <>
                  <div className="text-left hidden md:block">
                    <span className="block text-[9px] text-slate-400 font-medium leading-none">
                      Empresa Conectada
                    </span>
                    <span className="font-bold text-[#011e41] text-[11px] mt-0.5 block leading-none truncate max-w-[120px]">
                      {currentUser.tradingName}
                    </span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isAccountOpen ? 'rotate-180' : ''}`} />
                </>
              ) : (
                <span className="font-extrabold text-[#011e41] text-[11.5px] uppercase tracking-wider py-0.5 px-1">
                  Entrar
                </span>
              )}
            </button>

            {isAccountOpen && (
              <div className="absolute right-0 top-11 w-64 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200/80 overflow-hidden z-50 text-xs animate-fade-in text-left">
                {currentUser ? (
                  <div className="bg-emerald-50/70 p-3.5 border-b border-emerald-100">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-extrabold text-[11px] uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Faturamento Direto B2B
                    </div>
                    <h4 className="font-bold text-[#011e41] text-xs mt-1 truncate">{currentUser.companyName}</h4>
                    <p className="text-[10px] text-slate-500 mt-1 font-mono">CNPJ: {currentUser.cnpj}</p>
                    <div className="mt-2 text-[10px] bg-emerald-600 text-white font-extrabold px-2.5 py-1 rounded inline-block">
                      Tabela Distribuidor Habilitada
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-50 p-3.5 border-b border-slate-100">
                    <h4 className="font-bold text-[#011e41] text-xs">Acesso Corporativo</h4>
                    <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                      Identifique sua empresa para liberar faturamento faturado direto de fábrica e condições exclusivas.
                    </p>
                    <button 
                      onClick={() => { onOpenLogin(); setIsAccountOpen(false); }}
                      className="mt-2.5 w-full py-1.5 bg-[#011e41] hover:bg-slate-800 text-white font-bold text-[10px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Homologar CNPJ / Login
                    </button>
                  </div>
                )}
                
                <div className="p-1">
                  <button 
                    onClick={() => { setActiveTab('history'); setIsAccountOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded hover:bg-slate-50 transition-colors flex items-center gap-2.5 text-slate-700 text-[11px] font-semibold cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-slate-400" />
                    Meus Pedidos / Cotações
                  </button>
                  <button 
                    onClick={() => { setActiveTab('materials'); setIsAccountOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded hover:bg-slate-50 transition-colors flex items-center gap-2.5 text-slate-700 text-[11px] font-semibold cursor-pointer"
                  >
                    <Award className="w-4 h-4 text-slate-400" />
                    Ligas & Fichas Técnicas
                  </button>
                  <button 
                    onClick={() => { setActiveTab('faq'); setIsAccountOpen(false); }}
                    className="w-full text-left px-3 py-2 rounded hover:bg-slate-50 transition-colors flex items-center gap-2.5 text-slate-700 text-[11px] font-semibold cursor-pointer"
                  >
                    <HelpCircle className="w-4 h-4 text-slate-400" />
                    Dúvidas e Suporte FAQ
                  </button>
                </div>

                <div className="p-1 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-1">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('download-catalog-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      setIsAccountOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded hover:bg-slate-100 transition-colors flex items-center gap-2.5 text-[#011e41] text-[11px] font-bold cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#011e41]" />
                    Baixar Catálogo Geral
                  </button>

                  {currentUser && (
                    <button 
                      onClick={() => { onLogout(); setIsAccountOpen(false); }}
                      className="w-full text-left px-3 py-2 rounded hover:bg-rose-50 text-rose-600 transition-colors flex items-center gap-2.5 text-[11px] font-bold cursor-pointer"
                    >
                      <X className="w-4 h-4 text-rose-500" />
                      Desconectar Empresa
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Cart B2B Checkout Slider Trigger (with Electrolux style round badge) */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-[#011e41] transition-all cursor-pointer"
            aria-label="Carrinho de Cotação"
          >
            <motion.div
              key={cartCount}
              initial={{ scale: 0.8 }}
              animate={cartCount > 0 ? { 
                scale: [1, 1.3, 1],
                rotate: [0, -12, 12, -6, 6, 0]
              } : { scale: 1 }}
              transition={{ duration: 0.45 }}
              className="flex items-center justify-center"
            >
              <ShoppingCart className="w-5.5 h-5.5 text-[#011e41]" />
            </motion.div>
            {cartCount > 0 ? (
              <span className="absolute -top-1 -right-1 bg-brand-teal text-slate-950 text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                {cartCount}
              </span>
            ) : (
              <span className="absolute -top-1 -right-1 bg-slate-200 text-slate-500 text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                0
              </span>
            )}
          </button>

        </div>

      </div>

      {/* Secondary Row: Slim Category Bar with Mega Dropdown triggers */}
      <div className="bg-white text-slate-700 text-xs border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Category Hover Links */}
          <div className="flex-1 flex items-center gap-1.5 overflow-x-auto py-1 scroll-hide min-w-0 mr-4">
            
            {/* Catalog Main Button */}
            <button
              onClick={() => { setActiveTab('catalog'); setSearchQuery(''); }}
              className={`px-3.5 py-4 font-bold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 hover:text-[#011e41] relative group ${
                activeTab === 'catalog' && !searchQuery
                  ? 'text-[#011e41]'
                  : 'text-slate-600'
              }`}
            >
              <span>Todos os Produtos</span>
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal transition-all duration-300 origin-center ${activeTab === 'catalog' && !searchQuery ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>

            {/* Mega Dropdown Triggers */}
            {['tubos', 'conexoes', 'valvulas', 'chapas'].map((catId) => {
              const label = catId === 'tubos' ? 'Tubos' : 
                            catId === 'conexoes' ? 'Conexões & Flanges' : 
                            catId === 'valvulas' ? 'Válvulas' : 'Estruturas & Chapas';
              return (
                <div
                  key={catId}
                  className=""
                  onMouseEnter={() => setActiveMegaMenu(catId)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <button
                    onClick={() => handleMegaMenuCategoryClick(catId === 'conexoes' ? 'conexões' : catId)}
                    className={`px-3.5 py-4 font-bold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 hover:text-[#011e41] relative group ${
                      activeMegaMenu === catId ? 'text-[#011e41]' : 'text-slate-600'
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${activeMegaMenu === catId ? 'rotate-180 text-brand-teal' : 'group-hover:text-[#011e41]'}`} />
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal transition-all duration-300 origin-center ${activeMegaMenu === catId ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </button>

                  {/* Wide Mega Menu Dropdown Panel (Styled exactly like Screenshot 2) */}
                  {activeMegaMenu === catId && (
                    <div className="absolute left-0 right-0 top-full w-full bg-white text-slate-800 shadow-2xl border-t border-b border-slate-200 p-8 z-40 animate-fade-in flex justify-center">
                      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
                        
                        {/* Interactive Mega Columns */}
                        <div className="md:col-span-9 grid grid-cols-2 lg:grid-cols-4 gap-6">
                          {MEGA_MENU_CONTENT[catId].columns.map((col, cIdx) => (
                            <div key={cIdx} className="space-y-3">
                              <h5 className="font-display font-extrabold text-[11px] text-[#011e41] uppercase tracking-wider border-b border-slate-100 pb-1.5 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                                {col.title}
                              </h5>
                              <ul className="space-y-2">
                                {col.items.map((item, iIdx) => (
                                  <li key={iIdx}>
                                    <button
                                      onClick={() => handleMegaMenuCategoryClick(item)}
                                      className="text-slate-500 hover:text-[#00a2a6] hover:font-bold hover:translate-x-1 duration-200 transform-gpu transition-all font-medium text-xs block text-left py-0.5"
                                    >
                                      {item}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Right Column Banner Card with Rotating Product Previews */}
                        <MegaMenuProductCarousel 
                          category={catId} 
                          onSelectProduct={handleMegaMenuCategoryClick} 
                        />

                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Other Direct Pages Tabs */}
            <button
              onClick={() => setActiveTab('segments')}
              className={`px-3.5 py-4 font-bold transition-all duration-200 whitespace-nowrap cursor-pointer hover:text-[#011e41] relative group ${
                activeTab === 'segments' ? 'text-[#011e41]' : 'text-slate-600'
              }`}
            >
              <span>Segmentos de Atuação</span>
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal transition-all duration-300 origin-center ${activeTab === 'segments' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>

            <button
              onClick={() => setActiveTab('materials')}
              className={`px-3.5 py-4 font-bold transition-all duration-200 whitespace-nowrap cursor-pointer hover:text-[#011e41] relative group ${
                activeTab === 'materials' ? 'text-[#011e41]' : 'text-slate-600'
              }`}
            >
              <span>Guia de Ligas Metálicas</span>
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal transition-all duration-300 origin-center ${activeTab === 'materials' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>

            <button
              onClick={() => setActiveTab('faq')}
              className={`px-3.5 py-4 font-bold transition-all duration-200 whitespace-nowrap cursor-pointer hover:text-[#011e41] relative group ${
                activeTab === 'faq' ? 'text-[#011e41]' : 'text-slate-600'
              }`}
            >
              <span>Dúvidas FAQ</span>
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-brand-teal transition-all duration-300 origin-center ${activeTab === 'faq' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </button>
          </div>

          {/* Right Direct Shortcut Links */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={() => {
                setActiveTab('catalog');
                setTimeout(() => {
                  const el = document.getElementById('download-catalog-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-3.5 py-1.5 bg-[#011e41] text-white hover:bg-brand-blue font-bold rounded-lg text-xs tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap"
            >
              Baixar Catálogo
            </button>
          </div>

        </div>
      </div>

    </header>
  );
}
