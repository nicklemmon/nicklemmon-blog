import React from 'react'
import classNames from 'classnames'

import './MaxWidth.css'

export default function MaxWidth(props) {
  const { children, className, size } = props

  return (
    <div className={classNames(`MaxWidth MaxWidth--${size}`, className)}>
      {children}
    </div>
  )
}
