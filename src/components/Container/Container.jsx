import React from 'react'

import './Container.css'

export default class Container extends React.Component {
  render() {
    const {
      size,
      children
    } = this.props

    return (
      <div className={ `Container Container--${size}` }>
        { children }
      </div>
    )
  }
}