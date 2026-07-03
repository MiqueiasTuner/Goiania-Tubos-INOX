import { Product, Segment, MaterialSpec } from '../types';

export const MATERIALS_SPECS: MaterialSpec[] = [
  {
    id: 'inox-304',
    name: 'Aço Inox AISI 304',
    type: 'Austenítico (Cromo-Níquel)',
    composition: 'Cr: 18.0% - 20.0%, Ni: 8.0% - 10.5%, C max: 0.08%',
    advantages: [
      'Excelente resistência à corrosão atmosférica e química geral',
      'Excelente soldabilidade e facilidade de conformação térmica/mecânica',
      'Superfície lisa que impede acúmulo de microrganismos (grau sanitário)',
      'Excelente tenacidade em baixas temperaturas'
    ],
    applications: [
      'Indústria alimentícia, laticínios, cervejarias e refrigerantes',
      'Equipamentos farmacêuticos e laboratórios de purificação',
      'Tubulações sanitárias (OD) e sistemas CIP (Clean-In-Place)',
      'Instalações criogênicas'
    ],
    corrosionResistance: 'Alta'
  },
  {
    id: 'inox-316',
    name: 'Aço Inox AISI 316',
    type: 'Austenítico com Molibdênio',
    composition: 'Cr: 16.0% - 18.0%, Ni: 10.0% - 14.0%, Mo: 2.0% - 3.0%, C max: 0.08%',
    advantages: [
      'Resistência superior à corrosão por pites em meios clorados',
      'Alta resistência à corrosão por frestas e ácidos redutores',
      'Maior resistência mecânica sob altas temperaturas em relação ao 304',
      'Propriedades não magnéticas ideais para equipamentos de precisão'
    ],
    applications: [
      'Indústria química pesada e petroquímica de alta agressividade',
      'Usinas de açúcar e álcool (ambientes corrosivos severos)',
      'Aplicações marinhas e costeiras de alta salinidade',
      'Indústrias farmacêuticas com agentes de assepsia severos'
    ],
    corrosionResistance: 'Excelente'
  },
  {
    id: 'aco-carbono',
    name: 'Aço Carbono (ASTM A53 / A106)',
    type: 'Liga de Carbono-Manganês',
    composition: 'C max: 0.25% - 0.30%, Mn: 0.95% - 1.20%, P/S max: 0.05%',
    advantages: [
      'Excelente resistência mecânica a altas pressões e trações',
      'Excelente custo-benefício para linhas utilitárias não corrosivas',
      'Excelente estabilidade mecânica sob elevadas temperaturas (A106)',
      'Fácil soldabilidade por eletrodo e processos MIG/TIG'
    ],
    applications: [
      'Sistemas de vapor saturado e superaquecido (caldeiras)',
      'Condutos de gás natural, GLP e óleos industriais',
      'Estruturas mecânicas pesadas, vigas e suportes tubulares',
      'Redes de combate a incêndio de alta pressão'
    ],
    corrosionResistance: 'Moderada'
  },
  {
    id: 'galvanizado',
    name: 'Aço Galvanizado por Imersão a Quente',
    type: 'Aço Carbono com Revestimento de Zinco (NBR 5580 / ASTM A53)',
    composition: 'Camada de zinco mínima de 450 g/m² em ambas as faces',
    advantages: [
      'Proteção por barreira física e ação galvânica de sacrifício do Zinco',
      'Boa durabilidade contra corrosão atmosférica urbana e industrial',
      'Excelente rigidez estrutural e alta resistência a impactos',
      'Custo reduzido de manutenção ao longo de décadas'
    ],
    applications: [
      'Redes de distribuição de água potável fria e poços artesianos',
      'Tubulações industriais de ar comprimido e gases inertes',
      'Sistemas de chuveiros automáticos (Sprinklers) contra incêndio',
      'Estruturas de suporte expostas a intempéries'
    ],
    corrosionResistance: 'Específica'
  }
];

export const SEGMENTS: Segment[] = [
  {
    id: 'alimenticia',
    name: 'Indústria Alimentícia',
    shortDescription: 'Linha sanitária de alto acabamento para processamento de alimentos e laticínios.',
    fullDescription: 'A indústria de alimentos e laticínios exige os mais rígidos padrões de higiene e especificações técnicas de grau sanitário. Nossos produtos sanitários em Aço Inox (AISI 304 e 316) possuem acabamento polido interno e externo, com rugosidade controlada (Ra < 0.8 µm), evitando qualquer acúmulo microbiológico e resistindo a limpezas severas CIP (Clean-In-Place).',
    iconName: 'Salad',
    keyRequirements: [
      'Rugosidade interna controlada (Ra < 0.8µm)',
      'Conexões de engate rápido tipo Tri-Clamp (TC) ou SMS',
      'Vedação atóxica grau alimentício (EPDM, Silicone, FKM)',
      'Total rastreabilidade de material por certificado de corrida'
    ],
    recommendedMaterials: ['Aço Inox AISI 304', 'Aço Inox AISI 316']
  },
  {
    id: 'bebidas',
    name: 'Indústria de Bebidas',
    shortDescription: 'Tubulações de pureza controlada para cervejarias, refrigerantes e destilarias.',
    fullDescription: 'Sistemas produtivos de bebidas exigem materiais com resistência absoluta à corrosão orgânica ácida e total neutralidade sensorial. Fornecemos soluções completas em inox polido, válvulas sanitárias e conexões específicas de grau alimentício que mantêm as propriedades originais do seu produto sem qualquer contaminação metálica ou sabor residual.',
    iconName: 'Flame',
    keyRequirements: [
      'Total estanqueidade e ausência de cantos mortos na tubulação',
      'Vedações em elastômeros atóxicos certificados pela FDA',
      'Válvulas borboleta sanitárias de controle manual ou pneumático',
      'Compatibilidade com limpezas químicas alcalinas e ácidas CIP'
    ],
    recommendedMaterials: ['Aço Inox AISI 304', 'Aço Inox AISI 316']
  },
  {
    id: 'farmaceutica',
    name: 'Indústria Farmacêutica',
    shortDescription: 'Pureza ultra-elevada para transporte de insumos, água PW/WFI e cosméticos.',
    fullDescription: 'O segmento farmacêutico e de biotecnologia demanda o nível máximo de controle microbiológico. Nossos tubos e conexões atendem a especificações rigorosas como polimento eletrolítico e certificações de estanqueidade total, ideais para sistemas de circulação de água purificada (PW), água para injetáveis (WFI) e insumos biológicos.',
    iconName: 'ShieldCheck',
    keyRequirements: [
      'Polimento eletrolítico de alta especificação',
      'Estanqueidade cirúrgica e vedações de alto desempenho',
      'Ausência de contaminação cruzada por resíduos ferrosos',
      'Suporte a temperaturas e pressões contínuas de assepsia'
    ],
    recommendedMaterials: ['Aço Inox AISI 316', 'Aço Inox AISI 304']
  },
  {
    id: 'construcao',
    name: 'Arquitetura e Construção Civil',
    shortDescription: 'Estruturas, corrimãos, acabamentos estéticos e suportes de alta durabilidade.',
    fullDescription: 'O aço inoxidável é amplamente utilizado na arquitetura moderna pela sua resistência incomparável às intempéries, facilidade de limpeza e apelo visual contemporâneo. Oferecemos chapas escovadas ou polidas, perfis cantoneira e barras chatas de alta qualidade para corrimãos, fachadas, estruturas metálicas e suportes civis robustos.',
    iconName: 'Wrench',
    keyRequirements: [
      'Acabamento visual polido espelhado ou escovado premium',
      'Excelente soldabilidade estrutural e facilidade de corte/dobra',
      'Resistência à corrosão por exposição climática e salina',
      'Alta rigidez mecânica e estabilidade dimensional em fachadas'
    ],
    recommendedMaterials: ['Aço Inox AISI 304', 'Aço Carbono Galvanizado']
  },
  {
    id: 'quimica',
    name: 'Indústria Química e Petroquímica',
    shortDescription: 'Alta resistência química a fluidos agressivos, ácidos, vapores e altas pressões.',
    fullDescription: 'No processamento químico de alta agressividade, as tubulações devem suportar ácidos concentrados, reagentes severos, vapores e fluidos sob pressões intensas. Nossos tubos Schedule sem costura e conexões forjadas em ligas especiais oferecem resistência superior contra pites, corrosão sob frestas e desgaste mecânico contínuo.',
    iconName: 'ShieldAlert',
    keyRequirements: [
      'Resistência superior em meios clorados e ácidos quentes',
      'Conexões Schedule de parede grossa (SCH 40/80) para alta pressão',
      'Flanges forjados em conformidade com normas ANSI/ASME',
      'Válvulas de bloqueio robustas com vedação PTFE de alta densidade'
    ],
    recommendedMaterials: ['Aço Inox AISI 316', 'Aço Carbono ASTM A106']
  }
];

export const PRODUCTS: Product[] = [
  // --- TUBOS E CONEXÕES ---
  {
    id: 'tubo-inox-od-sanitario',
    name: 'Tubo de Aço Inox OD Sanitário',
    category: 'tubos',
    subcategory: 'Tubos Sanitários',
    description: 'Tubo polido interno e externo grau alimentício. Ideal para transferência de laticínios, bebidas e soluções farmacêuticas sob rigorosos protocolos de assepsia.',
    materials: ['Aço Inox AISI 304', 'Aço Inox AISI 316'],
    sizes: ['1"', '1.1/2"', '2"', '2.1/2"', '3"', '4"'],
    pressureClasses: ['Espessura 1,20mm', 'Espessura 1,50mm', 'Espessura 2,00mm'],
    standard: 'ASTM A270',
    featured: true,
    unit: 'metro',
    applicationNote: 'Altamente recomendado para linhas alimentícias e sistemas de limpeza CIP automatizados.'
  },
  {
    id: 'tubo-inox-astm-a312',
    name: 'Tubo de Aço Inox ASTM A312 (Industrial)',
    category: 'tubos',
    subcategory: 'Tubos Industriais',
    description: 'Tubo de inox sem costura ou com costura, para aplicações químicas, petroquímicas e condução de gases/fluidos corrosivos em alta pressão.',
    materials: ['Aço Inox AISI 304', 'Aço Inox AISI 316'],
    sizes: ['1/2"', '3/4"', '1"', '1.1/4"', '1.1/2"', '2"', '2.1/2"', '3"', '4"', '6"', '8"'],
    pressureClasses: ['SCH 10s', 'SCH 40s', 'SCH 80s'],
    standard: 'ASTM A312',
    featured: true,
    unit: 'barra (6 metros)',
    applicationNote: 'Comumente empregado em montagens de usinas sucroalcooleiras e redes petroquímicas pesadas.'
  },
  {
    id: 'tubo-aco-carbono-a106',
    name: 'Tubo de Aço Carbono Sem Costura ASTM A106',
    category: 'tubos',
    subcategory: 'Tubos Industriais',
    description: 'Tubo de aço carbono sem costura para linhas de vapor, água quente, ar comprimido de alta pressão, óleos térmicos e gases estruturais de caldeiraria.',
    materials: ['Aço Carbono'],
    sizes: ['1/2"', '3/4"', '1"', '1.1/2"', '2"', '3"', '4"', '6"', '8"', '10"'],
    pressureClasses: ['SCH 40', 'SCH 80', 'SCH 160'],
    standard: 'ASTM A106 Grau B',
    featured: true,
    unit: 'barra (6 metros)',
    applicationNote: 'Adequado para ciclos severos de pressão e temperaturas de até 450°C.'
  },
  {
    id: 'tubo-aco-galvanizado-nbr-5580',
    name: 'Tubo de Aço Galvanizado NBR 5580',
    category: 'tubos',
    subcategory: 'Tubos Industriais',
    description: 'Tubo galvanizado por imersão a quente (fogo), com costura, ideal para condução de água fria, ar comprimido comum e sistemas prediais de sprinklers.',
    materials: ['Aço Galvanizado'],
    sizes: ['1/2"', '3/4"', '1"', '1.1/4"', '1.1/2"', '2"', '2.1/2"', '3"', '4"'],
    pressureClasses: ['Classe Leve (L)', 'Classe Média (M)'],
    standard: 'NBR 5580',
    unit: 'barra (6 metros)',
    applicationNote: 'Excelente durabilidade externa contra intempéries devido à espessa proteção galvânica.'
  },
  {
    id: 'curva-90-solda-od',
    name: 'Curva 90º de Solda OD Sanitária',
    category: 'conexoes',
    subcategory: 'Conexões Sanitárias',
    description: 'Curva sanitária estampada com pontas para solda topo, polida internamente para fluxo contínuo e sem pontos cegos de contaminação.',
    materials: ['Aço Inox AISI 304', 'Aço Inox AISI 316'],
    sizes: ['1"', '1.1/2"', '2"', '2.1/2"', '3"', '4"'],
    pressureClasses: ['Espessura 1,50mm', 'Espessura 2,00mm'],
    standard: 'ASTM A403 / OD',
    unit: 'peça',
    applicationNote: 'Compatível com tubos sanitários normatizados pela ASTM A270.'
  },
  {
    id: 'curva-90-aco-carbono-sch40',
    name: 'Curva 90º de Solda Curta/Longa SCH 40',
    category: 'conexoes',
    subcategory: 'Conexões de Alta Pressão',
    description: 'Conexão tubular em aço carbono ASTM A234 WPB para solda orbital e chanfro para montagem estrutural ou hidráulica industrial pesada.',
    materials: ['Aço Carbono'],
    sizes: ['1/2"', '3/4"', '1"', '1.1/2"', '2"', '3"', '4"', '6"', '8"'],
    pressureClasses: ['SCH 40', 'SCH 80'],
    standard: 'ANSI B16.9 / ASTM A234',
    unit: 'peça',
    applicationNote: 'Ideal para linhas hidráulicas utilitárias de óleo e vapor em alta pressão.'
  },
  {
    id: 'flange-sobreposto-so',
    name: 'Flange Sobreposto (Slip-On) ANSI 150#',
    category: 'conexoes',
    subcategory: 'Flanges',
    description: 'Flange de aço deslizante para solda pesada interna e externa, faces ranhuradas padrão para acoplamento seguro com juntas de vedação.',
    materials: ['Aço Inox AISI 304', 'Aço Inox AISI 316', 'Aço Carbono'],
    sizes: ['1/2"', '3/4"', '1"', '1.1/2"', '2"', '2.1/2"', '3"', '4"', '6"', '8"'],
    pressureClasses: ['Classe 150#', 'Classe 300#'],
    standard: 'ANSI B16.5',
    featured: true,
    unit: 'peça',
    applicationNote: 'Para fixação flangeada de tubos, válvulas borboleta e bombas.'
  },
  {
    id: 'conexao-roscada-bsp',
    name: 'Conexão Roscada de Alta Pressão BSP/NPT',
    category: 'conexoes',
    subcategory: 'Conexões Roscadas',
    description: 'Tês, Cotovelos, Luvas e Niples roscados usinados com precisão para conexões rápidas estanqueadas por fita teflon ou trava química.',
    materials: ['Aço Inox AISI 304', 'Aço Inox AISI 316', 'Aço Carbono'],
    sizes: ['1/4"', '3/8"', '1/2"', '3/4"', '1"', '1.1/2"', '2"'],
    pressureClasses: ['Classe 150#', 'Classe 3000#'],
    standard: 'ANSI B16.11 / NPT / BSP',
    unit: 'peça',
    applicationNote: 'Excelente para pequenos diâmetros e linhas de purga de ar e amostragem.'
  },

  // --- VÁLVULAS ---
  {
    id: 'valvula-borboleta-sanitaria',
    name: 'Válvula Borboleta Sanitária Manual',
    category: 'valvulas',
    subcategory: 'Válvulas Sanitárias',
    description: 'Válvula com corpo em inox e acionamento manual por alavanca multi-posição. Vedação higiênica e desmontagem rápida para limpeza.',
    materials: ['Aço Inox AISI 304', 'Aço Inox AISI 316'],
    sizes: ['1"', '1.1/2"', '2"', '2.1/2"', '3"', '4"'],
    pressureClasses: ['Vedação EPDM', 'Vedação Silicone', 'Vedação Viton'],
    standard: 'Grau Alimentício SMS/TC',
    featured: true,
    unit: 'peça',
    applicationNote: 'Controle de fluidos viscosos de laticínios sem restrição de fluxo.'
  },
  {
    id: 'valvula-esfera-monobloco',
    name: 'Válvula de Esfera Monobloco e Tri-partida',
    category: 'valvulas',
    subcategory: 'Válvulas Industriais',
    description: 'Válvula esfera com passagem plena e vedações de PTFE puro. Passagem reta de baixíssima perda de carga, abertura rápida em 1/4 de volta.',
    materials: ['Aço Inox AISI 304', 'Aço Inox AISI 316', 'Aço Carbono'],
    sizes: ['1/4"', '1/2"', '3/4"', '1"', '1.1/2"', '2"', '3"', '4"'],
    pressureClasses: ['Classe 150#', 'Classe 300#', '1000 WOG'],
    standard: 'ANSI B16.34',
    featured: true,
    unit: 'peça',
    applicationNote: 'Bloqueio instantâneo e robusto para redes hidráulicas de água, ar, óleos e ácidos diluídos.'
  },
  {
    id: 'valvula-retencao-vertical',
    name: 'Válvula de Retenção Vertical/Horizontal',
    category: 'valvulas',
    subcategory: 'Válvulas de Retenção',
    description: 'Válvula automática por pistão ou portinhola que impede o refluxo de fluidos nas linhas de bombeamento de água ou sistemas de condensado.',
    materials: ['Aço Inox AISI 304', 'Aço Carbono'],
    sizes: ['1/2"', '3/4"', '1"', '1.1/2"', '2"', '3"', '4"'],
    pressureClasses: ['Classe 150#', 'Classe 800#'],
    standard: 'API 602 / ANSI B16.34',
    unit: 'peça',
    applicationNote: 'Essencial na saída de bombas hidráulicas para proteção do rotor.'
  },
  {
    id: 'valvula-solenoide-laton-inox',
    name: 'Válvula Solenoide de Ação Direta',
    category: 'valvulas',
    subcategory: 'Válvulas Especiais',
    description: 'Válvula eletromecânica normalmente fechada (NF) ou normalmente aberta (NA) para automação pneumática e hidráulica rápida por CLP.',
    materials: ['Aço Inox AISI 316', 'Latão Forjado'],
    sizes: ['1/4"', '1/2"', '3/4"', '1"'],
    pressureClasses: ['Bobina 12VCC', 'Bobina 24VCC', 'Bobina 110VCA', 'Bobina 220VCA'],
    standard: 'Grau de Proteção IP65',
    unit: 'peça',
    applicationNote: 'Utilizada para corte instantâneo de água, vapor ou óleos combustíveis leves.'
  },

  // --- ESTRUTURA ---
  {
    id: 'chapa-aco-inox',
    name: 'Chapa de Aço Inox (Polida/Escovada/Industrial)',
    category: 'estrutura',
    subcategory: 'Chapas e Bobinas',
    description: 'Chapas laminadas a quente ou a frio com acabamento industrial nº 1, polido brilhante ou escovado. Excelente para tanques e proteções mecânicas.',
    materials: ['Aço Inox AISI 304', 'Aço Inox AISI 316'],
    sizes: ['Espessura 1,0mm', 'Espessura 1,5mm', 'Espessura 2,0mm', 'Espessura 3,0mm', 'Espessura 4,75mm (3/16")', 'Espessura 6,35mm (1/4")'],
    pressureClasses: ['Medidas 1000x2000mm', 'Medidas 1220x3000mm', 'Medidas 1500x3000mm'],
    standard: 'ASTM A240',
    unit: 'chapa',
    applicationNote: 'Utilizada em caldeirarias para revestimento de misturadores, bancadas de processo e estruturas sanitárias.'
  },
  {
    id: 'perfis-estrutura-cantoneiras',
    name: 'Perfis Estruturais em L (Cantoneiras) e Vigas',
    category: 'estrutura',
    subcategory: 'Perfis e Barras',
    description: 'Perfis laminados com precisão dimensional excelentes para travamentos de plataformas suspensas, grades estruturais e pipe-racks industriais.',
    materials: ['Aço Inox AISI 304', 'Aço Carbono'],
    sizes: ['3/4" x 1/8"', '1" x 1/8"', '1.1/4" x 1/8"', '1.1/2" x 3/16"', '2" x 1/4"', '3" x 1/4"'],
    pressureClasses: ['Comprimento 6 metros'],
    standard: 'ASTM A276 / ASTM A36',
    unit: 'barra',
    applicationNote: 'Suporta elevadas cargas de pipe-racks para fixação aérea de tubulações.'
  },

  // --- COMBATE A INCÊNDIO ---
  {
    id: 'mangueira-incendio-certificada',
    name: 'Mangueira de Incêndio Predial/Industrial Certificada',
    category: 'incendio',
    subcategory: 'Equipamentos de Combate',
    description: 'Mangueira flexível tecida em fio de poliéster de alta tenacidade e tubo interno de borracha sintética. Equipada com uniões engate rápido Storz.',
    materials: ['Fibras Sintéticas com Revestimento de Borracha'],
    sizes: ['1.1/2" (38mm)', '2.1/2" (65mm)'],
    pressureClasses: ['Tipo 1 (Predial)', 'Tipo 2 (Industrial - Alta Abrasão)'],
    standard: 'NBR 11861',
    unit: 'rolo (15 ou 30 metros)',
    applicationNote: 'Mangueira tipo 2 recomendada para indústrias petroquímicas, usinas e caldeirarias.'
  },
  {
    id: 'registro-globo-angular-incendio',
    name: 'Registro Globo Angular 45º para Hidrante',
    category: 'incendio',
    subcategory: 'Registros e Conexões Incêndio',
    description: 'Válvula de controle instalada na saída da rede de hidrantes, permitindo acoplamento rápido da mangueira e abertura progressiva da vazão de água.',
    materials: ['Bronze Fundido', 'Latão'],
    sizes: ['2.1/2" (65mm)'],
    pressureClasses: ['Rosca BSP / Acoplamento Storz'],
    standard: 'Classe 150# NBR',
    unit: 'peça',
    applicationNote: 'Instalado em abrigos de hidrante industriais sob rigoroso teste de estanqueidade.'
  },

  // --- EQUIPAMENTOS AUXILIARES ---
  {
    id: 'motobomba-schneider-me',
    name: 'Motobomba Centrifuga Multiestágio Schneider ME',
    category: 'auxiliares',
    subcategory: 'Motobombas',
    description: 'Bomba hidráulica de alta pressão Schneider para recalque, alimentação de caldeiras, sistemas de refrigeração e pressurização de grandes redes.',
    materials: ['Corpo em Ferro Fundido', 'Rotores em Bronze', 'Eixo em Aço Inox'],
    sizes: ['Potência 2.0 HP', 'Potência 3.0 HP', 'Potência 5.0 HP', 'Potência 7.5 HP', 'Potência 10.0 HP'],
    pressureClasses: ['Trifásica 220V/380V', 'Monofásica 110V/220V'],
    standard: 'Eficiência Energética PROCEL A',
    featured: true,
    unit: 'unidade',
    applicationNote: 'Amplamente recomendada em projetos de recalque hidráulico e alimentação auxiliar de pequenas caldeiras.'
  }
];
