const cp = require('child_process')

// TODO infer with a glob or something
const toInstall = ["./packages/noop"]

// run install procedure for [root, ...all handled packages]
for (const cwd of ['.', ...toInstall]) {
  try {
    const command = process.argv[2] === '--ci' ? 'ci' : 'install'
    cp.execSync(`npm ${command}`, { cwd, stdio: 'inherit' })
    console.info(`The package ${cwd} was installed.`)
  } catch (e) {
    /* in error case, npm already logged something - just mark procedure as failing */
    process.exitCode = 1
  }
}
