import React from 'react'

import Container from '../Container/Container'

import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='Footer'>
        <Container>
          <p>All rights reserved, <strong>Nick Lemmon</strong> { new Date().getFullYear() }</p>
        </Container>
      </footer>
    )
  }
}