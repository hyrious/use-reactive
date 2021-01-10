## useReactive

Use vue's reactivity api in react.

### Usage

```jsx
import { useReactive } from "@hyrious/use-reactive";
function Counter() {
  const state = useReactive({ count: 0 });
  return <button onClick={() => state.count++}>{state.count}</button>;
}
```

### How it works?

Vue's reactivity api does the trick:

```js
import { reactive, watchEffect } from "vue";
const state = reactive({ count: 0 });
watchEffect(() => {
  console.log(state.count);
  // accessing "state.count" triggers a proxy's get handler.
  // vue depends on the proxy to track it, so the next time
  // state.count changes, watchEffect will run again.

  // if we do nothing here, watchEffect will loop run until
  // it find some deps. that's it.
});
```

### License

MIT @ [hyrious](https://github.com/hyrious)
