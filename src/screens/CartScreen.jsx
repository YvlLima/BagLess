import React, { useState } from 'react';
import { Trash2, ArrowRight, Truck, CreditCard, Sparkles, Shield, Info, ChevronRight, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useCurrency } from '../context/CurrencyContext';
import { usePayment } from '../context/PaymentContext';
import { OrderReceiptModal, EcoImpactCard, useToast, ProductImagePlaceholder, PaymentMethodsModal } from '../components';
import { calculateDeposit, calculateInsurancePerDay, calculateTotalRetailValue } from '../utils/pricing';

export const CartScreen = () => {
  const { kit, removeFromKit, currentTrip, calculateTripDays, confirmTripCheckout, setCurrentScreen, autoCurateKitForDestination } = useApp();
  const { formatPrice } = useCurrency();
  const { showToast } = useToast();
  const { getSelectedMethod } = usePayment();

  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [hasCareProtection, setHasCareProtection] = useState(true);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const selectedPayment = getSelectedMethod();

  const days = calculateTripDays();
  const subtotalRental = kit.reduce((acc, item) => acc + item.rentalPricePerDay * days, 0);
  const totalRetail = calculateTotalRetailValue(kit);
  const deposit = calculateDeposit(kit);
  const careProtectionPerDay = calculateInsurancePerDay(kit);
  const careProtectionFee = hasCareProtection ? careProtectionPerDay * days : 0;
  const deliveryFee = 0; // Free hotel delivery promo
  const total = subtotalRental + deposit + careProtectionFee + deliveryFee;

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const newOrder = {
        id: `BGL-${Math.floor(10000 + Math.random() * 90000)}`,
        total,
        paymentMethod: selectedPayment ? `${selectedPayment.label} (${selectedPayment.maskedDetail})` : 'Cartão de Crédito',
        date: new Date().toISOString().split('T')[0]
      };
      setCompletedOrder(newOrder);
      showToast(`Pagamento de ${formatPrice(total)} confirmado via ${selectedPayment?.label || 'Cartão'}!`);
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
                <div style={{ width: '80px', height: '90px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                  <ProductImagePlaceholder name={item.name} brandName={item.brandName} style={{ padding: '6px' }} />
                </div>

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
                    <Shield size={14} /> Proteção Total Bagless Care (+{formatPrice(careProtectionPerDay)}/dia)
                  </strong>
                  <div style={{ color: 'var(--text-muted)', marginTop: '2px' }}>
                    1,2%/dia do valor total a retalho ({formatPrice(totalRetail)}). Cobre nódoas acidentais, rasgões ou fechos sem franquia.
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
                  <span style={{ color: 'var(--text-muted)' }}>Proteção Bagless Care ({days}d):</span>
                  <span style={{ fontWeight: 600 }}>{formatPrice(careProtectionFee)}</span>
                </div>
              )}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Caução Reembolsável <Info size={13} color="var(--primary-terracotta)" title="Caução calculada com base no valor total de compra das peças no kit (8% com mínimo de €30 e teto máximo de €1500)." />
                  </span>
                  <span style={{ fontWeight: 600 }}>{formatPrice(deposit)}</span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px', textAlign: 'right' }}>
                  Calculada com base no valor das peças ({formatPrice(totalRetail)} retail)
                </div>
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

            {/* Dynamic Payment Method Selector Card */}
            <div
              onClick={() => setIsPaymentModalOpen(true)}
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '14px',
                marginBottom: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                  Método de Pagamento
                </span>
                <span style={{ fontSize: '12px', color: 'var(--primary-terracotta)', fontWeight: 700 }}>
                  Alterar / Adicionar
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '22px', background: '#FFFFFF', borderRadius: '4px', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, color: 'var(--primary-terracotta)' }}>
                  {selectedPayment?.brand === 'visa' ? 'VISA' : selectedPayment?.brand === 'mastercard' ? 'MC' : selectedPayment?.brand === 'mbway' ? 'MB' : selectedPayment?.brand === 'paypal' ? 'PP' : '💳'}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {selectedPayment ? selectedPayment.label : 'Cartão de Crédito'}
                    {selectedPayment?.isDefault && (
                      <span style={{ fontSize: '9px', background: 'var(--accent-olive-light)', color: 'var(--accent-olive)', padding: '1px 6px', borderRadius: 'var(--radius-full)' }}>Predefinido</span>
                    )}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {selectedPayment ? selectedPayment.maskedDetail : '•••• 4242'}
                  </div>
                </div>
                <ChevronRight size={16} color="var(--text-light)" />
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

      {/* Payment Methods Modal */}
      <PaymentMethodsModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />

      {/* Order Receipt Modal */}
      <OrderReceiptModal
        isOpen={!!completedOrder}
        order={completedOrder}
        onClose={handleReceiptClose}
      />
    </div>
  );
};
