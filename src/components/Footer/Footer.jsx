import React from 'react'

import Container from '../Container/Container'

import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='Footer'>
        <Container size='lg' className='Footer-container'>
          <p>All rights reserved, <strong>Nick Lemmon</strong> { new Date().getFullYear() }</p>
        </Container>
      </footer>
    )
  }
}