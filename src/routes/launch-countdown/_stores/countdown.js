import { readable, derived } from "svelte/store";
import { addTime } from '$lib/utils';

let start = addTime.all([8, 23, 55, 41]);

const timeLeft = readable(start, set => {
  const timer = setInterval(() => {
    set(start -= addTime.seconds(1))
    if (start === 0) clearInterval(timer);
  }, 1000);

  return () => clearInterval(timer);
});

export const countdown = derived(
  timeLeft,
  $timeLeft => {
    let days, hrs, mins;

    return [
      (days = Math.floor(($timeLeft) / addTime.days(1))),
      (hrs = Math.floor(($timeLeft - addTime.days(days)) / addTime.hours(1))),
      (mins = Math.floor(($timeLeft - addTime.all([days, hrs, 0, 0])) / addTime.minutes(1))),
      Math.floor(($timeLeft - addTime.all([days, hrs, mins, 0])) / addTime.seconds(1))
    ]
  }
);