import * as React from 'react'
import entry from '../helpers/entry'
import Header from '../components/header'
import Content from '../components/content'
import DualSentence from '../components/dual_sentence'
import { Sentence } from '../interfaces/book'
import { getBookTitle, getChapterTitle } from '../helpers/util'

interface Props {}

class Top extends React.Component<Props, {}> {
  render () {
    let bookTitle = getBookTitle(Src)
    let chapterTitle = getChapterTitle(Src)
    return (
      <div>
        <Header/>
        <Content>
          <div className='breadcrumb'>
            <a href='/'>TOP</a> > <a href='..'>{bookTitle.ja}</a> > {chapterTitle.ja}
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
