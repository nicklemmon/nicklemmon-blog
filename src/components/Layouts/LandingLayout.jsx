import React from 'react'

import DefaultLayout from './DefaultLayout'
import Hero from '../Hero/Hero'
import Main from '../Main/Main'
import BreakoutContainer from '../BreakoutContainer/BreakoutContainer'
import MaxWidth from '../MaxWidth/MaxWidth'

import './LandingLayout.css'

export default function LandingLayout(props) {
  const { children } = props

  return (
    <DefaultLayout className="LandingLayout">
      <Main className="LandingLayout-main">
        <Hero className="LandingLayout-hero" />

        <MaxWidth className="LandingLayout-sidebar" size="xl">
          <BreakoutContainer>{children}</BreakoutContainer>
        </MaxWidth>
      </Main>
    </DefaultLayout>
  )
}
