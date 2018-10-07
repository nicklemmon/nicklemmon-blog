import React from 'react'

import { socialCodepen } from 'react-icons-kit/ionicons/socialCodepen'
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub'
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin'

import Container from '../Container/Container'
import MaxWidth from '../MaxWidth/MaxWidth'
import Heading from '../Heading/Heading'
import Highlight from '../Highlight/Highlight'
import HeroIconLink from './HeroIconLink'

import './Hero.css'
import heroImage from './hero-bg.png'

export default class Hero extends React.Component {
  render() {
    const iconSize = '3rem';

    return (
      <div className='Hero'>
        <MaxWidth size='xl'>
          <Container className='Hero-container' size='xxl'>
            <Heading level='1' className='Hero-title'>A <Highlight>front-end</Highlight> developer driven to create <Highlight>accessible</Highlight> user interfaces</Heading>

            <MaxWidth size='sm' className='Hero-links'>
              <HeroIconLink
                href='http://codepen.com/nicklemmon'
                icon={ socialCodepen }
              />

              <HeroIconLink
                href='http://github.com/nicklemmon'
                icon={ socialGithub }
              />

              <HeroIconLink
                href='http://linkedin.com/in/nicklemmon'
                icon={ socialLinkedin }
              />
            </MaxWidth>
          </Container>
        </MaxWidth>

        <div className='Hero-overlay' role='presentation'></div>

        <img className='Hero-image' src={ heroImage }/>
      </div>
    )
  }
}