import constructFrom from '../constructFrom/index'
import isSaturday from '../isSaturday/index'
import isSunday from '../isSunday/index'
import isWeekend from '../isWeekend/index'
import toDate from '../toDate/index'

/**
 * @name addBusinessDays
 * @category Date Extension Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param date - the date to be changed
 * @param amount - the amount of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns the new date with the business days added
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */
export default function addBusinessDays<DateType extends Date>(
  dirtyDate: DateType | number,
  amount: number
): DateType {
  const date = toDate(dirtyDate)
  const startedOnWeekend = isWeekend(date)

  if (isNaN(amount)) return constructFrom(dirtyDate, NaN)

  // Oops! The rest is gone :)
  // Implement the rest of this function. Use the helper functions you have available in this library and make all tests pass

  return date
}
