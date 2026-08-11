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
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
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

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-terracotta)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', marginBottom: '6px' }}>
            <Sparkles size={16} /> Quiz de Estilo Bagless AI
          </div>
          <h2 className="heading-md" style={{ fontSize: '22px' }}>
            Descobre o teu DNA de Estilo de Viagem
          </h2>
          <p className="subheading" style={{ fontSize: '13px' }}>
            Passo {step} de 3 — Responde a 3 perguntas rápidas para personalizarmos as tuas recomendações.
          </p>
        </div>

        {/* Step 1: Vibe */}
        {step === 1 && (
          <div>
            <label className="form-label" style={{ marginBottom: '12px', display: 'block' }}>
              Qual é a estética que mais te define quando viajas?
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              {[
                { id: 'minimalist', title: '🌿 Minimalista Chic', desc: 'Linhas simples, linho e tons neutros' },
                { id: 'resort', title: '🏖️ Resort & Praia', desc: 'Vestidos leves, calções de banho e estampas' },
                { id: 'luxury', title: '💎 Luxo & Elegância', desc: 'Marcas de alta-costura, relógios e seda' },
                { id: 'streetwear', title: '👟 Urban & Streetwear', desc: 'Sneakers de autor, hoodies e casacos' }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setVibe(item.id)}
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    border: vibe === item.id ? '2px solid var(--primary-terracotta)' : '1px solid var(--border-medium)',
                    background: vibe === item.id ? 'var(--primary-terracotta-light)' : 'var(--bg-surface)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <button className="btn-primary" onClick={() => setStep(2)} style={{ width: '100%', padding: '12px' }}>
              Seguinte (2/3)
            </button>
          </div>
        )}

        {/* Step 2: Colors */}
        {step === 2 && (
          <div>
            <label className="form-label" style={{ marginBottom: '12px', display: 'block' }}>
              Que paleta de cores preferes vestir?
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {[
                { id: 'neutrals', title: 'Tons Terra & Neutros', desc: 'Bege, Branco, Terracota, Oliva e Castanho' },
                { id: 'vibrant', title: 'Cores Vivas & Vibrantes', desc: 'Azul cobalto, Amarelo solar e Vermelho' },
                { id: 'dark', title: 'Monocromático Escuro', desc: 'Preto clássico, Cinzento escuro e Azul marinho' }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setColors(item.id)}
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    border: colors === item.id ? '2px solid var(--primary-terracotta)' : '1px solid var(--border-medium)',
                    background: colors === item.id ? 'var(--primary-terracotta-light)' : 'var(--bg-surface)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '14px' }}>{item.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-secondary" onClick={() => setStep(1)} style={{ flex: 1, padding: '12px' }}>
                Anterior
              </button>
              <button className="btn-primary" onClick={() => setStep(3)} style={{ flex: 1, padding: '12px' }}>
                Seguinte (3/3)
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Fit */}
        {step === 3 && (
          <div>
            <label className="form-label" style={{ marginBottom: '12px', display: 'block' }}>
              Qual é o teu caimento ideal de roupa?
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              {[
                { id: 'slim', title: 'Ajustado ao Corpo (Slim Fit)', desc: 'Silhueta elegante e cintada' },
                { id: 'regular', title: 'Caimento Clássico (Regular Fit)', desc: 'Conforto equilibrado para o dia a dia' },
                { id: 'oversized', title: 'Solto & Descontraído (Oversized)', desc: 'Estilo fluido e moderno' }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setFit(item.id)}
                  style={{
                    padding: '14px',
                    borderRadius: 'var(--radius-md)',
                    border: fit === item.id ? '2px solid var(--primary-terracotta)' : '1px solid var(--border-medium)',
                    background: fit === item.id ? 'var(--primary-terracotta-light)' : 'var(--bg-surface)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '14px' }}>{item.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-secondary" onClick={() => setStep(2)} style={{ flex: 1, padding: '12px' }}>
                Anterior
              </button>
              <button className="btn-primary" onClick={handleComplete} style={{ flex: 1, padding: '12px' }}>
                Guardar DNA de Estilo ✨
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
