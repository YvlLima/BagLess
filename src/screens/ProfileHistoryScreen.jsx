import React, { useState } from 'react';
import { Heart, ShoppingBag, Sparkles, ArrowRight, Share2, CreditCard, ShieldCheck, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { usePayment } from '../context/PaymentContext';
import { PRODUCTS } from '../mockData/products';
import { StyleQuizModal, useToast, ProductImagePlaceholder, PaymentMethodsModal } from '../components';

export const ProfileHistoryScreen = () => {
  const { user, favorites, addToKit, setCurrentScreen } = useApp();
  const { paymentMethods, getSelectedMethod } = usePayment();
  const { showToast } = useToast();
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const defaultMethod = getSelectedMethod();
  const favoriteProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

  const pastTrips = [
    {
      id: 'trip-tokyo-2025',
      destination: 'Tóquio & Quioto, Japão 🇯🇵',
      dates: '10 Out - 18 Out 2025',
      hotel: 'Aman Tokyo Hotel',
      itemsCount: 6,
      status: 'Concluída'
    },
    {
      id: 'trip-amalfi-2025',
      destination: 'Positano, Costa Amalfitana 🇮🇹',
      dates: '02 Jun - 09 Jun 2025',
      hotel: 'Le Sirenuse Positano',
      itemsCount: 5,
      status: 'Concluída'
    }
  ];

  const handleMoveAllFavoritesToKit = () => {
    favoriteProducts.forEach((p) => addToKit(p, p.sizes ? p.sizes[0] : 'M'));
    showToast(`${favoriteProducts.length} favoritos movidos para o Kit de Viagem!`);
    setCurrentScreen('cart');
  };

  const handleShareWishlist = () => {
    navigator.clipboard.writeText('https://bagless.app/wishlist/ana-silva-2026');
    showToast('Link da Wishlist copiado para a área de transferência!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header Card */}
      <div className="bg-surface border border-light rounded-lg p-7 mb-6 shadow-sm">
        <div className="flex justify-between items-start flex-wrap gap-5">
          <div className="flex gap-5 items-center">
            <div className="w-18 h-18 rounded-full bg-terracotta-light text-terracotta flex items-center justify-center font-extrabold text-2xl">
              AS
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="heading-lg text-2xl">{user.name}</h1>
                <span className="bg-olive-light text-olive font-bold text-xs py-0.5 px-2.5 rounded-full">
                  Membro VIP Bagless Passport
                </span>
              </div>
              <div className="text-xs text-muted mt-0.5">{user.email}</div>

              {/* Style DNA Badge */}
              <div className="mt-2.5 flex items-center gap-2">
                <span className="bg-subtle border border-medium py-1 px-3 rounded-full text-xs font-bold text-terracotta inline-flex items-center gap-1.5">
                  <Sparkles size={14} /> DNA de Estilo: {user.styleDNA || 'Resort & Beach Chic'}
                </span>
                <button onClick={() => setIsQuizOpen(true)} className="text-xs text-muted underline border-none bg-none cursor-pointer">
                  Refazer Quiz AI
                </button>
              </div>
            </div>
          </div>

          <div className="text-right text-xs">
            <div className="font-bold">Tamanhos Registados:</div>
            <div className="text-muted">
              Roupa: <strong>{user.sizes.top}</strong> • Calçado: <strong>{user.sizes.shoes}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Banner Card */}
      <div className="bg-surface border border-light rounded-lg p-5 mb-7 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-terracotta-light text-terracotta flex items-center justify-center">
            <CreditCard size={24} />
          </div>
          <div>
            <div className="font-bold text-base flex items-center gap-2">
              Métodos de Pagamento Guardados ({paymentMethods.length})
              <span className="text-xs bg-subtle text-muted border border-medium py-0.5 px-2 rounded-full">
                <ShieldCheck size={12} className="inline mr-1" /> Encriptação SSL
              </span>
            </div>
            <div className="text-xs text-muted mt-0.5">
              Predefinido: <strong>{defaultMethod?.label || 'Cartão'}</strong> ({defaultMethod?.maskedDetail || '•••• 4242'})
            </div>
          </div>
        </div>

        <div className="flex gap-2.5">
          <button
            className="btn-secondary text-xs py-2 px-3.5"
            onClick={() => setIsPaymentModalOpen(true)}
          >
            Gerir Rápidamente
          </button>
          <button
            className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
            onClick={() => setCurrentScreen('payment-methods')}
          >
            Abrir Cofre <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Wishlist / Favorites Grid */}
      <div className="mb-9">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="heading-lg text-xl flex items-center gap-2">
              <Heart size={20} color="var(--primary-terracotta)" fill="var(--primary-terracotta)" /> A tua Lista de Favoritos ({favoriteProducts.length})
            </h2>
            <p className="subheading text-xs">Peças guardadas para as tuas próximas viagens.</p>
          </div>

          {favoriteProducts.length > 0 && (
            <div className="flex gap-2.5">
              <button className="btn-secondary text-xs py-1.5 px-3" onClick={handleShareWishlist}>
                <Share2 size={14} /> Partilhar Lista
              </button>
              <button className="btn-primary text-xs py-1.5 px-3.5" onClick={handleMoveAllFavoritesToKit}>
                <ShoppingBag size={14} /> Mover Todos para o Kit
              </button>
            </div>
          )}
        </div>

        {favoriteProducts.length === 0 ? (
          <div className="bg-surface border border-dashed border-medium rounded-md p-6 text-center text-muted">
            Ainda não tens favoritos salvos. Clica no coração no catálogo para guardar peças!
          </div>
        ) : (
          <div className="grid grid-cols-fill-240 gap-4">
            {favoriteProducts.map((prod) => (
              <div key={prod.id} className="bg-surface border border-light rounded-md p-3.5 flex gap-3 items-center">
                <div className="w-15 h-17.5 rounded-sm overflow-hidden relative flex-shrink-0">
                  <ProductImagePlaceholder name={prod.name} brandName={prod.brandName} style={{ padding: '4px' }} />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-muted">{prod.brandName}</div>
                  <div className="text-xs font-bold">{prod.name}</div>
                  <div className="text-xs font-extrabold text-terracotta mt-0.5">{prod.rentalPricePerDay}€ / dia</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Past Trips Archive */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="heading-lg text-xl m-0">Histórico de Viagens Anteriores</h2>
          <button
            className="btn-primary text-xs py-1.5 px-3.5"
            onClick={() => setCurrentScreen('trip-history')}
          >
            Ver Histórico Completo & Repetir Kits <ArrowRight size={14} />
          </button>
        </div>

        <div className="flex-col gap-4">
          {pastTrips.map((trip) => (
            <div key={trip.id} className="bg-surface border border-light rounded-md p-5 flex justify-between items-center">
              <div>
                <div className="text-base font-bold">{trip.destination}</div>
                <div className="text-xs text-muted my-0.5">
                  {trip.dates} • {trip.hotel}
                </div>
                <div className="text-xs text-olive font-semibold">
                  ✓ {trip.itemsCount} Peças Entregues & Devolvidas com Sucesso
                </div>
              </div>

              <button
                className="btn-secondary text-xs py-2 px-3.5"
                onClick={() => setCurrentScreen('trip-history')}
              >
                Ver no Histórico <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      <StyleQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      <PaymentMethodsModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </div>
  );
};
