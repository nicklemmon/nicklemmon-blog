import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly'

import './Navigation.css'

export default class Navigation extends React.Component {
  constructor( props ) {
    super( props )

    this.state = {
      isOpen: false
    }

    this.handleClick = this.handleClick.bind( this )
  }

  handleClick( e ) {
    e.preventDefault

    this.setState( prevState => ({
      isOpen: !prevState.isOpen
    }) )
  }

  render() {
    const { className } = this.props
    const { isOpen } = this.state

    return (
      <div className={ classNames( 'Navigation', className ) }>
        <button
          className='Navigation-button'
          aria-expanded={ isOpen } 
          aria-controls='nav-menu'
          onClick={ this.handleClick }
        >
          <ScreenReaderOnly>Menu</ScreenReaderOnly>

          <div className='Navigation-bar Navigation-bar--1' role='presentation'></div>

          <div className='Navigation-bar Navigation-bar--2' role='presentation'></div>
        </button>

        <nav
          className={ classNames( 'Navigation-nav', isOpen ? 'is-visible' : 'is-hidden' ) }
          id='nav-menu'
        >
          <Link className='Navigation-link' to='/about'>About</Link>

          <Link className='Navigation-link' to='/contact'>Contact</Link>
        </nav>
      </div>
    )
  }
}