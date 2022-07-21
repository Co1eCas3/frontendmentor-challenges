import { browser } from "$app/env"
import { writable } from "svelte/store"

const noop = () => { };
const themes = ['dark', 'light', 'purp']

const { subscribe, update, set } = writable(themes[0], set => {
  if (!browser) return noop;

  let saved = localStorage.getItem('calc-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  set(themes[saved ?? +prefersLight]);
  return noop;
});

export const theme = {
  subscribe,
  set,
  available: () => themes,
  switch: () => {
    let next;
    update($theme => {
      let curInd = themes.findIndex(theme => theme === $theme);
      next = curInd === themes.length - 1 ? 0 : ++curInd;
      return themes[next];
    });

    localStorage.setItem('calc-theme', next);
  }
}