import { districtVector, select } from "./districts.js"

const { Map, View } = ol
const { Tile } = ol.layer
const { OSM } = ol.source
const { fromLonLat } = ol.proj

const center = [10.01534, 53.571532]
const target = 'map'

export const createMap = () => new Map({
  view: new View({
    center: fromLonLat(center),
    zoom: 10,
    minZoom: 10,
    maxZoom: 13
  }),
  layers: [
    new Tile({
      source: new OSM(),
    }),
    districtVector
  ],
  interactions: [
    select
  ],
  target,
});