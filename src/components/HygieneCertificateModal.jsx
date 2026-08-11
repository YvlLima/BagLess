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
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '540px' }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-subtle)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--accent-olive-light)', color: 'var(--accent-olive)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
            <Award size={32} />
          </div>
          <span className="slogan-tag">Garantia Oficial Bagless Clean Standard</span>
          <h2 className="heading-md" style={{ fontSize: '22px', margin: '6px 0 4px 0' }}>
            Certificado de Higienização de Padrão Hospitalar
          </h2>
          <p className="subheading" style={{ fontSize: '13px' }}>
            Todas as peças chegam ao teu hotel 100% impecáveis, desinfetadas e prontas a vestir.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
          {steps.map((s, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '14px', background: 'var(--bg-subtle)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '14px', alignItems: 'flex-start' }}>
              <div style={{ background: '#FFFFFF', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-main)' }}>{s.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-primary" onClick={onClose} style={{ width: '100%', padding: '12px' }}>
          Entendido • Garantia de Qualidade
        </button>
      </div>
    </div>
  );
};
