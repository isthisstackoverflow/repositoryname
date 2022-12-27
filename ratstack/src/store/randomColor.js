import shuffle from 'lodash.shuffle'

export const getRandomHex = () =>
  '#' +
    Math.round(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')

const ls = [20, 35, 50]

export const getHslColorsFor = array =>
  shuffle(array.map((_, i) => ({
    h: i * (360 / (array.length / 3)) % 360,
    s: 100,
    l: ls[i % 3]
  })))
