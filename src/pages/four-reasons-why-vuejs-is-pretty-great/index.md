---
title: Four Reasons why VueJS is Pretty Great
date: '2019-04-07'
---

[Vue.js](https://vuejs.org/) is a pretty remarkable frontend framework that is simultaneously powerful and relatively straightforward to wrap one's mind around. I wanted to highlight four features that VueJS really nails that separate it from the pack.

## The List!

### 1. Component Organization

[Single file components](https://vuejs.org/v2/guide/single-file-components.html) are amazing! Combining styling, templating, and scripting all in one, neatly organized file allows for total component modularity. Though a similar outcome can be accomplished with React, React's lack of opinion with regards to how components are styled means each project's components might be organized in fairly different manor, or may even rely on a third party library to help enforce a consistent structure.

### 2. Styling

Speaking of styling, Vue offers a very straight forward means by which to style components, and encourages developers to do so in a way that is consistent with the recent history of CSS development best practice. This now only helps with the modularity of a component and its styles, but is also very approachable, particularly for web developers who find themselves on the CSS and HTML site of what Chris Coyier terms ["The Great Divide"](https://css-tricks.com/the-great-divide/).

In addition, by adding the `scoped` attribute to the `<style></style>` of a single file component, component styling remains encapsulated, reducing the risk of escalation with regards to CSS rule specificity.

### 3. Passing Arbitrary Attributes

With React, in order to pass arbitrary attributes to a component instance, enabled manually:

```javascript
return <div { ...props }></div>
```

And when appending classes to an existing set of component classes, the component author will typically leverage an NPM package like [classnames](https://www.npmjs.com/package/classnames). 

```javascript
import classNames from 'classnames'

return <div className={ classNames( 'my-component', props.className ) }></div>
```

With Vue.js, if a developer wants to pass in an arbitrary attribute or add a class to a component instance, it can be done on the fly:

```html
<template>
  <MyComponent class='another-class' data-random-attribute='random-value'></MyComponent>
</template>
```

### 4. Named Slots

Using slots with Vue.js is as easy as writing `<slot></slot>`. Most templating languages handle this concept, however, from my experience, very few allow for the usage of multiple, named slots for a single templated component. This can come in handy particularly when somewhat complex `aria` associations are needed between slotted children.

Consider a [collapsible UI component](https://www.nicklemmon.com/building-an-accessible-collapsible-element/). This sort of a UI consists of a button and a content container that. Due to the complexity of the required `aria` associations between an element, using named slots abstracts away this complexity.

```html
<template>
  <Collapsible id='my-collapsible'>
    <div slot='button'>I am a collapsible button</div>

    <p slot='content'>I am some content inside the content of the collapsible.</p>
  </Collapsible>
</template>
```

Which would render to:

```html
<div id='my-collapsible'>
  <button id='my-collapsible-button' aria-controls='my-collapsible-content'>
    <div>I am a collapsible button</div>
  </button>

  <div id='my-collapsible-content'>
    <p>I am some content inside the content of the collapsible.</p>
  </div>
</div>
```

## Conclusion

VueJS does not reinvent the wheel when it comes to frontend frameworks, however, has some killer features that do offer some nice quality-of-life separation from its competitors.

