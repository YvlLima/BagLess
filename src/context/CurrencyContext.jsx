import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const RATES = {
  EUR: { symbol: '€', rate: 1.0, code: 'EUR' },
  USD: { symbol: '$', rate: 1.09, code: 'USD' },
  GBP: { symbol: '£', rate: 0.85, code: 'GBP' },
  JPY: { symbol: '¥', rate: 165.0, code: 'JPY' }
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('EUR');

  const formatPrice = (amountInEur) => {
    const numeric = Number(amountInEur) || 0;
    const config = RATES[currency] || RATES.EUR;
    const converted = Math.round(numeric * config.rate);

    if (currency === 'JPY') {
      return `${config.symbol}${converted.toLocaleString()}`;
    }
    return `${converted}${config.symbol}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, RATES }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
