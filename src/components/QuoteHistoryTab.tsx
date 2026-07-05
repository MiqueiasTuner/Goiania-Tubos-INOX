import React, { useState } from 'react';
import { QuoteRequest, CartItem } from '../types';
import { Calendar, User, Building, MapPin, ClipboardList, Send, Phone, ArrowUpRight, CheckCircle, Clock } from 'lucide-react';
import ProductThumbnail from './ProductThumbnail';

interface QuoteHistoryTabProps {
  quoteHistory: QuoteRequest[];
  onReaddAllToCart: (items: CartItem[]) => void;
  onClearHistory: () => void;
}

export default function QuoteHistoryTab({ quoteHistory, onReaddAllToCart, onClearHistory }: QuoteHistoryTabProps) {
  const [expandedQuoteId, setExpandedQuoteId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedQuoteId(expandedQuoteId === id ? null : id);
  };

  const generateWhatsAppUrl = (quote: QuoteRequest) => {
    let text = `*SOLICITAÇÃO DE ORÇAMENTO RECURRENTE - GOIÂNIA TUBOS INOX*\n`;
    text += `_Referência Cotação ID: ${quote.id}_\n`;
    text += `===================================\n\n`;
    text += `*DADOS DO SOLICITANTE*\n`;
    text += `• *Nome:* ${quote.clientName}\n`;
    if (quote.clientCompany) text += `• *Empresa:* ${quote.clientCompany}\n`;
    text += `• *WhatsApp:* ${quote.clientPhone}\n`;
    text += `• *Cidade/UF:* ${quote.city}\n\n`;
    
    text += `*ITENS DO PEDIDO*\n`;
    quote.items.forEach((item, index) => {
      text += `${index + 1}) *${item.product.name}*\n`;
      text += `   - *Qtd:* ${item.quantity} ${item.product.unit}(s)\n`;
      text += `   - *Bitola:* ${item.selectedSize}\n`;
      text += `   - *Material/Liga:* ${item.selectedMaterial}\n`;
      if (item.selectedPressureClass) {
        text += `   - *Classe/Espessura:* ${item.selectedPressureClass}\n`;
      }
      if (item.notes) {
        text += `   - *Obs:* _"${item.notes}"_\n`;
      }
      text += '\n';
    });

    text += `===================================\n`;
    text += `_Solicitado novamente via GTI B2B Histórico._`;

    const encodedText = encodeURIComponent(text);
    return `https://wa.me/5562998517536?text=${encodedText}`;
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8" id="quote-history-tab">
      
      {/* Intro */}
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          Suas Cotações Salvas
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
          Gerencie e consulte o histórico de cotações que você gerou nesta máquina. Re-solicite orçamentos ou recarregue os lotes para o seu carrinho de compras atual de forma rápida.
        </p>
      </div>

      {quoteHistory.length === 0 ? (
        <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl max-w-xl mx-auto p-8 shadow-xs">
          <ClipboardList className="w-14 h-14 text-slate-300 mx-auto mb-4" />
          <h3 className="font-display font-bold text-lg text-slate-800">Sem histórico disponível</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            As cotações que você enviar para o WhatsApp comercial serão salvas aqui localmente para consulta técnica e re-encomenda automatizada.
          </p>
        </div>
      ) : (
        <div className="space-y-4 text-left">
          
          <div className="flex justify-between items-center mb-2 px-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Cotações Salvas Localmente ({quoteHistory.length})
            </span>
            <button
              onClick={onClearHistory}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold underline cursor-pointer"
            >
              Apagar Histórico
            </button>
          </div>

          <div className="space-y-3">
            {quoteHistory.map((quote) => {
              const isExpanded = expandedQuoteId === quote.id;
              
              return (
                <div 
                  key={quote.id}
                  className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs transition-all duration-200 overflow-hidden"
                  id={`quote-history-card-${quote.id}`}
                >
                  
                  {/* Summary row */}
                  <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono text-brand-blue bg-brand-blue/5 border border-brand-blue/15 px-2 py-0.5 rounded">
                          {quote.id}
                        </span>
                        <span className="text-xs text-slate-500 font-medium font-mono flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {quote.date}
                        </span>
                      </div>
                      
                      {/* Client meta details */}
                      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-600 font-semibold mt-3">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-brand-teal" />
                          {quote.clientName}
                        </span>
                        {quote.clientCompany && (
                          <span className="flex items-center gap-1 text-slate-500">
                            <Building className="w-3.5 h-3.5 text-brand-teal" />
                            {quote.clientCompany}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                          {quote.city}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 self-start md:self-center">
                      <span className="text-xs text-slate-500 font-bold bg-slate-200 px-2.5 py-1 rounded-full font-mono">
                        {quote.items.length} item(s)
                      </span>
                      
                      <span className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 font-bold px-2.5 py-1 rounded-full flex items-center gap-1 font-mono uppercase">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                        Disparado
                      </span>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-4 border-t border-slate-100 flex flex-wrap gap-3 bg-white justify-between items-center">
                    <button
                      onClick={() => toggleExpand(quote.id)}
                      className="text-xs font-semibold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1 cursor-pointer"
                    >
                      {isExpanded ? 'Ocultar Itens' : 'Visualizar Itens da Cotação'}
                    </button>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onReaddAllToCart(quote.items)}
                        className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                        title="Recarrega todos os produtos no carrinho atual"
                      >
                        Re-adicionar ao Carrinho
                      </button>

                      <a
                        href={generateWhatsAppUrl(quote)}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 shadow-xs"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Re-enviar WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Expanded Items Box */}
                  {isExpanded && (
                    <div className="p-5 border-t border-slate-100 bg-slate-50 text-left">
                      <h4 className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 mb-3">
                        Especificações Técnicas Incluídas
                      </h4>
                      <div className="space-y-2">
                        {quote.items.map((item, idx) => (
                          <div 
                            key={idx}
                            className="p-3 bg-white border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                          >
                            <div className="flex items-start sm:items-center gap-3 flex-1">
                              <ProductThumbnail 
                                image={item.product.image}
                                name={item.product.name}
                                category={item.product.category}
                                productId={item.product.id}
                                size="sm"
                              />
                              <div>
                                <span className="text-[10px] font-bold px-1.5 py-0.5 font-mono bg-slate-100 text-slate-500 rounded uppercase mr-2">
                                  {item.product.standard || 'GTI'}
                                </span>
                                <strong className="text-slate-800 font-display">{item.product.name}</strong>
                                <div className="flex flex-wrap gap-3 text-[10px] text-slate-500 font-mono mt-1">
                                  <span>Liga: {item.selectedMaterial}</span>
                                  <span>Bitola: {item.selectedSize}</span>
                                  {item.selectedPressureClass && <span>Parede: {item.selectedPressureClass}</span>}
                                </div>
                                {item.notes && (
                                  <p className="text-[10px] text-brand-teal-dark bg-brand-teal/5 px-2 py-1 rounded font-medium mt-1 inline-block">
                                    Nota: "{item.notes}"
                                  </p>
                                )}
                              </div>
                            </div>
                            
                            <div className="font-mono text-right shrink-0">
                              <span className="font-bold text-slate-700">Qtd: {item.quantity} {item.product.unit}(s)</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {quote.notes && (
                        <div className="mt-4 p-3 bg-slate-100 border border-slate-200 rounded-lg text-xs">
                          <strong className="text-slate-500 block mb-1 font-sans">Notas Gerais anexadas à proposta:</strong>
                          <span className="text-slate-600 font-medium font-mono italic">"{quote.notes}"</span>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
}
