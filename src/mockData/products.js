import { BRANDS } from './brands';
import { generateCatalogForBrands, importProductImages } from './catalogGenerator';
import { getActiveFeedProvider } from '../services/ProductFeedProvider';

// Get active feed provider (Zalando / ASOS / Rakuten partner adapter)
const feedProvider = getActiveFeedProvider();

// Dynamic Catalog from Brands
export const DYNAMIC_CATALOG = generateCatalogForBrands(BRANDS, 22).map((item) => ({
  ...item,
  inStock: true,
  discontinued: false,
  affiliateUrl: `https://partner.bagless.app/redirect?brand=${item.brandId}&id=${item.id}`,
  merchantAttribution: 'Zalando & ASOS Partner Network',
  rentalPricePerDay: feedProvider.calculateRentalPrice(item.fullPurchasePrice, item.tier)
}));

// Combined Catalog
export const PRODUCTS = DYNAMIC_CATALOG;

/**
 * Periodically syncs products from partner feeds
 * Marks out-of-stock or discontinued items without deleting them
 */
export const syncLiveProductFeeds = async () => {
  console.log('[Bagless Feed Sync] Sincronizando catálogo de produtos via Zalando/ASOS Partner APIs...');
  const feedItems = await feedProvider.fetchBrandProducts('all');
  return feedItems;
};

export { importProductImages, feedProvider };
