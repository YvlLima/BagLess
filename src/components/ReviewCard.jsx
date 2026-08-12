import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

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
    <div className="review-card-container">
      <div className="review-card-header">
        <div>
          <div className="review-card-author-row">
            <span className="review-card-author-name">
              {review.author}
            </span>
            {review.verifiedTrip && (
              <span className="review-card-verified-badge">
                <CheckCircle2 size={12} /> Viagem Verificada
              </span>
            )}
          </div>
          <span className="review-card-date">{review.date}</span>
        </div>

        {/* Stars */}
        <div className="review-card-stars">
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
            className="review-card-fit-tag"
            style={{
              background: fitStyle.bg,
              color: fitStyle.color
            }}
          >
            📏 Caimento real: {fitStyle.label}
          </span>
        </div>
      )}

      {/* Comment */}
      <p className="review-card-comment">
        "{review.comment}"
      </p>
    </div>
  );
};

export default ReviewCard;
