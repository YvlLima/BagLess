import React, { useState } from 'react';
import { X, CreditCard, Smartphone, Check, Trash2, Plus, ShieldCheck, Star } from 'lucide-react';
import { usePayment, detectCardBrand, validatePaymentMethod } from '../context/PaymentContext';
import { useToast } from './ToastNotification';

export const PaymentMethodsModal = ({ isOpen, onClose, onSelect }) => {
  const {
    paymentMethods,
    selectedMethodId,
    setSelectedMethodId,
    addPaymentMethod,
    removePaymentMethod,
    setDefaultPaymentMethod
  } = usePayment();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'add'
  const [newType, setNewType] = useState('card'); // 'card' | 'mbway' | 'paypal' | 'applepay'

  // Form State
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

  if (!isOpen) return null;

  const currentBrand = newType === 'card' ? detectCardBrand(formData.cardNumber) : newType;

  const handleInputChange = (field, value) => {
    let formattedVal = value;

    if (field === 'cardNumber') {
      // Auto-format card number with spaces every 4 digits
      const digits = value.replace(/\D/g, '').slice(0, 19);
      formattedVal = digits.replace(/(.{4})/g, '$1 ').trim();
    } else if (field === 'expiry') {
      // Auto-format expiry MM/YY
      const digits = value.replace(/\D/g, '').slice(0, 4);
      if (digits.length >= 3) {
        formattedVal = `${digits.slice(0, 2)}/${digits.slice(2)}`;
      } else {
        formattedVal = digits;
      }
    } else if (field === 'cvv') {
      formattedVal = value.replace(/\D/g, '').slice(0, 4);
    } else if (field === 'phone') {
      formattedVal = value.replace(/\D/g, '').slice(0, 9);
    }

    setFormData((prev) => ({ ...prev, [field]: formattedVal }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const validation = validatePaymentMethod(newType, formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      showToast('Por favor, corrige os erros no formulário.');
      return;
    }

    const created = addPaymentMethod({
      type: newType, ...formData
    });

    showToast(`Método de Pagamento (${created.label}) adicionado com sucesso!`);

    // Reset Form
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
    setActiveTab('list');

    if (onSelect) {
      onSelect(created.id);
    }
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-subtle)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ marginBottom: '20px' }}>
          <span className="slogan-tag">Bagless Security & Payments</span>
          <h2 className="heading-lg" style={{ fontSize: '22px', margin: '4px 0' }}>
            Métodos de Pagamento
          </h2>
          <p className="subheading" style={{ fontSize: '13px' }}>
            Gere os teus cartões e carteiras digitais guardadas com encriptação segura.
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-light)', marginBottom: '20px' }}>
          <button
            onClick={() => setActiveTab('list')}
            style={{
              padding: '10px 16px',
              fontSize: '14px',
              fontWeight: 700,
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'list' ? '2px solid var(--primary-terracotta)' : '2px solid transparent',
              color: activeTab === 'list' ? 'var(--primary-terracotta)' : 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            Guardados ({paymentMethods.length})
          </button>
          <button
            onClick={() => setActiveTab('add')}
            style={{
              padding: '10px 16px',
              fontSize: '14px',
              fontWeight: 700,
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'add' ? '2px solid var(--primary-terracotta)' : '2px solid transparent',
              color: activeTab === 'add' ? 'var(--primary-terracotta)' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Plus size={16} /> Adicionar Novo Método
          </button>
        </div>

        {/* TAB 1: Saved Methods List */}
        {activeTab === 'list' && (
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', maxHeight: '360px', overflowY: 'auto', paddingRight: '4px' }}>
              {paymentMethods.map((method) => {
                const isSelected = method.id === selectedMethodId;
                return (
                  <div
                    key={method.id}
                    onClick={() => {
                      setSelectedMethodId(method.id);
                      if (onSelect) onSelect(method.id);
                    }}
                    style={{
                      background: isSelected ? 'var(--primary-terracotta-light)' : 'var(--bg-surface)',
                      border: isSelected ? '2px solid var(--primary-terracotta)' : '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ width: '42px', height: '30px', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {renderBrandBadgeIcon(method.brand)}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 700, fontSize: '14px' }}>{method.label}</span>
                        {method.isDefault && (
                          <span style={{ background: 'var(--accent-olive-light)', color: 'var(--accent-olive)', fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                            Predefinido
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {method.maskedDetail} {method.expiry && `• Expirar ${method.expiry}`}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {!method.isDefault && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDefaultPaymentMethod(method.id);
                            showToast(`Método ${method.label} definido como predefinido.`);
                          }}
                          className="btn-secondary"
                          style={{ fontSize: '11px', padding: '4px 8px' }}
                          title="Definir como predefinido"
                        >
                          <Star size={12} /> Predefinir
                        </button>
                      )}

                      {paymentMethods.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removePaymentMethod(method.id);
                            showToast(`Método ${method.label} removido.`);
                          }}
                          style={{ color: '#D9534F', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
                          title="Remover método"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}

                      {isSelected && <Check size={18} color="var(--primary-terracotta)" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={14} color="var(--accent-olive)" /> Todos os dados mascarados e encriptados com segurança.
              </div>

              <button className="btn-primary" onClick={onClose} style={{ padding: '10px 20px', fontSize: '13px' }}>
                Concluído
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: Add New Method Form */}
        {activeTab === 'add' && (
          <form onSubmit={handleAddSubmit}>
            {/* Payment Type Selector */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                Tipo de Método de Pagamento:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => { setNewType('card'); setErrors({}); }}
                  style={{
                    padding: '10px 6px',
                    borderRadius: 'var(--radius-sm)',
                    border: newType === 'card' ? '2px solid var(--primary-terracotta)' : '1px solid var(--border-medium)',
                    background: newType === 'card' ? 'var(--primary-terracotta-light)' : 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <CreditCard size={18} color="var(--primary-terracotta)" /> Cartão
                </button>

                <button
                  type="button"
                  onClick={() => { setNewType('mbway'); setErrors({}); }}
                  style={{
                    padding: '10px 6px',
                    borderRadius: 'var(--radius-sm)',
                    border: newType === 'mbway' ? '2px solid #E30613' : '1px solid var(--border-medium)',
                    background: newType === 'mbway' ? '#FDE8E9' : 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Smartphone size={18} color="#E30613" /> MB WAY
                </button>

                <button
                  type="button"
                  onClick={() => { setNewType('paypal'); setErrors({}); }}
                  style={{
                    padding: '10px 6px',
                    borderRadius: 'var(--radius-sm)',
                    border: newType === 'paypal' ? '2px solid #003087' : '1px solid var(--border-medium)',
                    background: newType === 'paypal' ? '#E6EEF9' : 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span style={{ fontWeight: 800, color: '#003087', fontSize: '13px' }}>PP</span> PayPal
                </button>

                <button
                  type="button"
                  onClick={() => { setNewType('applepay'); setErrors({}); }}
                  style={{
                    padding: '10px 6px',
                    borderRadius: 'var(--radius-sm)',
                    border: newType === 'applepay' ? '2px solid var(--text-main)' : '1px solid var(--border-medium)',
                    background: newType === 'applepay' ? 'var(--bg-subtle)' : 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: '13px' }}>Pay</span> Express
                </button>
              </div>
            </div>

            {/* Credit Card Form Fields */}
            {newType === 'card' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                    Número do Cartão
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 4242"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px 10px 42px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.cardNumber ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-main)',
                        fontSize: '14px',
                        fontWeight: 600
                      }}
                    />
                    <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                      {renderBrandBadgeIcon(currentBrand)}
                    </div>
                  </div>
                  {errors.cardNumber && <div style={{ color: '#D9534F', fontSize: '11px', marginTop: '2px' }}>{errors.cardNumber}</div>}
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                    Nome Impresso no Cartão
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Ana Maria Silva"
                    value={formData.holderName}
                    onChange={(e) => handleInputChange('holderName', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.holderName ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                      background: 'var(--bg-surface)',
                      color: 'var(--text-main)',
                      fontSize: '13px'
                    }}
                  />
                  {errors.holderName && <div style={{ color: '#D9534F', fontSize: '11px', marginTop: '2px' }}>{errors.holderName}</div>}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                      Validade (MM/AA)
                    </label>
                    <input
                      type="text"
                      placeholder="12/28"
                      value={formData.expiry}
                      onChange={(e) => handleInputChange('expiry', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.expiry ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-main)',
                        fontSize: '13px'
                      }}
                    />
                    {errors.expiry && <div style={{ color: '#D9534F', fontSize: '11px', marginTop: '2px' }}>{errors.expiry}</div>}
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                      CVV / CVC
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.cvv ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                        background: 'var(--bg-surface)',
                        color: 'var(--text-main)',
                        fontSize: '13px'
                      }}
                    />
                    {errors.cvv && <div style={{ color: '#D9534F', fontSize: '11px', marginTop: '2px' }}>{errors.cvv}</div>}
                  </div>
                </div>
              </div>
            )}

            {/* MB WAY Fields */}
            {newType === 'mbway' && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                  Número de Telemóvel MB WAY
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ padding: '10px 12px', background: 'var(--bg-subtle)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)', fontSize: '13px', fontWeight: 700 }}>
                    🇵🇹 +351
                  </span>
                  <input
                    type="text"
                    placeholder="912 345 678"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.phone ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                      background: 'var(--bg-surface)',
                      color: 'var(--text-main)',
                      fontSize: '14px',
                      fontWeight: 600
                    }}
                  />
                </div>
                {errors.phone && <div style={{ color: '#D9534F', fontSize: '11px', marginTop: '4px' }}>{errors.phone}</div>}
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px' }}>
                  Receberás uma notificação na app MB WAY para autorizar pagamentos no destino.
                </div>
              </div>
            )}

            {/* PayPal Fields */}
            {newType === 'paypal' && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                  Endereço de E-mail da Conta PayPal
                </label>
                <input
                  type="email"
                  placeholder="utilizador@exemplo.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    border: errors.email ? '1px solid #D9534F' : '1px solid var(--border-medium)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    fontSize: '13px'
                  }}
                />
                {errors.email && <div style={{ color: '#D9534F', fontSize: '11px', marginTop: '4px' }}>{errors.email}</div>}
              </div>
            )}

            {/* Apple Pay Info */}
            {newType === 'applepay' && (
              <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: 'var(--radius-md)', marginBottom: '16px', fontSize: '12px', color: 'var(--text-muted)' }}>
                Ao selecionar Apple Pay / Google Pay, os teus cartões registados na carteira nativa do dispositivo serão utilizados no checkout expresso.
              </div>
            )}

            {/* Default Checkbox */}
            <div style={{ margin: '16px 0' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData((prev) => ({ ...prev, isDefault: e.target.checked }))}
                  style={{ accentColor: 'var(--primary-terracotta)', width: '16px', height: '16px' }}
                />
                Definir como método de pagamento predefinido para viagens Bagless
              </label>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '20px' }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setActiveTab('list')}
                style={{ padding: '10px 16px', fontSize: '13px' }}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '13px' }}
              >
                Guardar Método de Pagamento
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
