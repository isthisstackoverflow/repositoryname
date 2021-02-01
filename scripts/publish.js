const cp = require('child_process')
const fs = require('fs')
const packages = require('./packages')

function checkForNewVersion (cwd) {
  const {version} = JSON.parse(fs.readFileSync(cwd + "/package.json", {encoding: "UTF-8"}))
  const markdown = fs.readFileSync(cwd + "/CHANGELOG.md", {encoding: "UTF-8"})
  const nextVersion = markdown.split("## ")[1].split("\n")[0]

  if (
    /^\d\.\d\.\d(-.+)?$/.test(nextVersion.trim()) &&
    version !== nextVersion
  ) {
    return nextVersion
  }
}

for (const {path, name} of packages) {
  try {
    const nextVersion = checkForNewVersion(path)
    if (nextVersion) {
      cp.execSync('npm version ' + nextVersion, { cwd: path, stdio: 'inherit' })
      cp.execSync('npm publish --access=public', { cwd: path, stdio: 'inherit' })
      console.info(`The package ${name} was published.`)
    }
    else {
      console.info("No update in " + name + ".")
    }
  } catch (e) {
    console.error(e)
    process.exitCode = 1
  }
}
