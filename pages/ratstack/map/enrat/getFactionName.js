import { getRandomPart } from '../getRandomPart.js'

const hadThat = ['']

const starts = [
  'Red', 'Orange', 'Blue', 'Yellow',
  'Green', 'Black', 'White', 'Ultraviolet',
  'Deadly', 'Amazing', 'Dangerous', 'Astonishing',
  'Töfte', 'Knorke', 'Schnieke',
  'Sewer', 'Underground',
  'Tunnel',
  ''
]

const mids = [
  'Rodent', 'Rat', 'Critter', 'Creature', 'Vermin',
  'Tea', 'Sausage', 'Schinken', 'Cheese',
  'Nager',
  'Snake',
  ''
]

const ends = [
  'Killers', 'Sacks', 'Boys', 'Dimwits',
  'Masters', 'Heroes', 'Team', 'Force',
  'Pack', 'Horde', 'Flut',
  'Rules',
  ''
]

/**
 * @returns {string} randomized faction name
 */
export const getFactionName = () => {
  let name = ''
  // reroll until unique - need lots of source names
  while (hadThat.includes(name)) {
    name = [
      getRandomPart(starts),
      getRandomPart(mids),
      getRandomPart(ends)
    ].join(' ').trim()
  }
  hadThat.push(name)
  return name
}
