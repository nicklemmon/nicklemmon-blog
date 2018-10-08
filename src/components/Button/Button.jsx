import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

import './Button.css';

export default class Button extends React.Component {
  render() {
    const {
      to,
      type,
      children,
      fullWidth,
      centered,
      className
    } = this.props

    return (
      <Link
        to={ to }
        className={ classNames( `Button Button--${type}`, fullWidth ? 'Button--full' : '', centered ? 'Button--centered' : '', className ) }
      >
        { children }
      </Link>
    )
  }
}