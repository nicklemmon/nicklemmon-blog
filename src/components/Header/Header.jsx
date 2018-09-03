import React from 'react'
import Link from 'gatsby-link'

import MaxWidth from '../MaxWidth/MaxWidth'
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly'

import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <MaxWidth size='lg' className='Header-container'>
          <div className='Header-brand'>
            <Link
              className='Header-brandLink'
              to='/'
            >
              Nick Lemmon
            </Link>
          </div>

          <div className='Header-menu'>
            <button
              className='Header-menuButton'
              aria-expanded='false' 
              aria-controls='nav-menu'
            >
              <ScreenReaderOnly>Menu</ScreenReaderOnly>
            </button>
            
            <nav
              className='Header-nav'
              id='nav-menu'
            >
              <Link to='/about'>About</Link>

              <Link to='/contact'>Contact</Link>
            </nav>
          </div>
        </MaxWidth>
      </header>
    )
  }
}