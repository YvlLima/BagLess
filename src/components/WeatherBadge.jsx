import React from 'react';
import { Sparkles } from 'lucide-react';

export const WeatherBadge = ({ destination }) => {
  if (!destination || !destination.weather) return null;

  const { temp, condition, recommendedFabric } = destination.weather;

  return (
    <div className="weather-badge-container">
      <div className="weather-badge-icon-bg">
        <Sparkles size={18} />
      </div>

      <div className="weather-badge-content">
        <div className="weather-badge-title">
          <span>{destination.flag} {destination.name}</span>
          <span className="weather-badge-temp">• {temp} ({condition})</span>
        </div>
        <div className="weather-badge-desc">
          💡 <strong>Recomendação AI Bagless:</strong> {recommendedFabric}
        </div>
      </div>
    </div>
  );
};
