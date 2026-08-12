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
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <span className="slogan-tag">Bagless Global Autocomplete & Live Weather</span>
        <h1 className="heading-xl">Para onde vais viajar no mundo?</h1>
        <p className="subheading">
          Escreve qualquer cidade do mundo para obter dados em tempo real sobre o clima e entrega garantida na receção do teu hotel.
        </p>
      </div>

      {/* Worldwide Destination Search Bar with Live Autocomplete */}
      <div className="form-group mb-7 relative">
        <label className="form-label flex items-center gap-1.5 text-base">
          <Globe size={18} color="var(--primary-terracotta)" /> Pesquisar Qualquer Cidade ou País do Mundo:
        </label>
        
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-light" />
          <input
            type="text"
            className="form-input pl-11 pr-10 text-base h-12"
            placeholder="Escreve uma cidade (ex: Budapeste, Nova Iorque, Dubai, Bali, Londres, Paris, Tóquio, Roma...)"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          {isSearching && (
            <Loader2 size={18} className="spin absolute right-4 top-1/2 -translate-y-1/2 text-terracotta" />
          )}
        </div>

        {/* Autocomplete Dropdown List */}
        {suggestions.length > 0 && (
          <div className="autocomplete-dropdown">
            {suggestions.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectSuggestion(item)}
                className="autocomplete-item"
              >
                <MapPin size={16} color="var(--primary-terracotta)" />
                <span className="font-semibold">{item.displayName}</span>
              </div>
            ))}
          </div>
        )}

        {/* Error message handling */}
        {searchError && (
          <div className="mt-2 text-xs text-red-600 flex items-center gap-1.5">
            <AlertCircle size={14} />
            Não encontrámos esse destino, tenta escrever de outra forma (ex: Budapeste, Hungria).
          </div>
        )}
      </div>

      {/* Popular Destination Cards (Shortcuts) */}
      <div className="form-group mb-6">
        <label className="form-label">ou Atalhos de Destinos Populares:</label>
        <div className="popular-dest-grid">
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
                className={`popular-dest-card ${isSelected ? 'selected' : ''}`}
              >
                <div className="h-24 bg-gray-300 relative">
                  <img src={d.coverImage} alt={d.name} className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 text-xl">{d.flag}</span>
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-terracotta text-white rounded-full p-1">
                      <Check size={14} />
                    </div>
                  )}
                </div>
                <div className="p-2.5">
                  <div className="text-xs font-bold">{d.name}</div>
                  <div className="text-xs text-muted">{d.weather.temp} • {d.weather.condition}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live AI Weather & Wardrobe Recommendation Badge */}
      <WeatherBadge destination={selectedDest} />

      {/* Dates and Hotel Address Form */}
      <div className="bg-surface border border-light rounded-lg p-6 mb-6 shadow-sm">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="form-group">
            <label className="form-label flex items-center gap-1.5">
              <Calendar size={16} color="var(--primary-terracotta)" /> Data de Chegada (Check-in)
            </label>
            <input type="date" className="form-input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label flex items-center gap-1.5">
              <Calendar size={16} color="var(--primary-terracotta)" /> Data de Regresso (Check-out)
            </label>
            <input type="date" className="form-input" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label flex items-center gap-1.5">
            <Hotel size={16} color="var(--primary-terracotta)" /> Morada de Entrega no Destino (Hotel, Resort ou Airbnb)
          </label>
          <input
            type="text"
            className="form-input"
            value={hotelAddress}
            onChange={(e) => setHotelAddress(e.target.value)}
            placeholder="Ex: Nome do Hotel / Airbnb, Rua e Cidade no destino..."
          />
          <span className="text-xs text-light">
            A Bagless entrega a mala pronta e higienizada na receção antes da tua chegada.
          </span>
        </div>
      </div>

      <button onClick={handleSaveTrip} className="btn-primary btn-full-width text-base">
        Escolher Guarda-Roupa para {selectedDest.name} <ArrowRight size={18} />
      </button>
    </div>
  );
};
