import React, { useState, useEffect } from 'react';
import { X, User, Mail, Shirt, Footprints, MapPin, Sparkles, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useToast } from './ToastNotification';

export const EditProfileModal = ({ isOpen, onClose }) => {
  const { user, setUser } = useApp();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'unissex',
    topSize: 'M',
    bottomSize: '38',
    shoeSize: '39',
    styleDNA: 'Resort & Beach Chic',
    homeAddress: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        gender: user.gender || 'unissex',
        topSize: user.sizes?.top || 'M',
        bottomSize: user.sizes?.bottom || '38',
        shoeSize: user.sizes?.shoes || '39',
        styleDNA: user.styleDNA || 'Resort & Beach Chic',
        homeAddress: user.homeAddress || ''
      });
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      showToast('Por favor, introduz o teu nome.', 'error');
      return;
    }

    const updatedUser = {
      ...user,
      name: formData.name.trim(),
      email: formData.email.trim(),
      gender: formData.gender,
      styleDNA: formData.styleDNA,
      homeAddress: formData.homeAddress.trim(),
      sizes: {
        top: formData.topSize,
        bottom: formData.bottomSize,
        shoes: formData.shoeSize
      }
    };

    setUser(updatedUser);
    showToast('O teu perfil foi atualizado com sucesso!', 'success');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-lg" onClick={(e) => e.stopPropagation()} style={{ padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 className="heading-md" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
            <User size={20} color="var(--primary-terracotta)" /> Editar o Meu Perfil
          </h2>
          <button
            onClick={onClose}
            style={{
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
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* 1. Nome */}
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={14} color="var(--primary-terracotta)" /> Nome Completo:
            </label>
            <input
              type="text"
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ex: Maria Santos"
              required
            />
          </div>

          {/* 2. Email */}
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={14} color="var(--primary-terracotta)" /> Endereço de Email:
            </label>
            <input
              type="email"
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Ex: maria.santos@email.com"
              required
            />
          </div>

          {/* 3. Preferência de Estilo / Género */}
          <div className="form-group">
            <label className="form-label">Preferência de Catálogo (Género):</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[
                { id: 'feminino', label: '👩 Feminino' },
                { id: 'masculino', label: '👨 Masculino' },
                { id: 'unissex', label: '⚧ Unissex' }
              ].map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, gender: g.id })}
                  className={`chip-item ${formData.gender === g.id ? 'selected' : ''}`}
                  style={{ flex: 1, padding: '8px 12px', fontSize: '13px', textAlign: 'center' }}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Tamanhos Registados (Roupa + Calçado) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px' }}>
                <Shirt size={12} /> Roupa Top:
              </label>
              <select
                className="form-select"
                value={formData.topSize}
                onChange={(e) => setFormData({ ...formData, topSize: e.target.value })}
              >
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px' }}>
                <Shirt size={12} /> Calças:
              </label>
              <select
                className="form-select"
                value={formData.bottomSize}
                onChange={(e) => setFormData({ ...formData, bottomSize: e.target.value })}
              >
                {['34', '36', '38', '40', '42', '44', '46'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ fontSize: '12px' }}>
                <Footprints size={12} /> Calçado:
              </label>
              <select
                className="form-select"
                value={formData.shoeSize}
                onChange={(e) => setFormData({ ...formData, shoeSize: e.target.value })}
              >
                {['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 5. DNA de Estilo */}
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} color="var(--primary-terracotta)" /> Estilo Preferido / DNA:
            </label>
            <input
              type="text"
              className="form-input"
              value={formData.styleDNA}
              onChange={(e) => setFormData({ ...formData, styleDNA: e.target.value })}
              placeholder="Ex: Urban Streetwear & Casual, Resort Chic..."
            />
          </div>

          {/* 6. Morada de Residência */}
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="var(--primary-terracotta)" /> Morada Habitual:
            </label>
            <input
              type="text"
              className="form-input"
              value={formData.homeAddress}
              onChange={(e) => setFormData({ ...formData, homeAddress: e.target.value })}
              placeholder="Avenida da Liberdade 120, Lisboa"
            />
          </div>

          {/* Footer CTA */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button type="submit" className="btn-primary" style={{ flex: 1, padding: '12px' }}>
              <Check size={16} /> Guardar Alterações
            </button>
            <button type="button" onClick={onClose} className="btn-secondary" style={{ padding: '12px 20px' }}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
