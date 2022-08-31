/**
 *
 * Given two strings, write a function to determine if the second string is an anagram of the first
 * Use frequencey counters
 *
 */

module.exports = { validAnagram };

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
export function validAnagram(str1: string, str2: string): boolean {
  // Both strings must have the same lengths
  if (str1.length !== str2.length) {
    return false;
  }

  // Create two counters objects
  const counter1 = {};
  const counter2 = {};

  // Loop through first string and log number of each letter counter object
  const arr1 = [...str1];
  for (let el of arr1) {
    counter1[el] = (counter1[el] || 0) + 1;
  }

  // Loop through second string and log number of each letter in counter object
  const arr2 = [...str2];
  for (let el of arr2) {
    counter2[el] = (counter2[el] || 0) + 1;
  }

  // Loop through counter object check that both objects match in terms of key and value
  for (let key in counter1) {
    // Check that both object have matching keys
    if (!(key in counter2)) {
      return false;
    }
    // Check that both object have matching values for the matching key
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}
