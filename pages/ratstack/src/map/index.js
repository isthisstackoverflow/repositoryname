import Map from 'ol/Map.js'
import View from 'ol/View.js'
import { fromLonLat } from 'ol/proj'

import { districtVector, select } from './districts'
import { background } from './background'

const center = [10.01534, 53.571532]
const target = 'map'

// BEHOLD! THE SINGLETON!
export const map = new Map({
  layers: [background, districtVector],
  target,
  controls: [],
  view: new View({
    center: fromLonLat(center),
    zoom: 10,
    minZoom: 10,
    maxZoom: 13
  })
})

map.addInteraction(select)
