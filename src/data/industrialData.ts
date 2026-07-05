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
  {
    "id": "abracadeira-suporte-2",
    "name": "Abraçadeira Suporte",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ABRACADEIRA-SUPORTE.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "acionador-bomba-2",
    "name": "Acionador Bomba",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ACIONADOR-BOMBA.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "acionador-incendio-2",
    "name": "Acionador Incêndio",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ACIONADOR-INCENDIO.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "adaptador-storz-aluminio-2",
    "name": "Adaptador Storz Aluminio",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ADAPTADOR-STORZ-ALUMINIO-2.1-2.jpg",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "adaptador-storz-latao-2",
    "name": "Adaptador Storz Latão",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ADAPTADOR-STORZ-LATAO-2.1-2.jpg",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "adesivo-araldite-2",
    "name": "Adesivo Araldite",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ADESIVO-ARALDITE.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "aluminio-corrugado-2",
    "name": "Aluminio Corrugado",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ALUMINIO-CORRUGADO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "anel-vedacao-rjt-2",
    "name": "Anel Vedacao RJT",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ANEL-VEDACAO-RJT.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "anel-vedacao-sms-2",
    "name": "Anel Vedacao SMS",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ANEL-VEDACAO-SMS.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "anel-vedacao-tc-2",
    "name": "Anel Vedacao TC",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ANEL-VEDACAO-TC.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "argamassa-refrataria-2",
    "name": "Argamassa Refrataria",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ARGAMASSA-REFRATARIA.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "atuador-pneumatico-2",
    "name": "Atuador Pneumatico",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ATUADOR-PNEUMATICO.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "barra-chata-2",
    "name": "Barra Chata",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/BARRA-CHATA.jpeg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "barra-chata-inox-3",
    "name": "Barra Chata Inox",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BARRA-CHATA-INOX.jpg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "barra-chata-inox-4",
    "name": "Barra Chata Inox",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BARRA-CHATA-INOX-1.jpg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "barra-redonda-2",
    "name": "Barra Redonda",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/BARRA-REDONDA.jpg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "barra-redonda-inox-3",
    "name": "Barra Redonda Inox",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BARRA-REDONDA-INOX.png",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "barra-redonda-inox-4",
    "name": "Barra Redonda Inox",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BARRA-REDONDA-INOX-1.png",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "bico-sprinklers-2",
    "name": "Bico Sprinklers",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BICO-SPRINKLERS.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "bobina-aluminio-2",
    "name": "Bobina Aluminio",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BOBINA-ALUMINIO.png",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "bobina-inox-2",
    "name": "Bobina Inox",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": true,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BOBINA-INOX.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "boia-controladora-de-nivel-quebra-gelo-2",
    "name": "Boia Controladora De Nivel Quebra Gelo",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BOIA-CONTROLADORA-DE-NIVEL-QUEBRA-GELO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "bucha-de-reducao-galvanizada-2",
    "name": "Bucha De Redução Galvanizada",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/BUCHA-REDUCAO-GALVANIZADO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "bucha-reducao-inox-3",
    "name": "Bucha Redução Inox",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BUCHA-REDUCAO-INOX.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "bucha-reducao-inox-4",
    "name": "Bucha Redução Inox",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BUCHA-REDUCAO-INOX-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "bujao-galvanizado-2",
    "name": "Bujão Galvanizado",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/BUJAO-GALVANIZADO.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "bujao-inox-3",
    "name": "Bujão Inox",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BUJAO-INOX.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "bujao-inox-4",
    "name": "Bujão Inox",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/BUJAO-INOX-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "caixa-incendio-dupla-sobrepor-2",
    "name": "Caixa Incêndio Dupla Sobrepor",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CAIXA-INCENDIO-DUPLA-SOBREPOR.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "caixa-incendio-embutir-2",
    "name": "Caixa Incêndio Embutir",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CAIXA-INCENDIO-EMBUTIR.jpeg",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "caixa-incendio-sobrepor-2",
    "name": "Caixa Incêndio Sobrepor",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CAIXA-INCENDIO-SOBREPOR.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "caixa-incendio-sobrepor-dupla-inox-2",
    "name": "Caixa Incêndio Sobrepor Dupla Inox",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CAIXA-INCENDIO-SOBREPOR-DUPLA-INOX.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "caixa-incendio-sobrepor-inox-2",
    "name": "Caixa Incêndio Sobrepor Inox",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CAIXA-INCENDIO-SOBREPOR-INOX.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "calha-la-de-rocha-2",
    "name": "Calha La De Rocha",
    "category": "auxiliares",
    "subcategory": "Isolamentos e Refratários",
    "description": "Material isolante de alta densidade térmica e refratários para proteção de tubulações de vapor, caldeiras e fornos industriais.",
    "materials": [
      "Lã de Rocha",
      "Fibra Cerâmica",
      "Material Refratário"
    ],
    "sizes": [
      "Espessura 1\"",
      "Espessura 2\"",
      "Espessura 3\""
    ],
    "pressureClasses": [
      "Densidade 32 kg/m³",
      "Densidade 64 kg/m³",
      "Densidade 96 kg/m³"
    ],
    "standard": "Isolamento Térmico ABNT",
    "featured": false,
    "unit": "unidade",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CALHA-LA-ROCHA.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "calha-la-rocha-2",
    "name": "Calha La Rocha",
    "category": "auxiliares",
    "subcategory": "Isolamentos e Refratários",
    "description": "Material isolante de alta densidade térmica e refratários para proteção de tubulações de vapor, caldeiras e fornos industriais.",
    "materials": [
      "Lã de Rocha",
      "Fibra Cerâmica",
      "Material Refratário"
    ],
    "sizes": [
      "Espessura 1\"",
      "Espessura 2\"",
      "Espessura 3\""
    ],
    "pressureClasses": [
      "Densidade 32 kg/m³",
      "Densidade 64 kg/m³",
      "Densidade 96 kg/m³"
    ],
    "standard": "Isolamento Térmico ABNT",
    "featured": false,
    "unit": "unidade",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CALHA-LA-ROCHA.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "canopla-2",
    "name": "Canopla",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CANOPLA.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "cantoneira-2",
    "name": "Cantoneira",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CANTONEIRA-ACO-CARBONO.jpg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "cantoneira-inox-3",
    "name": "Cantoneira Inox",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CANTONEIRA-INOX.jpg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "cantoneira-inox-4",
    "name": "Cantoneira Inox",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CANTONEIRA-INOX-1.jpg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "caps-inox-od-3",
    "name": "Caps Inox OD",
    "category": "conexoes",
    "subcategory": "Conexões Sanitárias",
    "description": "Conexão polida grau alimentício de alta assepsia para montagens de linhas sanitárias farmacêuticas ou de bebidas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A403 / OD Sanitário",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CAPS-INOX-OD.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "caps-inox-od-4",
    "name": "Caps Inox OD",
    "category": "conexoes",
    "subcategory": "Conexões Sanitárias",
    "description": "Conexão polida grau alimentício de alta assepsia para montagens de linhas sanitárias farmacêuticas ou de bebidas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A403 / OD Sanitário",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CAPS-INOX-OD-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "caps-inox-sch05-sch10-sch40-2",
    "name": "Caps Inox SCH 5 SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CAPS-INOX-SCH05-SCH10-SCH40.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "caps-inox-sch10-sch40-2",
    "name": "Caps Inox SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CAPS-INOX-SCH10-SCH40.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "caps-tampao-sch40-sch80-2",
    "name": "Caps Tampão SCH 40 SCH 80",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CAPS-ACO-CARBONO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "central-convencional-2",
    "name": "Central Convencional",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CENTRAL-CONVENCIONAL.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "central-enderecavel-2",
    "name": "Central Enderecavel",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CENTRAL-ENDERECAVEL.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "chapa-expandida-2",
    "name": "Chapa Expandida",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CHAPA-EXPANDIDA.png",
    "categories": [
      "Chapas",
      "Chapas Aço Carbono",
      "Aço Carbono",
      "Caldeiraria"
    ]
  },
  {
    "id": "chapa-inox-espelhada-2",
    "name": "Chapa Inox Espelhada",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CHAPA-INOX-ESPELHADA.png",
    "categories": [
      "Chapas",
      "Chapas Inox304",
      "Chapas Inox316",
      "Inox304",
      "Inox316"
    ]
  },
  {
    "id": "chapa-inox-expandida-2",
    "name": "Chapa Inox Expandida",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CHAPA-INOX-EXPANDIDA.png",
    "categories": [
      "Chapas",
      "Chapas Inox304",
      "Chapas Inox316",
      "Inox304",
      "Inox316"
    ]
  },
  {
    "id": "chapa-lisa-2",
    "name": "Chapa Lisa",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CHAPA-LISA-ACO-CARBONO.jpg",
    "categories": [
      "Chapas",
      "Chapas Aço Carbono",
      "Aço Carbono",
      "Caldeiraria"
    ]
  },
  {
    "id": "chapa-lisa-inox-3",
    "name": "Chapa Lisa Inox",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CHAPA-LISA-INOX.jpg",
    "categories": [
      "Chapas",
      "Chapas Inox304",
      "Inox304"
    ]
  },
  {
    "id": "chapa-lisa-inox-4",
    "name": "Chapa Lisa Inox",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2024/02/chapa-de-inox-em-joinville.webp",
    "categories": [
      "Chapas",
      "Chapas Inox316",
      "Inox316"
    ]
  },
  {
    "id": "chapa-perfurada-2",
    "name": "Chapa Perfurada",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CHAPA-PERFURADA.jpg",
    "categories": [
      "Chapas",
      "Chapas Aço Carbono",
      "Aço Carbono",
      "Caldeiraria"
    ]
  },
  {
    "id": "chapa-perfurada-inox-3",
    "name": "Chapa Perfurada Inox",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CHAPA-PERFURADA-INOX.png",
    "categories": [
      "Chapas",
      "Chapas Inox304",
      "Inox304"
    ]
  },
  {
    "id": "chapa-perfurada-inox-4",
    "name": "Chapa Perfurada Inox",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CHAPA-PERFURADA-INOX-1.png",
    "categories": [
      "Chapas",
      "Chapas Inox316",
      "Inox316"
    ]
  },
  {
    "id": "chapa-piso-inox-2",
    "name": "Chapa Piso Inox",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CHAPA-PISO-INOX.png",
    "categories": [
      "Chapas",
      "Chapas Inox304",
      "Chapas Inox316",
      "Inox304",
      "Inox316"
    ]
  },
  {
    "id": "chapa-piso-xadrez-2",
    "name": "Chapa Piso Xadrez",
    "category": "estrutura",
    "subcategory": "Chapas e Bobinas",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "chapa",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CHAPA-PISO-XADREZ.jpg",
    "categories": [
      "Chapas",
      "Chapas Aço Carbono",
      "Aço Carbono",
      "Caldeiraria"
    ]
  },
  {
    "id": "chave-de-fluxo-2",
    "name": "Chave De Fluxo",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CHAVE-DE-FLUXO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "chave-storz-2",
    "name": "Chave Storz",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CHAVE-STORZ.jpeg",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "cilindro-pneumatico-2",
    "name": "Cilindro Pneumatico",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CILINDRO-PNEUMATICO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "concreto-refratario-2",
    "name": "Concreto Refratario",
    "category": "auxiliares",
    "subcategory": "Isolamentos e Refratários",
    "description": "Material isolante de alta densidade térmica e refratários para proteção de tubulações de vapor, caldeiras e fornos industriais.",
    "materials": [
      "Lã de Rocha",
      "Fibra Cerâmica",
      "Material Refratário"
    ],
    "sizes": [
      "Espessura 1\"",
      "Espessura 2\"",
      "Espessura 3\""
    ],
    "pressureClasses": [
      "Densidade 32 kg/m³",
      "Densidade 64 kg/m³",
      "Densidade 96 kg/m³"
    ],
    "standard": "Isolamento Térmico ABNT",
    "featured": true,
    "unit": "unidade",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CONCRETO-REFRATARIO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "conexao-pu-2",
    "name": "Conexao PU",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CONEXAO-PU.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cotovelo-45-graus-2",
    "name": "Cotovelo 45 Graus",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/COTOVELO-45-ALTA-PRESSAO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cotovelo-90-graus-2",
    "name": "Cotovelo 90 Graus",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/COTOVELO-90-ALTA-PRESSAO-2.webp",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cotovelo-galvanizado-2",
    "name": "Cotovelo Galvanizado",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/COTOVELO-GALVANIZADO.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cotovelo-galvanizado-45-graus-2",
    "name": "Cotovelo Galvanizado 45 Graus",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/COTOVELO-GALVANIZADO-45-GRAUS.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cotovelo-inox-45o-3",
    "name": "Cotovelo Inox 45o",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/COTOVELO-INOX-45o.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cotovelo-inox-45o-4",
    "name": "Cotovelo Inox 45o",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/COTOVELO-INOX-45o-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cotovelo-inox-90o-3",
    "name": "Cotovelo Inox 90o",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/COTOVELO-INOX-90o.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cotovelo-inox-90o-4",
    "name": "Cotovelo Inox 90o",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/COTOVELO-INOX-90o-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cruzeta-galvanizada-2",
    "name": "Cruzeta Galvanizada",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/CRUZETA-GALVANIZADO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cruzeta-inox-304-sch10-sch40-2",
    "name": "Cruzeta Inox 304 SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CRUZETA-INOX-304-SCH10-SCH40.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "cruzeta-sch40-sch80-2",
    "name": "Cruzeta SCH 40 SCH 80",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CRUZETA-ACO-CARBONO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-aco-carbono-180-2",
    "name": "Curva Aço Carbono 180",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CURVA-ACO-CARBONO-180.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-aco-carbono-45-2",
    "name": "Curva Aço Carbono 45",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CURVA-ACO-CARBONO-45.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-aco-carbono-sch40-sch80-2",
    "name": "Curva Aço Carbono SCH 40 SCH 80",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/CURVA.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-galvanizada-ff-femea-femea-2",
    "name": "Curva Galvanizada Ff Femea Femea",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/CURVA-GALVANIZADO-FF.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-galvanizada-mf-macho-femea-2",
    "name": "Curva Galvanizada Mf Macho Femea",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/CURVA-GALVANIZADO-MF.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-galvanizada-mm-macho-macho-2",
    "name": "Curva Galvanizada Mm Macho Macho",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/CURVA-GALVANIZADO-MM.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-inox-od-3",
    "name": "Curva Inox OD",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CURVA-INOX-OD.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-inox-od-4",
    "name": "Curva Inox OD",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CURVA-INOX-OD-1.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-inox-sch05-sch10-sch40-2",
    "name": "Curva Inox SCH 5 SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CURVA-INOX-SCH05-SCH10-SCH40.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "curva-inox-sch10-sch40-2",
    "name": "Curva Inox SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Curvas e Cotovelos",
    "description": "Curva estampada ou forjada projetada para mudanças de direção de fluxo com baixíssima perda de carga residual.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/CURVA-INOX-SCH10-SCH40.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "detector-de-fumaca-2",
    "name": "Detector De Fumaca",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/DETECTOR-DE-FUMACA.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "eletrodo-de-nivel-2",
    "name": "Eletrodo De Nivel",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ELETRODO-DE-NIVEL.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "esguicho-jato-solido-aluminio-2",
    "name": "Esguicho Jato Solido Aluminio",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ESGUICHO-JATO-SOLIDO-ALUMINIO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "esguicho-jato-solido-latao-2",
    "name": "Esguicho Jato Solido Latão",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ESGUICHO-JATO-SOLIDO-LATAO.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "esguicho-regulavel-aluminio-2",
    "name": "Esguicho Regulavel Aluminio",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ESGUICHO-REGULAVEL-ALUMINIO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "esguicho-regulavel-latao-2",
    "name": "Esguicho Regulavel Latão",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ESGUICHO-REGULAVEL-LATAO.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "espigao-inox-3",
    "name": "Espigao Inox",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ESPIGAO-INOX.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "espigao-inox-4",
    "name": "Espigao Inox",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ESPIGAO-INOX-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "espigao-reducao-inox-3",
    "name": "Espigao Redução Inox",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ESPIGAO-REDUCAO-INOX.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "espigao-reducao-inox-4",
    "name": "Espigao Redução Inox",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/ESPIGAO-REDUCAO-INOX-1.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "filtro-y-flangeado-2",
    "name": "Filtro Y Flangeado",
    "category": "conexoes",
    "subcategory": "Flanges",
    "description": "Flange forjado de alta precisão para acoplamento e fixação flangeada de tubos, bombas e válvulas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.5",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FILTRO-Y-FLANGEADO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "filtro-y-fofo-2",
    "name": "Filtro Y FoFo (Ferro Fundido)",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FILTRO-Y-FOFO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "filtro-y-inox-2",
    "name": "Filtro Y Inox",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FILTRO-Y-INOX.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "filtro-y-latao-2",
    "name": "Filtro Y Latão",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FILTRO-Y-LATAO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "filtro-y-reto-amonia-2",
    "name": "Filtro Y Reto Amonia",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FILTRO-Y-RETO-AMONIA.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "fita-anticorrosiva-2",
    "name": "Fita Anticorrosiva",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FITA-ANTICORROSIVA.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "fita-de-aluminio-2",
    "name": "Fita De Aluminio",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FITA-ALUMINIO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "flange-aco-carbono-ansi-din-2",
    "name": "Flange Aço Carbono Ansi DIN",
    "category": "conexoes",
    "subcategory": "Flanges",
    "description": "Flange forjado de alta precisão para acoplamento e fixação flangeada de tubos, bombas e válvulas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.5",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/FLANGE-ACO-CARBONO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "flange-inox-ansi-3",
    "name": "Flange Inox Ansi",
    "category": "conexoes",
    "subcategory": "Flanges",
    "description": "Flange forjado de alta precisão para acoplamento e fixação flangeada de tubos, bombas e válvulas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.5",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FLANGE-INOX-ANSI.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "flange-inox-ansi-4",
    "name": "Flange Inox Ansi",
    "category": "conexoes",
    "subcategory": "Flanges",
    "description": "Flange forjado de alta precisão para acoplamento e fixação flangeada de tubos, bombas e válvulas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.5",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FLANGE-INOX-ANSI-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "flange-inox-ansi-od-3",
    "name": "Flange Inox Ansi OD",
    "category": "conexoes",
    "subcategory": "Flanges",
    "description": "Flange forjado de alta precisão para acoplamento e fixação flangeada de tubos, bombas e válvulas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.5",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FLANGE-INOX-ANSI-OD.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "flange-inox-ansi-od-4",
    "name": "Flange Inox Ansi OD",
    "category": "conexoes",
    "subcategory": "Flanges",
    "description": "Flange forjado de alta precisão para acoplamento e fixação flangeada de tubos, bombas e válvulas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.5",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/FLANGE-INOX-ANSI-OD-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "flange-sextavado-galvanizado-2",
    "name": "Flange Sextavado Galvanizado",
    "category": "conexoes",
    "subcategory": "Flanges",
    "description": "Flange forjado de alta precisão para acoplamento e fixação flangeada de tubos, bombas e válvulas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.5",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/FLANGE-SEXTAVADO-GALVANIZADO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "gaxeta-2",
    "name": "Gaxeta",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/GAXETA.jpeg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "injetor-comodoro-2",
    "name": "Injetor Comodoro",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/INJETOR-COMODORO.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "junta-expansao-epdm-2",
    "name": "Junta Expansao Epdm",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/JUNTA-EXPANSAO-EPDM.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "junta-expansao-fole-inox-2",
    "name": "Junta Expansao Fole Inox",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/JUNTA-EXPANSAO-FOLE-INOX.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "junta-expansao-soldavel-2",
    "name": "Junta Expansao Soldavel",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/JUNTA-EXPANSAO-SOLDAVEL.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "luminaria-1200-lumens-2",
    "name": "Luminaria 1200 Lumens",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/LUMINARIA-1200-LUMENS.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "luminaria-2200-lumens-2",
    "name": "Luminaria 2200 Lumens",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/LUMINARIA-2200-LUMENS.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "luminaria-30-leds-2",
    "name": "Luminaria 30 Leds",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/LUMINARIA-30-LEDS.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "luva-2",
    "name": "Luva",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/LUVA-ALTA-PRESSAO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "luva-de-reducao-mf-macho-femea-2",
    "name": "Luva De Redução Mf Macho Femea",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/LUVA-REDUCAO-MF-3.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "luva-galvanizada-2",
    "name": "Luva Galvanizada",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/LUVA-GALVANIZADA.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "luva-inox-3",
    "name": "Luva Inox",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/LUVA-INOX.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "luva-inox-4",
    "name": "Luva Inox",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/LUVA-INOX-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "luva-mannesman-2",
    "name": "Luva Mannesman",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/LUVA-MANNESMAN.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "luva-reducao-ff-2",
    "name": "Luva Redução Ff",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/LUVA-REDUCAO-FF-5.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "luva-reducao-inox-3",
    "name": "Luva Redução Inox",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/LUVA-REDUCAO-INOX.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "luva-reducao-inox-4",
    "name": "Luva Redução Inox",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/LUVA-REDUCAO-INOX-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "mangueira-incendio-2",
    "name": "Mangueira Incêndio",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "rolo (15 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/MANGUEIRA-INCENDIO.jpg",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "manometro-angular-caixa-inox-2",
    "name": "Manômetro Angular Caixa Inox",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/MANOMETRO-ANGULAR-CAIXA-INOX.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "manometro-reto-aco-carbono-2",
    "name": "Manômetro Reto Aço Carbono",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/MANOMETRO-RETO-ACO-CARBONO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "manometro-reto-caixa-inox-2",
    "name": "Manômetro Reto Caixa Inox",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/MANOMETRO-RETO-CAIXA-INOX.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "manometro-reto-total-inox-2",
    "name": "Manômetro Reto Total Inox",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/MANOMETRO-RETO-TOTAL-INOX.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "manovacuometro-2",
    "name": "Manovacuometro",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/MANOVACUOMETRO.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "manovacuometro-nh3-2",
    "name": "Manovacuometro NH3 (Amônia)",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/MANOVACUOMETRO-NH3.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "manta-de-fibra-ceramica-2",
    "name": "Manta De Fibra Ceramica",
    "category": "auxiliares",
    "subcategory": "Isolamentos e Refratários",
    "description": "Material isolante de alta densidade térmica e refratários para proteção de tubulações de vapor, caldeiras e fornos industriais.",
    "materials": [
      "Lã de Rocha",
      "Fibra Cerâmica",
      "Material Refratário"
    ],
    "sizes": [
      "Espessura 1\"",
      "Espessura 2\"",
      "Espessura 3\""
    ],
    "pressureClasses": [
      "Densidade 32 kg/m³",
      "Densidade 64 kg/m³",
      "Densidade 96 kg/m³"
    ],
    "standard": "Isolamento Térmico ABNT",
    "featured": false,
    "unit": "unidade",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/MANTA-FIBRA-CERAMICA.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "manta-la-de-rocha-2",
    "name": "Manta La De Rocha",
    "category": "auxiliares",
    "subcategory": "Isolamentos e Refratários",
    "description": "Material isolante de alta densidade térmica e refratários para proteção de tubulações de vapor, caldeiras e fornos industriais.",
    "materials": [
      "Lã de Rocha",
      "Fibra Cerâmica",
      "Material Refratário"
    ],
    "sizes": [
      "Espessura 1\"",
      "Espessura 2\"",
      "Espessura 3\""
    ],
    "pressureClasses": [
      "Densidade 32 kg/m³",
      "Densidade 64 kg/m³",
      "Densidade 96 kg/m³"
    ],
    "standard": "Isolamento Térmico ABNT",
    "featured": false,
    "unit": "unidade",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/MANTA-LA-ROCHA.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "meia-luva-2",
    "name": "Meia Luva",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/MEIA-LUVA-ALTA-PRESSAO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "niple-2",
    "name": "Niple",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/NIPLE-ALTA-PRESSAO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "niple-de-reducao-galvanizado-2",
    "name": "Niple De Redução Galvanizado",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/NIPLE-REDUCAO-GALVANIZADO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "niple-galvanizado-2",
    "name": "Niple Galvanizado",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/NIPLE-GALVANIZADO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "niple-inox-3",
    "name": "Niple Inox",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/NIPLE-INOX.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "niple-inox-4",
    "name": "Niple Inox",
    "category": "conexoes",
    "subcategory": "Conexões Roscadas",
    "description": "Conexão usinada com roscas de precisão BSP/NPT para acoplamentos estanques rápidos e duráveis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/NIPLE-INOX-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "painel-la-de-rocha-2",
    "name": "Painel La De Rocha",
    "category": "auxiliares",
    "subcategory": "Isolamentos e Refratários",
    "description": "Material isolante de alta densidade térmica e refratários para proteção de tubulações de vapor, caldeiras e fornos industriais.",
    "materials": [
      "Lã de Rocha",
      "Fibra Cerâmica",
      "Material Refratário"
    ],
    "sizes": [
      "Espessura 1\"",
      "Espessura 2\"",
      "Espessura 3\""
    ],
    "pressureClasses": [
      "Densidade 32 kg/m³",
      "Densidade 64 kg/m³",
      "Densidade 96 kg/m³"
    ],
    "standard": "Isolamento Térmico ABNT",
    "featured": false,
    "unit": "unidade",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/PAINEL-LA-ROCHA.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "pestana-inox-304-2",
    "name": "Pestana Inox 304",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PESTANA-INOX-304.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "pestana-inox-od-2",
    "name": "Pestana Inox OD",
    "category": "conexoes",
    "subcategory": "Conexões Sanitárias",
    "description": "Conexão polida grau alimentício de alta assepsia para montagens de linhas sanitárias farmacêuticas ou de bebidas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A403 / OD Sanitário",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PESTANA-INOX-OD.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "pestana-longa-2",
    "name": "Pestana Longa",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PESTANA-LONGA.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "plaqueta-refrataria-2",
    "name": "Plaqueta Refrataria",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/PLAQUETA-REFRATARIA.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "poliuretano-2",
    "name": "Poliuretano",
    "category": "auxiliares",
    "subcategory": "Isolamentos e Refratários",
    "description": "Material isolante de alta densidade térmica e refratários para proteção de tubulações de vapor, caldeiras e fornos industriais.",
    "materials": [
      "Lã de Rocha",
      "Fibra Cerâmica",
      "Material Refratário"
    ],
    "sizes": [
      "Espessura 1\"",
      "Espessura 2\"",
      "Espessura 3\""
    ],
    "pressureClasses": [
      "Densidade 32 kg/m³",
      "Densidade 64 kg/m³",
      "Densidade 96 kg/m³"
    ],
    "standard": "Isolamento Térmico ABNT",
    "featured": false,
    "unit": "unidade",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/POLIURETANO.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "ponta-com-rosca-galvanizado-2",
    "name": "Ponta Com Rosca Galvanizado",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/PONTA-ROSCA-GALVANIZADO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "ponta-rosca-bsp-npt-2",
    "name": "Ponta Rosca BSP NPT",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/PONTA-ROSCA-ACO-CARBONO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "ponta-rosca-inox-3",
    "name": "Ponta Rosca Inox",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PONTA-ROSCA-INOX.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "ponta-rosca-inox-4",
    "name": "Ponta Rosca Inox",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PONTA-ROSCA-INOX-1.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "pressostato-2",
    "name": "Pressostato",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PRESSOSTATO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "pressostato-danfoss-2",
    "name": "Pressostato Danfoss",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PRESSOSTATO-DANFOSS.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "pt100-cabecote-2",
    "name": "Pt100 Cabecote",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PT100-CABECOTE.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "purgador-boia-2",
    "name": "Purgador Boia",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PURGADOR-BOIA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "purgador-termodinamico-com-filtro-2",
    "name": "Purgador Termodinamico Com Filtro",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PURGADOR-TERMODINAMICO-COM-FILTRO.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "purgador-termodinamico-sem-filtro-2",
    "name": "Purgador Termodinamico Sem Filtro",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/PURGADOR-TERMODINAMICO-SEM-FILTRO.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "rebite-de-repuxo-de-aluminio-2",
    "name": "Rebite De Repuxo De Aluminio",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/REBITE-REPUXO-ALUMINIO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-concentrica-3",
    "name": "Redução Concêntrica",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REDUCAO-CONCENTRICA.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-concentrica-4",
    "name": "Redução Concêntrica",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REDUCAO-CONCENTRICA-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-concentrica-od-3",
    "name": "Redução Concêntrica OD",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REDUCAO-CONCENTRICA-OD.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-concentrica-od-4",
    "name": "Redução Concêntrica OD",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REDUCAO-CONCENTRICA-OD-1.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-concentrica-sch40-sch80-2",
    "name": "Redução Concêntrica SCH 40 SCH 80",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/REDUCAO-CONCENTRICA.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-excentrica-2",
    "name": "Redução Excêntrica",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REDUCAO-EXCENTRICA.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-excentrica-inox-sch05-sch10-sch40-2",
    "name": "Redução Excêntrica Inox SCH 5 SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REDUCAO-EXCENTRICA-INOX-SCH05-SCH10-SCH40.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-excentrica-od-3",
    "name": "Redução Excêntrica OD",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REDUCAO-EXCENTRICA-OD.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-excentrica-od-4",
    "name": "Redução Excêntrica OD",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REDUCAO-EXCENTRICA-OD-1.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "reducao-excentrica-sch40-sch80-2",
    "name": "Redução Excêntrica SCH 40 SCH 80",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/REDUCAO-EXCENTRICA.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "registro-gaveta-bruto-2",
    "name": "Registro Gaveta Bruto",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REGISTRO-GAVETA-BRUTO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "registro-globo-2",
    "name": "Registro Globo",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REGISTRO-GLOBO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "registro-hidrante-2",
    "name": "Registro Hidrante",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REGISTRO-HIDRANTE.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "registro-hidrante-industrial-2",
    "name": "Registro Hidrante Industrial",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REGISTRO-HIDRANTE-INDUSTRIAL.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "registro-indicador-de-nivel-2",
    "name": "Registro Indicador De Nivel",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/REGISTRO-INDICADOR-DE-NIVEL.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "rubinete-2",
    "name": "Rubinete",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/RUBINETE.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "selo-de-aluminio-2",
    "name": "Selo De Aluminio",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/SELO-ALUMINIO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "sirene-audio-visual-2",
    "name": "Sirene Audio Visual",
    "category": "incendio",
    "subcategory": "Equipamentos de Combate a Incêndio",
    "description": "Equipamento homologado e certificado pelo corpo de bombeiros para atuação rápida em redes de hidrantes e combate a incêndio.",
    "materials": [
      "Bronze Fundido",
      "Latão Forjado",
      "Alumínio"
    ],
    "sizes": [
      "1.5\"",
      "2.5\""
    ],
    "pressureClasses": [
      "Tipo 1 (Predial)",
      "Tipo 2 (Industrial)"
    ],
    "standard": "Norma NBR 11861 / NBR 13714",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/SIRENE-AUDIO-VISUAL.png",
    "categories": [
      "Combate a Incêndio"
    ]
  },
  {
    "id": "spray-ball-inox-2",
    "name": "Spray Ball Inox",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/SPRAY-BALL-INOX.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "tampao-galvanizado-2",
    "name": "Tampão Galvanizado",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/TAMPAO-GALVANIZADO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "tampao-inox-3",
    "name": "Tampão Inox",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TAMPAO-INOX.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "tampao-inox-4",
    "name": "Tampão Inox",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TAMPAO-INOX-1.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "tampao-passeio-60-x-40-2",
    "name": "Tampão Passeio 60 X 40",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TAMPAO-PASSEIO-60-X-40.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "tanque-de-pressao-2",
    "name": "Tanque De Pressao",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TANQUE-DE-PRESSAO.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "te-45-aco-carbono-2",
    "name": "Te 45 Aço Carbono",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/TE-45-ACO-CARBONO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-45-galvanizado-2",
    "name": "Te 45 Galvanizado",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/TE-45-GALVANIZADO.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-aco-carbono-sch40-sch80-2",
    "name": "Te Aço Carbono SCH 40 SCH 80",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/TE-ACO-CARBONO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-de-reducao-galvanizado-2",
    "name": "Te De Redução Galvanizado",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/TE-REDUCAO-GALVANIZADO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-galvanizado-2",
    "name": "Te Galvanizado",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/TE-GALVANIZADO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-inox-rosca-3",
    "name": "Te Inox Rosca",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-INOX-ROSCA.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-inox-rosca-4",
    "name": "Te Inox Rosca",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-INOX-ROSCA-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-inox-sch05-sch10-sch40-2",
    "name": "Te Inox SCH 5 SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-INOX-SCH05-SCH10-SCH40.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-inox-sch10-sch40-2",
    "name": "Te Inox SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-INOX-SCH10-SCH40.jpeg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-pi-pe-3",
    "name": "Te Pi Pe",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-PI-PE.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-pi-pe-4",
    "name": "Te Pi Pe",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-PI-PE-1.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-reducao-aco-carbono-sch40-sch80-2",
    "name": "Te Redução Aço Carbono SCH 40 SCH 80",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/TE-REDUCAO-ACO-CARBONO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-reducao-inox-od-3",
    "name": "Te Redução Inox OD",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-REDUCAO-INOX-OD.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-reducao-inox-od-4",
    "name": "Te Redução Inox OD",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-REDUCAO-INOX-OD-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-reducao-inox-sch05-sch10-sch40-2",
    "name": "Te Redução Inox SCH 5 SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-REDUCAO-INOX-SCH05-SCH10-SCH40.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "te-reducao-inox-sch10-sch40-2",
    "name": "Te Redução Inox SCH 10 SCH 40",
    "category": "conexoes",
    "subcategory": "Reduções Concêntricas e Excêntricas",
    "description": "Redução tubular projetada para transições suaves de diâmetro nas linhas de tubulações industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TE-REDUCAO-INOX-SCH10-SCH40.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "termometro-angular-aco-carbono-2",
    "name": "Termômetro Angular Aço Carbono",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TERMOMETRO-ANGULAR-ACO-CARBONO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "termometro-angular-inox-2",
    "name": "Termômetro Angular Inox",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TERMOMETRO-ANGULAR-INOX.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "termometro-reto-aco-carbono-2",
    "name": "Termômetro Reto Aço Carbono",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TERMOMETRO-RETO-ACO-CARBONO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "termometro-reto-inox-2",
    "name": "Termômetro Reto Inox",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TERMOMETRO-RETO-INOX.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "tijolo-refratario-2",
    "name": "Tijolo Refratario",
    "category": "auxiliares",
    "subcategory": "Isolamentos e Refratários",
    "description": "Material isolante de alta densidade térmica e refratários para proteção de tubulações de vapor, caldeiras e fornos industriais.",
    "materials": [
      "Lã de Rocha",
      "Fibra Cerâmica",
      "Material Refratário"
    ],
    "sizes": [
      "Espessura 1\"",
      "Espessura 2\"",
      "Espessura 3\""
    ],
    "pressureClasses": [
      "Densidade 32 kg/m³",
      "Densidade 64 kg/m³",
      "Densidade 96 kg/m³"
    ],
    "standard": "Isolamento Térmico ABNT",
    "featured": false,
    "unit": "unidade",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TIJOLO-REFRATARIO.jpg",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "tubo-a270-sanitario-2",
    "name": "Tubo A270 Sanitario",
    "category": "tubos",
    "subcategory": "Tubos Sanitários",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "Espessura 1,20mm",
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A270 / Grau OD",
    "featured": true,
    "unit": "metro",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-A270-SANITARIO.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-aco-carbono-2",
    "name": "Tubo Aço Carbono",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/TUBOS.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-de-vidro-2",
    "name": "Tubo De Vidro",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-DE-VIDRO.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-galvanizado-2",
    "name": "Tubo Galvanizado",
    "category": "tubos",
    "subcategory": "Tubos Galvanizados",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Galvanizado"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "Classe Leve (L)",
      "Classe Média (M)"
    ],
    "standard": "NBR 5580",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/TUBO-GALVANIZADO-L-M-SCHEDULE.jpeg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-inox-sch5-sch10-sch40-2",
    "name": "Tubo Inox Sch5 SCH 10 SCH 40",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-INOX-SCH5-SCH10-SCH40.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-inox-sch5-sch10-sch40-sch80-2",
    "name": "Tubo Inox Sch5 SCH 10 SCH 40 SCH 80",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-INOX-SCH5-SCH10-SCH40-SCH80.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-mangueira-pu-2",
    "name": "Tubo Mangueira PU",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-MANGUEIRA-PU.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-od-3",
    "name": "Tubo OD",
    "category": "tubos",
    "subcategory": "Tubos Sanitários",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "Espessura 1,20mm",
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A270 / Grau OD",
    "featured": false,
    "unit": "metro",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-OD.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-od-4",
    "name": "Tubo OD",
    "category": "tubos",
    "subcategory": "Tubos Sanitários",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "Espessura 1,20mm",
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A270 / Grau OD",
    "featured": false,
    "unit": "metro",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-OD-1.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-quadrado-inox-2",
    "name": "Tubo Quadrado Inox",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-QUADRADO-INOX.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-retangular-inox-2",
    "name": "Tubo Retangular Inox",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-RETANGULAR-INOX.png",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-sifao-inox-2",
    "name": "Tubo Sifao Inox",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-SIFAO-INOX.jpg",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "tubo-sifao-latao-2",
    "name": "Tubo Sifao Latão",
    "category": "tubos",
    "subcategory": "Tubos Industriais",
    "description": "Tubo industrial normatizado ideal para condução de fluidos, estruturas de caldeiraria e redes hidráulicas em geral.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/4\"",
      "1.1/2\"",
      "2\"",
      "2.1/2\"",
      "3\"",
      "4\"",
      "6\"",
      "8\""
    ],
    "pressureClasses": [
      "SCH 10",
      "SCH 40",
      "SCH 80"
    ],
    "standard": "ASTM A312 / ASTM A106",
    "featured": false,
    "unit": "barra (6 metros)",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/TUBO-SIFAO-LATAO.png",
    "categories": [
      "Tubos"
    ]
  },
  {
    "id": "uniao-2",
    "name": "União",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/UNIAO-ALTA-PRESSAO.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "uniao-din-inox-2",
    "name": "União DIN Inox",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/UNIAO-DIN-INOX.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "uniao-galvanizada-2",
    "name": "União Galvanizada",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/12/UNIAO-GALVANIZADA.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "uniao-inox-rjt-2",
    "name": "União Inox RJT",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/UNIAO-INOX-RJT.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "uniao-inox-rosca-3",
    "name": "União Inox Rosca",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/UNIAO-INOX-ROSCA.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "uniao-inox-rosca-4",
    "name": "União Inox Rosca",
    "category": "conexoes",
    "subcategory": "Conexões Industriais",
    "description": "Conexão tubular de alta resistência projetada para transições de fluxo, ramificações e fechamentos de redes hidráulicas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "SCH 10s",
      "SCH 40s",
      "Classe 150#"
    ],
    "standard": "ANSI B16.9 / B16.11",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/UNIAO-INOX-ROSCA-1.jpg",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "uniao-sms-3",
    "name": "União SMS",
    "category": "conexoes",
    "subcategory": "Conexões Sanitárias",
    "description": "Conexão polida grau alimentício de alta assepsia para montagens de linhas sanitárias farmacêuticas ou de bebidas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A403 / OD Sanitário",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/UNIAO-SMS.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "uniao-sms-4",
    "name": "União SMS",
    "category": "conexoes",
    "subcategory": "Conexões Sanitárias",
    "description": "Conexão polida grau alimentício de alta assepsia para montagens de linhas sanitárias farmacêuticas ou de bebidas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A403 / OD Sanitário",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/UNIAO-SMS-1.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "uniao-tc-3",
    "name": "União TC",
    "category": "conexoes",
    "subcategory": "Conexões Sanitárias",
    "description": "Conexão polida grau alimentício de alta assepsia para montagens de linhas sanitárias farmacêuticas ou de bebidas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A403 / OD Sanitário",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/UNIAO-TC.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "uniao-tc-4",
    "name": "União TC",
    "category": "conexoes",
    "subcategory": "Conexões Sanitárias",
    "description": "Conexão polida grau alimentício de alta assepsia para montagens de linhas sanitárias farmacêuticas ou de bebidas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Espessura 1,50mm",
      "Espessura 2,00mm"
    ],
    "standard": "ASTM A403 / OD Sanitário",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/UNIAO-TC-1.png",
    "categories": [
      "Conexões"
    ]
  },
  {
    "id": "vacuometro-2",
    "name": "Vacuometro",
    "category": "auxiliares",
    "subcategory": "Acessórios Industriais",
    "description": "Material auxiliar e componentes de fixação para montagens e manutenção em plantas industriais.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Classe 150#",
      "SCH 40"
    ],
    "standard": "Norma Técnica Padrão",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VACUOMETRO.png",
    "categories": [
      "Caldeiraria"
    ]
  },
  {
    "id": "valvula-agulha-aco-carbono-2",
    "name": "Válvula Agulha Aço Carbono",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-AGULHA-ACO-CARBONO.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-agulha-bronze-2",
    "name": "Válvula Agulha Bronze",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-AGULHA-BRONZE.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-agulha-inox-2",
    "name": "Válvula Agulha Inox",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-AGULHA-INOX.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-alivio-2",
    "name": "Válvula Alivio",
    "category": "valvulas",
    "subcategory": "Válvulas de Segurança e Alívio",
    "description": "Válvula de segurança calibrada para alívio de sobrepressão em caldeiras, vasos de pressão e redes de vapor.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ALIVIO.jpg",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-angular-amonia-2",
    "name": "Válvula Angular Amonia",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ANGULAR-AMONIA.jpeg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-bloqueio-reta-2",
    "name": "Válvula Bloqueio Reta",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BLOQUEIO-RETA.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-borboleta-com-atuador-2",
    "name": "Válvula Borboleta Com Atuador",
    "category": "valvulas",
    "subcategory": "Válvulas Borboleta",
    "description": "Válvula borboleta com design higiênico ou industrial, de fácil acoplamento e ideal para controle de vazão em tubulações.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-COM-ATUADOR.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-borboleta-com-caixa-redutora-2",
    "name": "Válvula Borboleta Com Caixa Redutora",
    "category": "valvulas",
    "subcategory": "Válvulas Borboleta",
    "description": "Válvula borboleta com design higiênico ou industrial, de fácil acoplamento e ideal para controle de vazão em tubulações.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-COM-CAIXA-REDUTORA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-borboleta-manual-2",
    "name": "Válvula Borboleta Manual",
    "category": "valvulas",
    "subcategory": "Válvulas Borboleta",
    "description": "Válvula borboleta com design higiênico ou industrial, de fácil acoplamento e ideal para controle de vazão em tubulações.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-MANUAL.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-borboleta-manual-revestida-ptfe-2",
    "name": "Válvula Borboleta Manual Revestida Ptfe",
    "category": "valvulas",
    "subcategory": "Válvulas Borboleta",
    "description": "Válvula borboleta com design higiênico ou industrial, de fácil acoplamento e ideal para controle de vazão em tubulações.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-MANUAL-REVESTIDA-PTFE.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-borboleta-silicone-2",
    "name": "Válvula Borboleta Silicone",
    "category": "valvulas",
    "subcategory": "Válvulas Borboleta",
    "description": "Válvula borboleta com design higiênico ou industrial, de fácil acoplamento e ideal para controle de vazão em tubulações.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-SILICONE.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-borboleta-silicone-com-atuador-2",
    "name": "Válvula Borboleta Silicone Com Atuador",
    "category": "valvulas",
    "subcategory": "Válvulas Borboleta",
    "description": "Válvula borboleta com design higiênico ou industrial, de fácil acoplamento e ideal para controle de vazão em tubulações.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-SILICONE-COM-ATUADOR.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-borboleta-silicone-sanitaria-cabo-preto-2",
    "name": "Válvula Borboleta Silicone Sanitaria Cabo Preto",
    "category": "valvulas",
    "subcategory": "Válvulas Borboleta",
    "description": "Válvula borboleta com design higiênico ou industrial, de fácil acoplamento e ideal para controle de vazão em tubulações.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-BORBOLETA-SILICONE-SANITARIA-CABO-PRETO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-de-retencao-amonia-2",
    "name": "Válvula De Retencao Amonia",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-DE-RETENCAO-AMONIA.jpeg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-bipartida-2",
    "name": "Válvula Esfera Bipartida",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-BIPARTIDA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-bipartida-com-atuador-2",
    "name": "Válvula Esfera Bipartida Com Atuador",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-BIPARTIDA-COM-ATUADOR.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-monobloco-2",
    "name": "Válvula Esfera Monobloco",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-MONOBLOCO.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-monobloco-com-atuador-2",
    "name": "Válvula Esfera Monobloco Com Atuador",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-MONOBLOCO-COM-ATUADOR.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-monobloco-fundo-caldeira-2",
    "name": "Válvula Esfera Monobloco Fundo Caldeira",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-MONOBLOCO-FUNDO-CALDEIRA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-tripartida-2",
    "name": "Válvula Esfera Tripartida",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-TRIPARTIDA.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-tripartida-com-atuador-2",
    "name": "Válvula Esfera Tripartida Com Atuador",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-TRIPARTIDA-COM-ATUADOR.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-tripartida-dba-dispositivo-bloqueio-automatico-2",
    "name": "Válvula Esfera Tripartida Dba Dispositivo Bloqueio Automatico",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-TRIPARTIDA-DBA-DISPOSITIVO-BLOQUEIO-AUTOMATICO.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-tripartida-flangeada-2",
    "name": "Válvula Esfera Tripartida Flangeada",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-TRIPARTIDA-FLANGEADA.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-tripartida-sms-2",
    "name": "Válvula Esfera Tripartida SMS",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-TRIPARTIDA-SMS.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-esfera-tripartida-tc-2",
    "name": "Válvula Esfera Tripartida TC",
    "category": "valvulas",
    "subcategory": "Válvulas de Esfera",
    "description": "Válvula de esfera com passagem plena e acionamento por alavanca de 1/4 de volta. Bloqueio rápido e seguro de fluidos.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-ESFERA-TRIPARTIDA-TC.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-expansao-amonia-2",
    "name": "Válvula Expansao Amonia",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-EXPANSAO-AMONIA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-gaveta-fecho-rapido-2",
    "name": "Válvula Gaveta Fecho Rapido",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-GAVETA-FECHO-RAPIDO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-gaveta-flangeada-2",
    "name": "Válvula Gaveta Flangeada",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-GAVETA-FLANGEADA.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-globo-2",
    "name": "Válvula Globo",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-GLOBO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-globo-aerodinamica-2",
    "name": "Válvula Globo Aerodinamica",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-GLOBO-AERODINAMICA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-globo-classe-800-2",
    "name": "Válvula Globo Classe 800",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-GLOBO-CLASSE-800.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-globo-tipo-y-2",
    "name": "Válvula Globo Tipo Y",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-GLOBO-TIPO-Y.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-guilhotina-com-cilindro-pneumatico-2",
    "name": "Válvula Guilhotina Com Cilindro Pneumatico",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-GUILHOTINA-COM-CILINDRO-PNEUMATICO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-guilhotina-manual-2",
    "name": "Válvula Guilhotina Manual",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-GUILHOTINA-MANUAL.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-para-manometro-2",
    "name": "Válvula Para Manômetro",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-PARA-MANOMETRO.jpeg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-pedal-bronze-2",
    "name": "Válvula Pedal Bronze",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-PEDAL-BRONZE.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-pedal-pvc-2",
    "name": "Válvula Pedal Pvc",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-PEDAL-PVC.jpeg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-pepratic-balcao-2",
    "name": "Válvula Pepratic Balcao",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-PEPRATIC-BALCAO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-pepratic-joelho-coxa-2",
    "name": "Válvula Pepratic Joelho Coxa",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-PEPRATIC-JOELHO-COXA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-pepratic-universal-2",
    "name": "Válvula Pepratic Universal",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-PEPRATIC-UNIVERSAL.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-pneumatica-vapor-2",
    "name": "Válvula Pneumatica Vapor",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-PNEUMATICA-VAPOR.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-abracadeira-inox-2",
    "name": "Válvula Retencao Abraçadeira Inox",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-ABRACADEIRA-INOX.png",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-disco-2",
    "name": "Válvula Retencao Disco",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-DISCO.png",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-disco-uniao-2",
    "name": "Válvula Retencao Disco União",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-DISCO-UNIAO.jpg",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-dupla-portinhola-2",
    "name": "Válvula Retencao Dupla Portinhola",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-DUPLA-PORTINHOLA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-fundo-poco-bronze-2",
    "name": "Válvula Retencao Fundo Poco Bronze",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-FUNDO-POCO-BRONZE.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-fundo-poco-ff-flangeado-2",
    "name": "Válvula Retencao Fundo Poco Ff Flangeado",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-FUNDO-POCO-FF-FLANGEADO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-fundo-poco-ff-rosca-2",
    "name": "Válvula Retencao Fundo Poco Ff Rosca",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-FUNDO-POCO-FF-ROSCA.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-horizontal-2",
    "name": "Válvula Retencao Horizontal",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-HORIZONTAL.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-portinhola-globo-2",
    "name": "Válvula Retencao Portinhola Globo",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-PORTINHOLA-GLOBO.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-portinhola-unica-2",
    "name": "Válvula Retencao Portinhola Unica",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-PORTINHOLA-UNICA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-retencao-vertical-2",
    "name": "Válvula Retencao Vertical",
    "category": "valvulas",
    "subcategory": "Válvulas de Retenção",
    "description": "Válvula de retenção automática projetada para impedir o refluxo de fluidos em linhas de bombeamento de água ou condensado.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-RETENCAO-VERTICAL.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-seguranca-comodoro-2",
    "name": "Válvula Seguranca Comodoro",
    "category": "valvulas",
    "subcategory": "Válvulas de Segurança e Alívio",
    "description": "Válvula de segurança calibrada para alívio de sobrepressão em caldeiras, vasos de pressão e redes de vapor.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SEGURANCA-COMODORO.jpg",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-seguranca-dupla-amonia-2",
    "name": "Válvula Seguranca Dupla Amonia",
    "category": "valvulas",
    "subcategory": "Válvulas de Segurança e Alívio",
    "description": "Válvula de segurança calibrada para alívio de sobrepressão em caldeiras, vasos de pressão e redes de vapor.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SEGURANCA-DUPLA-AMONIA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-seguranca-fluid-controls-2",
    "name": "Válvula Seguranca Fluid Controls",
    "category": "valvulas",
    "subcategory": "Válvulas de Segurança e Alívio",
    "description": "Válvula de segurança calibrada para alívio de sobrepressão em caldeiras, vasos de pressão e redes de vapor.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SEGURANCA-FLUID-CONTROLS.png",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-seguranca-simples-amonia-2",
    "name": "Válvula Seguranca Simples Amonia",
    "category": "valvulas",
    "subcategory": "Válvulas de Segurança e Alívio",
    "description": "Válvula de segurança calibrada para alívio de sobrepressão em caldeiras, vasos de pressão e redes de vapor.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SEGURANCA-SIMPLES-AMONIA.jpg",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-solenoide-amonia-2",
    "name": "Válvula Solenoide Amonia",
    "category": "valvulas",
    "subcategory": "Válvulas Solenoides",
    "description": "Válvula solenoide eletromecânica para automação industrial, controle rápido de fluidos e redes pneumáticas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Bobina 24VCC",
      "Bobina 110VCA",
      "Bobina 220VCA"
    ],
    "standard": "Bobina Selada IP65",
    "featured": true,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SOLENOIDE-AMONIA.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "valvula-solenoide-asco-2",
    "name": "Válvula Solenoide ASCO",
    "category": "valvulas",
    "subcategory": "Válvulas Solenoides",
    "description": "Válvula solenoide eletromecânica para automação industrial, controle rápido de fluidos e redes pneumáticas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Bobina 24VCC",
      "Bobina 110VCA",
      "Bobina 220VCA"
    ],
    "standard": "Bobina Selada IP65",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SOLENOIDE-ASCO.jpg",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-solenoide-namur-2",
    "name": "Válvula Solenoide NAMUR",
    "category": "valvulas",
    "subcategory": "Válvulas Solenoides",
    "description": "Válvula solenoide eletromecânica para automação industrial, controle rápido de fluidos e redes pneumáticas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Bobina 24VCC",
      "Bobina 110VCA",
      "Bobina 220VCA"
    ],
    "standard": "Bobina Selada IP65",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SOLENOIDE-NAMUR.jpeg",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-solenoide-simples-2",
    "name": "Válvula Solenoide Simples",
    "category": "valvulas",
    "subcategory": "Válvulas Solenoides",
    "description": "Válvula solenoide eletromecânica para automação industrial, controle rápido de fluidos e redes pneumáticas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Bobina 24VCC",
      "Bobina 110VCA",
      "Bobina 220VCA"
    ],
    "standard": "Bobina Selada IP65",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SOLENOIDE-SIMPLES.png",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-solenoide-uso-geral-2",
    "name": "Válvula Solenoide Uso Geral",
    "category": "valvulas",
    "subcategory": "Válvulas Solenoides",
    "description": "Válvula solenoide eletromecânica para automação industrial, controle rápido de fluidos e redes pneumáticas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Bobina 24VCC",
      "Bobina 110VCA",
      "Bobina 220VCA"
    ],
    "standard": "Bobina Selada IP65",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SOLENOIDE-USO-GERAL.jpg",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-solenoide-vapor-2",
    "name": "Válvula Solenoide Vapor",
    "category": "valvulas",
    "subcategory": "Válvulas Solenoides",
    "description": "Válvula solenoide eletromecânica para automação industrial, controle rápido de fluidos e redes pneumáticas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Bobina 24VCC",
      "Bobina 110VCA",
      "Bobina 220VCA"
    ],
    "standard": "Bobina Selada IP65",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SOLENOIDE-VAPOR.png",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "valvula-solenoide-y-vapor-2",
    "name": "Válvula Solenoide Y Vapor",
    "category": "valvulas",
    "subcategory": "Válvulas Solenoides",
    "description": "Válvula solenoide eletromecânica para automação industrial, controle rápido de fluidos e redes pneumáticas.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "Bobina 24VCC",
      "Bobina 110VCA",
      "Bobina 220VCA"
    ],
    "standard": "Bobina Selada IP65",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VALVULA-SOLENOIDE-Y-VAPOR.jpg",
    "categories": [
      "Aço Carbono",
      "Agulha",
      "Alta Pressão",
      "Alta Pressão Aço Carbono",
      "Borboleta",
      "Caldeiraria",
      "Chapas",
      "Chapas Aço Carbono",
      "Chapas Inox304",
      "Chapas Inox316",
      "Combate a Incêndio",
      "Conexões",
      "Conexões Aço Carbono",
      "Conexões Galvanizadas",
      "Conexões Od",
      "Conexoes Od Inox304",
      "Conexões Od Inox316",
      "Conexões Rosca",
      "Conexoes Rosca Inox304",
      "Conexões Rosca Inox316",
      "Conexões Schedule",
      "Conexoes Schedule Inox304",
      "Conexões Schedule Inox316",
      "Eletrodo De Nivel",
      "Esfera",
      "Filtro Y",
      "Galvanizados",
      "Gaveta",
      "Globo",
      "Guilhotina",
      "Indicador De Nivel",
      "Injetor",
      "Inox304",
      "Inox316",
      "Instrumentação",
      "Isolamento",
      "Junta Expansão",
      "Pedal",
      "Perfis",
      "Perfis Aço Carbono",
      "Perfis Inox304",
      "Perfis Inox316",
      "Pneumatica",
      "Purgador",
      "Refrigeração",
      "Retenção",
      "Segurança",
      "Sistema de Incêndio",
      "Sistema para amônia",
      "Solenoide",
      "Tubos",
      "Tubos Aço Carbono",
      "Tubos Galvanizados",
      "Tubos Inox304",
      "Tubos Inox316",
      "Valvulas"
    ]
  },
  {
    "id": "viga-h-2",
    "name": "Viga H",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/VIGA-H.jpg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "viga-i-2",
    "name": "Viga I",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/VIGA-I.jpg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "viga-u-2",
    "name": "Viga U",
    "category": "estrutura",
    "subcategory": "Perfis Estruturais",
    "description": "Material siderúrgico estrutural ideal para caldeirarias pesadas, bancadas de processo, suportes aéreos e estruturas civis.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/8\"",
      "3/16\"",
      "1/4\"",
      "3/8\"",
      "1/2\""
    ],
    "pressureClasses": [
      "Medidas 1000x2000mm",
      "Medidas 1220x2440mm",
      "Comprimento 6 metros"
    ],
    "standard": "ASTM A240 / ASTM A36",
    "featured": false,
    "unit": "barra",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/09/VIGA-U.jpg",
    "categories": [
      "Perfis"
    ]
  },
  {
    "id": "visor-de-nivel-refletivo-flangeado-2",
    "name": "Visor De Nivel Refletivo Flangeado",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VISOR-DE-NIVEL-REFLETIVO-FLANGEADO.png",
    "categories": [
      "Valvulas"
    ]
  },
  {
    "id": "visor-de-nivel-refletivo-rosca-2",
    "name": "Visor De Nivel Refletivo Rosca",
    "category": "valvulas",
    "subcategory": "Válvulas de Bloqueio e Controle",
    "description": "Válvula de alta estanqueidade projetada para o controle preciso de fluxo e bloqueio de fluidos industriais sob pressão.",
    "materials": [
      "Aço Inox AISI 304",
      "Aço Inox AISI 316"
    ],
    "sizes": [
      "1/2\"",
      "3/4\"",
      "1\"",
      "1.1/2\"",
      "2\"",
      "3\"",
      "4\""
    ],
    "pressureClasses": [
      "1000 WOG",
      "Classe 150#",
      "Classe 300#"
    ],
    "standard": "ANSI B16.34 / API 602",
    "featured": false,
    "unit": "peça",
    "applicationNote": "Indicado para instalações comerciais e industriais de médio a grande porte.",
    "image": "https://goianiatubos.com.br/wp-content/uploads/2023/10/VISOR-DE-NIVEL-REFLETIVO-ROSCA.png",
    "categories": [
      "Valvulas"
    ]
  }
];
