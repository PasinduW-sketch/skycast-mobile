import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getWeatherInfo, getIconUrl } from '../utils/weather-codes';
import * as Storage from '../storage';
import type { FavoriteCity } from '../types';
import { Image } from 'react-native';

export default function FavoritesScreen({ navigation }: any) {
  const [favorites, setFavorites] = useState<FavoriteCity[]>([]);
  const [dark, setDark] = useState(false);

  useFocusEffect(useCallback(() => {
    (async () => {
      const f = await Storage.getFavorites();
      setFavorites(f);
      const t = await Storage.getTheme();
      setDark(t === 'dark');
    })();
  }, []));

  const bg = dark ? '#0f0f23' : '#e8f0fe';
  const cardBg = dark ? '#16213e' : '#ffffff';
  const textColor = dark ? '#eef' : '#1a1a2e';
  const subColor = dark ? '#99a' : '#667';

  const renderItem = ({ item }: { item: FavoriteCity }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: cardBg }]}
      onPress={() => navigation.navigate('Home', { city: item.name, lat: item.lat, lon: item.lon })}
    >
      {item.icon ? <Image source={{ uri: getIconUrl(item.icon) }} style={styles.icon} /> : null}
      <View style={styles.info}>
        <Text style={[styles.name, { color: textColor }]}>{item.name}</Text>
        {item.temp !== undefined ? (
          <Text style={[styles.temp, { color: subColor }]}>{item.temp}°</Text>
        ) : null}
      </View>
      <TouchableOpacity onPress={async () => { await Storage.removeFavorite(item.name); setFavorites(await Storage.getFavorites()); }}>
        <Text style={styles.remove}>✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      {favorites.length === 0 ? (
        <View style={styles.empty}>
          <Text style={[styles.emptyText, { color: subColor }]}>No favorites yet</Text>
          <Text style={[styles.emptySub, { color: subColor }]}>Search for a city and add it to your favorites!</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16 },
  card: { borderRadius: 16, padding: 16, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  icon: { width: 40, height: 40 },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: '600' },
  temp: { fontSize: 14, marginTop: 2 },
  remove: { fontSize: 18, color: '#ff4444', padding: 8 },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, fontWeight: '600' },
  emptySub: { fontSize: 14, marginTop: 8, textAlign: 'center', paddingHorizontal: 40 },
});
