import VectorLayer from 'ol/layer/Vector.js'
import VectorSource from 'ol/source/Vector.js'
import GeoJSON from 'ol/format/GeoJSON.js'

import districts from '../data/districts.json'

// TODO unite district faction-wise, show faction name
export const districtSource = new VectorSource({
  features: (new GeoJSON({
    featureProjection: 'EPSG:3857'
  })).readFeatures(districts)
})

export const districtVector = new VectorLayer({
  source: districtSource
})
