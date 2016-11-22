import * as React from 'react'
import { Chapter } from '../interfaces/book'

interface Props {}

/**
 * Should be in the book page
 */
class ChapterList extends React.Component<Props, {}> {
  render () {
    const s = this
    console.log(Src)
    return (
      <div className='chapter-list'>
        {Src.chapters.map((chapter: Chapter) => (
          <div className='list-item' key={chapter.id}>
            <a href={`./${chapter.directory}`}>{chapter.title.ja}</a>
          </div>
        ))}
      </div>
    )
  }
}

export default ChapterList
