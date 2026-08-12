import React from 'react';
import { Calendar, MapPin, Repeat, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useCurrency } from '../context/CurrencyContext';
import { useToast } from '../components/ToastNotification';
import { ProductImagePlaceholder } from '../components/ProductImagePlaceholder';

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
      <div className="empty-state-wrapper">
        <div className="empty-state-icon-bg">
          <Calendar size={36} />
        </div>

        <h2 className="heading-lg empty-state-title">
          Sem Histórico de Viagens Concluídas
        </h2>
        <p className="subheading empty-state-text">
          Assim que concluir a sua primeira viagem com o Bagless, o histórico com todas as peças alugadas e a opção de repetir kit ficarão disponíveis aqui.
        </p>

        <button className="btn-primary" onClick={() => setCurrentScreen('create-trip')}>
          Planear a Minha Primeira Viagem
        </button>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header-row">
        <div>
          <div className="page-header-left">
            <Calendar size={24} color="var(--primary-terracotta)" />
            <h1 className="heading-xl">Histórico de Viagens Passadas</h1>
          </div>
          <p className="subheading mt-1">
            Consulte as suas viagens anteriores e reutilize o mesmo kit de vestuário com um só clique.
          </p>
        </div>
      </div>

      {/* Trips List */}
      <div className="flex-col gap-6">
        {tripHistory.map((trip) => (
          <div
            key={trip.id}
            className="trip-card-container"
          >
            {/* Trip Header Banner */}
            <div className="trip-card-header">
              <div>
                <div className="trip-card-dest-title">
                  <span className="text-2xl">{trip.destination.flag || '✈️'}</span>
                  <h2 className="heading-lg m-0">
                    {trip.destination.title}, {trip.destination.country}
                  </h2>
                  <span className="trip-card-badge">
                    <CheckCircle2 size={12} /> {trip.status || 'Concluída'}
                  </span>
                </div>

                <div className="trip-card-meta">
                  <span className="trip-card-meta-item">
                    <Calendar size={14} color="var(--primary-terracotta)" />
                    {trip.startDate} a {trip.endDate}
                  </span>
                  {trip.hotel && (
                    <span className="trip-card-meta-item">
                      <MapPin size={14} color="var(--primary-terracotta)" />
                      {trip.hotel}
                    </span>
                  )}
                </div>
              </div>

              <div className="trip-card-cost-col">
                <div className="trip-card-cost-label">
                  Custo Total do Aluguer
                </div>
                <div className="trip-card-cost-val">
                  {formatPrice(trip.totalCost)}
                </div>
              </div>
            </div>

            {/* Rented Items Grid / Thumbnails */}
            <div className="mb-4">
              <div className="text-sm font-bold mb-3 text-main">
                🧳 Kit Alugado ({trip.items?.length || 0} peças):
              </div>

              <div className="trip-items-grid">
                {trip.items?.map((item, idx) => (
                  <div
                    key={`${item.id}-${idx}`}
                    onClick={() => setSelectedProduct(item)}
                    className="trip-item-card"
                  >
                    <div className="trip-item-thumb">
                      <ProductImagePlaceholder name={item.name} brandName={item.brandName} style={{ padding: '4px' }} />
                    </div>
                    <div className="trip-item-info">
                      <div className="trip-item-brand">
                        {item.brandName}
                      </div>
                      <div className="trip-item-name">
                        {item.name}
                      </div>
                      <div className="trip-item-size">
                        Tam: {item.selectedSize || 'M'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Action CTAs */}
            <div className="trip-card-actions">
              <button
                className="btn-primary btn-small-text"
                onClick={() => handleRepeatKit(trip)}
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
