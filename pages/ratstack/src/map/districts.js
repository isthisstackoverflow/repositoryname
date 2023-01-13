import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import Select from 'ol/interaction/Select.js'
import GeoJSON from 'ol/format/GeoJSON.js'
import { pointerMove } from 'ol/events/condition'
import { Stroke, Style, Fill } from 'ol/style.js'

import districts from '../data/districts.json'

const style = new Style({
  stroke: new Stroke({ color: '#333', width: 1 }),
  fill: new Fill({ color: 'rgba(255,255,255,0)' })
})

const hoverStyle = new Style({
  stroke: new Stroke({ color: '#333', width: 3 }),
  fill: new Fill({ color: 'rgba(255,255,255,0.0)' })
})

export const districtSource = new VectorSource({
  features: (new GeoJSON({ featureProjection: 'EPSG:3857' })).readFeatures(districts)
})

export const districtVector = new VectorLayer({
  source: districtSource,
  style
})

export const select = new Select({
  condition: pointerMove,
  style: hoverStyle
})
