import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Container from '../components/Container/Container'

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

          <Container>
            { children() }
          </Container>
        </Main>

        <Footer/>
      </div>
    )
  }
}

export default Template
