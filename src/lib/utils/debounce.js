export function debounce(fn, wait) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => await fn(...args), wait)
  }
}