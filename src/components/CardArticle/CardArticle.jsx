import React from 'react'
import { Link } from 'gatsby'
import { Icon } from 'react-icons-kit'
import { arrowRight } from 'react-icons-kit/feather/arrowRight'

import Card from '../Card/Card'
import Subdued from '../Subdued/Subdued'
import Heading from '../Heading/Heading'
import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly'

import './CardArticle.css'

export default class CardArticle extends React.Component {
  render() {
    const {
      date,
      headingContent,
      children,
      linkTo
    } = this.props

    return (
      <Link className='CardArticle-link' to={ linkTo }>
        <Card className='CardArticle'>
          <Subdued className='CardArticle-date'>
            { date }
          </Subdued>

          <Heading
            level='3'
            className='CardArticle-heading'
          >
            { headingContent }
          </Heading>

          { children }

          <span className='CardArticle-readMore'>
            <Icon
              icon={ arrowRight }
              size={ '100%' }
              className='CardArticle-icon'
            />

            <ScreenReaderOnly>Read More</ScreenReaderOnly>
          </span>
        </Card>
      </Link>
    )
  }
}