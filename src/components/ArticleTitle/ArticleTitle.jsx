import React from 'react'

import Container from '../Container/Container'
import MaxWidth from '../MaxWidth/MaxWidth'
import Heading from '../Heading/Heading'
import Highlight from '../Highlight/Highlight'
import { Icon } from 'react-icons-kit'
import { calendar } from 'react-icons-kit/ionicons/calendar'

import './ArticleTitle.css'
import articleTitleImage from './articletitle-bg.png'

export default class ArticleTitle extends React.Component {
  render() {
    const {
      headingContent,
      date
    } = this.props

    return (
      <Container className='ArticleTitle' size='xl'>
        <MaxWidth className='ArticleTitle-maxWidth' size='lg'>
          <Heading className='ArticleTitle-heading' level='1'>
            <Highlight>
              { headingContent }
            </Highlight>
          </Heading>

          <div className='ArticleTitle-meta'>
            <Icon
              className='ArticleTitle-calendar'
              size={ '1rem' }
              icon={ calendar }
            />

            { date }
          </div>
        </MaxWidth>

        <div className='ArticleTitle-overlay' role='presentation'></div>

        <img className='ArticleTitle-image' src={ articleTitleImage }/>
      </Container>
    )
  }
}