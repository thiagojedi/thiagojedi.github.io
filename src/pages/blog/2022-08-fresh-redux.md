---
layout: '../../layouts/BlogPost.astro'
title: Using Redux on Islands
pubDate: 28/08/2022
image: /images/bridge.jpg
---

I've been trying to wrap myself around the Island Pattern/Architecture for some time now. The last
piece of the puzzle was state management and how to get the islands to comunicate, a bridge if you
will. And I think I found it.

## New land on sight

Before get into the specifics, I should introduce this "new" architecture.

The _Islands Architecture_ was first introduced by the Etsy architect [Katie
Sylor-Miller][twitter01] and later spread by Jason Miller [on his blog][developit01]. It's fairly
new concept but it's all the rage right now with modern framworks like [Astro][astro01] and others.

The concept by itself is very simple and is very similar to the _microfrontends_ pattern, with the
webpage being static html (the sea) with few pockets of interactivity (the islands). Each island is
self contained, which enables them to be load independently from the others.

## Fresh knowledge

One of the last entries in the "Islands Frameworks" was [Fresh][fresh01] by the devs of
[Deno][deno01], using the [Preact][preact01] component library, which makes the pattern very
simple<u><span title="I know is a little more complicated than that, but bear with me">\*</span></u>:

- A folder for the static content: **routes/**
- A folder for the dynamic content: **islands/**

All the components imported in the routes' files will be rendered to static html unless it's from
the island folder. The catch is, for this to work, there are [a few restrictions][fresh02] for the
type of props (parameters) you may pass to those islands, with the major one been you cannot pass it
a child component.

Which lead me to a question: what if I need the same data in two (or more) islands? Should I need to
fetch it in the backend? What about client only data like authentication status? Is there a way for
the islands to send data to each other?

As I was researching this topic, I was glad to found out that [I'm not the only one][github01]. The
best solution I came about was from [Carlo Zottman][carlo01] (a.k.a. [@czottmann][github03]) using
[Statery][github02]. So I said to myself _what a wonderful world..._, I mean, I think I can do this
with Redux too!

## Making bridges

Let's start creating a new fresh project with

> deno run -A -r https://fresh.deno.dev fresh-with-redux

The we add the redux toolkit to the `import_map.json`:

```json
{
  "imports": {
    // ... other deps
    "@reduxjs/toolkit": "https://cdn.skypack.dev/@reduxjs/toolkit?dts"
  }
}
```

With that, we can create our reducer and configure our store:

_counter_reducer.ts_

```typescript
import { createReducer } from '@reduxjs/toolkit';

const initialState = { quantity: 0 };

const counterReducer = createReducer(initialState, {
  increment: (state, action) => ({
    quantity: state.quantity + (action.payload ?? 1),
  }),
  decrement: (state, action) => ({
    quantity: state.quantity - (action.payload ?? 1),
  }),
  reset: () => initialState,
});

export default counterReducer;
```

_store.ts_

```typescript
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter-reducer.ts';

const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

export default store;
```

By the way, for the purposes of this post, I'll be skipping the type definitions.

Now that we have our store configured, there are two ways to integrate with our islands.

### React-Redux

The first one, is integrating with [react-redux][redux01], using the context and hooks provided by
the lib.

Add the following to the _import_map.json_:

```json
{
  "imports": {
    // ... other deps
    "react-redux": "https://esm.sh/react-redux@8.0.2?alias=react:preact/compat&external=preact/compat"
  }
}
```

Now change the `Counter` island to access the store instead of having a useState hook.

_/islands/Counter.tsx_:

```tsx
// ... other imports and stuff
import { useSelector, useDispatch } from 'react-redux';

export default function Counter(props: CounterProps) {
  // Instead of this:
  // const [count, setCount] = useState(props.start);
  // Add the following:
  const count = useSelector((state) => state.count.quantity);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      {/* Delete this 
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      */}
      <Button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-1</Button>
      <Button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+1</Button>
    </div>
  );
}
```

Now, if you try to run your project, you'll get an error. That's because, for each island, you'll
need to **provide** that component tree with a `store`. Let's to that for the Counter Island

```tsx
// Add the import for the store
import store from '../store.ts';

// remove the export and default flags here
function Counter(props: CounterProps) {
  // ... the counter we have so far
}

export default function CounterIsland(props: CounterProps) {
  return (
    <Provider store={store}>
      <Counter {...props} />
    </Provider>
  );
}
```

That's it! Now your island is using the global store that is shared! Try to create other islands
using this pattern and you'll see the same values across all islands!

### Binding hooks

The problem with the previous approach is that you'll have use a provider for every island, and you
cannot access the store in the "root" component for that island. For simple components, this might
be overkill. Let's remove the needing of a `Provider`.

Create a file called _hooks.ts_, where we'll be creating our own `useSelectors` and `useDispatch`
hooks.

```ts
import store from './store.ts';

export function useBindedSelector(fn) {
  const [result, setResult] = useState(fn(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setResult(fn(store.getState()));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return result;
}

export const useBindedDispatch = () => store.dispatch;
```

With this, you may use the `useBindedSelector` and `useBindedDispatch` instead of the default hooks,
without a `Provider`.

_/islands/Counter.tsx_:

```tsx
// ... other imports and stuff
import { useBindedSelector as useSelector, useBindedDispatch as useDispatch } from '../hooks.ts';

export default function Counter(props: CounterProps) {
  // Instead of this:
  // const [count, setCount] = useState(props.start);
  // Add the following:
  const count = useSelector((state) => state.count.quantity);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      {/* Delete this 
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      And write the following: */}
      <Button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-1</Button>
      <Button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+1</Button>
    </div>
  );
}
```

## Conclusion

That's it, folks. Sure, I skipped some steps along the way, but I believe with this you may have a
idea on how to integrate your islands using redux.

I made a [github repository][github04] using both approaches in this post, showing how to use them
side-by-side along with the correct type definitions. If you have any questions, open a issue there
or contact me on twitter.

Now, go write some fresh new code!

[astro01]: http://astro.build
[carlo01]: https://zottmann.org/2022/07/31/how-to-use.html
[deno01]: http://deno.land
[developit01]: https://jasonformat.com/islands-architecture/
[fresh01]: http://fresh.deno.dev
[fresh02]: https://fresh.deno.dev/docs/concepts/islands
[github01]: https://github.com/denoland/fresh/discussions?discussions_q=state
[github02]: https://github.com/hmans/statery
[github03]: https://github.com/czottmann
[github04]: https://github.com/thiagojedi/fresh-with-redux
[preact01]: https://preactjs.com
[redux01]: https://react-redux.js.org
[twitter01]: https://twitter.com/ksylor
