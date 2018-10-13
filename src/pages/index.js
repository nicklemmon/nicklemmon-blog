import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import LandingLayout from '../components/Layouts/LandingLayout'
import Button from '../components/Button/Button'
import Heading from '../components/Heading/Heading'
import Highlight from '../components/Highlight/Highlight'
import CardArticle from '../components/CardArticle/CardArticle'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <LandingLayout>
        <Helmet title={ siteTitle } />

        <Heading level='2'>
          <Highlight>The latest</Highlight>
        </Heading>

        { posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug

          return (
              <CardArticle
                key={ node.fields.slug }
                date={ node.frontmatter.date }
                headingContent={ title }
                linkTo={ node.fields.slug }
              >
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </CardArticle>
            )
          }) 
        }

        <Button
          type='primary'
          to='/archives'
          fullWidth
        >
          Archives
        </Button>
      </LandingLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
