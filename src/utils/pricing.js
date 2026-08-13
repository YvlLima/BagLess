/**
 * Bagless Dynamic Pricing & Deposit Utility
 * Scalable deposit and insurance fees based on total retail purchase value of rented items.
 */

import { getVipDetails } from './vip';

/**
 * Calculates total retail purchase value for an array of kit items.
 * @param {Array} kitItems 
 * @returns {number}
 */
export const calculateTotalRetailValue = (kitItems = []) => {
  if (!Array.isArray(kitItems) || kitItems.length === 0) return 0;
  return kitItems.reduce((acc, item) => {
    const price = item.fullPurchasePrice || item.price || 0;
    return acc + Number(price);
  }, 0);
};

/**
 * Calculates Refundable Deposit based on total retail purchase value & VIP tier.
 * Formula: 8% of total retail price
 * Minimum: €30 (for low-value kits)
 * Maximum: €1,500
 * VIP Discount: 25% for Explorer, 50% for Global, 100% EXEMPT (€0) for First Class.
 * @param {Array} kitItems 
 * @param {string} vipTier
 * @returns {number}
 */
export const calculateDeposit = (kitItems = [], vipTier = 'global') => {
  if (!Array.isArray(kitItems) || kitItems.length === 0) return 0;
  const vip = getVipDetails(vipTier);
  if (vip.depositDiscountPercent >= 100) return 0;

  const totalRetail = calculateTotalRetailValue(kitItems);
  const rawDeposit = Math.round(totalRetail * 0.08);
  const minDeposit = 30;
  const maxDeposit = 1500;
  const baseDeposit = Math.min(maxDeposit, Math.max(minDeposit, rawDeposit));
  
  return Math.round(baseDeposit * (1 - vip.depositDiscountPercent / 100));
};

/**
 * Calculates Bagless Care Insurance Fee per day based on total retail purchase value & VIP tier.
 * Formula: 1.2% per day of total retail price
 * Minimum: €4 / day
 * VIP Discount: 25% for Explorer, 100% FREE (€0) for Global & First Class.
 * @param {Array} kitItems 
 * @param {string} vipTier
 * @returns {number}
 */
export const calculateInsurancePerDay = (kitItems = [], vipTier = 'global') => {
  if (!Array.isArray(kitItems) || kitItems.length === 0) return 0;
  const vip = getVipDetails(vipTier);
  if (vip.careProtectionDiscountPercent >= 100) return 0;

  const totalRetail = calculateTotalRetailValue(kitItems);
  const rawInsurance = Math.round(totalRetail * 0.012);
  const minInsurance = 4;
  const baseInsurance = Math.max(minInsurance, rawInsurance);

  return Math.round(baseInsurance * (1 - vip.careProtectionDiscountPercent / 100));
};

