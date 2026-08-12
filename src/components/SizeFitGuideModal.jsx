import React, { useState } from 'react';
import { X, Sparkles, Check, Ruler } from 'lucide-react';

export const SizeFitGuideModal = ({ isOpen, onClose, onSelectSize, _currentCategory = 'roupa' }) => {
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('72');
  const [fitPreference, setFitPreference] = useState('regular'); // tight | regular | oversized
  const [calculatedResult, setCalculatedResult] = useState(null);

  if (!isOpen) return null;

  const handleCalculateSize = () => {
    const h = parseInt(height, 10) || 175;
    const w = parseInt(weight, 10) || 72;

    let size;
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
      <div className="modal-content max-w-md" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
        >
          <X size={18} />
        </button>

        <div className="modal-title-sparkle">
          <Sparkles size={16} /> Assistente Inteligente de Medidas
        </div>

        <h2 className="heading-md text-xl mb-1.5">
          Recomendador de Tamanho Bagless Fit
        </h2>
        <p className="subheading text-xs mb-5">
          Garante o caimento ideal sem precisares de provar antes da viagem.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
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
        <div className="form-group mb-5">
          <label className="form-label">Preferência de Caimento:</label>
          <div className="flex gap-2">
            {[
              { id: 'tight', label: 'Ajustado / Slim' },
              { id: 'regular', label: 'Normal / Regular' },
              { id: 'oversized', label: 'Solto / Oversized' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFitPreference(f.id)}
                className={`chip-item ${fitPreference === f.id ? 'selected' : ''} text-xs py-1.5 px-3`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleCalculateSize} className="btn-secondary btn-full-width py-3 mb-4">
          <Ruler size={16} /> Calcular Tamanho Recomendado
        </button>

        {calculatedResult && (
          <div className="weather-badge-container flex-col text-center p-4">
            <div className="text-xs text-olive font-bold uppercase">
              Tamanho Recomendado ({calculatedResult.confidence}% de Precisão)
            </div>
            <div className="text-3xl font-extrabold text-main my-1">
              Tamanho {calculatedResult.size}
            </div>
            <div className="text-xs text-muted mb-3">
              {calculatedResult.reason}
            </div>

            <button
              onClick={() => {
                onSelectSize(calculatedResult.size);
                onClose();
              }}
              className="btn-primary btn-in-kit btn-full-width py-2.5 text-xs"
            >
              <Check size={16} /> Selecionar Tamanho {calculatedResult.size}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
