import React from 'react';

export const BrandLogo = ({ size = 'medium', dark = false }) => {
  const isLarge = size === 'large';
  const textColor = dark ? '#FFFFFF' : 'var(--text-main)';
  const accentColor = '#C85A32';

  return (
    <div className="brand-logo-container" style={{ gap: isLarge ? '12px' : '8px' }}>
      {/* SVG Icon: Luggage + Feather/Cloud Lightness Contour */}
      <svg
        width={isLarge ? '36' : '26'}
        height={isLarge ? '36' : '26'}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Background Circle */}
        <rect width="36" height="36" rx="10" fill={accentColor} fillOpacity="0.12" />
        {/* Suitcase Handle */}
        <path
          d="M13 12V9.5C13 8.11929 14.1193 7 15.5 7H20.5C21.8807 7 23 8.11929 23 9.5V12"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Suitcase Body */}
        <rect
          x="9"
          y="12"
          width="18"
          height="16"
          rx="4"
          stroke={accentColor}
          strokeWidth="2"
          fill="none"
        />
        {/* Lightness Curve / Feather Breeze */}
        <path
          d="M6 21C10 18 16 25 24 16C27 12.5 31 15 31 15"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>

      <div className="brand-logo-text-group">
        <span
          className="brand-logo-title"
          style={{
            fontSize: isLarge ? '26px' : '19px',
            color: textColor
          }}
        >
          Bag<span style={{ color: accentColor }}>less</span>
        </span>
        {isLarge && (
          <span
            className="brand-logo-subtitle"
            style={{
              color: dark ? '#E6DEC9' : 'var(--text-muted)'
            }}
          >
            Travel Light. Dress Right.
          </span>
        )}
      </div>
    </div>
  );
};
