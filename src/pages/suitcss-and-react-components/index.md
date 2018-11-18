---
title: SuitCSS and Styling React Components
date: '2018-11-05'
---

[SuitCSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) is a popular CSS naming convention that has been overshadowed by its more popular cousin, [BEM](http://getbem.com/naming/). Prior to the rise of modern frontend frameworks like React and Vue, BEM gets the job done in a clear (if a bit verbose) manner. However, it feels ill-suited to the structure that these frameworks provide now provide.

## What About Inline Styles?

From my perspective, inline styles are not as offensive as the frontend community initially thought. That being said, there are some key disadvantages:

1. Handling media queries without JavaScript,
2. Keeping component templates 'clean' with regards to complex rendering logic,
3. Unusual `camelCase: 'syntax'` (for example, hyphenated CSS properties like `border-top` become `borderTop: '1px solid black'` and `borderTop: 0`) that is unfamiliar to designers who code

## Trying out BEM

BEM works just fine with traditional HTML or other templating languages. When applied to React, however, it just doesn't 'feel' right! The React docs dictate that custom component names [must be capitalized](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized), yet BEM [discourages this practice](https://en.bem.info/methodology/naming-convention/#naming-rules). This misalignment could result in code that looks like this.

```jsx
import React from 'react'
import './my-button.css'

export default class MyButton extends React.Component {
  render() {
    return (
      <button className={`my-button my-button--${this.props.type}`}>
        <span className="my-button__content">{this.props.children}</span>
      </button>
    )
  }
}
```

```css
.my-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid #000;
}

.my-button--primary {
  background-color: blue;
  color: white;
  border-color: blue;
}

.my-button--secondary {
  background-color: white;
  color: blue;
  border-color: blue;
}
```

This certainly works! The CSS is clearly structured and has a low level of specificity. But it _feels_ a little funky. Our files are a little messier for one:

```
+-- MyButton/
|   +-- MyButton.jsx
|   +-- my-button.css
```

Let's say we then go on to introduce some tests and some component documentation.

```
+-- MyButton/
|   +-- MyButton.jsx
|   +-- MyButton.test.js
|   +-- MyButton.md
|   +-- my-button.css
```

Our little friend `my-button.css` is the odd man out!

## Suit to the Rescue

Let's try that again with the same component, but using SuitCSS instead of BEM.

```jsx
import React from 'react'
import './MyButton.css'

export default class MyButton extends React.Component {
  render() {
    return (
      <button className={`MyButton MyButton--${this.props.type}`}>
        <span className="MyButton-content">{this.props.children}</span>
      </button>
    )
  }
}
```

```css
.MyButton {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid #000;
}

.MyButton--primary {
  background-color: blue;
  color: white;
  border-color: blue;
}

.MyButton--secondary {
  background-color: white;
  color: blue;
  border-color: blue;
}
```

Not only do our class names map 1 to 1 with our component name, our files look really nice and neat.

```
+-- MyButton/
|   +-- MyButton.jsx
|   +-- MyButton.test.js
|   +-- MyButton.md
|   +-- MyButton.css
```

## Conclusion

Choosing between BEM and SuitCSS isn't going to make or break a project. That being said, next time you're styling React components, give SuitCSS a whirl and see how it feels! From a [code smell](https://en.wikipedia.org/wiki/Code_smell) perspective, SuitCSS meets a need that BEM doesn't, particularly when paired with React.
