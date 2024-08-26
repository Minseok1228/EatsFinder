export const addDashes = (phoneNumber: string) => {
  const part1 = phoneNumber.slice(0, 3);
  if (part1 === '+82') {
    const part1 = '0' + phoneNumber.slice(3, 5);
    const part2 = phoneNumber.slice(5, 9);
    const part3 = phoneNumber.slice(9, 13);
    const formattedNumber = [part1, part2, part3].join('-');
    return formattedNumber;
  }
  const part2 = phoneNumber.slice(3, 7);
  const part3 = phoneNumber.slice(7, 11);
  const formattedNumber = [part1, part2, part3].join('-');
  return formattedNumber;
};
export const deleteDashes = (phoneNumber: string) => {
  const socialChecker = phoneNumber.slice(0, 3);
  if (socialChecker === '+82') {
    return phoneNumber.split('-').join('').slice(3, 14);
  }

  return phoneNumber.split('-').join('');
};
