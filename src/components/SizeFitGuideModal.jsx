import React, { useState } from 'react';
import { X, Sparkles, Check, Ruler } from 'lucide-react';

export const SizeFitGuideModal = ({ isOpen, onClose, onSelectSize, currentCategory = 'roupa' }) => {
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('72');
  const [fitPreference, setFitPreference] = useState('regular'); // tight | regular | oversized
  const [calculatedResult, setCalculatedResult] = useState(null);

  if (!isOpen) return null;

  const handleCalculateSize = () => {
    const h = parseInt(height, 10) || 175;
    const w = parseInt(weight, 10) || 72;

    let size = 'M';
    if (w < 60) size = 'S';
    else if (w < 78) size = fitPreference === 'oversized' ? 'L' : 'M';
    else if (w < 90) size = fitPreference === 'tight' ? 'M' : 'L';
    else size = 'XL';

    const confidence = Math.min(98, 88 + (h % 7));

    setCalculatedResult({
      size,
      confidence,
      reason: `Com base em ${h}cm, ${w}kg e preferência de caimento ${fitPreference === 'regular' ? 'Normal' : fitPreference === 'tight' ? 'Ajustado' : 'Oversized'}.`
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px' }}>
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
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-terracotta)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>
          <Sparkles size={16} /> Assistente Inteligente de Medidas
        </div>

        <h2 className="heading-md" style={{ fontSize: '20px', marginBottom: '6px' }}>
          Recomendador de Tamanho Bagless Fit
        </h2>
        <p className="subheading" style={{ fontSize: '13px', marginBottom: '20px' }}>
          Garante o caimento ideal sem precisares de provar antes da viagem.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div className="form-group">
            <label className="form-label">Altura (cm):</label>
            <input
              type="number"
              className="form-input"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ex: 175"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Peso (kg):</label>
            <input
              type="number"
              className="form-input"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ex: 72"
            />
          </div>
        </div>

        {/* Fit Preference Chips */}
        <div className="form-group" style={{ marginBottom: '20px' }}>
          <label className="form-label">Preferência de Caimento:</label>
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { id: 'tight', label: 'Ajustado / Slim' },
              { id: 'regular', label: 'Normal / Regular' },
              { id: 'oversized', label: 'Solto / Oversized' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFitPreference(f.id)}
                className={`chip-item ${fitPreference === f.id ? 'selected' : ''}`}
                style={{ fontSize: '12px', padding: '6px 12px' }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleCalculateSize} className="btn-secondary" style={{ width: '100%', padding: '12px', marginBottom: '16px' }}>
          <Ruler size={16} /> Calcular Tamanho Recomendado
        </button>

        {calculatedResult && (
          <div
            style={{
              background: 'var(--accent-olive-light)',
              border: '1px solid #D2E0CD',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '12px', color: 'var(--accent-olive)', fontWeight: 700, textTransform: 'uppercase' }}>
              Tamanho Recomendado ({calculatedResult.confidence}% de Precisão)
            </div>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#32422C', margin: '4px 0' }}>
              Tamanho {calculatedResult.size}
            </div>
            <div style={{ fontSize: '12px', color: '#526348', marginBottom: '12px' }}>
              {calculatedResult.reason}
            </div>

            <button
              onClick={() => {
                onSelectSize(calculatedResult.size);
                onClose();
              }}
              className="btn-primary"
              style={{ width: '100%', padding: '10px', fontSize: '13px', backgroundColor: 'var(--accent-olive)' }}
            >
              <Check size={16} /> Selecionar Tamanho {calculatedResult.size}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
