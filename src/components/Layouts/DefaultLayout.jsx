import React from 'react'
import classNames from 'classnames'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './global.css'
import './DefaultLayout.css'

class DefaultLayout extends React.Component {
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
      <div className={ classNames( 'DefaultLayout', this.props.className ) }>
        <Header className='DefaultLayout-header'/>

        { children }

        <Footer className='DefaultLayout-footer' />
      </div>
    )
  }
}

export default DefaultLayout
