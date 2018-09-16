import React from 'react'
import { Icon } from 'react-icons-kit'
import { socialCodepen } from 'react-icons-kit/ionicons/socialCodepen'
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub'
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin'


import Container from '../Container/Container'

import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='Footer'>
        <Container size='xl'>
          <div className='Footer-links'>
            <a className='Footer-iconLink' href='http://codepen.com/nicklemmon' rel='noopener'>
              <Icon
                className='Footer-icon'
                size={ '2rem' }
                icon={ socialCodepen }
              />
            </a>

            <a className='Footer-iconLink' href='http://github.com/nicklemmon' rel='noopener'>
              <Icon
                className='Footer-icon'
                size={ '2rem' }
                icon={ socialGithub }
              />
            </a>

            <a className='Footer-iconLink' href='http://linkedin.com/in/nicklemmon' rel='noopener'>
              <Icon
                className='Footer-icon'
                size={ '2rem' }
                icon={ socialLinkedin }
              />
            </a>
          </div>

          <p>All rights reserved, <strong>Nick Lemmon</strong> { new Date().getFullYear() }</p>
        </Container>
      </footer>
    )
  }
}