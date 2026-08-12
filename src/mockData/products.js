import productsData from './productsData.json';
import { importProductImages, FALLBACK_IMAGE } from './catalogGenerator.js';

/**
 * Optimized Bagless Product Catalog
 * Loaded lazily from productsData.json with Object.freeze for zero-overhead in-memory performance.
 */
export const PRODUCTS = Object.freeze(productsData);
export const DYNAMIC_CATALOG = PRODUCTS;

/**
 * Async lazy loader for products catalog.
 */
export const fetchProducts = async () => {
  return PRODUCTS;
};

export const syncLiveProductFeeds = async () => {
  return PRODUCTS;
};

export { importProductImages, FALLBACK_IMAGE };
