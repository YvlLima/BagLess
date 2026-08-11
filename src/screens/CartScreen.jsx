import React, { useState } from 'react';
import { Trash2, ArrowRight, Truck, CreditCard, Sparkles, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useCurrency } from '../context/CurrencyContext';
import { OrderReceiptModal, EcoImpactCard, useToast } from '../components';

export const CartScreen = () => {
  const { kit, removeFromKit, currentTrip, calculateTripDays, confirmTripCheckout, setCurrentScreen, autoCurateKitForDestination } = useApp();
  const { formatPrice } = useCurrency();
  const { showToast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [hasCareProtection, setHasCareProtection] = useState(true);

  const days = calculateTripDays();
  const subtotalRental = kit.reduce((acc, item) => acc + item.rentalPricePerDay * days, 0);
  const deposit = kit.length > 0 ? 30 : 0; // Refundable deposit
  const careProtectionFee = hasCareProtection ? 4 * days : 0;
  const deliveryFee = 0; // Free hotel delivery promo
  const total = subtotalRental + deposit + careProtectionFee + deliveryFee;

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const newOrder = {
        id: `BGL-${Math.floor(10000 + Math.random() * 90000)}`,
        total,
        date: new Date().toISOString().split('T')[0]
      };
      setCompletedOrder(newOrder);
      showToast('Pagamento confirmado com sucesso!');
    }, 1500);
  };

  const handleReceiptClose = () => {
    setCompletedOrder(null);
    confirmTripCheckout();
  };

  if (kit.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '64px 16px', maxWidth: '540px', margin: '0 auto' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--primary-terracotta-light)', color: 'var(--primary-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
          <Sparkles size={36} />
        </div>
        <h2 className="heading-lg" style={{ marginBottom: '8px' }}>O teu Kit de Viagem está Vazio</h2>
        <p className="subheading" style={{ marginBottom: '24px' }}>
          Podes explorar o catálogo manualmente ou usar o assistente AI para montar automaticamente um Kit completo para {currentTrip.destination.name}.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button className="btn-secondary" onClick={() => setCurrentScreen('catalog')}>
            Explorar Catálogo
          </button>
          <button
            className="btn-primary"
            onClick={() => {
              autoCurateKitForDestination(currentTrip.destination);
              showToast('Kit Curado por IA montado com sucesso!');
            }}
          >
            <Sparkles size={16} /> Curar Kit Automático por IA
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '950px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <span className="slogan-tag">Resumo do Pedido & Impacto Ecológico</span>
        <h1 className="heading-xl">O teu Kit de Viagem Bagless</h1>
        <p className="subheading">
          {kit.length} peças selecionadas para {currentTrip.destination.name} ({days} dias de viagem: {currentTrip.startDate} até {currentTrip.endDate}).
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '32px' }}>
        {/* Kit Items List & Eco Card */}
        <div>
          <h3 className="heading-md" style={{ marginBottom: '16px' }}>Peças Incluídas</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            {kit.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                style={{
                  display: 'flex',
                  gap: '16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  alignItems: 'center'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '80px', height: '90px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                  loading="lazy"
                />

                <div style={{ flex: 1 }}>
                  <span className={`badge-tier tier-${item.tier}`} style={{ fontSize: '10px', padding: '2px 8px', marginBottom: '4px', display: 'inline-block' }}>
                    {item.brandName}
                  </span>
                  <h4 style={{ fontSize: '15px', fontWeight: 700 }}>{item.name}</h4>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Tamanho: <strong>{item.selectedSize}</strong> • {formatPrice(item.rentalPricePerDay)} / dia
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '4px' }}>
                    Preço de Compra pós-viagem: {formatPrice(item.fullPurchasePrice)}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--primary-terracotta)' }}>
                    {formatPrice(item.rentalPricePerDay * days)}
                  </div>
                  <button
                    onClick={() => {
                      removeFromKit(item.id, item.selectedSize);
                      showToast('Peça removida do kit.');
                    }}
                    style={{ color: '#D9534F', fontSize: '12px', marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Trash2 size={14} /> Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Eco Impact Card Component */}
          <EcoImpactCard itemsCount={kit.length} days={days} />

          {/* Delivery Details */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px', marginTop: '20px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Truck size={16} color="var(--primary-terracotta)" /> Morada de Entrega no Destino
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {currentTrip.deliveryAddress}
            </p>
          </div>
        </div>

        {/* Cost Summary & Checkout */}
        <div>
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-lg)', padding: '24px', position: 'sticky', top: '90px', boxShadow: 'var(--shadow-md)' }}>
            <h3 className="heading-md" style={{ marginBottom: '16px' }}>Resumo de Custos</h3>

            {/* Bagless Care Damage Protection Toggle */}
            <div style={{ background: 'var(--primary-terracotta-light)', border: '1px solid #F6D6CB', borderRadius: 'var(--radius-md)', padding: '14px', marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={hasCareProtection}
                  onChange={(e) => setHasCareProtection(e.target.checked)}
                  style={{ accentColor: 'var(--primary-terracotta)', width: '18px', height: '18px', marginTop: '2px' }}
                />
                <div style={{ fontSize: '12px' }}>
                  <strong style={{ color: 'var(--primary-terracotta)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Shield size={14} /> Proteção Total Bagless Care (+{formatPrice(4)}/dia)
                  </strong>
                  <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>
                    Cobre nódoas acidentais, rasgões ou fechos sem franquia. Viaja sem preocupações!
                  </div>
                </div>
              </label>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Aluguer ({days} dias, {kit.length} peças):</span>
                <span style={{ fontWeight: 600 }}>{formatPrice(subtotalRental)}</span>
              </div>
              {hasCareProtection && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Proteção Bagless Care:</span>
                  <span style={{ fontWeight: 600 }}>{formatPrice(careProtectionFee)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Caução Reembolsável:</span>
                <span style={{ fontWeight: 600 }}>{formatPrice(deposit)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Entrega e Recolha no Hotel:</span>
                <span style={{ fontWeight: 600, color: 'var(--accent-olive)' }}>GRÁTIS (Promo)</span>
              </div>

              <div style={{ borderTop: '1px dashed var(--border-medium)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 800, fontSize: '16px' }}>Total do Checkout:</span>
                <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-terracotta)' }}>{formatPrice(total)}</span>
              </div>
            </div>

            {/* Payment Simulation Form */}
            <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', padding: '12px', marginBottom: '20px', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, marginBottom: '6px' }}>
                <CreditCard size={14} color="var(--primary-terracotta)" /> Stripe Express Checkout (Simulação)
              </div>
              <div style={{ color: 'var(--text-muted)' }}>
                Cartão de Crédito ••••• 4242 (Pagamento seguro)
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '15px' }}
            >
              {isProcessing ? 'A processar reservas...' : 'Confirmar e Pagar ' + formatPrice(total)}
              {!isProcessing && <ArrowRight size={18} />}
            </button>

            <div style={{ fontSize: '11px', color: 'var(--text-light)', textAlign: 'center', marginTop: '12px' }}>
              Ao confirmar, aceitas os Termos de Devolução da Bagless.
            </div>
          </div>
        </div>
      </div>

      {/* Order Receipt Modal */}
      <OrderReceiptModal
        isOpen={!!completedOrder}
        order={completedOrder}
        onClose={handleReceiptClose}
      />
    </div>
  );
};
