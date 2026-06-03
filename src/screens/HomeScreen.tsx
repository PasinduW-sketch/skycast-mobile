import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl, SafeAreaView, Platform } from 'react-native';
import { fetchWeather } from '../api/weather';
import { reverseGeocode } from '../api/geocoding';
import { getWeatherSuggestions, getFunnyError } from '../utils/suggestions';
import * as Storage from '../storage';
import type { WeatherData, Unit, Theme } from '../types';
import WeatherCard from '../components/WeatherCard';
import HourlyForecast from '../components/HourlyForecast';

// expo-location may not be available in Snack/online environments
let Location: any = null;
try { Location = require('expo-location'); } catch {}
import ForecastCard from '../components/ForecastCard';
import SuggestionCard from '../components/SuggestionCard';
import HighlightCard from '../components/HighlightCard';
import LoadingSkeleton from '../components/LoadingSkeleton';

export default function HomeScreen({ navigation }: any) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState<Unit>('celsius');
  const [dark, setDark] = useState<Theme>('light');
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const loadSettings = async () => {
    const u = await Storage.getUnit();
    const t = await Storage.getTheme();
    setUnit(u);
    setDark(t);
  };

  const fetchForLocation = async (lat: number, lon: number) => {
    try {
      const name = await reverseGeocode(lat, lon);
      const data = await fetchWeather(lat, lon, name, unit);
      setWeather(data);
      setSuggestions(getWeatherSuggestions(
        data.current.temperature, data.current.feelsLike,
        data.current.precipitation, data.current.uvIndex,
        data.current.windSpeed, data.current.humidity,
        data.current.cloudCover, data.current.weatherCode
      ));
      Storage.addRecent({ name, lat, lon, temp: data.current.temperature, icon: data.current.weatherIcon });
      setError('');
    } catch (e: any) {
      setError(getFunnyError('network'));
    }
  };

  const fetchForCity = async (city: string) => {
    if (!city) return;
    try {
      const { geocodeCity } = await import('../api/geocoding');
      const geo = await geocodeCity(city);
      const data = await fetchWeather(geo.lat, geo.lon, geo.name, unit);
      setWeather(data);
      setSuggestions(getWeatherSuggestions(
        data.current.temperature, data.current.feelsLike,
        data.current.precipitation, data.current.uvIndex,
        data.current.windSpeed, data.current.humidity,
        data.current.cloudCover, data.current.weatherCode
      ));
      Storage.addRecent({ name: geo.name, lat: geo.lat, lon: geo.lon, temp: data.current.temperature, icon: data.current.weatherIcon });
      setError('');
    } catch (e: any) {
      setError(e.message || getFunnyError('notfound'));
    }
  };

  const init = useCallback(async () => {
    await loadSettings();
    const lastCity = await Storage.getLastCity();
    if (lastCity) {
      await fetchForCity(lastCity);
      setLoading(false);
      return;
    }
    if (Location) {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
          await fetchForLocation(loc.coords.latitude, loc.coords.longitude);
        } else {
          await fetchForCity('Colombo');
        }
      } catch {
        await fetchForCity('Colombo');
      }
    } else {
      await fetchForCity('Colombo');
    }
    setLoading(false);
  }, []);

  useEffect(() => { init(); }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    if (weather) {
      const data = await fetchWeather(
        weather.location === 'My Location' ? 6.9271 : 0,
        weather.location === 'My Location' ? 79.8612 : 0,
        weather.location, unit
      ).catch(() => null);
      if (data) {
        setWeather(data);
        setSuggestions(getWeatherSuggestions(
          data.current.temperature, data.current.feelsLike,
          data.current.precipitation, data.current.uvIndex,
          data.current.windSpeed, data.current.humidity,
          data.current.cloudCover, data.current.weatherCode
        ));
      }
    }
    setRefreshing(false);
  };

  if (loading) return <LoadingSkeleton dark={dark === 'dark'} />;

  const bg = dark === 'dark' ? '#0f0f23' : '#e8f0fe';
  const textColor = dark === 'dark' ? '#eef' : '#1a1a2e';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#4a90d9" />}
      >
        <View style={styles.header}>
          <Text style={[styles.appTitle, { color: textColor }]}>SkyCast</Text>
          <View style={styles.headerRight}>
            <Text style={[styles.unitBtn, { color: textColor }]} onPress={() => {
              const newUnit = unit === 'celsius' ? 'fahrenheit' : 'celsius';
              setUnit(newUnit);
              Storage.setUnit(newUnit);
            }}>
              {unit === 'celsius' ? '°C' : '°F'}
            </Text>
            <Text style={[styles.unitBtn, { color: textColor }]} onPress={() => {
              const newTheme = dark === 'dark' ? 'light' : 'dark';
              setDark(newTheme);
              Storage.setTheme(newTheme);
            }}>
              {dark === 'dark' ? '☀️' : '🌙'}
            </Text>
          </View>
        </View>

        {error ? (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        {weather && (
          <>
            <WeatherCard
              city={weather.location}
              temp={weather.current.temperature}
              feelsLike={weather.current.feelsLike}
              description={weather.current.weatherDesc}
              icon={weather.current.weatherIcon}
              high={weather.daily.tempMax[0]}
              low={weather.daily.tempMin[0]}
              unit={unit}
              dark={dark === 'dark'}
            />

            <SuggestionCard suggestions={suggestions} dark={dark === 'dark'} />

            <HourlyForecast
              time={weather.hourly.time}
              temperature={weather.hourly.temperature}
              weatherCode={weather.hourly.weatherCode}
              unit={unit}
              dark={dark === 'dark'}
            />

            <ForecastCard
              time={weather.daily.time}
              tempMax={weather.daily.tempMax}
              tempMin={weather.daily.tempMin}
              weatherCode={weather.daily.weatherCode}
              precipitation={weather.daily.precipitation}
              unit={unit}
              dark={dark === 'dark'}
            />

            <View style={styles.highlightsGrid}>
              <HighlightCard label="Humidity" value={weather.current.humidity} unit="%" icon="💧" dark={dark === 'dark'} />
              <HighlightCard label="Wind" value={weather.current.windSpeed} unit={unit === 'celsius' ? ' km/h' : ' mph'} icon="💨" dark={dark === 'dark'} />
              <HighlightCard label="UV Index" value={weather.current.uvIndex} icon="☀️" dark={dark === 'dark'} />
              <HighlightCard label="Pressure" value={Math.round(weather.current.pressure)} unit=" hPa" icon="🔵" dark={dark === 'dark'} />
              <HighlightCard label="Cloud Cover" value={weather.current.cloudCover} unit="%" icon="☁️" dark={dark === 'dark'} />
              <HighlightCard label="Precipitation" value={weather.current.precipitation} unit=" mm" icon="🌧️" dark={dark === 'dark'} />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16, paddingBottom: 32 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, marginTop: 8 },
  appTitle: { fontSize: 28, fontWeight: '800' },
  headerRight: { flexDirection: 'row', gap: 12 },
  unitBtn: { fontSize: 18, padding: 8 },
  errorBox: { backgroundColor: '#ffe0e0', borderRadius: 12, padding: 16, marginBottom: 16 },
  errorText: { color: '#c00', textAlign: 'center' },
  highlightsGrid: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
});
