import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getIconUrl } from '../utils/weather-codes';

interface Props {
  city: string;
  temp: number;
  feelsLike: number;
  description: string;
  icon: string;
  high: number;
  low: number;
  unit: 'celsius' | 'fahrenheit';
  onRefresh?: () => void;
  dark?: boolean;
}

export default function WeatherCard({ city, temp, feelsLike, description, icon, high, low, unit, dark }: Props) {
  const deg = unit === 'celsius' ? '°C' : '°F';
  const bgColor = dark ? '#16213e' : '#ffffff';
  const textColor = dark ? '#eef' : '#1a1a2e';
  const subColor = dark ? '#99a' : '#667';

  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Text style={[styles.city, { color: textColor }]}>{city}</Text>
      <View style={styles.mainRow}>
        <Image source={{ uri: getIconUrl(icon) }} style={styles.icon} />
        <Text style={[styles.temp, { color: textColor }]}>{temp}{deg}</Text>
      </View>
      <Text style={[styles.desc, { color: subColor }]}>{description}</Text>
      <Text style={[styles.feels, { color: subColor }]}>Feels like {feelsLike}{deg}</Text>
      <View style={styles.hilo}>
        <Text style={[styles.hiloText, { color: subColor }]}>H: {high}{deg}</Text>
        <Text style={[styles.hiloText, { color: subColor }]}>L: {low}{deg}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 24, padding: 24, alignItems: 'center', marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 6 },
  city: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  mainRow: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: 80, height: 80 },
  temp: { fontSize: 56, fontWeight: '300', marginLeft: 8 },
  desc: { fontSize: 16, marginTop: 4 },
  feels: { fontSize: 14, marginTop: 2 },
  hilo: { flexDirection: 'row', gap: 24, marginTop: 12 },
  hiloText: { fontSize: 15, fontWeight: '500' },
});
