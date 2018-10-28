import React from 'react'
import { Link } from 'gatsby'
import { Icon } from 'react-icons-kit'
import { socialCodepen } from 'react-icons-kit/ionicons/socialCodepen'
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub'
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin'

import Container from '../Container/Container'
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly'

import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='Footer'>
        <Container size='lg' className='Footer-container'>
          <div className='Footer-socialLinks'>
            <a
              href='http://codepen.com/nicklemmon'
              className='Footer-socialLink'
              rel='noopener'
            >
              <Icon
                className='Footer-socialIcon'
                icon={ socialCodepen }
                size={ 'calc(1rem + 1vw)' }
              />

              <ScreenReaderOnly>Codepen</ScreenReaderOnly>
            </a>

            <a
              href='http://github.com/nicklemmon'
              className='Footer-socialLink'
              rel='noopener'
            >
              <Icon
                className='Footer-socialIcon'
                icon={ socialGithub }
                size={ 'calc(1rem + 1vw)' }
              />

              <ScreenReaderOnly>GitHub</ScreenReaderOnly>
            </a>

            <a
              href='http://linkedin.com/in/nicklemmon'
              className='Footer-socialLink'
              rel='noopener'
            >
              <Icon
                className='Footer-socialIcon'
                icon={ socialLinkedin }
                size={ 'calc(1rem + 1vw)' }
              />

              <ScreenReaderOnly>LinkedIn</ScreenReaderOnly>
            </a>
          </div>

          <div>
            <p>All rights reserved, <Link className='Footer-link' to='/'><strong>Nick Lemmon</strong></Link> { new Date().getFullYear() }</p>
          </div>
        </Container>
      </footer>
    )
  }
}
