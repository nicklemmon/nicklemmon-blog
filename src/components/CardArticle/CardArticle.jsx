import React from 'react'
import Link from 'gatsby-link'

import Card from '../Card/Card'
import Subdued from '../Subdued/Subdued'
import Heading from '../Heading/Heading'

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
      <Link to={ linkTo }>
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
            Read More
          </span>
        </Card>
      </Link>
    )
  }
}