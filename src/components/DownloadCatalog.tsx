import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Building, Mail, Sparkles, PhoneCall } from 'lucide-react';

export default function DownloadCatalog() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !company) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      
      // Simulate file download
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'catalogo_goiania_tubos_2026.pdf');
      document.body.appendChild(link);
      // We don't trigger real download since it's a mockup, but we tell the user.
    }, 1200);
  };

  return (
    <section className="bg-slate-50 py-16 border-t border-slate-200/60" id="download-catalog-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Block: Content description */}
          <div className="md:col-span-7 bg-gradient-to-br from-[#011e41] to-[#0a3568] p-8 sm:p-12 text-white flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-teal/20 text-brand-teal-light rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 border border-brand-teal/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Edição Industrial Atualizada 2026</span>
              </div>
              
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight mb-4">
                Baixe Nosso Catálogo Técnico Completo
              </h3>
              
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6">
                Tenha acesso instantâneo a todas as tabelas de diâmetros, pesos teóricos de tubos de inox, curvas de pressão de conexões e especificações técnicas de flanges e válvulas industriais.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <FileText className="w-4 h-4 text-brand-teal" />
                  <span>Tabela de Diâmetro Nominal (Schedule / OD)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <FileText className="w-4 h-4 text-brand-teal" />
                  <span>Guia de Compatibilidade Química de Ligas</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <FileText className="w-4 h-4 text-brand-teal" />
                  <span>Dimensões de Flanges ANSI/ASME e DIN</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/60 text-[10px] text-slate-400 font-medium">
              Goiânia Tubos Inox LTDA © Todos os direitos reservados.
            </div>
          </div>

          {/* Right Block: Interactive Lead Form */}
          <div className="md:col-span-5 p-8 sm:p-12 flex flex-col justify-center bg-white text-left">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h4 className="font-display font-bold text-[#011e41] text-base">Receber por E-mail</h4>
                  <p className="text-xs text-slate-400 mt-1">Preencha os dados da sua empresa para liberar o PDF.</p>
                </div>

                {/* Company field */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Nome da Empresa
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <Building className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Petroquímica S.A."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal placeholder:text-slate-400 transition-all bg-slate-50"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    E-mail Corporativo
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="compras@suaempresa.com.br"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal placeholder:text-slate-400 transition-all bg-slate-50"
                    />
                  </div>
                </div>

                {/* Phone field (optional) */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    WhatsApp para Contato
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                      <PhoneCall className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="(62) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-teal placeholder:text-slate-400 transition-all bg-slate-50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3 bg-brand-teal hover:bg-brand-teal-dark disabled:bg-slate-300 text-white font-bold text-xs rounded-xl shadow-lg shadow-brand-teal/15 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  <span>{loading ? 'Preparando arquivo...' : 'Baixar Catálogo Técnico'}</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-6 animate-fade-in">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-slate-800 text-base">Solicitação Recebida!</h4>
                <p className="text-xs text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
                  O download do catálogo para a empresa <strong className="text-slate-700">{company}</strong> foi liberado e também enviamos uma cópia de segurança para o e-mail <strong className="text-slate-700">{email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail('');
                    setCompany('');
                    setPhone('');
                  }}
                  className="mt-6 text-xs font-semibold text-brand-teal hover:text-brand-teal-dark underline transition-all"
                >
                  Baixar novamente ou com outro e-mail
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
