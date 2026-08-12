import React, { createContext, useContext } from 'react';
import { usePersistentState } from '../utils/usePersistentState';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [favorites, setFavorites] = usePersistentState('bagless_favorites', []);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        favorites,
        setFavorites,
        toggleFavorite
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within WishlistProvider');
  return context;
};
