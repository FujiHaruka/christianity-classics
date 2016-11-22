import * as React from 'react'
import * as ReactDOM from 'react-dom'

function entry (App) {
  const rootElement = document.getElementById('site')

  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <App/>,
      rootElement
    )
  })
}

export default entry
