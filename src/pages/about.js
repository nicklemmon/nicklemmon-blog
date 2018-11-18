import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import PageLayout from '../components/Layouts/PageLayout'
import Bio from '../components/Bio/Bio'

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const title = 'About'

    return (
      <PageLayout title={title}>
        <Helmet title={`${title} | ${siteTitle}`} />

        <Bio />
      </PageLayout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
