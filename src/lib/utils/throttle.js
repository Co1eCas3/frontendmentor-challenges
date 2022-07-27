export function throttle(fn, wait) {
  let pause = false;
  return (...args) => {
    if (pause) return;
    pause = true;
    setTimeout(() => {
      fn(...args);
      pause = false;
    }, wait);
  }
}