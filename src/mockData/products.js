import { BRANDS } from './brands';
import { generateCatalogForBrands, importProductImages } from './catalogGenerator';
import { getActiveFeedProvider } from '../services/ProductFeedProvider';

// Get active feed provider (Zalando / ASOS / Rakuten partner adapter)
const feedProvider = getActiveFeedProvider();

// Dynamic Catalog generated for all 40 brands (4 items per brand = 160 items)
export const DYNAMIC_CATALOG = generateCatalogForBrands(BRANDS, 4);

// Combined Catalog
export const PRODUCTS = DYNAMIC_CATALOG;

/**
 * Periodically syncs products from partner feeds
 */
export const syncLiveProductFeeds = async () => {
  console.log('[Bagless Feed Sync] Sincronizando catálogo de produtos...');
  const feedItems = await feedProvider.fetchBrandProducts('all');
  return feedItems;
};

export { importProductImages, feedProvider };
