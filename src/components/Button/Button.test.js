import React from 'react'
import Button from './Button.jsx'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Button 
        type='primary' 
        to='/about'
      >
        About
      </Button>
    )
    .toJSON()

  expect( tree ).toMatchInlineSnapshot(`
<a
  className="Button Button--primary"
  href="/about"
>
  About
</a>
`);
})
