/* 

Write a function which takes two array, and check if the second array contains the square of every values in first array.
They should have the same number of elements. And the square number cannot used for the same value in first array

*/

/**
 * Naive solution
 * As nested loops, this has quadratic notation
 *
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 * @return {boolean}
 */

export function sameNaive(arr1: number[], arr2: number[]): boolean {
  // Both arrays must have same lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Loop through each number in array 1
  for (let el1 of arr1) {
    // Square each number and put into a variable
    const el1Squared = Math.pow(el1, 2);

    // Check if the new squared number exist in array 2
    const indexOf = arr2.indexOf(el1Squared);
    if (indexOf === -1) {
      return false;
    }
    // If exist, splice the number from array 2
    arr2.splice(indexOf, 1);
  }

  return true;
}

/**
 * Solution - Frequency counter
 * O(n) notation
 * Use object to breakdown the contents to compare
 *
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 * @return {boolean}
 */

export function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Set up two counter objects
  const counter1 = {};
  const counter2 = {};

  // Loop through each arr and create key: count for each item in array
  for (let el of arr1) {
    counter1[el] = (counter1[el] || 0) + 1;
  }

  for (let el of arr2) {
    counter2[el] = (counter2[el] || 0) + 1;
  }

  // Loop through keys in counter 1
  for (let c1Key in counter1) {
    const c1KeySquared = Number(c1Key) ** 2;
    // Check if the square of key in counter 1 exists in keys of counter 2
    if (!(c1KeySquared in counter2)) return false;
    // Check if the value of the squared key in counter2 === the value of the key in counter1
    if (counter1[c1Key] !== counter2[c1KeySquared]) return false;
  }

  return true;
}
