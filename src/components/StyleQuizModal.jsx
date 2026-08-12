import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useToast } from './ToastNotification';

export const StyleQuizModal = ({ isOpen, onClose }) => {
  const { setUser } = useApp();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);

  const [vibe, setVibe] = useState('minimalist'); // minimalist | luxury | streetwear | resort
  const [colors, setColors] = useState('neutrals'); // neutrals | vibrant | dark
  const [fit, setFit] = useState('regular'); // slim | regular | oversized

  if (!isOpen) return null;

  const handleComplete = () => {
    const dnaTitle =
      vibe === 'resort'
        ? 'Resort & Beach Chic'
        : vibe === 'luxury'
        ? 'High-Fashion & Luxury'
        : vibe === 'streetwear'
        ? 'Urban Streetwear & Casual'
        : 'Minimalista Elegante';

    setUser((prev) => ({
      ...prev,
      styleDNA: dnaTitle,
      stylePreferences: [dnaTitle, colors === 'neutrals' ? 'Tons Terra & Neutros' : 'Cores Vivas', fit === 'oversized' ? 'Caimento Solto' : 'Caimento Ajustado']
    }));

    showToast(`Perfil atualizado: DNA de Estilo "${dnaTitle}"!`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-lg" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-5">
          <div className="modal-title-sparkle justify-center mb-1.5">
            <Sparkles size={16} /> Quiz de Estilo Bagless AI
          </div>
          <h2 className="heading-md text-xl">
            Descobre o teu DNA de Estilo de Viagem
          </h2>
          <p className="subheading text-xs">
            Passo {step} de 3 — Responde a 3 perguntas rápidas para personalizarmos as tuas recomendações.
          </p>
        </div>

        {/* Step 1: Vibe */}
        {step === 1 && (
          <div>
            <label className="form-label mb-3 block">
              Qual é a estética que mais te define quando viajas?
            </label>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { id: 'minimalist', title: '🌿 Minimalista Chic', desc: 'Linhas simples, linho e tons neutros' },
                { id: 'resort', title: '🏖️ Resort & Praia', desc: 'Vestidos leves, calções de banho e estampas' },
                { id: 'luxury', title: '💎 Luxo & Elegância', desc: 'Marcas de alta-costura, relógios e seda' },
                { id: 'streetwear', title: '👟 Urban & Streetwear', desc: 'Sneakers de autor, hoodies e casacos' }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setVibe(item.id)}
                  className={`quiz-option-card ${vibe === item.id ? 'selected' : ''}`}
                >
                  <div className="font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-muted">{item.desc}</div>
                </div>
              ))}
            </div>
            <button className="btn-primary btn-full-width py-3" onClick={() => setStep(2)}>
              Seguinte (2/3)
            </button>
          </div>
        )}

        {/* Step 2: Colors */}
        {step === 2 && (
          <div>
            <label className="form-label mb-3 block">
              Que paleta de cores preferes vestir?
            </label>
            <div className="flex-col gap-3 mb-5">
              {[
                { id: 'neutrals', title: 'Tons Terra & Neutros', desc: 'Bege, Branco, Terracota, Oliva e Castanho' },
                { id: 'vibrant', title: 'Cores Vivas & Vibrantes', desc: 'Azul cobalto, Amarelo solar e Vermelho' },
                { id: 'dark', title: 'Monocromático Escuro', desc: 'Preto clássico, Cinzento escuro e Azul marinho' }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setColors(item.id)}
                  className={`quiz-option-card ${colors === item.id ? 'selected' : ''}`}
                >
                  <div className="font-bold text-sm">{item.title}</div>
                  <div className="text-xs text-muted">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="btn-secondary flex-1 py-3" onClick={() => setStep(1)}>
                Anterior
              </button>
              <button className="btn-primary flex-1 py-3" onClick={() => setStep(3)}>
                Seguinte (3/3)
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Fit */}
        {step === 3 && (
          <div>
            <label className="form-label mb-3 block">
              Qual é o teu caimento ideal de roupa?
            </label>
            <div className="flex-col gap-3 mb-5">
              {[
                { id: 'slim', title: 'Ajustado ao Corpo (Slim Fit)', desc: 'Silhueta elegante e cintada' },
                { id: 'regular', title: 'Caimento Clássico (Regular Fit)', desc: 'Conforto equilibrado para o dia a dia' },
                { id: 'oversized', title: 'Solto & Descontraído (Oversized)', desc: 'Estilo fluido e moderno' }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setFit(item.id)}
                  className={`quiz-option-card ${fit === item.id ? 'selected' : ''}`}
                >
                  <div className="font-bold text-sm">{item.title}</div>
                  <div className="text-xs text-muted">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="btn-secondary flex-1 py-3" onClick={() => setStep(2)}>
                Anterior
              </button>
              <button className="btn-primary flex-1 py-3" onClick={handleComplete}>
                Guardar DNA de Estilo ✨
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
