import React, { createContext, useContext, useState } from 'react';
import { usePersistentState } from '../utils/usePersistentState';
import { PRODUCTS } from '../mockData/products';

const KitContext = createContext();

export const KitProvider = ({ children, tripDays = 7, userTopSize = 'M', setCurrentScreen }) => {
  const [kit, setKit] = usePersistentState('bagless_kit', []);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToKit = (product, size = 'M') => {
    setKit((prev) => {
      const exists = prev.find((item) => item.id === product.id && item.selectedSize === size);
      if (exists) return prev;
      return [...prev, { ...product, selectedSize: size, rentalDays: tripDays }];
    });
  };

  const removeFromKit = (productId, size) => {
    setKit((prev) =>
      prev.filter((item) => {
        if (size) {
          return !(item.id === productId && item.selectedSize === size);
        }
        return item.id !== productId;
      })
    );
  };

  const repeatTripKit = (pastTrip) => {
    const clonedItems = pastTrip.items.map((item) => ({
      ...item,
      rentalDays: tripDays
    }));
    setKit(clonedItems);
    if (setCurrentScreen) setCurrentScreen('cart');
  };

  const autoCurateKitForDestination = (targetDestination) => {
    const tempNum = parseInt(targetDestination?.weather?.temp || '25', 10);

    let curated;
    if (tempNum < 12) {
      curated = PRODUCTS.filter(
        (p) => p.subCategory === 'jacket' || p.subCategory === 'watch' || p.subCategory === 'trousers' || p.subCategory === 'perfume'
      ).slice(0, 5);
    } else if (tempNum > 26) {
      curated = PRODUCTS.filter(
        (p) => p.subCategory === 'shirt' || p.subCategory === 'swimwear' || p.subCategory === 'sunglasses' || p.subCategory === 'sandals' || p.subCategory === 'bag'
      ).slice(0, 5);
    } else {
      curated = PRODUCTS.filter(
        (p) => p.subCategory === 'blazer' || p.subCategory === 'sneakers' || p.subCategory === 'loafers' || p.subCategory === 'dress' || p.subCategory === 'perfume'
      ).slice(0, 5);
    }

    const kitWithMetadata = curated.map((item) => ({
      ...item,
      selectedSize: userTopSize || 'M',
      rentalDays: tripDays
    }));

    setKit(kitWithMetadata);
  };

  return (
    <KitContext.Provider
      value={{
        kit,
        setKit,
        selectedProduct,
        setSelectedProduct,
        addToKit,
        removeFromKit,
        repeatTripKit,
        autoCurateKitForDestination
      }}
    >
      {children}
    </KitContext.Provider>
  );
};

export const useKit = () => {
  const context = useContext(KitContext);
  if (!context) throw new Error('useKit must be used within KitProvider');
  return context;
};
