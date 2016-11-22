import * as React from 'react'
import entry from '../helpers/entry'
import Header from '../components/header'
import Content from '../components/content'
import ChapterList from '../components/chapter_list'
import { getBookTitle } from '../helpers/util'

interface Props {}

class BookPage extends React.Component<Props, {}> {
  render () {
    let title = getBookTitle(Src)
    return (
      <div>
        <Header/>
        <Content>
          <div className='breadcrumb'>
            <a href='/'>TOP</a> > {title.ja}
          </div>

          <h2 className='book-title'>{title.ja}</h2>
          <ChapterList/>
        </Content>
      </div>
    )
  }
}

entry(BookPage)
