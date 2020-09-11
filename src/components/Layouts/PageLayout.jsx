import React from 'react'
import classNames from 'classnames'

import DefaultLayout from './DefaultLayout'
import PageTitle from '../PageTitle/PageTitle'
import Main from '../Main/Main'
import Container from '../Container/Container'
import MaxWidth from '../MaxWidth/MaxWidth'

import './PageLayout.css'

export default function PageLayout(props) {
  const { className, title, date, children } = props

  return (
    <DefaultLayout className={classNames('PageLayout', className)}>
      <Main className="PageLayout-main">
        <PageTitle
          className="PageLayout-pageTitle"
          headingContent={title}
          date={date}
        />

        <Container size="lg">
          <MaxWidth size="lg" className="PageLayout-maxWidth">
            {children}
          </MaxWidth>
        </Container>
      </Main>
    </DefaultLayout>
  )
}
