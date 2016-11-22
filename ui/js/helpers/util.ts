import { Book, Chapter, EnJa } from '../interfaces/book'

// root がサブディレクトリになるなら変更しなくてはならない

export function getBook (src): Book | undefined {
  let books: Book[] = src.books
  let paths = window.location.pathname.split('/').filter(path => path.length > 0)
  let bookDir = paths[0]
  let book = books.find((b) => b.directory === bookDir)
  return book
}

export function getChapterTitle (src): EnJa {
  let chapters: Chapter[] = src.chapters
  let paths = window.location.pathname.split('/').filter(path => path.length > 0)
  let chapterDir = paths[1]
  let chapter = chapters.find((c) => c.directory === chapterDir)
  return chapter ? chapter.title : { en: '', ja: '' }
}
