import React from 'react';
import { Calendar, MapPin, Repeat, CheckCircle2, ChevronRight, ShoppingBag, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from '../components/ToastNotification';

export const TripHistoryScreen = () => {
  const { tripHistory, repeatTripKit, setCurrentScreen, setSelectedProduct } = useApp();
  const { formatPrice } = useCurrency();
  const { showToast } = useToast();

  const handleRepeatKit = (trip) => {
    repeatTripKit(trip);
    showToast(`Kit da viagem a ${trip.destination.title || 'destino'} recarregado no seu carrinho!`, 'success');
  };

  if (!tripHistory || tripHistory.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--accent-olive-light)',
            color: 'var(--accent-olive)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}
        >
          <Calendar size={36} />
        </div>

        <h2 className="heading-lg" style={{ marginBottom: '8px' }}>
          Sem Histórico de Viagens Concluídas
        </h2>
        <p className="subheading" style={{ maxWidth: '440px', margin: '0 auto 24px auto' }}>
          Assim que concluir a sua primeira viagem com o Bagless, o histórico com todas as peças alugadas e a opção de repetir kit ficarão disponíveis aqui.
        </p>

        <button className="btn-primary" onClick={() => setCurrentScreen('create-trip')}>
          Planear a Minha Primeira Viagem
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={24} color="var(--primary-terracotta)" />
          <h1 className="heading-xl">Histórico de Viagens Passadas</h1>
        </div>
        <p className="subheading" style={{ marginTop: '4px' }}>
          Consulte as suas viagens anteriores e reutilize o mesmo kit de vestuário com um só clique.
        </p>
      </div>

      {/* Trips List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {tripHistory.map((trip) => (
          <div
            key={trip.id}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition-normal)'
            }}
          >
            {/* Trip Header Banner */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '16px',
                marginBottom: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '24px' }}>{trip.destination.flag || '✈️'}</span>
                  <h2 className="heading-lg" style={{ margin: 0 }}>
                    {trip.destination.title}, {trip.destination.country}
                  </h2>
                  <span
                    style={{
                      background: 'var(--accent-olive-light)',
                      color: 'var(--accent-olive)',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <CheckCircle2 size={12} /> {trip.status || 'Concluída'}
                  </span>
                </div>

                <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '6px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={14} color="var(--primary-terracotta)" />
                    {trip.startDate} a {trip.endDate}
                  </span>
                  {trip.hotel && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} color="var(--primary-terracotta)" />
                      {trip.hotel}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Custo Total do Aluguer
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--primary-terracotta)' }}>
                  {formatPrice(trip.totalCost)}
                </div>
              </div>
            </div>

            {/* Rented Items Grid / Thumbnails */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, marginBottom: '12px', color: 'var(--text-main)' }}>
                🧳 Kit Alugado ({trip.items?.length || 0} peças):
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                  gap: '12px'
                }}
              >
                {trip.items?.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    onClick={() => setSelectedProduct(item)}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'transform 0.15s ease'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                    />
                    <div style={{ overflow: 'hidden' }}>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        {item.brandName}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          fontWeight: 700,
                          color: 'var(--text-main)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {item.name}
                      </div>
                      <div style={{ fontSize: '10px', color: 'var(--primary-terracotta)', fontWeight: 600 }}>
                        Tam: {item.selectedSize || 'M'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Action CTAs */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
              <button
                className="btn-primary"
                onClick={() => handleRepeatKit(trip)}
                style={{ fontSize: '13px' }}
              >
                <Repeat size={15} /> Repetir Este Kit Noutra Viagem
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHistoryScreen;
