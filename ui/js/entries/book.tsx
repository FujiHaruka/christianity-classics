import * as React from 'react'
import entry from '../helpers/entry'
import Header from '../components/header'
import Content from '../components/content'
import ChapterList from '../components/chapter_list'
import { getBook, topUrl } from '../helpers/util'

interface Props {}

class BookPage extends React.Component<Props, {}> {
  render () {
    let book = getBook(Src)
    if (!book) {
      return <div> Book not found. </div>
    }
    let { title } = book
    return (
      <div>
        <Header/>
        <Content>
          <div className='breadcrumb'>
            <a href={topUrl()}>TOP</a> > {title.ja}
          </div>

          <h2 className='book-title'>{title.ja}</h2>
          { book.originalUrl ? <h4>原文:  <a href={book.originalUrl}>{book.originalUrl}</a></h4> : null }
          <ChapterList/>
        </Content>
      </div>
    )
  }
}

entry(BookPage)
