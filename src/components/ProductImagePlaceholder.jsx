import React from 'react';

export const ProductImagePlaceholder = ({ name, brandName, style = {} }) => {
  const getFontSize = (text) => {
    if (!text) return '13px';
    if (text.length > 35) return '11px';
    if (text.length > 22) return '12px';
    return '14px';
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        textAlign: 'center',
        boxSizing: 'border-box',
        userSelect: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        ...style
      }}
    >
      {brandName && (
        <div style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#777777', marginBottom: '6px' }}>
          {brandName}
        </div>
      )}
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
          fontSize: getFontSize(name),
          fontWeight: 700,
          color: '#1A1A1A',
          lineHeight: 1.35,
          maxWidth: '92%',
          wordBreak: 'break-word'
        }}
      >
        {name}
      </div>
    </div>
  );
};
