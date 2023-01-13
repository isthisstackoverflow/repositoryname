const hadThat = ['']

const starts = [
  'Red', 'Orange', 'Blue', 'Yellow', 'Green', 'Black', 'White', 'Ultraviolet',
  'Deadly', 'Amazing', 'Dangerous', 'Astonishing',
  'Töfte', 'Knorke', 'Schnieke',
  'Tunnel', 'Sewer', 'Underground',
  ''
]

const mids = [
  'Rodent', 'Rat', 'Critter', 'Creature', 'Vermin',
  'Tea', 'Sausage', 'Ice Cream', 'Cheese',
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
 * @param {*[]} a array of something
 * @returns {*} random value from array
 */
const getRandom = a => a[Math.floor(Math.random() * a.length)]

/**
 * @returns {string} randomized faction name
 */
export default () => {
  let name = ''
  // reroll until unique - need lots of source names
  while (hadThat.includes(name)) {
    name = name = [
      getRandom(starts),
      getRandom(mids),
      getRandom(ends)
    ].filter(x => x).join(' ')
  }
  return name
}
