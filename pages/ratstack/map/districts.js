// Knowing that one day JSON can be loaded fills you with determination.
// import districts from './districts.json' assert {type: 'json'}
import { districts } from './districtsjson.js'
import { enrat } from './enrat/index.js'

const VectorLayer = ol.layer.Vector
const VectorSource = ol.source.Vector
const { Select } = ol.interaction
const { GeoJSON } = ol.format
const { pointerMove } = ol.events.condition
const { Stroke, Style, Fill, Text } = ol.style

const text = (feature) => new Text({
  font: '22px sans-serif',
  overflow: true,
  text: feature.properties.factionName,
  fill: new Fill({color: feature.properties.hex}),
  stroke: new Stroke({color: '#16161D', width: '2'}),
  textAlign: 'center'
})

const style = (feature) => new Style({
  stroke: new Stroke({ color: '#333', width: 2 }),
  fill: new Fill({ color: feature.properties.hex + '66' }),
  text: text(feature)
})

const hoverStyle = (feature) => new Style({
  stroke: new Stroke({ color: '#16161D', width: 4 }),
  fill: new Fill({ color: feature.properties.hex + 'CC' }),
  text: text(feature)
})

export const districtSource = new VectorSource({
  features:
    new GeoJSON({ featureProjection: 'EPSG:3857' })
      .readFeatures(districts)
      .map(enrat)
})

export const districtVector = new VectorLayer({
  source: districtSource,
  style
})

export const hover = new Select({
  condition: pointerMove,
  style: hoverStyle
})
