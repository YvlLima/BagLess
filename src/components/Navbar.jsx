import React from 'react';
import { ShoppingBag, Luggage, User, Compass, Smartphone, Monitor, Award } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useCurrency } from '../context/CurrencyContext';
import { BrandLogo } from './BrandLogo';

export const Navbar = () => {
  const { currentScreen, setCurrentScreen, kit, activeRentals, isMobileFrame, setIsMobileFrame } = useApp();
  const { currency, setCurrency, RATES } = useCurrency();

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
            <Compass size={16} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
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
            <Award size={16} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
            Marcas
          </button>

          <button
            className={`nav-link ${currentScreen === 'cart' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('cart')}
            style={{ position: 'relative' }}
          >
            <ShoppingBag size={16} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
            Kit de Viagem
            {kit.length > 0 && (
              <span
                style={{
                  background: 'var(--primary-terracotta)',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '2px 7px',
                  borderRadius: '10px',
                  marginLeft: '6px'
                }}
              >
                {kit.length}
              </span>
            )}
          </button>

          <button
            className={`nav-link ${currentScreen === 'active-trip' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('active-trip')}
          >
            <Luggage size={16} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
            Viagem Ativa
            {activeRentals.length > 0 && (
              <span
                style={{
                  background: 'var(--accent-olive)',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '2px 6px',
                  borderRadius: '10px',
                  marginLeft: '6px'
                }}
              >
                {activeRentals.length} peças
              </span>
            )}
          </button>

          <button
            className={`nav-link ${currentScreen === 'profile' ? 'active' : ''}`}
            onClick={() => setCurrentScreen('profile')}
          >
            <User size={16} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
            Perfil
          </button>
        </nav>
      )}

      {/* Currency Switcher & Viewport Mode Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-full)',
            padding: '6px 12px',
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--text-main)',
            cursor: 'pointer'
          }}
        >
          {Object.keys(RATES).map((code) => (
            <option key={code} value={code}>
              {code} ({RATES[code].symbol})
            </option>
          ))}
        </select>

        <button
          onClick={() => setIsMobileFrame(!isMobileFrame)}
          className="mode-toggle-btn"
          style={{
            background: isMobileFrame ? 'var(--text-main)' : 'var(--bg-subtle)',
            color: isMobileFrame ? '#FFFFFF' : 'var(--text-main)',
            border: '1px solid var(--border-medium)',
            padding: '8px 14px',
            fontSize: '12px'
          }}
        >
          {isMobileFrame ? <Monitor size={14} /> : <Smartphone size={14} />}
          {isMobileFrame ? 'Ver em Web Browser' : 'Ver em App Mobile'}
        </button>
      </div>
    </header>
  );
};
