import AsyncStorage from '@react-native-async-storage/async-storage';
import type { FavoriteCity, Theme, Unit } from '../types';

const KEYS = {
  RECENT: 'skycast_recent',
  FAVORITES: 'skycast_favorites',
  THEME: 'skycast_theme',
  UNIT: 'skycast_unit',
  LAST_CITY: 'skycast_last_city',
};

export async function getRecent(): Promise<FavoriteCity[]> {
  try {
    const data = await AsyncStorage.getItem(KEYS.RECENT);
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

export async function addRecent(city: FavoriteCity): Promise<void> {
  const list = await getRecent();
  const filtered = list.filter(c => c.name.toLowerCase() !== city.name.toLowerCase());
  filtered.unshift(city);
  await AsyncStorage.setItem(KEYS.RECENT, JSON.stringify(filtered.slice(0, 10)));
}

export async function getFavorites(): Promise<FavoriteCity[]> {
  try {
    const data = await AsyncStorage.getItem(KEYS.FAVORITES);
    const list = data ? JSON.parse(data) : [];
    return list.map((c: any) => typeof c === 'string' ? { name: c, temp: undefined, icon: undefined } : c);
  } catch { return []; }
}

export async function addFavorite(city: FavoriteCity): Promise<void> {
  const list = await getFavorites();
  if (list.some(c => c.name.toLowerCase() === city.name.toLowerCase())) return;
  list.push(city);
  await AsyncStorage.setItem(KEYS.FAVORITES, JSON.stringify(list.slice(0, 20)));
}

export async function removeFavorite(name: string): Promise<void> {
  const list = await getFavorites();
  await AsyncStorage.setItem(KEYS.FAVORITES, JSON.stringify(list.filter(c => c.name.toLowerCase() !== name.toLowerCase())));
}

export async function isFavorite(name: string): Promise<boolean> {
  const list = await getFavorites();
  return list.some(c => c.name.toLowerCase() === name.toLowerCase());
}

export async function updateFavoriteWeather(name: string, temp: number, icon: string): Promise<void> {
  const list = await getFavorites();
  const idx = list.findIndex(c => c.name.toLowerCase() === name.toLowerCase());
  if (idx !== -1) {
    list[idx].temp = temp;
    list[idx].icon = icon;
    await AsyncStorage.setItem(KEYS.FAVORITES, JSON.stringify(list));
  }
}

export async function getTheme(): Promise<Theme> {
  try {
    const val = await AsyncStorage.getItem(KEYS.THEME);
    return (val === 'dark' || val === 'light') ? val : 'light';
  } catch { return 'light'; }
}

export async function setTheme(theme: Theme): Promise<void> {
  await AsyncStorage.setItem(KEYS.THEME, theme);
}

export async function getUnit(): Promise<Unit> {
  try {
    const val = await AsyncStorage.getItem(KEYS.UNIT);
    return (val === 'celsius' || val === 'fahrenheit') ? val : 'celsius';
  } catch { return 'celsius'; }
}

export async function setUnit(unit: Unit): Promise<void> {
  await AsyncStorage.setItem(KEYS.UNIT, unit);
}

export async function getLastCity(): Promise<string | null> {
  try { return await AsyncStorage.getItem(KEYS.LAST_CITY); } catch { return null; }
}

export async function saveLastCity(name: string): Promise<void> {
  await AsyncStorage.setItem(KEYS.LAST_CITY, name);
}
