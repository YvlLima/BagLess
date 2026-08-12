import React, { useState } from 'react';
import { X, CheckCircle, Home, CreditCard, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BuyItemModal = () => {
  const { buyingProduct, setBuyingProduct, executeBuyItem, user } = useApp();
  const [shippingAddress, setShippingAddress] = useState(user.homeAddress);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!buyingProduct) return null;

  const rentalPaid = buyingProduct.rentalPricePerDay * buyingProduct.rentalDays;
  const priceDiff = Math.max(0, buyingProduct.fullPurchasePrice - rentalPaid);

  const handleConfirmPurchase = () => {
    executeBuyItem(buyingProduct, shippingAddress);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setBuyingProduct(null);
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={() => setBuyingProduct(null)}>
      <div className="modal-content max-w-lg" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={() => setBuyingProduct(null)}
          className="modal-close-btn"
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div className="modal-success-box">
            <div className="modal-success-icon-bg">
              <CheckCircle size={36} />
            </div>
            <h3 className="text-xl font-bold mb-2">Peça Comprada com Sucesso!</h3>
            <p className="text-sm text-muted">
              Esta peça é agora oficialmente tua! Não precisas de devolvê-la na mala.
            </p>
          </div>
        ) : (
          <div>
            <div className="modal-title-sparkle">
              <Sparkles size={16} /> Opção Bagless Keep & Own
            </div>

            <h2 className="text-xl font-bold mb-2">
              Comprar "{buyingProduct.name}"
            </h2>
            <p className="text-sm text-muted mb-5">
              Adoraste a peça durante a tua viagem? Paga apenas a diferença entre o valor de aluguer já pago e o preço original.
            </p>

            {/* Price breakdown card */}
            <div className="modal-breakdown-card">
              <div className="modal-breakdown-row">
                <span>Preço original de loja:</span>
                <span className="font-semibold">{buyingProduct.fullPurchasePrice}€</span>
              </div>
              <div className="modal-breakdown-row-olive">
                <span>Aluguer já pago ({buyingProduct.rentalDays} dias):</span>
                <span className="font-bold">- {rentalPaid}€</span>
              </div>
              <div className="modal-breakdown-footer">
                <span className="font-bold text-base">Valor a pagar agora:</span>
                <span className="text-2xl font-bold text-terracotta">{priceDiff}€</span>
              </div>
            </div>

            {/* Destination / Home Shipping Address */}
            <div className="form-group">
              <label className="form-label flex items-center gap-1.5">
                <Home size={16} color="var(--primary-terracotta)" /> Morada de Registo / Faturação Residencial:
              </label>
              <input
                type="text"
                className="form-input"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Insere a tua morada principal..."
              />
              <span className="text-xs text-light">
                Ficas com a peça na mala de regresso ou enviamos para a tua casa.
              </span>
            </div>

            {/* Confirm Payment CTA */}
            <button
              onClick={handleConfirmPurchase}
              className="btn-primary btn-full-width"
            >
              <CreditCard size={18} /> Confirmar Compra por {priceDiff}€
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
