import * as React from 'react'

interface Props extends React.HTMLProps<HTMLDivElement>{};

/**
 * Main content wrapper
 */
const Content = (props: Props) => {
  return (
    <div className='main-content-wrap'>
      <div className='main-content'>
        {props.children}
      </div>
    </div>
  )
}

export default Content
