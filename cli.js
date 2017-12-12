#!/usr/bin/env node
const path = require('path')
const sao = require('sao')
const minimist = require('minimist')
const updateNotifier = require('update-notifier')
const pkg = require('./package.json')

const argv = minimist(process.argv.slice(2))
// In a custom directory or current directory
const targetPath = path.resolve(argv._[0] || '.')

console.log(`> Generating Mono app in ${targetPath}`)

// See https://sao.js.org/#/advanced/standalone-cli
sao({
  template: __dirname,
  targetPath
}).catch(err => {
  console.error(err.name === 'SAOError' ? err.message : err.stack)
  process.exit(1)
})

// Update notifier
updateNotifier({ pkg }).notify()
