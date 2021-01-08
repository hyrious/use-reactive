/**
 * Use vue3's reactive in react hooks.
 * @param state - will be passed to vue's reactive()
 */
export function useReactive<S extends object>(state: S): S;
