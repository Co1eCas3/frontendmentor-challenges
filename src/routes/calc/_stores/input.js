import { writable } from "svelte/store";


const { subscribe, update, set } = writable('');

export const input = {
  subscribe,
  concat: (val) => update($ => {
    if (val === '.') return $.concat(val)
    return parseFloat($.replace(/,/g, '').concat(val)).toLocaleString()
  }),
  del: () => update($ => {
    let _new = $.slice(0, -1);

    if (!_new) return '';

    if (/\.$/.test(_new))
      _new = parseFloat(_new.slice(0, -1).replace(/,/g, '')).toLocaleString().concat('.');
    else
      _new = parseFloat(_new.replace(/,/g, '')).toLocaleString();

    return _new;
  }),
  reset: () => set(''),
}