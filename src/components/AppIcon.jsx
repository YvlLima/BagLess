import React from 'react';

export const AppIcon = ({ size = 64 }) => {
  return (
    <div
      className="app-icon-container"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${Math.round(size * 0.22)}px`
      }}
    >
      {/* Icon Graphic */}
      <svg
        width={size * 0.55}
        height={size * 0.55}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 12V9.5C13 8.11929 14.1193 7 15.5 7H20.5C21.8807 7 23 8.11929 23 9.5V12"
          stroke="#C85A32"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <rect
          x="9"
          y="12"
          width="18"
          height="16"
          rx="4"
          stroke="#C85A32"
          strokeWidth="2.4"
          fill="none"
        />
        <path
          d="M5 20C9 17 16 24 24 15C27 11.5 31 14 31 14"
          stroke="#5B6E50"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
    </div>
  );
};
