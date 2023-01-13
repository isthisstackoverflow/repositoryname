// Knowing that one day JSON can be loaded fills you with determination.
// import districts from './districts.json' assert {type: 'json'}
import { districts } from './districtsjson.js'

const VectorLayer = ol.layer.Vector
const VectorSource = ol.source.Vector
const { Select } = ol.interaction
const { GeoJSON } = ol.format
const { pointerMove } = ol.events.condition
const { Stroke, Style, Fill } = ol.style

const style = new Style({
  stroke: new Stroke({ color: '#333', width: 1 }),
  fill: new Fill({ color: 'rgba(255,255,255,0)' })
})

const hoverStyle = new Style({
  stroke: new Stroke({ color: '#000', width: 3 }),
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
