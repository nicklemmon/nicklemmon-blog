import React from 'react'
import Link from 'gatsby-link'

import './Button.css';

export default class Button extends React.Component {
  render() {
    const {
      to,
      type,
      children
    } = this.props

    return (
      <Link
        to={ to }
        className={ `Button Button--${type}` }
      >
        { children }
      </Link>
    )
  }
}