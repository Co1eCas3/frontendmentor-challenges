import { derived, writable } from "svelte/store";
import { input } from "./input";
import { operands } from './operands'

let storeVals;

const { subscribe, update, set } = writable([], () => derived(
  [input, operands],
  $$ => $$
).subscribe($$ => (storeVals = $$)));

export const operators = {
  subscribe,
  switchLast: (operator) => update($ => {
    $.splice(-1, 1, operator);
    return [...$];
  }),
  concat: (operator = null) => update($ => {
    if (!operator) return [...$, $[$.length - 1]];
    return [...$, operator]
  }),
  reset: () => set([])
}