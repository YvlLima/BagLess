import React, { useState } from 'react';
import { Heart, ShoppingBag, Sparkles, ArrowRight, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../mockData/products';
import { StyleQuizModal, useToast } from '../components';

export const ProfileHistoryScreen = () => {
  const { user, favorites, addToKit, setCurrentScreen } = useApp();
  const { showToast } = useToast();
  const [isQuizOpen, setIsQuizOpen] = useState(false);

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
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Profile Header Card */}
      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '28px', marginBottom: '28px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--primary-terracotta-light)', color: 'var(--primary-terracotta)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '24px' }}>
              AS
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 className="heading-lg" style={{ fontSize: '24px' }}>{user.name}</h1>
                <span style={{ background: 'var(--accent-olive-light)', color: 'var(--accent-olive)', fontWeight: 700, fontSize: '11px', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
                  Membro VIP Bagless Passport
                </span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{user.email}</div>

              {/* Style DNA Badge */}
              <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-medium)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '12px', fontWeight: 700, color: 'var(--primary-terracotta)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={14} /> DNA de Estilo: {user.styleDNA || 'Resort & Beach Chic'}
                </span>
                <button onClick={() => setIsQuizOpen(true)} style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'underline' }}>
                  Refazer Quiz AI
                </button>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'right', fontSize: '13px' }}>
            <div style={{ fontWeight: 700 }}>Tamanhos Registados:</div>
            <div style={{ color: 'var(--text-muted)' }}>
              Roupa: <strong>{user.sizes.top}</strong> • Calçado: <strong>{user.sizes.shoes}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist / Favorites Grid */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div>
            <h2 className="heading-lg" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Heart size={20} color="var(--primary-terracotta)" fill="var(--primary-terracotta)" /> A tua Lista de Favoritos ({favoriteProducts.length})
            </h2>
            <p className="subheading" style={{ fontSize: '13px' }}>Peças guardadas para as tuas próximas viagens.</p>
          </div>

          {favoriteProducts.length > 0 && (
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn-secondary" onClick={handleShareWishlist} style={{ fontSize: '12px', padding: '6px 12px' }}>
                <Share2 size={14} /> Partilhar Lista
              </button>
              <button className="btn-primary" onClick={handleMoveAllFavoritesToKit} style={{ fontSize: '12px', padding: '6px 14px' }}>
                <ShoppingBag size={14} /> Mover Todos para o Kit
              </button>
            </div>
          )}
        </div>

        {favoriteProducts.length === 0 ? (
          <div style={{ background: 'var(--bg-surface)', border: '1px dashed var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
            Ainda não tens favoritos salvos. Clica no coração no catálogo para guardar peças!
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {favoriteProducts.map((prod) => (
              <div key={prod.id} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '14px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <img src={prod.image} alt={prod.name} style={{ width: '60px', height: '70px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)' }}>{prod.brandName}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>{prod.name}</div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary-terracotta)', marginTop: '2px' }}>{prod.rentalPricePerDay}€ / dia</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Past Trips Archive */}
      <div>
        <h2 className="heading-lg" style={{ fontSize: '20px', marginBottom: '16px' }}>Histórico de Viagens Anteriores</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {pastTrips.map((trip) => (
            <div key={trip.id} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 700 }}>{trip.destination}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '2px 0' }}>
                  {trip.dates} • {trip.hotel}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--accent-olive)', fontWeight: 600 }}>
                  ✓ {trip.itemsCount} Peças Entregues & Devolvidas com Sucesso
                </div>
              </div>

              <button
                className="btn-secondary"
                style={{ fontSize: '12px', padding: '8px 14px' }}
                onClick={() => {
                  showToast(`Kit da viagem a ${trip.destination.split(',')[0]} pronto a re-alugar!`);
                  setCurrentScreen('create-trip');
                }}
              >
                Re-alugar Kit Desta Viagem <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Style Quiz Modal */}
      <StyleQuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </div>
  );
};
