import type { Suggestion } from '../types';

export function getWeatherSuggestions(
  temp: number,
  feelsLike: number,
  rainProb: number,
  uv: number,
  wind: number,
  humidity: number,
  cloud: number,
  weatherCode: number,
): Suggestion[] {
  const suggestions: Suggestion[] = [];

  const isThunder = weatherCode >= 95;
  const isRain = (weatherCode >= 61 && weatherCode <= 67) || (weatherCode >= 80 && weatherCode <= 82);
  const isSnow = (weatherCode >= 71 && weatherCode <= 77) || (weatherCode >= 85 && weatherCode <= 86);
  const isFog = weatherCode === 45 || weatherCode === 48;

  if (isThunder) {
    suggestions.push({ emoji: '⛈️', text: 'Thunderstorm expected — stay indoors and avoid open areas.' });
  }
  if (isRain || rainProb > 50) {
    suggestions.push({ emoji: '☂️', text: rainProb > 70 ? 'Heavy rain likely — carry an umbrella and waterproof gear.' : 'Rain possible — better carry an umbrella.' });
  }
  if (isSnow) {
    suggestions.push({ emoji: '❄️', text: 'Snow expected — dress warmly and drive carefully.' });
  }
  if (isFog) {
    suggestions.push({ emoji: '🌫️', text: 'Foggy conditions — drive with fog lights and reduce speed.' });
  }
  if (uv >= 6) {
    suggestions.push({ emoji: '🧴', text: uv >= 8 ? 'Very high UV — avoid midday sun, wear SPF 50+.' : 'High UV — wear sunscreen and sunglasses.' });
  }
  if (wind > 40) {
    suggestions.push({ emoji: '💨', text: wind > 60 ? 'Very windy — secure loose items and take care outdoors.' : 'Windy — hold onto your hat!' });
  }
  if (temp > 35) {
    suggestions.push({ emoji: '🥵', text: 'Extreme heat — stay hydrated and avoid strenuous activity.' });
  }
  if (temp < 10) {
    suggestions.push({ emoji: '🧥', text: temp < 5 ? 'Freezing — wear heavy layers and a warm coat.' : 'Chilly — wear a jacket.' });
  }
  if (humidity > 85) {
    suggestions.push({ emoji: '💧', text: 'Very humid — feels muggy, light clothing recommended.' });
  }
  if (humidity < 30) {
    suggestions.push({ emoji: '🏜️', text: 'Very dry air — keep hydrated and moisturise.' });
  }
  if (cloud < 20 && !isRain) {
    suggestions.push({ emoji: '🕶️', text: 'Clear skies — great day for outdoor activities!' });
  }
  if (feelsLike > temp + 5) {
    suggestions.push({ emoji: '🌡️', text: 'Feels hotter than the actual temperature — pace yourself.' });
  }
  if (feelsLike < temp - 5) {
    suggestions.push({ emoji: '🌡️', text: 'Wind chill makes it feel colder — add an extra layer.' });
  }

  return suggestions.slice(0, 4);
}

export function getFunnyError(type: string): string {
  const errors: Record<string, string[]> = {
    empty: ['Please type a city name — mind reading is still in beta!', 'Enter a city name, unless you want weather for Narnia?'],
    network: ['The weather elves are on strike. Try again!', 'Oops! Our satellite got tangled in a coconut tree.'],
    notfound: ['We checked under the sofa cushions too — city not found.', 'Hmm, even Google Maps is confused by that one.'],
    generic: ['Something went wrong. Quick, blame it on solar flares!', 'Error 404: Weather not found. Did you try turning it off and on?'],
  };
  const list = errors[type] || errors.generic;
  return list[Math.floor(Math.random() * list.length)];
}
