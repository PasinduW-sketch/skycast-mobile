# SkyCast Mobile

React Native (Expo) weather app.

## Commands
- `npx expo start` — start dev server
- `npx expo start --android` — start on Android emulator
- `npx expo start --ios` — start on iOS simulator
- `npx expo build:android` — build APK
- `npx expo build:ios` — build IPA

## Architecture
- `src/api/` — Open-Meteo weather, Nominatim geocoding, Sri Lanka place database
- `src/storage/` — AsyncStorage wrapper for favorites, recent, theme, unit
- `src/components/` — WeatherCard, HourlyForecast, ForecastCard, SuggestionCard, HighlightCard, LoadingSkeleton
- `src/screens/` — HomeScreen (main weather), SearchScreen (autocomplete), FavoritesScreen
- `src/utils/` — Weather code mapping (WMO to description/icon), rule-based suggestions
- `src/types/` — TypeScript type definitions

## Sri Lanka Places
215+ locations across all 9 provinces in `src/api/sri-lanka-places.ts`. Uses `getSriLankaCity()` for instant exact match lookup and `searchSriLankaCities()` for local autocomplete (no network needed).

## Data Flow
1. User searches → `geocodeCity()` (checks local DB → Open-Meteo → Nominatim)
2. `fetchWeather(lat, lon)` → Open-Meteo API
3. Results cached in AsyncStorage (favorites, recent)
4. Suggestions generated from current weather data via `getWeatherSuggestions()`

## APIs Used (no keys required)
- Open-Meteo (weather data)
- Open-Meteo Geocoding (city search)
- Nominatim / OpenStreetMap (fallback geocoding + reverse geocoding)
- OpenWeatherMap CDN (weather icon images)

## Key Decisions
- Expo managed workflow for easy cross-platform builds
- Tab navigation: Home / Search / Favorites
- Skip MapView for v1 (can be added later with react-native-maps)
- Dark/light theme via AsyncStorage persistence
- °C/°F toggle via AsyncStorage persistence
