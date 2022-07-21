import { writable } from "svelte/store";

const { subscribe, update, set } = writable([]);

export const operands = {
  subscribe,
  concat: (newInput = null) => {
    newInput = newInput && parseFloat(newInput.replace(/,/g, '')).toLocaleString()
    update($ => {
      if (!newInput) return [...$, $[$.length - 1]];
      return [...$, newInput];
    })
  },
  reset: () => set([])
}