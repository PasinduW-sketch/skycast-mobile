import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Suggestion } from '../types';

interface Props {
  suggestions: Suggestion[];
  dark?: boolean;
}

export default function SuggestionCard({ suggestions, dark }: Props) {
  const bgColor = dark ? '#16213e' : '#ffffff';
  const textColor = dark ? '#eef' : '#1a1a2e';

  if (!suggestions.length) return null;

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Weather Suggestions</Text>
      <View style={styles.grid}>
        {suggestions.map((s, i) => (
          <View key={i} style={[styles.card, { backgroundColor: dark ? '#1f3060' : '#f0f8ff' }]}>
            <Text style={styles.emoji}>{s.emoji}</Text>
            <Text style={[styles.text, { color: dark ? '#dde' : '#334' }]}>{s.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: 20, padding: 16, marginBottom: 16 },
  title: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  card: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 14, flex: 1, minWidth: '45%' },
  emoji: { fontSize: 22, marginRight: 8 },
  text: { fontSize: 13, flex: 1, lineHeight: 18 },
});
