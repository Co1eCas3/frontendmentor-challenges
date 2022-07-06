export const getDateInfo = (D = new Date()) => ([
  D.getFullYear(),
  D.getMonth(),
  D.getDate(),
  D.getHours,
  D.getMinutes()
]);