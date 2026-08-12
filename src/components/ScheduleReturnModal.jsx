import React, { useState } from 'react';
import { X, Truck, CheckCircle2, Clock, Hotel, Tag } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ScheduleReturnModal = ({ isOpen, onClose, onConfirmPickup }) => {
  const { currentTrip } = useApp();

  const [pickupTime, setPickupTime] = useState('11:00');
  const [hotelNotes, setHotelNotes] = useState('Deixar o saco Bagless com selo verde na receção no momento do check-out.');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onConfirmPickup({ pickupTime, hotelNotes });
      onClose();
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content max-w-lg" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div className="modal-success-box">
            <div className="modal-success-icon-bg">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="heading-md text-xl mb-2">Recolha no Hotel Agendada!</h3>
            <p className="subheading text-xs">
              O transportador ecológico Bagless recolherá a mala na receção às {pickupTime} do dia {currentTrip.endDate}.
            </p>
          </div>
        ) : (
          <div>
            <div className="modal-title-sparkle">
              <Truck size={16} /> Agendamento de Devolução Sem Custos
            </div>

            <h2 className="heading-md text-xl mb-2">
              Agendar Recolha na Receção do Hotel
            </h2>
            <p className="subheading text-xs mb-5">
              No dia do check-out, basta deixar as peças não compradas dentro do saco Bagless selado na receção.
            </p>

            <div className="form-group">
              <label className="form-label flex items-center gap-1.5">
                <Clock size={16} color="var(--primary-terracotta)" /> Hora Prevista de Check-out:
              </label>
              <select className="form-select" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
                <option value="09:00">09:00 AM (Check-out Matinal)</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM (Padrão)</option>
                <option value="12:00">12:00 PM (Meio-dia)</option>
                <option value="14:00">14:00 PM (Late Check-out)</option>
              </select>
            </div>

            <div className="form-group mb-5">
              <label className="form-label flex items-center gap-1.5">
                <Hotel size={16} color="var(--primary-terracotta)" /> Instruções para a Receção:
              </label>
              <textarea
                className="form-input h-20 resize-none"
                value={hotelNotes}
                onChange={(e) => setHotelNotes(e.target.value)}
              />
            </div>

            <div className="receipt-qr-card mb-5 text-xs text-muted">
              <Tag size={20} color="var(--accent-olive)" />
              <div>
                <strong className="text-main">Selo Digital de Devolução Verde #SEAL-882</strong><br />
                Fornecemos uma etiqueta com código de barras para colar no saco antes de entregar ao staff.
              </div>
            </div>

            <button onClick={handleConfirm} className="btn-primary btn-full-width text-base">
              Confirmar Agendamento de Recolha
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
