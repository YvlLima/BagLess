import React from 'react';

export const BrandLogo = ({ size = 'medium', dark = false }) => {
  const isLarge = size === 'large';
  const textColor = dark ? '#FFFFFF' : '#2C2623';
  const accentColor = '#C85A32';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: isLarge ? '12px' : '8px' }}>
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

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: isLarge ? '26px' : '19px',
            letterSpacing: '-0.03em',
            color: textColor,
            lineHeight: 1
          }}
        >
          Bag<span style={{ color: accentColor }}>less</span>
        </span>
        {isLarge && (
          <span
            style={{
              fontSize: '11px',
              color: dark ? '#E6DEC9' : '#6B625B',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginTop: '4px'
            }}
          >
            Travel Light. Dress Right.
          </span>
        )}
      </div>
    </div>
  );
};
