import React from 'react'
import classNames from 'classnames'

import './Highlight.css'

export default function Highlight(props) {
  const { children, className } = props

  return (
    <span className={classNames( `Highlight`, className )}>{children}</span>
  )
}
