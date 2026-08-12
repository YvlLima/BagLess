import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Hotel, ArrowRight, Check, Search, Globe, Loader2, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { POPULAR_DESTINATIONS, fetchGlobalGeoLocation, fetchLiveWeather } from '../mockData/destinations';
import { WeatherBadge } from '../components';

export const CreateTripScreen = () => {
  const { setCurrentScreen, currentTrip, setCurrentTrip } = useApp();

  const [searchLocation, setSearchLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const [selectedDest, setSelectedDest] = useState(currentTrip.destination || POPULAR_DESTINATIONS[0]);
  const [startDate, setStartDate] = useState(currentTrip.startDate || '2026-08-15');
  const [endDate, setEndDate] = useState(currentTrip.endDate || '2026-08-22');
  const [hotelAddress, setHotelAddress] = useState(currentTrip.deliveryAddress);

  const searchTimeoutRef = useRef(null);

  // Debounced Autocomplete Search (~300ms)
  useEffect(() => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    if (searchLocation.trim().length < 2) {
      setSuggestions([]);
      setIsSearching(false);
      setSearchError(false);
      return;
    }

    setIsSearching(true);
    setSearchError(false);

    searchTimeoutRef.current = setTimeout(async () => {
      const results = await fetchGlobalGeoLocation(searchLocation);
      setIsSearching(false);
      if (results.length === 0) {
        setSearchError(true);
      } else {
        setSuggestions(results);
      }
    }, 300);

    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    };
  }, [searchLocation]);

  // Handle selection of a worldwide location from autocomplete
  const handleSelectSuggestion = async (geoItem) => {
    setIsSearching(true);
    setSuggestions([]);
    setSearchLocation(geoItem.displayName);

    // Fetch real-time weather from Open-Meteo API
    const liveWeather = await fetchLiveWeather(geoItem.lat, geoItem.lon);
    setIsSearching(false);

    const newDest = {
      id: geoItem.id,
      name: geoItem.displayName,
      country: geoItem.country || 'Destino Global',
      flag: '🌍',
      lat: geoItem.lat,
      lon: geoItem.lon,
      weather: liveWeather,
      coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
      description: `Entrega de mala garantida no teu hotel em ${geoItem.displayName}.`
    };

    setSelectedDest(newDest);
    setHotelAddress(`Hotel / Alojamento em ${geoItem.displayName}`);
  };

  const handleSaveTrip = () => {
    setCurrentTrip({
      id: `trip-${selectedDest.id}-${Date.now()}`,
      destination: selectedDest,
      startDate,
      endDate,
      deliveryAddress: hotelAddress,
      status: 'draft'
    });
    setCurrentScreen('catalog');
  };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto' }}>
      <div style={{ marginBottom: '24px' }}>
        <span className="slogan-tag">Bagless Global Autocomplete & Live Weather</span>
        <h1 className="heading-xl">Para onde vais viajar no mundo?</h1>
        <p className="subheading">
          Escreve qualquer cidade do mundo para obter dados em tempo real sobre o clima e entrega garantida na receção do teu hotel.
        </p>
      </div>

      {/* Worldwide Destination Search Bar with Live Autocomplete */}
      <div className="form-group" style={{ marginBottom: '28px', position: 'relative' }}>
        <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '15px' }}>
          <Globe size={18} color="var(--primary-terracotta)" /> Pesquisar Qualquer Cidade ou País do Mundo:
        </label>
        
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
          <input
            type="text"
            className="form-input"
            style={{ paddingLeft: '44px', paddingRight: '40px', fontSize: '15px', height: '48px' }}
            placeholder="Escreve uma cidade (ex: Budapeste, Nova Iorque, Dubai, Bali, Londres, Paris, Tóquio, Roma...)"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          {isSearching && (
            <Loader2 size={18} className="spin" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-terracotta)' }} />
          )}
        </div>

        {/* Autocomplete Dropdown List */}
        {suggestions.length > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 150,
              marginTop: '4px',
              overflow: 'hidden'
            }}
          >
            {suggestions.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectSuggestion(item)}
                style={{
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border-light)',
                  fontSize: '14px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-subtle)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <MapPin size={16} color="var(--primary-terracotta)" />
                <span style={{ fontWeight: 600 }}>{item.displayName}</span>
              </div>
            ))}
          </div>
        )}

        {/* Error message handling */}
        {searchError && (
          <div style={{ marginTop: '8px', fontSize: '13px', color: '#D9534F', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <AlertCircle size={14} />
            Não encontrámos esse destino, tenta escrever de outra forma (ex: Budapeste, Hungria).
          </div>
        )}
      </div>

      {/* Popular Destination Cards (Shortcuts) */}
      <div className="form-group" style={{ marginBottom: '24px' }}>
        <label className="form-label">ou Atalhos de Destinos Populares:</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          {POPULAR_DESTINATIONS.map((d) => {
            const isSelected = selectedDest.id === d.id;
            return (
              <div
                key={d.id}
                onClick={() => {
                  setSelectedDest(d);
                  setSearchLocation('');
                  setHotelAddress(`Hotel no destino em ${d.name}`);
                }}
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '2px solid var(--primary-terracotta)' : '1px solid var(--border-medium)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'var(--bg-surface)',
                  transition: 'var(--transition-fast)',
                  position: 'relative'
                }}
              >
                <div style={{ height: '90px', background: '#DDD', position: 'relative' }}>
                  <img src={d.coverImage} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '8px', left: '8px', fontSize: '20px' }}>{d.flag}</span>
                  {isSelected && (
                    <div style={{ position: 'absolute', top: '8px', right: '8px', background: 'var(--primary-terracotta)', color: '#FFF', borderRadius: '50%', padding: '4px' }}>
                      <Check size={14} />
                    </div>
                  )}
                </div>
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700 }}>{d.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{d.weather.temp} • {d.weather.condition}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live AI Weather & Wardrobe Recommendation Badge */}
      <WeatherBadge destination={selectedDest} />

      {/* Dates and Hotel Address Form */}
      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '24px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} color="var(--primary-terracotta)" /> Data de Chegada (Check-in)
            </label>
            <input type="date" className="form-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} color="var(--primary-terracotta)" /> Data de Regresso (Check-out)
            </label>
            <input type="date" className="form-input" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Hotel size={16} color="var(--primary-terracotta)" /> Morada de Entrega no Destino (Hotel, Resort ou Airbnb)
          </label>
          <input
            type="text"
            className="form-input"
            value={hotelAddress}
            onChange={(e) => setHotelAddress(e.target.value)}
            placeholder="Ex: Nome do Hotel / Airbnb, Rua e Cidade no destino..."
          />
          <span style={{ fontSize: '11px', color: 'var(--text-light)' }}>
            A Bagless entrega a mala pronta e higienizada na receção antes da tua chegada.
          </span>
        </div>
      </div>

      <button onClick={handleSaveTrip} className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '15px' }}>
        Escolher Guarda-Roupa para {selectedDest.name} <ArrowRight size={18} />
      </button>
    </div>
  );
};
