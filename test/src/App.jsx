import React from "react";
import { useReactive } from "../../dist/index.mjs";

export function App() {
  const state = useReactive({ count: 0, nested: { count: 0 } });
  return (
    <button onClick={() => state.nested.count++}>{state.nested.count}</button>
  );
}
