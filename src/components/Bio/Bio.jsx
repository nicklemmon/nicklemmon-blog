import React from 'react'

import Card from '../Card/Card'
import Heading from '../Heading/Heading'
import LongForm from '../LongForm/LongForm'

import Me from './me.png'
import './Bio.css'

export default class Bio extends React.Component {
  render() {
    return (
      <Card className='Bio'>
        <div className='Bio-imgContainer'>
          <img
            className='Bio-img'
            src={ Me }
            alt='Nick Lemmon'
          />
        </div>

        <LongForm className='Bio-content'>
          <Heading level='4'>About Me</Heading>

          <p>I'm a frontend developer on Durham, North Carolina who also happens to have an <a rel='noopener' href='https://en.wikipedia.org/wiki/Master_of_Social_Work'>MSW</a>.</p>

          <p>I like design systems, making UI that's accessible to all users, and my dog.</p>
        </LongForm>
      </Card>
    )
  }
}