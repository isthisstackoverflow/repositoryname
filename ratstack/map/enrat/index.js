import { getFactionName } from "./getFactionName.js"
import { getRandomHex } from "./getRandomHex.js"

const makeFeatureProperties = () => ({
  factionName: getFactionName(),
  hex: getRandomHex(),
  rats: Math.floor(Math.random() * 900) + 101,
  food: Math.floor(Math.random() * 900) + 101,
})

export const enrat = feature => {
  feature.properties = makeFeatureProperties()
  return feature
}
