---
title: Accessible Buttons that Look Like Links
date: '2020-08-25'
---

Semantically, the anchor tag should only be used when clicking on said element navigates the user to a new page. Frequently, developers utilize the `<a>` for clickable elements, even elements that open modals or trigger other state changes within the current page.

When the wrong element is used, screen reader and keyboard-only users have a tremendous amount of trouble interacting with the page. With React, for example, it's very easy to add an `onClick` handler to an anchor tag that controls page state rather than the current page. Take the following example:

```jsx
import React, { useState } from 'react'
import { Modal } from 'src/components'

function MyPage() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <h1>I am the best page in the universe</h1>

      <a onClick={() => setModalOpen(true)}>Learn More About The Best Page</a>

      {isModalOpen && (
        <Modal>
          <p>
            Seriously, this is the best page in the universe. If only a
            keyboard-only user could use it.
          </p>

          <a onClick={() => setModalOpen(false)}>Close</a>
        </Modal>
      )}
    </div>
  )
}
```

Though clicking on "Learn More About The Best Page" will open the modal, there are multiple problems with this implementation:

1. The anchor tag has the incorrect `role` to describe its behavior - it should either be a `<button>` element or have `role="button"`
2. Any anchor tag without an `href` attribute is not keyboard focusable

## Solutions

### Just Use a Button

Many accessibility advocates, having encountered many inaccessible implementations of button-like links that are not actually links, advocate for a blanket ban on the use of the anchor tag when they do not navigate to a new page. Their argument is generally correct. Where possible, simply use a `<button/>` instead of an anchor tag for interactive elements that do not navigate the user to a new page.

That being said, there are instances in which a button that looks like a link can be beneficial to the end user. Say, for example, within a paragraph of text a user encounters a link that triggers an action on the page. Depending on your product's CSS architecture, introducing a `<button/>` could wreak havoc from a styling perspective.

### Use a Custom Component

In these scenarios, creating a re-usable component is the best way to prevent the introduction of inaccessible links in to your product.

In order for a button to be interpreted correctly by screen readers _and_ be usable for keyboard-only users, our `ButtonLink` component must have two key features:

1. It must be a button semantically and
2. It must be keyboard focusable by having a valid `href` attribute

```jsx
import React from 'react'

function ButtonLink({ children, onClick }) {
  const handleClick = e => {
    e.preventDefault()
    onClick()
  }

  return (
    <a href="#" role="button" onClick={handleClick}>
      {children}
    </a>
  )
}
```

Critically, this component provides a valid `href`, though the default browser scrolling behavior must be prevented. In this example, we are simply passing in the click event and invoking `e.preventDefault()` before invoking the passed in `onClick` handler.

### Prevent Future Mistakes

This solution works well, however, there is still some risk that new developers working on your product might introduce inaccessible button-like links in the future. In order to help reduce that risk, introduce a simple console warning in the event an `onClick` handler is passed to an anchor tag inappropriately. Say, for example, our product has a generic, re-usable, `PageLink` component:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'

function PageLink(props) {
  const { to, children } = props

  if (props.onClick) {
    console.warn(
      'Invalid prop `onClick` - avoid attaching click handlers to links. Use the `ButtonLink` component instead.'
    )
  }

  return <Link to={to}>{children}</Link>
}
```

## Wrapping Up

It's important to ensure that _all_ elements within a product can be both interpreted by screen readers _and_ remain interactive for keyboard-only users. Fortunately, by creating a custom, re-usable component and by providing informative warnings, we can greatly reduce the risk of introducing common accessibility bugs.
