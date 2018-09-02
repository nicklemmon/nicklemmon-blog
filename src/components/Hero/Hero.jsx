import React from 'react'

import Container from '../Container/Container'
import Button from '../Button/Button'

import './Hero.css'
import heroImage from './hero-bg.png'

export default class Hero extends React.Component {
  render() {
    return (
      <div className='Hero'>
        <Container className='Hero-container' size='xxl'>
          <h1 className='Hero-title'>A front end developer driven to create accessible&nbsp;user interfaces</h1>

          <Button type='ghost' to='/contact'>Get in Touch</Button>
        </Container>

        <div className='Hero-overlay' role='presentation'></div>

        <img className='Hero-image' src={ heroImage }/>
      </div>
    )
  }
}