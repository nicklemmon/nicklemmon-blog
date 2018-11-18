import React from 'react'
import Button from './Button.jsx'
import renderer from 'react-test-renderer'

it('renders button type correctly', () => {
  const tree = renderer.create(<Button type="primary">About</Button>).toJSON()

  expect(tree).toMatchSnapshot()
})

it('renders button href correctly', () => {
  const tree = renderer
    .create(
      <Button type="primary" to="/about">
        About
      </Button>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
