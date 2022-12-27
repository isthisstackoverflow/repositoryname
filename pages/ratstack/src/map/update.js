import { Style, Stroke, Fill, Text } from 'ol/style'

import map from './index'
import { districtSource } from './districts'

import { animateDuration as duration } from '../lib/constants'
import { districtIndex } from '../data/districtRelations'

/**
 * TODO test
 * Updates the ol map zoom boundaries and zooms
 * accordingly if map is now outside of it.
 * @param {number} min ol zoom level
 * @param {number} max ol zoom level
 * @returns {function} dispatchable
 */
export const updateMinMaxZoom = (min, max) => {
  const view = map.getView()
  const currentZoom = view.getZoom()
  const zoom = currentZoom < min
    ? min
    : currentZoom > max
      ? max
      : currentZoom
  // always zoom so that moveend triggers
  view.animate({ zoom, duration })
  view.setMinZoom(min)
  view.setMaxZoom(max)
}

window.updateMinMaxZoom = updateMinMaxZoom

export const updateColors = state => {
  districtSource.forEachFeature(feature => {
    const name = feature.get('name')
    const district = state.districts[districtIndex[name]]
    const faction = state.factions[district.factionId]
    feature.setStyle(new Style({
      stroke: new Stroke({
        color: `hsl(${faction.color.h}, ${faction.color.s}%, 10%)`,
        width: 1
      }),
      fill: new Fill({
        color: `hsla(${faction.color.h}, ${faction.color.s}%, ${faction.color.l}%, 50%)`
      }),
      text: new Text({
        text: faction.name,
        font: 'Roboto, sans',
        overflow: true,
        fill: new Fill({
          color: '#eee'
        }),
        stroke: new Stroke({
          color: '#333',
          width: 3
        })
      })
    }))
  })
}
