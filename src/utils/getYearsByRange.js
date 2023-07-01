/**
 * The function `getYearsByRange` returns an array of years within a specified range.
 * @param minYear - The minimum year in the range.
 * @param maxYear - The maximum year in the range.
 */
export const getYearsByRange = (minYear, maxYear) =>
  Array.from({ length: maxYear - minYear + 1 }, (_, index) => index + 1980)
