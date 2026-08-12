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
      className="product-img-placeholder-base"
      style={style}
    >
      {brandName && (
        <div className="product-img-placeholder-brand">
          {brandName}
        </div>
      )}
      <div
        className="product-img-placeholder-name"
        style={{ fontSize: getFontSize(name) }}
      >
        {name}
      </div>
    </div>
  );
};
