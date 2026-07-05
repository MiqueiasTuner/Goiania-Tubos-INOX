export interface Product {
  id: string;
  name: string;
  category: 'tubos' | 'conexoes' | 'valvulas' | 'estrutura' | 'incendio' | 'auxiliares';
  subcategory: string;
  description: string;
  materials: string[]; // e.g. ["Aço Inox 304", "Aço Inox 316", "Aço Carbono", "Galvanizado"]
  sizes: string[]; // e.g. ["1/2\"", "3/4\"", "1\"", "1.1/2\"", "2\"", "3\"", "4\"", "6\"", "8\""]
  pressureClasses?: string[]; // e.g. ["150#", "300#", "6000#", "SCH 10", "SCH 40", "SCH 80"]
  standard?: string; // e.g. "ASTM A312", "ASTM A403", "ANSI B16.9", "NBR 5580"
  featured?: boolean;
  unit: string; // e.g. "barra", "peça", "metro"
  applicationNote?: string;
  image?: string;
  categories?: string[];
}

export interface CartItem {
  id: string; // unique hash of product.id + selectedMaterial + selectedSize + selectedPressureClass
  product: Product;
  selectedMaterial: string;
  selectedSize: string;
  selectedPressureClass?: string;
  quantity: number;
  notes?: string;
}

export interface QuoteRequest {
  id: string;
  date: string;
  items: CartItem[];
  clientName: string;
  clientCompany: string;
  clientPhone: string;
  clientEmail?: string;
  city: string;
  notes?: string;
  status: 'Pendente' | 'Respondido' | 'Cancelado';
}

export interface Segment {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  keyRequirements: string[];
  recommendedMaterials: string[];
}

export interface MaterialSpec {
  id: string;
  name: string;
  type: string;
  composition: string;
  advantages: string[];
  applications: string[];
  corrosionResistance: 'Excelente' | 'Alta' | 'Moderada' | 'Específica';
}

export interface B2BUser {
  companyName: string;
  cnpj: string;
  tradingName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  discountRate: number;
}

