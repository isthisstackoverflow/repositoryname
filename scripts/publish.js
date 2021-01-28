const cp = require('child_process')

// TODO infer from glob or something
const toPublish = ["./packages/noop"]

for (const cwd of toPublish) {
  try {
    // TODO check if package changed
    cp.execSync('npm publish', { cwd, stdio: 'inherit' })
    console.info(`The package ${cwd} was published.`)
  } catch (e) {
    /* in error case, npm already logged something - just mark procedure as failing */
    process.exitCode = 1
  }
}
