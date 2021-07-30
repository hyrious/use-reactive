import React from "react";
import { useReactive } from "@hyrious/use-reactive";

export function App() {
  const state = useReactive({ count: 0, nested: { count: 0 } });
  console.log("render App");
  return (
    <button onClick={() => state.nested.count++}>{state.nested.count}</button>
  );
}
