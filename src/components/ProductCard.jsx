import React from 'react';
import { Heart, Plus, Check, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useWishlist } from '../context/WishlistContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from './ToastNotification';
import { ProductImagePlaceholder } from './ProductImagePlaceholder';

export const ProductCard = ({ product }) => {
  const { kit, addToKit, removeFromKit, setSelectedProduct } = useApp();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { formatPrice } = useCurrency();
  const { showToast } = useToast();

  const isFavorite = isInWishlist(product.id);
  const isInKit = kit.some((item) => item.id === product.id);
  const defaultSize = product.sizes ? product.sizes[0] : 'M';

  const handleToggleKit = (e) => {
    e.stopPropagation();
    if (isInKit) {
      removeFromKit(product.id);
      showToast(`"${product.name}" removido do Kit.`, 'info');
    } else {
      addToKit(product, defaultSize);
      showToast(`"${product.name}" adicionado ao Kit!`, 'success');
    }
  };

  const getTierClass = (tier) => {
    switch (tier) {
      case 'eco':
        return 'tier-eco';
      case 'mid':
        return 'tier-mid';
      case 'luxury':
        return 'tier-lux';
      default:
        return 'tier-eco';
    }
  };

  const getTierLabel = (tier) => {
    switch (tier) {
      case 'eco':
        return 'Económico';
      case 'mid':
        return 'Médio';
      case 'luxury':
        return 'Luxo';
      default:
        return 'Económico';
    }
  };

  return (
    <div className="card-product">
      {/* Product Image */}
      <div className="product-img-wrapper" onClick={() => setSelectedProduct(product)} style={{ cursor: 'pointer' }}>
        <ProductImagePlaceholder name={product.name} brandName={product.brandName} />

        {/* Brand Tier Badge */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '4px', flexDirection: 'column' }}>
          <span className={`badge-tier ${getTierClass(product.tier)}`}>
            {getTierLabel(product.tier)}
          </span>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'var(--bg-surface)',
            backdropFilter: 'blur(4px)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isFavorite ? '#C85A32' : 'var(--text-muted)'
          }}
        >
          <Heart size={16} fill={isFavorite ? '#C85A32' : 'none'} />
        </button>
      </div>

      {/* Card Info */}
      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
              {product.brandName}
            </div>
            <span style={{ fontSize: '10px', color: 'var(--accent-olive)', fontWeight: 600 }}>
              ● Em Stock
            </span>
          </div>

          <h3
            onClick={() => setSelectedProduct(product)}
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: 'var(--text-main)',
              margin: '4px 0 6px 0',
              cursor: 'pointer',
              lineHeight: 1.3
            }}
          >
            {product.name}
          </h3>

          {/* Legal Partner Feed Attribution */}
          <div style={{ fontSize: '10px', color: 'var(--text-light)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ShieldCheck size={12} color="var(--accent-olive)" />
            <span>{product.merchantAttribution || 'Zalando & ASOS Partner Feed'}</span>
          </div>
        </div>

        {/* Pricing & Rent CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '12px', marginTop: 'auto' }}>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-terracotta)' }}>
              {formatPrice(product.rentalPricePerDay)} <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-muted)' }}>/ dia</span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>
              Compra: {formatPrice(product.fullPurchasePrice)}
            </div>
          </div>

          <button
            onClick={handleToggleKit}
            className="btn-primary"
            style={{
              padding: '8px 14px',
              fontSize: '13px',
              backgroundColor: isInKit ? 'var(--accent-olive)' : 'var(--primary-terracotta)',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
            title={isInKit ? 'Clique para remover do Kit' : 'Clique para alugar e adicionar ao Kit'}
          >
            {isInKit ? (
              <>
                <Check size={14} /> No Kit
              </>
            ) : (
              <>
                <Plus size={14} /> Alugar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
