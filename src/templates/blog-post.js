import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { Icon } from 'react-icons-kit'
import { androidArrowBack } from 'react-icons-kit/ionicons/androidArrowBack'
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward'
import get from 'lodash/get'

import DefaultLayout from '../components/Layouts/DefaultLayout'
import Main from '../components/Main/Main'
import LongForm from '../components/LongForm/LongForm'
import ArticleTitle from '../components/ArticleTitle/ArticleTitle'
import Container from '../components/Container/Container'
import MaxWidth from '../components/MaxWidth/MaxWidth'
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
      <DefaultLayout className='BlogPostTemplate'>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />

        <Main className='BlogPostTemplate-main'>
          <ArticleTitle
            headingContent={ post.frontmatter.title }
            date={ post.frontmatter.date }
          />
        
          <Container size='lg'>
            <MaxWidth size='lg'>
              <LongForm
                className='BlogPostTemplate-content'
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              
              <Bio />

              <div className='BlogPostTemplate-buttons'>
                {
                  previous &&
                    <Button
                      className='BlogPostTemplate-button BlogPostTemplate-button--prev'
                      type='secondary'
                      to={ previous.fields.slug }
                      preIcon={ androidArrowBack }
                    >
                      { previous.frontmatter.title }
                    </Button>
                }

                {
                  next &&
                    <Button
                      className='BlogPostTemplate-button BlogPostTemplate-button--next'
                      type='secondary'
                      to={ next.fields.slug }
                      postIcon={ androidArrowForward }
                    >
                      { next.frontmatter.title }
                    </Button>
                }
              </div>
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
