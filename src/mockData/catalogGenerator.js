/**
 * Bagless Catalog & Image Importer Engine
 * Generates rich, realistic fashion product inventories for brands with 20-30 items per brand
 * Uses curated royalty-free fashion photography assets (Unsplash Fashion API)
 */

// Curated Fashion Image Banks categorized by Subcategory & Style
export const FASHION_IMAGE_BANK = {
  tshirt: [
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80'
  ],
  shirt: [
    'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1625910513413-7a1a457a82b9?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80'
  ],
  dress: [
    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=80'
  ],
  trousers: [
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1506629082925-2367f0b7498c?auto=format&fit=crop&w=700&q=80'
  ],
  jacket: [
    'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80'
  ],
  blazer: [
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80'
  ],
  swimwear: [
    'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80'
  ],
  sneakers: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80'
  ],
  loafers: [
    'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80'
  ],
  sandals: [
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=700&q=80'
  ],
  bag: [
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80'
  ],
  sunglasses: [
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=80'
  ],
  hat: [
    'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=700&q=80'
  ],
  perfume: [
    'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=700&q=80'
  ],
  watch: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=700&q=80'
  ],
  underwear: [
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80'
  ]
};

// Fallback image in warm sand/off-white palette
export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80';

/**
 * Image Import Resolver: Finds an associated image or returns warm fallback
 */
export const importProductImages = (category, subCategory) => {
  const key = subCategory || category;
  const list = FASHION_IMAGE_BANK[key] || FASHION_IMAGE_BANK[category];
  if (!list || list.length === 0) return FALLBACK_IMAGE;
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};

// Templates for item generation across categories
const ITEM_TEMPLATES = [
  // Roupa
  { subCategory: 'tshirt', category: 'roupa', namePrefix: 'T-Shirt Essential', baseBuyPrice: 45, gender: 'unissex', occasion: 'cidade', sizes: ['S', 'M', 'L', 'XL'], colors: ['Branco', 'Preto', 'Bege'] },
  { subCategory: 'shirt', category: 'roupa', namePrefix: 'Camisa de Linho Riviera', baseBuyPrice: 120, gender: 'masculino', occasion: 'praia', sizes: ['S', 'M', 'L', 'XL'], colors: ['Bege', 'Azul-Bebe', 'Branco'] },
  { subCategory: 'dress', category: 'roupa', namePrefix: 'Vestido Silk Slip Resort', baseBuyPrice: 280, gender: 'feminino', occasion: 'formal', sizes: ['XS', 'S', 'M', 'L'], colors: ['Terracota', 'Preto', 'Rosa-Pale'] },
  { subCategory: 'trousers', category: 'roupa', namePrefix: 'Calça de Linho Tailored', baseBuyPrice: 140, gender: 'unissex', occasion: 'cidade', sizes: ['36', '38', '40', '42'], colors: ['Bege Natural', 'Preto', 'Caqui'] },
  { subCategory: 'blazer', category: 'roupa', namePrefix: 'Blazer Oversized Wool', baseBuyPrice: 320, gender: 'unissex', occasion: 'formal', sizes: ['48', '50', '52'], colors: ['Bege', 'Preto', 'Marrom'] },
  { subCategory: 'jacket', category: 'roupa', namePrefix: 'Casaco Puffer Lightweight', baseBuyPrice: 260, gender: 'unissex', occasion: 'desporto', sizes: ['S', 'M', 'L', 'XL'], colors: ['Preto', 'Azul-Marinho', 'Verde-Oliva'] },
  { subCategory: 'swimwear', category: 'roupa', namePrefix: 'Calção de Banho Quick-Dry', baseBuyPrice: 65, gender: 'masculino', occasion: 'praia', sizes: ['S', 'M', 'L'], colors: ['Estampado Tropical', 'Azul', 'Terracota'] },

  // Calçado
  { subCategory: 'sneakers', category: 'calcado', namePrefix: 'Sapatilhas Clean Leather', baseBuyPrice: 140, gender: 'unissex', occasion: 'cidade', sizes: ['38', '39', '40', '41', '42', '43'], colors: ['Branco/Bege', 'Preto'] },
  { subCategory: 'loafers', category: 'calcado', namePrefix: 'Mocassins Soft Nappa', baseBuyPrice: 240, gender: 'masculino', occasion: 'formal', sizes: ['40', '41', '42', '43'], colors: ['Castanho', 'Preto'] },
  { subCategory: 'sandals', category: 'calcado', namePrefix: 'Sandálias de Pele Resort', baseBuyPrice: 110, gender: 'feminino', occasion: 'praia', sizes: ['36', '37', '38', '39'], colors: ['Tan', 'Preto', 'Dourado'] },

  // Acessórios
  { subCategory: 'bag', category: 'acessorios', namePrefix: 'Mala Ráfia & Leather Tote', baseBuyPrice: 290, gender: 'feminino', occasion: 'praia', sizes: ['Média'], colors: ['Natural/Tan', 'Preto'] },
  { subCategory: 'sunglasses', category: 'acessorios', namePrefix: 'Óculos de Sol Acetato Vintage', baseBuyPrice: 180, gender: 'unissex', occasion: 'praia', sizes: ['Único'], colors: ['Tartaruga', 'Preto'] },
  { subCategory: 'hat', category: 'acessorios', namePrefix: 'Chapéu Bucket Summer', baseBuyPrice: 85, gender: 'unissex', occasion: 'praia', sizes: ['S/M', 'L/XL'], colors: ['Bege', 'Preto', 'Verde-Oliva'] },

  // Perfumes
  { subCategory: 'perfume', category: 'perfumes', namePrefix: 'Eau de Parfum Travel Edition 100ml', baseBuyPrice: 190, gender: 'unissex', occasion: 'formal', sizes: ['100ml'], colors: ['Âmbar'] },

  // Relógios
  { subCategory: 'watch', category: 'relogios', namePrefix: 'Relógio Chrono Automatic Steel', baseBuyPrice: 1800, gender: 'unissex', occasion: 'formal', sizes: ['41mm'], colors: ['Prata', 'Preto', 'Dourado'] },

  // Roupa Interior
  { subCategory: 'underwear', category: 'roupainterior', namePrefix: 'Pack Travel Underwear Stretch', baseBuyPrice: 45, gender: 'unissex', occasion: 'cidade', sizes: ['S', 'M', 'L', 'XL'], colors: ['Preto', 'Branco', 'Nude'] }
];

/**
 * Generates 20 to 30 unique, realistic items per brand
 */
export const generateCatalogForBrands = (brandsList, itemsPerBrand = 22) => {
  const fullCatalog = [];

  brandsList.forEach((brand) => {
    for (let i = 0; i < itemsPerBrand; i++) {
      const template = ITEM_TEMPLATES[i % ITEM_TEMPLATES.length];

      // Price calculation based on brand tier multiplier
      const calculatedBuyPrice = Math.round(template.baseBuyPrice * brand.multiplier);
      const rentalDailyPrice = Math.max(3, Math.round(calculatedBuyPrice / 25));

      const itemId = `prod-${brand.id}-${template.subCategory}-${i + 1}`;
      const itemName = `${template.namePrefix} ${brand.name}`;
      const image = importProductImages(template.category, template.subCategory);

      fullCatalog.push({
        id: itemId,
        name: itemName,
        brandId: brand.id,
        brandName: brand.name,
        tier: brand.tier,
        category: template.category,
        subCategory: template.subCategory,
        gender: template.gender,
        occasion: template.occasion,
        sizes: template.sizes,
        colors: template.colors,
        rentalPricePerDay: rentalDailyPrice,
        fullPurchasePrice: calculatedBuyPrice,
        image,
        description: `Peça oficial de assinatura ${brand.name}. Confeccionada com materiais de eleição e acabamentos impecáveis para a tua viagem.`,
        weatherTag: template.occasion === 'praia' ? 'Clima Quente' : template.occasion === 'desporto' ? 'Desporto & Aventura' : 'Urbano & Elegante'
      });
    }
  });

  return fullCatalog;
};
