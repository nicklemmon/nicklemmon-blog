import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { androidArrowBack } from 'react-icons-kit/ionicons/androidArrowBack'
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward'
import get from 'lodash/get'

import PageLayout from '@components/Layouts/PageLayout'
import LongForm from '@components/LongForm/LongForm'
import Button from '@components/Button/Button'
import Bio from '@components/Bio/Bio'
import Heading from '@components/Heading/Heading'
import ScreenReaderOnly from '@components/ScreenReaderOnly/ScreenReaderOnly'

import './BlogPostLayout.css'

class BlogPostLayout extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <PageLayout
        className="BlogPostLayout"
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      >
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />

        <LongForm
          className="BlogPostLayout-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <Bio />

        <ScreenReaderOnly>
          <Heading level="4">More Articles</Heading>
        </ScreenReaderOnly>

        <div className="BlogPostLayout-buttons">
          {previous && (
            <Button
              className="BlogPostLayout-button BlogPostLayout-button--prev"
              type="secondary"
              to={previous.fields.slug}
              preIcon={androidArrowBack}
            >
              {previous.frontmatter.title}
            </Button>
          )}

          {next && (
            <Button
              className="BlogPostLayout-button BlogPostLayout-button--next"
              type="secondary"
              to={next.fields.slug}
              postIcon={androidArrowForward}
            >
              {next.frontmatter.title}
            </Button>
          )}
        </div>
      </PageLayout>
    )
  }
}

export default BlogPostLayout

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
