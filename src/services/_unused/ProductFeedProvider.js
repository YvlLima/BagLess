/**
 * RESERVADO PARA INTEGRAÇÃO FUTURA COM PARCEIROS (Zalando / ASOS / Rakuten / Awin / eBay)
 * --------------------------------------------------------------------------------------
 * Este ficheiro define a arquitetura de adaptadores de feeds de produtos parceiros.
 * Atualmente não está em uso no runtime do Bagless, estando guardado para ser ligado
 * quando as chaves de API e parcerias de afiliados forem ativadas na produção.
 */

/**
 * Bagless Legal Affiliate & Partner Product Feed Provider Architecture
 * Standardized adapter layer supporting Zalando Partner API, ASOS Affiliate API,
 * Rakuten/Awin Luxury Feeds, and eBay Browse API.
 */

// Base Interface / Abstract Adapter
export class ProductFeedProvider {
  constructor(config = {}) {
    this.apiKey = config.apiKey || '';
    this.partnerId = config.partnerId || '';
    this.environment = config.environment || 'sandbox'; // sandbox | production
  }

  async fetchBrandProducts(brandId, limit = 20) {
    throw new Error('fetchBrandProducts must be implemented by concrete provider');
  }

  async searchProducts(query, filters = {}) {
    throw new Error('searchProducts must be implemented by concrete provider');
  }

  /**
   * Maps external partner taxonomy to Bagless standardized categories:
   * (roupa | calcado | acessorios | perfumes | relogios | roupainterior)
   */
  mapExternalTaxonomyToBagless(externalCategory) {
    const cat = (externalCategory || '').toLowerCase();
    if (cat.includes('shoe') || cat.includes('footwear') || cat.includes('sneaker') || cat.includes('boot')) {
      return 'calcado';
    }
    if (cat.includes('bag') || cat.includes('sunglasses') || cat.includes('accessory') || cat.includes('hat')) {
      return 'acessorios';
    }
    if (cat.includes('perfume') || cat.includes('fragrance') || cat.includes('beauty') || cat.includes('cologne')) {
      return 'perfumes';
    }
    if (cat.includes('watch') || cat.includes('timepiece') || cat.includes('horlogerie')) {
      return 'relogios';
    }
    if (cat.includes('underwear') || cat.includes('lingerie') || cat.includes('loungewear') || cat.includes('sock')) {
      return 'roupainterior';
    }
    return 'roupa';
  }

  /**
   * Automatic Rental Price Calculator
   * Calculates per-day rental price as 5%-10% of retail purchase price scaled by brand tier
   */
  calculateRentalPrice(fullPurchasePrice, brandTier = 'eco') {
    const tierRatios = {
      eco: 0.06,    // 6% of retail price
      mid: 0.05,    // 5% of retail price
      luxury: 0.04  // 4% of retail price
    };
    const ratio = tierRatios[brandTier] || 0.05;
    return Math.max(3, Math.round(fullPurchasePrice * ratio));
  }
}

// 1. Zalando Partner Program Adapter
export class ZalandoPartnerAdapter extends ProductFeedProvider {
  async fetchBrandProducts(brandId, limit = 20) {
    // Production endpoint: https://api.zalando.com/partner/v1/articles
    console.log(`[ZalandoPartnerAdapter] Querying Zalando Partner API for brand: ${brandId}`);
    return [];
  }
}

// 2. ASOS Affiliate Network Adapter
export class AsosPartnerAdapter extends ProductFeedProvider {
  async fetchBrandProducts(brandId, limit = 20) {
    // Production endpoint: https://api.asos.com/product/v1/feed
    console.log(`[AsosPartnerAdapter] Querying ASOS Affiliate API for brand: ${brandId}`);
    return [];
  }
}

// 3. Rakuten & Awin Luxury Affiliate Adapter
export class RakutenAwinAdapter extends ProductFeedProvider {
  async fetchBrandProducts(brandId, limit = 20) {
    // Production endpoint: https://api.rakutenmarketing.com/coupon/1.0
    console.log(`[RakutenAwinAdapter] Querying Rakuten/Awin Feed for brand: ${brandId}`);
    return [];
  }
}

// 4. Mock Affiliate Feed Provider (Pre-configured Sandbox Feed)
// Formatted EXACTLY as partner APIs return JSON payloads for production testing
export class MockAffiliateFeedProvider extends ProductFeedProvider {
  constructor(config = {}) {
    super(config);
    this.providerName = 'Zalando & ASOS Partner Network Feed';
  }

  async fetchBrandProducts(brandId, limit = 20) {
    const mockRawFeed = [
      {
        partner_article_id: 'ZAL-JACQ-001',
        title: 'La Chemise Jean Linen Shirt',
        brand_code: 'jacquemus',
        brand_name: 'Jacquemus',
        brand_tier: 'mid',
        external_category: 'Men > Clothing > Shirts',
        retail_price_eur: 320,
        available_sizes: ['S', 'M', 'L', 'XL'],
        available_colors: ['Natural Beige', 'Sky Blue'],
        image_urls: ['https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80'],
        stock_status: 'IN_STOCK',
        affiliate_tracking_url: 'https://partner.zalando.com/click?id=zal_jacq_001&subid=bagless',
        merchant_name: 'Zalando Partner Program'
      },
      {
        partner_article_id: 'ASOS-ZIMM-002',
        title: 'Matchmaker Silk Midi Dress',
        brand_code: 'zimmermann',
        brand_name: 'Zimmermann',
        brand_tier: 'luxury',
        external_category: 'Women > Clothing > Dresses',
        retail_price_eur: 850,
        available_sizes: ['XS', 'S', 'M', 'L'],
        available_colors: ['Victorian Floral'],
        image_urls: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80'],
        stock_status: 'IN_STOCK',
        affiliate_tracking_url: 'https://affiliate.asos.com/click?id=asos_zimm_002&subid=bagless',
        merchant_name: 'ASOS Partner Network'
      },
      {
        partner_article_id: 'RAK-LOEWE-003',
        title: 'Anagram Straw Basket Bag',
        brand_code: 'loewe',
        brand_name: 'LOEWE',
        brand_tier: 'luxury',
        external_category: 'Women > Accessories > Bags',
        retail_price_eur: 590,
        available_sizes: ['Média'],
        available_colors: ['Natural Palm / Tan'],
        image_urls: ['https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80'],
        stock_status: 'IN_STOCK',
        affiliate_tracking_url: 'https://rakuten.com/click?id=rak_loewe_003&subid=bagless',
        merchant_name: 'Rakuten Luxury Feed'
      },
      {
        partner_article_id: 'ZAL-ROLEX-004',
        title: 'Submariner Date 41mm Ceramic',
        brand_code: 'rolex',
        brand_name: 'Rolex',
        brand_tier: 'luxury',
        external_category: 'Luxury > Watches',
        retail_price_eur: 14200,
        available_sizes: ['41mm'],
        available_colors: ['Oystersteel / Black'],
        image_urls: ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80'],
        stock_status: 'IN_STOCK',
        affiliate_tracking_url: 'https://partner.zalando.com/click?id=zal_rolex_004',
        merchant_name: 'Zalando Partner Program'
      },
      {
        partner_article_id: 'ASOS-TOMFORD-005',
        title: 'Tobacco Vanille EDP 100ml',
        brand_code: 'tom-ford',
        brand_name: 'Tom Ford Beauty',
        brand_tier: 'mid',
        external_category: 'Beauty > Perfumes',
        retail_price_eur: 340,
        available_sizes: ['100ml'],
        available_colors: ['Amber'],
        image_urls: ['https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80'],
        stock_status: 'IN_STOCK',
        affiliate_tracking_url: 'https://affiliate.asos.com/click?id=asos_tf_005',
        merchant_name: 'ASOS Partner Network'
      }
    ];

    // Normalize partner feed into Bagless internal schema
    return mockRawFeed.map((raw) => {
      const baglessCategory = this.mapExternalTaxonomyToBagless(raw.external_category);
      const rentalPrice = this.calculateRentalPrice(raw.retail_price_eur, raw.brand_tier);

      return {
        id: `feed-${raw.partner_article_id}`,
        externalId: raw.partner_article_id,
        name: raw.title,
        brandId: raw.brand_code,
        brandName: raw.brand_name,
        tier: raw.brand_tier,
        category: baglessCategory,
        subCategory: baglessCategory === 'relogios' ? 'watch' : baglessCategory === 'perfumes' ? 'perfume' : 'shirt',
        gender: 'unissex',
        occasion: 'formal',
        sizes: raw.available_sizes,
        colors: raw.available_colors,
        fullPurchasePrice: raw.retail_price_eur,
        rentalPricePerDay: rentalPrice,
        image: raw.image_urls[0],
        images: raw.image_urls,
        inStock: raw.stock_status === 'IN_STOCK',
        discontinued: false,
        affiliateUrl: raw.affiliate_tracking_url,
        merchantAttribution: raw.merchant_name,
        description: `Produto autêntico fornecido via ${raw.merchant_name}. Garantia de procedência original.`
      };
    });
  }
}

// Factory function to get active feed provider
export const getActiveFeedProvider = () => {
  const apiKey = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_ZALANDO_PARTNER_KEY)
    ? import.meta.env.VITE_ZALANDO_PARTNER_KEY
    : 'sandbox_key';

  return new MockAffiliateFeedProvider({
    apiKey,
    environment: 'sandbox'
  });
};
