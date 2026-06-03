import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getIconUrl } from '../utils/weather-codes';

interface Props {
  label: string;
  value: string | number;
  unit?: string;
  icon: string;
  dark?: boolean;
}

export default function HighlightCard({ label, value, unit, icon, dark }: Props) {
  const bgColor = dark ? '#16213e' : '#ffffff';
  const textColor = dark ? '#eef' : '#1a1a2e';
  const subColor = dark ? '#99a' : '#667';

  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Text style={[styles.label, { color: subColor }]}>{label}</Text>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={[styles.value, { color: textColor }]}>
        {value}{unit || ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 16, padding: 16, alignItems: 'center', flex: 1, margin: 4, minWidth: '45%' },
  label: { fontSize: 12, fontWeight: '500', marginBottom: 4 },
  icon: { fontSize: 24, marginBottom: 4 },
  value: { fontSize: 18, fontWeight: '700' },
});
