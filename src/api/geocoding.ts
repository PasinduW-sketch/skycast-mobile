import { searchSriLankaCities, getSriLankaCity } from './sri-lanka-places';

const GEO_URL = 'https://geocoding-api.open-meteo.com/v1';
const NOMINATIM_URL = 'https://nominatim.openstreetmap.org';

interface GeocodingResult {
  name: string;
  lat: number;
  lon: number;
  country?: string;
  admin?: string;
}

export async function geocodeCity(query: string): Promise<{ name: string; lat: number; lon: number }> {
  if (!query) throw new Error('Please enter a city name');

  const slCity = getSriLankaCity(query);
  if (slCity) return slCity;

  try {
    const url = `${GEO_URL}/search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const r = data.results[0];
      return { name: r.name, lat: r.latitude, lon: r.longitude };
    }
  } catch {}

  try {
    const url = `${NOMINATIM_URL}/search?q=${encodeURIComponent(query)}&format=json&limit=1&addressdetails=1`;
    const res = await fetch(url, { headers: { 'User-Agent': 'SkyCastMobile/1.0' } });
    const data = await res.json();
    if (data && data.length > 0) {
      const r = data[0];
      const addr = r.address || {};
      const name = addr.city || addr.town || addr.village || addr.hamlet || r.display_name.split(',')[0];
      return { name, lat: parseFloat(r.lat), lon: parseFloat(r.lon) };
    }
  } catch {}

  throw new Error(`Hmm, we couldn't find "${query}". Try a different spelling or a nearby town.`);
}

export async function searchCities(query: string): Promise<GeocodingResult[]> {
  if (!query || query.length < 2) return [];
  const results: GeocodingResult[] = [];

  const local = searchSriLankaCities(query);
  local.forEach(p => {
    if (!results.some(r => r.name.toLowerCase() === p.name.toLowerCase())) {
      results.push({ name: p.name, lat: p.lat, lon: p.lon, country: 'Sri Lanka' });
    }
  });

  try {
    const url = `${GEO_URL}/search?name=${encodeURIComponent(query)}&count=8&language=en&format=json`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.results) {
      data.results.forEach((r: any) => {
        if (!results.some(ex => ex.name.toLowerCase() === r.name.toLowerCase())) {
          results.push({ name: r.name, lat: r.latitude, lon: r.longitude, country: r.country, admin: r.admin1 || '' });
        }
      });
    }
  } catch {}

  try {
    const url = `${NOMINATIM_URL}/search?q=${encodeURIComponent(query)}&format=json&limit=5&addressdetails=1`;
    const res = await fetch(url, { headers: { 'User-Agent': 'SkyCastMobile/1.0' } });
    const data = await res.json();
    if (data) {
      data.forEach((r: any) => {
        const addr = r.address || {};
        const name = addr.city || addr.town || addr.village || addr.hamlet || r.display_name.split(',')[0];
        if (!results.some(ex => ex.name.toLowerCase() === name.toLowerCase())) {
          results.push({ name, lat: parseFloat(r.lat), lon: parseFloat(r.lon), country: addr.country, admin: addr.state || addr.county || '' });
        }
      });
    }
  } catch {}

  return results.slice(0, 10);
}

export async function reverseGeocode(lat: number, lon: number): Promise<string> {
  try {
    const url = `${NOMINATIM_URL}/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`;
    const res = await fetch(url, { headers: { 'User-Agent': 'SkyCastMobile/1.0' } });
    const data = await res.json();
    const addr = data.address || {};
    return addr.city || addr.town || addr.village || addr.hamlet || addr.state_district || addr.state || 'My Location';
  } catch {
    return 'My Location';
  }
}
