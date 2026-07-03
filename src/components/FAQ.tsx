import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, FileText, ShieldAlert, Award } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'A Goiânia Tubos Inox fornece certificado de rastreabilidade (MTR)?',
    answer: 'Sim, absolutamente. Todos os nossos produtos em aço inoxidável (AISI 304 e 316) e aço carbono (ASTM A106/A53) acompanham os respectivos Certificados de Qualidade de Usina de origem, atestando a composição química detalhada, ensaios mecânicos, testes hidrostáticos e conformidade de normas internacionais.'
  },
  {
    question: 'Qual é o prazo médio de faturamento e despacho?',
    answer: 'Para materiais em estoque em nosso hub de Goiânia - GO, o despacho para transportadora ou entrega local ocorre em até 24 horas úteis após a confirmação do pedido de compra. Itens que necessitam de usinagem específica (como flanges furados sob encomenda ou cortes personalizados) têm prazos acordados previamente.'
  },
  {
    question: 'Vocês vendem barras fracionadas ou fazem cortes sob medida?',
    answer: 'Sim, realizamos cortes sob medida para facilitar o transporte e a montagem na sua planta. Você pode especificar o comprimento desejado (ex: barras cortadas em 3 metros) inserindo uma anotação no respectivo item do carrinho de cotação ou diretamente no atendimento do WhatsApp.'
  },
  {
    question: 'Quais são as condições de frete (FOB ou CIF)?',
    answer: 'Trabalhamos com ambas as modalidades. Para Goiânia e região metropolitana, oferecemos condições especiais de frete CIF. Para envios interestaduais, cotamos a modalidade que melhor atenda seu prazo e custo, ou despachamos através da transportadora de sua preferência (FOB).'
  },
  {
    question: 'Como funciona a aprovação de crédito para faturamento B2B?',
    answer: 'Para faturamento a prazo (boletos bancários de 14, 21, 28 ou 30/60 dias), solicitamos o envio do Cartão CNPJ atualizado, Ficha Cadastral e referências comerciais recentes. A análise de limite é realizada pelo nosso setor financeiro de forma ágil, permitindo faturar diretamente para sua empresa.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4" id="faq-section">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/5 border border-brand-blue/15 text-brand-blue rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Atendimento Facilitado</span>
        </div>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
          Dúvidas Frequentes de Compras
        </h2>
        <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto">
          Esclareça suas principais dúvidas sobre faturamento corporativo, rastreabilidade técnica e entregas.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="bg-white border border-slate-200/90 rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
              >
                <span className="font-display font-semibold text-sm sm:text-base text-slate-800 tracking-tight pr-4">
                  {item.question}
                </span>
                <span className="text-slate-400 shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              
              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Trust Callout */}
      <div className="mt-12 p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex gap-4 items-start text-left">
          <div className="p-3 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-lg shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-slate-100">Precisa de suporte em algum projeto?</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Nossa equipe técnica analisa sua planta ou planilha de conexões diretamente, garantindo especificações e poupando desperdícios de materiais.
            </p>
          </div>
        </div>
        <a 
          href="https://wa.me/5562998517536"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-3 bg-brand-teal hover:bg-brand-teal-dark font-bold text-xs tracking-wider uppercase text-white rounded-lg transition-colors whitespace-nowrap active:scale-95 cursor-pointer"
        >
          Falar com Especialista
        </a>
      </div>
    </div>
  );
}
