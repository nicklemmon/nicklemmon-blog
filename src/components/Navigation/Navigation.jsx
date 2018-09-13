import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly'
import Highlight from '../Highlight/Highlight'

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

    // DOM manipulation! 😭😭😭
    if ( this.state.isOpen === false ) {
      document.querySelector( 'html' ).setAttribute( 'style', 'overflow: hidden;' )
    } else {
      document.querySelector( 'html' ).setAttribute( 'style', 'overflow: initial;' )
    }

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
          className={ classNames( 'Navigation-button', isOpen ? 'is-open' : '' ) }
          aria-expanded={ isOpen } 
          aria-controls='nav-menu'
          onClick={ this.handleClick }
        >
          <ScreenReaderOnly>Menu</ScreenReaderOnly>

          <div className='Navigation-bar Navigation-bar--1' role='presentation'></div>

          <div className='Navigation-bar Navigation-bar--2' role='presentation'></div>
        </button>

        <nav
          className={ classNames( 'Navigation-nav', isOpen ? 'is-open' : 'is-closed' ) }
          id='nav-menu'
        >
          <Link className='Navigation-link' to='/about'>
            <Highlight>About</Highlight>
          </Link>

          <Link className='Navigation-link' to='/contact'>
            <Highlight>Contact</Highlight>
          </Link>
        </nav>
      </div>
    )
  }
}