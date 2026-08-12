import React, { useState } from 'react';
import { Trash2, ArrowRight, Truck, Sparkles, Shield, Info, ChevronRight } from 'lucide-react';
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
      <div className="empty-state-wrapper max-w-lg mx-auto">
        <div className="empty-state-icon-bg">
          <Sparkles size={36} />
        </div>
        <h2 className="heading-lg mb-2">O teu Kit de Viagem está Vazio</h2>
        <p className="subheading mb-6">
          Podes explorar o catálogo manualmente ou usar o assistente AI para montar automaticamente um Kit completo para {currentTrip.destination.name}.
        </p>

        <div className="flex gap-3 justify-center">
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
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <span className="slogan-tag">Resumo do Pedido & Impacto Ecológico</span>
        <h1 className="heading-xl">O teu Kit de Viagem Bagless</h1>
        <p className="subheading">
          {kit.length} peças selecionadas para {currentTrip.destination.name} ({days} dias de viagem: {currentTrip.startDate} até {currentTrip.endDate}).
        </p>
      </div>

      <div className="cart-grid-layout">
        {/* Kit Items List & Eco Card */}
        <div>
          <h3 className="heading-md mb-4">Peças Incluídas</h3>

          <div className="flex-col gap-4 mb-6">
            {kit.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="cart-item-card"
              >
                <div className="cart-item-thumb">
                  <ProductImagePlaceholder name={item.name} brandName={item.brandName} style={{ padding: '6px' }} />
                </div>

                <div className="flex-1">
                  <span className={`badge-tier tier-${item.tier} text-xs py-0.5 px-2 mb-1 inline-block`}>
                    {item.brandName}
                  </span>
                  <h4 className="text-base font-bold">{item.name}</h4>
                  <div className="text-xs text-muted mt-0.5">
                    Tamanho: <strong>{item.selectedSize}</strong> • {formatPrice(item.rentalPricePerDay)} / dia
                  </div>
                  <div className="text-xs text-light mt-1">
                    Preço de Compra pós-viagem: {formatPrice(item.fullPurchasePrice)}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-base font-extrabold text-terracotta">
                    {formatPrice(item.rentalPricePerDay * days)}
                  </div>
                  <button
                    onClick={() => {
                      removeFromKit(item.id, item.selectedSize);
                      showToast('Peça removida do kit.');
                    }}
                    className="text-xs mt-2 inline-flex items-center gap-1 text-red-600"
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
          <div className="bg-surface border border-light rounded-md p-5 mt-5">
            <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
              <Truck size={16} color="var(--primary-terracotta)" /> Morada de Entrega no Destino
            </h4>
            <p className="text-xs text-muted">
              {currentTrip.deliveryAddress}
            </p>
          </div>
        </div>

        {/* Cost Summary & Checkout */}
        <div>
          <div className="cart-summary-sticky">
            <h3 className="heading-md mb-4">Resumo de Custos</h3>

            {/* Bagless Care Damage Protection Toggle */}
            <div className="care-protection-box">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasCareProtection}
                  onChange={(e) => setHasCareProtection(e.target.checked)}
                  className="mt-0.5"
                />
                <div className="text-xs">
                  <strong className="text-terracotta flex items-center gap-1">
                    <Shield size={14} /> Proteção Total Bagless Care (+{formatPrice(careProtectionPerDay)}/dia)
                  </strong>
                  <div className="text-muted mt-0.5">
                    1,2%/dia do valor total a retalho ({formatPrice(totalRetail)}). Cobre nódoas acidentais, rasgões ou fechos sem franquia.
                  </div>
                </div>
              </label>
            </div>

            <div className="flex-col gap-3 text-sm mb-5">
              <div className="flex justify-between">
                <span className="text-muted">Aluguer ({days} dias, {kit.length} peças):</span>
                <span className="font-semibold">{formatPrice(subtotalRental)}</span>
              </div>
              {hasCareProtection && (
                <div className="flex justify-between">
                  <span className="text-muted">Proteção Bagless Care ({days}d):</span>
                  <span className="font-semibold">{formatPrice(careProtectionFee)}</span>
                </div>
              )}
              <div>
                <div className="flex justify-between">
                  <span className="text-muted flex items-center gap-1">
                    Caução Reembolsável <Info size={13} color="var(--primary-terracotta)" title="Caução calculada com base no valor total de compra das peças no kit (8% com mínimo de €30 e teto máximo de €1500)." />
                  </span>
                  <span className="font-semibold">{formatPrice(deposit)}</span>
                </div>
                <div className="text-xs text-light mt-0.5 text-right">
                  Calculada com base no valor das peças ({formatPrice(totalRetail)} retail)
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Entrega e Recolha no Hotel:</span>
                <span className="font-semibold text-olive">GRÁTIS (Promo)</span>
              </div>

              <div className="border-t border-dashed border-medium pt-3 flex justify-between items-baseline">
                <span className="font-extrabold text-base">Total do Checkout:</span>
                <span className="text-2xl font-extrabold text-terracotta">{formatPrice(total)}</span>
              </div>
            </div>

            {/* Dynamic Payment Method Selector Card */}
            <div
              onClick={() => setIsPaymentModalOpen(true)}
              className="payment-selector-card"
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-muted">
                  Método de Pagamento
                </span>
                <span className="text-xs text-terracotta font-bold">
                  Alterar / Adicionar
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="payment-brand-badge">
                  {selectedPayment?.brand === 'visa' ? 'VISA' : selectedPayment?.brand === 'mastercard' ? 'MC' : selectedPayment?.brand === 'mbway' ? 'MB' : selectedPayment?.brand === 'paypal' ? 'PP' : '💳'}
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold flex items-center gap-1.5">
                    {selectedPayment ? selectedPayment.label : 'Cartão de Crédito'}
                    {selectedPayment?.isDefault && (
                      <span className="text-xs bg-olive-light text-olive py-0.5 px-1.5 rounded-full">Predefinido</span>
                    )}
                  </div>
                  <div className="text-xs text-muted">
                    {selectedPayment ? selectedPayment.maskedDetail : '•••• 4242'}
                  </div>
                </div>
                <ChevronRight size={16} color="var(--text-light)" />
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="btn-primary btn-full-width text-base"
            >
              {isProcessing ? 'A processar reservas...' : 'Confirmar e Pagar ' + formatPrice(total)}
              {!isProcessing && <ArrowRight size={18} />}
            </button>

            <div className="text-xs text-light text-center mt-3">
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
