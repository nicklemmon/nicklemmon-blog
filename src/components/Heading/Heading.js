import React from 'react'
import classNames from 'classnames'

import './Heading.css'

export default function Heading(props) {
  const { level, children, className } = props

  return (
    <div
      className={classNames( `Heading Heading--${level}`, className )}
      role="heading"
      aria-level={level}
    >
      {children}
    </div>
  )
}
