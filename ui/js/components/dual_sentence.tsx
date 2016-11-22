import * as React from 'react'
import { Sentence } from '../interfaces/book'
import * as c from 'classnames'

interface Props {
  sentence: Sentence
}

interface State {
  show?: boolean,
  originalStyle?: {
    bottom: string
  }
}

class DualSentence extends React.Component<Props, State> {
  constructor (arg) {
    super(arg)
    this.state = {
      show: false,
      originalStyle: {
        bottom: ''
      }
    }
  }

  render () {
    const s = this
    let {id, en, ja} = s.props.sentence
    let { show, originalStyle } = s.state
    return (
      <div className='dual-sentence'>
        <div className={c('original', show ? 'visible' : 'hidden')}
             id={`original-sentence-${id}`}
             onMouseEnter={s.showOriginal.bind(s)}
             onMouseLeave={s.hideOriginal.bind(s)}
             style={originalStyle}
             >
          {en}
        </div>
        <div className='japanese'
             id={`japanese-sentence-${id}`}
             onMouseEnter={s.showOriginal.bind(s)}
             onMouseOut={s.hideOriginal.bind(s)}
             >
          {ja}
        </div>
      </div>
    )
  }

  componentDidMount () {
    let { id } = this.props.sentence
    let original = document.getElementById(`japanese-sentence-${id}`)
    if (original === null) {
      return
    }
    this.setState({
      originalStyle: {
        bottom: `${original.clientHeight}px`
      }
    })
  }

  showOriginal () {
    this.setState({
      show: true
    })
  }

  hideOriginal () {
    this.setState({
      show: false
    })
  }
}

export default DualSentence