import React from 'react';
import { Phone, MapPin, Mail, Award, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (tab: 'catalog' | 'segments' | 'materials' | 'history' | 'faq') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo & Slogan */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Logo variant="light" showSubtitle={false} className="mb-4" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sua parceira estratégica em infraestrutura industrial. Fornecemos soluções completas de tubulação, conexões flangeadas, válvulas sanitárias e instrumentação com foco em eficiência, durabilidade e conformidade técnica rigorosa.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-slate-500 font-mono font-bold tracking-wider uppercase">Distribuição Express Nacional</span>
            </div>
          </div>

          {/* Useful Navigation Links */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-brand-teal pl-2.5">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-brand-teal transition-colors flex items-center gap-1 cursor-pointer">
                  <span>Catálogo de Produtos</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('segments')} className="hover:text-brand-teal transition-colors flex items-center gap-1 cursor-pointer">
                  <span>Segmentos Atendidos</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('materials')} className="hover:text-brand-teal transition-colors flex items-center gap-1 cursor-pointer">
                  <span>Guia de Metalurgia</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('history')} className="hover:text-brand-teal transition-colors flex items-center gap-1 cursor-pointer">
                  <span>Histórico de Orçamentos</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-brand-teal transition-colors flex items-center gap-1 cursor-pointer">
                  <span>Dúvidas e faturamento</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </button>
              </li>
            </ul>
          </div>

          {/* Segmentos atendidos */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-brand-teal pl-2.5">
              Setores Atendidos
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-400">Indústria Alimentícia & Laticínios</li>
              <li className="text-slate-400">Usinas Sucroenergéticas (Açúcar/Álcool)</li>
              <li className="text-slate-400">Caldeirarias & Estruturas Industriais</li>
              <li className="text-slate-400">Frigoríficos & Abatedouros</li>
              <li className="text-slate-400">Química, Petroquímica & Curtumes</li>
              <li className="text-slate-400">Refrigeração & Tratamento Térmico</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 border-l-2 border-brand-teal pl-2.5">
              Sede e Contato
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">
                  Setor Central / Industrial,<br />
                  Goiânia - GO, CEP 74000-000
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <a href="https://wa.me/5562998517536" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-brand-teal transition-colors font-semibold">
                  (62) 99851-7536
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <span className="text-slate-400">comercial@goianiatubos.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal area */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
            <span>© 2026 Goiânia Tubos Inox. Todos os direitos reservados.</span>
            <span className="hidden md:inline">|</span>
            <span>CNPJ: 12.345.678/0001-90 | Goiânia Tubos Inox LTDA</span>
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            <Award className="w-3.5 h-3.5 text-brand-teal" />
            <span>Qualidade Rastreável Conforme ASTM & NBR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
