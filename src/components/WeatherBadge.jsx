import React from 'react';
import { Sparkles } from 'lucide-react';

export const WeatherBadge = ({ destination }) => {
  if (!destination || !destination.weather) return null;

  const { temp, condition, recommendedFabric } = destination.weather;

  return (
    <div
      style={{
        background: 'var(--accent-olive-light)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        margin: '16px 0'
      }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'var(--accent-olive)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <Sparkles size={18} />
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
          <span>{destination.flag} {destination.name}</span>
          <span style={{ color: 'var(--accent-olive)', fontWeight: 600 }}>• {temp} ({condition})</span>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
          💡 <strong>Recomendação AI Bagless:</strong> {recommendedFabric}
        </div>
      </div>
    </div>
  );
};
