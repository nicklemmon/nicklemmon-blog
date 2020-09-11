import React from 'react'
import classNames from 'classnames'

import './Card.css'

export default function Card(props) {
  const { className, children } = props

  return <div className={classNames( 'Card', className )}>{children}</div>
}
