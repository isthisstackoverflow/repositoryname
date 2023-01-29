import { createMap } from './map/createMap.js'
import { getRandomPart } from './map/getRandomPart.js';
import { districtSource } from './map/districts.js';

const map = createMap()

const headerbox = document.getElementById('headerbox')
const infobox = document.getElementById('infobox')
const modalbox = document.getElementById('modalbox')

const playerFaction = getRandomPart(districtSource.getFeatures())
window.goto = (duration = 2000) => map.getView().fit(playerFaction.getGeometry(), { duration })

const updateHeader = (emoji) => headerbox.innerHTML = `
  <span>Your Faction</span>
  <h1>${emoji} ${playerFaction.properties.factionName}</h1>
`
updateHeader('🐀')
goto(5000)

const infodefault = 'Hover any region to display information.'
infobox.innerHTML = infodefault
map.on('pointermove', function (e) {
  infobox.innerHTML = infodefault
  map.forEachFeatureAtPixel(e.pixel, function (feature) {
    infobox.innerHTML = `
      Faction: ${feature.properties.factionName}<br />
      Rats: ${feature.properties.rats}<br />
      Food: ${feature.properties.food}
    `
    return true
  })
})

modalbox.innerHTML = `
  OH MAN I FORGOT TO IMPLEMENT GAMEPLAY
`