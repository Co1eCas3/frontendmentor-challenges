const seconds = secs => 1000 * secs;
const minutes = mins => seconds(60) * mins;
const hours = hrs => minutes(60) * hrs;
const days = days => hours(24) * days;

const all = ([d, h, n, s]) => (
  days(d) + hours(h) + minutes(n) + seconds(s)
)

export const addTime = {
  seconds,
  minutes,
  hours,
  days,
  all
}