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
      <div className="product-img-wrapper product-img-clickable" onClick={() => setSelectedProduct(product)}>
        <ProductImagePlaceholder name={product.name} brandName={product.brandName} />

        {/* Brand Tier Badge */}
        <div className="product-card-badges">
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
          className="product-card-fav-btn"
          style={{ color: isFavorite ? '#C85A32' : 'var(--text-muted)' }}
        >
          <Heart size={16} fill={isFavorite ? '#C85A32' : 'none'} />
        </button>
      </div>

      {/* Card Info */}
      <div className="product-card-body">
        <div>
          <div className="product-card-header-row">
            <div className="product-card-brand-label">
              {product.brandName}
            </div>
            <span className="product-card-stock-label">
              ● Em Stock
            </span>
          </div>

          <h3
            onClick={() => setSelectedProduct(product)}
            className="product-card-name"
          >
            {product.name}
          </h3>

          {/* Legal Partner Feed Attribution */}
          <div className="product-card-attribution">
            <ShieldCheck size={12} color="var(--accent-olive)" />
            <span>{product.merchantAttribution || 'Zalando & ASOS Partner Feed'}</span>
          </div>
        </div>

        {/* Pricing & Rent CTA */}
        <div className="product-card-footer-row">
          <div>
            <div className="product-card-price-primary">
              {formatPrice(product.rentalPricePerDay)} <span className="product-card-price-unit">/ dia</span>
            </div>
            <div className="product-card-price-buy">
              Compra: {formatPrice(product.fullPurchasePrice)}
            </div>
          </div>

          <button
            onClick={handleToggleKit}
            className={`btn-primary product-card-btn ${isInKit ? 'btn-in-kit' : 'btn-add-kit'}`}
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
