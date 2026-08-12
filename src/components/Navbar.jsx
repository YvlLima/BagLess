import React from 'react';
import { ShoppingBag, Luggage, User, Compass, Smartphone, Monitor, Award, Heart, Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { useTheme } from '../context/ThemeContext';
import { BrandLogo } from './BrandLogo';

export const Navbar = () => {
  const { currentScreen, setCurrentScreen, kit, activeRentals, isMobileFrame, setIsMobileFrame } = useApp();
  const { wishlist } = useWishlist();
  const { currency, setCurrency, RATES } = useCurrency();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header-nav">
      {/* Brand Logo */}
      <div className="brand-logo-group" onClick={() => setCurrentScreen('catalog')}>
        <BrandLogo size="medium" />
      </div>

      {/* Navigation items for Desktop Web view */}
      {!isMobileFrame && (
        <nav className="nav-links">
          <button
            className={`nav-link ${currentScreen === 'create-trip' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('create-trip')}
          >
            <Compass size={16} className="nav-icon-inline" />
            Planear Viagem
          </button>

          <button
            className={`nav-link ${currentScreen === 'catalog' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('catalog')}
          >
            Catálogo
          </button>

          <button
            className={`nav-link ${currentScreen === 'brands' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('brands')}
          >
            <Award size={16} className="nav-icon-inline" />
            Marcas
          </button>

          <button
            className={`nav-link ${currentScreen === 'wishlist' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('wishlist')}
          >
            <Heart size={16} className="nav-icon-inline" />
            Favoritos
            {wishlist.length > 0 && (
              <span className="nav-badge-pill">
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            className={`nav-link ${currentScreen === 'cart' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('cart')}
          >
            <ShoppingBag size={16} className="nav-icon-inline" />
            Kit de Viagem
            {kit.length > 0 && (
              <span className="nav-badge-pill">
                {kit.length}
              </span>
            )}
          </button>

          <button
            className={`nav-link ${currentScreen === 'active-trip' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('active-trip')}
          >
            <Luggage size={16} className="nav-icon-inline" />
            Viagem Ativa
            {activeRentals.length > 0 && (
              <span className="nav-badge-pill-olive">
                {activeRentals.length} peças
              </span>
            )}
          </button>

          <button
            className={`nav-link ${currentScreen === 'profile' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('profile')}
          >
            <User size={16} className="nav-icon-inline" />
            Perfil
          </button>
        </nav>
      )}

      {/* Currency Switcher, Dark Mode Toggle & Viewport Mode Toggle */}
      <div className="nav-controls">
        {/* Dark / Light Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
          title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
        >
          {theme === 'dark' ? <Sun size={15} color="#F59E0B" /> : <Moon size={15} color="var(--primary-terracotta)" />}
          <span>{theme === 'dark' ? 'Claro' : 'Escuro'}</span>
        </button>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="currency-select"
        >
          {Object.keys(RATES).map((code) => (
            <option key={code} value={code}>
              {code} ({RATES[code].symbol})
            </option>
          ))}
        </select>

        <button
          onClick={() => setIsMobileFrame(!isMobileFrame)}
          className={`mode-toggle-btn viewport-toggle-btn ${isMobileFrame ? 'mobile' : 'web'}`}
        >
          {isMobileFrame ? <Monitor size={14} /> : <Smartphone size={14} />}
          {isMobileFrame ? 'Ver em Web Browser' : 'Ver em App Mobile'}
        </button>
      </div>
    </header>
  );
};
