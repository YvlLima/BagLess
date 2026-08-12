import React from 'react';
import { Heart, Plus, Trash2, ShoppingBag, ArrowRight, Check, Compass } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useApp } from '../context/AppContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from '../components/ToastNotification';

export const WishlistScreen = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { kit, addToKit, setCurrentScreen, setSelectedProduct } = useApp();
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
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--primary-terracotta-light)',
            color: 'var(--primary-terracotta)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}
        >
          <Heart size={36} />
        </div>

        <h2 className="heading-lg" style={{ marginBottom: '8px' }}>
          A sua Lista de Favoritos está vazia
        </h2>
        <p className="subheading" style={{ maxWidth: '440px', margin: '0 auto 24px auto' }}>
          Guarde as peças de vestuário e acessórios que mais gosta para incluir rapidamente no seu kit de viagem em qualquer momento.
        </p>

        <button className="btn-primary" onClick={() => setCurrentScreen('catalog')}>
          <Compass size={18} /> Explorar Catálogo
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Header Banner */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Heart size={24} color="var(--primary-terracotta)" fill="var(--primary-terracotta)" />
            <h1 className="heading-xl">Guardados & Favoritos</h1>
          </div>
          <p className="subheading" style={{ marginTop: '4px' }}>
            {wishlist.length} {wishlist.length === 1 ? 'peça guardada' : 'peças guardadas'} na sua lista pessoal
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button className="btn-secondary" onClick={clearWishlist} style={{ fontSize: '13px' }}>
            <Trash2 size={14} /> Limpar Lista
          </button>

          <button className="btn-primary" onClick={handleAddAllToKit} style={{ fontSize: '13px' }}>
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
                className="product-img-wrapper"
                onClick={() => setSelectedProduct(product)}
                style={{ cursor: 'pointer' }}
              >
                <img src={product.image} alt={product.name} className="product-img" loading="lazy" />

                {/* Remove from wishlist button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(product.id);
                    showToast('Peça removida dos favoritos.', 'info');
                  }}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-terracotta)'
                  }}
                  title="Remover dos favoritos"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Card Details */}
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    {product.brandName}
                  </div>
                  <h3
                    onClick={() => setSelectedProduct(product)}
                    style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)', margin: '4px 0 8px 0', cursor: 'pointer', lineHeight: 1.3 }}
                  >
                    {product.name}
                  </h3>
                </div>

                {/* Pricing & Add to Kit CTA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '12px', marginTop: 'auto' }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-terracotta)' }}>
                      {formatPrice(product.rentalPricePerDay)} <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-muted)' }}>/ dia</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      addToKit(product, product.sizes ? product.sizes[0] : 'M');
                      showToast(`${product.name} adicionado ao Kit!`, 'success');
                    }}
                    className="btn-primary"
                    style={{
                      padding: '8px 14px',
                      fontSize: '13px',
                      backgroundColor: isInKit ? 'var(--accent-olive)' : 'var(--primary-terracotta)'
                    }}
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
