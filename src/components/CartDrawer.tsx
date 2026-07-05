import React, { useState, useEffect } from 'react';
import { CartItem, QuoteRequest, B2BUser } from '../types';
import { X, Trash2, Send, Phone, ClipboardCheck, ArrowRight, MapPin, Building, User, Calendar, Plus, Minus, ShieldCheck, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { generateQuotePDF } from '../utils/pdfGenerator';
import ProductThumbnail from './ProductThumbnail';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onSaveQuoteToHistory: (quote: QuoteRequest) => void;
  currentUser?: B2BUser | null;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onSaveQuoteToHistory,
  currentUser = null
}: CartDrawerProps) {
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [city, setCity] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync state when currentUser login updates
  useEffect(() => {
    if (currentUser) {
      setClientName(currentUser.tradingName);
      setClientCompany(currentUser.companyName);
      setClientPhone(currentUser.phone);
      setCity(`${currentUser.city} - ${currentUser.state}`);
    } else {
      setClientName('');
      setClientCompany('');
      setClientPhone('');
      setCity('');
    }
  }, [currentUser]);

  // Controlled internally with CSS visibility and slide animation to preserve states

  // Build the WhatsApp formatted message URL
  const handleSendQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (cartItems.length === 0) {
      setErrorMsg('Seu carrinho está vazio.');
      return;
    }

    if (!clientName || !clientPhone || !city) {
      setErrorMsg('Por favor, preencha os campos obrigatórios: Nome, WhatsApp e Cidade/UF.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Generate Quote ID
      const quoteId = 'GTI-' + Math.floor(100000 + Math.random() * 900000);

      // 1. Generate and Download PDF first
      await generateQuotePDF(quoteId, cartItems, {
        name: clientName,
        company: clientCompany,
        phone: clientPhone,
        city,
        notes: generalNotes || undefined
      });

      // 2. Build text message for WhatsApp
      let text = `*SOLICITAÇÃO DE ORÇAMENTO - GOIÂNIA TUBOS INOX*\n`;
      text += `_Gerado via B2B Marketplace (PDF Gerado com sucesso!)_\n`;
      text += `===================================\n\n`;
      text += `*DADOS DO SOLICITANTE*\n`;
      text += `• *Nome:* ${clientName}\n`;
      if (clientCompany.trim()) text += `• *Empresa:* ${clientCompany}\n`;
      text += `• *WhatsApp:* ${clientPhone}\n`;
      text += `• *Cidade/UF:* ${city}\n\n`;
      
      text += `*ITENS DO PEDIDO*\n`;
      cartItems.forEach((item, index) => {
        text += `${index + 1}) *${item.product.name}*\n`;
        text += `   - *Qtd:* ${item.quantity} ${item.product.unit || 'UN'}(s)\n`;
        text += `   - *Bitola:* ${item.selectedSize}\n`;
        text += `   - *Material/Liga:* ${item.selectedMaterial}\n`;
        if (item.selectedPressureClass) {
          text += `   - *Classe/Espessura:* ${item.selectedPressureClass}\n`;
        }
        if (item.notes) {
          text += `   - *Obs:* _"${item.notes}"_\n`;
        }
        text += `\n`;
      });

      if (generalNotes.trim()) {
        text += `*OBSERVAÇÕES GERAIS*\n`;
        text += `_"${generalNotes}"_\n\n`;
      }

      text += `===================================\n`;
      text += `_Enviei também o PDF Corporativo de especificações gerado pelo portal GTI. Por favor, enviar cotação formal com prazos de entrega e frete FOB/CIF._`;

      // 3. Encode to URI
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5562998517536?text=${encodedText}`;

      // 4. Create Quote object for history
      const newQuote: QuoteRequest = {
        id: quoteId,
        date: new Date().toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        items: [...cartItems],
        clientName,
        clientCompany,
        clientPhone,
        city,
        notes: generalNotes || undefined,
        status: 'Pendente'
      };

      // Save to history list
      onSaveQuoteToHistory(newQuote);

      // 5. Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // Clear the cart & close
      onClearCart();
      onClose();
    } catch (err) {
      console.error(err);
      setErrorMsg('Falha ao gerar o PDF corporativo ou ao redirecionar para o WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} id="cart-drawer-overlay">
      <div 
        className={`absolute inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      ></div>
      
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10" id="cart-drawer-container">
        <motion.div 
          animate={isOpen ? { x: 0 } : { x: '100%' }}
          initial={{ x: '100%' }}
          transition={{ type: 'spring', damping: 26, stiffness: 220 }}
          className="w-screen max-w-lg bg-white shadow-2xl flex flex-col h-full border-l border-slate-200 pointer-events-auto relative"
        >
          {/* Submitting PDF Overlay */}
          {isSubmitting && (
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex flex-col items-center justify-center p-6 text-center text-white animate-fade-in" id="pdf-generating-overlay">
              <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 border-4 border-brand-teal/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-t-brand-teal rounded-full animate-spin"></div>
                <FileText className="w-5 h-5 text-brand-teal animate-pulse" />
              </div>
              <h3 className="font-display font-bold text-base mb-1.5">Gerando PDF do Orçamento...</h3>
              <p className="text-[11px] text-slate-300 max-w-xs leading-relaxed">
                Estamos montando um PDF personalizado com a logo da Goiânia Tubos Inox e suas especificações de forma 100% segura. O arquivo será baixado e o WhatsApp abrirá logo em seguida!
              </p>
            </div>
          )}
          
          {/* Header */}
          <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-brand-teal" />
              <div>
                <h2 className="font-display font-bold text-base">Carrinho de Cotação</h2>
                <p className="text-[10px] text-slate-400">Monte seu lote e solicite via WhatsApp</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 -mr-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="bg-rose-50 text-rose-700 text-xs font-semibold p-4 border-b border-rose-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* B2B Active Session Banner */}
          {currentUser && (
            <div className="bg-emerald-50 border-b border-emerald-100 p-4 flex items-start gap-3 text-xs text-emerald-800 animate-fade-in" id="b2b-active-banner">
              <ShieldCheck className="w-5.5 h-5.5 text-emerald-600 shrink-0 mt-0.5 animate-pulse" />
              <div>
                <span className="font-extrabold block text-slate-800">Homologação B2B Ativa (Tabela de Fábrica)</span>
                <p className="text-[11px] text-emerald-700 mt-1 leading-relaxed">
                  Sua empresa <strong className="font-bold text-slate-900">{currentUser.companyName}</strong> está autorizada para faturamento faturado direto de fábrica.
                </p>
              </div>
            </div>
          )}

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Selected Items */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider">
                  Especificações Solicitadas ({cartItems.length})
                </h3>
                {cartItems.length > 0 && (
                  <button 
                    onClick={onClearCart}
                    className="text-xs text-rose-500 hover:text-rose-700 font-semibold cursor-pointer"
                  >
                    Esvaziar
                  </button>
                )}
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
                  <ClipboardCheck className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm text-slate-500 font-medium">Nenhum produto selecionado</p>
                  <p className="text-xs text-slate-400 mt-1">Navegue pelo catálogo e configure suas especificações.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div 
                      key={item.id}
                      className="p-4 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-all flex items-start justify-between gap-4"
                      id={`cart-item-${item.id}`}
                    >
                      <ProductThumbnail 
                        image={item.product.image}
                        name={item.product.name}
                        category={item.product.category}
                        productId={item.product.id}
                        size="md"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded font-mono bg-slate-200 text-slate-700 uppercase">
                            {item.product.standard || 'GTI'}
                          </span>
                          <span className="text-[10px] text-brand-teal font-semibold">
                            {item.selectedMaterial}
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-sm text-slate-800 tracking-tight leading-tight mb-1">
                          {item.product.name}
                        </h4>

                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500 font-medium font-mono mt-2">
                          <span className="bg-slate-200/50 px-1.5 py-0.5 rounded text-slate-600">
                            Diâmetro: {item.selectedSize}
                          </span>
                          {item.selectedPressureClass && (
                            <span className="bg-slate-200/50 px-1.5 py-0.5 rounded text-slate-600">
                              Parede: {item.selectedPressureClass}
                            </span>
                          )}
                        </div>

                        {item.notes && (
                          <div className="mt-2 text-[10px] bg-brand-teal/5 border border-brand-teal/10 p-1.5 rounded text-brand-teal-dark font-medium italic">
                            Nota: "{item.notes}"
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-end justify-between h-full gap-4">
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-400 hover:text-rose-500 p-1 rounded-sm hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Remover Item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                        <div className="flex items-center border border-slate-300 rounded overflow-hidden bg-white h-6 text-xs">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-1.5 text-slate-500 hover:bg-slate-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-bold font-mono text-slate-800 min-w-8 text-center bg-slate-50">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-1.5 text-slate-500 hover:bg-slate-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Client Info Form */}
            {cartItems.length > 0 && (
              <form onSubmit={handleSendQuote} className="space-y-4 pt-6 border-t border-slate-200">
                <h3 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wider mb-2">
                  Dados de Contato & Logística (Obrigatório)
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Seu Nome Completo *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: Carlos Oliveira"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white rounded-lg text-xs py-2.5 px-3 focus:outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Empresa / Razão Social <span className="text-slate-400 text-[10px] font-normal">(Opcional)</span></span>
                  </label>
                  <input
                    type="text"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                    placeholder="Ex: Usina Ouro Verde S/A"
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white rounded-lg text-xs py-2.5 px-3 focus:outline-none transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-brand-teal" />
                      <span>WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="Ex: (62) 99851-7536"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white rounded-lg text-xs py-2.5 px-3 focus:outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                      <span>Cidade e Estado *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Goiânia - GO"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white rounded-lg text-xs py-2.5 px-3 focus:outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Observações Adicionais para a Proposta
                  </label>
                  <textarea
                    value={generalNotes}
                    onChange={(e) => setGeneralNotes(e.target.value)}
                    placeholder="Ex: Preciso de frete CIF para Anápolis. Solicito certificados de corrida anexados."
                    rows={3}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white rounded-lg text-xs py-2.5 px-3 focus:outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
                  ></textarea>
                </div>
              </form>
            )}
          </div>

          {/* Footer Action */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-200 bg-slate-50">
              <div className="mb-4 flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-500">Resumo do lote:</span>
                <span className="font-bold font-mono text-slate-800 text-sm">{cartItems.length} especificações</span>
              </div>
              
              <button
                onClick={handleSendQuote}
                disabled={isSubmitting || !clientName || !clientPhone || !city}
                className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue-dark disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold rounded-lg text-sm transition-all shadow-lg shadow-brand-blue/15 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                id="send-whatsapp-quote-btn"
              >
                <Send className="w-4 h-4" />
                <span>Solicitar Orçamento via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2.5">
                Você será redirecionado para o WhatsApp para formalizar seu lote com um de nossos consultores.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
