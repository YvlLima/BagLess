import React, { createContext, useContext, useState } from 'react';
import { usePersistentState } from '../utils/usePersistentState';
import { DESTINATIONS } from '../mockData/destinations';
import { useUser } from './UserContext';
import { getVipDetails } from '../utils/vip';

const RentalContext = createContext();

export const RentalProvider = ({
  children,
  kit,
  setKit,
  currentTrip,
  setCurrentTrip,
  setTripHistory,
  tripDays,
  userHomeAddress,
  setCurrentScreen
}) => {
  const [activeRentals, setActiveRentals] = usePersistentState('bagless_active_rentals', []);
  const [boughtItems, setBoughtItems] = usePersistentState('bagless_bought_items', []);
  const [buyingProduct, setBuyingProduct] = useState(null);
  const { user } = useUser();

  const removeFromActiveRentals = (itemId, size) => {
    setActiveRentals((prev) =>
      prev.filter((item) => !(item.id === itemId && (size ? item.selectedSize === size : true)))
    );
  };

  const executeBuyItem = (item, destinationHomeAddress) => {
    const rentalPaid = item.rentalPricePerDay * item.rentalDays;
    const rawPriceDiff = Math.max(0, item.fullPurchasePrice - rentalPaid);
    
    const vip = getVipDetails(user?.vipTier);
    const vipDiscountPercent = vip.purchaseDiscountPercent || 0;
    const finalAmountPaid = Math.round(rawPriceDiff * (1 - vipDiscountPercent / 100));

    const newBoughtRecord = {
      ...item,
      purchaseDate: new Date().toISOString().split('T')[0],
      shippingAddress: destinationHomeAddress || userHomeAddress,
      amountPaid: finalAmountPaid,
      originalRentalPaid: rentalPaid,
      vipDiscountApplied: vipDiscountPercent
    };

    setBoughtItems((prev) => [newBoughtRecord, ...prev]);
    setActiveRentals((prev) => prev.filter((r) => r.id !== item.id));
    setBuyingProduct(null);
  };

  const confirmTripCheckout = () => {
    const days = tripDays || 7;
    const newRentals = kit.map((item) => ({
      ...item,
      rentalDays: days,
      returnDate: currentTrip?.endDate,
      status: 'rented'
    }));

    const completedRecord = {
      id: `trip-${Date.now()}`,
      destination: currentTrip?.destination || DESTINATIONS[0],
      startDate: currentTrip?.startDate,
      endDate: currentTrip?.endDate,
      hotel: currentTrip?.deliveryAddress,
      totalCost: kit.reduce((acc, i) => acc + i.rentalPricePerDay * days, 0),
      status: 'Concluída',
      items: kit
    };

    if (setTripHistory) {
      setTripHistory((prev) => [completedRecord, ...prev]);
    }
    setActiveRentals((prev) => [...newRentals, ...prev]);
    if (setCurrentTrip) {
      setCurrentTrip((prev) => ({ ...prev, status: 'active' }));
    }
    if (setKit) {
      setKit([]);
    }
    if (setCurrentScreen) {
      setCurrentScreen('active-trip');
    }
  };

  const cancelTrip = () => {
    setActiveRentals([]);
    if (setCurrentTrip) {
      setCurrentTrip((prev) => ({ ...prev, status: 'cancelled' }));
    }
    if (setCurrentScreen) {
      setCurrentScreen('create-trip');
    }
  };

  return (
    <RentalContext.Provider
      value={{
        activeRentals,
        setActiveRentals,
        boughtItems,
        setBoughtItems,
        buyingProduct,
        setBuyingProduct,
        removeFromActiveRentals,
        executeBuyItem,
        confirmTripCheckout,
        cancelTrip
      }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export const useRental = () => {
  const context = useContext(RentalContext);
  if (!context) throw new Error('useRental must be used within RentalProvider');
  return context;
};
