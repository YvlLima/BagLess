import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Ruler, Award, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SizeFitGuideModal } from './SizeFitGuideModal';
import { HygieneCertificateModal } from './HygieneCertificateModal';

export const ProductModal = () => {
  const { selectedProduct, setSelectedProduct, addToKit, kit, calculateTripDays } = useApp();
  const [selectedSize, setSelectedSize] = useState(selectedProduct?.sizes ? selectedProduct.sizes[0] : 'M');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isHygieneOpen, setIsHygieneOpen] = useState(false);

  if (!selectedProduct) return null;

  const isInKit = kit.some((item) => item.id === selectedProduct.id);
  const days = calculateTripDays();
  const totalRental = selectedProduct.rentalPricePerDay * days;

  return (
    <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        {/* Close Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-subtle)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Product Image */}
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--bg-subtle)' }}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
          </div>

          {/* Product Details */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className={`badge-tier tier-${selectedProduct.tier}`}>
                  Marca {selectedProduct.tier === 'eco' ? 'Económica' : selectedProduct.tier === 'mid' ? 'Médio' : 'Luxo'}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--accent-olive)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={12} fill="var(--primary-terracotta)" color="var(--primary-terracotta)" /> 4.9 (48 avaliações)
                </span>
              </div>

              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                {selectedProduct.brandName}
              </div>

              <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '4px 0 6px 0' }}>
                {selectedProduct.name}
              </h2>

              {/* Legal Merchant Attribution Badge */}
              <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-light)', padding: '6px 10px', borderRadius: 'var(--radius-sm)', fontSize: '11px', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                <ShieldCheck size={14} color="var(--accent-olive)" />
                <span>Original via {selectedProduct.merchantAttribution || 'Zalando & ASOS Partner Network'}</span>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                {selectedProduct.description}
              </p>

              {/* Size Selector & Fit Guide Button */}
              {selectedProduct.sizes && (
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700 }}>Selecione o Tamanho:</div>
                    <button
                      onClick={() => setIsSizeGuideOpen(true)}
                      style={{ fontSize: '11px', color: 'var(--primary-terracotta)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <Ruler size={13} /> Guia de Tamanhos AI
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {selectedProduct.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        style={{
                          padding: '6px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: selectedSize === sz ? '2px solid var(--primary-terracotta)' : '1px solid var(--border-medium)',
                          background: selectedSize === sz ? 'var(--primary-terracotta-light)' : 'var(--bg-surface)',
                          fontWeight: selectedSize === sz ? 700 : 500,
                          fontSize: '13px',
                          color: selectedSize === sz ? 'var(--primary-terracotta)' : 'var(--text-main)'
                        }}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Guarantees with Hygiene Modal Button */}
              <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '12px', fontSize: '12px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Award size={14} color="var(--accent-olive)" />
                    <span>Padrão Hospitalar Certificado</span>
                  </div>
                  <button onClick={() => setIsHygieneOpen(true)} style={{ fontSize: '11px', color: 'var(--primary-terracotta)', fontWeight: 700, textDecoration: 'underline' }}>
                    Ver Processo UV-C
                  </button>
                </div>
              </div>
            </div>

            {/* Price & Add CTA */}
            <div style={{ marginTop: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary-terracotta)' }}>
                    {selectedProduct.rentalPricePerDay}€ <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)' }}>/ dia</span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>
                    Total {days} dias: <strong>{totalRental}€</strong>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>Preço de Compra:</span>
                  <span style={{ fontSize: '14px', fontWeight: 700 }}>{selectedProduct.fullPurchasePrice}€</span>
                </div>
              </div>

              <button
                onClick={() => {
                  addToKit(selectedProduct, selectedSize);
                  setSelectedProduct(null);
                }}
                className="btn-primary"
                style={{ width: '100%', backgroundColor: isInKit ? 'var(--accent-olive)' : 'var(--primary-terracotta)' }}
              >
                {isInKit ? <Check size={18} /> : <ShoppingBag size={18} />}
                {isInKit ? 'No teu Kit de Viagem' : 'Adicionar ao Kit de Viagem'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Size Guide Modal */}
      <SizeFitGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        onSelectSize={(size) => setSelectedSize(size)}
        currentCategory={selectedProduct.category}
      />

      {/* Hygiene Certificate Modal */}
      <HygieneCertificateModal
        isOpen={isHygieneOpen}
        onClose={() => setIsHygieneOpen(false)}
      />
    </div>
  );
};
