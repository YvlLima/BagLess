import React from 'react';
import { Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BRANDS } from '../mockData/brands';

export const BrandsScreen = () => {
  const { setCurrentScreen } = useApp();

  const getTierBadge = (tier) => {
    switch (tier) {
      case 'eco':
        return <span className="badge-tier tier-eco">Económico</span>;
      case 'mid':
        return <span className="badge-tier tier-mid">Médio</span>;
      case 'luxury':
        return <span className="badge-tier tier-lux">Luxo</span>;
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: '950px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <span className="slogan-tag">Bagless Official Partner Directory</span>
        <h1 className="heading-xl">Diretório Oficial de Marcas Parceiras</h1>
        <p className="subheading">
          Mais de 25 marcas de renome internacional com procedência original garantida via redes de parceiros oficiais.
        </p>
      </div>

      {/* Brand Grid */}
      {BRANDS.length === 0 ? (
        <div style={{ background: 'var(--bg-surface)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '48px 24px', textAlign: 'center', color: 'var(--text-muted)' }}>
          <h3 className="heading-md" style={{ marginBottom: '8px', color: 'var(--text-main)' }}>Nenhuma marca parceira disponível</h3>
          <p style={{ fontSize: '13px' }}>De momento, não existem marcas registadas no catálogo.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'var(--transition-fast)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  {getTierBadge(brand.tier)}
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Globe size={13} /> {brand.origin}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                  {brand.name}
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {brand.description}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={13} color="var(--accent-olive)" /> Feed Autêntico
                </div>

                <button
                  className="btn-secondary"
                  style={{ fontSize: '12px', padding: '6px 12px' }}
                  onClick={() => setCurrentScreen('catalog')}
                >
                  Ver Catálogo <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
