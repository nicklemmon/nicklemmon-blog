import React from 'react'

import Container from '../Container/Container'
import MaxWidth from '../MaxWidth/MaxWidth'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import Highlight from '../Highlight/Highlight'

import './Hero.css'
import heroImage from './hero-bg.png'

export default class Hero extends React.Component {
  render() {
    return (
      <div className='Hero'>
        <MaxWidth size='lg'>
          <Container className='Hero-container' size='xxl'>
            <Heading level='1' className='Hero-title'>A <Highlight>front-end</Highlight> developer driven to create <Highlight>accessible</Highlight> user interfaces</Heading>

            <Button type='tertiary' to='/contact'>Get in Touch</Button>
          </Container>
        </MaxWidth>

        <div className='Hero-overlay' role='presentation'></div>

        <img className='Hero-image' src={ heroImage }/>
      </div>
    )
  }
}