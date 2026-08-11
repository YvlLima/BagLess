export const BRANDS = [
  // Tier 1: Económico & Smart Fashion (Essential / Everyday)
  {
    id: 'uniqlo',
    name: 'Uniqlo',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.0,
    description: 'Roupas ultra-leves, funcionais e tecnológicas (Heattech / AIRism) perfeitas para viagens.',
    origin: 'Japão',
    popular: true
  },
  {
    id: 'zara',
    name: 'Zara',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.1,
    description: 'Coleções rápidas de resort, praia e alfaiataria leve com as últimas tendências globais.',
    origin: 'Espanha',
    popular: true
  },
  {
    id: 'mango',
    name: 'Mango',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.15,
    description: 'Estilo mediterrânico elegante, vestidos fluídos e linho de alta qualidade.',
    origin: 'Espanha',
    popular: true
  },
  {
    id: 'cos',
    name: 'COS',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.3,
    description: 'Design escandinavo arquitetónico, cortes minimalistas e materiais sustentáveis premium.',
    origin: 'Suécia',
    popular: true
  },
  {
    id: 'calvin-klein',
    name: 'Calvin Klein Underwear',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.2,
    description: 'Roupa interior icónica em algodão stretch de máximo conforto para viagens.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'skims',
    name: 'SKIMS',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.3,
    description: 'Shapewear e loungewear ergonómico de caimento perfeito em todos os tons de pele.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'nike',
    name: 'Nike',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.2,
    description: 'Vestuário desportivo, sapatilhas de alto rendimento e athleisure para viagens ativas.',
    origin: 'EUA',
    popular: true
  },

  // Tier 2: Médio / Contemporary & Designer
  {
    id: 'jacquemus',
    name: 'Jacquemus',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 2.2,
    description: 'Design solar e poético de Simon Porte Jacquemus. Silhuetas desconstruídas e chapéus icónicos.',
    origin: 'França',
    popular: true
  },
  {
    id: 'ganni',
    name: 'GANNI',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.9,
    description: 'Estilo Scandi-cool vibrante, padrões audazes e compromisso com o luxo responsável.',
    origin: 'Dinamarca',
    popular: true
  },
  {
    id: 'sandro',
    name: 'Sandro Paris',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 2.0,
    description: 'Elegância parisiense urbana com toques vintage e alfaiataria impecável.',
    origin: 'França',
    popular: true
  },
  {
    id: 'tom-ford',
    name: 'Tom Ford Beauty & Fragrance',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 2.5,
    description: 'Perfumes orientais sedutores (Private Blend) e cosmética de viagem ultra-exclusiva.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'le-labo',
    name: 'Le Labo Fragrances',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 2.3,
    description: 'Perfumaria de nicho artesanal formulada à mão em Nova Iorque (Santal 33, Another 13).',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'polo-ralph-lauren',
    name: 'Polo Ralph Lauren',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 2.1,
    description: 'O clássico estilo preppy americano, polos de algodão pima e casacos resort.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'veja',
    name: 'Veja',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.7,
    description: 'Sapatilhas ecológicas feitas com borracha selvagem da Amazónia e algodão orgânico.',
    origin: 'França',
    popular: true
  },
  {
    id: 'ray-ban',
    name: 'Ray-Ban',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.6,
    description: 'Os óculos de sol mais icónicos do mundo (Wayfarer, Aviator, Clubmaster).',
    origin: 'Itália / EUA',
    popular: true
  },

  // Tier 3: Premium & Luxo High-Fashion, Relógios & Perfumes de Elite
  {
    id: 'rolex',
    name: 'Rolex',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 6.0,
    description: 'Alta relojoaria suíça de precisão lendária (Submariner, GMT-Master II, Datejust).',
    origin: 'Suíça',
    popular: true
  },
  {
    id: 'cartier',
    name: 'Cartier',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 5.5,
    description: 'Joalharia e relojoaria de luxo francesa (Santos de Cartier, Tank Must).',
    origin: 'França / Suíça',
    popular: true
  },
  {
    id: 'chanel',
    name: 'Chanel Les Exclusifs',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.8,
    description: 'Perfumes icónicos e alta cosmética parisiense para viajar com aroma inconfundível.',
    origin: 'França',
    popular: true
  },
  {
    id: 'zimmermann',
    name: 'Zimmermann',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 3.5,
    description: 'A referência mundial em moda resort de alta-costura. Vestidos românticos e estampas artesanais.',
    origin: 'Austrália',
    popular: true
  },
  {
    id: 'loewe',
    name: 'LOEWE',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.2,
    description: 'Casa de luxo espanhola sob direção de JW Anderson. Acessórios Anagram e coleção Paula\'s Ibiza.',
    origin: 'Espanha',
    popular: true
  },
  {
    id: 'gucci',
    name: 'Gucci',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.5,
    description: 'Design italiano extravagante, mocassins Horsebit lendários e malas de viagem GG Monogram.',
    origin: 'Itália',
    popular: true
  },
  {
    id: 'prada',
    name: 'Prada',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.6,
    description: 'Minimalismo vanguardista em Nylon Re-Nylon patenteado, chapéus bucket e relógios.',
    origin: 'Itália',
    popular: true
  },
  {
    id: 'casablanca',
    name: 'Casablanca Paris',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 3.8,
    description: 'Estética après-sport elegante inspirada em clubes de ténis privados e resorts tropicais.',
    origin: 'França',
    popular: true
  },
  {
    id: 'saint-laurent',
    name: 'Saint Laurent (YSL)',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.8,
    description: 'Glamour parisiense rebelde, casacos de pele de corte perfeito e óculos de sol escuros.',
    origin: 'França',
    popular: true
  },
  {
    id: 'moncler',
    name: 'Moncler',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.4,
    description: 'Os casacos de penas mais desejados do mundo para viagens a destinos frios e estâncias de esqui.',
    origin: 'Itália / França',
    popular: true
  },
  {
    id: 'bottega-veneta',
    name: 'Bottega Veneta',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 5.0,
    description: 'Artesanato supremo em pele trançada Intrecciato e silhuetas esculturais de luxo silencioso.',
    origin: 'Itália',
    popular: true
  }
];
