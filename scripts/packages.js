const { readdirSync } = require('fs')

module.exports = readdirSync("./packages", { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => ({
    name: dirent.name,
    path: `./packages/${dirent.name}`
  }))
