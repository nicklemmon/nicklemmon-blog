---
title: Building an Accessible Collapsible Element
date: "2018-11-10"
---

When it comes to JavaScript-based interactions, an accessible user experience is not a given. Even simple interactions require a certain structure.

## Enter ARIA

For those new to developing with accessibility in mind, `aria-` attributes are used to add additional descriptive information regarding the current state of a component, particularly components that change dynamically based on user interaction.

### Using the aria-expanded Attribute

`aria-expanded` informs screen readers that an element is expandable and/or collapsible. Though this is often conveyed visually, if `aria-expanded` does not describe the change on the page, then the change is not communicated at all to users who cannot see said change.

Here is a simple HTML example of an accordion in the collapsed state:

```html
<div class='accordion'>
  <button aria-expanded='false' class='accordion__button'>
    Example Accordion Button
  </button>

  <div class='accordion__content' style='display: none;'>
    <p>Here is some initially hidden content.</p>
  </div>
</div>
```

And another example, this time in the expanded state:

```html
<div class='accordion'>
  <button aria-expanded='true' class='accordion__button'>
    Example Accordion Button
  </button>

  <div class='accordion__content' style='display: block;'>
    <p>Here is some initially hidden content.</p>
  </div>
</div>
```

### Using the aria-controls Attribute

`aria-controls` can be used in conjunction with `aria-expanded` to properly associate the content of the expanding and collapsing element with the triggering button element. `aria-controls` must have a value that matches the `id` of the controlled element. *Remember* it is *critical* that *every* ID on a page is unique!

```html
<div class='accordion'>
  <button aria-expanded='false' class='accordion__button' aria-controls='example-id'>
    Example Accordion Button
  </button>

  <div class='accordion__content' style='display: none;' id='example-id'>
    <p>Here is some initially hidden content.</p>
  </div>
</div>
```

### Working Examples

* The WAI-ARIA authoring group has provided [this example](https://www.w3.org/TR/wai-aria-practices/examples/disclosure/disclosure-img-long-description.html)
* and I built an example [on CodePen](https://codepen.io/nicklemmon/pen/wJXadm) awhile back using [Pug.js](https://pugjs.org/).

## Conclusion

When building stateful components, its important to ensure that these states are adequately perceivable for all users. In fact, in order to meet the standards set out by the Web Content Accessibility Guidelines (WCAG), all page behavior and content *must* first be [perceivable](https://www.w3.org/TR/WCAG21/#perceivable) to all users.


