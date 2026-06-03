export interface WeatherInfo {
  description: string;
  icon: string;
}

const WMO_CODES: Record<number, WeatherInfo> = {
  0: { description: 'Clear sky', icon: '01d' },
  1: { description: 'Mainly clear', icon: '01d' },
  2: { description: 'Partly cloudy', icon: '02d' },
  3: { description: 'Overcast', icon: '04d' },
  45: { description: 'Foggy', icon: '50d' },
  48: { description: 'Depositing rime fog', icon: '50d' },
  51: { description: 'Light drizzle', icon: '09d' },
  53: { description: 'Moderate drizzle', icon: '09d' },
  55: { description: 'Dense drizzle', icon: '09d' },
  56: { description: 'Freezing light drizzle', icon: '09d' },
  57: { description: 'Freezing dense drizzle', icon: '09d' },
  61: { description: 'Slight rain', icon: '10d' },
  63: { description: 'Moderate rain', icon: '10d' },
  65: { description: 'Heavy rain', icon: '10d' },
  66: { description: 'Freezing light rain', icon: '10d' },
  67: { description: 'Freezing heavy rain', icon: '10d' },
  71: { description: 'Slight snow', icon: '13d' },
  73: { description: 'Moderate snow', icon: '13d' },
  75: { description: 'Heavy snow', icon: '13d' },
  77: { description: 'Snow grains', icon: '13d' },
  80: { description: 'Slight rain showers', icon: '09d' },
  81: { description: 'Moderate rain showers', icon: '09d' },
  82: { description: 'Violent rain showers', icon: '09d' },
  85: { description: 'Slight snow showers', icon: '13d' },
  86: { description: 'Heavy snow showers', icon: '13d' },
  95: { description: 'Thunderstorm', icon: '11d' },
  96: { description: 'Thunderstorm with slight hail', icon: '11d' },
  99: { description: 'Thunderstorm with heavy hail', icon: '11d' },
};

export function getWeatherInfo(code: number): WeatherInfo {
  return WMO_CODES[code] ?? { description: 'Unknown', icon: '01d' };
}

export function getFriendlyCondition(code: number): string {
  const info = getWeatherInfo(code);
  const group = Math.floor(code / 10);
  if (group === 0 || code === 1 || code === 2) return 'Clear';
  if (code === 3) return 'Cloudy';
  if (code === 45 || code === 48) return 'Fog';
  if (group === 5) return 'Drizzle';
  if (group === 6) return 'Rain';
  if (group === 7) return 'Snow';
  if (group === 8) return 'Showers';
  if (group === 9) return 'Thunder';
  return info.description;
}

export function getIconUrl(icon: string): string {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
