import React from 'react'
import { Icon } from 'react-icons-kit'

export default class HeroLinkIcon extends React.Component {
  render() {
    const {
      icon,
      href
    } = this.props

    return (
      <a className='Hero-iconLink' href={ href } rel='noopener'>
        <Icon
          className='Hero-icon'
          size={ 'calc(2rem + 1.5vw)' }
          icon={ icon }
        />

        <span className='Hero-iconUnderlay' role='presentation'></span>
      </a>
    )
  }
}