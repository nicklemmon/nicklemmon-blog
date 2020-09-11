---
title: XState is Awesome
date: '2020-03-28'
---

After working full time on a fairly large, Redux-driven application at [SparkPost](https://sparkpost.com) over the last few months, I decided to explore what other options exist in the JS ecosystem that help manage application state. Despite its relatively poor reputation, Redux solves a lot of critical problems for our application. At the same time, it manages to have some clear gaps when it comes to the wide variety of states that it ends up managing.

## How Redux Helps

Despite its reputation, Redux is popular for a reason. It solves several key problems:

1. It helps manage shared application state between components,
1. it cleanly manages state changes via actions (which should probably be called events but that name was taken),
1. and it helps restrict possible UI states via reducers which consume and respond to these actions

[XState](https://xstate.js.org/) helps take this a step further by limiting possible application states more explicitly _and_ by providing some extremely helpful visualizations of that state.

## Where XState "Wins"

XState offers an API for managing state via [state machines](https://en.wikipedia.org/wiki/Finite-state_machine) and old concept that has admittedly limited traction within the UI development world.

With a React project, the `@xstate/react` package offers a great hook that can be used to get up and running with XState quickly. The following is a quick example of a checkbox UI:

```javascript
import React from 'react';
import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';

const checkboxMachine = Machine({
  id: 'checkbox',
  initial: 'unchecked',
  states: {
    unchecked: {
      on: { CHECK: 'checked' }
    },
    checked: {
      on: { UNCHECK: 'unchecked' }
    }
  }
});

function MyComponent() {
  const [state, send] = useMachine(checkboxMachine);

  return (
    <button onClick={() => send(state.value === 'checked' ? 'UNCHECK' : 'CHECK')} role="checkbox" aria-checked={state.value === 'checked' ? true : false}>
      {state.value === 'checked' && 'I am checked'}
      {state.value === 'unchecked' && 'I am unchecked'}
    </button>
  );
};
```

This is example is _extremely_ simple, but hopefully demonstrates the underlying power behind XState. With this component, the state can only transition between `unchecked` and `checked`, and this is controlled entirely via sending events. More complex state machines can handle a wide variety of events and states, even offering barriers between states to prevent scenarios that a user should not be able to encounter.

## What's Next?

At the moment I'm working on some light game developing using XState! As I continue to make progress, I'll write more about what I discover both about state machines and about XState specifically.
