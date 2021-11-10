import { map } from 'lodash/fp';

export const positions = map(
  ([lng, lat, comment]) => ({lng, lat, comment})
)([
  [-140.9970,69.6443, 'Alaska-Yukon border at Beaufort Sea (QGIS)'],
  [-140.99697,69.88835, 'Alaska-Yukon border N point (QGIS)'],
  [-141.00172,60.30576, 'South corner of NS line of Alaska-Yukon border (QGIS)'],
  [-123.81132,60.00103, 'Intersection of BC, Yukon, NWT borders (QGIS)'],
  [-139.05360,59.99430, 'Intersection of BC, Yukon, Alaska borders (QGIS)'],
  [-120.00068,60.00004, 'Intersection of BC, NWT, Alberta borders (QGIS)'],
  [-110.00546, 59.99900, 'Intersection of Alberta, NWT, Sask borders (QGIS)'],
  [-136.58799,69.40292, 'Yukon-NWT border at Beaufort (QGIS)'],
  [-102.00919,59.99888, 'Sask, Manitoba, NWT (QGIS)'],
  [-94.82658,59.99878, 'Man-Nunavut border at Hudson Bay (QGIS)'],
  [-102.0001,64.2327, 'Corner of Nunavut-NWT border (QGIS)'],
]);


