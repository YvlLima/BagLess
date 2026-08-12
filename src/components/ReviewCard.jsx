import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ReviewCard = ({ review }) => {
  const getFitBadgeStyle = (fit) => {
    switch (fit) {
      case 'veste mais pequeno':
        return { bg: 'rgba(230, 100, 50, 0.1)', color: '#C85A32', label: 'Veste mais pequeno' };
      case 'veste maior':
        return { bg: 'rgba(91, 110, 80, 0.15)', color: '#5B6E50', label: 'Veste maior' };
      case 'veste conforme o tamanho':
      default:
        return { bg: 'var(--bg-subtle)', color: 'var(--text-main)', label: 'Veste conforme o tamanho' };
    }
  };

  const fitStyle = getFitBadgeStyle(review.fitRating);

  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-md)',
        padding: '16px',
        marginBottom: '12px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-main)' }}>
              {review.author}
            </span>
            {review.verifiedTrip && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  fontSize: '11px',
                  color: 'var(--accent-olive)',
                  fontWeight: 600,
                  background: 'var(--accent-olive-light)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <CheckCircle2 size={12} /> Viagem Verificada
              </span>
            )}
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-light)' }}>{review.date}</span>
        </div>

        {/* Stars */}
        <div style={{ display: 'flex', gap: '2px' }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              fill={star <= review.rating ? '#F59E0B' : 'none'}
              color={star <= review.rating ? '#F59E0B' : 'var(--border-medium)'}
            />
          ))}
        </div>
      </div>

      {/* Fit Rating Tag */}
      {review.fitRating && (
        <div style={{ marginBottom: '8px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              padding: '3px 8px',
              borderRadius: 'var(--radius-sm)',
              background: fitStyle.bg,
              color: fitStyle.color,
              display: 'inline-block'
            }}
          >
            📏 Caimento real: {fitStyle.label}
          </span>
        </div>
      )}

      {/* Comment */}
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
        "{review.comment}"
      </p>
    </div>
  );
};

export default ReviewCard;
