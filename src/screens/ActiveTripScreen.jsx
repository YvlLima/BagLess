import React, { useState } from 'react';
import { Calendar, MapPin, Truck, CheckCircle2, Sparkles, XCircle, AlertTriangle, Trash2, Luggage, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BuyItemModal, ScheduleReturnModal, useToast, ProductImagePlaceholder } from '../components';

export const ActiveTripScreen = () => {
  const { activeRentals, removeFromActiveRentals, currentTrip, setBuyingProduct, boughtItems, setCurrentScreen, cancelTrip } = useApp();
  const { showToast } = useToast();
  const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [scheduledDetails, setScheduledDetails] = useState(null);

  const handleConfirmCancelTrip = () => {
    cancelTrip();
    setIsCancelModalOpen(false);
    showToast('Viagem cancelada com sucesso.');
  };

  if (!currentTrip || currentTrip.status !== 'active') {
    return (
      <div style={{ textAlign: 'center', padding: '64px 16px', maxWidth: '540px', margin: '0 auto' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--primary-terracotta-light)', color: 'var(--primary-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
          <Luggage size={36} />
        </div>
        <h2 className="heading-lg" style={{ marginBottom: '8px' }}>Não tens nenhuma viagem ativa no momento</h2>
        <p className="subheading" style={{ marginBottom: '24px' }}>
          A tua viagem anterior foi cancelada ou concluída. Planeia um novo destino e escolhe as tuas peças!
        </p>

        <button className="btn-primary" onClick={() => setCurrentScreen('create-trip')}>
          <Compass size={16} /> Planear Nova Viagem
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Active Trip Header Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #2C2623 0%, #443B37 100%)',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          marginBottom: '32px',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span
              style={{
                background: 'rgba(91, 110, 80, 0.3)',
                color: '#A2C496',
                fontWeight: 700,
                fontSize: '12px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '12px'
              }}
            >
              <Sparkles size={14} /> Viagem Ativa no Destino
            </span>

            <h1 className="heading-xl" style={{ color: '#FFFFFF', fontSize: '32px', marginBottom: '8px' }}>
              {currentTrip.destination.flag} {currentTrip.destination.name}
            </h1>

            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#E6DEC9' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={14} /> Devolução: {currentTrip.endDate}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={14} /> Entrega: {currentTrip.deliveryAddress.split(',')[0]}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
            >
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#E6DEC9' }}>
                Tempo de Viagem Restante
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', marginTop: '2px' }}>
                4 Dias 12 Horas
              </div>
            </div>

            <button
              onClick={() => setIsCancelModalOpen(true)}
              style={{
                background: 'rgba(217, 83, 79, 0.2)',
                color: '#FF8A8A',
                border: '1px solid rgba(217, 83, 79, 0.4)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <XCircle size={14} /> Cancelar Viagem
            </button>
          </div>
        </div>
      </div>

      {/* Active Rented Items Section */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h2 className="heading-lg">O teu Kit no Hotel ({activeRentals.length} peças)</h2>
            <p className="subheading" style={{ fontSize: '13px' }}>
              Aproveita as tuas peças durante a viagem. Se adorares alguma peça, podes comprá-la para sempre!
            </p>
          </div>

          {activeRentals.length > 0 && (
            <button
              onClick={() => setIsReturnModalOpen(true)}
              className="btn-secondary"
              style={{ fontSize: '13px', backgroundColor: scheduledDetails ? 'var(--accent-olive-light)' : 'var(--bg-surface)' }}
            >
              {scheduledDetails ? (
                <>
                  <CheckCircle2 size={16} color="var(--accent-olive)" /> Recolha Agendada ({scheduledDetails.pickupTime})
                </>
              ) : (
                <>
                  <Truck size={16} /> Agendar Recolha no Hotel
                </>
              )}
            </button>
          )}
        </div>

        {activeRentals.length === 0 ? (
          <div style={{ background: 'var(--bg-surface)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '32px', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>Todas as peças deste kit foram compradas por ti ou devolvidas!</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '20px' }}>
            {activeRentals.map((item) => {
              const rentalPaid = item.rentalPricePerDay * item.rentalDays;
              const priceDiff = Math.max(0, item.fullPurchasePrice - rentalPaid);

              return (
                <div
                  key={item.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '220px', position: 'relative', background: '#FFFFFF', overflow: 'hidden' }}>
                    <ProductImagePlaceholder name={item.name} brandName={item.brandName} />
                    <span className="badge-tier tier-eco" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                      {item.brandName}
                    </span>

                    {/* Remove individual item button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromActiveRentals(item.id, item.selectedSize);
                        showToast(`"${item.name}" removida do teu kit.`);
                      }}
                      title="Remover peça do kit"
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(4px)',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#D9534F',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '4px' }}>{item.name}</h4>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        Tamanho: <strong>{item.selectedSize}</strong> • Aluguer já pago: {rentalPaid}€
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '12px', marginTop: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <button
                        onClick={() => setBuyingProduct(item)}
                        className="btn-primary"
                        style={{
                          width: '100%',
                          fontSize: '13px',
                          padding: '10px',
                          backgroundColor: 'var(--primary-terracotta)'
                        }}
                      >
                        <Sparkles size={14} /> Comprar esta peça (+{priceDiff}€)
                      </button>

                      <span style={{ fontSize: '11px', color: 'var(--text-light)', display: 'block', textAlign: 'center', marginTop: '6px' }}>
                        Preço original {item.fullPurchasePrice}€ (desconto de {rentalPaid}€)
                      </span>

                      <button
                        onClick={() => {
                          removeFromActiveRentals(item.id, item.selectedSize);
                          showToast(`"${item.name}" removida do teu kit.`);
                        }}
                        style={{
                          fontSize: '11px',
                          color: '#D9534F',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          marginTop: '8px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <Trash2 size={12} /> Devolver / Remover esta peça
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bought Items Archive Section */}
      {boughtItems.length > 0 && (
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
          <h3 className="heading-md" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={18} color="var(--accent-olive)" /> Peças Compradas Nesta Viagem ({boughtItems.length})
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {boughtItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--bg-subtle)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                <img src={item.image} alt={item.name} style={{ width: '48px', height: '54px', objectFit: 'cover', borderRadius: '4px' }} loading="lazy" />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '14px' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Marca: {item.brandName} • Morada de Registo/Envio: {item.shippingAddress}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ background: 'var(--accent-olive-light)', color: 'var(--accent-olive)', fontWeight: 700, fontSize: '11px', padding: '4px 8px', borderRadius: '10px' }}>
                    Sua para Sempre
                  </span>
                  <div style={{ fontSize: '12px', fontWeight: 700, marginTop: '4px' }}>Pago: {item.amountPaid}€</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cancel Trip Confirmation Modal */}
      {isCancelModalOpen && (
        <div className="modal-overlay" onClick={() => setIsCancelModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#FDE8E8', color: '#D9534F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <AlertTriangle size={32} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Cancelar esta Viagem?</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Tens a certeza de que desejas cancelar a tua viagem a <strong>{currentTrip.destination.name}</strong>? As reservas ativas de roupa serão anuladas.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-secondary" onClick={() => setIsCancelModalOpen(false)} style={{ flex: 1, padding: '12px' }}>
                Manter Viagem
              </button>
              <button className="btn-primary" onClick={handleConfirmCancelTrip} style={{ flex: 1, padding: '12px', backgroundColor: '#D9534F' }}>
                Sim, Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
