const { Map, View } = ol
const { Tile } = ol.layer
const { OSM } = ol.source

new Map({
  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
  layers: [
    new Tile({
      source: new OSM(),
    }),
  ],
  target: 'map',
});