import React from 'react'
import classNames from 'classnames'

import Container from '../Container/Container'
import MaxWidth from '../MaxWidth/MaxWidth'
import Heading from '../Heading/Heading'
import Highlight from '../Highlight/Highlight'

import './PageTitle.css'
import pageBackgroundImage from './page-bg.png'

export default class PageTitle extends React.Component {
  render() {
    const {
      className,
      headingContent,
      date
    } = this.props

    return (
      <Container className={ classNames( 'PageTitle', className ) } size='xl'>
        <MaxWidth className='PageTitle-maxWidth' size='lg'>
          <Heading className='PageTitle-heading' level='1'>
            <Highlight>
              { headingContent }
            </Highlight>
          </Heading>

          { date && 
            <div className='PageTitle-meta'>
              { date }
            </div>
          }
        </MaxWidth>

        <div className='PageTitle-overlay' role='presentation'></div>

        <img className='PageTitle-image' src={ pageBackgroundImage }/>
      </Container>
    )
  }
}
