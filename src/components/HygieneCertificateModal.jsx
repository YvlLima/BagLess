import React from 'react';
import { X, ShieldCheck, Droplets, Sun, Award, Wind } from 'lucide-react';

export const HygieneCertificateModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const steps = [
    {
      icon: <Sun size={20} color="var(--primary-terracotta)" />,
      title: '1. Tratamento Germicida UV-C',
      desc: 'Elimina 99.9% de germes, bactérias e vírus sem danificar as fibras delicadas do vestuário.'
    },
    {
      icon: <Droplets size={20} color="var(--accent-olive)" />,
      title: '2. Vaporização Ecológica a 100°C',
      desc: 'Pressão de vapor biológico que alisa e desinfeta a peça até ao interior das costuras.'
    },
    {
      icon: <Wind size={20} color="#3B82F6" />,
      title: '3. Câmara de Ozono Fechada',
      desc: 'Purificação de ar que remove qualquer odor residual mantendo o perfume natural de frescura.'
    },
    {
      icon: <ShieldCheck size={20} color="var(--primary-terracotta)" />,
      title: '4. Lavagem Hipoalergénica Certificada',
      desc: 'Detergentes ecológicos testados dermatologicamente para peles sensíveis.'
    },
    {
      icon: <Award size={20} color="var(--accent-olive)" />,
      title: '5. Selo de Proteção Hospitalar',
      desc: 'Mala embalada sob vácuo higiénico e selada com fecho de garantia inviolável.'
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-lg" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          <div className="modal-success-icon-bg">
            <Award size={32} />
          </div>
          <span className="slogan-tag">Garantia Oficial Bagless Clean Standard</span>
          <h2 className="heading-md my-1 text-xl">
            Certificado de Higienização de Padrão Hospitalar
          </h2>
          <p className="subheading text-xs">
            Todas as peças chegam ao teu hotel 100% impecáveis, desinfetadas e prontas a vestir.
          </p>
        </div>

        <div className="step-list-container">
          {steps.map((s, idx) => (
            <div key={idx} className="step-card-item">
              <div className="step-card-icon-box">
                {s.icon}
              </div>
              <div>
                <div className="font-bold text-sm text-main">{s.title}</div>
                <div className="text-xs text-muted mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-primary btn-full-width" onClick={onClose}>
          Entendido • Garantia de Qualidade
        </button>
      </div>
    </div>
  );
};
