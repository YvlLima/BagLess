import React, { createContext, useContext } from 'react';
import { UserProvider, useUser } from './UserContext';
import { TripProvider, useTrip } from './TripContext';
import { KitProvider, useKit } from './KitContext';
import { RentalProvider, useRental } from './RentalContext';
import { WishlistProvider, useWishlist } from './WishlistContext';

export { useUser } from './UserContext';
export { useTrip } from './TripContext';
export { useKit } from './KitContext';
export { useRental } from './RentalContext';
export { useWishlist } from './WishlistContext';

const AppCombinedContext = createContext();

const AppStateBridge = ({ children }) => {
  const userCtx = useUser();
  const tripCtx = useTrip();
  const tripDays = tripCtx.calculateTripDays();

  return (
    <KitProvider
      tripDays={tripDays}
      userTopSize={userCtx.user?.sizes?.top}
      setCurrentScreen={userCtx.setCurrentScreen}
    >
      <KitBridge userCtx={userCtx} tripCtx={tripCtx} tripDays={tripDays}>
        {children}
      </KitBridge>
    </KitProvider>
  );
};

const KitBridge = ({ children, userCtx, tripCtx, tripDays }) => {
  const kitCtx = useKit();

  return (
    <RentalProvider
      kit={kitCtx.kit}
      setKit={kitCtx.setKit}
      currentTrip={tripCtx.currentTrip}
      setCurrentTrip={tripCtx.setCurrentTrip}
      setTripHistory={tripCtx.setTripHistory}
      tripDays={tripDays}
      userHomeAddress={userCtx.user?.homeAddress}
      setCurrentScreen={userCtx.setCurrentScreen}
    >
      <WishlistProvider>
        <AppCombinedBridge userCtx={userCtx} tripCtx={tripCtx} kitCtx={kitCtx}>
          {children}
        </AppCombinedBridge>
      </WishlistProvider>
    </RentalProvider>
  );
};

const AppCombinedBridge = ({ children, userCtx, tripCtx, kitCtx }) => {
  const rentalCtx = useRental();
  const wishlistCtx = useWishlist();

  const combinedValue = {
    ...userCtx,
    ...tripCtx,
    ...kitCtx,
    ...rentalCtx,
    ...wishlistCtx
  };

  return (
    <AppCombinedContext.Provider value={combinedValue}>
      {children}
    </AppCombinedContext.Provider>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <TripProvider>
        <AppStateBridge>{children}</AppStateBridge>
      </TripProvider>
    </UserProvider>
  );
};

export const useApp = () => {
  const context = useContext(AppCombinedContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
