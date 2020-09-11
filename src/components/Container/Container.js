import React from 'react'
import classNames from 'classnames'

import './Container.css'

export default function Container(props) {
  const { size, children, className } = props

  return (
    <div className={classNames( `Container Container--${size}`, className )}>
      {children}
    </div>
  )
}
