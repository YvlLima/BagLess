/**
 * Bagless Dynamic Pricing & Deposit Utility
 * Scalable deposit and insurance fees based on total retail purchase value of rented items.
 */

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
 * Calculates Refundable Deposit based on total retail purchase value.
 * Formula: 8% of total retail price
 * Minimum: €30 (for low-value kits)
 * Maximum: €1,500 (capped threshold so luxury pieces don't discourage rental)
 * @param {Array} kitItems 
 * @returns {number}
 */
export const calculateDeposit = (kitItems = []) => {
  if (!Array.isArray(kitItems) || kitItems.length === 0) return 0;
  const totalRetail = calculateTotalRetailValue(kitItems);
  const rawDeposit = Math.round(totalRetail * 0.08);
  const minDeposit = 30;
  const maxDeposit = 1500;
  return Math.min(maxDeposit, Math.max(minDeposit, rawDeposit));
};

/**
 * Calculates Bagless Care Insurance Fee per day based on total retail purchase value.
 * Formula: 1.2% per day of total retail price
 * Minimum: €4 / day
 * @param {Array} kitItems 
 * @returns {number}
 */
export const calculateInsurancePerDay = (kitItems = []) => {
  if (!Array.isArray(kitItems) || kitItems.length === 0) return 0;
  const totalRetail = calculateTotalRetailValue(kitItems);
  const rawInsurance = Math.round(totalRetail * 0.012);
  const minInsurance = 4;
  return Math.max(minInsurance, rawInsurance);
};
