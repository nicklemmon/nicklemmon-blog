import React from 'react'

import Container from '../Container/Container'

import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='Footer'>
        <Container size='xl'>
          <p>All rights reserved, <strong>Nick Lemmon</strong> { new Date().getFullYear() }</p>
        </Container>
      </footer>
    )
  }
}