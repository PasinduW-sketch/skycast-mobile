import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard } from 'react-native';
import { searchCities } from '../api/geocoding';
import { searchSriLankaCities } from '../api/sri-lanka-places';

interface Suggestion {
  name: string;
  lat: number;
  lon: number;
  country?: string;
  admin?: string;
}

export default function SearchScreen({ navigation }: any) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Suggestion[]>([]);
  const [recent, setRecent] = useState<{ name: string; lat: number; lon: number }[]>([]);
  const [dark, setDark] = useState(false);

  const handleSearch = useCallback(async (text: string) => {
    setQuery(text);
    if (text.length < 2) { setResults([]); return; }
    const res = await searchCities(text);
    setResults(res);
  }, []);

  const selectCity = (name: string, lat: number, lon: number) => {
    Keyboard.dismiss();
    navigation.navigate('Home', { city: name, lat, lon });
  };

  const bg = dark ? '#0f0f23' : '#e8f0fe';
  const cardBg = dark ? '#16213e' : '#ffffff';
  const textColor = dark ? '#eef' : '#1a1a2e';
  const subColor = dark ? '#99a' : '#667';
  const inputBg = dark ? '#1a1a3e' : '#f0f4f8';

  const renderItem = ({ item }: { item: Suggestion }) => (
    <TouchableOpacity style={[styles.item, { backgroundColor: cardBg }]} onPress={() => selectCity(item.name, item.lat, item.lon)}>
      <View>
        <Text style={[styles.itemName, { color: textColor }]}>{item.name}</Text>
        {item.country ? <Text style={[styles.itemSub, { color: subColor }]}>{item.country}{item.admin ? ` · ${item.admin}` : ''}</Text> : null}
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      <TextInput
        style={[styles.input, { backgroundColor: inputBg, color: textColor }]}
        placeholder="Search city or town..."
        placeholderTextColor={subColor}
        value={query}
        onChangeText={handleSearch}
        autoFocus
        returnKeyType="search"
      />
      {results.length > 0 ? (
        <FlatList data={results} keyExtractor={(_, i) => String(i)} renderItem={renderItem} contentContainerStyle={styles.list} />
      ) : query.length >= 2 ? (
        <Text style={[styles.empty, { color: subColor }]}>No results found</Text>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: { margin: 16, padding: 16, borderRadius: 16, fontSize: 16, marginTop: 48 },
  list: { paddingHorizontal: 16 },
  item: { padding: 16, borderRadius: 14, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemName: { fontSize: 16, fontWeight: '600' },
  itemSub: { fontSize: 12, marginTop: 2 },
  arrow: { fontSize: 24, color: '#4a90d9' },
  empty: { textAlign: 'center', marginTop: 40, fontSize: 14 },
});
