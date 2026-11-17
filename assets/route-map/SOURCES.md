# Route map sources

Place coordinates: Nominatim / OpenStreetMap, retrieved 2026-11-17. Ebina outbound: https://www.navitime.co.jp/poi?spot=02007-00000000229

Road geometry: https://router.project-osrm.org/route/v1/driving/ — full GeoJSON using ordered stops, saved locally. Car profile; does not validate coach restrictions or live traffic. Distances are approximate route lengths, not scheduled travel times.

Map tiles: https://tile.openstreetmap.org/{z}/{x}/{y}.png. © OpenStreetMap contributors, https://www.openstreetmap.org/copyright

Leaflet 1.9.4: https://leafletjs.com/reference-1.9.4.html (BSD-2-Clause; vendor/LICENSE).

Google Maps URLs: https://developers.google.com/maps/documentation/urls/guide

Original geocoding records:
```json
{
  "narita": {
    "place_id": 263816157,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "way",
    "osm_id": 117802100,
    "lat": "35.7630960",
    "lon": "140.3863713",
    "category": "aeroway",
    "type": "terminal",
    "place_rank": 30,
    "importance": 0.00005912489509417895,
    "addresstype": "aeroway",
    "name": "成田空港第1ターミナル",
    "display_name": "成田空港第1ターミナル, 空港東通り, 古込, 成田市, 千葉県, 286-8585, 日本",
    "boundingbox": [
      "35.7586264",
      "35.7675571",
      "140.3820635",
      "140.3907476"
    ]
  },
  "nikko": {
    "place_id": 264456973,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "way",
    "osm_id": 321575117,
    "lat": "35.7839920",
    "lon": "140.3793906",
    "category": "landuse",
    "type": "commercial",
    "place_rank": 24,
    "importance": 0.30723887866744215,
    "addresstype": "commercial",
    "name": "ホテル日航成田",
    "display_name": "ホテル日航成田, 取香, 成田市, 千葉県, 286-8585, 日本",
    "boundingbox": [
      "35.7828898",
      "35.7850109",
      "140.3778344",
      "140.3808267"
    ]
  },
  "ebina": {
    "lat": "35.431216",
    "lon": "139.401746",
    "name": "Ebina SA (outbound)",
    "source": "https://www.navitime.co.jp/poi?spot=02007-00000000229"
  },
  "baien": {
    "place_id": 261345847,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "way",
    "osm_id": 564171834,
    "lat": "35.0982716",
    "lon": "139.0589567",
    "category": "leisure",
    "type": "garden",
    "place_rank": 25,
    "importance": 0.19938740066310082,
    "addresstype": "garden",
    "name": "熱海梅園",
    "display_name": "熱海梅園, 梅園町, 熱海市, 静岡県, 413-0000, 日本",
    "boundingbox": [
      "35.0970595",
      "35.0995841",
      "139.0575459",
      "139.0608489"
    ]
  },
  "komuro": {
    "place_id": 265051077,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "way",
    "osm_id": 561435184,
    "lat": "34.9410705",
    "lon": "139.1265124",
    "category": "leisure",
    "type": "park",
    "place_rank": 24,
    "importance": 0.08005608987563895,
    "addresstype": "park",
    "name": "小室山公園",
    "display_name": "小室山公園, 川奈, 伊東市, 静岡県, 日本",
    "boundingbox": [
      "34.9402136",
      "34.9423713",
      "139.1250582",
      "139.1284259"
    ]
  },
  "anjin": {
    "place_id": 263916822,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 6277614525,
    "lat": "34.9714061",
    "lon": "139.1010844",
    "category": "tourism",
    "type": "hotel",
    "place_rank": 30,
    "importance": 0.00005608987563892603,
    "addresstype": "tourism",
    "name": "星野リゾート 界 アンジン",
    "display_name": "星野リゾート 界 アンジン, 5-12, 渚町, 伊東市, 静岡県, 414-0023, 日本",
    "boundingbox": [
      "34.9713561",
      "34.9714561",
      "139.1010344",
      "139.1011344"
    ]
  },
  "jogasaki": {
    "place_id": 261683346,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "way",
    "osm_id": 136406319,
    "lat": "34.8905304",
    "lon": "139.1387489",
    "category": "bridge",
    "type": "yes",
    "place_rank": 30,
    "importance": 0.00005608987563892603,
    "addresstype": "bridge",
    "name": "門脇吊橋",
    "display_name": "門脇吊橋, 伊東川奈八幡野線, 川奈, 伊東市, 静岡県, 414-0051, 日本",
    "boundingbox": [
      "34.8903756",
      "34.8906852",
      "139.1386883",
      "139.1388095"
    ]
  },
  "shirahama": {
    "place_id": 265247741,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 5116802726,
    "lat": "34.6932719",
    "lon": "138.9720747",
    "category": "highway",
    "type": "bus_stop",
    "place_rank": 30,
    "importance": 0.00005562447547107679,
    "addresstype": "highway",
    "name": "白浜神社",
    "display_name": "白浜神社, 東伊豆道路, 原田, 白浜, 下田市, 静岡県, 415-8501, 日本",
    "boundingbox": [
      "34.6932219",
      "34.6933219",
      "138.9720247",
      "138.9721247"
    ]
  },
  "perry": {
    "place_id": 263900439,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "way",
    "osm_id": 659304163,
    "lat": "34.6716191",
    "lon": "138.9434580",
    "category": "highway",
    "type": "residential",
    "place_rank": 26,
    "importance": 0.05338895780880442,
    "addresstype": "residential",
    "name": "ペリーロード",
    "display_name": "ペリーロード, 三丁目, 武ガ浜, 下田市, 静岡県, 415-8501, 日本",
    "boundingbox": [
      "34.6713007",
      "34.6719869",
      "138.9427139",
      "138.9442195"
    ]
  },
  "shuzenji": {
    "place_id": 263920929,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 4470730097,
    "lat": "34.9715281",
    "lon": "138.9275728",
    "category": "amenity",
    "type": "place_of_worship",
    "place_rank": 30,
    "importance": 0.000055767910276905735,
    "addresstype": "amenity",
    "name": "修禅寺",
    "display_name": "修禅寺, 964, 修善寺, 伊豆市, 静岡県, 410-2416, 日本",
    "boundingbox": [
      "34.9714781",
      "34.9715781",
      "138.9275228",
      "138.9276228"
    ]
  },
  "kakitagawa": {
    "place_id": 264726194,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 3168471866,
    "lat": "35.1076095",
    "lon": "138.9012026",
    "category": "leisure",
    "type": "park",
    "place_rank": 24,
    "importance": 0.0800519317921721,
    "addresstype": "park",
    "name": "柿田川公園",
    "display_name": "柿田川公園, 八幡, 清水町, 駿東郡, 静岡県, 411-0907, 日本",
    "boundingbox": [
      "35.1075595",
      "35.1076595",
      "138.9011526",
      "138.9012526"
    ]
  },
  "skywalk": {
    "place_id": 264634272,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "way",
    "osm_id": 386670251,
    "lat": "35.1521972",
    "lon": "138.9805875",
    "category": "highway",
    "type": "footway",
    "place_rank": 27,
    "importance": 0.19619210675062,
    "addresstype": "road",
    "name": "三島スカイウォーク",
    "display_name": "三島スカイウォーク, 笹原新田, 三島市, 静岡県, 411-0012, 日本",
    "boundingbox": [
      "35.1503305",
      "35.1540636",
      "138.9803493",
      "138.9808226"
    ]
  },
  "ginza": {
    "place_id": 261877082,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 4501131334,
    "lat": "35.6732755",
    "lon": "139.7690493",
    "category": "tourism",
    "type": "hotel",
    "place_rank": 30,
    "importance": 0.00008593499656667457,
    "addresstype": "tourism",
    "name": "ダイワロイネットホテル銀座プレミア",
    "display_name": "ダイワロイネットホテル銀座プレミア, 15, 銀座一丁目, 銀座, 中央区, 東京都, 140-0061, 日本",
    "boundingbox": [
      "35.6732255",
      "35.6733255",
      "139.7689993",
      "139.7690993"
    ]
  },
  "disney": {
    "place_id": 263273203,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "way",
    "osm_id": 1282875870,
    "lat": "35.6326586",
    "lon": "139.8814172",
    "category": "tourism",
    "type": "theme_park",
    "place_rank": 30,
    "importance": 0.543377918638976,
    "addresstype": "tourism",
    "name": "東京ディズニーランド",
    "display_name": "東京ディズニーランド, 舞浜(大字), 舞浜, 浦安市, 千葉県, 279-0031, 日本",
    "boundingbox": [
      "35.6289578",
      "35.6363634",
      "139.8750438",
      "139.8872444"
    ]
  },
  "haneda": {
    "place_id": 264844423,
    "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
    "osm_type": "node",
    "osm_id": 2496988966,
    "lat": "35.5438875",
    "lon": "139.7686524",
    "category": "railway",
    "type": "station",
    "place_rank": 30,
    "importance": 0.4099433336060744,
    "addresstype": "railway",
    "name": "羽田空港第3ターミナル",
    "display_name": "羽田空港第3ターミナル, Monorial Way, 羽田空港, 大田区, 東京都, 144-0041, 日本",
    "boundingbox": [
      "35.5388875",
      "35.5488875",
      "139.7636524",
      "139.7736524"
    ]
  }
}
```
