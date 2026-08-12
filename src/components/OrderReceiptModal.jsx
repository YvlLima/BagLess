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
      <div className="modal-content max-w-xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-5">
          <div className="modal-success-icon-bg">
            <CheckCircle2 size={32} />
          </div>
          <span className="slogan-tag">Reserva Confirmada • Bagless Passport</span>
          <h2 className="heading-lg my-1 text-xl">
            Recibo & Rastreio de Kit #{order.id || 'BGL-98241'}
          </h2>
          <p className="subheading text-xs">
            A tua bagagem estará à tua espera no hotel no dia de chegada.
          </p>
        </div>

        {/* QR Code & Check-in Badge */}
        <div className="receipt-qr-card">
          <div className="receipt-qr-box">
            <QrCode size={54} color="var(--text-main)" />
          </div>
          <div className="flex-1 text-xs">
            <div className="font-bold text-sm">Passe Digital de Receção Hotel</div>
            <div className="text-muted my-0.5">
              Apresenta este código ou o teu nome na receção do hotel para levantar o teu kit.
            </div>
            <div className="text-xs text-olive font-bold">
              ✓ Identificador de Mala Ecológica Validade VIP
            </div>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="mb-5">
          <h4 className="text-xs font-bold mb-3 uppercase tracking-wider text-muted">
            Estado da Entrega no Hotel:
          </h4>

          <div className="flex-col gap-3">
            {steps.map((s, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`timeline-step-icon ${s.done ? 'done' : 'pending'}`}>
                  {s.done ? '✓' : idx + 1}
                </div>
                <div>
                  <div className={`text-xs font-bold ${s.done ? 'text-main' : 'text-muted'}`}>
                    {s.title}
                  </div>
                  <div className="text-xs text-light">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Destination & Hotel info */}
        <div className="dest-hotel-card">
          <div className="flex items-center gap-1.5 font-bold mb-1">
            <MapPin size={14} color="var(--primary-terracotta)" /> Entrega em: {currentTrip.destination.name}
          </div>
          <div className="text-muted">{currentTrip.deliveryAddress}</div>
        </div>

        <button className="btn-primary btn-full-width" onClick={onClose}>
          Concluído & Ver Viagem Ativa
        </button>
      </div>
    </div>
  );
};
