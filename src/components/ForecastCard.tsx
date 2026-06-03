import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getWeatherInfo, getIconUrl } from '../utils/weather-codes';

interface Props {
  time: string[];
  tempMax: number[];
  tempMin: number[];
  weatherCode: number[];
  precipitation: number[];
  unit: string;
  dark?: boolean;
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function ForecastCard({ time, tempMax, tempMin, weatherCode, precipitation, unit, dark }: Props) {
  const bgColor = dark ? '#16213e' : '#ffffff';
  const textColor = dark ? '#eef' : '#1a1a2e';
  const subColor = dark ? '#99a' : '#667';
  const deg = unit === 'celsius' ? '°' : '°F';

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.title, { color: textColor }]}>5-Day Forecast</Text>
      {time.slice(0, 5).map((t, i) => {
        const d = new Date(t);
        const dayName = i === 0 ? 'Today' : DAY_NAMES[d.getDay()];
        const info = getWeatherInfo(weatherCode[i]);
        return (
          <View key={i} style={[styles.row, i < 4 ? styles.border : null, { borderBottomColor: dark ? '#2a2a4e' : '#eee' }]}>
            <Text style={[styles.day, { color: textColor }]}>{dayName}</Text>
            <Image source={{ uri: getIconUrl(info.icon) }} style={styles.icon} />
            <Text style={[styles.precip, { color: subColor }]}>{precipitation[i] > 0 ? `${Math.round(precipitation[i])}mm` : ''}</Text>
            <View style={styles.tempRow}>
              <Text style={[styles.temp, { color: textColor }]}>{Math.round(tempMax[i])}{deg}</Text>
              <Text style={[styles.temp, styles.tempMin, { color: subColor }]}>{Math.round(tempMin[i])}{deg}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: 20, padding: 16, marginBottom: 16 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  border: { borderBottomWidth: 1 },
  day: { width: 70, fontSize: 14, fontWeight: '500' },
  icon: { width: 32, height: 32 },
  precip: { flex: 1, fontSize: 12, textAlign: 'center' },
  tempRow: { flexDirection: 'row', gap: 12, width: 80, justifyContent: 'flex-end' },
  temp: { fontSize: 14, fontWeight: '600' },
  tempMin: { fontWeight: '400' },
});
