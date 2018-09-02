import React from 'react'

import Container from '../Container/Container'

export default class Main extends React.Component {
  render() {
    return (
      <main className='Main'>
        { this.props.children }
      </main>
    )
  }
}