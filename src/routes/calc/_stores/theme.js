import { browser } from "$app/env"
import { writable } from "svelte/store"

const noop = () => { };
const themes = ['dark', 'light', 'purp']

const { subscribe, set: _set } = writable(themes[0], set => {
  if (!browser) return noop;

  let saved = localStorage.getItem('calc-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  set(themes[saved ?? +prefersLight]);
  return noop;
});

export const theme = {
  subscribe,
  set: ind => {
    localStorage.setItem('calc-theme', ind);
    _set(themes[ind])
  },
  available: () => themes
}