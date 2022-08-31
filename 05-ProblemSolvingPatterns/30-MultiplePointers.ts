/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or unfedined if a pair does not exist
 *
 */

/**
 * Naive solution
 * As nested loops, O[n^2]
 *
 * @param {Array<number>} array
 * @return {boolean}
 */

export function sumZeroNaive(array: number[]): [number, number] | undefined {
  // Loop through the array
  for (let index in array) {
    const main = array[Number(index)];
    // Loop through th array from this index onwards
    for (let i = Number(index) + 1; i < array.length; i++) {
      // Check if current index value and second loop value sums up to zero
      if (main + array[i] === 0) {
        return [main, array[i]];
      }
    }
  }
  return undefined;
}

/**
 * Use pointers
 *
 * @param {Array<number>} array
 * @return {boolean}
 */

export function sumZero(array: number[]): [number, number] | undefined {
  // Array length must be more than 2
  if (array.length < 2) {
    return undefined;
  }

  // Left pointer and right pointer
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    }

    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
