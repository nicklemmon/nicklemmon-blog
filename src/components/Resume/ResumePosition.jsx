import React from 'react'

import Heading from '@components/Heading/Heading'
import Subdued from '@components/Subdued/Subdued'
import LongForm from '@components/LongForm/LongForm'
import ScreenReaderOnly from '@components/ScreenReaderOnly/ScreenReaderOnly'

import './Resume.css'

function ResumePosition( props ) {
  const {
    heading,
    subheading,
    children,
    startDate,
    endDate
  } = props

  return (
    <div className="Resume-position">
      <div className="Resume-positionFirstHalf">
        <div className="Resume-positionHeadingWrapper">
          <Heading level="4" className="Resume-positionSuperheading">{ subheading }</Heading>

          <Heading level="5" className="Resume-positionHeading">{ heading }</Heading>
        </div>
        
        <Subdued className="Resume-dateRange">
          <span className="Resume-date">{ startDate }&nbsp;</span>

          <span>&mdash;</span>

          <ScreenReaderOnly>through</ScreenReaderOnly>

          <span className="Resume-date">&nbsp;{ endDate }</span>
        </Subdued>
      </div>
      
      <div className="Resume-positionSecondHalf">
        <LongForm>
          { children }
        </LongForm>
      </div>
    </div>
  )
}

export default ResumePosition;
