/* Implement a function called countUniqueValues, which accepts s sorted array, and counts the unique values in the array. There can be negeative numbers in the array, but it will always be sorted. */

function countUniqueValues_naive(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;
  let obj = {};
  array.map((el) => (obj[el] = obj[el] + 1 || 1));
  return Object.keys(obj).length;
}

// pointer solution

function countUniqueValues(array) {
  // if array has no values, return 0
  if (array.length === 0) return 0;
  // set pointer 1 to index 0
  let p1 = 0;
  // set pointer 2 to index 1
  let p2 = 1;
  while (p2 < array.length) {
    // check if two values are equal
    let isEqual = array[p1] === array[p2];
    // if so increase pointer 2
    if (isEqual) p2++;
    // if not increase pointer 1 and make new index value = value at pointer 2
    if (!isEqual) {
      p1++;
      array[p1] = array[p2];
    }
    // repeat until pointer 2 < array.length
  }
  // return index of p1 + 1, for the number of unique values documented at the beginning of the array
  return p1 + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([2, 3 ])); // 1
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
