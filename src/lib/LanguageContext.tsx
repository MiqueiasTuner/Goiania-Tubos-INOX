import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string, defaultValue?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, any>> = {
  pt: {
    // Top banner
    'top.announcements': [
      '⚡ TUBOS OD SANITÁRIOS INOX - PRONTA ENTREGA',
      '⚡ CONEXÕES FLANGEADAS E CURVAS DE ALTA PRESSÃO',
      '⚡ FLANGES ANSI B16.5 E ACESSÓRIOS DE VEDAÇÃO',
      '⚡ VÁLVULAS DE ESFERA, BORBOLETA E GAVETA INOX',
      '⚡ CHAPAS E BOBINAS ESCOVADAS, POLIDAS E ESPELHADAS',
      '⚡ LIGAS ESPECIAIS AISI 304, AISI 316 E AÇO CARBONO'
    ],
    'top.language': 'Idioma:',
    'top.changed': 'Idioma alterado para Português (Brasil)',

    // Header & Navigation
    'nav.catalog': 'Catálogo',
    'nav.segments': 'Aplicações por Segmento',
    'nav.materials': 'Normas & Ligas',
    'nav.history': 'Histórico',
    'nav.faq': 'Suporte & FAQ',
    'nav.portal': 'Portal B2B',
    'nav.logout': 'Sair',
    'nav.search': 'Pesquise por Tubos, Curvas, Válvulas ou Flanges...',
    'nav.welcome': 'Bem-vindo,',
    'nav.cep_placeholder': 'Digite o CEP...',
    'nav.inform_cep': 'Informe seu CEP',
    'nav.cep_validating': 'Validando...',
    'nav.support_atendimento': 'Faturamento Direto',
    'nav.support_desc': 'Central Centro-Norte',

    // Hero
    'hero.start': 'Ver Catálogo Completo',
    'hero.view_segments': 'Aplicações Industriais',
    'hero.slide0_title': 'Conectando as Indústrias Brasileiras com Tubos de Inox',
    'hero.slide0_desc': 'Garantia de vazão, resistência à oxidação e durabilidade para condução de fluidos sob regimes extremos de pressão.',
    'hero.slide1_title': 'Maior Estoque do Centro-Norte e Pronta Entrega',
    'hero.slide1_desc': 'Logística expressa com frota própria para despacho imediato de conexões, curvas e válvulas industriais.',
    'hero.slide2_title': 'Ligas Nobres de Alta Resistência Térmica',
    'hero.slide2_desc': 'Produtos certificados em aço inox AISI 304 e 316 em conformidade com as mais rigorosas normas sanitárias e industriais.',
    'hero.caption_slide0': 'Alta Qualidade em Aço Inox',
    'hero.caption_slide1': 'Pronta Entrega & Mais Agilidade',
    'hero.caption_slide2': 'Mais Perto de Sua Indústria',

    // Sidebar & Filters
    'filter.category': 'Filtrar Categoria',
    'filter.alloy': 'Liga de Metal',
    'filter.all_categories': 'Todos os Produtos',
    'filter.all_alloys': 'Todas as Ligas',
    'filter.cat_tubos': 'Tubos',
    'filter.cat_conexoes': 'Conexões & Flanges',
    'filter.cat_valvulas': 'Válvulas',
    'filter.cat_estrutura': 'Estruturas & Chapas',
    'filter.cat_incendio': 'Combate a Incêndio',
    'filter.cat_auxiliares': 'Bomba & Auxiliares',

    // Product Card
    'product.request_batch': 'Solicitar Cotação',
    'product.details': 'Especificações Técnicas',
    'product.gauge': 'Bitola / Medida',
    'product.alloy_label': 'Liga / Material',
    'product.pressure_class': 'Classe de Pressão',
    'product.certification': 'Certificado',
    'product.origin': 'Origem',
    'product.qty': 'Qtd (Lotes/Pçs)',
    'product.notes_placeholder': 'Observações (Ex: Corte especial)...',
    'product.added': 'Item adicionado ao carrinho de cotação!',

    // Cart Drawer
    'cart.title': 'Carrinho de Cotação',
    'cart.empty': 'Seu carrinho de cotação está vazio.',
    'cart.item_qty': 'Quantidade:',
    'cart.notes': 'Observações adicionais:',
    'cart.total_items': 'itens no pedido',
    'cart.clean': 'Limpar Tudo',
    'cart.form_title': 'Dados para Faturamento',
    'cart.form_name': 'Nome do Solicitante / Comprador',
    'cart.form_cnpj': 'CNPJ da Empresa',
    'cart.form_email': 'E-mail Corporativo',
    'cart.form_phone': 'Telefone / WhatsApp',
    'cart.form_notes': 'Mensagem ou Instruções Especiais',
    'cart.form_submit': 'Enviar Solicitação de Cotação',
    'cart.success_msg': 'Cotação enviada com sucesso! Em breve um vendedor entrará em contato.',

    // Footer & Trust Logos
    'footer.title': 'Goiânia Tubos Inox',
    'footer.desc': 'A Goiânia Tubos Inox destaca-se como distribuidora líder no Centro-Norte do país, fornecendo tubos de aço inox, conexões, flanges, válvulas e liras com altíssimo padrão de qualidade.',
    'footer.links_header': 'Links Rápidos',
    'footer.contact_header': 'Canais de Atendimento',
    'footer.address': 'Sede: Goiânia (GO) | Filial: Imperatriz (MA)',
    'footer.rights': '© 2026 Goiânia Tubos Inox. Todos os direitos reservados. Faturamento direto de usina.',
    'trust.header': 'PARCEIROS HOMOLOGADOS & CERTIFICAÇÕES',
    'trust.desc': 'Trabalhamos exclusivamente com as maiores siderúrgicas e fabricantes globais para garantir segurança estrutural.',

    // Unidades
    'unidades.title': 'Nossas Unidades de Atendimento',
    'unidades.desc': 'Infraestrutura robusta de armazenamento e logística para pronto atendimento regional.',
    'unidades.hq': 'Matriz - Goiânia (GO)',
    'unidades.branch': 'Filial - Imperatriz (MA)',
    'unidades.coverage': 'Cobertura Nacional',
    'unidades.active': 'Atendimento Imediato Centro-Norte e N/NE',

    // FAQ & Support
    'faq.title': 'Suporte Técnico & Dúvidas Frequentes',
    'faq.desc': 'Encontre as principais respostas sobre ligas metálicas, processos de faturamento e despacho de cargas.',

    // Materials & Specs
    'materials.title': 'Tabelas Técnicas de Normas e Ligas',
    'materials.desc': 'Consulte as composições químicas, resistências mecânicas e tolerâncias dimensionais dos materiais.',
    
    // Segments
    'segments.title': 'Soluções por Segmento Industrial',
    'segments.desc': 'Especificações de tubulações de aço inox adequadas para cada regime sanitário e químico.',

    // History
    'history.title': 'Histórico de Cotações Locais',
    'history.desc': 'Gerencie e recupere as cotações que você solicitou a partir deste navegador.',
    'history.empty': 'Nenhuma cotação encontrada no histórico deste dispositivo.'
  },
  en: {
    // Top banner
    'top.announcements': [
      '⚡ STAINLESS OD SANITARY TUBES - READY STOCK',
      '⚡ FLANGED FITTINGS AND HIGH-PRESSURE ELBOWS',
      '⚡ ANSI B16.5 FLANGES & SEALING ACCESSORIES',
      '⚡ STAINLESS BALL, BUTTERFLY & GATE VALVES',
      '⚡ BRUSHED, POLISHED & MIRRORED SHEETS & COILS',
      '⚡ SPECIAL ALLOYS AISI 304, AISI 316 & CARBON STEEL'
    ],
    'top.language': 'Language:',
    'top.changed': 'Language changed to English (United States)',

    // Header & Navigation
    'nav.catalog': 'Catalog',
    'nav.segments': 'Segment Applications',
    'nav.materials': 'Standards & Alloys',
    'nav.history': 'History',
    'nav.faq': 'Support & FAQ',
    'nav.portal': 'B2B Portal',
    'nav.logout': 'Logout',
    'nav.search': 'Search for Tubes, Elbows, Valves or Flanges...',
    'nav.welcome': 'Welcome,',
    'nav.cep_placeholder': 'Enter ZIP code...',
    'nav.inform_cep': 'Check delivery ZIP',
    'nav.cep_validating': 'Validating...',
    'nav.support_atendimento': 'Direct Invoicing',
    'nav.support_desc': 'Central North HQ',

    // Hero
    'hero.start': 'View Full Catalog',
    'hero.view_segments': 'Industrial Applications',
    'hero.slide0_title': 'Connecting Brazilian Industries with Stainless Steel Tubes',
    'hero.slide0_desc': 'Guaranteed flow, oxidation resistance, and durability for fluid conduction under extreme pressure conditions.',
    'hero.slide1_title': 'Largest Inventory in the Central-North & Ready Stock',
    'hero.slide1_desc': 'Express logistics with our own fleet for immediate dispatch of industrial fittings, elbows, and valves.',
    'hero.slide2_title': 'Noble Alloys with High Thermal Resistance',
    'hero.slide2_desc': 'Certified products in stainless steel AISI 304 and 316 complying with the strictest sanitary and industrial standards.',
    'hero.caption_slide0': 'High Quality Stainless Steel',
    'hero.caption_slide1': 'Ready Delivery & More Agility',
    'hero.caption_slide2': 'Closer to Your Industry',

    // Sidebar & Filters
    'filter.category': 'Filter Category',
    'filter.alloy': 'Metal Alloy',
    'filter.all_categories': 'All Products',
    'filter.all_alloys': 'All Alloys',
    'filter.cat_tubos': 'Tubes',
    'filter.cat_conexoes': 'Fittings & Flanges',
    'filter.cat_valvulas': 'Valves',
    'filter.cat_estrutura': 'Structures & Sheets',
    'filter.cat_incendio': 'Fire Fighting',
    'filter.cat_auxiliares': 'Pump & Auxiliaries',

    // Product Card
    'product.request_batch': 'Add to Quote',
    'product.details': 'Technical Specs',
    'product.gauge': 'Gauge / Size',
    'product.alloy_label': 'Alloy / Material',
    'product.pressure_class': 'Pressure Class',
    'product.certification': 'Certificate',
    'product.origin': 'Origin',
    'product.qty': 'Qty (Batches/Pcs)',
    'product.notes_placeholder': 'Notes (Ex: Special cut)...',
    'product.added': 'Item added to the quote cart!',

    // Cart Drawer
    'cart.title': 'Quote Cart',
    'cart.empty': 'Your quote cart is empty.',
    'cart.item_qty': 'Quantity:',
    'cart.notes': 'Additional notes:',
    'cart.total_items': 'items in order',
    'cart.clean': 'Clear All',
    'cart.form_title': 'Invoicing Information',
    'cart.form_name': 'Requester / Buyer Name',
    'cart.form_cnpj': 'Company Tax ID / CNPJ',
    'cart.form_email': 'Corporate Email',
    'cart.form_phone': 'Phone / WhatsApp',
    'cart.form_notes': 'Message or Special Instructions',
    'cart.form_submit': 'Submit Quote Request',
    'cart.success_msg': 'Quote request submitted successfully! A sales representative will contact you shortly.',

    // Footer & Trust Logos
    'footer.title': 'Goiania Tubos Inox',
    'footer.desc': 'Goiania Tubos Inox stands out as a leading distributor in the Central-North region, providing stainless steel tubes, fittings, flanges, valves, and loops with the highest quality standards.',
    'footer.links_header': 'Quick Links',
    'footer.contact_header': 'Service Channels',
    'footer.address': 'HQ: Goiânia (GO) | Branch: Imperatriz (MA)',
    'footer.rights': '© 2026 Goiânia Tubos Inox. All rights reserved. Direct mill invoicing.',
    'trust.header': 'APPROVED PARTNERS & CERTIFICATIONS',
    'trust.desc': 'We work exclusively with the largest global steel mills and manufacturers to guarantee structural safety.',

    // Unidades
    'unidades.title': 'Our Branches & Support Locations',
    'unidades.desc': 'Robust storage and logistics infrastructure for immediate regional assistance.',
    'unidades.hq': 'Headquarters - Goiânia (GO)',
    'unidades.branch': 'Branch - Imperatriz (MA)',
    'unidades.coverage': 'National Coverage',
    'unidades.active': 'Immediate Service for Central-North and N/NE',

    // FAQ & Support
    'faq.title': 'Technical Support & FAQ',
    'faq.desc': 'Find the main answers regarding metal alloys, invoicing processes, and cargo dispatch.',

    // Materials & Specs
    'materials.title': 'Technical Tables of Standards & Alloys',
    'materials.desc': 'Consult chemical compositions, mechanical strength, and dimensional tolerances of materials.',
    
    // Segments
    'segments.title': 'Solutions by Industrial Segment',
    'segments.desc': 'Stainless steel piping specifications suitable for each sanitary and chemical regime.',

    // History
    'history.title': 'Local Quotes History',
    'history.desc': 'Manage and retrieve the quotes you requested from this browser.',
    'history.empty': 'No quotes found in this device\'s history.'
  },
  es: {
    // Top banner
    'top.announcements': [
      '⚡ TUBOS OD SANITARIOS DE ACERO INOXIDABLE - STOCK INMEDIATO',
      '⚡ CONEXIONES BRIDADAS Y CODOS DE ALTA PRESIÓN',
      '⚡ BRIDAS ANSI B16.5 Y ACCESORIOS DE SELLADO',
      '⚡ VÁLVULAS DE BOLA, MARIPOSA Y COMPUERTA INOX',
      '⚡ CHAPAS Y BOBINAS PULIDAS, CEPILLADAS Y ESPEJADAS',
      '⚡ ALEACIONES ESPECIALES AISI 304, AISI 316 Y ACERO AL CARBONO'
    ],
    'top.language': 'Idioma:',
    'top.changed': 'Idioma cambiado a Español (España)',

    // Header & Navigation
    'nav.catalog': 'Catálogo',
    'nav.segments': 'Aplicaciones por Segmento',
    'nav.materials': 'Normas y Aleaciones',
    'nav.history': 'Historial',
    'nav.faq': 'Soporte y FAQ',
    'nav.portal': 'Portal B2B',
    'nav.logout': 'Salir',
    'nav.search': 'Buscar tubos, codos, válvulas o bridas...',
    'nav.welcome': 'Bienvenido,',
    'nav.cep_placeholder': 'Ingrese código postal...',
    'nav.inform_cep': 'Consultar entrega postal',
    'nav.cep_validating': 'Validando...',
    'nav.support_atendimento': 'Facturación Directa',
    'nav.support_desc': 'Central Centro-Norte',

    // Hero
    'hero.start': 'Ver Catálogo Completo',
    'hero.view_segments': 'Aplicaciones Industriales',
    'hero.slide0_title': 'Conectando las Industrias Brasileñas con Tubos de Inoxidable',
    'hero.slide0_desc': 'Flujo garantizado, resistencia a la oxidación y durabilidad para conducción de fluidos bajo condiciones extremas de presión.',
    'hero.slide1_title': 'Mayor Inventario del Centro-Norte y Stock Inmediato',
    'hero.slide1_desc': 'Logística exprés con flota propia para despacho inmediato de conexiones, codos y válvulas industriales.',
    'hero.slide2_title': 'Aleaciones Nobles de Alta Resistencia Térmica',
    'hero.slide2_desc': 'Productos certificados de acero inoxidable AISI 304 y 316 en conformidad con las normas sanitarias e industriales más estrictas.',
    'hero.caption_slide0': 'Acero Inoxidable de Alta Calidad',
    'hero.caption_slide1': 'Entrega Lista & Más Agilidad',
    'hero.caption_slide2': 'Más Cerca de Su Industria',

    // Sidebar & Filters
    'filter.category': 'Filtrar Categoría',
    'filter.alloy': 'Aleación de Metal',
    'filter.all_categories': 'Todos los Productos',
    'filter.all_alloys': 'Todas las Aleaciones',
    'filter.cat_tubos': 'Tubos',
    'filter.cat_conexoes': 'Conexiones y Bridas',
    'filter.cat_valvulas': 'Válvulas',
    'filter.cat_estrutura': 'Estructuras y Chapas',
    'filter.cat_incendio': 'Combate de Incendio',
    'filter.cat_auxiliares': 'Bombas y Auxiliares',

    // Product Card
    'product.request_batch': 'Solicitar Cotización',
    'product.details': 'Especificaciones Técnicas',
    'product.gauge': 'Calibre / Medida',
    'product.alloy_label': 'Aleación / Material',
    'product.pressure_class': 'Clase de Presión',
    'product.certification': 'Certificación',
    'product.origin': 'Origen',
    'product.qty': 'Cant (Lotes/Pzs)',
    'product.notes_placeholder': 'Observaciones (Ej: Corte especial)...',
    'product.added': '¡Artículo agregado al carrito de cotización!',

    // Cart Drawer
    'cart.title': 'Carrito de Cotización',
    'cart.empty': 'Su carrito de cotización está vacío.',
    'cart.item_qty': 'Cantidad:',
    'cart.notes': 'Observaciones adicionales:',
    'cart.total_items': 'artículos en el pedido',
    'cart.clean': 'Limpiar Todo',
    'cart.form_title': 'Datos de Facturación',
    'cart.form_name': 'Nombre del Solicitante / Comprador',
    'cart.form_cnpj': 'Identificación Fiscal / CNPJ de la Empresa',
    'cart.form_email': 'Correo Corporativo',
    'cart.form_phone': 'Teléfono / WhatsApp',
    'cart.form_notes': 'Mensaje o Instrucciones Especiales',
    'cart.form_submit': 'Enviar Solicitud de Cotización',
    'cart.success_msg': '¡Solicitud de cotización enviada con éxito! Un representante de ventas se pondrá en contacto pronto.',

    // Footer & Trust Logos
    'footer.title': 'Goiânia Tubos Inox',
    'footer.desc': 'Goiânia Tubos Inox se destaca como distribuidor líder en la región Centro-Norte del país, suministrando tubos, conexiones, bridas, válvulas de acero inoxidable con el más alto estándar de calidad.',
    'footer.links_header': 'Enlaces Rápidos',
    'footer.contact_header': 'Canales de Atención',
    'footer.address': 'Sede: Goiânia (GO) | Sucursal: Imperatriz (MA)',
    'footer.rights': '© 2026 Goiânia Tubos Inox. Todos los derechos reservados. Facturación directa de usina.',
    'trust.header': 'SOCIOS HOMOLOGADOS Y CERTIFICACIONES',
    'trust.desc': 'Trabajamos exclusivamente con las mayores acerías y fabricantes globales para garantizar la seguridad estructural.',

    // Unidades
    'unidades.title': 'Nuestras Sucursales de Atención',
    'unidades.desc': 'Infraestructura robusta de almacenamiento y logística para pronta atención regional.',
    'unidades.hq': 'Sede - Goiânia (GO)',
    'unidades.branch': 'Sucursal - Imperatriz (MA)',
    'unidades.coverage': 'Cobertura Nacional',
    'unidades.active': 'Atención Inmediata Centro-Norte y N/NE',

    // FAQ & Support
    'faq.title': 'Soporte Técnico y FAQ',
    'faq.desc': 'Encuentre las principales respuestas sobre aleaciones metálicas, procesos de facturación y despacho de cargas.',

    // Materials & Specs
    'materials.title': 'Tablas Técnicas de Normas y Aleaciones',
    'materials.desc': 'Consulte las composiciones químicas, resistencias mecánicas y tolerancias dimensionales de los materiales.',
    
    // Segments
    'segments.title': 'Soluciones por Segmento Industrial',
    'segments.desc': 'Especificaciones de tuberías de acero inoxidable adecuadas para cada régimen sanitario y químico.',

    // History
    'history.title': 'Historial de Cotizaciones Locales',
    'history.desc': 'Administre y recupere las cotizaciones que solicitó desde este navegador.',
    'history.empty': 'No se encontraron cotizaciones en el historial de este dispositivo.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('gti_language') as Language;
    if (saved && (saved === 'pt' || saved === 'en' || saved === 'es')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('gti_language', newLang);
  };

  const t = (key: string, defaultValue?: string): string => {
    const value = TRANSLATIONS[lang]?.[key];
    if (value !== undefined) {
      if (typeof value === 'string') return value;
      if (Array.isArray(value)) return value.join(', ');
    }
    return defaultValue || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
