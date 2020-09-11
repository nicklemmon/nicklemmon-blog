import React from 'react'
import classNames from 'classnames'

import './LongForm.css'

export default function LongForm(props) {
  const { className, children, ...props } = props

  return (
    <article className={classNames('LongForm', className)} {...props}>
      {children}
    </article>
  )
}
