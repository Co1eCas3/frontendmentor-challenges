const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
];

export const getDayName = (day, shorten = true) => {
  const name = days[day];
  return shorten ? name.slice(0, 3) : name;
}