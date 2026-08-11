import React, { createContext, useContext, useState, useEffect } from 'react';
import { DESTINATIONS } from '../mockData/destinations';
import { PRODUCTS } from '../mockData/products';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Mode Viewport Toggle: true = Mobile App Frame, false = Web Browser
  const [isMobileFrame, setIsMobileFrame] = useState(() => {
    return localStorage.getItem('bagless_mobile_mode') === 'true';
  });

  // Active Screen Navigation state
  const [currentScreen, setCurrentScreen] = useState('catalog');

  // User Profile State with LocalStorage
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('bagless_user');
    return saved
      ? JSON.parse(saved)
      : {
          name: 'Ana & Tiago Silva',
          email: 'ana.silva@bagless.travel',
          sizes: {
            top: 'M',
            bottom: '38',
            shoes: '39'
          },
          stylePreferences: ['Resort Casual', 'Praia Minimalista', 'Conforto Urbano'],
          homeAddress: 'Avenida da Liberdade 120, 4º Dto, 1250-146 Lisboa, Portugal',
          destinationAddresses: [
            { id: 'h1', title: 'The Slate Phuket Hotel & Resort', detail: '116 Moo 1, Sakhu, Thalang, Phuket 83110, Tailândia' }
          ]
        };
  });

  // Current Trip Setup (Draft or Active)
  const [currentTrip, setCurrentTrip] = useState(() => {
    const saved = localStorage.getItem('bagless_trip');
    return saved
      ? JSON.parse(saved)
      : {
          id: 'trip-thailand-2026',
          destination: DESTINATIONS[0], // Thailand default
          startDate: '2026-08-15',
          endDate: '2026-08-22',
          deliveryAddress: 'The Slate Phuket Hotel & Resort, 116 Moo 1, Sakhu, Thalang, Phuket 83110, Tailândia',
          status: 'active'
        };
  });

  // Rental Kit (Cart) Items
  const [kit, setKit] = useState(() => {
    const saved = localStorage.getItem('bagless_kit');
    return saved ? JSON.parse(saved) : [];
  });

  // Active Trip Rentals (items delivered at hotel)
  const [activeRentals, setActiveRentals] = useState(() => {
    const saved = localStorage.getItem('bagless_active_rentals');
    return saved ? JSON.parse(saved) : [];
  });

  // Purchased items
  const [boughtItems, setBoughtItems] = useState(() => {
    const saved = localStorage.getItem('bagless_bought_items');
    return saved ? JSON.parse(saved) : [];
  });

  // Favorites
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('bagless_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Selected item modal & Buy item modal states
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [buyingProduct, setBuyingProduct] = useState(null);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('bagless_mobile_mode', isMobileFrame);
  }, [isMobileFrame]);

  useEffect(() => {
    localStorage.setItem('bagless_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('bagless_trip', JSON.stringify(currentTrip));
  }, [currentTrip]);

  useEffect(() => {
    localStorage.setItem('bagless_kit', JSON.stringify(kit));
  }, [kit]);

  useEffect(() => {
    localStorage.setItem('bagless_active_rentals', JSON.stringify(activeRentals));
  }, [activeRentals]);

  useEffect(() => {
    localStorage.setItem('bagless_bought_items', JSON.stringify(boughtItems));
  }, [boughtItems]);

  useEffect(() => {
    localStorage.setItem('bagless_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add item to trip kit
  const addToKit = (product, size = 'M') => {
    setKit((prev) => {
      const exists = prev.find((item) => item.id === product.id && item.selectedSize === size);
      if (exists) return prev;
      return [...prev, { ...product, selectedSize: size, rentalDays: calculateTripDays() }];
    });
  };

  // Remove item from trip kit
  const removeFromKit = (productId, size) => {
    setKit((prev) => prev.filter((item) => !(item.id === productId && item.selectedSize === size)));
  };

  // Auto-Curate Kit via AI for Destination
  const autoCurateKitForDestination = (targetDestination) => {
    const days = calculateTripDays();
    const tempNum = parseInt(targetDestination?.weather?.temp || '25', 10);

    let curated = [];
    if (tempNum < 12) {
      // Cold Mountain / Alpine Ski Kit
      curated = PRODUCTS.filter((p) => p.subCategory === 'jacket' || p.subCategory === 'watch' || p.subCategory === 'trousers' || p.subCategory === 'perfume').slice(0, 5);
    } else if (tempNum > 26) {
      // Tropical Beach / Island Resort Kit
      curated = PRODUCTS.filter((p) => p.subCategory === 'shirt' || p.subCategory === 'swimwear' || p.subCategory === 'sunglasses' || p.subCategory === 'sandals' || p.subCategory === 'bag').slice(0, 5);
    } else {
      // Urban Chic European Kit
      curated = PRODUCTS.filter((p) => p.subCategory === 'blazer' || p.subCategory === 'sneakers' || p.subCategory === 'loafers' || p.subCategory === 'dress' || p.subCategory === 'perfume').slice(0, 5);
    }

    const kitWithMetadata = curated.map((item) => ({
      ...item,
      selectedSize: user.sizes.top || 'M',
      rentalDays: days
    }));

    setKit(kitWithMetadata);
  };

  // Toggle Wishlist / Favorite
  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Calculate trip days
  const calculateTripDays = () => {
    if (!currentTrip.startDate || !currentTrip.endDate) return 7;
    const start = new Date(currentTrip.startDate);
    const end = new Date(currentTrip.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 7;
  };

  // Checkout trip kit
  const confirmTripCheckout = () => {
    const days = calculateTripDays();
    const newRentals = kit.map((item) => ({
      ...item,
      rentalDays: days,
      returnDate: currentTrip.endDate,
      status: 'rented'
    }));
    setActiveRentals((prev) => [...newRentals, ...prev]);
    setCurrentTrip((prev) => ({ ...prev, status: 'active' }));
    setKit([]);
    setCurrentScreen('active-trip');
  };

  // Execute "Comprar esta peça"
  const executeBuyItem = (item, destinationHomeAddress) => {
    const rentalPaid = item.rentalPricePerDay * item.rentalDays;
    const priceDiff = Math.max(0, item.fullPurchasePrice - rentalPaid);

    const newBoughtRecord = {
      ...item,
      purchaseDate: new Date().toISOString().split('T')[0],
      shippingAddress: destinationHomeAddress || user.homeAddress,
      amountPaid: priceDiff,
      originalRentalPaid: rentalPaid
    };

    setBoughtItems((prev) => [newBoughtRecord, ...prev]);
    setActiveRentals((prev) => prev.filter((r) => r.id !== item.id));
    setBuyingProduct(null);
  };

  // Cancel active trip
  const cancelTrip = () => {
    setActiveRentals([]);
    setCurrentTrip((prev) => ({ ...prev, status: 'cancelled' }));
    setCurrentScreen('create-trip');
  };

  // Remove individual item from active rentals in hotel
  const removeFromActiveRentals = (itemId, size) => {
    setActiveRentals((prev) => prev.filter((item) => !(item.id === itemId && (size ? item.selectedSize === size : true))));
  };

  return (
    <AppContext.Provider
      value={{
        isMobileFrame,
        setIsMobileFrame,
        currentScreen,
        setCurrentScreen,
        user,
        setUser,
        currentTrip,
        setCurrentTrip,
        kit,
        addToKit,
        removeFromKit,
        autoCurateKitForDestination,
        activeRentals,
        removeFromActiveRentals,
        boughtItems,
        favorites,
        toggleFavorite,
        selectedProduct,
        setSelectedProduct,
        buyingProduct,
        setBuyingProduct,
        calculateTripDays,
        confirmTripCheckout,
        executeBuyItem,
        cancelTrip
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
