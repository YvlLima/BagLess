import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

/**
 * TODO: Integration with Live Exchange Rates API
 * To prevent static rates from becoming stale over time, integrate a live FX API:
 * - Option A: Frankfurter API (Free, open-source ECB rates): https://api.frankfurter.app/latest?from=EUR
 * - Option B: Open Exchange Rates / ExchangeRate-API: https://open.er-api.com/v6/latest/EUR
 * 
 * Example implementation:
 * useEffect(() => {
 *   fetch('https://api.frankfurter.app/latest?from=EUR')
 *     .then(res => res.json())
 *     .then(data => updateDynamicRates(data.rates))
 *     .catch(err => console.warn('[Bagless Currency] Using fallback static FX rates', err));
 * }, []);
 */

export const RATES = {
  EUR: { symbol: '€', rate: 1.0, code: 'EUR', name: 'Euro', position: 'after' },
  USD: { symbol: '$', rate: 1.09, code: 'USD', name: 'Dólar Americano', position: 'before' },
  GBP: { symbol: '£', rate: 0.85, code: 'GBP', name: 'Libra Esterlina', position: 'before' },
  JPY: { symbol: '¥', rate: 165.0, code: 'JPY', name: 'Iene Japonês', position: 'before', decimals: 0 },
  CHF: { symbol: 'CHF', rate: 0.95, code: 'CHF', name: 'Franco Suíço', position: 'before' },
  CAD: { symbol: 'CA$', rate: 1.48, code: 'CAD', name: 'Dólar Canadiano', position: 'before' },
  AUD: { symbol: 'A$', rate: 1.65, code: 'AUD', name: 'Dólar Australiano', position: 'before' },
  CNY: { symbol: '¥', rate: 7.85, code: 'CNY', name: 'Yuan Chinês', position: 'before' },
  BRL: { symbol: 'R$', rate: 6.00, code: 'BRL', name: 'Real Brasileiro', position: 'before' },
  MXN: { symbol: 'MX$', rate: 20.00, code: 'MXN', name: 'Peso Mexicano', position: 'before' },
  AED: { symbol: 'د.إ', rate: 4.00, code: 'AED', name: 'Dirham dos Emirados', position: 'before' },
  SGD: { symbol: 'SG$', rate: 1.46, code: 'SGD', name: 'Dólar de Singapura', position: 'before' },
  KRW: { symbol: '₩', rate: 1480.0, code: 'KRW', name: 'Won Sul-Coreano', position: 'before', decimals: 0 },
  INR: { symbol: '₹', rate: 91.0, code: 'INR', name: 'Rupia Indiana', position: 'before' },
  SEK: { symbol: 'kr', rate: 11.40, code: 'SEK', name: 'Coroa Sueca', position: 'after' },
  NOK: { symbol: 'kr', rate: 11.60, code: 'NOK', name: 'Coroa Norueguesa', position: 'after' }
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('EUR');

  const formatPrice = (amountInEur) => {
    const numeric = Number(amountInEur) || 0;
    const config = RATES[currency] || RATES.EUR;
    const converted = Math.round(numeric * config.rate);
    const formattedNum = converted.toLocaleString();

    if (config.position === 'before') {
      return `${config.symbol}${formattedNum}`;
    }
    return `${formattedNum}${config.symbol}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, RATES }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);

