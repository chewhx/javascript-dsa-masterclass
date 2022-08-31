/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negeative numbers in the array, but it will always be sorted.
 */

/**
 *
 * @param {Array<number>} array
 * @returns {number}
 */
export function countUniqueValuesNaive(array: number[]): number {
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;
  const obj = {};
  array.forEach((el) => (obj[el] = obj[el] + 1 || 1));
  return Object.keys(obj).length;
}

/**
 * Pointer solution
 * @param {Array<number>} arr
 * @returns {number}
 */
export function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;

  // Make a new array, because we will be mutating the original values
  const array = [...arr];

  // Set points at index 0 and 1
  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 < array.length) {
    let value1 = array[pointer1];
    let value2 = array[pointer2];
    // If both values are equal, increase pointer 2
    if (value1 === value2) pointer2++;
    // if both values are not equal, increase pointer 1 and make new index value = value at pointer 2
    if (value1 !== value2) {
      pointer1++;
      array[pointer1] = array[pointer2];
    }
    // Repeat until pointer 2 < array.length
  }
  // return index of p1 + 1, for the number of unique values documented at the beginning of the array
  return pointer1 + 1;
}
