import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import DefaultLayout from '../components/Layouts/DefaultLayout'
import ArticleTitle from '../components/ArticleTitle/ArticleTitle'
import Container from '../components/Container/Container'

export default class NotFoundPage extends React.Component {
  render() {
    const siteTitle = get( this, 'props.data.site.siteMetadata.title' )

    console.log( siteTitle )

    return (
      <DefaultLayout>
        <Helmet title={ `Page Not Found | ${siteTitle}` } />
  
        <ArticleTitle headingContent='404 :('/>
  
        <Container size='xl'>
          <p>Sorry, friend. No page here!</p>
        </Container>
      </DefaultLayout>
    )
  }
}

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
