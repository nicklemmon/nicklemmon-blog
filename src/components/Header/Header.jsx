import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

import MaxWidth from '../MaxWidth/MaxWidth'
import Navigation from '../Navigation/Navigation'

import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className={ classNames( 'Header', this.props.className ) }>
        <MaxWidth size='xl' className='Header-container'>
          <div className='Header-brand'>
            <Link
              className='Header-brandLink'
              to='/'
            >
              Nick Lemmon
            </Link>
          </div>

          <Navigation className='Header-nav'/>
        </MaxWidth>
      </header>
    )
  }
}