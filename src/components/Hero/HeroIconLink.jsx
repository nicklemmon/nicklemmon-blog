import React from 'react'
import { Icon } from 'react-icons-kit'

import ScreenReaderOnly from '../ScreenReaderOnly/ScreenReaderOnly'

export default function HeroLinkIcon(props) {
  const { icon, href, screenReaderContent } = props

  return (
    <a className="Hero-iconLink" href={href} rel="noopener">
      <Icon className="Hero-icon" size={'calc(2.5rem + 1.5vw)'} icon={icon} />

      <ScreenReaderOnly>{screenReaderContent}</ScreenReaderOnly>

      <span className="Hero-iconUnderlay" role="presentation" />
    </a>
  )
}
