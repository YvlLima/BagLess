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
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <span className="slogan-tag">Bagless Official Partner Directory</span>
        <h1 className="heading-xl">Diretório Oficial de Marcas Parceiras</h1>
        <p className="subheading">
          Mais de 25 marcas de renome internacional com procedência original garantida via redes de parceiros oficiais.
        </p>
      </div>

      {/* Brand Grid */}
      {BRANDS.length === 0 ? (
        <div className="empty-state-wrapper bg-surface border border-dashed rounded-md p-12 text-muted">
          <h3 className="heading-md mb-2 text-main">Nenhuma marca parceira disponível</h3>
          <p className="text-xs">De momento, não existem marcas registadas no catálogo.</p>
        </div>
      ) : (
        <div className="brand-card-grid">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="brand-card"
            >
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  {getTierBadge(brand.tier)}
                  <span className="text-xs text-muted font-semibold flex items-center gap-1">
                    <Globe size={13} /> {brand.origin}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-main mb-1.5">
                  {brand.name}
                </h3>

                <p className="text-xs text-muted leading-relaxed mb-4">
                  {brand.description}
                </p>
              </div>

              <div className="border-t border-light pt-3 flex justify-between items-center">
                <div className="text-xs text-light flex items-center gap-1">
                  <ShieldCheck size={13} color="var(--accent-olive)" /> Feed Autêntico
                </div>

                <button
                  className="btn-secondary text-xs py-1.5 px-3"
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
