import { getWeatherInfo } from '../utils/weather-codes';
import type { WeatherData, CurrentWeather, HourlyData, DailyData, Unit } from '../types';

const BASE_URL = 'https://api.open-meteo.com/v1';

export async function fetchWeather(lat: number, lon: number, location: string, unit: Unit = 'celsius'): Promise<WeatherData> {
  const tempUnit = unit === 'celsius' ? 'celsius' : 'fahrenheit';
  const windUnit = unit === 'celsius' ? 'kmh' : 'mph';

  const url = `${BASE_URL}/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,uv_index,visibility&hourly=temperature_2m,precipitation_probability,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum,wind_speed_10m_max&timezone=auto&temperature_unit=${tempUnit}&wind_speed_unit=${windUnit}&forecast_days=6`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch weather data');
  const data = await res.json();

  const currentInfo = getWeatherInfo(data.current.weather_code);

  const current: CurrentWeather = {
    temperature: Math.round(data.current.temperature_2m),
    feelsLike: Math.round(data.current.apparent_temperature),
    humidity: data.current.relative_humidity_2m,
    windSpeed: Math.round(data.current.wind_speed_10m),
    windDirection: data.current.wind_direction_10m,
    weatherCode: data.current.weather_code,
    weatherDesc: currentInfo.description,
    weatherIcon: currentInfo.icon,
    pressure: data.current.pressure_msl,
    uvIndex: data.current.uv_index,
    cloudCover: data.current.cloud_cover,
    visibility: data.current.visibility,
    precipitation: data.current.precipitation,
  };

  const hourly: HourlyData = {
    time: data.hourly.time,
    temperature: data.hourly.temperature_2m,
    precipitation: data.hourly.precipitation_probability,
    weatherCode: data.hourly.weather_code,
    windSpeed: data.hourly.wind_speed_10m,
  };

  const daily: DailyData = {
    time: data.daily.time,
    tempMax: data.daily.temperature_2m_max,
    tempMin: data.daily.temperature_2m_min,
    weatherCode: data.daily.weather_code,
    precipitation: data.daily.precipitation_sum,
    windSpeed: data.daily.wind_speed_10m_max,
  };

  return { current, hourly, daily, timezone: data.timezone, location };
}
