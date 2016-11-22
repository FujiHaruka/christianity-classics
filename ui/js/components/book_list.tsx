import * as React from 'react'
import { Book } from '../interfaces/book'

interface Props {}

/**
 * Should be in the top page
 */
class BookList extends React.Component<Props, {}> {
  render () {
    const s = this
    return (
      <div className='book-list'>
        {Src.map((book: Book) => (
          <div className='list-item' key={book.id}>
            <a href={`./${book.directory}`}>{book.title.ja}</a> ({book.author.ja} {book.writtenYear || ''} {book.description || ''})
          </div>
        ))}
      </div>
    )
  }
}

export default BookList
