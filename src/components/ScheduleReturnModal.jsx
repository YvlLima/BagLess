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
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
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

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '32px 16px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--accent-olive-light)', color: 'var(--accent-olive)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 className="heading-md" style={{ fontSize: '22px', marginBottom: '8px' }}>Recolha no Hotel Agendada!</h3>
            <p className="subheading" style={{ fontSize: '13px' }}>
              O transportador ecológico Bagless recolherá a mala na receção às {pickupTime} do dia {currentTrip.endDate}.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-terracotta)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>
              <Truck size={16} /> Agendamento de Devolução Sem Custos
            </div>

            <h2 className="heading-md" style={{ fontSize: '22px', marginBottom: '8px' }}>
              Agendar Recolha na Receção do Hotel
            </h2>
            <p className="subheading" style={{ fontSize: '13px', marginBottom: '20px' }}>
              No dia do check-out, basta deixar as peças não compradas dentro do saco Bagless selado na receção.
            </p>

            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Hotel size={16} color="var(--primary-terracotta)" /> Instruções para a Receção:
              </label>
              <textarea
                className="form-input"
                style={{ height: '80px', resize: 'none' }}
                value={hotelNotes}
                onChange={(e) => setHotelNotes(e.target.value)}
              />
            </div>

            <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Tag size={20} color="var(--accent-olive)" />
              <div>
                <strong style={{ color: 'var(--text-main)' }}>Selo Digital de Devolução Verde #SEAL-882</strong><br />
                Fornecemos uma etiqueta com código de barras para colar no saco antes de entregar ao staff.
              </div>
            </div>

            <button onClick={handleConfirm} className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '15px' }}>
              Confirmar Agendamento de Recolha
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
