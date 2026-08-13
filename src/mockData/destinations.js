/**
 * Bagless Worldwide Geocoding & Live Weather Service
 * Integrates OpenStreetMap Nominatim API (Free Geocoding) + Open-Meteo API (Free Live Weather)
 * Generates dynamic AI wardrobe recommendations based on real-time temperature & climate
 */

export const POPULAR_DESTINATIONS = [
  {
    id: 'thailand-phuket',
    name: 'Phuket & Banguecoque',
    country: 'Tailândia',
    countryCode: 'TH',
    flag: '🇹🇭',
    region: 'Ásia',
    lat: 7.8804,
    lon: 98.3923,
    weather: {
      temp: '32°C',
      condition: 'Tropical Húmido / Sol',
      humidity: '82%',
      recommendedFabric: 'Linho leve, Algodão orgânico & Poliamida de secagem rápida',
      suggestedOccasions: ['praia', 'cidade', 'desporto']
    },
    coverImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    description: 'Ilhas paradisíacas, templos e noites quentes tropicais.'
  },
  {
    id: 'amalfi-coast',
    name: 'Costa Amalfitana & Positano',
    country: 'Itália',
    countryCode: 'IT',
    flag: '🇮🇹',
    region: 'Europa',
    lat: 40.634,
    lon: 14.6027,
    weather: {
      temp: '27°C',
      condition: 'Mediterrânico Ensolarado',
      humidity: '55%',
      recommendedFabric: 'Vestidos de linho, camisas leves, mocassins e óculos de sol',
      suggestedOccasions: ['praia', 'formal', 'cidade']
    },
    coverImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    description: 'Vistas deslumbrantes sobre o mar Tirreno e vilas coloridas.'
  },
  {
    id: 'tokyo-japan',
    name: 'Tóquio & Quioto',
    country: 'Japão',
    countryCode: 'JP',
    flag: '🇯🇵',
    region: 'Ásia',
    lat: 35.6762,
    lon: 139.6503,
    weather: {
      temp: '19°C',
      condition: 'Agradável / Urbano',
      humidity: '48%',
      recommendedFabric: 'Jaquetas leves, sneakers urbanos e peças em camadas',
      suggestedOccasions: ['cidade', 'desporto', 'formal']
    },
    coverImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    description: 'Metrópole vibrante, gastronomia de topo e cultura de moda streetwear.'
  },
  {
    id: 'swiss-alps',
    name: 'Zermatt & St. Moritz (Alpes)',
    country: 'Suíça',
    countryCode: 'CH',
    flag: '🇨🇭',
    region: 'Europa',
    lat: 45.9765,
    lon: 7.7491,
    weather: {
      temp: '6°C',
      condition: 'Frio / Esqui & Montanha',
      humidity: '40%',
      recommendedFabric: 'Lã Merino, casacos térmicos impermeáveis (Puffer) e botas de neve',
      suggestedOccasions: ['desporto', 'formal', 'cidade']
    },
    coverImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    description: 'Neve deslumbrante, chalés acolhedores e passeios nas montanhas.'
  },
  {
    id: 'new-york',
    name: 'Nova Iorque (Manhattan)',
    country: 'Estados Unidos',
    countryCode: 'US',
    flag: '🇺🇸',
    region: 'América do Norte',
    lat: 40.7128,
    lon: -74.006,
    weather: {
      temp: '22°C',
      condition: 'Urbano Cosmopolita',
      humidity: '50%',
      recommendedFabric: 'Blazers modernos, sapatilhas confortáveis e vestuário de noite',
      suggestedOccasions: ['cidade', 'formal']
    },
    coverImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
    description: 'A capital mundial de cultura, galerias de arte, jantares e negócios.'
  },
  {
    id: 'paris-france',
    name: 'Paris & Riviera Francesa',
    country: 'França',
    countryCode: 'FR',
    flag: '🇫🇷',
    region: 'Europa',
    lat: 48.8566,
    lon: 2.3522,
    weather: {
      temp: '21°C',
      condition: 'Primavera / Elegante',
      humidity: '52%',
      recommendedFabric: 'Sobretudos de linho, malas de pele e trench coats clássicos',
      suggestedOccasions: ['cidade', 'formal']
    },
    coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    description: 'Cidade-luz, bistrôs chiques e berço da alta-costura.'
  }
];

export const DESTINATIONS = POPULAR_DESTINATIONS;

/**
 * OpenStreetMap Nominatim Geocoding API Search
 * Returns global location suggestions as user types
 */
export const fetchGlobalGeoLocation = async (query) => {
  if (!query || query.trim().length < 2) return [];

  const cleanQuery = query.trim().toLowerCase();

  const LOCAL_CITIES = [
    { name: 'Felgueiras', country: 'Portugal', flag: '🇵🇹', lat: 41.3667, lon: -8.2000 },
    { name: 'Porto', country: 'Portugal', flag: '🇵🇹', lat: 41.1579, lon: -8.6291 },
    { name: 'Lisboa', country: 'Portugal', flag: '🇵🇹', lat: 38.7223, lon: -9.1393 },
    { name: 'Braga', country: 'Portugal', flag: '🇵🇹', lat: 41.5454, lon: -8.4265 },
    { name: 'Guimarães', country: 'Portugal', flag: '🇵🇹', lat: 41.4425, lon: -8.2918 },
    { name: 'Faro (Algarve)', country: 'Portugal', flag: '🇵🇹', lat: 37.0194, lon: -7.9304 },
    { name: 'Coimbra', country: 'Portugal', flag: '🇵🇹', lat: 40.2033, lon: -8.4103 },
    { name: 'Funchal (Madeira)', country: 'Portugal', flag: '🇵🇹', lat: 32.6669, lon: -16.9241 },
    { name: 'Ponta Delgada (Açores)', country: 'Portugal', flag: '🇵🇹', lat: 37.7412, lon: -25.6756 },
    { name: 'Madrid', country: 'Espanha', flag: '🇪🇸', lat: 40.4168, lon: -3.7038 },
    { name: 'Barcelona', country: 'Espanha', flag: '🇪🇸', lat: 41.3879, lon: 2.1699 },
    { name: 'Londres', country: 'Reino Unido', flag: '🇬🇧', lat: 51.5074, lon: -0.1278 },
    { name: 'Paris', country: 'França', flag: '🇫🇷', lat: 48.8566, lon: 2.3522 },
    { name: 'Roma', country: 'Itália', flag: '🇮🇹', lat: 41.9028, lon: 12.4964 },
    { name: 'Amesterdão', country: 'Países Baixos', flag: '🇳🇱', lat: 52.3676, lon: 4.9041 },
    { name: 'Berlim', country: 'Alemanha', flag: '🇩🇪', lat: 52.5200, lon: 13.4050 },
    { name: 'Tóquio', country: 'Japão', flag: '🇯🇵', lat: 35.6762, lon: 139.6503 },
    { name: 'Nova Iorque', country: 'Estados Unidos', flag: '🇺🇸', lat: 40.7128, lon: -74.0060 },
    { name: 'Dubai', country: 'Emirados Árabes Unidos', flag: '🇦🇪', lat: 25.2048, lon: 55.2708 },
    { name: 'Bali', country: 'Indonésia', flag: '🇮🇩', lat: -8.4095, lon: 115.1889 }
  ];

  const localMatches = LOCAL_CITIES.filter(
    (c) => c.name.toLowerCase().includes(cleanQuery) || c.country.toLowerCase().includes(cleanQuery)
  ).map((c) => ({
    id: `local-${c.name.toLowerCase().replace(/\s+/g, '-')}`,
    displayName: `${c.name}, ${c.country}`,
    city: c.name,
    country: c.country,
    flag: c.flag,
    lat: c.lat,
    lon: c.lon
  }));

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`
    );

    if (response.ok) {
      const data = await response.json();
      const remoteResults = data.map((item) => {
        const city = item.address.city || item.address.town || item.address.village || item.address.municipality || item.address.county || item.display_name.split(',')[0];
        const country = item.address.country || '';
        return {
          id: `geo-${item.place_id}`,
          displayName: `${city}${country ? `, ${country}` : ''}`,
          city,
          country,
          flag: '🌍',
          lat: parseFloat(item.lat),
          lon: parseFloat(item.lon)
        };
      });

      const combined = [...localMatches];
      remoteResults.forEach((r) => {
        if (!combined.some((c) => c.displayName.toLowerCase() === r.displayName.toLowerCase())) {
          combined.push(r);
        }
      });
      return combined;
    }
  } catch (err) {
    console.warn('Geocoding search warning:', err);
  }

  return localMatches;
};

/**
 * Open-Meteo Free Live Weather API
 * Fetches real-time temperature and climate conditions for lat/lon coordinates
 */
export const fetchLiveWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code`
    );

    if (!response.ok) throw new Error('Weather API error');

    const data = await response.json();
    const tempNum = Math.round(data.current.temperature_2m);
    const humidity = `${data.current.relative_humidity_2m}%`;

    // AI Climate & Fabric Recommendation Rules
    let condition = 'Céu Limpo / Agradável';
    let recommendedFabric = 'Camisas de linho, algodão respirável, calçado urbano e óculos de sol';
    let suggestedOccasions = ['cidade', 'praia', 'formal'];

    if (tempNum >= 28) {
      condition = 'Calor Tropical Ensolarado';
      recommendedFabric = 'Linho 100% puro, Algodão orgânico fino & tecidos de secagem rápida com proteção UV';
      suggestedOccasions = ['praia', 'formal'];
    } else if (tempNum >= 18) {
      condition = 'Primavera / Mediterrânico Agradável';
      recommendedFabric = 'Camisas de linho leves, blazers desestruturados, calças chino e sneakers de pele';
      suggestedOccasions = ['cidade', 'formal'];
    } else if (tempNum >= 10) {
      condition = 'Fresco Urbano';
      recommendedFabric = 'Trench coats, jaquetas leves, caxemira fina e vestuário em camadas';
      suggestedOccasions = ['cidade', 'desporto'];
    } else {
      condition = 'Frio de Montanha / Neve';
      recommendedFabric = 'Casacos Puffer térmicos de penas impermeáveis, Lã Merino e botas com isolamento';
      suggestedOccasions = ['desporto', 'formal'];
    }

    return {
      temp: `${tempNum}°C`,
      tempNum,
      condition,
      humidity,
      recommendedFabric,
      suggestedOccasions
    };
  } catch (err) {
    console.warn('Live weather fallback applied:', err);
    return {
      temp: '24°C',
      condition: 'Clima Agradável de Viagem',
      humidity: '55%',
      recommendedFabric: 'Camisas de linho, algodão respirável, sneakers urbanos e óculos de sol',
      suggestedOccasions: ['cidade', 'praia', 'formal']
    };
  }
};
