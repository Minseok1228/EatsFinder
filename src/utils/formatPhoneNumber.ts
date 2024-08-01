export const addDashes = (phoneNumber: string) => {
  const part1 = phoneNumber.slice(0, 3);
  const part2 = phoneNumber.slice(3, 7);
  const part3 = phoneNumber.slice(7, 11);

  const formattedNumber = [part1, part2, part3].join('-');

  return formattedNumber;
};
export const deleteDashes = (phoneNumber: string) => {
  return phoneNumber.split('-').join('');
};
