import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface Props {
  dark?: boolean;
}

export default function LoadingSkeleton({ dark }: Props) {
  const bg = dark ? '#1a1a2e' : '#f0f4f8';
  const cardBg = dark ? '#16213e' : '#ffffff';
  const shimmer = dark ? '#1f3060' : '#e0e8f0';
  const textColor = dark ? '#aab' : '#889';

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <View style={styles.header}>
        <View style={[styles.titleBlock, { backgroundColor: shimmer }]} />
        <View style={[styles.subtitleBlock, { backgroundColor: shimmer }]} />
      </View>
      <View style={[styles.mainCard, { backgroundColor: cardBg }]}>
        <ActivityIndicator size="large" color="#4a90d9" />
        <Text style={[styles.loadingText, { color: textColor }]}>Loading weather...</Text>
      </View>
      <View style={styles.row}>
        {[1, 2, 3].map(i => (
          <View key={i} style={[styles.miniCard, { backgroundColor: cardBg }]}>
            <View style={[styles.iconCircle, { backgroundColor: shimmer }]} />
            <View style={[styles.smallBlock, { backgroundColor: shimmer }]} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { marginBottom: 24, marginTop: 40 },
  titleBlock: { width: '60%', height: 32, borderRadius: 8, marginBottom: 8 },
  subtitleBlock: { width: '40%', height: 18, borderRadius: 6 },
  mainCard: { borderRadius: 20, padding: 40, alignItems: 'center', marginBottom: 24 },
  loadingText: { marginTop: 12, fontSize: 14 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  miniCard: { flex: 1, marginHorizontal: 4, borderRadius: 16, padding: 16, alignItems: 'center' },
  iconCircle: { width: 36, height: 36, borderRadius: 18, marginBottom: 8 },
  smallBlock: { width: '70%', height: 14, borderRadius: 4 },
});
