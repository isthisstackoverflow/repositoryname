const cp = require('child_process')
const fs = require('fs')
const packages = require('./packages')

function checkForNewVersion (cwd) {
  const {version} = JSON.parse(fs.readFileSync(cwd + "/package.json", {encoding: "UTF-8"}))
  const markdown = fs.readFileSync(cwd + "/CHANGELOG.md", {encoding: "UTF-8"})
  const nextVersion = markdown.split("## ")[1].split("\n")[0].trim()

  if (
    /^\d\.\d\.\d(-.+)?$/.test(nextVersion) &&
    version !== nextVersion
  ) {
    return nextVersion
  }
}

for (const {path, name} of packages) {
  try {
    const nextVersion = checkForNewVersion(path)
    if (nextVersion) {
      const context = { cwd: path, stdio: 'inherit' }
      cp.execSync('npm version ' + nextVersion, context)
      cp.execSync(
        'npm set //registry.npmjs.org/:_authToken '
        + process.env.NODE_AUTH_TOKEN,
      { cwd: path })
      cp.execSync('npm publish --access=public', context)
      console.info(`The package '${name}' was published.`)
    }
    else {
      console.info("No update in '" + name + "'.")
    }
  } catch (e) {
    console.error(e)
    process.exitCode = 1
  }
}
