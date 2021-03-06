// @ts-check
import { useEffect, useRef, useState } from "react";
import { reactive, watchEffect } from "@vue/runtime-core";

/**
 * touch proxy.key by ref.key, to let watchEffect know
 * @param {object} ref reference plain object
 * @param {object} proxy the vue proxy object
 */
function touch(ref, proxy) {
  for (const key in ref) {
    const refer = ref[key];
    const proxied = proxy[key];
    if (refer instanceof Object) {
      touch(refer, proxied);
    }
  }
}

/**
 * use vue3's reactive in react hooks
 * @param {object} state - will be passed to vue's reactive()
 */
export function useReactive(state) {
  const counter = useRef(0);
  const [, forceUpdate] = useState(0);
  const react = useRef(reactive(state));
  useEffect(
    () =>
      watchEffect(() => {
        touch(state, react.current);
        if (counter.current === 0) {
          counter.current++;
        } else {
          forceUpdate((e) => ~e);
        }
      }),
    []
  );
  return react.current;
}
