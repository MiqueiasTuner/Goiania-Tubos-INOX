import React, { useState } from 'react';
import { Building2, Mail, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Info } from 'lucide-react';
import { B2BUser } from '../types';

interface B2BLoginTabProps {
  onLogin: (user: B2BUser) => void;
  onBackToCatalog: () => void;
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

export default function B2BLoginTab({ onLogin, onBackToCatalog }: B2BLoginTabProps) {
  const [step, setStep] = useState<'email' | 'details'>('email');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [selectedUser, setSelectedUser] = useState<B2BUser | null>(null);

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 14) value = value.slice(0, 14);

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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Por favor, informe seu e-mail corporativo.');
      return;
    }

    // Check if the email matches a preset account
    const matchedPreset = PRESET_ACCOUNTS.find(p => p.email.toLowerCase() === email.toLowerCase().trim());
    if (matchedPreset) {
      executeLogin(matchedPreset);
    } else {
      // If it's a new email, transition to step 2 to input details
      setStep('details');
      setError('');
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cnpj.trim()) {
      setError('Por favor, digite o CNPJ da sua empresa.');
      return;
    }

    // Create custom user with input details
    const customUser: B2BUser = {
      companyName: companyName.trim() || 'Empresa Homologada GTI S/A',
      cnpj: cnpj,
      tradingName: companyName.trim() ? companyName.trim().split(' ')[0].toUpperCase() : email.split('@')[0].toUpperCase(),
      email: email.trim(),
      phone: '(62) 3000-0000',
      city: 'Goiânia',
      state: 'GO',
      discountRate: 10,
    };
    executeLogin(customUser);
  };

  const executeLogin = (user: B2BUser) => {
    setSelectedUser(user);
    setSuccess(true);
    setError('');
    setTimeout(() => {
      onLogin(user);
      setSuccess(false);
    }, 1500);
  };

  if (success && selectedUser) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6 animate-fade-in" id="login-success-view">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-sm animate-pulse">
          <CheckCircle2 className="w-12 h-12 stroke-[2]" />
        </div>
        <h3 className="font-display font-extrabold text-2xl text-slate-800 uppercase tracking-tight">Acesso Homologado!</h3>
        <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
          Sua empresa <strong className="text-slate-800">{selectedUser.companyName}</strong> foi identificada no Portal de Compras GTI. Redirecionando para o catálogo com faturamento faturado direto de fábrica ativo...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-[70vh] flex flex-col justify-start py-12 md:py-20" id="login-tab-container">
      <div className="max-w-2xl mx-auto px-6 w-full text-center space-y-8">
        
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="font-display font-extrabold text-2xl md:text-3xl text-[#011e41] tracking-tight">
            Boas-vindas ao GTI Portal de Compras
          </h1>
          <p className="text-xs md:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Deseja registrar suas cotações de tubos e conexões industriais, receber condições comerciais de fábrica ou solicitar suporte dedicado? Identifique sua empresa abaixo.
          </p>
        </div>

        {/* Action Form Card */}
        <div className="max-w-md mx-auto w-full text-left bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-200/60 shadow-xs">
          <h3 className="font-display font-bold text-sm text-slate-800 mb-6 uppercase tracking-wider pb-2 border-b border-slate-200">
            Identifique-se abaixo:
          </h3>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-700 text-xs font-semibold rounded-lg">
              {error}
            </div>
          )}

          {step === 'email' ? (
            <form onSubmit={handleEmailSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700" htmlFor="email-input">
                  E-mail Corporativo
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    id="email-input"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#011e41] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#011e41] hover:bg-brand-blue text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleDetailsSubmit} className="space-y-5 animate-fade-in">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  E-mail Informado
                </label>
                <div className="px-3.5 py-2.5 bg-slate-100 border border-slate-200 text-slate-500 rounded-lg text-xs font-semibold font-mono">
                  {email}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700" htmlFor="cnpj-input">
                  CNPJ da Empresa
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </span>
                  <input
                    id="cnpj-input"
                    type="text"
                    placeholder="00.000.000/0000-00"
                    value={cnpj}
                    onChange={handleCnpjChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#011e41] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700" htmlFor="company-name-input">
                  Razão Social / Nome Fantasia (Opcional)
                </label>
                <input
                  id="company-name-input"
                  type="text"
                  placeholder="Ex: Comercial Hidráulica Ltda"
                  value={companyName}
                  onChange={(e) => { setCompanyName(e.target.value); setError(''); }}
                  className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#011e41] transition-all"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => { setStep('email'); setError(''); }}
                  className="w-1/3 py-3 border border-slate-300 hover:bg-slate-50 text-slate-600 font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar</span>
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 bg-[#011e41] hover:bg-brand-blue text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Acessar Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* 1-Click Tester Accounts (highly user friendly) */}
        {step === 'email' && (
          <div className="max-w-md mx-auto w-full text-left space-y-3 pt-4 border-t border-slate-100">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Contas Homologadas para Teste (1-Clique)
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {PRESET_ACCOUNTS.map((account, idx) => (
                <button
                  key={idx}
                  onClick={() => executeLogin(account)}
                  className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-[#00a2a6] hover:bg-slate-50/50 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-[#00a2a6]/10 group-hover:text-[#00a2a6] transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 text-xs leading-none">
                        {account.tradingName} <span className="text-[10px] font-normal text-slate-400">({account.city}-{account.state})</span>
                      </h4>
                      <p className="text-[9px] text-slate-400 mt-1.5 font-mono">{account.email}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block bg-emerald-50 border border-emerald-100 text-emerald-600 font-extrabold text-[9px] px-2 py-0.5 rounded">
                      Ativa
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Back navigation */}
        <div className="max-w-md mx-auto w-full flex justify-start pt-6">
          <button
            onClick={onBackToCatalog}
            className="text-xs text-slate-500 hover:text-[#011e41] font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Catálogo</span>
          </button>
        </div>

      </div>
    </div>
  );
}
