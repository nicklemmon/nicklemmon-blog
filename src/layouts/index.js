import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import BreakoutContainer from '../components/BreakoutContainer/BreakoutContainer'
import MaxWidth from '../components/MaxWidth/MaxWidth'

import './global.css'

class Template extends React.Component {
  render() {
    const {
      location, 
      children 
    } = this.props
    
    let rootPath = `/`

    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        <Header/>

        <Main>
          <Hero/>

          <MaxWidth size='xl'>
            <BreakoutContainer>
              { children() }
            </BreakoutContainer>
          </MaxWidth>
        </Main>

        <Footer/>
      </div>
    )
  }
}

export default Template
