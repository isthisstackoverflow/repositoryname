const cp = require('child_process')
const fs = require('fs')

function checkForNewVersion (cwd) {
  const {version} = JSON.parse(fs.readFileSync(cwd + "/package.json", {encoding: "UTF-8"}))
  const markdown = fs.readFileSync(cwd + "/CHANGELOG.md", {encoding: "UTF-8"})
  const nextVersion = markdown.split("## ")[1].split("\n")[0]

  if (
    /^\d\.\d\.\d(-.+)?$/.test(nextVersion) &&
    version !== nextVersion
  ) {
    return nextVersion
  }
}

// TODO infer from glob or something
const toPublish = ["./packages/noop"]

for (const cwd of toPublish) {
  try {
    const nextVersion = checkForNewVersion(cwd)
    if (nextVersion) {
      cp.execSync('npm version ' + nextVersion, { cwd, stdio: 'inherit' })
      cp.execSync('npm ci', { cwd, stdio: 'inherit' })
      cp.execSync('npm publish --access=public', { cwd, stdio: 'inherit' })
      console.info(`The package ${cwd} was published.`)
    }
    else {
      console.info("No update in " + cwd)
    }
  } catch (e) {
    console.log(e)
    /* in error case, npm already logged something - just mark procedure as failing */
    process.exitCode = 1
  }
}
