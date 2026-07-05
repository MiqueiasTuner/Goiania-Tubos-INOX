import React, { useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { Plus, Minus, Check, Clipboard, Info, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  onAddToCart: (item: Omit<CartItem, 'id'>) => void;
  onViewSpecs: (product: Product) => void;
  defaultMaterial?: string;
}

// Product illustration/SVG fallback logic is maintained below

export default function ProductCard({ product, onAddToCart, onViewSpecs, defaultMaterial }: ProductCardProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<string>(product.materials[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [selectedPressureClass, setSelectedPressureClass] = useState<string>(
    product.pressureClasses ? product.pressureClasses[0] : ''
  );

  // Synchronize with global alloy filter selection ("salvar a liga")
  useEffect(() => {
    if (defaultMaterial && defaultMaterial !== 'all') {
      const matchWord = defaultMaterial === 'Inox 304' ? '304' :
                        defaultMaterial === 'Inox 316' ? '316' :
                        defaultMaterial === 'Carbono' ? 'carbono' :
                        defaultMaterial === 'Galvanizado' ? 'galvanizado' : '';
      
      if (matchWord) {
        const matched = product.materials.find(m => m.toLowerCase().includes(matchWord.toLowerCase()));
        if (matched) {
          setSelectedMaterial(matched);
        }
      }
    }
  }, [defaultMaterial, product.materials]);
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  // Handle addition to cart
  const handleAdd = () => {
    onAddToCart({
      product,
      selectedMaterial,
      selectedSize,
      selectedPressureClass: selectedPressureClass || undefined,
      quantity,
      notes: notes.trim() ? notes : undefined,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Render Category-Specific Custom SVG Technical Illustration
  const renderProductIllustration = () => {
    switch (product.category) {
      case 'tubos':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            <defs>
              <linearGradient id="metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
            {/* Outer pipe */}
            <path d="M 20,40 L 100,40 C 105,40 105,80 100,80 L 20,80" strokeWidth="2" stroke="url(#metallic)" />
            {/* Inner highlights */}
            <line x1="20" y1="50" x2="98" y2="50" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="20" y1="60" x2="95" y2="60" stroke="#64748b" strokeWidth="1.5" />
            <line x1="20" y1="70" x2="98" y2="70" stroke="#334155" strokeWidth="1" />
            {/* Pipe Left Opening Oval */}
            <ellipse cx="20" cy="60" rx="6" ry="20" fill="#475569" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="20" cy="60" rx="3" ry="12" fill="#1e293b" />
            {/* Dimension guide */}
            <path d="M 20,95 L 100,95" stroke="#00a2a6" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 20,90 L 20,100 M 100,90 L 100,100" stroke="#00a2a6" strokeWidth="1" />
            <text x="60" y="110" fill="#00a2a6" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono, monospace">
              L = 6.000mm
            </text>
          </svg>
        );
      case 'conexoes':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {/* Flange or Curved elbow drawing */}
            {product.id.includes('flange') ? (
              <g>
                <circle cx="60" cy="60" r="40" stroke="#64748b" strokeWidth="4" />
                <circle cx="60" cy="60" r="22" stroke="#475569" strokeWidth="2" />
                <circle cx="60" cy="60" r="16" fill="#1e293b" />
                {/* Bolt Holes */}
                <circle cx="60" cy="30" r="3" fill="#cbd5e1" />
                <circle cx="60" cy="90" r="3" fill="#cbd5e1" />
                <circle cx="30" cy="60" r="3" fill="#cbd5e1" />
                <circle cx="90" cy="60" r="3" fill="#cbd5e1" />
                <circle cx="38" cy="38" r="3" fill="#cbd5e1" />
                <circle cx="82" cy="82" r="3" fill="#cbd5e1" />
                <circle cx="38" cy="82" r="3" fill="#cbd5e1" />
                <circle cx="82" cy="38" r="3" fill="#cbd5e1" />
              </g>
            ) : (
              <g>
                {/* Elbow Curva 90 */}
                <path d="M 30,85 A 55,55 0 0,1 85,30" stroke="#64748b" strokeWidth="16" strokeLinecap="square" />
                <path d="M 30,85 A 55,55 0 0,1 85,30" stroke="#94a3b8" strokeWidth="8" strokeLinecap="square" />
                {/* Connector Ring Left */}
                <ellipse cx="30" cy="85" rx="3" ry="12" fill="#334155" stroke="#cbd5e1" />
                {/* Connector Ring Top */}
                <ellipse cx="85" cy="30" rx="12" ry="3" fill="#334155" stroke="#cbd5e1" />
              </g>
            )}
          </svg>
        );
      case 'valvulas':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {/* Valve Body */}
            <rect x="35" y="45" width="50" height="30" rx="5" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
            {/* Pipe connections */}
            <rect x="20" y="48" width="15" height="24" rx="2" fill="#334155" stroke="#cbd5e1" />
            <rect x="85" y="48" width="15" height="24" rx="2" fill="#334155" stroke="#cbd5e1" />
            {/* Actuator stem */}
            <line x1="60" y1="45" x2="60" y2="25" stroke="#64748b" strokeWidth="4" />
            {/* Lever handle (rotated to show it is open/closed state) */}
            <path d="M 55,25 L 100,15" stroke="#00a2a6" strokeWidth="6" strokeLinecap="round" />
            <circle cx="60" cy="25" r="5" fill="#1e293b" />
            {/* Fluid arrow */}
            <path d="M 40,60 L 75,60 M 70,55 L 75,60 L 70,65" stroke="#00a2a6" strokeWidth="1.5" />
          </svg>
        );
      case 'estrutura':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {/* Metal Sheet with perspectives or Angle bar */}
            <path d="M 25,45 L 85,25 L 95,75 L 35,95 Z" fill="#64748b" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M 25,45 L 35,95 L 35,100 L 25,50 Z" fill="#334155" />
            {/* Polished brush reflection stripes */}
            <line x1="45" y1="35" x2="55" y2="85" stroke="#94a3b8" strokeWidth="3" opacity="0.5" />
            <line x1="60" y1="30" x2="70" y2="80" stroke="#cbd5e1" strokeWidth="2" opacity="0.4" />
          </svg>
        );
      case 'incendio':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {/* Fire Hose roll */}
            <circle cx="60" cy="65" r="35" fill="none" stroke="#ef4444" strokeWidth="6" />
            <circle cx="60" cy="65" r="25" fill="none" stroke="#ef4444" strokeWidth="4" />
            <circle cx="60" cy="65" r="15" fill="none" stroke="#fca5a5" strokeWidth="3" />
            {/* Brass Storz couplings */}
            <rect x="75" y="30" width="16" height="12" rx="1" fill="#eab308" stroke="#ca8a04" />
            <rect x="52" y="30" width="10" height="4" fill="#64748b" />
          </svg>
        );
      case 'auxiliares':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full text-slate-400 stroke-current" fill="none" strokeWidth="1.5">
            {/* Pump motor and casing */}
            <rect x="25" y="45" width="45" height="35" rx="3" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
            {/* Motor cooling fins */}
            <line x1="32" y1="45" x2="32" y2="80" stroke="#3b82f6" />
            <line x1="42" y1="45" x2="42" y2="80" stroke="#3b82f6" />
            <line x1="52" y1="45" x2="52" y2="80" stroke="#3b82f6" />
            {/* Volute / Pump chamber */}
            <circle cx="85" cy="62" r="22" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="85" cy="62" r="8" fill="#0c4a6e" />
            {/* Outlets */}
            <rect x="80" y="28" width="10" height="13" fill="#0284c7" stroke="#38bdf8" />
            <rect x="100" y="57" width="12" height="10" fill="#0284c7" stroke="#38bdf8" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden h-full"
      id={`product-card-${product.id}`}
    >
      {/* Category Tag Header */}
      <div className="px-4 pt-3 pb-1 flex justify-between items-center bg-slate-50 border-b border-slate-100">
        <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded">
          {product.subcategory}
        </span>
        {product.standard && (
          <span className="text-[10px] font-semibold text-brand-teal bg-brand-teal/5 border border-brand-teal/20 px-2 py-0.5 rounded-full font-mono">
            {product.standard}
          </span>
        )}
      </div>

      {/* Visual illustration box */}
      <div className="h-44 bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center p-6 relative border-b border-slate-100/60 overflow-hidden group">
        <div className="w-32 h-32 flex items-center justify-center">
          {!imageError && product.image ? (
            <img 
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          ) : (
            renderProductIllustration()
          )}
        </div>
        {product.featured && (
          <span className="absolute top-3 left-3 bg-brand-blue text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm">
            Destaque GTI
          </span>
        )}
      </div>

      {/* Card Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-base text-slate-800 leading-snug tracking-tight hover:text-brand-blue transition-colors mb-2">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Quantity Selection Controls */}
        <div className="flex items-center justify-between gap-4 mt-auto pt-3 pb-2 border-t border-slate-100">
          <div className="flex flex-col text-left">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Quantidade</span>
            <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 p-0.5 max-w-[110px]">
              <button
                type="button"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 rounded-md transition-colors cursor-pointer"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-10 text-center bg-transparent border-0 text-xs font-bold text-slate-800 focus:outline-none focus:ring-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                type="button"
                onClick={() => setQuantity(prev => prev + 1)}
                className="w-7 h-7 flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-200/50 rounded-md transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          
          {/* Unit Info */}
          <div className="text-right flex flex-col justify-end">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Unidade</span>
            <span className="text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded capitalize font-mono">
              {product.unit || 'peça'}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-12 gap-2 pt-3 border-t border-slate-100">
          <button
            onClick={() => onViewSpecs(product)}
            className="col-span-3 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-700 rounded-lg transition-all flex items-center justify-center cursor-pointer active:scale-95"
            title="Ver Ficha Técnica"
          >
            <Info className="w-4 h-4" />
          </button>

          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.01 }}
            className={`col-span-9 py-2 rounded-lg text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              isAdded
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/10'
                : 'bg-brand-teal hover:bg-brand-teal-dark text-slate-950 shadow-md shadow-brand-teal/10'
            }`}
          >
            <AnimatePresence mode="wait">
              {isAdded ? (
                <motion.div
                  key="added"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Adicionado!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="add"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1.5"
                >
                  <Clipboard className="w-4 h-4" />
                  <span>Adicionar ao Orçamento</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
