import React from 'react'
import classNames from 'classnames'

import './Subdued.css'

export default function Subdued(props) {
  const { className, children } = props

  return <span className={classNames('Subdued', className)}>{children}</span>
}
