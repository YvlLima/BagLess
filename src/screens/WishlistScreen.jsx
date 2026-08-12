import React from 'react';
import { Heart, Plus, Trash2, ShoppingBag, Check, Compass } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useApp } from '../context/AppContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from '../components/ToastNotification';
import { ProductImagePlaceholder } from '../components/ProductImagePlaceholder';

export const WishlistScreen = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { kit, addToKit, removeFromKit, setCurrentScreen, setSelectedProduct } = useApp();
  const { formatPrice } = useCurrency();
  const { showToast } = useToast();

  const handleAddAllToKit = () => {
    if (wishlist.length === 0) return;
    wishlist.forEach((item) => {
      addToKit(item, item.sizes ? item.sizes[0] : 'M');
    });
    showToast(`${wishlist.length} peça(s) adicionada(s) ao Kit de Viagem!`, 'success');
  };

  if (wishlist.length === 0) {
    return (
      <div className="empty-state-wrapper">
        <div className="empty-state-icon-bg">
          <Heart size={36} />
        </div>

        <h2 className="heading-lg empty-state-title">
          A sua Lista de Favoritos está vazia
        </h2>
        <p className="subheading empty-state-text">
          Guarde as peças de vestuário e acessórios que mais gosta para incluir rapidamente no seu kit de viagem em qualquer momento.
        </p>

        <button className="btn-primary" onClick={() => setCurrentScreen('catalog')}>
          <Compass size={18} /> Explorar Catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Header Banner */}
      <div className="page-header-row">
        <div>
          <div className="page-header-left">
            <Heart size={24} color="var(--primary-terracotta)" fill="var(--primary-terracotta)" />
            <h1 className="heading-xl">Guardados & Favoritos</h1>
          </div>
          <p className="subheading mt-1">
            {wishlist.length} {wishlist.length === 1 ? 'peça guardada' : 'peças guardadas'} na sua lista pessoal
          </p>
        </div>

        <div className="page-header-actions">
          <button className="btn-secondary btn-small-text" onClick={clearWishlist}>
            <Trash2 size={14} /> Limpar Lista
          </button>

          <button className="btn-primary btn-small-text" onClick={handleAddAllToKit}>
            <ShoppingBag size={16} /> Adicionar Todos ao Kit
          </button>
        </div>
      </div>

      {/* Grid of Wishlist Items */}
      <div className="grid-catalog">
        {wishlist.map((product) => {
          const isInKit = kit.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="card-product">
              {/* Product Image */}
              <div
                className="product-img-wrapper product-img-clickable"
                onClick={() => setSelectedProduct(product)}
              >
                <ProductImagePlaceholder name={product.name} brandName={product.brandName} />

                {/* Remove from wishlist button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(product.id);
                    showToast('Peça removida dos favoritos.', 'info');
                  }}
                  className="product-card-remove-btn"
                  title="Remover dos favoritos"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Card Details */}
              <div className="product-card-body">
                <div>
                  <div className="product-card-brand-label">
                    {product.brandName}
                  </div>
                  <h3
                    onClick={() => setSelectedProduct(product)}
                    className="product-card-name"
                  >
                    {product.name}
                  </h3>
                </div>

                {/* Pricing & Add to Kit CTA */}
                <div className="product-card-footer-row">
                  <div>
                    <div className="product-card-price-primary">
                      {formatPrice(product.rentalPricePerDay)} <span className="product-card-price-unit">/ dia</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const defaultSize = product.sizes ? product.sizes[0] : 'M';
                      if (isInKit) {
                        removeFromKit(product.id, defaultSize);
                        showToast(`"${product.name}" removido do Kit.`, 'info');
                      } else {
                        addToKit(product, defaultSize);
                        showToast(`"${product.name}" adicionado ao Kit!`, 'success');
                      }
                    }}
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
        })}
      </div>
    </div>
  );
};

export default WishlistScreen;
