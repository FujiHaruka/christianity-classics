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
  },
  fixed?: boolean
}

class DualSentence extends React.Component<Props, State> {
  constructor (arg) {
    super(arg)
    this.state = {
      show: false,
      fixed: false,
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
             style={originalStyle}
             >
          {en}
        </div>
        <div className={c('japanese', this.state.fixed ? 'fixed' : '')}
             id={`japanese-sentence-${id}`}
             onMouseEnter={s.showOriginal.bind(s)}
             onMouseOut={s.hideOriginal.bind(s)}
             onClick={s.toggleFixed.bind(s)}
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

  toggleFixed () {
    console.log('to')
    this.setState({
      fixed: !this.state.fixed
    })
  }

  showOriginal () {
    this.setState({
      show: true
    })
  }

  hideOriginal () {
    if (this.state.fixed) {
      return
    } else {
      this.setState({
        show: false
      })
    }
  }
}

export default DualSentence
