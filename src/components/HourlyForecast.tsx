import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getWeatherInfo, getIconUrl } from '../utils/weather-codes';

interface Props {
  time: string[];
  temperature: number[];
  weatherCode: number[];
  unit: string;
  dark?: boolean;
}

export default function HourlyForecast({ time, temperature, weatherCode, unit, dark }: Props) {
  const bgColor = dark ? '#16213e' : '#ffffff';
  const textColor = dark ? '#eef' : '#1a1a2e';
  const subColor = dark ? '#99a' : '#667';

  const now = new Date();
  const startIdx = time.findIndex(t => {
    const d = new Date(t);
    return d >= now;
  });

  const items: { time: string; temp: number; icon: string }[] = [];
  const slice = time.slice(Math.max(0, startIdx), Math.max(0, startIdx) + 12);
  slice.forEach((t, i) => {
    const idx = time.indexOf(t);
    const d = new Date(t);
    const label = i === 0 ? 'Now' : d.getHours().toString().padStart(2, '0') + ':00';
    items.push({ time: label, temp: Math.round(temperature[idx]), icon: getWeatherInfo(weatherCode[idx]).icon });
  });

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Hourly Forecast</Text>
      <View style={styles.scroll}>
        {items.map((item, i) => (
          <View key={i} style={styles.item}>
            <Text style={[styles.time, { color: subColor }]}>{item.time}</Text>
            <Image source={{ uri: getIconUrl(item.icon) }} style={styles.icon} />
            <Text style={[styles.temp, { color: textColor }]}>{item.temp}{unit === 'celsius' ? '°' : '°F'}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: 20, padding: 16, marginBottom: 16 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
  scroll: { flexDirection: 'row', overflow: 'scroll' },
  item: { alignItems: 'center', marginRight: 16, minWidth: 48 },
  time: { fontSize: 12 },
  icon: { width: 36, height: 36 },
  temp: { fontSize: 14, fontWeight: '600' },
});
