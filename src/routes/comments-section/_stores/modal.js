import { writable } from "svelte/store";


const { subscribe, set } = writable({ open: false });

export const modal = {
  subscribe,
  open(id) { set({ open: true, id }) },
  close() { set({ open: false }) }
}