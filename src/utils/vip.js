/**
 * Bagless VIP Tiers Configuration & Perks Utility
 */

export const VIP_TIERS = {
  none: {
    id: 'none',
    name: 'Membro Standard',
    badge: '👤 Standard',
    badgeClass: 'badge-gender-unissex',
    color: '#6B7280',
    rentalDiscountPercent: 0,
    careProtectionDiscountPercent: 0,
    depositDiscountPercent: 0,
    wishlistLimit: 10,
    purchaseDiscountPercent: 0,
    deliverySpeed: 'Entrega Standard no Hotel'
  },
  explorer: {
    id: 'explorer',
    name: 'VIP Explorer',
    badge: '🧭 VIP Explorer',
    badgeClass: 'badge-gender-masculino',
    color: '#2563EB',
    rentalDiscountPercent: 10,
    careProtectionDiscountPercent: 25,
    depositDiscountPercent: 25,
    wishlistLimit: 30,
    purchaseDiscountPercent: 5,
    deliverySpeed: 'Entrega Grátis Europa (24h)'
  },
  global: {
    id: 'global',
    name: 'VIP Global Passport',
    badge: '👑 Global VIP',
    badgeClass: 'badge-gender-unissex',
    color: 'var(--primary-terracotta)',
    rentalDiscountPercent: 25,
    careProtectionDiscountPercent: 100, // 100% FREE Insurance
    depositDiscountPercent: 50,
    wishlistLimit: 50,
    purchaseDiscountPercent: 15,
    deliverySpeed: 'Entrega Prioritária <2h no Hotel'
  },
  firstclass: {
    id: 'firstclass',
    name: 'First Class Elite',
    badge: '💎 First Class',
    badgeClass: 'badge-gender-feminino',
    color: '#7C3AED',
    rentalDiscountPercent: 50,
    careProtectionDiscountPercent: 100, // 100% FREE Insurance
    depositDiscountPercent: 100, // 100% EXEMPT (€0 Deposit)
    wishlistLimit: Infinity,
    purchaseDiscountPercent: 25,
    deliverySpeed: 'VIP Express com Bagagista Privado na Suíte'
  }
};

/**
 * Gets details for a given VIP tier key with fallback to global.
 * @param {string} tierId 
 * @returns {object}
 */
export const getVipDetails = (tierId = 'global') => {
  return VIP_TIERS[tierId] || VIP_TIERS.global;
};

/**
 * Calculates discounted daily rental price for a product based on user VIP tier.
 * @param {number} basePricePerDay 
 * @param {string} vipTier 
 * @returns {number}
 */
export const calculateVipDailyPrice = (basePricePerDay = 0, vipTier = 'global') => {
  const vip = getVipDetails(vipTier);
  const discount = (basePricePerDay * vip.rentalDiscountPercent) / 100;
  return Math.max(0, basePricePerDay - discount);
};

/**
 * Calculates rental savings amount.
 * @param {number} subtotal 
 * @param {string} vipTier 
 * @returns {number}
 */
export const calculateVipRentalSavings = (subtotal = 0, vipTier = 'global') => {
  const vip = getVipDetails(vipTier);
  return (subtotal * vip.rentalDiscountPercent) / 100;
};

/**
 * Calculates VIP adjusted deposit amount.
 * @param {number} baseDeposit 
 * @param {string} vipTier 
 * @returns {number}
 */
export const calculateVipDeposit = (baseDeposit = 0, vipTier = 'global') => {
  const vip = getVipDetails(tierIdToUse(vipTier));
  if (vip.depositDiscountPercent >= 100) return 0;
  return Math.round(baseDeposit * (1 - vip.depositDiscountPercent / 100));
};

/**
 * Calculates VIP adjusted care insurance fee per day.
 * @param {number} baseInsurance 
 * @param {string} vipTier 
 * @returns {number}
 */
export const calculateVipInsurance = (baseInsurance = 0, vipTier = 'global') => {
  const vip = getVipDetails(tierIdToUse(vipTier));
  if (vip.careProtectionDiscountPercent >= 100) return 0;
  return Math.round(baseInsurance * (1 - vip.careProtectionDiscountPercent / 100));
};

const tierIdToUse = (tierId) => {
  if (!tierId || !VIP_TIERS[tierId]) return 'global';
  return tierId;
};
