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
      <div className="empty-state-wrapper max-w-lg mx-auto">
        <div className="empty-state-icon-bg">
          <Luggage size={36} />
        </div>
        <h2 className="heading-lg mb-2">Não tens nenhuma viagem ativa no momento</h2>
        <p className="subheading mb-6">
          A tua viagem anterior foi cancelada ou concluída. Planeia um novo destino e escolhe as tuas peças!
        </p>

        <button className="btn-primary" onClick={() => setCurrentScreen('create-trip')}>
          <Compass size={16} /> Planear Nova Viagem
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Active Trip Header Banner */}
      <div className="active-trip-banner">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <span className="active-trip-tag">
              <Sparkles size={14} /> Viagem Ativa no Destino
            </span>

            <h1 className="heading-xl text-white text-3xl mb-2">
              {currentTrip.destination.flag} {currentTrip.destination.name}
            </h1>

            <div className="flex gap-4 text-xs text-sand">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> Devolução: {currentTrip.endDate}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} /> Entrega: {currentTrip.deliveryAddress.split(',')[0]}
              </span>
            </div>
          </div>

          <div className="flex-col items-end gap-3">
            <div className="trip-countdown-box">
              <div className="text-xs uppercase tracking-wider text-sand">
                Tempo de Viagem Restante
              </div>
              <div className="text-xl font-extrabold text-white mt-0.5">
                4 Dias 12 Horas
              </div>
            </div>

            <button
              onClick={() => setIsCancelModalOpen(true)}
              className="btn-cancel-trip"
            >
              <XCircle size={14} /> Cancelar Viagem
            </button>
          </div>
        </div>
      </div>

      {/* Active Rented Items Section */}
      <div className="mb-9">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="heading-lg">O teu Kit no Hotel ({activeRentals.length} peças)</h2>
            <p className="subheading text-xs">
              Aproveita as tuas peças durante a viagem. Se adorares alguma peça, podes comprá-la para sempre!
            </p>
          </div>

          {activeRentals.length > 0 && (
            <button
              onClick={() => setIsReturnModalOpen(true)}
              className={`btn-secondary text-xs ${scheduledDetails ? 'bg-olive-light' : 'bg-surface'}`}
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
          <div className="bg-surface border border-dashed border-medium rounded-md p-8 text-center">
            <p className="text-muted">Todas as peças deste kit foram compradas por ti ou devolvidas!</p>
          </div>
        ) : (
          <div className="active-rental-grid">
            {activeRentals.map((item) => {
              const rentalPaid = item.rentalPricePerDay * item.rentalDays;
              const priceDiff = Math.max(0, item.fullPurchasePrice - rentalPaid);

              return (
                <div
                  key={item.id}
                  className="active-rental-card"
                >
                  <div className="active-rental-thumb">
                    <ProductImagePlaceholder name={item.name} brandName={item.brandName} />
                    <span className="badge-tier tier-eco absolute top-2.5 left-2.5">
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
                      className="product-card-remove-btn text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="product-card-body">
                    <div>
                      <h4 className="text-base font-bold mb-1">{item.name}</h4>
                      <div className="text-xs text-muted mb-2">
                        Tamanho: <strong>{item.selectedSize}</strong> • Aluguer já pago: {rentalPaid}€
                      </div>
                    </div>

                    <div className="border-t border-light pt-3 mt-3 flex-col items-center">
                      <button
                        onClick={() => setBuyingProduct(item)}
                        className="btn-primary btn-full-width text-xs py-2.5 bg-terracotta"
                      >
                        <Sparkles size={14} /> Comprar esta peça (+{priceDiff}€)
                      </button>

                      <span className="text-xs text-light block text-center mt-1.5">
                        Preço original {item.fullPurchasePrice}€ (desconto de {rentalPaid}€)
                      </span>

                      <button
                        onClick={() => {
                          removeFromActiveRentals(item.id, item.selectedSize);
                          showToast(`"${item.name}" removida do teu kit.`);
                        }}
                        className="text-xs text-red-600 font-semibold inline-flex items-center gap-1 mt-2 border-none bg-none cursor-pointer"
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
        <div className="bg-surface border border-light rounded-lg p-6">
          <h3 className="heading-md mb-4 flex items-center gap-2">
            <CheckCircle2 size={18} color="var(--accent-olive)" /> Peças Compradas Nesta Viagem ({boughtItems.length})
          </h3>

          <div className="flex-col gap-3">
            {boughtItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-subtle p-3 rounded-sm">
                <img src={item.image} alt={item.name} className="w-12 h-14 object-cover rounded-sm" loading="lazy" />
                <div className="flex-1">
                  <div className="font-bold text-sm">{item.name}</div>
                  <div className="text-xs text-muted">
                    Marca: {item.brandName} • Morada de Registo/Envio: {item.shippingAddress}
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-olive-light text-olive font-bold text-xs py-1 px-2 rounded-full">
                    Sua para Sempre
                  </span>
                  <div className="text-xs font-bold mt-1">Pago: {item.amountPaid}€</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cancel Trip Confirmation Modal */}
      {isCancelModalOpen && (
        <div className="modal-overlay" onClick={() => setIsCancelModalOpen(false)}>
          <div className="modal-content max-w-sm text-center" onClick={(e) => e.stopPropagation()}>
            <div className="danger-icon-bg">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Cancelar esta Viagem?</h3>
            <p className="text-xs text-muted mb-6">
              Tens a certeza de que desejas cancelar a tua viagem a <strong>{currentTrip.destination.name}</strong>? As reservas ativas de roupa serão anuladas.
            </p>
            <div className="flex gap-3">
              <button className="btn-secondary flex-1 py-3" onClick={() => setIsCancelModalOpen(false)}>
                Manter Viagem
              </button>
              <button className="btn-primary btn-danger flex-1 py-3" onClick={handleConfirmCancelTrip}>
                Sim, Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Return Modal */}
      <ScheduleReturnModal
        isOpen={isReturnModalOpen}
        onClose={() => setIsReturnModalOpen(false)}
        onConfirmPickup={(details) => setScheduledDetails(details)}
      />

      {/* Buy Rented Item Modal */}
      <BuyItemModal />
    </div>
  );
};
