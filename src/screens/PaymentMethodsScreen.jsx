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
        return <span className="font-black italic text-sm text-blue-900">VISA</span>;
      case 'mastercard':
        return (
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-red-600 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block -ml-1" />
          </div>
        );
      case 'amex':
        return <span className="font-extrabold text-xs text-blue-600">AMEX</span>;
      case 'mbway':
        return <span className="font-extrabold text-xs text-red-600">MB WAY</span>;
      case 'paypal':
        return <span className="font-extrabold text-xs italic text-blue-900">PayPal</span>;
      case 'applepay':
        return <span className="font-bold text-xs">Pay</span>;
      default:
        return <CreditCard size={18} color="var(--primary-terracotta)" />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header with Back Button */}
      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={() => setCurrentScreen('profile')}
          className="btn-secondary text-xs py-2 px-3.5 inline-flex items-center gap-1.5"
        >
          <ArrowLeft size={16} /> Voltar ao Perfil
        </button>

        <div>
          <span className="slogan-tag">Bagless Security & Vault</span>
          <h1 className="heading-xl text-2xl m-0">
            Métodos de Pagamento Guardados
          </h1>
        </div>
      </div>

      <div className="bg-surface border border-light rounded-lg p-7 shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="heading-md text-lg m-0">
              As tuas Carteiras e Cartões ({paymentMethods.length})
            </h2>
            <p className="text-xs text-muted mt-0.5">
              Seleciona o teu método predefinido para pagamentos e cauções automáticas nas tuas viagens.
            </p>
          </div>

          {!isAddingNew && (
            <button
              className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
              onClick={() => setIsAddingNew(true)}
            >
              <Plus size={16} /> Adicionar Método
            </button>
          )}
        </div>

        {/* Methods List */}
        {!isAddingNew && (
          <div className="flex-col gap-3.5 mb-6">
            {paymentMethods.map((method) => {
              const isSelected = method.id === selectedMethodId;
              return (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethodId(method.id)}
                  className={`payment-method-row ${isSelected ? 'selected' : ''}`}
                >
                  <div className="brand-icon-box">
                    {renderBrandBadgeIcon(method.brand)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className="font-bold text-sm">{method.label}</span>
                      {method.isDefault && (
                        <span className="bg-olive-light text-olive text-xs font-extrabold py-0.5 px-2.5 rounded-full">
                          Predefinido
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted mt-1">
                      {method.maskedDetail} {method.holderName && `• ${method.holderName}`} {method.expiry && `• Expirar ${method.expiry}`}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {!method.isDefault && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDefaultPaymentMethod(method.id);
                          showToast(`Método ${method.label} definido como predefinido.`);
                        }}
                        className="btn-secondary text-xs py-1.5 px-3"
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
                        className="text-red-600 bg-none border-none cursor-pointer p-1.5"
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
          <form onSubmit={handleAddSubmit} className="bg-subtle border border-medium rounded-md p-6 mb-6">
            <h3 className="heading-md text-base mb-4">
              Adicionar Novo Método de Pagamento (Simulado)
            </h3>

            {/* Type Selector Buttons */}
            <div className="payment-type-selector">
              <button
                type="button"
                onClick={() => { setNewType('card'); setErrors({}); }}
                className={`payment-type-btn ${newType === 'card' ? 'selected-card' : ''}`}
              >
                <CreditCard size={20} color="var(--primary-terracotta)" /> Cartão
              </button>

              <button
                type="button"
                onClick={() => { setNewType('mbway'); setErrors({}); }}
                className={`payment-type-btn ${newType === 'mbway' ? 'selected-mbway' : ''}`}
              >
                <Smartphone size={20} color="#E30613" /> MB WAY
              </button>

              <button
                type="button"
                onClick={() => { setNewType('paypal'); setErrors({}); }}
                className={`payment-type-btn ${newType === 'paypal' ? 'selected-paypal' : ''}`}
              >
                <span className="font-extrabold text-blue-900 text-sm">PP</span> PayPal
              </button>

              <button
                type="button"
                onClick={() => { setNewType('applepay'); setErrors({}); }}
                className={`payment-type-btn ${newType === 'applepay' ? 'selected-applepay' : ''}`}
              >
                <span className="font-bold text-sm">Pay</span> Express
              </button>
            </div>

            {/* Credit Card Inputs */}
            {newType === 'card' && (
              <div className="flex-col gap-3.5">
                <div>
                  <label className="text-xs font-bold block mb-1">
                    Número do Cartão de Crédito/Débito
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 4242"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className={`form-input pl-12 ${errors.cardNumber ? 'border-red-600' : ''}`}
                    />
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                      {renderBrandBadgeIcon(currentBrand)}
                    </div>
                  </div>
                  {errors.cardNumber && <div className="text-red-600 text-xs mt-1">{errors.cardNumber}</div>}
                </div>

                <div>
                  <label className="text-xs font-bold block mb-1">
                    Nome do Titular
                  </label>
                  <input
                    type="text"
                    placeholder="Nome como impresso no cartão"
                    value={formData.holderName}
                    onChange={(e) => handleInputChange('holderName', e.target.value)}
                    className={`form-input ${errors.holderName ? 'border-red-600' : ''}`}
                  />
                  {errors.holderName && <div className="text-red-600 text-xs mt-1">{errors.holderName}</div>}
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold block mb-1">
                      Validade (MM/AA)
                    </label>
                    <input
                      type="text"
                      placeholder="12/28"
                      value={formData.expiry}
                      onChange={(e) => handleInputChange('expiry', e.target.value)}
                      className={`form-input ${errors.expiry ? 'border-red-600' : ''}`}
                    />
                    {errors.expiry && <div className="text-red-600 text-xs mt-1">{errors.expiry}</div>}
                  </div>

                  <div>
                    <label className="text-xs font-bold block mb-1">
                      Código CVV
                    </label>
                    <input
                      type="password"
                      maxLength={4}
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      className={`form-input ${errors.cvv ? 'border-red-600' : ''}`}
                    />
                    {errors.cvv && <div className="text-red-600 text-xs mt-1">{errors.cvv}</div>}
                  </div>
                </div>
              </div>
            )}

            {/* MB WAY Inputs */}
            {newType === 'mbway' && (
              <div className="mb-4">
                <label className="text-xs font-bold block mb-1">
                  Telemóvel MB WAY
                </label>
                <div className="flex gap-2">
                  <span className="p-3 bg-surface border border-medium rounded-sm text-sm font-bold">
                    🇵🇹 +351
                  </span>
                  <input
                    type="text"
                    placeholder="912 345 678"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`form-input flex-1 ${errors.phone ? 'border-red-600' : ''}`}
                  />
                </div>
                {errors.phone && <div className="text-red-600 text-xs mt-1">{errors.phone}</div>}
              </div>
            )}

            {/* PayPal Inputs */}
            {newType === 'paypal' && (
              <div className="mb-4">
                <label className="text-xs font-bold block mb-1">
                  E-mail PayPal
                </label>
                <input
                  type="email"
                  placeholder="utilizador@exemplo.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`form-input ${errors.email ? 'border-red-600' : ''}`}
                />
                {errors.email && <div className="text-red-600 text-xs mt-1">{errors.email}</div>}
              </div>
            )}

            {/* Checkbox Default */}
            <div className="my-4">
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData((prev) => ({ ...prev, isDefault: e.target.checked }))}
                  className="w-4 h-4"
                />
                Definir como método predefinido
              </label>
            </div>

            <div className="flex gap-3 justify-end mt-5">
              <button
                type="button"
                className="btn-secondary py-2.5 px-4.5 text-xs"
                onClick={() => setIsAddingNew(false)}
              >
                Cancelar
              </button>
              <button type="submit" className="btn-primary py-2.5 px-6 text-xs">
                Guardar Método
              </button>
            </div>
          </form>
        )}

        <div className="text-xs text-muted flex items-center gap-1.5 pt-3 border-t border-light">
          <ShieldCheck size={16} color="var(--accent-olive)" />
          Os teus dados de pagamento são protegidos por encriptação SSL de 256-bits. O número completo do cartão nunca é guardado nem exposto.
        </div>
      </div>
    </div>
  );
};
