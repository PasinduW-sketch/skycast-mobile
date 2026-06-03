export interface GeoLocation {
  name: string;
  lat: number;
  lon: number;
  country?: string;
  admin?: string;
}

export interface CurrentWeather {
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: number;
  weatherCode: number;
  weatherDesc: string;
  weatherIcon: string;
  pressure: number;
  uvIndex: number;
  cloudCover: number;
  visibility: number;
  precipitation: number;
}

export interface HourlyData {
  time: string[];
  temperature: number[];
  precipitation: number[];
  weatherCode: number[];
  windSpeed: number[];
}

export interface DailyData {
  time: string[];
  tempMax: number[];
  tempMin: number[];
  weatherCode: number[];
  precipitation: number[];
  windSpeed: number[];
}

export interface WeatherData {
  current: CurrentWeather;
  hourly: HourlyData;
  daily: DailyData;
  timezone: string;
  location: string;
}

export interface Suggestion {
  emoji: string;
  text: string;
}

export interface FavoriteCity {
  name: string;
  lat: number;
  lon: number;
  temp?: number;
  icon?: string;
}

export type Unit = 'celsius' | 'fahrenheit';
export type Theme = 'light' | 'dark';
