const cp = require('child_process')
const toInstall = require('./packages').map(({path}) => path)

// run install procedure for [root, ...all packages]
for (const path of ['.', ...toInstall]) {
  try {
    const command = process.argv[2] === '--ci' ? 'ci' : 'install'
    cp.execSync(`npm ${command}`, { cwd: path, stdio: 'inherit' })
    console.info(`Installing '${path}' successful.`)
  } catch (e) {
    console.error(e)
    process.exitCode = 1
  }
}
