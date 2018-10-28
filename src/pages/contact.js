import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import PageLayout from '../components/Layouts/PageLayout'

class ContactPage extends React.Component {
  render() {
    const siteTitle = get( this, 'props.data.site.siteMetadata.title' )
    const title = 'Archives'

    return (
      <PageLayout title={ title }>
        <Helmet title={ `${title} | ${siteTitle}` } />

        <p>Contact Me...</p>
      </PageLayout>
    )
  }
}

export default ContactPage
