#!/usr/bin/env node

const co = require('co')
const { exec } = require('child_process')
const mkdirp = require('mkdirp')
const promisify = require('es6-promisify')

const mkdirpAsync = promisify(mkdirp)
const execAsync = promisify(exec)

process.chdir(__dirname + '/..')

co(function * () {
  yield mkdirpAsync('public/js')
  yield mkdirpAsync('public/css')
  let out = yield execAsync('./ci/externals.sh')
  console.log(out)
}).catch(err => console.error(err))
