import React, { createContext, useContext } from 'react';
import { usePersistentState } from '../utils/usePersistentState';
import { DESTINATIONS } from '../mockData/destinations';
import { PRODUCTS } from '../mockData/products';

const TripContext = createContext();

const defaultTrip = {
  id: 'trip-thailand-2026',
  destination: DESTINATIONS[0],
  startDate: '2026-08-15',
  endDate: '2026-08-22',
  deliveryAddress: 'The Slate Phuket Hotel & Resort, 116 Moo 1, Sakhu, Thalang, Phuket 83110, Tailândia',
  status: 'active'
};

const defaultTripHistory = [
  {
    id: 'past-trip-paris-2025',
    destination: {
      title: 'Paris',
      country: 'França',
      flag: '🇫🇷',
      weather: { temp: '16°C', condition: 'Parcialmente Nublado', icon: '☁️' }
    },
    startDate: '2025-10-10',
    endDate: '2025-10-17',
    hotel: 'Le Meurice Hotel Paris, Rue de Rivoli',
    totalCost: 189,
    status: 'Concluída',
    items: PRODUCTS.slice(0, 4).map((p) => ({ ...p, selectedSize: 'M', rentalDays: 7 }))
  },
  {
    id: 'past-trip-santorini-2025',
    destination: {
      title: 'Santorini',
      country: 'Grécia',
      flag: '🇬🇷',
      weather: { temp: '27°C', condition: 'Ensolarado', icon: '☀️' }
    },
    startDate: '2025-07-01',
    endDate: '2025-07-08',
    hotel: 'Grace Hotel Santorini, Imerovigli',
    totalCost: 245,
    status: 'Concluída',
    items: PRODUCTS.slice(4, 8).map((p) => ({ ...p, selectedSize: 'S', rentalDays: 7 }))
  }
];

export const TripProvider = ({ children }) => {
  const [currentTrip, setCurrentTrip] = usePersistentState('bagless_trip', defaultTrip);
  const [tripHistory, setTripHistory] = usePersistentState('bagless_trip_history', defaultTripHistory);

  const calculateTripDays = () => {
    if (!currentTrip?.startDate || !currentTrip?.endDate) return 7;
    const start = new Date(currentTrip.startDate);
    const end = new Date(currentTrip.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 7;
  };

  return (
    <TripContext.Provider
      value={{
        currentTrip,
        setCurrentTrip,
        tripHistory,
        setTripHistory,
        calculateTripDays
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) throw new Error('useTrip must be used within TripProvider');
  return context;
};
