import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import PageLayout from '@components/Layouts/PageLayout'

function UnsubscribePage( props ) {
    const siteTitle = props.data.site.siteMetadata.title;
    const title = 'Unsubscribe'

    return (
      <PageLayout title={ title }>
        <Helmet title={`${title} | ${siteTitle}`} />

        <p>You unsubscribed successfully!</p>
      </PageLayout>
    )
}

export default UnsubscribePage

export const pageQuery = graphql`
  query UnsubscribeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
