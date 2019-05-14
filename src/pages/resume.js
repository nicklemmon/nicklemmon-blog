import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import PageLayout from '@components/Layouts/PageLayout'
import Resume from '@components/Resume/Resume'

class ResumePage extends React.Component {
  render() {
    const siteTitle = get( this, 'props.data.site.siteMetadata.title' )
    const title = 'Resume'

    return (
      <PageLayout title={ title }>
        <Helmet title={`${title} | ${siteTitle}`} />

        <Resume/>
      </PageLayout>
    )
  }
}

export default ResumePage

export const pageQuery = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
