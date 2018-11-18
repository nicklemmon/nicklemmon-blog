import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import PageLayout from '../components/Layouts/PageLayout'

export default class NotFoundPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    console.log(siteTitle)

    return (
      <PageLayout title="404 :(">
        <Helmet title={`Page Not Found | ${siteTitle}`} />

        <p>Sorry, friend. No page here!</p>
      </PageLayout>
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
