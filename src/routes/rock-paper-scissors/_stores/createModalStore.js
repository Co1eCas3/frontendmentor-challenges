import { writable } from "svelte/store";

export function createModalStore() {
  const { subscribe, set } = writable(false);

  return {
    subscribe,
    open() { set(true) },
    close() { set(false) }
  }
}