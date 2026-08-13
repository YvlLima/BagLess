/**
 * Bagless Free Welcome Essential Kit Utility
 */

export const WELCOME_AMENITIES_ITEM = {
  id: 'courtesy-welcome-pack',
  name: 'Kit de Higiene & Necessaire Ecológica Cortesia',
  brandName: 'Bagless Amenities',
  category: 'acessorios',
  subCategory: 'hygiene',
  rentalPricePerDay: 0,
  fullPurchasePrice: 25,
  isCourtesy: true,
  description: 'Champô sólido de argan, gel de banho orgânico, escova de dentes em bambu e pasta sanitizada em saqueta reutilizável Bagless.',
  sizes: ['Único'],
  selectedSize: 'Único'
};

/**
 * Identifies if a product is an essential basic item eligible for the 100% free rental offer on first item.
 * @param {object} product 
 * @returns {boolean}
 */
export const isEligibleBasicItem = (product) => {
  if (!product) return false;
  const sub = (product.subCategory || '').toLowerCase();
  const cat = (product.category || '').toLowerCase();
  const name = (product.name || '').toLowerCase();

  return (
    sub === 'tshirt' ||
    cat === 'roupainterior' ||
    name.includes('t-shirt') ||
    name.includes('top') ||
    name.includes('básic') ||
    name.includes('essential')
  );
};

/**
 * Calculates the index of the first essential basic item in kit to give 100% discount.
 * @param {Array} kitItems 
 * @returns {number} - Index in kitItems array or -1
 */
export const getFreeEssentialItemIndex = (kitItems = []) => {
  if (!Array.isArray(kitItems) || kitItems.length === 0) return -1;
  
  // First look for essential basic item
  let idx = kitItems.findIndex((item) => isEligibleBasicItem(item));
  
  // If no basic item, fallback to the lowest price item in kit
  if (idx === -1) {
    let minPrice = Infinity;
    kitItems.forEach((item, index) => {
      if (item.rentalPricePerDay < minPrice) {
        minPrice = item.rentalPricePerDay;
        idx = index;
      }
    });
  }
  return idx;
};
