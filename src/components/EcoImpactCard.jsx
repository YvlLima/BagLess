import React from 'react';
import { Leaf, Droplets, Wind, Award } from 'lucide-react';

export const EcoImpactCard = ({ itemsCount = 5 }) => {
  const co2SavedKg = Math.round(itemsCount * 8.4);
  const waterSavedLiters = Math.round(itemsCount * 680);
  const luggageWeightSavedKg = Math.round(itemsCount * 1.8);

  return (
    <div
      style={{
        background: 'var(--badge-eco-bg)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
        color: 'var(--text-main)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--badge-eco-text)', marginBottom: '8px' }}>
        <Leaf size={16} /> Relatório de Impacto Ecológico Bagless
      </div>

      <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
        Nesta viagem, estás a poupar o planeta! 🌿
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
        <div style={{ background: 'var(--bg-surface)', padding: '12px 8px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--badge-eco-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <Wind size={16} /> {co2SavedKg}kg
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>CO₂ Evitado no Voo</div>
        </div>

        <div style={{ background: 'var(--bg-surface)', padding: '12px 8px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--badge-eco-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <Droplets size={16} /> {waterSavedLiters.toLocaleString()}L
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Água Poupada</div>
        </div>

        <div style={{ background: 'var(--bg-surface)', padding: '12px 8px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--badge-eco-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <Award size={16} /> -{luggageWeightSavedKg}kg
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Menos Bagagem</div>
        </div>
      </div>
    </div>
  );
};
