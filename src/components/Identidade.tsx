import React from 'react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';

export default function Identidade() {
  const { lang } = useLanguage();

  const content = {
    pt: {
      tag: 'Nossa Essência',
      title: 'Identidade Corporativa',
      subtitle: 'Diretrizes estratégicas que guiam nossas decisões e constroem o futuro da Goiânia Tubos Inox.',
      missionTitle: 'Missão',
      missionText: 'Fortalecer soluções industriais com um amplo mix de produtos, priorizando agilidade, qualidade, segurança e bem estar das pessoas.',
      visionTitle: 'Visão',
      visionText: 'Ser referência nacional em soluções industriais, com excelência no atendimento, logística eficiente e compromisso sustentável.',
      valuesTitle: 'Valores',
      valuesList: [
        'Honestidade, ética e transparência',
        'Lucro sustentável',
        'Foco no cliente',
        'Relação de confiança'
      ]
    },
    en: {
      tag: 'Our Essence',
      title: 'Corporate Identity',
      subtitle: 'Strategic guidelines that guide our decisions and build the future of Goiânia Tubos Inox.',
      missionTitle: 'Mission',
      missionText: 'Strengthen industrial solutions with a wide product mix, prioritizing agility, quality, safety, and people\'s well-being.',
      visionTitle: 'Vision',
      visionText: 'To be a national reference in industrial solutions, with excellence in service, efficient logistics, and a sustainable commitment.',
      valuesTitle: 'Values',
      valuesList: [
        'Honesty, ethics and transparency',
        'Sustainable profit',
        'Customer focus',
        'Relationship of trust'
      ]
    },
    es: {
      tag: 'Nuestra Esencia',
      title: 'Identidad Corporativa',
      subtitle: 'Lineamientos estratégicos que guían nuestras decisiones y construyen el futuro de Goiânia Tubos Inox.',
      missionTitle: 'Misión',
      missionText: 'Fortalecer soluciones industriales con un amplio mix de productos, priorizando agilidad, calidad, seguridad y bienestar de las personas.',
      visionTitle: 'Visión',
      visionText: 'Ser referencia nacional en soluciones industriales, con excelencia en la atención, logística eficiente y compromiso sostenible.',
      valuesTitle: 'Valores',
      valuesList: [
        'Honestidad, ética y transparencia',
        'Beneficio sostenible',
        'Enfoque en el cliente',
        'Relación de confianza'
      ]
    }
  };

  const current = content[lang as 'pt' | 'en' | 'es'] || content.pt;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section className="py-16 bg-slate-900 border-t border-slate-800 relative overflow-hidden" id="identity-section">
      {/* Decorative vector background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#00a2a6 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>
      <div className="absolute -left-64 -top-64 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -right-64 -bottom-64 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-teal/10 border border-brand-teal/30 text-brand-teal-light rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
          <Heart className="w-3.5 h-3.5" />
          <span>{current.tag}</span>
        </div>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
          {current.title}
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-3 max-w-2xl mx-auto leading-relaxed">
          {current.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          {/* MISSION CARD */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-slate-900/50 border border-slate-700/40 rounded-2xl p-6 sm:p-8 hover:border-brand-teal/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-teal/5 flex flex-col h-full group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal-light mb-5 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">
              {current.missionTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {current.missionText}
            </p>
          </motion.div>

          {/* VISION CARD */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-slate-900/50 border border-slate-700/40 rounded-2xl p-6 sm:p-8 hover:border-brand-teal/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-teal/5 flex flex-col h-full group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal-light mb-5 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">
              {current.visionTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {current.visionText}
            </p>
          </motion.div>

          {/* VALUES CARD */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-slate-900/50 border border-slate-700/40 rounded-2xl p-6 sm:p-8 hover:border-brand-teal/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-teal/5 flex flex-col h-full group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center text-brand-teal-light mb-5 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">
              {current.valuesTitle}
            </h3>
            <ul className="space-y-2.5 text-slate-300 text-sm">
              {current.valuesList.map((val, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0"></span>
                  <span>{val}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
