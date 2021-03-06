import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import PageLayout from '@components/Layouts/PageLayout'
import CardArticles from '@components/CardArticles/CardArticles'

class ArchivesPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const title = 'Archives'
    const posts = get(this, 'props.data.allMdx.edges')

    return (
      <PageLayout title={title}>
        <Helmet title={`${title} | ${siteTitle}`} />

        <CardArticles posts={posts} className="Archives-cardArticles" />
      </PageLayout>
    )
  }
}

export default ArchivesPage

export const pageQuery = graphql`
  query ArchivesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
