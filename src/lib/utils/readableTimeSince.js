import { getDateInfo } from "./getDateInfo";

const today = Date.now();

export const readableTimeSince = (D) => {
  const t = D.getTime();

  const diff = today - t;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  switch (true) {
    case years > 1:
      return `${years} years ago`;
    case months > 11:
      return 'A year ago';
    case months > 1:
      return `${months} months ago`;
    case weeks > 3:
      return 'A month ago';
    case weeks > 1:
      return `${weeks} weeks ago`;
    case days > 6:
      return 'A week ago';
    case days > 1:
      return `${days} days ago`;
    case hours > 23:
      return 'A day ago';
    case hours > 1:
      return `${hours} hours ago`;
    case minutes > 50:
      return `An hour ago`;
    case minutes > 1:
      return `${minutes} minutes ago`;
    case seconds > 50:
      return 'A minute ago';
    default:
      return 'A few moments ago';
  }
}