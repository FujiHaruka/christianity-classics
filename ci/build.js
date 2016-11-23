#!/usr/bin/env node
const co = require('co')
const buildHtml = require('./build_html')
const { exec } = require('child_process')
const promisify = require('es6-promisify')
const execAsync = promisify(exec)
const bookData = require('../helper/book_data')
const { join } = require('path')

process.chdir(__dirname + '/..')

const srcDir = join(__dirname, '../src/book')

co(function * () {
  yield buildHtml(srcDir)

  {
    let out = yield execAsync('webpack --config webpack.config.src.js')
    console.log(out)
  }

  {
    // tmp下に出力される
    let out = yield execAsync('webpack --config webpack.config.production.js')
    console.log(out)
  }

  {
    let books = bookData(srcDir)
    for (let book of books) {
      let { directory: bookDir, chapters } = book
      yield execAsync(`cp tmp/book.js docs/${bookDir}/index.js`)

      for (let chapter of chapters) {
        let { directory: chapterDir } = chapter
        yield execAsync(`cp tmp/article.js docs/${bookDir}/${chapterDir}/index.js`)
      }
    }
  }
})
