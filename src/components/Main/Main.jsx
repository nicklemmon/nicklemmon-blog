import React from 'react'
import classNames from 'classnames'

export default class Main extends React.Component {
  render() {
    return (
      <main className={ classNames( 'Main', this.props.className ) }>
        { this.props.children }
      </main>
    )
  }
}