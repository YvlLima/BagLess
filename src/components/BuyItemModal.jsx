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
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        {/* Close button */}
        <button
          onClick={() => setBuyingProduct(null)}
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

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '32px 16px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--accent-olive-light)', color: 'var(--accent-olive)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Peça Comprada com Sucesso!</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              Esta peça é agora oficialmente tua! Não precisas de devolvê-la na mala.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-terracotta)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>
              <Sparkles size={16} /> Opção Bagless Keep & Own
            </div>

            <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
              Comprar "{buyingProduct.name}"
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Adoraste a peça durante a tua viagem? Paga apenas a diferença entre o valor de aluguer já pago e o preço original.
            </p>

            {/* Price breakdown card */}
            <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                <span>Preço original de loja:</span>
                <span style={{ fontWeight: 600 }}>{buyingProduct.fullPurchasePrice}€</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--accent-olive)', marginBottom: '12px' }}>
                <span>Aluguer já pago ({buyingProduct.rentalDays} dias):</span>
                <span style={{ fontWeight: 700 }}>- {rentalPaid}€</span>
              </div>
              <div style={{ borderTop: '1px dashed var(--border-medium)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 800, fontSize: '15px' }}>Valor a pagar agora:</span>
                <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-terracotta)' }}>{priceDiff}€</span>
              </div>
            </div>

            {/* Destination / Home Shipping Address */}
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Home size={16} color="var(--primary-terracotta)" /> Morada de Registo / Faturação Residencial:
              </label>
              <input
                type="text"
                className="form-input"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Insere a tua morada principal..."
              />
              <span style={{ fontSize: '11px', color: 'var(--text-light)' }}>
                Ficas com a peça na mala de regresso ou enviamos para a tua casa.
              </span>
            </div>

            {/* Confirm Payment CTA */}
            <button
              onClick={handleConfirmPurchase}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', marginTop: '12px' }}
            >
              <CreditCard size={18} /> Confirmar Compra por {priceDiff}€
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
