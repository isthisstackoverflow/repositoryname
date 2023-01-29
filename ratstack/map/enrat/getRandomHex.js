export const getRandomHex = () =>
  '#' +
    Math.round(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
