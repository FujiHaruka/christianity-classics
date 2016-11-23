import * as React from 'react'
import { topUrl } from '../helpers/util'
const loc = require('../../../src/loc/index.json')

interface Props {}

class Header extends React.Component<Props, {}> {
  render () {
    return (
      <div className='header'>
        <h1 className='title'><a href={topUrl()}>{loc.SITE_NAME}</a></h1>
      </div>
    )
  }
}

export default Header
