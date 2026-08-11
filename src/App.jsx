import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { CurrencyProvider } from './context/CurrencyContext';
import { Navbar, ToastProvider, ProductModal } from './components';
import {
  CatalogScreen,
  CreateTripScreen,
  CartScreen,
  ActiveTripScreen,
  ProfileHistoryScreen,
  BrandsScreen,
  OnboardingScreen
} from './screens';
import { Compass, ShoppingBag, Luggage, User, Award } from 'lucide-react';

const MainContent = () => {
  const { currentScreen, setCurrentScreen, isMobileFrame, kit } = useApp();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return <OnboardingScreen />;
      case 'create-trip':
        return <CreateTripScreen />;
      case 'catalog':
        return <CatalogScreen />;
      case 'brands':
        return <BrandsScreen />;
      case 'cart':
        return <CartScreen />;
      case 'active-trip':
        return <ActiveTripScreen />;
      case 'profile':
        return <ProfileHistoryScreen />;
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
          <div style={{ height: '40px', padding: '12px 20px 0 20px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)' }}>
            <span>9:41</span>
            <span>5G 🔋</span>
          </div>

          {/* App Header */}
          <div style={{ padding: '8px 16px 12px 16px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-main)' }}>
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

            <button className={`mobile-nav-item ${currentScreen === 'brands' ? 'active' : ''}`} onClick={() => setCurrentScreen('brands')}>
              <Award size={20} />
              <span>Marcas</span>
            </button>

            <button className={`mobile-nav-item ${currentScreen === 'cart' ? 'active' : ''}`} onClick={() => setCurrentScreen('cart')}>
              <div style={{ position: 'relative' }}>
                <ShoppingBag size={20} />
                {kit.length > 0 && (
                  <span style={{ position: 'absolute', top: '-4px', right: '-8px', background: 'var(--primary-terracotta)', color: '#FFF', fontSize: '9px', fontWeight: 800, width: '15px', height: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

            <button className={`mobile-nav-item ${currentScreen === 'profile' ? 'active' : ''}`} onClick={() => setCurrentScreen('profile')}>
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
      <main style={{ marginTop: '16px' }}>
        {renderScreen()}
      </main>
      <ProductModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <CurrencyProvider>
        <ToastProvider>
          <div className="app-container">
            {/* Top bar indicating current device view and switch option */}
            <div className="mode-banner">
              <div>
                🧳 <strong>Bagless App</strong> — Viaja leve. Vive com estilo. (Travel Light. Dress Right.)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '11px', color: '#E6DEC9' }}>
                  Ambiente: Web & Mobile Shared Architecture
                </span>
              </div>
            </div>

            <MainContent />
          </div>
        </ToastProvider>
      </CurrencyProvider>
    </AppProvider>
  );
}

export default App;
