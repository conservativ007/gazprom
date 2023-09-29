export const convertToDate = (dateString) => {
  const parts = dateString.split('.');
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]) - 1; // Месяцы в объекте Date начинаются с 0
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  }
  return null;
};
