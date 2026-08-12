import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { WishlistProvider, useWishlist } from './context/WishlistContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { ThemeProvider } from './context/ThemeContext';
import { PaymentProvider } from './context/PaymentContext';
import { Navbar, ToastProvider, ProductModal } from './components';
import {
  CatalogScreen,
  CreateTripScreen,
  CartScreen,
  ActiveTripScreen,
  ProfileHistoryScreen,
  BrandsScreen,
  OnboardingScreen,
  WishlistScreen,
  TripHistoryScreen,
  PaymentMethodsScreen
} from './screens';
import { Compass, ShoppingBag, Luggage, User, Heart } from 'lucide-react';

const MainContent = () => {
  const { currentScreen, setCurrentScreen, isMobileFrame, kit } = useApp();
  const { wishlist } = useWishlist();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen />;
      case 'create-trip':
        return <CreateTripScreen />;
      case 'catalog':
        return <CatalogScreen />;
      case 'wishlist':
        return <WishlistScreen />;
      case 'trip-history':
        return <TripHistoryScreen />;
      case 'brands':
        return <BrandsScreen />;
      case 'cart':
        return <CartScreen />;
      case 'active-trip':
        return <ActiveTripScreen />;
      case 'profile':
        return <ProfileHistoryScreen />;
      case 'payment-methods':
        return <PaymentMethodsScreen />;
      default:
        return <CatalogScreen />;
    }
  };

  if (isMobileFrame) {
    return (
      <div className="mobile-frame-wrapper">
        <div className="mobile-frame">
          <div className="mobile-notch" />
          
          {/* Status bar header */}
          <div className="mobile-status-bar">
            <span>9:41</span>
            <span>5G 🔋</span>
          </div>

          {/* App Header */}
          <div className="mobile-header-bar">
            <Navbar />
          </div>

          {/* Scrollable screen content */}
          <div className="mobile-content">
            {renderScreen()}
            <ProductModal />
          </div>

          {/* Mobile Bottom Navigation Bar */}
          <div className="mobile-bottom-nav">
            <button className={`mobile-nav-item ${currentScreen === 'catalog' ? 'active' : ''}`} onClick={() => setCurrentScreen('catalog')}>
              <Compass size={20} />
              <span>Explorar</span>
            </button>

            <button className={`mobile-nav-item ${currentScreen === 'wishlist' ? 'active' : ''}`} onClick={() => setCurrentScreen('wishlist')}>
              <div className="nav-icon-badge-wrapper">
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="nav-icon-badge-count">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <span>Favoritos</span>
            </button>

            <button className={`mobile-nav-item ${currentScreen === 'cart' ? 'active' : ''}`} onClick={() => setCurrentScreen('cart')}>
              <div className="nav-icon-badge-wrapper">
                <ShoppingBag size={20} />
                {kit.length > 0 && (
                  <span className="nav-icon-badge-count">
                    {kit.length}
                  </span>
                )}
              </div>
              <span>Kit</span>
            </button>

            <button className={`mobile-nav-item ${currentScreen === 'active-trip' ? 'active' : ''}`} onClick={() => setCurrentScreen('active-trip')}>
              <Luggage size={20} />
              <span>Ativa</span>
            </button>

            <button className={`mobile-nav-item ${currentScreen === 'profile' || currentScreen === 'payment-methods' ? 'active' : ''}`} onClick={() => setCurrentScreen('profile')}>
              <User size={20} />
              <span>Perfil</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Web Desktop Browser Mode
  return (
    <div className="web-viewport">
      <Navbar />
      <main className="main-content">
        {renderScreen()}
      </main>
      <ProductModal />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <WishlistProvider>
          <CurrencyProvider>
            <PaymentProvider>
              <ToastProvider>
                <div className="app-container">
                  {/* Top bar indicating current device view and switch option */}
                  <div className="mode-banner">
                    <div>
                      🧳 <strong>Bagless App</strong> — Viaja leve. Vive com estilo. (Travel Light. Dress Right.)
                    </div>
                    <div className="mode-banner-controls">
                      <span className="mode-banner-tag">
                        Ambiente: Web & Mobile Shared Architecture
                      </span>
                    </div>
                  </div>

                  <MainContent />
                </div>
              </ToastProvider>
            </PaymentProvider>
          </CurrencyProvider>
        </WishlistProvider>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
