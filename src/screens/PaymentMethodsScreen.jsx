import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, Plus, Trash2, Star, CreditCard, Smartphone } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { usePayment, detectCardBrand, validatePaymentMethod } from '../context/PaymentContext';
import { useToast } from '../components/ToastNotification';

export const PaymentMethodsScreen = () => {
  const { setCurrentScreen } = useApp();
  const {
    paymentMethods,
    selectedMethodId,
    setSelectedMethodId,
    addPaymentMethod,
    removePaymentMethod,
    setDefaultPaymentMethod
  } = usePayment();
  const { showToast } = useToast();

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newType, setNewType] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    holderName: '',
    expiry: '',
    cvv: '',
    phone: '',
    email: '',
    isDefault: false
  });
  const [errors, setErrors] = useState({});

  const currentBrand = newType === 'card' ? detectCardBrand(formData.cardNumber) : newType;

  const handleInputChange = (field, value) => {
    let formattedVal = value;
    if (field === 'cardNumber') {
      const digits = value.replace(/\D/g, '').slice(0, 19);
      formattedVal = digits.replace(/(.{4})/g, '$1 ').trim();
    } else if (field === 'expiry') {
      const digits = value.replace(/\D/g, '').slice(0, 4);
      formattedVal = digits.length >= 3 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
    } else if (field === 'cvv') {
      formattedVal = value.replace(/\D/g, '').slice(0, 4);
    } else if (field === 'phone') {
      formattedVal = value.replace(/\D/g, '').slice(0, 9);
    }

    setFormData((prev) => ({ ...prev, [field]: formattedVal }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const validation = validatePaymentMethod(newType, formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      showToast('Por favor, corrige os erros no formulário.');
      return;
    }

    const created = addPaymentMethod({ type: newType, ...formData });
    showToast(`Método de Pagamento (${created.label}) guardado com sucesso!`);

    setFormData({
      cardNumber: '',
      holderName: '',
      expiry: '',
      cvv: '',
      phone: '',
      email: '',
      isDefault: false
    });
    setErrors({});
    setIsAddingNew(false);
  };

  const renderBrandBadgeIcon = (brand) => {
    switch (brand) {
      case 'visa':
        return <span style={{ fontWeight: 900, color: '#1A1F71', fontStyle: 'italic', fontSize: '15px' }}>VISA</span>;
      case 'mastercard':
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EB001B', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F79E1B', display: 'inline-block', marginLeft: '-5px' }} />
          </div>
        );
      case 'amex':
        return <span style={{ fontWeight: 800, color: '#006FCF', fontSize: '12px' }}>AMEX</span>;
      case 'mbway':
        return <span style={{ fontWeight: 800, color: '#E30613', fontSize: '13px' }}>MB WAY</span>;
      case 'paypal':
        return <span style={{ fontWeight: 800, color: '#003087', fontStyle: 'italic', fontSize: '13px' }}>PayPal</span>;
      case 'applepay':
        return <span style={{ fontWeight: 700, fontSize: '12px' }}>Pay</span>;
      default:
        return <CreditCard size={18} color="var(--primary-terracotta)" />;
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Header with Back Button */}
      <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={() => setCurrentScreen('profile')}
          className="btn-secondary"
          style={{ padding: '8px 14px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <ArrowLeft size={16} /> Voltar ao Perfil
        </button>

        <div>
          <span className="slogan-tag">Bagless Security & Vault</span>
          <h1 className="heading-xl" style={{ fontSize: '24px', margin: 0 }}>
            Métodos de Pagamento Guardados
          </h1>
        </div>
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '28px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 className="heading-md" style={{ fontSize: '18px', margin: 0 }}>
              As tuas Carteiras e Cartões ({paymentMethods.length})
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
              Seleciona o teu método predefinido para pagamentos e cauções automáticas nas tuas viagens.
            </p>
          </div>

          {!isAddingNew && (
            <button
              className="btn-primary"
              onClick={() => setIsAddingNew(true)}
              style={{ fontSize: '13px', padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Plus size={16} /> Adicionar Método
            </button>
          )}
        </div>

        {/* Methods List */}
        {!isAddingNew && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            {paymentMethods.map((method) => {
              const isSelected = method.id === selectedMethodId;
              return (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethodId(method.id)}
                  style={{
                    background: isSelected ? 'var(--primary-terracotta-light)' : 'var(--bg-subtle)',
                    border: isSelected ? '2px solid var(--primary-terracotta)' : '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ width: '48px', height: '34px', background: '#FFFFFF', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: 'var(--shadow-xs)' }}>
                    {renderBrandBadgeIcon(method.brand)}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontWeight: 700, fontSize: '15px' }}>{method.label}</span>
                      {method.isDefault && (
                        <span style={{ background: 'var(--accent-olive-light)', color: 'var(--accent-olive)', fontSize: '11px', fontWeight: 800, padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
                          Predefinido
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                      {method.maskedDetail} {method.holderName && `• ${method.holderName}`} {method.expiry && `• Expirar ${method.expiry}`}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {!method.isDefault && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDefaultPaymentMethod(method.id);
                          showToast(`Método ${method.label} definido como predefinido.`);
                        }}
                        className="btn-secondary"
                        style={{ fontSize: '12px', padding: '6px 12px' }}
                      >
                        <Star size={13} /> Predefinir
                      </button>
                    )}

                    {paymentMethods.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removePaymentMethod(method.id);
                          showToast(`Método ${method.label} removido.`);
                        }}
                        style={{ color: '#D9534F', background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
                        title="Remover método"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Inline Add Form */}
        {isAddingNew && (
          <form onSubmit={handleAddSubmit} style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '24px', marginBottom: '24px' }}>
            <h3 className="heading-md" style={{ fontSize: '16px', marginBottom: '16px' }}>
              Adicionar Novo Método de Pagamento (Simulado)
            </h3>

            {/* Type Selector Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }}>
              <button
                type="button"
                onClick={() => { setNewType('card'); setErrors({}); }}
                style={{
                  padding: '12px 8px',
                  borderRadius: 'var(--radius-sm)',
                  border: newType === 'card' ? '2px solid var(--primary-terracotta)' : '1px solid var(--border-medium)',
                  background: newType === 'card' ? 'var(--primary-terracotta-light)' : 'var(--bg-surface)',
                  fontWeight: 700,
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <CreditCard size={20} color="var(--primary-terracotta)" /> Cartão
              </button>

              <button
                type="button"
                onClick={() => { setNewType('mbway'); setErrors({}); }}
                style={{
                  padding: '12px 8px',
                  borderRadius: 'var(--radius-sm)',
                  border: newType === 'mbway' ? '2px solid #E30613' : '1px solid var(--border-medium)',
                  background: newType === 'mbway' ? '#FDE8E9' : 'var(--bg-surface)',
                  fontWeight: 700,
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Smartphone size={20} color="#E30613" /> MB WAY
              </button>

              <button
                type="button"
                onClick={() => { setNewType('paypal'); setErrors({}); }}
                style={{
                  padding: '12px 8px',
                  borderRadius: 'var(--radius-sm)',
                  border: newType === 'paypal' ? '2px solid #003087' : '1px solid var(--border-medium)',
                  background: newType === 'paypal' ? '#E6EEF9' : 'var(--bg-surface)',
                  fontWeight: 700,
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ fontWeight: 800, color: '#003087', fontSize: '14px' }}>PP</span> PayPal
              </button>

              <button
                type="button"
                onClick={() => { setNewType('applepay'); setErrors({}); }}
                style={{
                  padding: '12px 8px',
                  borderRadius: 'var(--radius-sm)',
                  border: newType === 'applepay' ? '2px solid var(--text-main)' : '1px solid var(--border-medium)',
                  background: newType === 'applepay' ? 'var(--bg-surface)' : 'var(--bg-surface)',
                  fontWeight: 700,
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '14px' }}>Pay</span> Express
              </button>
            </div>

            {/* Credit Card Inputs */}
            {newType === 'card' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    Número do Cartão de Crédito/Débito
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 4242"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px 12px 46px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.cardNumber ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                        background: 'var(--bg-surface)',
                        fontSize: '15px',
                        fontWeight: 600
                      }}
                    />
                    <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                      {renderBrandBadgeIcon(currentBrand)}
                    </div>
                  </div>
                  {errors.cardNumber && <div style={{ color: '#D9534F', fontSize: '12px', marginTop: '4px' }}>{errors.cardNumber}</div>}
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    Nome do Titular
                  </label>
                  <input
                    type="text"
                    placeholder="Nome como impresso no cartão"
                    value={formData.holderName}
                    onChange={(e) => handleInputChange('holderName', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.holderName ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                      background: 'var(--bg-surface)',
                      fontSize: '14px'
                    }}
                  />
                  {errors.holderName && <div style={{ color: '#D9534F', fontSize: '12px', marginTop: '4px' }}>{errors.holderName}</div>}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                      Validade (MM/AA)
                    </label>
                    <input
                      type="text"
                      placeholder="12/28"
                      value={formData.expiry}
                      onChange={(e) => handleInputChange('expiry', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.expiry ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                        background: 'var(--bg-surface)',
                        fontSize: '14px'
                      }}
                    />
                    {errors.expiry && <div style={{ color: '#D9534F', fontSize: '12px', marginTop: '4px' }}>{errors.expiry}</div>}
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                      Código CVV
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.cvv ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                        background: 'var(--bg-surface)',
                        fontSize: '14px'
                      }}
                    />
                    {errors.cvv && <div style={{ color: '#D9534F', fontSize: '12px', marginTop: '4px' }}>{errors.cvv}</div>}
                  </div>
                </div>
              </div>
            )}

            {/* MB WAY Inputs */}
            {newType === 'mbway' && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  Telemóvel MB WAY
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ padding: '12px 14px', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)', fontSize: '14px', fontWeight: 700 }}>
                    🇵🇹 +351
                  </span>
                  <input
                    type="text"
                    placeholder="912 345 678"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    style={{
                      flex: 1,
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.phone ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                      background: 'var(--bg-surface)',
                      fontSize: '15px',
                      fontWeight: 600
                    }}
                  />
                </div>
                {errors.phone && <div style={{ color: '#D9534F', fontSize: '12px', marginTop: '4px' }}>{errors.phone}</div>}
              </div>
            )}

            {/* PayPal Inputs */}
            {newType === 'paypal' && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  E-mail PayPal
                </label>
                <input
                  type="email"
                  placeholder="utilizador@exemplo.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: errors.email ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                    background: 'var(--bg-surface)',
                    fontSize: '14px'
                  }}
                />
                {errors.email && <div style={{ color: '#D9534F', fontSize: '12px', marginTop: '4px' }}>{errors.email}</div>}
              </div>
            )}

            {/* Checkbox Default */}
            <div style={{ margin: '16px 0' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData((prev) => ({ ...prev, isDefault: e.target.checked }))}
                  style={{ accentColor: 'var(--primary-terracotta)', width: '16px', height: '16px' }}
                />
                Definir como método predefinido
              </label>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setIsAddingNew(false)}
                style={{ padding: '10px 18px', fontSize: '13px' }}
              >
                Cancelar
              </button>
              <button type="submit" className="btn-primary" style={{ padding: '10px 24px', fontSize: '13px' }}>
                Guardar Método
              </button>
            </div>
          </form>
        )}

        <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
          <ShieldCheck size={16} color="var(--accent-olive)" />
          Os teus dados de pagamento são protegidos por encriptação SSL de 256-bits. O número completo do cartão nunca é guardado nem exposto.
        </div>
      </div>
    </div>
  );
};
