interface PlaceEntry {
  keys: string[];
  name: string;
  lat: number;
  lon: number;
}

const SRI_LANKA_PLACES: PlaceEntry[] = [
  // Western Province
  { keys: ['colombo', 'kolamba'], name: 'Colombo', lat: 6.9271, lon: 79.8612 },
  { keys: ['dehiwala', 'dehiwala mount lavinia'], name: 'Dehiwala', lat: 6.8532, lon: 79.8578 },
  { keys: ['mount lavinia', 'mt lavinia'], name: 'Mount Lavinia', lat: 6.8752, lon: 79.8671 },
  { keys: ['moratuwa'], name: 'Moratuwa', lat: 6.7731, lon: 79.8825 },
  { keys: ['sri jayewardenepura', 'kotte', 'sri jayawardenepura'], name: 'Sri Jayewardenepura Kotte', lat: 6.8868, lon: 79.9187 },
  { keys: ['negombo', 'megomuwa'], name: 'Negombo', lat: 7.2083, lon: 79.8358 },
  { keys: ['gampaha'], name: 'Gampaha', lat: 7.0845, lon: 80.0098 },
  { keys: ['kalutara'], name: 'Kalutara', lat: 6.5853, lon: 79.9607 },
  { keys: ['battaramulla'], name: 'Battaramulla', lat: 6.8984, lon: 79.9221 },
  { keys: ['rathmalana', 'ratmalana'], name: 'Ratmalana', lat: 6.8220, lon: 79.8777 },
  { keys: ['nugegoda'], name: 'Nugegoda', lat: 6.8625, lon: 79.8997 },
  { keys: ['maharagama'], name: 'Maharagama', lat: 6.8488, lon: 79.9143 },
  { keys: ['boralesgamuwa'], name: 'Boralesgamuwa', lat: 6.8346, lon: 79.8950 },
  { keys: ['panadura'], name: 'Panadura', lat: 6.7134, lon: 79.9039 },
  { keys: ['jaela', 'ja-ela'], name: 'Ja-Ela', lat: 7.0930, lon: 79.8920 },
  { keys: ['kandana'], name: 'Kandana', lat: 7.0530, lon: 79.8820 },
  { keys: ['wattala'], name: 'Wattala', lat: 6.9884, lon: 79.8899 },
  { keys: ['kelaniya'], name: 'Kelaniya', lat: 6.9553, lon: 79.9222 },
  { keys: ['wellawatta', 'wellawaththa'], name: 'Wellawatta', lat: 6.8744, lon: 79.8621 },
  { keys: ['bambalapitiya'], name: 'Bambalapitiya', lat: 6.8853, lon: 79.8575 },
  { keys: ['kollupitiya', 'colpetty'], name: 'Kollupitiya', lat: 6.8976, lon: 79.8525 },
  { keys: ['slave island', 'kompani vidiya'], name: 'Slave Island', lat: 6.9186, lon: 79.8470 },
  { keys: ['horethuduwa'], name: 'Horathuduwa', lat: 6.6500, lon: 79.9700 },
  { keys: ['horana'], name: 'Horana', lat: 6.7200, lon: 80.0600 },
  { keys: ['ingiriya'], name: 'Ingiriya', lat: 6.7300, lon: 80.1600 },
  { keys: ['minuwangoda'], name: 'Minuwangoda', lat: 7.1667, lon: 79.9583 },
  { keys: ['veyangoda'], name: 'Veyangoda', lat: 7.1500, lon: 80.0500 },
  { keys: ['divulapitiya'], name: 'Divulapitiya', lat: 7.2333, lon: 80.0000 },
  { keys: ['meepe'], name: 'Meepe', lat: 6.8200, lon: 80.0400 },
  { keys: ['padukka'], name: 'Padukka', lat: 6.8400, lon: 80.0800 },

  // Central Province
  { keys: ['kandy', 'mahanuwara'], name: 'Kandy', lat: 7.2906, lon: 80.6337 },
  { keys: ['matale'], name: 'Matale', lat: 7.4694, lon: 80.6233 },
  { keys: ['nuwara eliya', 'nuwaraeliya'], name: 'Nuwara Eliya', lat: 6.9707, lon: 80.7829 },
  { keys: ['gampola'], name: 'Gampola', lat: 7.1667, lon: 80.5667 },
  { keys: ['nawalapitiya'], name: 'Nawalapitiya', lat: 7.0500, lon: 80.5333 },
  { keys: ['talawakelle'], name: 'Talawakelle', lat: 6.9370, lon: 80.6570 },
  { keys: ['hatton'], name: 'Hatton', lat: 6.8990, lon: 80.5980 },
  { keys: ['maskeliya'], name: 'Maskeliya', lat: 6.8333, lon: 80.5667 },
  { keys: ['kadugannawa'], name: 'Kadugannawa', lat: 7.2667, lon: 80.5167 },
  { keys: ['peradeniya'], name: 'Peradeniya', lat: 7.2667, lon: 80.6000 },
  { keys: ['wattegama', 'wattegama central'], name: 'Wattegama', lat: 7.3500, lon: 80.6833 },
  { keys: ['akurana'], name: 'Akurana', lat: 7.3667, lon: 80.6167 },
  { keys: ['digana'], name: 'Digana', lat: 7.2833, lon: 80.7333 },
  { keys: ['teldeniya'], name: 'Teldeniya', lat: 7.3000, lon: 80.7667 },
  { keys: ['dambulla'], name: 'Dambulla', lat: 7.8600, lon: 80.6500 },
  { keys: ['sigiriya'], name: 'Sigiriya', lat: 7.9570, lon: 80.7600 },
  { keys: ['habarana'], name: 'Habarana', lat: 8.0436, lon: 80.7425 },
  { keys: ['naula'], name: 'Naula', lat: 7.7000, lon: 80.6500 },
  { keys: ['ratthota'], name: 'Rattota', lat: 7.5167, lon: 80.6667 },
  { keys: ['wilgamuwa'], name: 'Wilgamuwa', lat: 7.3500, lon: 80.8333 },
  { keys: ['ambanpola'], name: 'Ambanpola', lat: 7.9000, lon: 80.5000 },
  { keys: ['lindula'], name: 'Lindula', lat: 6.9167, lon: 80.6833 },
  { keys: ['agarapathana', 'agrapatana'], name: 'Agarapathana', lat: 6.8730, lon: 80.6900 },
  { keys: ['nildandahinna'], name: 'Nildandahinna', lat: 7.0000, lon: 80.8500 },
  { keys: ['kothmale', 'kotmale'], name: 'Kotmale', lat: 7.0000, lon: 80.6000 },
  { keys: ['pundaluoya'], name: 'Pundaluoya', lat: 6.9700, lon: 80.6600 },

  // Southern Province
  { keys: ['galle'], name: 'Galle', lat: 6.0535, lon: 80.2210 },
  { keys: ['matara'], name: 'Matara', lat: 5.9549, lon: 80.5550 },
  { keys: ['hambantota'], name: 'Hambantota', lat: 6.1429, lon: 81.1190 },
  { keys: ['bentota'], name: 'Bentota', lat: 6.4260, lon: 80.0054 },
  { keys: ['hikkaduwa'], name: 'Hikkaduwa', lat: 6.1471, lon: 80.1011 },
  { keys: ['unawatuna'], name: 'Unawatuna', lat: 6.0186, lon: 80.2506 },
  { keys: ['weligama'], name: 'Weligama', lat: 5.9700, lon: 80.4200 },
  { keys: ['mirissa'], name: 'Mirissa', lat: 5.9460, lon: 80.4530 },
  { keys: ['ahangama'], name: 'Ahangama', lat: 5.9750, lon: 80.3625 },
  { keys: ['koggala', 'koggala beach'], name: 'Koggala', lat: 5.9900, lon: 80.3267 },
  { keys: ['dikwella', 'dickwella'], name: 'Dikwella', lat: 5.9667, lon: 80.6833 },
  { keys: ['tanggalle', 'tangalla', 'tangalle'], name: 'Tangalle', lat: 6.0333, lon: 80.7833 },
  { keys: ['ambalangoda'], name: 'Ambalangoda', lat: 6.2333, lon: 80.0500 },
  { keys: ['balapitiya'], name: 'Balapitiya', lat: 6.2667, lon: 80.0333 },
  { keys: ['deniyaya'], name: 'Deniyaya', lat: 6.3319, lon: 80.5583 },
  { keys: ['hakmana'], name: 'Hakmana', lat: 6.0833, lon: 80.6500 },
  { keys: ['kamburupitiya'], name: 'Kamburupitiya', lat: 6.0833, lon: 80.5500 },
  { keys: ['tissamaharama', 'tissa'], name: 'Tissamaharama', lat: 6.2833, lon: 81.2833 },
  { keys: ['kataragama'], name: 'Kataragama', lat: 6.4167, lon: 81.3333 },
  { keys: ['beliatta'], name: 'Beliatta', lat: 6.0500, lon: 80.7333 },
  { keys: ['urubokka', 'urubokke'], name: 'Urubokka', lat: 6.3000, lon: 80.6333 },
  { keys: ['alutgama', 'aluthgama'], name: 'Aluthgama', lat: 6.4333, lon: 80.0000 },

  // Eastern Province
  { keys: ['trincomalee', 'trinco'], name: 'Trincomalee', lat: 8.5874, lon: 81.2152 },
  { keys: ['batticaloa', 'batti'], name: 'Batticaloa', lat: 7.7102, lon: 81.6924 },
  { keys: ['kalmunai'], name: 'Kalmunai', lat: 7.4167, lon: 81.8167 },
  { keys: ['ampara'], name: 'Ampara', lat: 7.2874, lon: 81.6685 },
  { keys: ['kinniya'], name: 'Kinniya', lat: 8.4833, lon: 81.1833 },
  { keys: ['muttur'], name: 'Muttur', lat: 8.4000, lon: 81.2667 },
  { keys: ['kantalai', 'kantale'], name: 'Kantale', lat: 8.3667, lon: 81.0000 },
  { keys: ['nilaveli'], name: 'Nilaveli', lat: 8.6833, lon: 81.1833 },
  { keys: ['eravur'], name: 'Eravur', lat: 7.7750, lon: 81.6000 },
  { keys: ['kalkudah'], name: 'Kalkudah', lat: 7.8833, lon: 81.5500 },
  { keys: ['passikudah', 'pasikuda'], name: 'Passikudah', lat: 7.9167, lon: 81.5333 },
  { keys: ['valachchenai'], name: 'Valachchenai', lat: 7.6333, lon: 81.7667 },
  { keys: ['oddamavadi'], name: 'Oddamavadi', lat: 7.4333, lon: 81.7333 },
  { keys: ['pottuvil'], name: 'Pottuvil', lat: 6.8833, lon: 81.8333 },
  { keys: ['arugam bay'], name: 'Arugam Bay', lat: 6.8500, lon: 81.8333 },
  { keys: ['addalachchenai', 'addalaichenai'], name: 'Addalachchenai', lat: 7.3000, lon: 81.7333 },
  { keys: ['samanthurai', 'sammanthurai'], name: 'Samanthurai', lat: 7.3667, lon: 81.7833 },
  { keys: ['dehiattakandiya'], name: 'Dehiattakandiya', lat: 7.5833, lon: 81.2333 },
  { keys: ['maha oya'], name: 'Maha Oya', lat: 7.5667, lon: 81.3667 },
  { keys: ['damana'], name: 'Damana', lat: 7.4167, lon: 81.6500 },
  { keys: ['navithanveli'], name: 'Navithanveli', lat: 7.5333, lon: 81.7000 },
  { keys: ['chenkaladi'], name: 'Chenkaladi', lat: 7.7500, lon: 81.6167 },
  { keys: ['vakarai'], name: 'Vakarai', lat: 8.1333, lon: 81.4333 },

  // Northern Province
  { keys: ['jaffna', 'yapanaya'], name: 'Jaffna', lat: 9.6615, lon: 80.0255 },
  { keys: ['mannar'], name: 'Mannar', lat: 8.9825, lon: 79.9138 },
  { keys: ['vavuniya'], name: 'Vavuniya', lat: 8.7550, lon: 80.4975 },
  { keys: ['kilinochchi'], name: 'Kilinochchi', lat: 9.3861, lon: 80.4090 },
  { keys: ['mullaitivu', 'mullaittivu', 'mullativu'], name: 'Mullaitivu', lat: 9.2670, lon: 80.8140 },
  { keys: ['point pedro'], name: 'Point Pedro', lat: 9.8167, lon: 80.2333 },
  { keys: ['chavakachcheri', 'chavakacheri'], name: 'Chavakachcheri', lat: 9.6500, lon: 80.1500 },
  { keys: ['tellippalai'], name: 'Tellippalai', lat: 9.7833, lon: 80.0333 },
  { keys: ['nallur'], name: 'Nallur', lat: 9.6667, lon: 80.0333 },
  { keys: ['kodikamam'], name: 'Kodikamam', lat: 9.6000, lon: 80.1000 },
  { keys: ['velanai', 'velanaitheevu'], name: 'Velanai', lat: 9.6500, lon: 79.9000 },
  { keys: ['karainagar'], name: 'Karainagar', lat: 9.7333, lon: 79.8833 },
  { keys: ['kayts'], name: 'Kayts', lat: 9.6833, lon: 79.8667 },
  { keys: ['thalaimannar', 'talaimannar'], name: 'Thalaimannar', lat: 9.1000, lon: 79.7167 },
  { keys: ['madhu'], name: 'Madhu', lat: 8.8500, lon: 80.2000 },
  { keys: ['nedunkeni'], name: 'Nedunkeni', lat: 9.0833, lon: 80.3000 },
  { keys: ['oddisuddan'], name: 'Oddusuddan', lat: 9.1167, lon: 80.3667 },
  { keys: ['puliyankulam'], name: 'Puliyankulam', lat: 8.9167, lon: 80.4333 },
  { keys: ['mankulam'], name: 'Mankulam', lat: 9.0833, lon: 80.4500 },
  { keys: ['omanthai', 'omantai'], name: 'Omantai', lat: 8.9500, lon: 80.5000 },
  { keys: ['pesalai'], name: 'Pesalai', lat: 9.0500, lon: 79.8167 },
  { keys: ['adampan'], name: 'Adampan', lat: 8.9167, lon: 79.9333 },
  { keys: ['nanattan', 'nanatan'], name: 'Nanattan', lat: 8.9333, lon: 79.9833 },

  // North Western Province
  { keys: ['kurunegala'], name: 'Kurunegala', lat: 7.4818, lon: 80.3623 },
  { keys: ['puttalam'], name: 'Puttalam', lat: 8.0412, lon: 79.8484 },
  { keys: ['kuliyapitiya'], name: 'Kuliyapitiya', lat: 7.4667, lon: 80.0500 },
  { keys: ['nikaweratiya'], name: 'Nikaweratiya', lat: 7.7500, lon: 80.1167 },
  { keys: ['chilaw'], name: 'Chilaw', lat: 7.5833, lon: 79.8000 },
  { keys: ['wennappuwa'], name: 'Wennappuwa', lat: 7.3500, lon: 79.8333 },
  { keys: ['mawathagama'], name: 'Mawathagama', lat: 7.4667, lon: 80.4833 },
  { keys: ['nawagattegama'], name: 'Nawagattegama', lat: 7.9500, lon: 80.0500 },
  { keys: ['anamaduwa'], name: 'Anamaduwa', lat: 7.8833, lon: 80.0000 },
  { keys: ['kalpitiya'], name: 'Kalpitiya', lat: 8.2333, lon: 79.7833 },
  { keys: ['marawila'], name: 'Marawila', lat: 7.4167, lon: 79.8333 },
  { keys: ['dankotuwa'], name: 'Dankotuwa', lat: 7.2833, lon: 79.8833 },
  { keys: ['mundalama'], name: 'Mundalama', lat: 8.1000, lon: 79.8333 },
  { keys: ['narammala'], name: 'Narammala', lat: 7.4333, lon: 80.2167 },
  { keys: ['pannala'], name: 'Pannala', lat: 7.3000, lon: 80.2167 },
  { keys: ['maho', 'maho junction'], name: 'Maho', lat: 7.8167, lon: 80.2667 },
  { keys: ['galgamuwa'], name: 'Galgamuwa', lat: 7.9833, lon: 80.2667 },
  { keys: ['wariyapola'], name: 'Wariyapola', lat: 7.6333, lon: 80.2333 },
  { keys: ['bingiriya'], name: 'Bingiriya', lat: 7.6000, lon: 80.0167 },
  { keys: ['nattandiya'], name: 'Nattandiya', lat: 7.4000, lon: 79.8667 },

  // North Central Province
  { keys: ['anuradhapura'], name: 'Anuradhapura', lat: 8.3114, lon: 80.4037 },
  { keys: ['polonnaruwa'], name: 'Polonnaruwa', lat: 7.9403, lon: 81.0188 },
  { keys: ['medawachchiya'], name: 'Medawachchiya', lat: 8.5333, lon: 80.4667 },
  { keys: ['tambuttegama'], name: 'Tambuttegama', lat: 8.3000, lon: 80.4667 },
  { keys: ['mihintale'], name: 'Mihintale', lat: 8.3500, lon: 80.5000 },
  { keys: ['horowpatana', 'horowpathana', 'horowpothana'], name: 'Horowpathana', lat: 8.5167, lon: 80.8833 },
  { keys: ['kebithigollewa'], name: 'Kebithigollewa', lat: 8.5167, lon: 80.6667 },
  { keys: ['kekirawa'], name: 'Kekirawa', lat: 8.0333, lon: 80.6000 },
  { keys: ['padaviya'], name: 'Padaviya', lat: 8.8167, lon: 80.7333 },
  { keys: ['galenbindunuwewa'], name: 'Galenbindunuwewa', lat: 8.4333, lon: 80.8167 },
  { keys: ['rajanganaya', 'rajangana'], name: 'Rajanganaya', lat: 8.1667, lon: 80.3333 },
  { keys: ['thirappane'], name: 'Thirappane', lat: 8.2167, lon: 80.6833 },

  // Uva Province
  { keys: ['badulla'], name: 'Badulla', lat: 6.9934, lon: 81.0550 },
  { keys: ['bandarawela'], name: 'Bandarawela', lat: 6.8333, lon: 80.9833 },
  { keys: ['ella'], name: 'Ella', lat: 6.8667, lon: 81.0500 },
  { keys: ['haputale'], name: 'Haputale', lat: 6.7667, lon: 80.9667 },
  { keys: ['diyatalawa', 'diyathalawa'], name: 'Diyatalawa', lat: 6.8167, lon: 80.9667 },
  { keys: ['wellawaya'], name: 'Wellawaya', lat: 6.7333, lon: 81.1000 },
  { keys: ['monaragala', 'moneragala'], name: 'Monaragala', lat: 6.8667, lon: 81.3500 },
  { keys: ['bibile'], name: 'Bibile', lat: 7.1667, lon: 81.2167 },
  { keys: ['mahiyanganaya'], name: 'Mahiyanganaya', lat: 7.3333, lon: 81.0000 },
  { keys: ['passara'], name: 'Passara', lat: 6.9333, lon: 81.1500 },
  { keys: ['lunugala'], name: 'Lunugala', lat: 6.9667, lon: 81.1667 },
  { keys: ['buttala'], name: 'Buttala', lat: 6.7500, lon: 81.2667 },
  { keys: ['tanamalwila', 'tanamalvila'], name: 'Tanamalwila', lat: 6.4333, lon: 81.1333 },
  { keys: ['siyambalanduwa'], name: 'Siyambalanduwa', lat: 6.9167, lon: 81.5333 },

  // Sabaragamuwa Province
  { keys: ['ratnapura'], name: 'Ratnapura', lat: 6.7056, lon: 80.3848 },
  { keys: ['kegalle'], name: 'Kegalle', lat: 7.2523, lon: 80.3460 },
  { keys: ['balangoda'], name: 'Balangoda', lat: 6.6500, lon: 80.6833 },
  { keys: ['embilipitiya'], name: 'Embilipitiya', lat: 6.3500, lon: 80.8500 },
  { keys: ['awissawella'], name: 'Awissawella', lat: 6.9500, lon: 80.2167 },
  { keys: ['deraniyagala'], name: 'Deraniyagala', lat: 6.9333, lon: 80.3333 },
  { keys: ['galigamuwa'], name: 'Galigamuwa', lat: 7.2000, lon: 80.3333 },
  { keys: ['warakapola'], name: 'Warakapola', lat: 7.2333, lon: 80.2000 },
  { keys: ['mawanella'], name: 'Mawanella', lat: 7.2500, lon: 80.4333 },
  { keys: ['aranayake'], name: 'Aranayake', lat: 7.1500, lon: 80.4500 },
  { keys: ['dehiowita'], name: 'Dehiowita', lat: 6.9833, lon: 80.2667 },
  { keys: ['kiriella'], name: 'Kiriella', lat: 6.7500, lon: 80.3500 },
  { keys: ['kolonna'], name: 'Kolonna', lat: 6.4000, lon: 80.6833 },
  { keys: ['kuruwita'], name: 'Kuruwita', lat: 6.7833, lon: 80.3667 },
  { keys: ['niwithigala'], name: 'Niwithigala', lat: 6.5333, lon: 80.5000 },
  { keys: ['pelmadulla'], name: 'Pelmadulla', lat: 6.6167, lon: 80.5000 },
  { keys: ['godakawela'], name: 'Godakawela', lat: 6.5500, lon: 80.6500 },
  { keys: ['kahawatta', 'kahawatte'], name: 'Kahawatta', lat: 6.6000, lon: 80.5667 },
  { keys: ['yatiyantota'], name: 'Yatiyantota', lat: 7.0167, lon: 80.3000 },

  // Additional notable places
  { keys: ['kitulgala'], name: 'Kitulgala', lat: 6.9920, lon: 80.4100 },
  { keys: ['adam peak', 'sri pada', 'sripada'], name: "Adam's Peak", lat: 6.8167, lon: 80.5000 },
  { keys: ['yala', 'yala national park'], name: 'Yala', lat: 6.3724, lon: 81.5180 },
  { keys: ['wilpattu', 'wilpattu national park'], name: 'Wilpattu', lat: 8.4333, lon: 80.0000 },
  { keys: ['sinharaja', 'sinharaja forest'], name: 'Sinharaja', lat: 6.4167, lon: 80.4167 },
  { keys: ['horton plains'], name: 'Horton Plains', lat: 6.8167, lon: 80.8000 },
  { keys: ['knuckles', 'knuckles range'], name: 'Knuckles', lat: 7.3833, lon: 80.8500 },
  { keys: ['pinnawala', 'pinnawala elephant'], name: 'Pinnawala', lat: 7.3000, lon: 80.3833 },
];

const lookup = new Map<string, { name: string; lat: number; lon: number }>();
SRI_LANKA_PLACES.forEach(p => p.keys.forEach(k => lookup.set(k.toLowerCase(), { name: p.name, lat: p.lat, lon: p.lon })));

export function getSriLankaCity(query: string): { name: string; lat: number; lon: number } | null {
  return lookup.get(query.toLowerCase().trim()) ?? null;
}

export function searchSriLankaCities(query: string): { name: string; lat: number; lon: number }[] {
  const q = query.toLowerCase().trim();
  if (!q || q.length < 2) return [];
  const seen = new Set<string>();
  const results: { name: string; lat: number; lon: number }[] = [];
  SRI_LANKA_PLACES.forEach(p => {
    if (p.keys.some(k => k.includes(q))) {
      const key = p.name.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        results.push({ name: p.name, lat: p.lat, lon: p.lon });
      }
    }
  });
  return results.slice(0, 10);
}

export function getAllSriLankaPlaces(): { name: string; lat: number; lon: number }[] {
  return SRI_LANKA_PLACES.map(p => ({ name: p.name, lat: p.lat, lon: p.lon }));
}
