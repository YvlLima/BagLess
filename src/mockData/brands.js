export const BRANDS = [
  // ==========================================
  // ESCALÃO 1: ECONÓMICO (tier: 'eco') - 14 Marcas
  // ==========================================
  {
    id: 'primark',
    name: 'Primark',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 0.8,
    description: 'Moda acessível, peças básicas essenciais e vestuário de praia para todas as idades.',
    origin: 'Irlanda',
    popular: true
  },
  {
    id: 'h-and-m',
    name: 'H&M',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 0.9,
    description: 'Tendências globais de moda rápida, coleções conscientes e essenciais de viagem.',
    origin: 'Suécia',
    popular: true
  },
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
    id: 'bershka',
    name: 'Bershka',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 0.9,
    description: 'Estilo jovem urbano, denim moderno e peças festivais para viagens descontraídas.',
    origin: 'Espanha',
    popular: true
  },
  {
    id: 'pull-and-bear',
    name: 'Pull & Bear',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 0.95,
    description: 'Moda inspirada no estilo californiano, praia, surf e vestuário casual confortável.',
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
    id: 'gap',
    name: 'Gap',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.0,
    description: 'O clássico estilo casual americano, hoodies macios e essenciais de algodão.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'levis',
    name: "Levi's",
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.2,
    description: 'Os jeans e blusões de ganga mais icónicos do mundo (501 Original) para qualquer viagem.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'adidas',
    name: 'Adidas',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.2,
    description: 'Sapatilhas clássicas (Stan Smith, Samba) e vestuário desportivo confortável de viagem.',
    origin: 'Alemanha',
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
  {
    id: 'puma',
    name: 'Puma',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.1,
    description: 'Design desportivo moderno e sapatilhas leves para caminhadas em novas cidades.',
    origin: 'Alemanha',
    popular: true
  },
  {
    id: 'vans',
    name: 'Vans',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.0,
    description: 'Sapatilhas skate autênticas (Old Skool, Slip-On) para um visual de viagem relaxado.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'converse',
    name: 'Converse',
    tier: 'eco',
    tierLabel: 'Económico',
    multiplier: 1.0,
    description: 'As intemporais sapatilhas Chuck Taylor All Star em lona respirável.',
    origin: 'EUA',
    popular: true
  },

  // ==========================================
  // ESCALÃO 2: MÉDIO (tier: 'mid') - 11 Marcas
  // ==========================================
  {
    id: 'tommy-hilfiger',
    name: 'Tommy Hilfiger',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.8,
    description: 'Estilo preppy americano clássico, polos premium e casacos versáteis.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'calvin-klein',
    name: 'Calvin Klein',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.7,
    description: 'Minimalismo americano contemporâneo, roupa interior icónica e alfaiataria leve.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'ralph-lauren',
    name: 'Ralph Lauren',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 2.1,
    description: 'Elegância equestre e resort chic, polos de algodão pima e blazers de linho.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'superdry',
    name: 'Superdry',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.6,
    description: 'Fusão de design vintage americano com gráficos de inspiração japonesa.',
    origin: 'Reino Unido',
    popular: true
  },
  {
    id: 'diesel',
    name: 'Diesel',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.9,
    description: 'Denim premium de corte vanguardista, blusões de pele e moda urbana arrojada.',
    origin: 'Itália',
    popular: true
  },
  {
    id: 'michael-kors',
    name: 'Michael Kors',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 2.0,
    description: 'Estilo de vida jet-set, malas de viagem em pele refinada e relógios elegantes.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'hugo-boss',
    name: 'Hugo Boss',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 2.2,
    description: 'Alfaiataria alemã impecável, fatos modernos e vestuário de negócios/lazer.',
    origin: 'Alemanha',
    popular: true
  },
  {
    id: 'lacoste',
    name: 'Lacoste',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.9,
    description: 'Herança do ténis francês, os polos originais de petit piqué e calçado desportivo elegante.',
    origin: 'França',
    popular: true
  },
  {
    id: 'the-north-face',
    name: 'The North Face',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.8,
    description: 'Equipamento e casacos térmicos de alto rendimento para expedições e viagens de aventura.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'guess',
    name: 'Guess',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.7,
    description: 'Estilo glamoroso californiano, denim ajustado e acessórios marcantes.',
    origin: 'EUA',
    popular: true
  },
  {
    id: 'armani-exchange',
    name: 'Armani Exchange',
    tier: 'mid',
    tierLabel: 'Médio',
    multiplier: 1.9,
    description: 'Moda urbana acessível de inspiração italiana com silhuetas modernas e sofisticadas.',
    origin: 'Itália',
    popular: true
  },

  // ==========================================
  // ESCALÃO 3: LUXO (tier: 'luxury') - 15 Marcas
  // ==========================================
  {
    id: 'acne-studios',
    name: 'Acne Studios',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 3.2,
    description: 'Casa de moda vanguardista de Estocolmo com cortes esculturais e malhas exclusivas.',
    origin: 'Suécia',
    popular: true
  },
  {
    id: 'jacquemus',
    name: 'Jacquemus',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 3.5,
    description: 'Design solar e poético de Simon Porte Jacquemus. Silhuetas desconstruídas e chapéus icónicos.',
    origin: 'França',
    popular: true
  },
  {
    id: 'zimmermann',
    name: 'Zimmermann',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 3.8,
    description: 'A referência mundial em moda resort de alta-costura. Vestidos românticos e estampas artesanais.',
    origin: 'Austrália',
    popular: true
  },
  {
    id: 'common-projects',
    name: 'Common Projects',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 3.2,
    description: 'Sapatilhas artesanais de luxo minimalista produzidas em Itália (Original Achilles).',
    origin: 'EUA / Itália',
    popular: true
  },
  {
    id: 'burberry',
    name: 'Burberry',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.2,
    description: 'Os lendários trench coats de gabardina britânica e o icónico padrão de xadrez Vintage Check.',
    origin: 'Reino Unido',
    popular: true
  },
  {
    id: 'versace',
    name: 'Versace',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.5,
    description: 'Glamour italiano extravagante, estampas barrocas em seda e o símbolo lendário da Medusa.',
    origin: 'Itália',
    popular: true
  },
  {
    id: 'prada',
    name: 'Prada',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.6,
    description: 'Minimalismo vanguardista em Re-Nylon patenteado, chapéus bucket e carteiras em pele Saffiano.',
    origin: 'Itália',
    popular: true
  },
  {
    id: 'gucci',
    name: 'Gucci',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.5,
    description: 'Design italiano opulento, mocassins Horsebit lendários e malas de viagem GG Monogram.',
    origin: 'Itália',
    popular: true
  },
  {
    id: 'balenciaga',
    name: 'Balenciaga',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.4,
    description: 'Alta-costura arquitetónica e streetwear concetual de proporções arrojadas.',
    origin: 'Espanha / França',
    popular: true
  },
  {
    id: 'saint-laurent',
    name: 'Saint Laurent',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.8,
    description: 'Glamour parisiense rebelde, casacos de corte perfeito e óculos de sol sofisticados.',
    origin: 'França',
    popular: true
  },
  {
    id: 'loewe',
    name: 'LOEWE',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 4.2,
    description: 'Artesanato supremo espanhol sob direção de JW Anderson. Acessórios Anagram e coleção Paula\'s Ibiza.',
    origin: 'Espanha',
    popular: true
  },
  {
    id: 'louis-vuitton',
    name: 'Louis Vuitton',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 5.2,
    description: 'A mais prestigiada maison de viagem do mundo, maroquinaria Monogram e prêt-à-porter de luxo.',
    origin: 'França',
    popular: true
  },
  {
    id: 'chanel',
    name: 'Chanel',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 5.0,
    description: 'Elegância parisiense eterna, casacos de tweed, mala 11.12 e perfumes extraordinários.',
    origin: 'França',
    popular: true
  },
  {
    id: 'hermes',
    name: 'Hermès',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 5.5,
    description: 'O topo absoluto da maroquinaria artesanal francesa, lenços de seda e luxo discreto.',
    origin: 'França',
    popular: true
  },
  {
    id: 'rolex',
    name: 'Rolex',
    tier: 'luxury',
    tierLabel: 'Luxo',
    multiplier: 6.0,
    description: 'Alta relojoaria suíça de precisão lendária (Submariner, GMT-Master II, Datejust).',
    origin: 'Suíça',
    popular: true
  }
];
