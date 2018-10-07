import React from 'react'

import DefaultLayout from './DefaultLayout'
import Hero from '../Hero/Hero'
import Main from '../Main/Main'
import BreakoutContainer from '../BreakoutContainer/BreakoutContainer'
import MaxWidth from '../MaxWidth/MaxWidth'

import './LandingLayout.css'

export default class LandingLayout extends React.Component {
  render() {
    const {
      children
    } = this.props

    return (
      <DefaultLayout className='LandingLayout'>
        <Main className='LandingLayout-main'>
          <Hero/>

          <MaxWidth size='xl'>
            <BreakoutContainer>
              { children }
            </BreakoutContainer>
          </MaxWidth>
        </Main>
      </DefaultLayout>
    )
  }
}