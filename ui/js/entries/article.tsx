import * as React from 'react'
import entry from '../helpers/entry'
import Header from '../components/header'
import Content from '../components/content'
import DualSentence from '../components/dual_sentence'
import { Sentence } from '../interfaces/book'
import { getBook, getChapterTitle, topUrl } from '../helpers/util'

interface Props {}

class Top extends React.Component<Props, {}> {
  render () {
    let book = getBook(Src)
    if (!book) {
      return <div>Not found the article.</div>
    }
    let chapterTitle = getChapterTitle(Src)
    return (
      <div>
        <Header/>
        <Content>
          <div className='breadcrumb'>
            <a href={topUrl()}>TOP</a> > <a href='..'>{book.title.ja}</a> > {chapterTitle.ja}
          </div>

          <h2 className='chapter-title'>{chapterTitle.ja}</h2>

          {Src.article.map((paragraph) => {
            let { sentences } = paragraph
            return (
              <div className='paragraph'>
                {sentences.map((sentence: Sentence) => <DualSentence sentence={sentence} />)}
              </div>
            )
          })}
        </Content>
      </div>
    )
  }
}

entry(Top)

/* global Src */
