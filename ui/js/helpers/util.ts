import { Book, Chapter, EnJa } from '../interfaces/book'

const { SUB_DIRECTORY } = require('../../../src/loc')

export function getBook (src): Book | undefined {
  let books: Book[] = src.books
  let paths = window.location.pathname.split('/').filter(path => path.length > 0)
  let bookDir = paths[1] // rootがサブディレクトリのとき
  let book = books.find((b) => b.directory === bookDir)
  return book
}

export function getChapterTitle (src): EnJa {
  let chapters: Chapter[] = src.chapters
  let paths = window.location.pathname.split('/').filter(path => path.length > 0)
  let chapterDir = paths[2]
  let chapter = chapters.find((c) => c.directory === chapterDir)
  return chapter ? chapter.title : { en: '', ja: '' }
}
