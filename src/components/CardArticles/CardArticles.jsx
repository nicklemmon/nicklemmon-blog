import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import classNames from 'classnames'

import CardArticle from '../CardArticle/CardArticle'

export default class CardArticles extends React.Component {
  render() {
    const {
      className,
      posts
    } = this.props

    return (
      <div className={ classNames( 'CardArticles', className ) }>
        { 
          posts.map(({ node }) => {
            const title = get( node, 'frontmatter.title' )

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
      </div>
    )
  }
}

export const pageQuery = graphql`
  query CardArticlesQuery {
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
