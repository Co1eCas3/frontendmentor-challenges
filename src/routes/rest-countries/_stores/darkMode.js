import { browser } from "$app/env";
import { writable } from "svelte/store";


const { subscribe, update } = writable(false, set => {
  if (!browser) return () => { };

  let darkModeSaved = localStorage.getItem('dark-mode-enabled');
  if (darkModeSaved != null) darkModeSaved = darkModeSaved === 'true';

  let prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  set(darkModeSaved ?? prefersDarkTheme)
  return () => { }
});

export const darkMode = {
  subscribe,
  toggle() {
    update($ => {
      $ = !$;
      localStorage.setItem('dark-mode-enabled', $);
      return $;
    })
  }
}