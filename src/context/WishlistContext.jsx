import React, { createContext, useContext, useMemo } from 'react';
import { usePersistentState } from '../utils/usePersistentState';
import { PRODUCTS } from '../mockData/products';
import { useUser } from './UserContext';
import { getVipDetails } from '../utils/vip';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [favorites, setFavorites] = usePersistentState('bagless_favorites', []);
  const { user } = useUser();

  const vip = getVipDetails(user?.vipTier);
  const wishlistLimit = vip.wishlistLimit;

  const getId = (productOrId) =>
    typeof productOrId === 'object' && productOrId !== null ? productOrId.id : productOrId;

  const isInWishlist = (productOrId) => {
    if (productOrId === undefined || productOrId === null) return false;
    const id = getId(productOrId);
    return favorites.includes(id);
  };

  const toggleWishlist = (productOrId) => {
    if (productOrId === undefined || productOrId === null) return false;
    const id = getId(productOrId);

    if (favorites.includes(id)) {
      setFavorites((prev) => prev.filter((favId) => favId !== id));
      return 'removed';
    } else {
      if (favorites.length >= wishlistLimit) {
        return 'limit_reached';
      }
      setFavorites((prev) => [...prev, id]);
      return 'added';
    }
  };

  const addToWishlist = (productOrId) => {
    if (productOrId === undefined || productOrId === null) return false;
    const id = getId(productOrId);
    if (favorites.includes(id)) return 'exists';
    if (favorites.length >= wishlistLimit) return 'limit_reached';

    setFavorites((prev) => [...prev, id]);
    return 'added';
  };

  const removeFromWishlist = (productOrId) => {
    if (productOrId === undefined || productOrId === null) return;
    const id = getId(productOrId);
    setFavorites((prev) => prev.filter((favId) => favId !== id));
  };

  const clearWishlist = () => {
    setFavorites([]);
  };

  const wishlist = useMemo(() => {
    if (!Array.isArray(favorites)) return [];
    return PRODUCTS.filter((product) => favorites.includes(product.id));
  }, [favorites]);

  return (
    <WishlistContext.Provider
      value={{
        favorites,
        setFavorites,
        wishlist,
        wishlistLimit,
        toggleWishlist,
        toggleFavorite: toggleWishlist,
        isInWishlist,
        isFavorite: isInWishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist
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

