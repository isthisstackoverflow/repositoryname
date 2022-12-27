import 'ol/ol.css'

import Map from 'ol/Map.js'
import View from 'ol/View.js'
import { fromLonLat } from 'ol/proj'

import { districtVector, select } from './districts'
import { background } from './background'

const center = [10.01534, 53.571532]
const target = 'map'

const map = new Map({
  layers: [background, districtVector],
  target,
  // explicitly no zoom control, doing that separately in React
  controls: [],
  view: new View({
    center: fromLonLat(center),
    zoom: 10,
    minZoom: 10,
    maxZoom: 13
  })
})

map.addInteraction(select)

export default map
