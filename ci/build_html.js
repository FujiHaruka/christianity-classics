#!/usr/bin/env node
/**
 * src/book から HTML ファイルを生成して docs に出力する
 */
const Hbs = require('handlebars')
const co = require('co')
const fs = require('fs')
const { join } = require('path')
const promisify = require('es6-promisify')
const mkdirp = require('mkdirp')
const mkdirpAsync = promisify(mkdirp)
const loc = require('../src/loc/index.json')
const bookData = require('../helper/book_data')

const SRC_DIR = join(__dirname, '../src')
const PUBLIC_DIR = join(__dirname, '../docs')
const { SITE_NAME } = loc

function buildHtml (srcDir) {
  return co(function * () {
    let books = bookData(srcDir)
    // Generate HTML and write
    let htmlHbs = yield readFile(join(SRC_DIR, 'html/index.html.hbs'))
    let template = Hbs.compile(htmlHbs)
    // Top
    yield output(template({
      title: SITE_NAME,
      subdir: '/christianity-classics'
    }), {
      url: '/'
    })
    // book
    for (let book of books) {
      yield output(template({
        title: `${book.title.ja} | ${SITE_NAME}`,
        subdir: '/christianity-classics'
      }), {
        url: book.directory
      })
      // Article
      for (let chapter of book.chapters) {
        yield output(template({
          title: `${chapter.title.ja} | ${book.title.ja} | ${SITE_NAME}`,
          subdir: '/christianity-classics'
        }), {
          url: join(book.directory, chapter.directory)
        })
      }
    }
  }).catch(err => console.error(err))
}

function output (content, { url }) {
  return co(function * () {
    let dir = join(PUBLIC_DIR, url)
    yield mkdirpAsync(dir)
    let path = join(dir, 'index.html')
    yield write(path, content)
  })
}

function readFile (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      err ? reject(err) : resolve(data.toString())
    })
  })
}

function write (path, data) {
  return new Promise((resolve, reject) => {
    let writer = fs.createWriteStream(path)
    writer.on('error', reject)
    writer.on('finish', resolve)
    writer.write(data)
    writer.end()
  })
}

module.exports = buildHtml

if (!module.parent) {
  buildHtml()
}
