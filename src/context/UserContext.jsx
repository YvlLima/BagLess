import React, { createContext, useContext, useState } from 'react';
import { usePersistentState } from '../utils/usePersistentState';

const UserContext = createContext();

const defaultUserData = {
  name: 'Ana & Tiago Silva',
  email: 'ana.silva@bagless.travel',
  vipTier: 'global',
  vipTierName: 'VIP Global Passport',
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

export const UserProvider = ({ children }) => {
  const [isMobileFrame, setIsMobileFrame] = usePersistentState('bagless_mobile_mode', false);
  const [currentScreen, setCurrentScreen] = useState('catalog');
  const [user, setUser] = usePersistentState('bagless_user', defaultUserData);

  return (
    <UserContext.Provider
      value={{
        isMobileFrame,
        setIsMobileFrame,
        currentScreen,
        setCurrentScreen,
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within UserProvider');
  return context;
};
