import React, { useState, useEffect } from 'react';
import { Product, CartItem, QuoteRequest, B2BUser } from './types';
import { PRODUCTS } from './data/industrialData';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import TechnicalSpecsModal from './components/TechnicalSpecsModal';
import SegmentTabs from './components/SegmentTabs';
import MaterialSpecsTab from './components/MaterialSpecsTab';
import QuoteHistoryTab from './components/QuoteHistoryTab';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TrustLogos from './components/TrustLogos';
import Unidades from './components/Unidades';
import DownloadCatalog from './components/DownloadCatalog';
import LoginModal from './components/LoginModal';
import B2BLoginTab from './components/B2BLoginTab';
import { Filter, Database, Check, ShoppingCart, Info, Award, ShieldCheck, HelpCircle } from 'lucide-react';

export default function App() {
  // Navigation & States
  const [activeTab, setActiveTab] = useState<'catalog' | 'segments' | 'materials' | 'history' | 'faq' | 'login'>('catalog');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quoteHistory, setQuoteHistory] = useState<QuoteRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtering Catalog States
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeMaterialFilter, setActiveMaterialFilter] = useState<string>('all');
  
  // Modal & Drawer control states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductSpecs, setSelectedProductSpecs] = useState<Product | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<B2BUser | null>(null);
  
  // Notification banner state
  const [notification, setNotification] = useState<string | null>(null);

  // Synchronize with localStorage
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('gti_cart_items');
      const storedHistory = localStorage.getItem('gti_quote_history');
      
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
      if (storedHistory) {
        setQuoteHistory(JSON.parse(storedHistory));
      }
    } catch (e) {
      console.error('Falha ao ler dados do localStorage:', e);
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    try {
      localStorage.setItem('gti_cart_items', JSON.stringify(newCart));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSaveQuoteToHistory = (newQuote: QuoteRequest) => {
    const updatedHistory = [newQuote, ...quoteHistory];
    setQuoteHistory(updatedHistory);
    try {
      localStorage.setItem('gti_quote_history', JSON.stringify(updatedHistory));
    } catch (e) {
      console.error(e);
    }
    triggerNotification(`Solicitação de Cotação ${newQuote.id} gravada no seu histórico.`);
  };

  const handleClearHistory = () => {
    if (window.confirm('Deseja realmente apagar todo o seu histórico de cotações salvas localmente?')) {
      setQuoteHistory([]);
      try {
        localStorage.removeItem('gti_quote_history');
      } catch (e) {
        console.error(e);
      }
      triggerNotification('Histórico de cotações removido.');
    }
  };

  // Helper trigger notification
  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  // Cart operations
  const handleAddToCart = (newItem: Omit<CartItem, 'id'>) => {
    // Generate unique ID based on product, size, material, and pressure specifications
    const sizePart = newItem.selectedSize.replace(/\//g, '-').replace(/"/g, 'inch');
    const pressurePart = newItem.selectedPressureClass ? newItem.selectedPressureClass.replace(/\s+/g, '-') : 'none';
    const matPart = newItem.selectedMaterial.replace(/\s+/g, '-');
    const uniqueId = `${newItem.product.id}_${matPart}_${sizePart}_${pressurePart}`;

    const existingIndex = cartItems.findIndex(item => item.id === uniqueId);
    
    let updatedCart = [...cartItems];
    if (existingIndex > -1) {
      updatedCart[existingIndex].quantity += newItem.quantity;
      if (newItem.notes) {
        updatedCart[existingIndex].notes = newItem.notes; // update note
      }
    } else {
      updatedCart.push({
        ...newItem,
        id: uniqueId
      });
    }

    saveCart(updatedCart);
    triggerNotification(`Lote de "${newItem.product.name}" adicionado ao carrinho de cotação.`);
  };

  // Quick action from segment tabs
  const handleAddQuickToCart = (product: Product, material: string, size: string) => {
    handleAddToCart({
      product,
      selectedMaterial: material,
      selectedSize: size,
      quantity: 1,
    });
  };

  // Re-add items from past quotes to active cart
  const handleReaddAllToCart = (pastItems: CartItem[]) => {
    let updatedCart = [...cartItems];
    
    pastItems.forEach(pastItem => {
      const sizePart = pastItem.selectedSize.replace(/\//g, '-').replace(/"/g, 'inch');
      const pressurePart = pastItem.selectedPressureClass ? pastItem.selectedPressureClass.replace(/\s+/g, '-') : 'none';
      const matPart = pastItem.selectedMaterial.replace(/\s+/g, '-');
      const uniqueId = `${pastItem.product.id}_${matPart}_${sizePart}_${pressurePart}`;

      const existingIndex = updatedCart.findIndex(item => item.id === uniqueId);
      
      if (existingIndex > -1) {
        updatedCart[existingIndex].quantity += pastItem.quantity;
      } else {
        updatedCart.push({
          ...pastItem,
          id: uniqueId
        });
      }
    });

    saveCart(updatedCart);
    setIsCartOpen(true); // open drawer to see the items
    triggerNotification(`${pastItems.length} especificações re-adicionadas ao carrinho ativo.`);
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: qty };
      }
      return item;
    });
    saveCart(updatedCart);
  };

  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    saveCart(updatedCart);
  };

  const handleClearCart = () => {
    saveCart([]);
  };

  // Filtering products for the Marketplace Catalog Tab
  const filteredProducts = PRODUCTS.filter(p => {
    // 1. Filter by category
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    
    // 2. Filter by material list availability
    const matchesMaterial = activeMaterialFilter === 'all' || p.materials.some(m => m.includes(activeMaterialFilter));

    // 3. Filter by text search query
    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch = !searchLower || 
      p.name.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower) ||
      p.subcategory.toLowerCase().includes(searchLower) ||
      p.materials.some(m => m.toLowerCase().includes(searchLower)) ||
      (p.standard && p.standard.toLowerCase().includes(searchLower));

    return matchesCategory && matchesMaterial && matchesSearch;
  });

  const productCategories = [
    { id: 'all', label: 'Todos os Produtos' },
    { id: 'tubos', label: 'Tubos' },
    { id: 'conexoes', label: 'Conexões & Flanges' },
    { id: 'valvulas', label: 'Válvulas' },
    { id: 'estrutura', label: 'Estruturas & Chapas' },
    { id: 'incendio', label: 'Combate a Incêndio' },
    { id: 'auxiliares', label: 'Bomba & Auxiliares' },
  ];

  const materialsList = [
    { id: 'all', label: 'Todas as Ligas' },
    { id: 'Inox 304', label: 'Inox 304' },
    { id: 'Inox 316', label: 'Inox 316' },
    { id: 'Carbono', label: 'Aço Carbono' },
    { id: 'Galvanizado', label: 'Galvanizado' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-brand-teal selection:text-white" id="app-root">
      
      {/* Header */}
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentUser={currentUser}
        onOpenLogin={() => setActiveTab('login')}
        onLogout={() => {
          setCurrentUser(null);
          triggerNotification('Empresa desconectada do Portal B2B.');
        }}
      />

      {/* Interactive Hero Banner */}
      {activeTab === 'catalog' && !searchQuery && (
        <Hero 
          onStartShopping={() => {
            const el = document.getElementById('catalog-grid-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onViewSegments={() => setActiveTab('segments')}
        />
      )}

      {/* Global Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-800 text-white font-medium text-xs py-3.5 px-5 rounded-xl shadow-2xl flex items-center gap-2.5 max-w-sm animate-bounce" id="toast-notification">
          <div className="p-1 bg-brand-teal/20 text-brand-teal-light rounded-full">
            <Check className="w-4 h-4" />
          </div>
          <span className="leading-tight">{notification}</span>
        </div>
      )}

      {/* Main Page Content Wrapper */}
      <main className="flex-1">
        
        {/* TAB 1: MARKETPLACE CATALOG */}
        {activeTab === 'catalog' && (
          <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="catalog-grid-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column Sidebar Filters (for Desktop) */}
              <aside className="lg:col-span-3 text-left">
                <div className="sticky top-40 space-y-6">
                  
                  {/* Category Selection Box */}
                  <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs">
                    <div className="flex items-center gap-2 mb-4 text-brand-blue pb-2 border-b border-slate-100">
                      <Filter className="w-4 h-4 text-brand-teal" />
                      <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">Filtrar Categoria</h3>
                    </div>
                    
                    <div className="space-y-1">
                      {productCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveCategory(cat.id);
                            const el = document.getElementById('catalog-products-container');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer flex justify-between items-center ${
                            activeCategory === cat.id
                              ? 'bg-brand-blue text-white'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <span>{cat.label}</span>
                          {activeCategory === cat.id && <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material Alloy Filter Box */}
                  <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs">
                    <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                      <Award className="w-4 h-4 text-brand-teal" />
                      <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400">Filtrar por Liga</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {materialsList.map((mat) => (
                        <button
                          key={mat.id}
                          onClick={() => setActiveMaterialFilter(mat.id)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                            activeMaterialFilter === mat.id
                              ? 'bg-brand-teal text-white border-transparent shadow-xs'
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-white'
                          }`}
                        >
                          {mat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Operational Quality Certificate Callout */}
                  <div className="bg-gradient-to-br from-slate-900 to-brand-blue-dark text-white p-5 rounded-xl border border-slate-800 shadow-sm text-left">
                    <div className="p-1.5 bg-brand-teal/20 text-brand-teal border border-brand-teal/30 rounded-lg inline-block mb-3">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-slate-100 mb-1">Padrão de Qualidade GTI</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Ligas autenticadas e rastreadas. Fornecemos certificados de usina (MTR) de acordo com especificações ASTM, NBR e ASME para total segurança da sua operação.
                    </p>
                  </div>

                </div>
              </aside>

              {/* Right Column Product Grid */}
              <div className="lg:col-span-9" id="catalog-products-container">
                {/* Section Header with count and query text */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 text-left">
                  <div>
                    {searchQuery ? (
                      <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                        Resultado da busca por: <span className="text-brand-blue font-mono">"{searchQuery}"</span>
                      </h2>
                    ) : (
                      <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                        Produtos em Destaque Goiânia
                      </h2>
                    )}
                    <p className="text-xs text-slate-500 mt-1">
                      {filteredProducts.length} especificações encontradas prontas para faturamento corporativo.
                    </p>
                  </div>

                  {/* Mobile Quick Category Switcher */}
                  <div className="flex gap-2 lg:hidden overflow-x-auto w-full pb-2 scroll-hide">
                    {productCategories.slice(0, 5).map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-3 py-1.5 text-[11px] font-bold rounded-full whitespace-nowrap transition-all cursor-pointer ${
                          activeCategory === cat.id
                            ? 'bg-brand-blue text-white'
                            : 'bg-white border border-slate-200 text-slate-600'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl p-8">
                    <Database className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="font-display font-bold text-lg text-slate-800">Nenhum lote correspondente</h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-sm mx-auto">
                      Não encontramos produtos para esta categoria, liga ou termo buscado. Tente mudar o filtro lateral ou limpar a caixa de busca.
                    </p>
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setActiveMaterialFilter('all');
                        setSearchQuery('');
                      }}
                      className="mt-6 px-4 py-2 bg-brand-blue text-white text-xs font-bold rounded-lg hover:bg-brand-blue-dark transition-colors cursor-pointer"
                    >
                      Resetar Todos os Filtros
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard 
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                        onViewSpecs={(p) => setSelectedProductSpecs(p)}
                      />
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
          
          {/* Trust Logos section */}
          <TrustLogos />
          
          {/* Unidades section */}
          <Unidades />
          
          {/* Download Catalog section */}
          <DownloadCatalog />
        </>
        )}

        {/* TAB 2: SECTORS / SEGMENTS OF OPERATION */}
        {activeTab === 'segments' && (
          <SegmentTabs 
            products={PRODUCTS}
            onAddProductToCart={handleAddQuickToCart}
            onFilterCatalog={(category, material, search) => {
              setActiveCategory(category);
              setActiveMaterialFilter(material);
              setSearchQuery(search);
              setActiveTab('catalog');
              setTimeout(() => {
                const el = document.getElementById('catalog-grid-section');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 150);
            }}
          />
        )}

        {/* TAB 3: MATERIAL METALLURGICAL SPECS */}
        {activeTab === 'materials' && (
          <MaterialSpecsTab />
        )}

        {/* TAB 4: HISTORIC SENT QUOTES */}
        {activeTab === 'history' && (
          <QuoteHistoryTab 
            quoteHistory={quoteHistory}
            onReaddAllToCart={handleReaddAllToCart}
            onClearHistory={handleClearHistory}
          />
        )}

        {/* TAB 5: FAQ ACCORDION */}
        {activeTab === 'faq' && (
          <FAQ />
        )}

        {/* TAB 6: B2B LOGIN TAB (Electrolux Style) */}
        {activeTab === 'login' && (
          <B2BLoginTab 
            onLogin={(user) => {
              setCurrentUser(user);
              setActiveTab('catalog');
              triggerNotification(`Bem-vindo, ${user.tradingName}! Tabela B2B e faturamento direto de fábrica habilitados.`);
            }}
            onBackToCatalog={() => setActiveTab('catalog')}
          />
        )}

      </main>

      {/* Cart Drawer - B2B Checkout Slider */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onSaveQuoteToHistory={handleSaveQuoteToHistory}
        currentUser={currentUser}
      />

      {/* Technical Specification Sheet / Datasheet Modal */}
      <TechnicalSpecsModal 
        product={selectedProductSpecs}
        onClose={() => setSelectedProductSpecs(null)}
      />

      {/* B2B Systematic Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={(user) => {
          setCurrentUser(user);
          triggerNotification(`Bem-vindo, ${user.tradingName}! Tabela B2B e faturamento direto de fábrica habilitados.`);
        }}
        userEmailFromMetadata="miqueiasyout@gmail.com"
      />

      {/* Footer */}
      <Footer onNavigate={setActiveTab} />

    </div>
  );
}
