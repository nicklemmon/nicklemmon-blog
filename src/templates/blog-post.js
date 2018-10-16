import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { androidArrowBack } from 'react-icons-kit/ionicons/androidArrowBack'
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward'
import get from 'lodash/get'

import PageLayout from '../components/Layouts/PageLayout'
import LongForm from '../components/LongForm/LongForm'
import Button from '../components/Button/Button'
import Bio from '../components/Bio/Bio'

import './BlogPostTemplate.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get( this.props, 'data.site.siteMetadata.title' )
    const {
      previous,
      next
    } = this.props.pathContext

    return (
      <PageLayout
        className='BlogPostTemplate'
        title={ post.frontmatter.title }
        date={ post.frontmatter.date }
      >
        <Helmet title={ `${post.frontmatter.title} | ${siteTitle}` } />

        <LongForm
          className='BlogPostTemplate-content'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className='BlogPostTemplate-buttons'>
          { previous &&
              <Button
                className='BlogPostTemplate-button BlogPostTemplate-button--prev'
                type='tertiary'
                to={ previous.fields.slug }
                preIcon={ androidArrowBack }
              >
                { previous.frontmatter.title }
              </Button>
          }

          { next &&
              <Button
                className='BlogPostTemplate-button BlogPostTemplate-button--next'
                type='tertiary'
                to={ next.fields.slug }
                postIcon={ androidArrowForward }
              >
                { next.frontmatter.title }
              </Button>
          }
        </div>

        <Bio />
      </PageLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
