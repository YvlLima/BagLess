import React, { createContext, useContext, useState, useEffect } from 'react';

const PaymentContext = createContext();

const STORAGE_KEY = 'bagless_payment_methods';

// Helper: Card Brand Detection by number prefix
export const detectCardBrand = (cardNumber = '') => {
  const cleanNum = cardNumber.replace(/\D/g, '');
  if (/^4/.test(cleanNum)) return 'visa';
  if (/^(5[1-5]|2[2-7])/.test(cleanNum)) return 'mastercard';
  if (/^3[47]/.test(cleanNum)) return 'amex';
  return 'generic';
};

// Helper: Masking card number safely (always keep last 4 digits)
export const maskCardNumber = (cardNumber = '') => {
  const cleanNum = cardNumber.replace(/\D/g, '');
  if (cleanNum.length < 4) return '•••• ••••';
  const last4 = cleanNum.slice(-4);
  return `•••• ${last4}`;
};

// Helper: Masking phone number for MB WAY
export const maskPhoneNumber = (phone = '') => {
  const cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.length < 9) return '+351 9** *** ***';
  const prefix = cleanPhone.slice(0, 3);
  const suffix = cleanPhone.slice(-3);
  return `+351 ${prefix} *** ${suffix}`;
};

// Helper: Form Validation
export const validatePaymentMethod = (type, data) => {
  const errors = {};

  if (type === 'card') {
    const cleanNum = (data.cardNumber || '').replace(/\D/g, '');
    if (!cleanNum || cleanNum.length < 13 || cleanNum.length > 19) {
      errors.cardNumber = 'Número de cartão inválido (deve conter entre 13 e 19 dígitos).';
    }
    if (!data.holderName || data.holderName.trim().length < 3) {
      errors.holderName = 'Insere o nome impresso no cartão.';
    }

    // Expiry MM/YY check
    const expRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!data.expiry || !expRegex.test(data.expiry)) {
      errors.expiry = 'Validade inválida (formato MM/AA).';
    } else {
      const [m, y] = data.expiry.split('/');
      const expMonth = parseInt(m, 10);
      const expYear = 2000 + parseInt(y, 10);
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1;
      if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        errors.expiry = 'O cartão já se encontra expirado.';
      }
    }

    const cleanCvv = (data.cvv || '').replace(/\D/g, '');
    if (!cleanCvv || cleanCvv.length < 3 || cleanCvv.length > 4) {
      errors.cvv = 'CVV inválido (3 ou 4 dígitos).';
    }
  } else if (type === 'mbway') {
    const cleanPhone = (data.phone || '').replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      errors.phone = 'Insere um número de telemóvel válido (mínimo 9 dígitos).';
    }
  } else if (type === 'paypal') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Insere um endereço de e-mail de PayPal válido.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

const INITIAL_METHODS = [
  {
    id: 'pay-visa-4242',
    type: 'card',
    brand: 'visa',
    label: 'Visa Gold',
    maskedDetail: '•••• 4242',
    holderName: 'Ana Silva',
    expiry: '12/28',
    isDefault: true
  },
  {
    id: 'pay-mbway-912',
    type: 'mbway',
    brand: 'mbway',
    label: 'MB WAY',
    maskedDetail: '+351 912 *** 456',
    phone: '912345456',
    isDefault: false
  },
  {
    id: 'pay-paypal-ana',
    type: 'paypal',
    brand: 'paypal',
    label: 'PayPal',
    maskedDetail: 'ana.silva@example.com',
    email: 'ana.silva@example.com',
    isDefault: false
  },
  {
    id: 'pay-applepay',
    type: 'applepay',
    brand: 'applepay',
    label: 'Apple Pay / Google Pay',
    maskedDetail: 'Express Wallet',
    isDefault: false
  }
];

export const PaymentProvider = ({ children }) => {
  const [paymentMethods, setPaymentMethods] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (err) {
      console.warn('[PaymentProvider] Erro ao carregar de localStorage:', err);
    }
    return INITIAL_METHODS;
  });

  const [selectedMethodId, setSelectedMethodId] = useState(() => {
    const defaultMethod = paymentMethods.find((m) => m.isDefault) || paymentMethods[0];
    return defaultMethod ? defaultMethod.id : '';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(paymentMethods));
    } catch (err) {
      console.warn('[PaymentProvider] Erro ao salvar em localStorage:', err);
    }
  }, [paymentMethods]);

  const setDefaultPaymentMethod = (id) => {
    setPaymentMethods((prev) =>
      prev.map((m) => ({
        ...m,
        isDefault: m.id === id
      }))
    );
    setSelectedMethodId(id);
  };

  const addPaymentMethod = (newMethodData) => {
    const { type, cardNumber, holderName, expiry, phone, email, isDefault } = newMethodData;
    const brand = type === 'card' ? detectCardBrand(cardNumber) : type;
    const id = `pay-${brand}-${Date.now().toString().slice(-6)}`;

    let maskedDetail = '';
    let label = '';

    if (type === 'card') {
      maskedDetail = maskCardNumber(cardNumber);
      label = brand === 'visa' ? 'Visa' : brand === 'mastercard' ? 'Mastercard' : brand === 'amex' ? 'American Express' : 'Cartão de Crédito';
    } else if (type === 'mbway') {
      maskedDetail = maskPhoneNumber(phone);
      label = 'MB WAY';
    } else if (type === 'paypal') {
      maskedDetail = email;
      label = 'PayPal';
    } else if (type === 'applepay') {
      maskedDetail = 'Express Wallet VIP';
      label = 'Apple Pay / Google Pay';
    }

    const newEntry = {
      id,
      type,
      brand,
      label,
      maskedDetail,
      holderName: holderName || 'Membro VIP',
      expiry: expiry || '',
      isDefault: Boolean(isDefault) || paymentMethods.length === 0
    };

    setPaymentMethods((prev) => {
      let updated = [...prev];
      if (newEntry.isDefault) {
        updated = updated.map((m) => ({ ...m, isDefault: false }));
      }
      return [newEntry, ...updated];
    });

    if (newEntry.isDefault || !selectedMethodId) {
      setSelectedMethodId(id);
    }

    return newEntry;
  };

  const removePaymentMethod = (id) => {
    setPaymentMethods((prev) => {
      const filtered = prev.filter((m) => m.id !== id);
      // If we removed default, reassign default to first item
      if (filtered.length > 0 && !filtered.some((m) => m.isDefault)) {
        filtered[0].isDefault = true;
      }
      return filtered;
    });

    if (selectedMethodId === id) {
      const remaining = paymentMethods.filter((m) => m.id !== id);
      if (remaining.length > 0) {
        setSelectedMethodId(remaining[0].id);
      } else {
        setSelectedMethodId('');
      }
    }
  };

  const getSelectedMethod = () => {
    return paymentMethods.find((m) => m.id === selectedMethodId) || paymentMethods.find((m) => m.isDefault) || paymentMethods[0];
  };

  return (
    <PaymentContext.Provider
      value={{
        paymentMethods,
        selectedMethodId,
        setSelectedMethodId,
        addPaymentMethod,
        removePaymentMethod,
        setDefaultPaymentMethod,
        getSelectedMethod,
        detectCardBrand,
        maskCardNumber,
        validatePaymentMethod
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
