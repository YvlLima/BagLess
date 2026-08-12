import React from 'react';
import { Leaf, Droplets, Wind, Award } from 'lucide-react';

export const EcoImpactCard = ({ itemsCount = 5 }) => {
  const co2SavedKg = Math.round(itemsCount * 8.4);
  const waterSavedLiters = Math.round(itemsCount * 680);
  const luggageWeightSavedKg = Math.round(itemsCount * 1.8);

  return (
    <div className="eco-card">
      <div className="eco-card-header">
        <Leaf size={16} /> Relatório de Impacto Ecológico Bagless
      </div>

      <h3 className="eco-card-title">
        Nesta viagem, estás a poupar o planeta! 🌿
      </h3>

      <div className="eco-card-grid">
        <div className="eco-card-stat">
          <div className="eco-card-val">
            <Wind size={16} /> {co2SavedKg}kg
          </div>
          <div className="eco-card-lbl">CO₂ Evitado no Voo</div>
        </div>

        <div className="eco-card-stat">
          <div className="eco-card-val">
            <Droplets size={16} /> {waterSavedLiters.toLocaleString()}L
          </div>
          <div className="eco-card-lbl">Água Poupada</div>
        </div>

        <div className="eco-card-stat">
          <div className="eco-card-val">
            <Award size={16} /> -{luggageWeightSavedKg}kg
          </div>
          <div className="eco-card-lbl">Menos Bagagem</div>
        </div>
      </div>
    </div>
  );
};
