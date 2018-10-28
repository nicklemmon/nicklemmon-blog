import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import LandingLayout from '../components/Layouts/LandingLayout'
import Button from '../components/Button/Button'
import Heading from '../components/Heading/Heading'
import Highlight from '../components/Highlight/Highlight'
import CardArticles from '../components/CardArticles/CardArticles'

import './index.css'

class IndexPage extends React.Component {
  render() {
    const siteTitle = get( this, 'props.data.site.siteMetadata.title' )
    const posts = get( this, 'props.data.allMarkdownRemark.edges' )

    return (
      <LandingLayout>
        <Helmet title={ siteTitle } />

        <Heading level='2'>
          <Highlight>The latest</Highlight>
        </Heading>

        <CardArticles className='IndexPage-cardArticles' posts={ posts }/>

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

export default IndexPage

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
            title
          }
        }
      }
    }
  }
`
