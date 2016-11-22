import * as React from 'react'
import entry from '../helpers/entry'
import Header from '../components/header'
import Content from '../components/content'
import BookList from '../components/book_list'

interface Props {}

class Top extends React.Component<Props, {}> {
  render () {
    console.log(Src)
    return (
      <div>
        <Header/>
        <Content>
          <BookList/>
        </Content>
      </div>
    )
  }
}

entry(Top)
