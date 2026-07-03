import React, { useState } from 'react';
import { X, ShieldCheck, Building2, Mail, Lock, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { B2BUser } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: B2BUser) => void;
  userEmailFromMetadata?: string;
}

const PRESET_ACCOUNTS: B2BUser[] = [
  {
    companyName: 'Laboratório Teuto Brasileiro S/A',
    cnpj: '17.159.229/0001-76',
    tradingName: 'Teuto Farma',
    email: 'compras.teuto@teutobras.com.br',
    phone: '(62) 3331-1000',
    city: 'Anápolis',
    state: 'GO',
    discountRate: 15,
  },
  {
    companyName: 'Cargill Agrícola S.A.',
    cnpj: '60.498.706/0001-57',
    tradingName: 'Cargill Alimentos',
    email: 'suprimentos@cargill.com',
    phone: '(62) 3220-4100',
    city: 'Goiânia',
    state: 'GO',
    discountRate: 12,
  },
  {
    companyName: 'Miqueias Distribuidora de Inox Ltda',
    cnpj: '42.109.553/0001-08',
    tradingName: 'Miqueias Inox',
    email: 'miqueiasyout@gmail.com',
    phone: '(62) 99851-7536',
    city: 'Goiânia',
    state: 'GO',
    discountRate: 18,
  }
];

export default function LoginModal({ isOpen, onClose, onLogin, userEmailFromMetadata }: LoginModalProps) {
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  // Format CNPJ helper
  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 14) value = value.slice(0, 14);

    // Apply formatting: 00.000.000/0000-00
    if (value.length > 12) {
      value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8, 12)}-${value.slice(12)}`;
    } else if (value.length > 8) {
      value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5, 8)}/${value.slice(8)}`;
    } else if (value.length > 5) {
      value = `${value.slice(0, 2)}.${value.slice(2, 5)}.${value.slice(5)}`;
    } else if (value.length > 2) {
      value = `${value.slice(0, 2)}.${value.slice(2)}`;
    }

    setCnpj(value);
    setError('');
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cnpj || !email || !password) {
      setError('Por favor, preencha todos os campos corporativos.');
      return;
    }

    // Simulate validation or match preset if they typed the preset's email
    const cleanCnpj = cnpj.replace(/\D/g, '');
    const foundPreset = PRESET_ACCOUNTS.find(
      p => p.email.toLowerCase() === email.toLowerCase() || p.cnpj.replace(/\D/g, '') === cleanCnpj
    );

    if (foundPreset) {
      executeLogin(foundPreset);
    } else {
      // Generate a new temporary custom account based on what they typed!
      const customUser: B2BUser = {
        companyName: 'Empresa Homologada GTI S/A',
        cnpj: cnpj,
        tradingName: email.split('@')[0].toUpperCase(),
        email: email,
        phone: '(62) 3000-0000',
        city: 'Goiânia',
        state: 'GO',
        discountRate: 10, // Default 10% discount for registered new partners
      };
      executeLogin(customUser);
    }
  };

  const executeLogin = (user: B2BUser) => {
    setSuccess(true);
    setTimeout(() => {
      onLogin(user);
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs" id="login-modal-overlay">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-left animate-fade-in" id="login-modal-box">
        
        {/* Modal Header */}
        <div className="bg-[#011e41] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-brand-teal/20 text-brand-teal rounded-lg border border-brand-teal/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-widest text-brand-teal uppercase block">Portal do Distribuidor</span>
              <h3 className="font-display font-extrabold text-lg text-white">Sistemática de Login B2B</h3>
            </div>
          </div>
          <p className="text-slate-300 text-xs mt-2 leading-relaxed">
            Faça login com seu CNPJ homologado para liberar a precificação especial e faturamento direto de fábrica (Faturado B2B).
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {success ? (
            <div className="text-center py-8 space-y-3 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-sm animate-pulse">
                <CheckCircle2 className="w-10 h-10 stroke-[2]" />
              </div>
              <h4 className="font-display font-extrabold text-base text-slate-800">Acesso Homologado!</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Sua empresa foi validada nos servidores da Goiânia Tubos Inox. Habilitando condições comerciais de fábrica para o catálogo...
              </p>
            </div>
          ) : (
            <>
              {error && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-700 text-xs font-semibold rounded-lg">
                  {error}
                </div>
              )}

              {/* Quick Preset Accounts Selection */}
              <div className="space-y-3">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Contas de Teste Homologadas (1-Clique)
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {PRESET_ACCOUNTS.map((account, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => executeLogin(account)}
                      className="w-full text-left p-3 rounded-xl border border-slate-200/80 hover:border-brand-teal/50 hover:bg-slate-50/50 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-700 text-xs leading-none">
                            {account.tradingName} <span className="text-[10px] font-normal text-slate-400">({account.city}-{account.state})</span>
                          </h5>
                          <p className="text-[10px] text-slate-400 mt-1 font-mono">{account.cnpj}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold text-[10px] px-2.5 py-0.5 rounded">
                          Tabela Fábrica
                        </span>
                        <span className="block text-[8px] text-slate-400 mt-0.5 font-semibold group-hover:text-brand-teal transition-colors">Acessar</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-100"></div>
                <span className="flex-shrink mx-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ou digite suas credenciais</span>
                <div className="flex-grow border-t border-slate-100"></div>
              </div>

              {/* Form */}
              <form onSubmit={handleManualSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">CNPJ da Empresa</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      placeholder="00.000.000/0000-00"
                      value={cnpj}
                      onChange={handleCnpjChange}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-brand-teal text-slate-800 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">E-mail Corporativo</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      placeholder="compras@suaempresa.com.br"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError(''); }}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-brand-teal text-slate-800 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Código de Acesso Corporativo / Senha</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => { setPassword(e.target.value); setError(''); }}
                      className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-brand-teal text-slate-800 bg-slate-50 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-brand-teal hover:bg-brand-teal-dark text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Validar CNPJ e Entrar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Info Disclaimer */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 text-[11px] text-slate-500 leading-relaxed">
                <Info className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  Sua empresa ainda não possui cadastro de faturamento direto? Solicite a homologação enviando o cartão CNPJ no ato da primeira cotação.
                </span>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
