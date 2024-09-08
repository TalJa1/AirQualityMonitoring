export const getMonthYearHomeChart = (offset: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + offset);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${year}`;
};
