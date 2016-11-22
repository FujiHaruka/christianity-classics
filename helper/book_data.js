const { join } = require('path')

/**
 * Import book data
 */
function bookData (srcDir = join(__dirname, '../src/book')) {
  let books = require(srcDir)
  for (let bookInfo of books) {
    let chapterSrc = require(join(srcDir, bookInfo.directory))
    bookInfo.chapters = chapterSrc.chapters
  }
  return books
}

module.exports = bookData

if (!module.parent) {
  console.log(JSON.stringify(bookData(), null, '  '))
}