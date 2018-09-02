import React from 'react'
import Link from 'gatsby-link'

import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

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

        <Hero/>
        
        { children() }

        <Footer/>
      </div>
    )
  }
}

export default Template
