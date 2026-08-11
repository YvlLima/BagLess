import React from 'react';
import { X, CheckCircle2, QrCode, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const OrderReceiptModal = ({ order, isOpen, onClose }) => {
  const { currentTrip } = useApp();

  if (!isOpen || !order) return null;

  const steps = [
    { title: 'Pedido Confirmado', desc: 'Pagamento e reserva validados', done: true },
    { title: 'Higienização & Passagem a Ferro', desc: 'Tratamento de padrão hospitalar', done: true },
    { title: 'Em Trânsito para o Destino', desc: 'Envio ecológico expresso', done: true },
    { title: 'Entregue na Receção do Hotel', desc: 'Pronto para o teu Check-in no destino', done: false }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
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

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--accent-olive-light)', color: 'var(--accent-olive)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
            <CheckCircle2 size={32} />
          </div>
          <span className="slogan-tag">Reserva Confirmada • Bagless Passport</span>
          <h2 className="heading-lg" style={{ fontSize: '22px', margin: '6px 0 4px 0' }}>
            Recibo & Rastreio de Kit #{order.id || 'BGL-98241'}
          </h2>
          <p className="subheading" style={{ fontSize: '13px' }}>
            A tua bagagem estará à tua espera no hotel no dia de chegada.
          </p>
        </div>

        {/* QR Code & Check-in Badge */}
        <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '16px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div style={{ background: '#FFFFFF', padding: '10px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)' }}>
            <QrCode size={54} color="var(--text-main)" />
          </div>
          <div style={{ flex: 1, fontSize: '13px' }}>
            <div style={{ fontWeight: 700, fontSize: '14px' }}>Passe Digital de Receção Hotel</div>
            <div style={{ color: 'var(--text-muted)', margin: '2px 0' }}>
              Apresenta este código ou o teu nome na receção do hotel para levantar o teu kit.
            </div>
            <div style={{ fontSize: '11px', color: 'var(--accent-olive)', fontWeight: 700 }}>
              ✓ Identificador de Mala Ecológica Validade VIP
            </div>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
            Estado da Entrega no Hotel:
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {steps.map((s, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: s.done ? 'var(--accent-olive)' : 'var(--border-medium)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800, flexShrink: 0, marginTop: '2px' }}>
                  {s.done ? '✓' : idx + 1}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: s.done ? 'var(--text-main)' : 'var(--text-muted)' }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-light)' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Destination & Hotel info */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '14px', fontSize: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, marginBottom: '4px' }}>
            <MapPin size={14} color="var(--primary-terracotta)" /> Entrega em: {currentTrip.destination.name}
          </div>
          <div style={{ color: 'var(--text-muted)' }}>{currentTrip.deliveryAddress}</div>
        </div>

        <button className="btn-primary" onClick={onClose} style={{ width: '100%', padding: '12px' }}>
          Concluído & Ver Viagem Ativa
        </button>
      </div>
    </div>
  );
};
