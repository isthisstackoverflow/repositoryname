import TileLayer from 'ol/layer/Tile.js'
import OSM from 'ol/source/OSM.js'

export const background = new TileLayer({
  source: new OSM()
})
