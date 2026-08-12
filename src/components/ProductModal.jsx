import React, { useState } from 'react';
import { X, Check, ShoppingBag, ShieldCheck, Ruler, Award, Star, MessageSquare, Plus, ThumbsUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SizeFitGuideModal } from './SizeFitGuideModal';
import { HygieneCertificateModal } from './HygieneCertificateModal';
import { ReviewCard } from './ReviewCard';
import { useToast } from './ToastNotification';

export const ProductModal = () => {
  const { selectedProduct, setSelectedProduct, addToKit, removeFromKit, kit, calculateTripDays, user } = useApp();
  const { showToast } = useToast();

  const [selectedSize, setSelectedSize] = useState(selectedProduct?.sizes ? selectedProduct.sizes[0] : 'M');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isHygieneOpen, setIsHygieneOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'reviews'

  // Local reviews state for dynamic additions
  const [reviewsList, setReviewsList] = useState(selectedProduct?.reviews || []);
  const [newRating, setNewRating] = useState(5);
  const [newFitRating, setNewFitRating] = useState('veste conforme o tamanho');
  const [newComment, setNewComment] = useState('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  if (!selectedProduct) return null;

  const isInKit = kit.some((item) => item.id === selectedProduct.id);
  const days = calculateTripDays();
  const totalRental = selectedProduct.rentalPricePerDay * days;

  // Fit calculations
  const totalReviews = reviewsList.length;
  const fitCounts = reviewsList.reduce(
    (acc, r) => {
      if (r.fitRating === 'veste mais pequeno') acc.small += 1;
      else if (r.fitRating === 'veste maior') acc.large += 1;
      else acc.trueToSize += 1;
      return acc;
    },
    { small: 0, trueToSize: 0, large: 0 }
  );

  const avgRating = totalReviews > 0
    ? (reviewsList.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : (selectedProduct.rating || 4.8);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      showToast('Por favor escreva um comentário antes de submeter.', 'warning');
      return;
    }

    const createdReview = {
      id: `rev-${Date.now()}`,
      author: user?.name || 'Cliente Bagless',
      date: new Date().toISOString().split('T')[0],
      rating: newRating,
      fitRating: newFitRating,
      comment: newComment.trim(),
      verifiedTrip: true
    };

    setReviewsList([createdReview, ...reviewsList]);
    setNewComment('');
    setIsSubmittingReview(false);
    showToast('Muito obrigado pela sua avaliação!', 'success');
  };

  return (
    <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
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
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '16px', borderBottom: '1px solid var(--border-light)', marginBottom: '20px', paddingBottom: '8px' }}>
          <button
            onClick={() => setActiveTab('details')}
            style={{
              fontWeight: 700,
              fontSize: '15px',
              color: activeTab === 'details' ? 'var(--primary-terracotta)' : 'var(--text-muted)',
              borderBottom: activeTab === 'details' ? '2px solid var(--primary-terracotta)' : 'none',
              paddingBottom: '6px'
            }}
          >
            Detalhes do Produto
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            style={{
              fontWeight: 700,
              fontSize: '15px',
              color: activeTab === 'reviews' ? 'var(--primary-terracotta)' : 'var(--text-muted)',
              borderBottom: activeTab === 'reviews' ? '2px solid var(--primary-terracotta)' : 'none',
              paddingBottom: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            Avaliações & Caimento Real ({totalReviews})
          </button>
        </div>

        {activeTab === 'details' ? (
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
                  <button
                    onClick={() => setActiveTab('reviews')}
                    style={{ fontSize: '11px', color: 'var(--accent-olive)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Star size={12} fill="var(--primary-terracotta)" color="var(--primary-terracotta)" /> {avgRating} ({totalReviews} avaliações)
                  </button>
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
                    if (isInKit) {
                      removeFromKit(selectedProduct.id, selectedSize);
                      showToast(`"${selectedProduct.name}" removido do Kit.`, 'info');
                    } else {
                      addToKit(selectedProduct, selectedSize);
                      showToast(`"${selectedProduct.name}" adicionado ao Kit!`, 'success');
                      setSelectedProduct(null);
                    }
                  }}
                  className="btn-primary"
                  style={{ width: '100%', backgroundColor: isInKit ? 'var(--accent-olive)' : 'var(--primary-terracotta)', cursor: 'pointer' }}
                >
                  {isInKit ? <Check size={18} /> : <ShoppingBag size={18} />}
                  {isInKit ? 'Remover do Kit de Viagem' : 'Adicionar ao Kit de Viagem'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Reviews Tab */
          <div>
            {/* Rating & Fit Breakdown Banner */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                marginBottom: '20px',
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr',
                gap: '16px',
                alignItems: 'center'
              }}
            >
              <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-light)', paddingRight: '16px' }}>
                <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>
                  {avgRating}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', margin: '6px 0' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill={star <= Math.round(Number(avgRating)) ? '#F59E0B' : 'none'}
                      color={star <= Math.round(Number(avgRating)) ? '#F59E0B' : 'var(--border-medium)'}
                    />
                  ))}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Baseado em {totalReviews} avaliações reais de viajantes
                </div>
              </div>

              {/* Fit distribution */}
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, marginBottom: '8px', color: 'var(--text-main)' }}>
                  📏 Caimento Real vs Anunciado:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', color: 'var(--text-muted)' }}>
                      <span>Veste conforme o tamanho</span>
                      <span>{totalReviews > 0 ? Math.round((fitCounts.trueToSize / totalReviews) * 100) : 100}%</span>
                    </div>
                    <div style={{ width: '100%', background: 'var(--border-light)', height: '6px', borderRadius: '3px' }}>
                      <div style={{ width: `${totalReviews > 0 ? (fitCounts.trueToSize / totalReviews) * 100 : 100}%`, background: 'var(--accent-olive)', height: '100%', borderRadius: '3px' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', color: 'var(--text-muted)' }}>
                      <span>Veste mais pequeno</span>
                      <span>{totalReviews > 0 ? Math.round((fitCounts.small / totalReviews) * 100) : 0}%</span>
                    </div>
                    <div style={{ width: '100%', background: 'var(--border-light)', height: '6px', borderRadius: '3px' }}>
                      <div style={{ width: `${totalReviews > 0 ? (fitCounts.small / totalReviews) * 100 : 0}%`, background: 'var(--primary-terracotta)', height: '100%', borderRadius: '3px' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', color: 'var(--text-muted)' }}>
                      <span>Veste maior</span>
                      <span>{totalReviews > 0 ? Math.round((fitCounts.large / totalReviews) * 100) : 0}%</span>
                    </div>
                    <div style={{ width: '100%', background: 'var(--border-light)', height: '6px', borderRadius: '3px' }}>
                      <div style={{ width: `${totalReviews > 0 ? (fitCounts.large / totalReviews) * 100 : 0}%`, background: '#3B82F6', height: '100%', borderRadius: '3px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Toggle / Open Review Form Button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)' }}>
                Comentários dos Utilizadores
              </h3>
              <button
                className="btn-secondary"
                onClick={() => setIsSubmittingReview(!isSubmittingReview)}
                style={{ fontSize: '12px', padding: '6px 14px' }}
              >
                <MessageSquare size={14} /> {isSubmittingReview ? 'Cancelar' : 'Deixar Avaliação'}
              </button>
            </div>

            {/* Form to leave a review */}
            {isSubmittingReview && (
              <form
                onSubmit={handleAddReview}
                style={{
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '12px', color: 'var(--text-main)' }}>
                  A sua experiência com {selectedProduct.name}:
                </div>

                {/* Rating selection */}
                <div className="form-group">
                  <label className="form-label">Nota Geral (1 a 5 estrelas):</label>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        style={{ padding: '4px' }}
                      >
                        <Star
                          size={24}
                          fill={star <= newRating ? '#F59E0B' : 'none'}
                          color={star <= newRating ? '#F59E0B' : 'var(--border-medium)'}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fit rating selection */}
                <div className="form-group">
                  <label className="form-label">Como serviu o tamanho?</label>
                  <select
                    className="form-select"
                    value={newFitRating}
                    onChange={(e) => setNewFitRating(e.target.value)}
                  >
                    <option value="veste conforme o tamanho">Veste conforme o tamanho (Perfeito)</option>
                    <option value="veste mais pequeno">Veste mais pequeno (Pedir tamanho acima)</option>
                    <option value="veste maior">Veste maior (Pedir tamanho abaixo)</option>
                  </select>
                </div>

                {/* Comment textarea */}
                <div className="form-group">
                  <label className="form-label">Comentário:</label>
                  <textarea
                    className="form-input"
                    rows={3}
                    placeholder="Conte como foi a sua experiência com a peça durante a viagem..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '13px' }}>
                  <ThumbsUp size={16} /> Submeter Avaliação
                </button>
              </form>
            )}

            {/* List of Reviews */}
            <div style={{ maxHeight: '360px', overflowY: 'auto' }}>
              {reviewsList.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
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

export default ProductModal;

