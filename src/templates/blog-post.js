import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import DefaultLayout from '../components/Layouts/DefaultLayout'
import Main from '../components/Main/Main'
import Container from '../components/Container/Container'
import MaxWidth from '../components/MaxWidth/MaxWidth'
import Heading from '../components/Heading/Heading'
import Bio from '../components/Bio/Bio'
import { Icon } from 'react-icons-kit'
import { calendar } from 'react-icons-kit/ionicons/calendar'

import './BlogPostTemplate.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <DefaultLayout className='BlogPostTemplate'>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />

        <Main className='BlogPostTemplate-main'>
          <Container className='BlogPostTemplate-title' size='xl'>
            <MaxWidth size='lg'>
              <Heading level='1'>{post.frontmatter.title}</Heading>
            </MaxWidth>
          </Container>

          <Container className='BlogPostTemplate-content' size='lg'>
            <MaxWidth size='lg'>
              <div className='BlogPostTemplate-meta'>
                <Icon
                  className='BlogPostTemplate-calendar'
                  size={ '1rem' }
                  icon={ calendar }
                />

                { post.frontmatter.date }
              </div>

              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              
              <Bio />

              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                <li>
                  {
                    previous &&
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  }
                </li>
                <li>
                  {
                    next &&
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  }
                </li>
              </ul>
            </MaxWidth>
          </Container>
        </Main>
      </DefaultLayout>
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
