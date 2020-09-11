import React from 'react'
import classNames from 'classnames'

import './LongForm.css'

export default function LongForm(props) {
  const { className, children, ...rest } = props

  return (
    <article className={classNames('LongForm', className)} {...rest}>
      {children}
    </article>
  )
}
